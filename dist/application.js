// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fKEaN":[function(require,module,exports) {
/* JavaScript */ var _skipLinkFocus = require("./javascript/utilities/skip-link-focus");
var _smoothScroll = require("./javascript/utilities/smooth-scroll");
var _common = require("./javascript/utilities/common");
var _navigation = require("./javascript/modules/navigation");
/* Sass */ var _applicationScss = require("./sass/application.scss");

},{"./javascript/utilities/skip-link-focus":"03OKE","./javascript/utilities/smooth-scroll":"7VzQf","./javascript/utilities/common":"4zz1U","./javascript/modules/navigation":"h8a3T","./sass/application.scss":"fP0Se"}],"03OKE":[function(require,module,exports) {
/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/Snug/pull/136
 */ (function module() {
    const isWebkit = window.navigator.userAgent.toLowerCase().indexOf("webkit") > -1;
    const isOpera = window.navigator.userAgent.toLowerCase().indexOf("opera") > -1;
    const isIE = window.navigator.userAgent.toLowerCase().indexOf("msie") > -1;
    if ((isWebkit || isOpera || isIE) && document.getElementById && window.addEventListener) window.addEventListener("hashchange", ()=>{
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (!/^[A-z0-9_-]+$/.test(id)) return;
        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) element.tabIndex = -1;
            element.focus();
        }
    }, false);
})();

},{}],"7VzQf":[function(require,module,exports) {
(function module($) {
    $('a[href*="#"]:not([href="#"])').on("click", function click() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
        return null;
    });
})(jQuery);

},{}],"4zz1U":[function(require,module,exports) {
/* eslint-disable no-unused-vars */ /* check if mobile device so can use more native functions */ function isMobile() {
    return window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/iPad/i);
}

},{}],"h8a3T":[function(require,module,exports) {
/**
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */ (function module() {
    const container = document.getElementById("site-navigation");
    const button = container.getElementsByTagName("button")[0];
    const menu = container.getElementsByTagName("ul")[0];
    const links = menu.getElementsByTagName("a");
    const subMenus = menu.getElementsByTagName("ul");
    if (!container || typeof button === "undefined") return;
    /**
   * Sets or removes .focus class on an element.
   */ function toggleFocus() {
        // jshint validthis:true
        let self = this;
        // Move up through the ancestors of the current link until we hit .nav-menu.
        while(self.className.indexOf("nav-menu") === -1){
            // On li elements toggle the class .focus.
            if (self.tagName.toLowerCase() === "li") {
                if (self.className.indexOf("focus") !== -1) self.className = self.className.replace(" focus", "");
                else self.className += " focus";
            }
            self = self.parentElement;
        }
    }
    // Hide menu toggle button if menu is empty and return early.
    if (typeof menu === "undefined") {
        button.style.display = "none";
        return;
    }
    menu.setAttribute("aria-expanded", "false");
    if (menu.className.indexOf("nav-menu") === -1) menu.className += " nav-menu";
    button.onclick = ()=>{
        if (container.className.indexOf("toggled") !== -1) {
            container.className = container.className.replace(" toggled", "");
            button.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-expanded", "false");
        } else {
            container.className += " toggled";
            button.setAttribute("aria-expanded", "true");
            menu.setAttribute("aria-expanded", "true");
        }
    };
    // Set menu items with submenus to aria-haspopup="true".
    for(let i = 0; i < subMenus.length; i += 1)subMenus[i].parentNode.setAttribute("aria-haspopup", "true");
    // Each time a menu link is focused or blurred, toggle focus.
    for(let i1 = 0; i1 < links.length; i1 += 1){
        links[i1].addEventListener("focus", toggleFocus, true);
        links[i1].addEventListener("blur", toggleFocus, true);
    }
})();

},{}],"fP0Se":[function() {},{}]},["fKEaN"], "fKEaN", "parcelRequire2ddf")

//# sourceMappingURL=application.js.map
