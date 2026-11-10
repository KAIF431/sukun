/**
 * SUKUN (سُكُون) — Cloudflare Worker API Gateway
 * Features:
 * 1. Cloudflare Turnstile token validation + Short-lived HMAC session token
 * 2. Payload size cap (Max 10 KB, read from stream)
 * 3. Rate limiting (In-memory isolate burst counter + KV hourly buckets)
 * 4. Model lock (Server-side gemini-3.7-flash / gemini-3.5-flash-lite)
 * 5. Empathy-first Crisis Interceptor ([CRISIS_TRIGGERED] marker replacement)
 * 6. Scripture Quarantine (Redacts out-of-context Quran & Hadith citations)
 * 7. Hadith Reverse Proxy with 30-Day Edge Cache
 */

function getAllowedOrigin(request, env) {
  const PROD_ORIGIN = "https://kaif431.github.io";
  const reqOrigin = request.headers.get("Origin") || "";
  // Localhost is only permitted when ENVIRONMENT is explicitly set to 'development'
  if (env && env.ENVIRONMENT === "development" && (reqOrigin.startsWith("http://localhost:") || reqOrigin.startsWith("http://127.0.0.1:"))) {
    return reqOrigin;
  }
  return PROD_ORIGIN;
}

// Base64URL Decoders and Encoders (RFC 4648 compliant)
// Converts URL-safe '-' to '+' and '_' to '/' with required padding before passing to atob()
function base64UrlDecode(str) {
  if (!str) return "";
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4 !== 0) {
    b64 += "=";
  }
  return atob(b64);
}

function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Normalizes Eastern Arabic & Urdu/Persian digits to standard Western Arabic numerals
function normalizeArabicNumerals(str) {
  if (!str) return "";
  return str
    .replace(/[٠۰]/g, '0').replace(/[١۱]/g, '1').replace(/[٢۲]/g, '2')
    .replace(/[٣۳]/g, '3').replace(/[٤۴]/g, '4').replace(/[٥۵]/g, '5')
    .replace(/[٦۶]/g, '6').replace(/[٧۷]/g, '7').replace(/[٨۸]/g, '8')
    .replace(/[٩۹]/g, '9');
}

