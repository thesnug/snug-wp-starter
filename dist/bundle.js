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
/******/ 	__webpack_require__.p = "";
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/utilities/skip-link-focus */ \"./src/javascript/utilities/skip-link-focus.js\");\n/* harmony import */ var _javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_skip_link_focus__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/utilities/smooth-scroll */ \"./src/javascript/utilities/smooth-scroll.js\");\n/* harmony import */ var _javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/utilities/common */ \"./src/javascript/utilities/common.js\");\n/* harmony import */ var _javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_utilities_common__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/modules/navigation */ \"./src/javascript/modules/navigation.js\");\n/* harmony import */ var _javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javascript_modules_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/application.scss */ \"./src/sass/application.scss\");\n/* harmony import */ var _sass_application_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_application_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction importAll(r) {\n  var images = {};\n  r.keys().map(function (item, index) {\n    images[item.replace('./', '')] = r(item);\n  });\n  return images;\n}\n/* JavaScript */\n\n\n\n\n\n\n/* Sass */\n\n\n/* SVGs */\n\nimportAll(__webpack_require__(\"./src/svgs sync recursive \\\\.svg$\"));\n/* Test */\n\nconsole.log('Webpack Boilerplate');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MWYwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICB2YXIgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cbi8qIEphdmFTY3JpcHQgKi9cblxuXG5pbXBvcnQgJy4vamF2YXNjcmlwdC91dGlsaXRpZXMvc2tpcC1saW5rLWZvY3VzJztcbmltcG9ydCAnLi9qYXZhc2NyaXB0L3V0aWxpdGllcy9zbW9vdGgtc2Nyb2xsJztcbmltcG9ydCAnLi9qYXZhc2NyaXB0L3V0aWxpdGllcy9jb21tb24nO1xuaW1wb3J0ICcuL2phdmFzY3JpcHQvbW9kdWxlcy9uYXZpZ2F0aW9uJztcbi8qIFNhc3MgKi9cblxuaW1wb3J0ICcuL3Nhc3MvYXBwbGljYXRpb24uc2Nzcyc7XG4vKiBTVkdzICovXG5cbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vc3ZncycsIHRydWUsIC9cXC5zdmckLykpO1xuLyogVGVzdCAqL1xuXG5jb25zb2xlLmxvZygnV2VicGFjayBCb2lsZXJwbGF0ZScpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/javascript/modules/navigation.js":
/*!**********************************************!*\
  !*** ./src/javascript/modules/navigation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Handles toggling the navigation menu for small screens and enables tab\n * support for dropdown menus.\n */\n(function module() {\n  var container = document.getElementById('site-navigation');\n  var button = container.getElementsByTagName('button')[0];\n  var menu = container.getElementsByTagName('ul')[0];\n  var links = menu.getElementsByTagName('a');\n  var subMenus = menu.getElementsByTagName('ul');\n\n  if (!container || typeof button === 'undefined') {\n    return;\n  }\n  /**\n   * Sets or removes .focus class on an element.\n   */\n\n\n  function toggleFocus() {\n    // jshint validthis:true\n    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n    while (self.className.indexOf('nav-menu') === -1) {\n      // On li elements toggle the class .focus.\n      if (self.tagName.toLowerCase() === 'li') {\n        if (self.className.indexOf('focus') !== -1) {\n          self.className = self.className.replace(' focus', '');\n        } else {\n          self.className += ' focus';\n        }\n      }\n\n      self = self.parentElement;\n    }\n  } // Hide menu toggle button if menu is empty and return early.\n\n\n  if (typeof menu === 'undefined') {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (menu.className.indexOf('nav-menu') === -1) {\n    menu.className += ' nav-menu';\n  }\n\n  button.onclick = function () {\n    if (container.className.indexOf('toggled') !== -1) {\n      container.className = container.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-expanded', 'false');\n    } else {\n      container.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-expanded', 'true');\n    }\n  }; // Set menu items with submenus to aria-haspopup=\"true\".\n\n\n  for (var i = 0; i < subMenus.length; i += 1) {\n    subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');\n  } // Each time a menu link is focused or blurred, toggle focus.\n\n\n  for (var _i = 0; _i < links.length; _i += 1) {\n    links[_i].addEventListener('focus', toggleFocus, true);\n\n    links[_i].addEventListener('blur', toggleFocus, true);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL25hdmlnYXRpb24uanM/MjE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyB0YWJcbiAqIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oZnVuY3Rpb24gbW9kdWxlKCkge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xuICB2YXIgYnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVswXTtcbiAgdmFyIG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XG4gIHZhciBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgdmFyIHN1Yk1lbnVzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKTtcblxuICBpZiAoIWNvbnRhaW5lciB8fCB0eXBlb2YgYnV0dG9uID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAgIC8vIGpzaGludCB2YWxpZHRoaXM6dHJ1ZVxuICAgIHZhciBzZWxmID0gdGhpczsgLy8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuXG4gICAgd2hpbGUgKHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykgPT09IC0xKSB7XG4gICAgICAvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cbiAgICAgIGlmIChzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xuICAgICAgICBpZiAoc2VsZi5jbGFzc05hbWUuaW5kZXhPZignZm9jdXMnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoJyBmb2N1cycsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSAvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXG5cblxuICBpZiAodHlwZW9mIG1lbnUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICBpZiAobWVudS5jbGFzc05hbWUuaW5kZXhPZignbmF2LW1lbnUnKSA9PT0gLTEpIHtcbiAgICBtZW51LmNsYXNzTmFtZSArPSAnIG5hdi1tZW51JztcbiAgfVxuXG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb250YWluZXIuY2xhc3NOYW1lLmluZGV4T2YoJ3RvZ2dsZWQnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJyB0b2dnbGVkJywgJycpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSAnIHRvZ2dsZWQnO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfVxuICB9OyAvLyBTZXQgbWVudSBpdGVtcyB3aXRoIHN1Ym1lbnVzIHRvIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIuXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Yk1lbnVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc3ViTWVudXNbaV0ucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICB9IC8vIEVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQsIHRvZ2dsZSBmb2N1cy5cblxuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBsaW5rcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICBsaW5rc1tfaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG5cbiAgICBsaW5rc1tfaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgfVxufSkoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/javascript/modules/navigation.js\n");

/***/ }),

/***/ "./src/javascript/utilities/common.js":
/*!********************************************!*\
  !*** ./src/javascript/utilities/common.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-unused-vars */\n\n/* check if mobile device so can use more native functions */\nfunction isMobile() {\n  return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/iPad/i);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC91dGlsaXRpZXMvY29tbW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvdXRpbGl0aWVzL2NvbW1vbi5qcz84ZjdhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qIGNoZWNrIGlmIG1vYmlsZSBkZXZpY2Ugc28gY2FuIHVzZSBtb3JlIG5hdGl2ZSBmdW5jdGlvbnMgKi9cbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSkgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/utilities/common.js\n");

/***/ }),

