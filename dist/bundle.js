/*! For license information please see bundle.js.LICENSE.txt */
!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="http://localhost:3000/",n(n.s=0)}({"./src/index.js":function(e,t,n){"use strict";n.r(t);var s,a;n("./src/javascript/utilities/skip-link-focus.js"),n("./src/javascript/utilities/smooth-scroll.js"),n("./src/javascript/utilities/common.js"),n("./src/javascript/modules/navigation.js"),n("./src/sass/application.scss");s=n("./src/svgs sync recursive \\.svg$"),a={},s.keys().map((function(e,t){a[e.replace("./","")]=s(e)}))},"./src/javascript/modules/navigation.js":function(e,t){!function(){var e=document.getElementById("site-navigation"),t=e.getElementsByTagName("button")[0],n=e.getElementsByTagName("ul")[0],s=n.getElementsByTagName("a"),a=n.getElementsByTagName("ul");if(e&&void 0!==t)if(void 0!==n){n.setAttribute("aria-expanded","false"),-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),t.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(e.className+=" toggled",t.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))};for(var r=0;r<a.length;r+=1)a[r].parentNode.setAttribute("aria-haspopup","true");for(var i=0;i<s.length;i+=1)s[i].addEventListener("focus",o,!0),s[i].addEventListener("blur",o,!0)}else t.style.display="none";function o(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}()},"./src/javascript/utilities/common.js":function(e,t){},"./src/javascript/utilities/skip-link-focus.js":function(e,t){var n,s,a;n=window.navigator.userAgent.toLowerCase().indexOf("webkit")>-1,s=window.navigator.userAgent.toLowerCase().indexOf("opera")>-1,a=window.navigator.userAgent.toLowerCase().indexOf("msie")>-1,(n||s||a)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var e=location.hash.substring(1),t=document.getElementById(e);/^[A-z0-9_-]+$/.test(e)&&t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1)},"./src/javascript/utilities/smooth-scroll.js":function(e,t){var n;(n=jQuery)('a[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=n(this.hash);if((e=e.length?e:n("[name=".concat(this.hash.slice(1),"]"))).length)return n("html,body").animate({scrollTop:e.offset().top},1e3),!1}return null}))},"./src/sass/application.scss":function(e,t,n){},"./src/svgs sync recursive \\.svg$":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="./src/svgs sync recursive \\.svg$"},0:function(e,t,n){n("./src/index.js"),e.exports=n("./src/sass/application.scss")}});
//# sourceMappingURL=bundle.js.map