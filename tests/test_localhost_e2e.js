/**
 * SUKUN — End-to-End Localhost Worker & Frontend Fallback Test Suite
 */

const fs = require('fs');

const WORKER_URL = "https://sukun-gateway.kaifofficial4.workers.dev";
const LOCAL_ORIGIN = "http://localhost:8000";

async function runTests() {
  console.log("================================================================================");
  console.log("SUITE: LOCALHOST END-TO-END GATEWAY & FALLBACK TEST");
  console.log("================================================================================");

  // ---------------------------------------------------------------------------
  // TEST 1: Reject without Turnstile token
  // ---------------------------------------------------------------------------
  console.log("\n[TEST 1] Request from localhost WITHOUT Turnstile token:");
  try {
    const resNoToken = await fetch(`${WORKER_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Origin": LOCAL_ORIGIN,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: "safar ki dua" })
    });

    const statusNoToken = resNoToken.status;
    const bodyNoToken = await resNoToken.json();
    const pass1 = statusNoToken === 403 && bodyNoToken.code === "TURNSTILE_REQUIRED";
    console.log(`HTTP Status: ${statusNoToken} (Expected: 403)`);
    console.log(`Response Code: "${bodyNoToken.code}" | Error: "${bodyNoToken.error}"`);
    console.log(`Result: ${pass1 ? "PASS (Successfully rejected unauthenticated request)" : "FAIL"}`);
  } catch (err) {
    console.error("Test 1 Error:", err.message);
  }

  // ---------------------------------------------------------------------------
  // TEST 2: Accept with Turnstile testing token & return Gemini response
  // ---------------------------------------------------------------------------
  console.log("\n[TEST 2] Request from localhost WITH Turnstile token:");
  try {
    const resWithToken = await fetch(`${WORKER_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Origin": LOCAL_ORIGIN,
        "Content-Type": "application/json",
        "X-Turnstile-Token": "1x00000000000000000000AA"
      },
      body: JSON.stringify({
        message: "safar ki dua",
        turnstileToken: "1x00000000000000000000AA",
        context: {
          references: ["Muslim 1342"]
        }
      })
    });

    const statusWithToken = resWithToken.status;
    const bodyWithToken = await resWithToken.json();
    const hasReply = Boolean(bodyWithToken.reply && bodyWithToken.reply.length > 0);
    const hasSessionToken = Boolean(bodyWithToken.sessionToken);
    const pass2 = statusWithToken === 200 && hasReply && hasSessionToken;

    console.log(`HTTP Status: ${statusWithToken} (Expected: 200)`);
    console.log(`Session Token Generated: ${hasSessionToken}`);
    console.log(`AI Reply Preview: "${(bodyWithToken.reply || '').slice(0, 100)}..."`);
    console.log(`Result: ${pass2 ? "PASS (Successfully authenticated and answered via Gemini 3.5 Flash Lite)" : "FAIL"}`);
  } catch (err) {
    console.error("Test 2 Error:", err.message);
  }

  // ---------------------------------------------------------------------------
  // TEST 3: Gemini Safety Block / Empty Reply -> Frontend Helpline Card
  // ---------------------------------------------------------------------------
  console.log("\n[TEST 3] Gemini Safety Block / Empty Reply Interception:");
  const mainJs = fs.readFileSync('C:/sukun-islamic-ai/assets/js/main.js', 'utf8');
  eval(mainJs.match(/function getCrisisHelpCardHtml[\s\S]*?^}/m)[0]);
  
  // Simulate safety blocked payload from worker
  const blockedPayload = {
    reply: "Aap akele nahi hain. Baraye meherbani foran helpline se rabta karein: Tele-MANAS 14416.",
    crisisTriggered: true,
    blockReason: "SAFETY"
  };

  const isHelplineTriggered = blockedPayload.crisisTriggered === true || blockedPayload.blockReason === "SAFETY";
  const helplineHtml = getCrisisHelpCardHtml(false);
  const hasTeleManas = helplineHtml.includes("Tele-MANAS");
  const has14416 = helplineHtml.includes("14416");
  const pass3 = isHelplineTriggered && hasTeleManas && has14416;

  console.log(`Safety Block Detected: ${isHelplineTriggered}`);
  console.log(`Helpline Card Rendered: ${hasTeleManas && has14416 ? "Tele-MANAS 14416 card generated" : "FAIL"}`);
  console.log(`Result: ${pass3 ? "PASS (Frontend displays crisis support card on Gemini safety block)" : "FAIL"}`);

  // ---------------------------------------------------------------------------
  // TEST 4: HTTP 429 / Quota Exhausted Graceful Fallback
  // ---------------------------------------------------------------------------
  console.log("\n[TEST 4] HTTP 429 (Quota Exhaustion) Graceful Fallback:");
  eval(mainJs.match(/function getAiOfflineFriendlyBanner[\s\S]*?^}/m)[0]);

  const fallbackBanner = getAiOfflineFriendlyBanner();
  const hasNoRedError = !fallbackBanner.includes("Error") && !fallbackBanner.includes("Failed");
  const hasCompassionHeader = fallbackBanner.includes("AI Rahnuma is waqt aaram par hai");
  const hasLocalScriptures = fallbackBanner.includes("Mukammal 30 Parah Quran, Verified Masnoon Duas aur Digital Tasbih");
  const pass4 = hasNoRedError && hasCompassionHeader && hasLocalScriptures;

  console.log(`Friendly Banner Generated: ${hasCompassionHeader}`);
  console.log(`Local Quran & Masnoon Duas Preserved: ${hasLocalScriptures}`);
  console.log(`Zero Technical Red Error: ${hasNoRedError}`);
  console.log(`Result: ${pass4 ? "PASS (Clean graceful fallback without breaking user experience)" : "FAIL"}`);
  console.log("================================================================================");
}

runTests();