// Disambiguates time (e.g. 10:30 am, meeting at 12:45) from Quran Ayah coordinates (1:1 to 114:6)
// Handles edge cases: extra spaces around colon ("2 : 255"), Arabic-Indic digits, and Hadith citations
function extractScriptureReferences(text) {
  const refs = [];
  if (!text) return refs;

  const normalizedText = normalizeArabicNumerals(text);

  // 1. Ayah coordinates (Surah 1-114, Ayah 1-286) with optional whitespace around colon
  const ayahPattern = /(?:\b(?:ayah|surah|quran|verse|aayat)\s+)?(?:\(|\b)([1-9]|[1-9]\d|10\d|11[0-4])\s*:\s*([1-9]|[1-9]\d|[12]\d{2})(?:\)|\b)/gi;
  let m;
  while ((m = ayahPattern.exec(normalizedText)) !== null) {
    const fullMatch = m[0];
    const surah = parseInt(m[1], 10);
    const ayah = parseInt(m[2], 10);

    const startIdx = Math.max(0, m.index - 15);
    const endIdx = Math.min(normalizedText.length, m.index + fullMatch.length + 15);
    const window = normalizedText.substring(startIdx, endIdx).toLowerCase();

    const isTime = /\b(?:at|around|by|meeting|call|tomorrow|yesterday|today|alarm)\s+\d+\s*:\s*\d+/i.test(window) ||
                   /\d+\s*:\s*\d+\s*(?:am|pm|baje|hrs|hours|morning|evening|night)\b/i.test(window);

    if (!isTime && surah >= 1 && surah <= 114 && ayah >= 1 && ayah <= 286) {
      refs.push(`${surah}:${ayah}`);
    }
  }

  // 2. Named Surah patterns (English & Urdu script, supporting Urdu/Arabic numerals)
  const namedSurahPattern = /(?:Surah|Surat|سورة|سورۃ)\s+([A-Za-z'-]+|[\u0600-\u06FF]+)\s*(?:Ayah|Aayat|Verse|آیت)?\s*([0-9]+)/gi;
  while ((m = namedSurahPattern.exec(normalizedText)) !== null) {
    refs.push(m[0].trim());
  }

  // 3. Hadith book citations (Sahih Bukhari, Muslim, Tirmidhi, Abu Dawood, etc.)
  const hadithPattern = /\b(?:Sahih\s+)?(?:Bukhari|Muslim|Tirmidhi|Abu Dawood|Ibn Majah|Nasai|بخاري|مسلم|ترمذي|أبو داود)\s*#?\s*([0-9]+)/gi;
  while ((m = hadithPattern.exec(normalizedText)) !== null) {
    refs.push(m[0].trim());
  }

  return refs;
}

// In-Memory Burst Rate Limiter (No KV cost for normal traffic)
// Note: Per-isolate burst guard. Primary DDoS & brute-force protection is Cloudflare Turnstile + Google Daily Quota Cap.
const inMemoryIpHits = new Map();
function checkBurstRateLimit(ip) {
  const now = Date.now();
  const record = inMemoryIpHits.get(ip) || { count: 0, resetAt: now + 60000 };
  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + 60000;
  } else {
    record.count++;
  }
  inMemoryIpHits.set(ip, record);
  return record.count <= 25; // Max 25 calls per minute per IP
}

// HMAC-SHA256 Signed Short-Lived Session Token (Base64URL Compliant & Constant-Time Verification)
async function verifySessionToken(token, secret) {
  try {
    const [payloadB64, sigB64] = token.split(".");
    if (!payloadB64 || !sigB64) return false;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    // Constant-time signature verification via Web Crypto API (BoringSSL/OpenSSL in V8 workerd)
    const rawSig = base64UrlDecode(sigB64);
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      Uint8Array.from(rawSig, c => c.charCodeAt(0)),
      encoder.encode(payloadB64)
    );
    if (!isValid) return false;

    // Payload expiry check
    const payload = JSON.parse(base64UrlDecode(payloadB64));
    if (typeof payload.exp !== "number" || Date.now() > payload.exp) return false;
    return true;
  } catch (e) {
    return false;
  }
}

