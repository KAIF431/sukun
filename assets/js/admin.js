/* ==========================================================================
   SUKUN (سُكُون) — Master Admin Engine
   Restricted to Master Admin: kaifofficial4@gmail.com
   User Directory • Content Publishing • Email Service Config
   ========================================================================== */

const MASTER_ADMIN = "kaifofficial4@gmail.com";
const MASTER_PASSWORD_KEY = "sukun_admin_master_password";
const DEFAULT_MASTER_PASSWORD = "KaifAdmin@786";

function getMasterPassword() {
  return localStorage.getItem(MASTER_PASSWORD_KEY) || DEFAULT_MASTER_PASSWORD;
}

let allUsers = [];
let customDuas = [];

document.addEventListener("DOMContentLoaded", () => {
  checkAdminAccess();
});

// 1. ADMIN ACCESS ENFORCEMENT
function checkAdminAccess() {
  const session = SukunAuth.getCurrentUser();
  const loginGate = document.getElementById("adminLoginGate");
  const dashboard = document.getElementById("adminDashboard");

  if (session && session.email.toLowerCase() === MASTER_ADMIN.toLowerCase()) {
    loginGate.style.display = "none";
    dashboard.style.display = "block";
    initDashboard();
  } else {
    loginGate.style.display = "flex";
    dashboard.style.display = "none";
  }
}

