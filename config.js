// Public OAuth configuration (NOT an API key or client secret).
// Keep this TEST separate from your production index.html.
window.DILG_TEST_CONFIG = Object.freeze({
  clientId: '429172993451-nigida4tmjhc6gfm4lgoaup5r6hbecnp.apps.googleusercontent.com',
  apiDeploymentId: 'AKfycbwJzSTFrkJnZJLqya1lZ22isbdoNwruE-Eij1dzWGgq75JDfwOqivYSfzUYb_QKhnrF',
  // OAuth scopes MUST match the scopes required by your Apps Script project.
  // Include ALL scopes shown in Apps Script > Project Overview > Project OAuth Scopes.
  // Do not expand these blindly for production; request only what the test requires.
  scopes: 'https://www.googleapis.com/auth/userinfo.email'
});
