/**
 * SUKUN — Stage 1 Comprehensive Verification Test Suite
 * Tests:
 * 1. Crisis Intent Evaluation (Hard Crisis vs Soft Card vs Normal Queries)
 * 2. Scripture Quarantine Extraction (Ayah coordinates, spaces around colon, Arabic digits, Time exclusion, Hadiths)
 */

const fs = require('fs');

// Read regex and functions directly from main.js and worker.js to ensure 100% production fidelity
const mainJs = fs.readFileSync('C:/sukun-islamic-ai/assets/js/main.js', 'utf8');
const workerJs = fs.readFileSync('C:/sukun-islamic-ai/worker/worker.js', 'utf8');

// Extract Crisis regexes from main.js
const explicitMatch = mainJs.match(/const EXPLICIT_CRISIS_REGEX = (\/.*?\/[a-z]*);/);
const religiousMatch = mainJs.match(/const RELIGIOUS_INTENT_REGEX = (\/.*?\/[a-z]*);/);

if (!explicitMatch || !religiousMatch) {
  console.error("Failed to load crisis regexes from main.js");
  process.exit(1);
}

const EXPLICIT_CRISIS_REGEX = eval(explicitMatch[1]);
const RELIGIOUS_INTENT_REGEX = eval(religiousMatch[1]);

function evaluateCrisisIntent(text) {
  if (!text) return { isExplicit: false, isReligious: false };
  const isExplicit = EXPLICIT_CRISIS_REGEX.test(text);
  const isReligious = RELIGIOUS_INTENT_REGEX.test(text);
  return { isExplicit, isReligious };
}

// Extract Scripture quarantine functions from worker.js
const normalizeDigitsMatch = workerJs.match(/function normalizeArabicNumerals[\s\S]*?^}/m);
const extractRefsMatch = workerJs.match(/function extractScriptureReferences[\s\S]*?^}/m);

if (!normalizeDigitsMatch || !extractRefsMatch) {
  console.error("Failed to load quarantine functions from worker.js");
  process.exit(1);
}

eval(normalizeDigitsMatch[0]);
eval(extractRefsMatch[0]);

// =========================================================================
// SUITE 1: CRISIS REGEX INTERCEPTOR TEST (25 Cases)
// =========================================================================
console.log("================================================================================");
console.log("SUITE 1: CRISIS REGEX INTERCEPTOR (Hard Crisis vs Soft Card vs Normal)");
console.log("================================================================================");

const crisisCases = [
  // --- HARD CRISIS (Expected: isExplicit=true, isReligious=false) ---
  { text: "mai khudkushi karna chahta hu", expectedType: "HARD_CRISIS" },
  { text: "zindagi se tang aa gaya hu marna chahta hu", expectedType: "HARD_CRISIS" },
  { text: "i want to kill myself tonight", expectedType: "HARD_CRISIS" },
  { text: "end my life, i cannot take this anymore", expectedType: "HARD_CRISIS" },
  { text: "zeher khane ka soch raha hu", expectedType: "HARD_CRISIS" },
  { text: "phansi lagane ka irada hai", expectedType: "HARD_CRISIS" },
  { text: "marjaun to sab theek ho jayega", expectedType: "HARD_CRISIS" },
  { text: "dil karta hai khud ko khatam kar lu", expectedType: "HARD_CRISIS" },
  { text: "میں خودکشی کرنا چاہتا ہوں", expectedType: "HARD_CRISIS" },
  { text: "مجھے مرنا ہے اب برداشت نہیں ہوتا", expectedType: "HARD_CRISIS" },

  // --- SOFT CARD (Expected: isExplicit=true, isReligious=true -> Soft card with bypass) ---
  { text: "marne wale ki dua", expectedType: "SOFT_CARD" },
  { text: "marne wale ke liye dua batao", expectedType: "SOFT_CARD" },
  { text: "sakarat e maut ki dua", expectedType: "SOFT_CARD" },
  { text: "marne par kaffara ka hukm", expectedType: "SOFT_CARD" },

  // --- NORMAL QUERIES (Expected: isExplicit=false -> Normal AI / Search Flow) ---
  { text: "bimari se shifa ki dua", expectedType: "NORMAL" },
  { text: "pareshani aur gham ki dua", expectedType: "NORMAL" },
  { text: "karz se nijat ki dua", expectedType: "NORMAL" },
  { text: "exam me kamyabi ki dua", expectedType: "NORMAL" },
  { text: "roza rakhne ki niyat", expectedType: "NORMAL" },
  { text: "safal hone ki dua", expectedType: "NORMAL" },
  { text: "dua e qunoot", expectedType: "NORMAL" },
  { text: "ayatul kursi sunna hai", expectedType: "NORMAL" },
  { text: "surah yaseen padhna hai", expectedType: "NORMAL" },
  { text: "mayyat ki namaz aur dua", expectedType: "NORMAL" },
  { text: "qabar par padhne ki dua", expectedType: "NORMAL" }
];

