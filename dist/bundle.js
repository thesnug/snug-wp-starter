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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/utilities/skip-link-focus */ "./src/javascript/utilities/skip-link-focus.js");
/* harmony import */ var _javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/utilities/smooth-scroll */ "./src/javascript/utilities/smooth-scroll.js");
/* harmony import */ var _javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/utilities/common */ "./src/javascript/utilities/common.js");
/* harmony import */ var _javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/modules/navigation */ "./src/javascript/modules/navigation.js");
/* harmony import */ var _javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/application.scss */ "./src/sass/application.scss");
/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_application_scss__WEBPACK_IMPORTED_MODULE_4__);
function importAll(r) {
  var images = {};
  r.keys().map(function (item, index) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
/* JavaScript */






/* Sass */


/* SVGs */

importAll(__webpack_require__("./src/svgs sync recursive \\.svg$"));

/***/ }),

/***/ "./src/javascript/modules/navigation.js":
/*!**********************************************!*\
  !*** ./src/javascript/modules/navigation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

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
  } // Hide menu toggle button if menu is empty and return early.


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
  }; // Set menu items with submenus to aria-haspopup="true".


  for (var i = 0; i < subMenus.length; i += 1) {
    subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
  } // Each time a menu link is focused or blurred, toggle focus.


  for (var _i = 0; _i < links.length; _i += 1) {
    links[_i].addEventListener('focus', toggleFocus, true);

    links[_i].addEventListener('blur', toggleFocus, true);
  }
})();

/***/ }),

/***/ "./src/javascript/utilities/common.js":
/*!********************************************!*\
  !*** ./src/javascript/utilities/common.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-unused-vars */

/* check if mobile device so can use more native functions */
function isMobile() {
  return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/iPad/i);
}

/***/ }),

/***/ "./src/javascript/utilities/skip-link-focus.js":
/*!*****************************************************!*\
  !*** ./src/javascript/utilities/skip-link-focus.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./src/javascript/utilities/smooth-scroll.js":
/*!***************************************************!*\
  !*** ./src/javascript/utilities/smooth-scroll.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function module($) {
  $('a[href*="#"]:not([href="#"])').on('click', function click() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=".concat(this.hash.slice(1), "]"));

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

/***/ "./src/sass/application.scss":
/*!***********************************!*\
  !*** ./src/sass/application.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/svgs sync recursive \\.svg$":
/*!******************************!*\
  !*** ./src/svgs sync \.svg$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/svgs sync recursive \\.svg$";

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/index.js ./src/sass/application.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/application.scss */"./src/sass/application.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map