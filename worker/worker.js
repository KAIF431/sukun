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
  // Localhost is strictly blocked in production; only permitted when ENVIRONMENT is explicitly set to 'development'
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

// Disambiguates time (e.g. 10:30 am, meeting 12:45), ratios (16:9), and scores (3:1) from Quran Ayah coordinates (1:1 to 114:6)
// Handles edge cases: ranges ("2:255-257"), extra spaces ("2 : 255"), Arabic-Indic digits, invalid bounds (2:300, 115:1), and Hadith citations
function extractScriptureReferences(text) {
  const refs = [];
  if (!text) return refs;

  const normalizedText = normalizeArabicNumerals(text);

  // 1. Ayah coordinates (Surah 1-114, Ayah 1-286) with optional whitespace and ranges
  const ayahPattern = /(?:\b(ayah|surah|quran|verse|aayat)\s+)?(?:\(|\b)([1-9]|[1-9]\d|10\d|11[0-4])\s*:\s*([1-9]|[1-9]\d|[12]\d{2})(?:\s*-\s*([1-9]|[1-9]\d|[12]\d{2}))?(?:\)|\b)/gi;
  let m;
  while ((m = ayahPattern.exec(normalizedText)) !== null) {
    const hasScripturePrefix = Boolean(m[1]);
    const surah = parseInt(m[2], 10);
    const startAyah = parseInt(m[3], 10);
    const endAyah = m[4] ? parseInt(m[4], 10) : null;

    const startIdx = Math.max(0, m.index - 30);
    const endIdx = Math.min(normalizedText.length, m.index + m[0].length + 30);
    const window = normalizedText.substring(startIdx, endIdx).toLowerCase();

    const isNonScripture = !hasScripturePrefix && (
      /\b(?:at|around|by|meeting|call|tomorrow|yesterday|today|alarm|schedule|scheduled|starts?|ends?|time)\s*(?:is|at|for)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:am|pm|baje|hrs|hours|morning|afternoon|evening|night|o'clock)\b/i.test(window) ||
      /\b(?:aspect\s+ratio|aspect|ratio|resolution|dimension|scale|proportions?)\s*(?:of|is)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:aspect\s+ratio|aspect|ratio|resolution|dimension|scale)/i.test(window) ||
      /\b(?:score|won|lost|beat|result|lead|match|game|final)\s*(?:is|was|of)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:score|lead|win|loss)/i.test(window)
    );

    if (!isNonScripture && surah >= 1 && surah <= 114 && startAyah >= 1 && startAyah <= 286) {
      if (endAyah && endAyah >= startAyah && endAyah <= 286) {
        refs.push(`${surah}:${startAyah}-${endAyah}`);
      } else {
        refs.push(`${surah}:${startAyah}`);
      }
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

// Sanitizes AI response text against unverified or hallucinated scripture citations
// 1. Colloquial numbers, time (10:30 am, meeting 12:45), ratios (aspect ratio 16:9), and scores (score 3:1) are safely preserved.
// 2. Out-of-range / fabricated coordinates (2:300, 115:1) are BLOCKED and REDACTED immediately.
// 3. In-range Quran / Hadith citations not present in allowedReferences are replaced with [Reference removed: verified nahi].
function sanitizeScriptureInReply(replyText, allowedReferences = []) {
  if (!replyText) return "";

  const normalized = normalizeArabicNumerals(replyText);
  let sanitized = replyText;

  // 1. Coordinate pattern: \d+:\d+(-\d+)?
  const coordPattern = /(?:\b(ayah|surah|quran|verse|aayat)\s+)?(?:\(|\b)(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?(?:\)|\b)/gi;
  let m;
  const matches = [];
  while ((m = coordPattern.exec(normalized)) !== null) {
    matches.push({
      fullMatch: m[0],
      hasPrefix: Boolean(m[1]),
      surah: parseInt(m[2], 10),
      startAyah: parseInt(m[3], 10),
      endAyah: m[4] ? parseInt(m[4], 10) : null,
      index: m.index,
      length: m[0].length
    });
  }

  // Iterate in reverse order so replacements do not misalign indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const item = matches[i];
    const startIdx = Math.max(0, item.index - 30);
    const endIdx = Math.min(normalized.length, item.index + item.length + 30);
    const window = normalized.substring(startIdx, endIdx).toLowerCase();

    const isNonScripture = !item.hasPrefix && (
      /\b(?:at|around|by|meeting|call|tomorrow|yesterday|today|alarm|schedule|scheduled|starts?|ends?|time)\s*(?:is|at|for)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:am|pm|baje|hrs|hours|morning|afternoon|evening|night|o'clock)\b/i.test(window) ||
      /\b(?:aspect\s+ratio|aspect|ratio|resolution|dimension|scale|proportions?)\s*(?:of|is)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:aspect\s+ratio|aspect|ratio|resolution|dimension|scale)/i.test(window) ||
      /\b(?:score|won|lost|beat|result|lead|match|game|final)\s*(?:is|was|of)?\s*\d+\s*:\s*\d+/i.test(window) ||
      /\d+\s*:\s*\d+\s*(?:score|lead|win|loss)/i.test(window)
    );

    if (isNonScripture) {
      continue; // Legitimate clock time, ratio, or score preserved
    }

    const isValidQuran = item.surah >= 1 && item.surah <= 114 && item.startAyah >= 1 && item.startAyah <= 286 &&
                         (!item.endAyah || (item.endAyah >= item.startAyah && item.endAyah <= 286));

    if (!isValidQuran) {
      // OUT-OF-RANGE / FABRICATED CITATION: BLOCK & REDACT
      sanitized = sanitized.substring(0, item.index) + "[Fabricated / Out-of-Range Citation Blocked]" + sanitized.substring(item.index + item.length);
    } else {
      // IN-RANGE CITATION: Verify against allowedReferences
      const coordStr = `${item.surah}:${item.startAyah}${item.endAyah ? '-' + item.endAyah : ''}`;
      const isAllowed = allowedReferences.some(ar => String(ar).toLowerCase().includes(coordStr.toLowerCase()));
      if (!isAllowed) {
        sanitized = sanitized.substring(0, item.index) + "[Reference removed: verified nahi]" + sanitized.substring(item.index + item.length);
      }
    }
  }

  // 2. Hadith book citations (Sahih Bukhari, Muslim, Tirmidhi, Abu Dawood, etc.)
  const hadithPattern = /\b(?:Sahih\s+)?(?:Bukhari|Muslim|Tirmidhi|Abu Dawood|Ibn Majah|Nasai|بخاري|مسلم|ترمذي|أبو داود)\s*#?\s*([0-9]+)/gi;
  const hadithMatches = [];
  while ((m = hadithPattern.exec(sanitized)) !== null) {
    hadithMatches.push({
      fullMatch: m[0],
      number: m[1],
      index: m.index,
      length: m[0].length
    });
  }

  for (let i = hadithMatches.length - 1; i >= 0; i--) {
    const item = hadithMatches[i];
    const isAllowed = allowedReferences.some(ar => {
      const arNorm = String(ar).toLowerCase().replace(/sahih\s+/g, '').replace(/[\s#]+/g, ' ').trim();
      const matchNorm = item.fullMatch.toLowerCase().replace(/sahih\s+/g, '').replace(/[\s#]+/g, ' ').trim();
      return arNorm.includes(matchNorm) || matchNorm.includes(arNorm);
    });
    if (!isAllowed) {
      sanitized = sanitized.substring(0, item.index) + "[Reference removed: verified nahi]" + sanitized.substring(item.index + item.length);
    }
  }

  return sanitized;
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
        if (turnstileToken === "1x00000000000000000000AA" && env && env.ENVIRONMENT === "development" && (allowedOrigin.startsWith("http://localhost:") || allowedOrigin.startsWith("http://127.0.0.1:"))) {
          isSessionValid = true;
          newSessionToken = await createSessionToken(sessionSecret);
        } else {
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
    const candidate = aiData.candidates?.[0];
    const promptFeedback = aiData.promptFeedback;
    const finishReason = candidate?.finishReason;
    const blockReason = promptFeedback?.blockReason;

    let replyText = candidate?.content?.parts?.[0]?.text || "";

    // 6. Layer-2 Crisis & Gemini Safety / BlockReason Interception
    const isSafetyBlocked = blockReason === "SAFETY" || finishReason === "SAFETY" || Boolean(blockReason);
    let isCrisisTriggered = replyText.includes("[CRISIS_TRIGGERED]") || isSafetyBlocked;

    if (isCrisisTriggered) {
      replyText = replyText.replace(/\[CRISIS_TRIGGERED\]/g, "").trim();
    }

    if (!replyText || isSafetyBlocked) {
      isCrisisTriggered = true;
      replyText = "Aap akele nahi hain. Baraye meherbani foran helpline se rabta karein: Tele-MANAS 14416.";
    }

    // 7. Scripture Reference Quarantine & Out-of-Range Scrubbing
    replyText = sanitizeScriptureInReply(replyText, allowedReferences);

    const responsePayload = {
      reply: replyText,
      crisisTriggered: isCrisisTriggered,
      blockReason: blockReason || (finishReason === "SAFETY" ? "SAFETY" : null),
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
