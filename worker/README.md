# SUKUN — Cloudflare Worker Deployment & Local Testing Guide

> **Security Rule:**
> Koi bhi secret value (API key, password, token) is file ya git me kabhi commit na karein.

> **Rate Limiting Reality Check:**
> Worker ka in-memory burst throttle (`checkBurstRateLimit`: 25 req/min per IP) sirf per-isolate halka burst-guard hai. Multi-region Cloudflare edge par asal DDoS aur budget overspend protection **Cloudflare Turnstile verification** aur **Google Cloud Console ka Daily Quota Cap** (`Requests per day`) hain.

---

### 1. Cloudflare Dashboard me Worker Setup

1. **Worker Create Karein:**
   * Cloudflare Dashboard ➔ **Workers & Pages** ➔ **Create Application** ➔ **Create Worker**
   * Name: `sukun-api` (ya aapki pasand ka naam)
2. **Code Upload:**
   * `worker/worker.js` ka mukammal content paste karein aur **Deploy** dabayein.
3. **Variables & Secrets Configure Karein (Settings ➔ Variables and Secrets):**

| Type | Name | Purpose | Value Source |
| :--- | :--- | :--- | :--- |
| **Secret** | `GEMINI_API_KEY` | Google AI Studio access | Developer apne Google AI Studio se banayega |
| **Secret** | `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile verification | Cloudflare Turnstile dashboard se secret key |
| **Secret** | `SESSION_SECRET` | 30-min HMAC session signing | Developer terminal me generate karega (`openssl rand -hex 32`) |
| **Variable** | `GEMINI_MODEL` | Active model selection | `gemini-3.7-flash` ya `gemini-3.5-flash-lite` |
| **Variable** | `ENVIRONMENT` | Environment switcher | Production me `production` (Localhost test ke liye `development`) |

> **Note on `SESSION_SECRET` Generation:**  
> Terminal me ye command chala kar random 64-character secret generate karein aur seedha Cloudflare me daalein:  
> `openssl rand -hex 32`

---

### 2. Local Testing (Bina Deploy Kiye Frontend Test Karna)

1. **Turnstile Testing Keys (Cloudflare Official Dummy Keys):**
   * Testing ke liye Cloudflare ne dummy keys di hain jo hamesha pass/fail hoti hain:
     * **Always Passes Site Key:** `1x00000000000000000000AA`
     * **Always Passes Secret Key:** `1x0000000000000000000000000000000AA`
2. **Run Local Server:**
   * Terminal me command chalayein:
     ```bash
     python -m http.server 8000
     ```
   * Browser me `http://localhost:8000` kholein.
3. **Local Dev Environment for Worker (Optional):**
   * Agar local Wrangler se Worker test karna ho:
     ```bash
     npx wrangler dev worker/worker.js --var ENVIRONMENT:development
     ```

---

### 3. Safe Zero-Downtime Rollout Order

Taaki live GitHub Pages site par ek second ke liye bhi koi functionality break na ho:

```
[Step 1: Backend Setup] ➔ Cloudflare me Worker deploy karein aur 3 Secrets + 2 Variables daalein.
         │
[Step 2: Turnstile Site] ➔ Turnstile widget create karein, Public Site Key copy karein.
         │
[Step 3: Frontend Link]  ➔ index.html me Turnstile key aur main.js me worker URL update karein.
         │
[Step 4: Local Test]     ➔ feature branch par search, masnoon duas aur offline fallback verify karein.
         │
[Step 5: Main Merge]     ➔ Developer tasdeeq ke baad main branch me merge karein (git merge).
```

* **Offline Shield Guarantee:** Agar kisi wajah se Worker down ho ya secrets incomplete hon, to frontend ka naya `getAiOfflineFriendlyBanner` graceful card dikhata hai aur local authenticated duas provide karta hai. Red error kabhi show nahi hota.