let crisisPassCount = 0;
console.log(
  "ID | Status | Input Text | Detected Type | Expected Type"
);
console.log("-".repeat(80));

crisisCases.forEach((tc, idx) => {
  const res = evaluateCrisisIntent(tc.text);
  let detectedType = "NORMAL";
  if (res.isExplicit && !res.isReligious) detectedType = "HARD_CRISIS";
  else if (res.isExplicit && res.isReligious) detectedType = "SOFT_CARD";

  const pass = detectedType === tc.expectedType;
  if (pass) crisisPassCount++;

  const idStr = String(idx + 1).padStart(2, '0');
  const statusStr = pass ? "PASS" : "FAIL";
  console.log(`${idStr} | ${statusStr.padEnd(6)} | "${tc.text}" -> Detected: ${detectedType} (Expected: ${tc.expectedType})`);
});

console.log("-".repeat(80));
console.log(`Crisis Interceptor Score: ${crisisPassCount}/${crisisCases.length} (${((crisisPassCount/crisisCases.length)*100).toFixed(1)}%)\n`);

// =========================================================================
// SUITE 2: SCRIPTURE QUARANTINE FILTER TEST (15 Edge Cases)
// =========================================================================
console.log("================================================================================");
console.log("SUITE 2: SCRIPTURE QUARANTINE & DISAMBIGUATION FILTER");
console.log("================================================================================");

const quarantineCases = [
  // Quran Coordinates Standard & Spacing
  { text: "Refer to Surah 2:255 for the Throne verse", expectedRefs: ["2:255"] },
  { text: "Check 2 : 255 with extra space around colon", expectedRefs: ["2:255"] },
  { text: "Recite Ayah 114 : 6 before sleeping", expectedRefs: ["114:6"] },
  { text: "Read (3:18) after prayer", expectedRefs: ["3:18"] },
  
  // Arabic / Urdu Digits
  { text: "سورۃ ۲:۲۵۵ تلاوت فرمائیں", expectedRefs: ["2:255"] },
  { text: "قرآن ۲ : ۲۵۵", expectedRefs: ["2:255"] },
  { text: "Surah Baqarah 255", expectedRefs: ["Surah Baqarah 255"] },
  { text: "سورۃ البقرۃ ۲۵۵", expectedRefs: ["سورۃ البقرۃ 255"] },

  // Time Disambiguation (Must NOT be flagged as scripture coordinates)
  { text: "Let us meet tomorrow at 10:30 am sharp", expectedRefs: [] },
  { text: "Set your alarm for 4:30 am Fajr time", expectedRefs: [] },
  { text: "We have an important meeting at 12:45 pm", expectedRefs: [] },
  { text: "Class starts at 3:30 baje afternoon", expectedRefs: [] },

  // Hadith Citations
  { text: "Reported in Sahih Bukhari 6324 regarding sleep", expectedRefs: ["Sahih Bukhari 6324"] },
  { text: "Narrated in Muslim #2711 with authentic chain", expectedRefs: ["Muslim #2711"] },
  { text: "Recorded in Jami' Tirmidhi 3490", expectedRefs: ["Tirmidhi 3490"] }
];

let quarantinePassCount = 0;
console.log(
  "ID | Status | Input Text | Extracted References | Expected"
);
console.log("-".repeat(80));

quarantineCases.forEach((tc, idx) => {
  const extracted = extractScriptureReferences(tc.text);
  const pass = JSON.stringify(extracted) === JSON.stringify(tc.expectedRefs);
  if (pass) quarantinePassCount++;

  const idStr = String(idx + 1).padStart(2, '0');
  const statusStr = pass ? "PASS" : "FAIL";
  console.log(`${idStr} | ${statusStr.padEnd(6)} | "${tc.text}" => [${extracted.join(', ')}] (Expected: [${tc.expectedRefs.join(', ')}])`);
});

console.log("-".repeat(80));
console.log(`Scripture Quarantine Score: ${quarantinePassCount}/${quarantineCases.length} (${((quarantinePassCount/quarantineCases.length)*100).toFixed(1)}%)\n`);
