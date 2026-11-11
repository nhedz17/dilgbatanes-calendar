// Public OAuth configuration (NOT an API key or client secret).
// Keep this TEST separate from your production index.html.
window.DILG_TEST_CONFIG = Object.freeze({
  clientId: 'REPLACE_WITH_WEB_OAUTH_CLIENT_ID.apps.googleusercontent.com',
  apiDeploymentId: 'REPLACE_WITH_API_EXECUTABLE_DEPLOYMENT_ID',
  // OAuth scopes MUST match the scopes required by your Apps Script project.
  // Include ALL scopes shown in Apps Script > Project Overview > Project OAuth Scopes.
  // Do not expand these blindly for production; request only what the test requires.
  scopes: 'https://www.googleapis.com/auth/userinfo.email'
});
