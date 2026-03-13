/**
 * ArgonOS — Client-side session guard
 *
 * Include this script in the <head> of every protected page.
 * If the user has no valid session they are immediately redirected
 * to login.html (relative path, works at any subpath depth).
 *
 * Session is stored in sessionStorage so it clears when the tab closes.
 * To use localStorage instead (persistent across tabs/restarts), swap
 * every sessionStorage reference to localStorage.
 */
(function () {
  'use strict';

  var SESSION_KEY = 'argonos_auth';

  if (!sessionStorage.getItem(SESSION_KEY)) {
    // Remember the page the user tried to reach so we can redirect back after login
    try { sessionStorage.setItem('argonos_redirect', window.location.href); } catch (_) {}
    // Replace current history entry so Back button does not loop back to a protected page
    window.location.replace('login.html');
  }
}());