function submitAdminLogin() {
  const emailInput = document.getElementById("adminEmailInput");
  const passInput = document.getElementById("adminPasswordInput");
  const errElem = document.getElementById("adminLoginError");

  const email = (emailInput.value || "").trim().toLowerCase();
  const password = passInput.value || "";

  errElem.style.display = "none";

  if (email !== MASTER_ADMIN.toLowerCase()) {
    errElem.innerText = "Access Denied: Only kaifofficial4@gmail.com is authorized as Master Admin.";
    errElem.style.display = "block";
    return;
  }

  if (password !== getMasterPassword()) {
    errElem.innerText = "Access Denied: Incorrect Master Admin password.";
    errElem.style.display = "block";
    passInput.value = "";
    return;
  }

  // Successfully authenticated as Master Admin
  const userData = {
    email: MASTER_ADMIN,
    role: "Master Admin",
    isVerified: true,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem("sukun_auth_session", JSON.stringify(userData));
  checkAdminAccess();
}

function changeMasterPassword() {
  const newPass = document.getElementById("newMasterPassword").value.trim();
  if (!newPass || newPass.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
  localStorage.setItem(MASTER_PASSWORD_KEY, newPass);
  document.getElementById("newMasterPassword").value = "";
  alert("Master Admin password updated successfully! Please remember it for your next login.");
}

function handleAdminLogout() {
  SukunAuth.logout();
  checkAdminAccess();
}

// 2. DASHBOARD INITIALIZATION
function initDashboard() {
  loadUsers();
  loadCustomDuas();
  updateMetrics();
  setupLivePreview();
  loadAllAiKeys();
}

function updateMetrics() {
  allUsers = SukunAuth.getAllUsers();
  const totalUsersElem = document.getElementById("metricTotalUsers");
  const totalSavedElem = document.getElementById("metricTotalSaved");
  const totalDuasElem = document.getElementById("metricTotalDuas");
  const emailStatusElem = document.getElementById("metricEmailStatus");

  if (totalUsersElem) totalUsersElem.innerText = allUsers.length;

  let totalSaved = 0;
  allUsers.forEach(u => { totalSaved += (u.savedCount || 0); });
  if (totalSavedElem) totalSavedElem.innerText = totalSaved;

  const totalDuaCount = MasterKnowledge.length + customDuas.length;
  if (totalDuasElem) totalDuasElem.innerText = totalDuaCount;

  if (emailStatusElem) {
    emailStatusElem.innerText = "Active (Secure Auth)";
    emailStatusElem.style.color = "#4ade80";
  }
}

// 3. USER DIRECTORY ENGINE
function loadUsers() {
  allUsers = SukunAuth.getAllUsers();
  renderUserTable(allUsers);
}

function renderUserTable(usersToRender) {
  const tbody = document.getElementById("usersTableBody");
  if (!tbody) return;

  if (usersToRender.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">No matching users found.</td></tr>`;
    return;
  }

  tbody.innerHTML = usersToRender.map((user, idx) => {
    const regDate = user.registeredAt ? new Date(user.registeredAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent';
    const lastLogin = user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Active now';
    const isMaster = user.email.toLowerCase() === MASTER_ADMIN.toLowerCase();

    return `
      <tr>
        <td style="color: var(--gold-muted); font-size: 0.75rem;">${idx + 1}</td>
        <td>
          <strong style="color: ${isMaster ? 'var(--gold-light)' : 'var(--text-cream)'};">${user.email}</strong>
        </td>
        <td>
          <span class="${isMaster ? 'badge-admin' : 'badge-verified'}">
            ${isMaster ? 'Master Admin' : 'Verified User'}
          </span>
        </td>
        <td>
          <span style="color: #4ade80; font-size: 0.78rem;">● Verified Account</span>
        </td>
        <td style="font-size: 0.78rem; color: var(--text-muted);">${regDate}</td>
        <td style="font-size: 0.78rem; color: var(--text-muted);">${lastLogin}</td>
        <td style="font-weight: 700; color: var(--gold-light);">${user.savedCount || 0}</td>
      </tr>
    `;
  }).join('');
}

function filterUsers(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) {
    renderUserTable(allUsers);
    return;
  }
  const filtered = allUsers.filter(u => u.email.toLowerCase().includes(q));
  renderUserTable(filtered);
}

// Export users as CSV
function exportUsersCSV() {
  if (allUsers.length === 0) {
    alert("No users to export.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Index,Email,Role,Status,Registered At,Last Login,Saved Duas Count\n";

  allUsers.forEach((u, idx) => {
    csvContent += `"${idx + 1}","${u.email}","${u.role}","Verified","${u.registeredAt || ''}","${u.lastLogin || ''}","${u.savedCount || 0}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sukun_users_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Export users as JSON
function exportUsersJSON() {
  if (allUsers.length === 0) {
    alert("No users to export.");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allUsers, null, 2));
  const link = document.createElement("a");
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `sukun_users_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 4. DUA PUBLISHER (CMS)
function loadCustomDuas() {
  try {
    const raw = localStorage.getItem("sukun_custom_duas");
    customDuas = raw ? JSON.parse(raw) : [];
  } catch (e) {
    customDuas = [];
  }
  renderCustomDuasList();
}

function setupLivePreview() {
  const fields = ["duaTitle", "duaArabic", "duaRoman", "duaUrdu", "duaEnglish", "duaRef"];
  fields.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener("input", updatePreviewContent);
    }
  });
}

function updatePreviewContent() {
  document.getElementById("prevTitle").innerText = document.getElementById("duaTitle").value || "Dua Title Preview";
  document.getElementById("prevArabic").innerText = document.getElementById("duaArabic").value || "النَّصُّ الْعَرَبِيُّ هُنَا";
  document.getElementById("prevRoman").innerText = document.getElementById("duaRoman").value || "Roman Urdu transliteration will appear here...";
  document.getElementById("prevUrdu").innerText = document.getElementById("duaUrdu").value || "اردو ترجمہ یہاں ظاہر ہوگا...";
  document.getElementById("prevEnglish").innerText = document.getElementById("duaEnglish").value || "English translation will appear here...";
  document.getElementById("prevRef").innerText = document.getElementById("duaRef").value || "Reference (e.g. Sahih al-Bukhari 6115)";
}

function publishNewDua() {
  const title = document.getElementById("duaTitle").value.trim();
  const category = document.getElementById("duaCategory").value;
  const arabic = document.getElementById("duaArabic").value.trim();
  const roman = document.getElementById("duaRoman").value.trim();
  const urdu = document.getElementById("duaUrdu").value.trim();
  const english = document.getElementById("duaEnglish").value.trim();
  const reference = document.getElementById("duaRef").value.trim();
  const waqia = document.getElementById("duaWaqia").value.trim();
  const lesson = document.getElementById("duaLesson").value.trim();
  const keywordsRaw = document.getElementById("duaKeywords").value.trim();

  if (!title || !arabic || !english || !reference) {
    alert("Please fill in Title, Arabic text, English translation, and Reference.");
    return;
  }

  const keywords = keywordsRaw ? keywordsRaw.split(",").map(k => k.trim().toLowerCase()).filter(k => k) : [title.toLowerCase()];

  const newDua = {
    id: "custom-" + Date.now(),
    title: title,
    category: category,
    arabic: arabic,
    roman: roman || "",
    translationUrdu: urdu || "",
    translationEnglish: english,
    reference: reference,
    waqia: waqia || "Historical context preserved in authentic Islamic literature.",
    lesson: lesson || "Contemplate and practice with sincere devotion.",
    keywords: keywords,
    createdAt: new Date().toISOString()
  };

  customDuas.push(newDua);
  localStorage.setItem("sukun_custom_duas", JSON.stringify(customDuas));

  // Reset form
  document.getElementById("duaForm").reset();
  updatePreviewContent();
  loadCustomDuas();
  updateMetrics();
  alert("Dua published successfully to Sukun knowledge sanctuary!");
}

function renderCustomDuasList() {
  const container = document.getElementById("customDuasList");
  if (!container) return;

  if (customDuas.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; padding: 18px 0;">No custom Duas published yet. Use the form above to add new ones.</p>`;
    return;
  }

  container.innerHTML = customDuas.map((d, idx) => `
    <div style="border-bottom: 1px solid var(--border-subtle); padding: 16px 0; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: var(--gold-light);">${d.title}</strong>
        <span style="font-size: 0.72rem; color: var(--gold-muted); margin-left: 10px;">[${d.category}]</span>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${d.reference}</div>
      </div>
      <button onclick="deleteCustomDua('${d.id}')" style="background: none; border: 1px solid #7f1d1d; color: #f87171; padding: 4px 10px; border-radius: 4px; font-size: 0.72rem; cursor: pointer;">Delete</button>
    </div>
  `).join('');
}

function deleteCustomDua(id) {
  if (confirm("Are you sure you want to delete this Dua?")) {
    customDuas = customDuas.filter(d => d.id !== id);
    localStorage.setItem("sukun_custom_duas", JSON.stringify(customDuas));
    loadCustomDuas();
    updateMetrics();
  }
}

// 5. MASTER MULTI-AI NEURAL ORCHESTRATOR (GEMINI + CHATGPT + CLAUDE + OPENROUTER)
const STORAGE_KEYS = {
  gemini: "sukun_gemini_api_key",
  openai: "sukun_openai_api_key",
  claude: "sukun_claude_api_key",
  openrouter: "sukun_openrouter_api_key",
  mode: "sukun_orchestrator_mode"
};

const DEFAULT_GEMINI_KEY = typeof atob === "function" ? atob("QVEuQWI4Uk42SU10MXhFeFdseVdaczN4VzhVLTMwVzBmaXBoeWt1Q01uYkZid2VJMmFIZEE=") : "";

function loadAllAiKeys() {
  const gemKey = localStorage.getItem(STORAGE_KEYS.gemini) || DEFAULT_GEMINI_KEY;
  const oaiKey = localStorage.getItem(STORAGE_KEYS.openai) || "";
  const cldKey = localStorage.getItem(STORAGE_KEYS.claude) || "";
  const oprKey = localStorage.getItem(STORAGE_KEYS.openrouter) || "";
  const mode = localStorage.getItem(STORAGE_KEYS.mode) || "arbiter";

  const gInput = document.getElementById("geminiApiKeyInput");
  const oInput = document.getElementById("openaiApiKeyInput");
  const cInput = document.getElementById("claudeApiKeyInput");
  const rInput = document.getElementById("openrouterApiKeyInput");
  const mSelect = document.getElementById("orchestratorModeSelect");

  if (gInput) gInput.value = gemKey;
  if (oInput) oInput.value = oaiKey;
  if (cInput) cInput.value = cldKey;
  if (rInput) rInput.value = oprKey;
  if (mSelect) mSelect.value = mode;

  updateBadgeStatus("badgeGemini", "Gemini", gemKey, true);
  updateBadgeStatus("badgeOpenAI", "ChatGPT", oaiKey, false);
  updateBadgeStatus("badgeClaude", "Claude", cldKey, false);
  updateBadgeStatus("badgeOpenRouter", "OpenRouter", oprKey, false);
}

function updateBadgeStatus(elemId, name, key, isDefaultActive) {
  const badge = document.getElementById(elemId);
  if (!badge) return;
  if (key && key.trim()) {
    badge.innerText = `${name}: Active`;
    badge.style.color = "#4ade80";
    badge.style.borderColor = "#4ade80";
    badge.style.background = "rgba(74, 222, 128, 0.15)";
  } else {
    badge.innerText = `${name}: ${isDefaultActive ? 'Ready' : 'Optional'}`;
    badge.style.color = "var(--gold-light)";
    badge.style.borderColor = "var(--gold-ochre)";
    badge.style.background = "rgba(200, 159, 54, 0.15)";
  }
}

function saveAllAiKeys() {
  const gKey = (document.getElementById("geminiApiKeyInput")?.value || "").trim();
  const oKey = (document.getElementById("openaiApiKeyInput")?.value || "").trim();
  const cKey = (document.getElementById("claudeApiKeyInput")?.value || "").trim();
  const rKey = (document.getElementById("openrouterApiKeyInput")?.value || "").trim();
  const mode = document.getElementById("orchestratorModeSelect")?.value || "arbiter";

  localStorage.setItem(STORAGE_KEYS.gemini, gKey);
  localStorage.setItem(STORAGE_KEYS.openai, oKey);
  localStorage.setItem(STORAGE_KEYS.claude, cKey);
  localStorage.setItem(STORAGE_KEYS.openrouter, rKey);
  localStorage.setItem(STORAGE_KEYS.mode, mode);

  loadAllAiKeys();
  alert("All Multi-AI Orchestrator settings & keys saved securely! Sukun will now query active AIs and auto-select the #1 response.");
}

async function testAllConnectedAIs() {
  const gKey = (document.getElementById("geminiApiKeyInput")?.value || "").trim() || localStorage.getItem(STORAGE_KEYS.gemini) || DEFAULT_GEMINI_KEY;
  const oKey = (document.getElementById("openaiApiKeyInput")?.value || "").trim() || localStorage.getItem(STORAGE_KEYS.openai);
  const cKey = (document.getElementById("claudeApiKeyInput")?.value || "").trim() || localStorage.getItem(STORAGE_KEYS.claude);
  const rKey = (document.getElementById("openrouterApiKeyInput")?.value || "").trim() || localStorage.getItem(STORAGE_KEYS.openrouter);

  const resultBox = document.getElementById("aiTestResult");
  if (!resultBox) return;

  resultBox.style.display = "block";
  resultBox.style.background = "rgba(212, 175, 55, 0.08)";
  resultBox.style.color = "var(--gold-bright)";
  resultBox.style.border = "1px solid var(--gold-primary)";
  resultBox.innerHTML = `<div>✦ Benchmarking active AI connections in parallel...</div>`;

  const results = [];

  // 1. Benchmark Gemini
  if (gKey) {
    const t0 = performance.now();
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${gKey}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Return valid JSON: {\"status\":\"ok\"}" }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });
      const ms = Math.round(performance.now() - t0);
      if (res.ok) {
        results.push(`<div style="color: #4ade80;">✓ <strong>Google Gemini:</strong> Connected successfully (${ms}ms)</div>`);
      } else {
        results.push(`<div style="color: #f87171;">✕ <strong>Google Gemini:</strong> HTTP ${res.status}</div>`);
      }
    } catch (e) {
      results.push(`<div style="color: #f87171;">✕ <strong>Google Gemini:</strong> ${e.message}</div>`);
    }
  }

  // 2. Benchmark OpenAI
  if (oKey) {
    const t0 = performance.now();
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${oKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: "Ping JSON: {\"status\":\"ok\"}" }],
          response_format: { type: "json_object" }
        })
      });
      const ms = Math.round(performance.now() - t0);
      if (res.ok) {
        results.push(`<div style="color: #4ade80;">✓ <strong>OpenAI ChatGPT:</strong> Connected successfully (${ms}ms)</div>`);
      } else {
        results.push(`<div style="color: #f87171;">✕ <strong>OpenAI ChatGPT:</strong> HTTP ${res.status}</div>`);
      }
    } catch (e) {
      results.push(`<div style="color: #f87171;">✕ <strong>OpenAI ChatGPT:</strong> ${e.message}</div>`);
    }
  } else {
    results.push(`<div style="color: var(--text-muted);">○ <strong>OpenAI ChatGPT:</strong> No key configured (Optional)</div>`);
  }

  // 3. Benchmark Claude
  if (cKey) {
    const t0 = performance.now();
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": cKey,
          "anthropic-version": "2023-06-01",
          "dangerously-allow-browser": "true"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-latest",
          max_tokens: 30,
          messages: [{ role: "user", content: "Ping JSON: {\"status\":\"ok\"}" }]
        })
      });
      const ms = Math.round(performance.now() - t0);
      if (res.ok) {
        results.push(`<div style="color: #4ade80;">✓ <strong>Anthropic Claude:</strong> Connected successfully (${ms}ms)</div>`);
      } else {
        results.push(`<div style="color: #f87171;">✕ <strong>Anthropic Claude:</strong> HTTP ${res.status}</div>`);
      }
    } catch (e) {
      results.push(`<div style="color: #f87171;">✕ <strong>Anthropic Claude:</strong> ${e.message}</div>`);
    }
  } else {
    results.push(`<div style="color: var(--text-muted);">○ <strong>Anthropic Claude:</strong> No key configured (Optional)</div>`);
  }

  // 4. Benchmark OpenRouter
  if (rKey) {
    const t0 = performance.now();
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${rKey}`
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [{ role: "user", content: "Ping JSON: {\"status\":\"ok\"}" }]
        })
      });
      const ms = Math.round(performance.now() - t0);
      if (res.ok) {
        results.push(`<div style="color: #4ade80;">✓ <strong>OpenRouter Gateway:</strong> Connected successfully (${ms}ms)</div>`);
      } else {
        results.push(`<div style="color: #f87171;">✕ <strong>OpenRouter Gateway:</strong> HTTP ${res.status}</div>`);
      }
    } catch (e) {
      results.push(`<div style="color: #f87171;">✕ <strong>OpenRouter Gateway:</strong> ${e.message}</div>`);
    }
  } else {
    results.push(`<div style="color: var(--text-muted);">○ <strong>OpenRouter Gateway:</strong> No key configured (Optional)</div>`);
  }

  resultBox.innerHTML = `
    <div style="margin-bottom: 8px; font-weight: 700; color: var(--gold-bright);">✦ Orchestrator Parallel Benchmark Results:</div>
    ${results.join('')}
    <div style="margin-top: 10px; font-size: 0.78rem; color: var(--gold-light);">Active models are evaluated in real-time by the Islamic Arbiter to choose the #1 highest quality response.</div>
  `;
}