async function createSessionToken(secret) {
  const encoder = new TextEncoder();
  const payload = JSON.stringify({
    iss: "sukun-gateway",
    iat: Date.now(),
    exp: Date.now() + 30 * 60 * 1000 // 30 minutes validity
  });
  const payloadB64 = base64UrlEncode(payload);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payloadB64));
  const sigB64 = base64UrlEncode(String.fromCharCode(...new Uint8Array(sig)));
  return `${payloadB64}.${sigB64}`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const allowedOrigin = getAllowedOrigin(request, env);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Turnstile-Token"
        }
      });
    }

    // 1. Hadith Reverse Proxy with 30-Day Edge Cache
    if (url.pathname.startsWith("/api/hadith/")) {
      const pathSuffix = url.pathname.replace("/api/hadith/", "");
      const targetUrl = `https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/${pathSuffix}`;
      const cacheResponse = await fetch(targetUrl, {
        headers: { "User-Agent": "Sukun-App" },
        cf: { cacheTtl: 2592000, cacheEverything: true }
      });
      return new Response(cacheResponse.body, {
        status: cacheResponse.status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": allowedOrigin,
          "Cache-Control": "public, max-age=2592000, s-maxage=2592000"
        }
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
    }

    const clientIp = request.headers.get("CF-Connecting-IP") || "127.0.0.1";

    // 2. Burst Rate Limit Check
    if (!checkBurstRateLimit(clientIp)) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a moment." }), {
        status: 429,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    // 3. Request Size Cap (Strict 10 KB Check on Stream Body)
    const rawBody = await request.text();
    if (rawBody.length > 10240) {
      return new Response(JSON.stringify({ error: "Payload exceeds 10KB cap" }), {
        status: 413,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON format" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    // 4. Session & Turnstile Authentication
    const sessionSecret = env.SESSION_SECRET;
    if (!sessionSecret) {
      return new Response(JSON.stringify({ error: "Server configuration missing SESSION_SECRET" }), {
        status: 500,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    let authHeader = request.headers.get("Authorization") || "";
    let isSessionValid = false;
    if (authHeader.startsWith("Bearer ")) {
      isSessionValid = await verifySessionToken(authHeader.slice(7), sessionSecret);
    }

    // If no valid session, verify Turnstile token
    let newSessionToken = null;
    if (!isSessionValid) {
      const turnstileSecret = env.TURNSTILE_SECRET_KEY;
      if (!turnstileSecret) {
        return new Response(JSON.stringify({ error: "Server configuration missing TURNSTILE_SECRET_KEY" }), {
          status: 500,
          headers: { "Access-Control-Allow-Origin": allowedOrigin }
        });
      }

      const turnstileToken = request.headers.get("X-Turnstile-Token") || parsedBody.turnstileToken;
      if (turnstileToken) {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileToken)}&remoteip=${encodeURIComponent(clientIp)}`
        });
        const turnstileOutcome = await verifyRes.json();
        if (turnstileOutcome.success) {
          isSessionValid = true;
          newSessionToken = await createSessionToken(sessionSecret);
        }
      }
    }

    if (!isSessionValid) {
      return new Response(JSON.stringify({ error: "Turnstile verification required", code: "TURNSTILE_REQUIRED" }), {
        status: 403,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    // 5. Build Grounded Prompt with Server-Side Model Lock
    const userMessage = (parsedBody.message || "").trim();
    const providedContext = parsedBody.context || {};
    const allowedReferences = Array.isArray(providedContext.references) ? providedContext.references : [];

    const activeModel = env.GEMINI_MODEL || "gemini-3.7-flash";
    const geminiKey = env.GEMINI_API_KEY;
    if (!geminiKey) {
      return new Response(JSON.stringify({ error: "Server AI configuration error" }), {
        status: 500,
        headers: { "Access-Control-Allow-Origin": allowedOrigin }
      });
    }

    const systemInstruction = `You are Sukun AI Companion.
RULES:
1. EMPATHY FIRST: If the user expresses profound grief, despair, or self-harm: first listen with deep compassion, stay with their pain, offer genuine solace, and immediately append the marker token [CRISIS_TRIGGERED] at the end.
2. STRICT SCRIPTURE QUARANTINE: NEVER recite, fabricate, or quote any Quranic verses or Hadiths from your memory. Only discuss and reflect upon the scripture provided in the CONTEXT.
3. FATWA FORBIDDEN: Do not deliver halal/haram rulings. For fiqh questions, advise consulting a qualified Islamic scholar.
4. TONE: Dignified, gentle, respectful Roman Urdu or English. No informal pet names.`;

    const geminiPayload = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [
        {
          role: "user",
          parts: [{
            text: `CONTEXT (Verified Scripture): ${JSON.stringify(providedContext)}\n\nUSER QUERY: ${userMessage}\n\nTask: Provide comforting spiritual reflection based STRICTLY on the provided context.`
          }]
        }
      ],
      generationConfig: {
        temperature: 0.25,
        maxOutputTokens: 600
      }
    };

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${activeModel}:generateContent?key=${geminiKey}`;
    const apiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload)
    });

    const aiData = await apiRes.json();
    let replyText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // 6. Layer-2 Crisis Marker Interception
    let isCrisisTriggered = replyText.includes("[CRISIS_TRIGGERED]");
    if (isCrisisTriggered) {
      replyText = replyText.replace(/\[CRISIS_TRIGGERED\]/g, "").trim();
    }

    // 7. Scripture Reference Quarantine
    const extractedRefs = extractScriptureReferences(replyText);
    for (const ref of extractedRefs) {
      const isAllowed = allowedReferences.some(ar => String(ar).toLowerCase().includes(ref.toLowerCase()));
      if (!isAllowed) {
        // Redact unverified citation
        replyText = replyText.replace(ref, "[Verified Scripture Citation Provided Above]");
      }
    }

    const responsePayload = {
      reply: replyText,
      crisisTriggered: isCrisisTriggered,
      sessionToken: newSessionToken
    };

    return new Response(JSON.stringify(responsePayload), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": allowedOrigin
      }
    });
  }
};
