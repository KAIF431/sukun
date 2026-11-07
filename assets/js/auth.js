/* ==========================================================================
   SUKUN (سُكُون) — Authentic Account & Session Engine (Email + Password)
   100% Reliable • Zero External Keys Needed • GitHub Pages & Static Web Ready
   Master Admin: kaifofficial4@gmail.com
   ========================================================================== */

const SukunAuth = (function() {
  const MASTER_ADMIN_EMAIL = "kaifofficial4@gmail.com";
  const STORAGE_SESSION_KEY = "sukun_auth_session";
  const STORAGE_USERS_KEY = "sukun_registered_users";

  // Initialize directory with Master Admin if empty
  function initUserDirectory() {
    if (!localStorage.getItem(STORAGE_USERS_KEY)) {
      const initialUsers = [
        {
          email: MASTER_ADMIN_EMAIL,
          password: "KaifAdmin@786", // Default master admin password
          role: "Master Admin",
          registeredAt: new Date(Date.now() - 7 * 86400000).toISOString(),
          lastLogin: new Date().toISOString(),
          savedCount: 5
        }
      ];
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(initialUsers));
    }
  }

  // Get current active session
  function getSession() {
    try {
      const raw = localStorage.getItem(STORAGE_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  // Set active session
  function setSession(userData) {
    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(userData));
    updateNavUI();
  }

  // Get all registered users array
  function getAllUsersList() {
    initUserDirectory();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  // Public Interface
  return {
    init: function() {
      initUserDirectory();
      updateNavUI();
    },

    getCurrentUser: function() {
      return getSession();
    },

    isAdmin: function() {
      const session = getSession();
      return session && session.email.toLowerCase() === MASTER_ADMIN_EMAIL.toLowerCase();
    },

    // 1. REGISTER NEW USER (Sign Up)
    register: function(email, password, confirmPassword) {
      initUserDirectory();
      email = (email || "").trim().toLowerCase();
      password = (password || "").trim();
      confirmPassword = (confirmPassword || "").trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address (e.g. name@gmail.com).");
      }

      if (!password || password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match. Please re-enter.");
      }

      const users = getAllUsersList();
      const existingUser = users.find(u => u.email.toLowerCase() === email);
      if (existingUser) {
        throw new Error("An account with this email already exists. Please Sign In.");
      }

      const now = new Date().toISOString();
      const isMaster = email === MASTER_ADMIN_EMAIL.toLowerCase();
      const newUser = {
        email: email,
        password: password,
        role: isMaster ? "Master Admin" : "Verified User",
        registeredAt: now,
        lastLogin: now,
        savedCount: 0
      };

      users.push(newUser);
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));

      // Create logged-in session immediately
      const sessionData = {
        email: newUser.email,
        role: newUser.role,
        isVerified: true,
        loginTime: now
      };
      setSession(sessionData);

      return sessionData;
    },

    // 2. SIGN IN EXISTING USER (Log In)
    login: function(email, password) {
      initUserDirectory();
      email = (email || "").trim().toLowerCase();
      password = (password || "").trim();

      if (!email || !password) {
        throw new Error("Please enter both email and password.");
      }

      const users = getAllUsersList();
      const user = users.find(u => u.email.toLowerCase() === email);

      if (!user) {
        throw new Error("No account found with this email. Please Create an Account first.");
      }

      if (user.password !== password) {
        throw new Error("Incorrect password. Please verify and try again.");
      }

      // Update last active time & saved count
      const now = new Date().toISOString();
      user.lastLogin = now;
      const savedCount = JSON.parse(localStorage.getItem("sukun_saved_list") || "[]").length;
      user.savedCount = savedCount;
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));

      const sessionData = {
        email: user.email,
        role: user.role,
        isVerified: true,
        loginTime: now
      };
      setSession(sessionData);

      return sessionData;
    },

    // 3. LOG OUT
    logout: function() {
      localStorage.removeItem(STORAGE_SESSION_KEY);
      updateNavUI();
      if (window.showToast) {
        window.showToast("Signed out successfully.");
      }
    },

    // 4. GET DIRECTORY (For Admin Panel)
    getAllUsers: function() {
      return getAllUsersList();
    }
  };
})();

// Explicit global window attachment for universal multi-script access
window.SukunAuth = SukunAuth;

// Helper to update navigation bar based on auth state
function updateNavUI() {
  const user = SukunAuth.getCurrentUser();
  const btn = document.getElementById("navAuthBtn");
  const text = document.getElementById("navAuthText");
  const adminFooterLink = document.getElementById("footerAdminLink");

  if (!btn || !text) return;

  if (user) {
    const displayEmail = user.email.length > 18 ? user.email.substring(0, 16) + "..." : user.email;
    text.innerText = displayEmail;
    btn.title = "Logged in as " + user.email;
    if (adminFooterLink && user.email.toLowerCase() === "kaifofficial4@gmail.com") {
      adminFooterLink.style.display = "inline-block";
    }
  } else {
    text.innerText = "Sign In";
    btn.title = "Sign In with Email";
    if (adminFooterLink) {
      adminFooterLink.style.display = "inline-block";
    }
  }
}

// Global initialization hook
document.addEventListener("DOMContentLoaded", () => {
  SukunAuth.init();
});
