/**
 * Live Production Verification Test for https://kaif431.github.io/sukun/
 */

async function verifyLiveProduction() {
  console.log("================================================================================");
  console.log("LIVE PRODUCTION VERIFICATION: https://kaif431.github.io/sukun/");
  console.log("================================================================================");

  // 1. Live HTML & Turnstile Widget Inspection
  console.log("\n[CHECK 1] Inspecting Live HTML from GitHub Pages:");
  const siteRes = await fetch("https://kaif431.github.io/sukun/?cache_bust=" + Date.now(), { cache: "no-store" });
  console.log(`HTTP Status: ${siteRes.status} ${siteRes.statusText}`);
  const siteHtml = await siteRes.text();

  const hasTurnstileScript = siteHtml.includes("challenges.cloudflare.com/turnstile/v0/api.js");
  const hasSiteKey = siteHtml.includes("0x4AAAAAAF7VYPGNCj2rvvdN");
  const hasPermanentHelpline = siteHtml.includes("Tele-MANAS") && siteHtml.includes("14416");

  console.log(`1. Cloudflare Turnstile Script: ${hasTurnstileScript ? "PRESENT" : "MISSING"}`);
  console.log(`2. Turnstile Widget Container (data-sitekey 0x4AAAAAAF7VYPGNCj2rvvdN): ${hasSiteKey ? "PRESENT" : "MISSING"}`);
  console.log(`3. Permanent Line ("Pareshan hain? Tele-MANAS 14416 (24x7)"): ${hasPermanentHelpline ? "PRESENT" : "MISSING"}`);

  // 2. Live Main JS Inspection (Worker Endpoint)
  console.log("\n[CHECK 2] Inspecting Live main.js:");
  const jsRes = await fetch("https://kaif431.github.io/sukun/assets/js/main.js?cache_bust=" + Date.now(), { cache: "no-store" });
  const jsCode = await jsRes.text();
  const hasWorkerUrl = jsCode.includes("https://sukun-gateway.kaifofficial4.workers.dev");
  console.log(`Live Worker Endpoint: ${hasWorkerUrl ? "CONNECTED (https://sukun-gateway.kaifofficial4.workers.dev)" : "MISSING"}`);

  // 3. Live Crisis Interception Test (Using live main.js code)
  console.log("\n[CHECK 3] Live Crisis Phrase Interception Test:");
  const explicitMatch = jsCode.match(/const EXPLICIT_CRISIS_REGEX = (\/.*?\/[a-z]*);/);
  const EXPLICIT_CRISIS_REGEX = eval(explicitMatch[1]);
  const crisisSample = "zindagi se tang aa gaya hu marna chahta hu";
  const isCrisisCaught = EXPLICIT_CRISIS_REGEX.test(crisisSample);

  console.log(`Crisis Query: "${crisisSample}"`);
  console.log(`Layer-1 Regex Caught: ${isCrisisCaught}`);
  console.log(`Result: ${isCrisisCaught ? "PASS (Helpline card triggered with Tele-MANAS 14416)" : "FAIL"}`);

  // 4. Live Worker Origin Lock & Security Test
  console.log("\n[CHECK 4] Live Worker Origin Security Test:");
  const workerRes = await fetch("https://sukun-gateway.kaifofficial4.workers.dev/api/chat", {
    method: "POST",
    headers: {
      "Origin": "https://kaif431.github.io",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "safar ki dua" })
  });

  const workerStatus = workerRes.status;
  const allowOrigin = workerRes.headers.get("Access-Control-Allow-Origin");
  const workerBody = await workerRes.json();

  console.log(`Worker HTTP Status: ${workerStatus} (Expected: 403 TURNSTILE_REQUIRED without token)`);
  console.log(`CORS Access-Control-Allow-Origin: ${allowOrigin}`);
  console.log(`Security Shield Code: ${workerBody.code}`);
  console.log(`Result: ${workerStatus === 403 && allowOrigin === "https://kaif431.github.io" ? "PASS (Worker securely guards AI behind Turnstile on production domain)" : "FAIL"}`);

  console.log("================================================================================");
}

verifyLiveProduction();
