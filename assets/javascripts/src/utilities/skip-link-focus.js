/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/Snug/pull/136
 */
(function module() {
  const isWebkit = window.navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
  const isOpera = window.navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  const isIE = window.navigator.userAgent.toLowerCase().indexOf('msie') > -1;

  if ((isWebkit || isOpera || isIE) && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', () => {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (!(/^[A-z0-9_-]+$/.test(id))) {
        return;
      }

      if (element) {
        if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
}());
