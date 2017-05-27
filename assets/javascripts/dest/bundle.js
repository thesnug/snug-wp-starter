/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Volumes/Projects/vvv/vagrant-local/www/thesnug-starter.dev/htdocs/wp-content/themes/snug-wp-starter/assets/sass/application.scss Unexpected character '@' (2:0)\nYou may need an appropriate loader to handle this file type.\n| /*==========  Includes  ==========*/\n| @import '_includes/functions';\n| @import '_includes/fonts';\n| @import '_includes/normalize';");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _skipLinkFocus = __webpack_require__(4);

var _skipLinkFocus2 = _interopRequireDefault(_skipLinkFocus);

var _smoothScroll = __webpack_require__(5);

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

var _navigation = __webpack_require__(2);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './../../sass/application.scss';

var testing = function testing(text) {
  console.log(text);
};

testing('super cool');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-unused-vars */

/* check if mobile device so can use more native functions */
function isMobile() {
        return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/iPad/i);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);