/***/ "./src/javascript/utilities/skip-link-focus.js":
/*!*****************************************************!*\
  !*** ./src/javascript/utilities/skip-link-focus.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * skip-link-focus-fix.js\n *\n * Helps with accessibility for keyboard only users.\n *\n * Learn more: https://github.com/Automattic/Snug/pull/136\n */\n(function module() {\n  var isWebkit = window.navigator.userAgent.toLowerCase().indexOf('webkit') > -1;\n  var isOpera = window.navigator.userAgent.toLowerCase().indexOf('opera') > -1;\n  var isIE = window.navigator.userAgent.toLowerCase().indexOf('msie') > -1;\n\n  if ((isWebkit || isOpera || isIE) && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1);\n      var element = document.getElementById(id);\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC91dGlsaXRpZXMvc2tpcC1saW5rLWZvY3VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvdXRpbGl0aWVzL3NraXAtbGluay1mb2N1cy5qcz9iNDM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogc2tpcC1saW5rLWZvY3VzLWZpeC5qc1xuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9TbnVnL3B1bGwvMTM2XG4gKi9cbihmdW5jdGlvbiBtb2R1bGUoKSB7XG4gIHZhciBpc1dlYmtpdCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2Via2l0JykgPiAtMTtcbiAgdmFyIGlzT3BlcmEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29wZXJhJykgPiAtMTtcbiAgdmFyIGlzSUUgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21zaWUnKSA+IC0xO1xuXG4gIGlmICgoaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0lFKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/utilities/skip-link-focus.js\n");

/***/ }),

/***/ "./src/javascript/utilities/smooth-scroll.js":
/*!***************************************************!*\
  !*** ./src/javascript/utilities/smooth-scroll.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function module($) {\n  $('a[href*=\"#\"]:not([href=\"#\"])').on('click', function click() {\n    if (location.pathname.replace(/^\\//, '') === this.pathname.replace(/^\\//, '') && location.hostname === this.hostname) {\n      var target = $(this.hash);\n      target = target.length ? target : $(\"[name=\".concat(this.hash.slice(1), \"]\"));\n\n      if (target.length) {\n        $('html,body').animate({\n          scrollTop: target.offset().top\n        }, 1000);\n        return false;\n      }\n    }\n\n    return null;\n  });\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC91dGlsaXRpZXMvc21vb3RoLXNjcm9sbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3V0aWxpdGllcy9zbW9vdGgtc2Nyb2xsLmpzP2FjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIG1vZHVsZSgkKSB7XG4gICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykub24oJ2NsaWNrJywgZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKFwiW25hbWU9XCIuY29uY2F0KHRoaXMuaGFzaC5zbGljZSgxKSwgXCJdXCIpKTtcblxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufSkoalF1ZXJ5KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/utilities/smooth-scroll.js\n");

/***/ }),

/***/ "./src/sass/application.scss":
/*!***********************************!*\
  !*** ./src/sass/application.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9hcHBsaWNhdGlvbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvYXBwbGljYXRpb24uc2Nzcz9lMGI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/application.scss\n");

/***/ }),

/***/ "./src/svgs sync recursive \\.svg$":
/*!******************************!*\
  !*** ./src/svgs sync \.svg$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blue-pattern.svg": "./src/svgs/blue-pattern.svg",
	"./whatever.svg": "./src/svgs/whatever.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/svgs sync recursive \\.svg$";

/***/ }),

/***/ "./src/svgs/blue-pattern.svg":
/*!***********************************!*\
  !*** ./src/svgs/blue-pattern.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"svgs/blue-pattern.svg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3Zncy9ibHVlLXBhdHRlcm4uc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Z3MvYmx1ZS1wYXR0ZXJuLnN2Zz8xYzFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdzL2JsdWUtcGF0dGVybi5zdmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svgs/blue-pattern.svg\n");

/***/ }),

/***/ "./src/svgs/whatever.svg":
/*!*******************************!*\
  !*** ./src/svgs/whatever.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"svgs/whatever.svg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3Zncy93aGF0ZXZlci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3Zncy93aGF0ZXZlci5zdmc/MjIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3Zncy93aGF0ZXZlci5zdmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svgs/whatever.svg\n");

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