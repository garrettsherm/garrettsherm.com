!function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)a=u[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(f&&f(e);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=s;i.push([20,2]),n()}([function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,u=0,s=[],c=n(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],e))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(h(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:u}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function d(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),d(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=a||(a=v(e)),r=y.bind(null,n,s,!1),o=y.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(u=r[a.id]).refs--,o.push(u)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete r[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},,function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,,,,function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=(0,r.default)(window).height(),e=parseInt((0,r.default)("#svgAttributes svg").css("margin-top")),n=(0,r.default)("#home-container").height()-e,o=(0,r.default)("#svgAttributes").height()-e,i=Math.sqrt(2*Math.pow(o/2,2)),a=(o-i)/2;if(n<t){var u=t-n;if(u<a)return 0;var s=u-a,c=s/2;return c}return 0};var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1))},function(t,e,n){"use strict";var r=s(n(1)),o=s(n(21)),i=s(n(22)),a=s(n(24)),u=s(n(19));function s(t){return t&&t.__esModule?t:{default:t}}n(2),n(6),n(25),n(12),n(15),n(28),n(31),(0,r.default)(function(){(0,a.default)(),(0,i.default)()}),(0,r.default)(window).on("resize",(0,o.default)(function(){var t=(0,u.default)();(0,r.default)("#svgAttributes svg").css("margin-top",t);var e=(0,r.default)("#home-container").height()-t;(0,r.default)(".full-height-width").css("min-height",e)},500))},function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=f||l||Function("return this")(),p=Object.prototype.toString,v=Math.max,g=Math.min,h=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==o}(t))return r;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=u.test(t);return n||s.test(t)?c(t.slice(2),n?2:8):a.test(t)?r:+t}t.exports=function(t,e,r){var o,i,a,u,s,c,f=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(e){var n=o,r=i;return o=i=void 0,f=e,u=t.apply(r,n)}function w(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-f>=a}function x(){var t=h();if(w(t))return O(t);s=setTimeout(x,function(t){var n=e-(t-c);return d?g(n,a-(t-f)):n}(t))}function O(t){return s=void 0,p&&o?b(t):(o=i=void 0,u)}function A(){var t=h(),n=w(t);if(o=arguments,i=this,c=t,n){if(void 0===s)return function(t){return f=t,s=setTimeout(x,e),l?b(t):u}(c);if(d)return s=setTimeout(x,e),b(c)}return void 0===s&&(s=setTimeout(x,e)),u}return e=y(e)||0,m(r)&&(l=!!r.leading,a=(d="maxWait"in r)?v(y(r.maxWait)||0,e):a,p="trailing"in r?!!r.trailing:p),A.cancel=function(){void 0!==s&&clearTimeout(s),f=0,o=c=i=s=void 0},A.flush=function(){return void 0===s?u:O(h())},A}}).call(this,n(18))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){(0,r.default)("#name-animate").css("opacity","0"),(0,r.default)("#desc-animate").css("opacity","0"),(0,r.default)("#button-animate").css("opacity","0"),(0,r.default)("#desc-animate .letters").each(function(){(0,r.default)(this).html((0,r.default)(this).text().replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"))}),o.default.timeline().add({targets:"#spinner-overlay",translateY:[0,"-100%"],easing:"easeInOutSine",duration:1e3}),o.default.timeline().add({targets:"#svgAttributes #colored-rect-1",width:500,height:100,easing:"easeInOutSine",direction:"alternate",duration:500}).add({targets:"#svgAttributes #colored-rect-2",width:100,height:500,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes #colored-rect-3",width:500,height:100,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes #colored-rect-4",width:100,height:300,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes #colored-rect-5",width:300,height:100,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes .shadow-poly",opacity:.2,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes .grad-svg-rect",opacity:.1,easing:"easeInOutSine",duration:500}).add({targets:"#svgAttributes svg",scale:{value:.5,duration:1e3,easing:"easeInOutQuart"},rotate:{value:315,duration:1e3,delay:1e3,easing:"easeInOutSine"},complete:u})};var r=a(n(1)),o=a(n(23)),i=a(n(19));function a(t){return t&&t.__esModule?t:{default:t}}function u(){var t=(0,i.default)();o.default.timeline().add({targets:"#svgAttributes svg",marginTop:t,duration:1e3,easing:"easeInOutSine",complete:s})}function s(){(0,r.default)("#name-animate").css("opacity",""),o.default.timeline().add({targets:"#name-animate .word",scale:[16,1],opacity:[0,1],easing:"easeOutCirc",duration:800,delay:function(t,e){return 800*e},complete:c})}function c(){(0,r.default)("#desc-animate").css("opacity",""),o.default.timeline().add({targets:"#desc-animate .line",scaleY:[0,1],opacity:[.5,1],easing:"easeOutExpo",duration:700}).add({targets:"#desc-animate .line",translateX:[0,(0,r.default)("#desc-animate .letters").width()],easing:"easeOutExpo",duration:700,delay:100}).add({targets:"#desc-animate .letter",opacity:[0,1],easing:"easeOutExpo",duration:600,offset:"-=775",delay:function(t,e){return 34*(e+1)},complete:f})}function f(){o.default.timeline({loop:!0}).add({targets:"#desc-animate .line",opacity:[1,0],easing:"easeOutExpo",duration:800}).add({targets:"#desc-animate .line",opacity:[0,1],easing:"easeOutExpo",duration:800}),(0,r.default)("#button-animate").css("opacity","1"),o.default.timeline().add({targets:"#button-animate .line",opacity:[0,1],easing:"easeOutExpo",duration:2e3,complete:l})}function l(){(0,r.default)("#desc-animate .letters").replaceWith('<span class="letters">Full Stack Developer</span>'),o.default.timeline({loop:!0}).add({targets:"#svgAttributes svg",scale:[.5,.5],rotate:{value:0,duration:1500,easing:"easeInOutQuint",delay:8e3}}).add({targets:"#svgAttributes svg",scale:[.5,.5],rotate:{value:315,duration:1500,easing:"easeInOutQuart",delay:1e3}})}},function(t,e,n){(function(n){var r,o,i,a={scope:{}};a.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},a.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==n&&null!=n?n:t},a.global=a.getGlobal(this),a.SYMBOL_PREFIX="jscomp_symbol_",a.initSymbol=function(){a.initSymbol=function(){},a.global.Symbol||(a.global.Symbol=a.Symbol)},a.symbolCounter_=0,a.Symbol=function(t){return a.SYMBOL_PREFIX+(t||"")+a.symbolCounter_++},a.initSymbolIterator=function(){a.initSymbol();var t=a.global.Symbol.iterator;t||(t=a.global.Symbol.iterator=a.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&a.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return a.arrayIterator(this)}}),a.initSymbolIterator=function(){}},a.arrayIterator=function(t){var e=0;return a.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},a.iteratorPrototype=function(t){return a.initSymbolIterator(),(t={next:t})[a.global.Symbol.iterator]=function(){return this},t},a.array=a.array||{},a.iteratorFromArray=function(t,e){a.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var o=n++;return{value:e(o,t[o]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},a.polyfill=function(t,e,n,r){if(e){for(n=a.global,t=t.split("."),r=0;r<t.length-1;r++){var o=t[r];o in n||(n[o]={}),n=n[o]}(e=e(r=n[t=t[t.length-1]]))!=r&&null!=e&&a.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},a.polyfill("Array.prototype.keys",function(t){return t||function(){return a.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;o=[],void 0===(i="function"==typeof(r=function(){function t(t){if(!T.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,o=[],i=0;i<n;i++)if(i in t){var a=t[i];e.call(r,a,i,t)&&o.push(a)}return o}function n(t){return t.reduce(function(t,e){return t.concat(T.arr(e)?n(e):e)},[])}function r(e){return T.arr(e)?e:(T.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function o(t,e){return t.some(function(t){return t===e})}function i(t){var e,n={};for(e in t)n[e]=t[e];return n}function a(t,e){var n,r=i(t);for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function s(t,e){var n,r=i(t);for(n in e)r[n]=T.und(t[n])?e[n]:t[n];return r}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function f(t,e){return T.fnc(t)?t(e.target,e.id,e.total):t}function l(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return T.dom(t)&&o(E,e)?"transform":T.dom(t)&&(t.getAttribute(e)||T.svg(t)&&t[e])?"attribute":T.dom(t)&&"transform"!==e&&l(t,e)?"css":null!=t[e]?"object":void 0}function p(t,n){switch(d(t,n)){case"transform":return function(t,n){var r=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var o=[],i=[],a=[],u=/(\w+)\((.+?)\)/g;o=u.exec(t);)i.push(o[1]),a.push(o[2]);return(t=e(a,function(t,e){return i[e]===n})).length?t[0]:r}(t,n);case"css":return l(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function v(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function g(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function h(t){t=t.points;for(var e,n=0,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);0<r&&(n+=g(e,o)),e=o}return n}function m(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return g({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return h(t);case"polygon":var e=t.points;return h(t)+g(e.getItem(e.numberOfItems-1),e.getItem(0))}}function y(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),o=n(-1),i=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function b(t,e){var n,r=/-?\d*\.?\d+/g;if(n=T.pth(t)?t.totalLength:t,T.col(n))if(T.rgb(n)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=o?"rgba("+o[1]+",1)":n}else n=T.hex(n)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}(n):T.hsl(n)?function(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,o=parseInt(n[3])/100,n=n[4]||1;if(0==r)o=r=t=o;else{var i=.5>o?o*(1+r):o+r-o*r,a=2*o-i,o=e(a,i,t+1/3),r=e(a,i,t);t=e(a,i,t-1/3)}return"rgba("+255*o+","+255*r+","+255*t+","+n+")"}(n):void 0;else o=(o=c(n))?n.substr(0,n.length-o.length):n,n=e&&!/\s/g.test(n)?o+e:o;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:T.str(t)||e?n.split(r):[]}}function w(t){return e(t=t?n(T.arr(t)?t.map(r):r(t)):[],function(t,e,n){return n.indexOf(t)===e})}function x(t,e){var n=i(e);if(T.arr(t)){var o=t.length;2!==o||T.obj(t[0])?T.fnc(e.duration)||(n.duration=e.duration/o):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=T.obj(t)&&!T.pth(t)?t:{value:t},T.und(t.delay)&&(t.delay=n),t}).map(function(t){return s(t,n)})}function O(t,e){var n;return t.tweens.map(function(r){var o=(r=function(t,e){var n,r={};for(n in t){var o=f(t[n],e);T.arr(o)&&1===(o=o.map(function(t){return f(t,e)})).length&&(o=o[0]),r[n]=o}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,e)).value,i=p(e.target,t.name),a=n?n.to.original:i,a=T.arr(o)?o[0]:a,u=v(T.arr(o)?o[1]:o,a),i=c(u)||c(a)||c(i);return r.from=b(a,i),r.to=b(u,i),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return T.arr(t)?L.apply(this,t):_[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=T.pth(o),r.isColor=T.col(r.from.original),r.isColor&&(r.round=1),n=r})}function A(t,e,n,r){var o="delay"===t;return e.length?(o?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):o?r.delay:n.offset+r.delay+r.duration}function I(t){var r,o=a(j,t),i=a(P,t),u=function(t){var e=w(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}(t.targets),c=[],f=s(o,i);for(r in t)f.hasOwnProperty(r)||"targets"===r||c.push({name:r,offset:f.offset,tweens:x(t[r],i)});return t=function(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=d(t.target,e.name);if(n){var r=O(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!T.und(t)})}(u,c),s(o,{children:[],animatables:u,animations:t,duration:A("duration",t,o,i),delay:A("delay",t,o,i)})}function S(t){function n(){return window.Promise&&new Promise(function(t){return d=t})}function r(t){return v.reversed?v.duration-t:t}function o(t){for(var n=0,r={},o=v.animations,i=o.length;n<i;){var a=o[n],u=a.animatable,s=a.tweens,c=s.length-1,f=s[c];c&&(f=e(s,function(e){return t<e.end})[0]||f);for(var s=Math.min(Math.max(t-f.start-f.delay,0),f.duration)/f.duration,d=isNaN(s)?1:f.easing(s,f.elasticity),s=f.to.strings,p=f.round,c=[],g=void 0,g=f.to.numbers.length,h=0;h<g;h++){var m=void 0,m=f.to.numbers[h],b=f.from.numbers[h],m=f.isPath?y(f.value,d*m):b+d*(m-b);p&&(f.isColor&&2<h||(m=Math.round(m*p)/p)),c.push(m)}if(f=s.length)for(g=s[0],d=0;d<f;d++)p=s[d+1],h=c[d],isNaN(h)||(g=p?g+(h+p):g+(h+" "));else g=c[0];k[a.type](u.target,a.property,g,r,u.id),a.currentValue=g,n++}if(n=Object.keys(r).length)for(o=0;o<n;o++)M||(M=l(document.body,"transform")?"transform":"-webkit-transform"),v.animatables[o].target.style[M]=r[o].join(" ");v.currentTime=t,v.progress=t/v.duration*100}function i(t){v[t]&&v[t](v)}function a(){v.remaining&&!0!==v.remaining&&v.remaining--}function u(t){var e=v.duration,u=v.offset,l=u+v.delay,g=v.currentTime,h=v.reversed,m=r(t);if(v.children.length){var y=v.children,b=y.length;if(m>=v.currentTime)for(var w=0;w<b;w++)y[w].seek(m);else for(;b--;)y[b].seek(m)}(m>=l||!e)&&(v.began||(v.began=!0,i("begin")),i("run")),m>u&&m<e?o(m):(m<=u&&0!==g&&(o(0),h&&a()),(m>=e&&g!==e||!e)&&(o(e),h||a())),i("update"),t>=e&&(v.remaining?(c=s,"alternate"===v.direction&&(v.reversed=!v.reversed)):(v.pause(),v.completed||(v.completed=!0,i("complete"),"Promise"in window&&(d(),p=n()))),f=0)}t=void 0===t?{}:t;var s,c,f=0,d=null,p=n(),v=I(t);return v.reset=function(){var t=v.direction,e=v.loop;for(v.currentTime=0,v.progress=0,v.paused=!0,v.began=!1,v.completed=!1,v.reversed="reverse"===t,v.remaining="alternate"===t&&1===e?2:e,o(0),t=v.children.length;t--;)v.children[t].reset()},v.tick=function(t){s=t,c||(c=s),u((f+s-c)*S.speed)},v.seek=function(t){u(r(t))},v.pause=function(){var t=C.indexOf(v);-1<t&&C.splice(t,1),v.paused=!0},v.play=function(){v.paused&&(v.paused=!1,c=0,f=r(v.currentTime),C.push(v),F||U())},v.reverse=function(){v.reversed=!v.reversed,c=0,f=r(v.currentTime)},v.restart=function(){v.pause(),v.reset(),v.play()},v.finished=p,v.reset(),v.autoplay&&v.play(),v}var M,j={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},E="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),T={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return T.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||T.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return T.hex(t)||T.rgb(t)||T.hsl(t)}},L=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,o){if(0<=e&&1>=e&&0<=r&&1>=r){var i=new Float32Array(11);if(e!==n||r!==o)for(var a=0;11>a;++a)i[a]=t(.1*a,e,r);return function(a){if(e===n&&r===o)return a;if(0===a)return 0;if(1===a)return 1;for(var u=0,s=1;10!==s&&i[s]<=a;++s)u+=.1;var s=u+(a-i[--s])/(i[s+1]-i[s])*.1,c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&0!=(c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e);++u)var f=t(s,e,r)-a,s=s-f/c;a=s}else if(0===c)a=s;else{var s=u,u=u+.1,l=0;do{0<(c=t(f=s+(u-s)/2,e,r)-a)?u=f:s=f}while(1e-7<Math.abs(c)&&10>++l);a=f}return t(a,n,o)}}}}(),_=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},o={linear:L(.25,.25,.75,.75)},i={};for(e in r)i.type=e,r[i.type].forEach(function(t){return function(e,r){o["ease"+t.type+n[r]]=T.fnc(e)?e:L.apply(u,e)}}(i)),i={type:i.type};return o}(),k={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){r[o]||(r[o]=[]),r[o].push(e+"("+n+")")}},C=[],F=0,U=function(){function t(){F=requestAnimationFrame(e)}function e(e){var n=C.length;if(n){for(var r=0;r<n;)C[r]&&C[r].tick(e),r++;t()}else cancelAnimationFrame(F),F=0}return t}();return S.version="2.2.0",S.speed=1,S.running=C,S.remove=function(t){t=w(t);for(var e=C.length;e--;)for(var n=C[e],r=n.animations,i=r.length;i--;)o(t,r[i].animatable.target)&&(r.splice(i,1),r.length||n.pause())},S.getValue=p,S.path=function(e,n){var r=T.str(e)?t(e)[0]:e,o=n||100;return function(t){return{el:r,property:t,totalLength:m(r)*(o/100)}}},S.setDashoffset=function(t){var e=m(t);return t.setAttribute("stroke-dasharray",e),e},S.bezier=L,S.easings=_,S.timeline=function(t){var e=S(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=s(n,a(P,t||{}));r.targets=r.targets||t.targets,n=e.duration;var o=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=T.und(o)?n:v(o,n),e.began=!0,e.completed=!0,e.seek(r.offset),(r=S(r)).began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},S.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},S})?r.apply(e,o):r)||(t.exports=i)}).call(this,n(18))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=(0,r.default)(window).height(),e=(0,r.default)("#home-container"),n=(0,r.default)("#svgAttributes"),o=(t-n.height())/2;e.height()>t?((0,r.default)("#svgAttributes svg").css("margin-top","30px"),function(){var t=(0,r.default)("#home-container");(0,r.default)(".full-height-width").css("min-height",t.height())}()):(0,r.default)("#svgAttributes svg").css("margin-top",o)};var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1))},function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e,n){var r=n(29);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e,n){var r=n(32);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){}]);
//# sourceMappingURL=index.da93731a4e372f07c752.js.map