/* ==========================================================================
   SUKUN (سُكُون) — Legacy Auth Decommissioning Handler
   ========================================================================== */
(function purgeLegacyAuthOnLoad() {
  try {
    const legacyKeys = [
      "sukun_auth_session",
      "sukun_registered_users",
      "sukun_admin_master_password",
      "sukun_custom_duas"
    ];
    legacyKeys.forEach(k => localStorage.removeItem(k));
  } catch (e) {}
})();
