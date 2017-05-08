"use strict";

/* eslint-disable no-unused-vars */

/* check if mobile device so can use more native functions */
function isMobile() {
        return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/iPad/i);
}
'use strict';

/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/Snug/pull/136
 */
(function module() {
  var isWebkit = window.navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
  var isOpera = window.navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  var isIE = window.navigator.userAgent.toLowerCase().indexOf('msie') > -1;

  if ((isWebkit || isOpera || isIE) && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1);
      var element = document.getElementById(id);

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();
'use strict';

(function module($) {
  $('a[href*="#"]:not([href="#"])').on('click', function click() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return null;
  });
})(jQuery);
'use strict';

/**
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */

(function module() {
  var container = document.getElementById('site-navigation');
  var button = container.getElementsByTagName('button')[0];
  var menu = container.getElementsByTagName('ul')[0];
  var links = menu.getElementsByTagName('a');
  var subMenus = menu.getElementsByTagName('ul');

  if (!container || typeof button === 'undefined') {
    return;
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    // jshint validthis:true
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (self.className.indexOf('nav-menu') === -1) {
      // On li elements toggle the class .focus.
      if (self.tagName.toLowerCase() === 'li') {
        if (self.className.indexOf('focus') !== -1) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  // Hide menu toggle button if menu is empty and return early.
  if (typeof menu === 'undefined') {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (menu.className.indexOf('nav-menu') === -1) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (container.className.indexOf('toggled') !== -1) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };

  // Set menu items with submenus to aria-haspopup="true".
  for (var i = 0; i < subMenus.length; i += 1) {
    subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
  }

  // Each time a menu link is focused or blurred, toggle focus.
  for (var _i = 0; _i < links.length; _i += 1) {
    links[_i].addEventListener('focus', toggleFocus, true);
    links[_i].addEventListener('blur', toggleFocus, true);
  }
})();
"use strict";