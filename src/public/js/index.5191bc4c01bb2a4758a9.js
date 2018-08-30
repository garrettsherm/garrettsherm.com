/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/page/index.js","jquery_vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/animejs/anime.min.js":
/*!*******************************************!*\
  !*** ./node_modules/animejs/anime.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/buttons.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/buttons.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/general.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/general.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/gradient-bg.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/gradient-bg.scss ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/reset.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/reset.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/social-icons.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/social-icons.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/spinner-overlay.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/spinner-overlay.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/pages/index/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/pages/index/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/modules/animeTimelines.js":
/*!******************************************!*\
  !*** ./src/js/modules/animeTimelines.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = callLogoTimeline;

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _animejs = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");

var _animejs2 = _interopRequireDefault(_animejs);

var _onResizeHome = __webpack_require__(/*! ./onResizeHome.js */ "./src/js/modules/onResizeHome.js");

var _onResizeHome2 = _interopRequireDefault(_onResizeHome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default function called to start the animation chain
function callLogoTimeline() {

	// Ensure that name, description, and button are not visible
	(0, _jquery2.default)('#name-animate').css('opacity', '0');
	(0, _jquery2.default)('#desc-animate').css('opacity', '0');
	(0, _jquery2.default)('#button-animate').css('opacity', '0');

	// credit to Tobias Ahlin (http://tobiasahlin.com/moving-letters/) effect 11
	// Used to wrap each letter in description in span for typing effect
	(0, _jquery2.default)('#desc-animate .letters').each(function () {
		(0, _jquery2.default)(this).html((0, _jquery2.default)(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

	// Remove the overlay from the page
	removeOverlay();

	// animejs timeline for logo svg drawing, scaling, & rotating
	var logoTimeline = _animejs2.default.timeline();

	logoTimeline
	// Draw rectangle 1
	.add({
		targets: '#svgAttributes #colored-rect-1',
		width: 500,
		height: 100,
		easing: 'easeInOutSine',
		direction: 'alternate',
		duration: 500
	})
	// Draw rectangle 2
	.add({
		targets: '#svgAttributes #colored-rect-2',
		width: 100,
		height: 500,
		easing: 'easeInOutSine',
		duration: 500
	})
	// Draw rectangle 3
	.add({
		targets: '#svgAttributes #colored-rect-3',
		width: 500,
		height: 100,
		easing: 'easeInOutSine',
		duration: 500
	})
	// Draw rectangle 4
	.add({
		targets: '#svgAttributes #colored-rect-4',
		width: 100,
		height: 300,
		easing: 'easeInOutSine',
		duration: 500
	})
	// Draw rectangle 5
	.add({
		targets: '#svgAttributes #colored-rect-5',
		width: 300,
		height: 100,
		easing: 'easeInOutSine',
		duration: 500
	})
	// fadein the shadow polygons
	.add({
		targets: '#svgAttributes .shadow-poly',
		opacity: 0.2,
		easing: 'easeInOutSine',
		duration: 500
	})
	// fadein rectangle gradients
	.add({
		targets: '#svgAttributes .grad-svg-rect',
		opacity: 0.1,
		easing: 'easeInOutSine',
		duration: 500
	})
	// scale and rotate svg
	.add({
		targets: '#svgAttributes svg',
		scale: {
			value: 0.5,
			duration: 1000,
			easing: 'easeInOutQuart'
		},
		rotate: {
			value: 315,
			duration: 1000,
			delay: 1000,
			easing: 'easeInOutSine'
		},
		//once finished call movoLogo to center scaled logo
		complete: moveLogo
	});
}

// Function to remove the overlay once css & js assets loaded


// Resize margin top function
// Credit to http://tobiasahlin.com/moving-letters/ for the animations
// Used effect 15 for title animation and effect 11 for description animation

// Node Modules
function removeOverlay() {

	// animejs timeline for slide up animation
	var overlayTimeline = _animejs2.default.timeline();

	overlayTimeline
	// slide up
	.add({
		targets: '#spinner-overlay',
		translateY: [0, '-100%'],
		easing: "easeInOutSine",
		duration: 1000
	});
}

// Function to center the content properly
function moveLogo() {

	// get the margin-top to be added to svg
	var newMarginTop = (0, _onResizeHome2.default)();

	// animejs timeline for centering of content
	var moveLogoTimeline = _animejs2.default.timeline();

	moveLogoTimeline
	// center logo svg with content
	.add({
		targets: '#svgAttributes svg',
		marginTop: newMarginTop,
		duration: 1000,
		easing: 'easeInOutSine',
		// once finished start name animation
		complete: animateName
	});
}

function animateName() {

	// revert opacity back to default
	(0, _jquery2.default)('#name-animate').css('opacity', '');

	// timeline to animate name
	var nameTimeline = _animejs2.default.timeline();

	nameTimeline.add({
		// scale out then in
		targets: '#name-animate .word',
		scale: [16, 1],
		opacity: [0, 1],
		easing: 'easeOutCirc',
		duration: 800,
		delay: function delay(e, i) {
			return 800 * i;
		},
		// once finished start the description animation
		complete: animateDescription
	});
}

//
function animateDescription() {

	// revert opacity back to default
	(0, _jquery2.default)('#desc-animate').css('opacity', '');

	// timeline to animate description
	var descriptionTimeline = _animejs2.default.timeline();

	descriptionTimeline.add({
		// start line for typing effect
		targets: '#desc-animate .line',
		scaleY: [0, 1],
		opacity: [0.5, 1],
		easing: "easeOutExpo",
		duration: 700
	})
	// move line to right for effect
	.add({
		targets: '#desc-animate .line',
		translateX: [0, (0, _jquery2.default)("#desc-animate .letters").width()],
		easing: "easeOutExpo",
		duration: 700,
		delay: 100
	})
	// type in letters effect
	.add({
		targets: '#desc-animate .letter',
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 600,
		offset: '-=775',
		delay: function delay(el, i) {
			return 34 * (i + 1);
		},
		// once finished continue to loop line and animate button
		complete: loopLineAnimateButton
	});
}

// Function to start loop typing line and start button animation
function loopLineAnimateButton() {
	loopLine();
	animateButton();
}

// Function to loop typing line
function loopLine() {

	// timeline to animate typing line (infinite)
	var loopTimeline = _animejs2.default.timeline({ loop: true });

	loopTimeline
	// blink out
	.add({
		targets: '#desc-animate .line',
		opacity: [1, 0],
		easing: 'easeOutExpo',
		duration: 800
	})
	// blink in
	.add({
		targets: '#desc-animate .line',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 800
	});
}

// Function to start button animation
function animateButton() {

	// revert button to default opacity
	(0, _jquery2.default)('#button-animate').css('opacity', '1');

	// timeline to animate button
	var buttonTimeline = _animejs2.default.timeline();

	buttonTimeline
	// fade button in
	.add({
		targets: '#button-animate .line',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 2000,
		complete: revertDescription
	});
}

// Function to remove spans from description (for seo/responsive display)
function revertDescription() {
	(0, _jquery2.default)('#desc-animate .letters').replaceWith('<span class="letters">Full Stack Developer</span>');
	infiniteRotate();
}

// Function to rotate svg logo (infinite)
function infiniteRotate() {

	// timeline to rotate logo
	var rotateTimeline = _animejs2.default.timeline({ loop: true });

	rotateTimeline
	// rotate to to G
	.add({
		targets: '#svgAttributes svg',
		scale: [0.5, 0.5],
		rotate: {
			value: 0,
			duration: 1500,
			easing: 'easeInOutQuint',
			delay: 8000
		}
	})
	// rotate to diagonal G
	.add({
		targets: '#svgAttributes svg',
		scale: [0.5, 0.5],
		rotate: {
			value: 315,
			duration: 1500,
			easing: 'easeInOutQuart',
			delay: 1000
		}
	});
}

/***/ }),

/***/ "./src/js/modules/initialHomeResize.js":
/*!*********************************************!*\
  !*** ./src/js/modules/initialHomeResize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = initialHomeResize;

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add margin top to when only Logo drawing (name/desc/button no showing)
function initialHomeResize() {

	var windowHeight = (0, _jquery2.default)(window).height();
	var homeContainerEl = (0, _jquery2.default)('#home-container');
	var svgEl = (0, _jquery2.default)('#svgAttributes');

	// margin to add 
	var startMargin = (windowHeight - svgEl.height()) / 2;

	// if homeContainer > window then no need to add padding to center
	// default to 30px
	if (homeContainerEl.height() > windowHeight) {
		(0, _jquery2.default)('#svgAttributes svg').css('margin-top', '30px');

		// make sure the background gradient covers entire homeContainer
		minHeightHomeContainer();
	}
	// if homeContainer <= window then add the margin to top
	else {
			(0, _jquery2.default)('#svgAttributes svg').css('margin-top', startMargin);
		}
}

// Function to make sure gradient background covers all content
function minHeightHomeContainer() {
	var homeContainerEl = (0, _jquery2.default)('#home-container');
	(0, _jquery2.default)('.full-height-width').css('min-height', homeContainerEl.height());
}

/***/ }),

/***/ "./src/js/modules/onResizeHome.js":
/*!****************************************!*\
  !*** ./src/js/modules/onResizeHome.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = resizeMarginTopLogo;

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// resize margintop on svg to center content
function resizeMarginTopLogo() {

	var windowHeight = (0, _jquery2.default)(window).height();

	var svgAttrMarginTop = parseInt((0, _jquery2.default)('#svgAttributes svg').css('margin-top'));

	// get home container height without margin top
	var homeContainerHeight = (0, _jquery2.default)('#home-container').height() - svgAttrMarginTop;

	// get svgAttr height without margin top
	var svgAttrHeight = (0, _jquery2.default)('#svgAttributes').height() - svgAttrMarginTop;

	// calculate height of 0.5 scaled & diagonal svg 
	var svgHeight = Math.sqrt(Math.pow(svgAttrHeight / 2, 2) * 2);

	// Get visual padding on the top of svg logo
	var svgPadding = (svgAttrHeight - svgHeight) / 2;

	// if the homeContainer < window then need padding to center
	if (homeContainerHeight < windowHeight) {

		// calculate space below homeContainer content
		var belowContainerHeight = windowHeight - homeContainerHeight;

		// if space below < space above logo then no need for margin centering
		if (belowContainerHeight < svgPadding) return 0;

		// Know that leftover >= 0
		var leftover = belowContainerHeight - svgPadding;

		// cut leftover in half = amount to add to margin
		var amountToMarginTop = leftover / 2;

		return amountToMarginTop;
	}
	// if the homeContainer >= window no need for margin-top 
	else {
			return 0;
		}
}

/***/ }),

/***/ "./src/js/page/index.js":
/*!******************************!*\
  !*** ./src/js/page/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _animeTimelines = __webpack_require__(/*! ../modules/animeTimelines.js */ "./src/js/modules/animeTimelines.js");

var _animeTimelines2 = _interopRequireDefault(_animeTimelines);

var _initialHomeResize = __webpack_require__(/*! ../modules/initialHomeResize.js */ "./src/js/modules/initialHomeResize.js");

var _initialHomeResize2 = _interopRequireDefault(_initialHomeResize);

var _onResizeHome = __webpack_require__(/*! ../modules/onResizeHome.js */ "./src/js/modules/onResizeHome.js");

var _onResizeHome2 = _interopRequireDefault(_onResizeHome);

__webpack_require__(/*! ../../scss/modules/reset.scss */ "./src/scss/modules/reset.scss");

__webpack_require__(/*! ../../scss/modules/general.scss */ "./src/scss/modules/general.scss");

__webpack_require__(/*! ../../scss/modules/buttons.scss */ "./src/scss/modules/buttons.scss");

__webpack_require__(/*! ../../scss/modules/gradient-bg.scss */ "./src/scss/modules/gradient-bg.scss");

__webpack_require__(/*! ../../scss/modules/social-icons.scss */ "./src/scss/modules/social-icons.scss");

__webpack_require__(/*! ../../scss/modules/spinner-overlay.scss */ "./src/scss/modules/spinner-overlay.scss");

__webpack_require__(/*! ../../scss/pages/index/index.scss */ "./src/scss/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Run on js load


// Animation functions for homepage

// Node Modules
(0, _jquery2.default)(function () {

	// Initial center of logo svg
	(0, _initialHomeResize2.default)();

	// Start animation of logo/title/description/button
	(0, _animeTimelines2.default)();
});

// On page resize add proper margin-top to center content
// lodash debounce is used to prevent resize function from firing too often
// set to only fire 500ms after last call to resize finished


// Index page css


// Individual lodash functions
(0, _jquery2.default)(window).on('resize', (0, _lodash2.default)(function () {

	// get the new margin-top needed to center content, 0 if screen too small to center
	var newMarginTop = (0, _onResizeHome2.default)();

	// add new margin-top to svg
	(0, _jquery2.default)('#svgAttributes svg').css('margin-top', newMarginTop);

	// Calculate the actual height of the homecontainer without margin-top
	var homeContainerHeight = (0, _jquery2.default)('#home-container').height() - newMarginTop;

	// ensure that the full-height-width background covers the entire homeContainer
	(0, _jquery2.default)('.full-height-width').css('min-height', homeContainerHeight);
}, 500));

/***/ }),

/***/ "./src/scss/modules/buttons.scss":
/*!***************************************!*\
  !*** ./src/scss/modules/buttons.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./buttons.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/buttons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/modules/general.scss":
/*!***************************************!*\
  !*** ./src/scss/modules/general.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./general.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/general.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/modules/gradient-bg.scss":
/*!*******************************************!*\
  !*** ./src/scss/modules/gradient-bg.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./gradient-bg.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/gradient-bg.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/modules/reset.scss":
/*!*************************************!*\
  !*** ./src/scss/modules/reset.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./reset.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/reset.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/modules/social-icons.scss":
/*!********************************************!*\
  !*** ./src/scss/modules/social-icons.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./social-icons.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/social-icons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/modules/spinner-overlay.scss":
/*!***********************************************!*\
  !*** ./src/scss/modules/spinner-overlay.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./spinner-overlay.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/spinner-overlay.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/pages/index/index.scss":
/*!*****************************************!*\
  !*** ./src/scss/pages/index/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/pages/index/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvYW5pbWUubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9idXR0b25zLnNjc3M/YmQ5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2dlbmVyYWwuc2Nzcz83OWU1Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvZ3JhZGllbnQtYmcuc2Nzcz9iODE3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvcmVzZXQuc2Nzcz9hZDRlIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvc29jaWFsLWljb25zLnNjc3M/ZTk1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3NwaW5uZXItb3ZlcmxheS5zY3NzPzEzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvcGFnZXMvaW5kZXgvaW5kZXguc2Nzcz9iZWJjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYW5pbWVUaW1lbGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvaW5pdGlhbEhvbWVSZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvb25SZXNpemVIb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvYnV0dG9ucy5zY3NzPzcwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9nZW5lcmFsLnNjc3M/MWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2dyYWRpZW50LWJnLnNjc3M/ZTY3NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3Jlc2V0LnNjc3M/ZTUwZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3NvY2lhbC1pY29ucy5zY3NzPzJhMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9zcGlubmVyLW92ZXJsYXkuc2Nzcz8wODE4Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL3BhZ2VzL2luZGV4L2luZGV4LnNjc3M/NDIyNiJdLCJuYW1lcyI6WyJjYWxsTG9nb1RpbWVsaW5lIiwiY3NzIiwiZWFjaCIsImh0bWwiLCJ0ZXh0IiwicmVwbGFjZSIsInJlbW92ZU92ZXJsYXkiLCJsb2dvVGltZWxpbmUiLCJhbmltZSIsInRpbWVsaW5lIiwiYWRkIiwidGFyZ2V0cyIsIndpZHRoIiwiaGVpZ2h0IiwiZWFzaW5nIiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5Iiwic2NhbGUiLCJ2YWx1ZSIsInJvdGF0ZSIsImRlbGF5IiwiY29tcGxldGUiLCJtb3ZlTG9nbyIsIm92ZXJsYXlUaW1lbGluZSIsInRyYW5zbGF0ZVkiLCJuZXdNYXJnaW5Ub3AiLCJtb3ZlTG9nb1RpbWVsaW5lIiwibWFyZ2luVG9wIiwiYW5pbWF0ZU5hbWUiLCJuYW1lVGltZWxpbmUiLCJlIiwiaSIsImFuaW1hdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGltZWxpbmUiLCJzY2FsZVkiLCJ0cmFuc2xhdGVYIiwib2Zmc2V0IiwiZWwiLCJsb29wTGluZUFuaW1hdGVCdXR0b24iLCJsb29wTGluZSIsImFuaW1hdGVCdXR0b24iLCJsb29wVGltZWxpbmUiLCJsb29wIiwiYnV0dG9uVGltZWxpbmUiLCJyZXZlcnREZXNjcmlwdGlvbiIsInJlcGxhY2VXaXRoIiwiaW5maW5pdGVSb3RhdGUiLCJyb3RhdGVUaW1lbGluZSIsImluaXRpYWxIb21lUmVzaXplIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaG9tZUNvbnRhaW5lckVsIiwic3ZnRWwiLCJzdGFydE1hcmdpbiIsIm1pbkhlaWdodEhvbWVDb250YWluZXIiLCJyZXNpemVNYXJnaW5Ub3BMb2dvIiwic3ZnQXR0ck1hcmdpblRvcCIsInBhcnNlSW50IiwiaG9tZUNvbnRhaW5lckhlaWdodCIsInN2Z0F0dHJIZWlnaHQiLCJzdmdIZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsInN2Z1BhZGRpbmciLCJiZWxvd0NvbnRhaW5lckhlaWdodCIsImxlZnRvdmVyIiwiYW1vdW50VG9NYXJnaW5Ub3AiLCJvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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QUNuQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsY0FFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUFWLENBQWEsUUFBYixFQUF1QixzQkFBUyxZQUFVOztBQUV6QztBQUNBLEtBQU0zQyxlQUFlLDZCQUFyQjs7QUFFQTtBQUNBLHVCQUFFLG9CQUFGLEVBQXdCekIsR0FBeEIsQ0FBNEIsWUFBNUIsRUFBMEN5QixZQUExQzs7QUFFQTtBQUNBLEtBQU1pQyxzQkFBc0Isc0JBQUUsaUJBQUYsRUFBcUI5QyxNQUFyQixLQUFnQ2EsWUFBNUQ7O0FBRUE7QUFDQSx1QkFBRSxvQkFBRixFQUF3QnpCLEdBQXhCLENBQTRCLFlBQTVCLEVBQTBDMEQsbUJBQTFDO0FBRUEsQ0Fkc0IsRUFjcEIsR0Fkb0IsQ0FBdkIsRTs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJqcy9pbmRleC41MTkxYmM0YzAxYmIyYTQ3NThhOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvanMvcGFnZS9pbmRleC5qc1wiLFwianF1ZXJ5X3ZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qXG4gMjAxNyBKdWxpYW4gR2FybmllclxuIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKi9cbnZhciAkanNjb21wPXtzY29wZTp7fX07JGpzY29tcC5kZWZpbmVQcm9wZXJ0eT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZSxyLHApe2lmKHAuZ2V0fHxwLnNldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRVMzIGRvZXMgbm90IHN1cHBvcnQgZ2V0dGVycyBhbmQgc2V0dGVycy5cIik7ZSE9QXJyYXkucHJvdG90eXBlJiZlIT1PYmplY3QucHJvdG90eXBlJiYoZVtyXT1wLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09ZT9lOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6ZX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7JGpzY29tcC5TWU1CT0xfUFJFRklYPVwianNjb21wX3N5bWJvbF9cIjtcbiRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpe307JGpzY29tcC5nbG9iYWwuU3ltYm9sfHwoJGpzY29tcC5nbG9iYWwuU3ltYm9sPSRqc2NvbXAuU3ltYm9sKX07JGpzY29tcC5zeW1ib2xDb3VudGVyXz0wOyRqc2NvbXAuU3ltYm9sPWZ1bmN0aW9uKGUpe3JldHVybiAkanNjb21wLlNZTUJPTF9QUkVGSVgrKGV8fFwiXCIpKyRqc2NvbXAuc3ltYm9sQ291bnRlcl8rK307XG4kanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbCgpO3ZhciBlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcjtlfHwoZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I9JGpzY29tcC5nbG9iYWwuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtlXSYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuYXJyYXlJdGVyYXRvcih0aGlzKX19KTskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpe319OyRqc2NvbXAuYXJyYXlJdGVyYXRvcj1mdW5jdGlvbihlKXt2YXIgcj0wO3JldHVybiAkanNjb21wLml0ZXJhdG9yUHJvdG90eXBlKGZ1bmN0aW9uKCl7cmV0dXJuIHI8ZS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6ZVtyKytdfTp7ZG9uZTohMH19KX07XG4kanNjb21wLml0ZXJhdG9yUHJvdG90eXBlPWZ1bmN0aW9uKGUpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZT17bmV4dDplfTtlWyRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGV9OyRqc2NvbXAuYXJyYXk9JGpzY29tcC5hcnJheXx8e307JGpzY29tcC5pdGVyYXRvckZyb21BcnJheT1mdW5jdGlvbihlLHIpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSBpbnN0YW5jZW9mIFN0cmluZyYmKGUrPVwiXCIpO3ZhciBwPTAsbT17bmV4dDpmdW5jdGlvbigpe2lmKHA8ZS5sZW5ndGgpe3ZhciB1PXArKztyZXR1cm57dmFsdWU6cih1LGVbdV0pLGRvbmU6ITF9fW0ubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH19O3JldHVybiBtLm5leHQoKX19O21bU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBtfTtyZXR1cm4gbX07XG4kanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGUscixwLG0pe2lmKHIpe3A9JGpzY29tcC5nbG9iYWw7ZT1lLnNwbGl0KFwiLlwiKTtmb3IobT0wO208ZS5sZW5ndGgtMTttKyspe3ZhciB1PWVbbV07dSBpbiBwfHwocFt1XT17fSk7cD1wW3VdfWU9ZVtlLmxlbmd0aC0xXTttPXBbZV07cj1yKG0pO3IhPW0mJm51bGwhPXImJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkocCxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGU/ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLml0ZXJhdG9yRnJvbUFycmF5KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX19LFwiZXM2LWltcGxcIixcImVzM1wiKTt2YXIgJGpzY29tcCR0aGlzPXRoaXM7XG4oZnVuY3Rpb24oZSxyKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxyKTpcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9cigpOmUuYW5pbWU9cigpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7aWYoIWguY29sKGEpKXRyeXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKX1jYXRjaChjKXt9fWZ1bmN0aW9uIHIoYSxjKXtmb3IodmFyIGQ9YS5sZW5ndGgsYj0yPD1hcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTp2b2lkIDAsZj1bXSxuPTA7bjxkO24rKylpZihuIGluIGEpe3ZhciBrPWFbbl07Yy5jYWxsKGIsayxuLGEpJiZmLnB1c2goayl9cmV0dXJuIGZ9ZnVuY3Rpb24gcChhKXtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxkKXtyZXR1cm4gYS5jb25jYXQoaC5hcnIoZCk/cChkKTpkKX0sW10pfWZ1bmN0aW9uIG0oYSl7aWYoaC5hcnIoYSkpcmV0dXJuIGE7XG5oLnN0cihhKSYmKGE9ZShhKXx8YSk7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlTGlzdHx8YSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uP1tdLnNsaWNlLmNhbGwoYSk6W2FdfWZ1bmN0aW9uIHUoYSxjKXtyZXR1cm4gYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Y30pfWZ1bmN0aW9uIEMoYSl7dmFyIGM9e30sZDtmb3IoZCBpbiBhKWNbZF09YVtkXTtyZXR1cm4gY31mdW5jdGlvbiBEKGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGEpZFtiXT1jLmhhc093blByb3BlcnR5KGIpP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiB6KGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGMpZFtiXT1oLnVuZChhW2JdKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXthPWEucmVwbGFjZSgvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGZ1bmN0aW9uKGEsYyxkLGspe3JldHVybiBjK2MrZCtkK2sra30pO3ZhciBjPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhhKTtcbmE9cGFyc2VJbnQoY1sxXSwxNik7dmFyIGQ9cGFyc2VJbnQoY1syXSwxNiksYz1wYXJzZUludChjWzNdLDE2KTtyZXR1cm5cInJnYmEoXCIrYStcIixcIitkK1wiLFwiK2MrXCIsMSlcIn1mdW5jdGlvbiBVKGEpe2Z1bmN0aW9uIGMoYSxjLGIpezA+YiYmKGIrPTEpOzE8YiYmLS1iO3JldHVybiBiPDEvNj9hKzYqKGMtYSkqYjouNT5iP2M6YjwyLzM/YSsoYy1hKSooMi8zLWIpKjY6YX12YXIgZD0vaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhhKXx8L2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoYSk7YT1wYXJzZUludChkWzFdKS8zNjA7dmFyIGI9cGFyc2VJbnQoZFsyXSkvMTAwLGY9cGFyc2VJbnQoZFszXSkvMTAwLGQ9ZFs0XXx8MTtpZigwPT1iKWY9Yj1hPWY7ZWxzZXt2YXIgbj0uNT5mP2YqKDErYik6ZitiLWYqYixrPTIqZi1uLGY9YyhrLG4sYSsxLzMpLGI9YyhrLG4sYSk7YT1jKGssbixhLTEvMyl9cmV0dXJuXCJyZ2JhKFwiK1xuMjU1KmYrXCIsXCIrMjU1KmIrXCIsXCIrMjU1KmErXCIsXCIrZCtcIilcIn1mdW5jdGlvbiB5KGEpe2lmKGE9LyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKGEpKXJldHVybiBhWzJdfWZ1bmN0aW9uIFYoYSl7aWYoLTE8YS5pbmRleE9mKFwidHJhbnNsYXRlXCIpfHxcInBlcnNwZWN0aXZlXCI9PT1hKXJldHVyblwicHhcIjtpZigtMTxhLmluZGV4T2YoXCJyb3RhdGVcIil8fC0xPGEuaW5kZXhPZihcInNrZXdcIikpcmV0dXJuXCJkZWdcIn1mdW5jdGlvbiBJKGEsYyl7cmV0dXJuIGguZm5jKGEpP2EoYy50YXJnZXQsYy5pZCxjLnRvdGFsKTphfWZ1bmN0aW9uIEUoYSxjKXtpZihjIGluIGEuc3R5bGUpcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShjLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpKXx8XCIwXCJ9ZnVuY3Rpb24gSihhLGMpe2lmKGguZG9tKGEpJiZcbnUoVyxjKSlyZXR1cm5cInRyYW5zZm9ybVwiO2lmKGguZG9tKGEpJiYoYS5nZXRBdHRyaWJ1dGUoYyl8fGguc3ZnKGEpJiZhW2NdKSlyZXR1cm5cImF0dHJpYnV0ZVwiO2lmKGguZG9tKGEpJiZcInRyYW5zZm9ybVwiIT09YyYmRShhLGMpKXJldHVyblwiY3NzXCI7aWYobnVsbCE9YVtjXSlyZXR1cm5cIm9iamVjdFwifWZ1bmN0aW9uIFgoYSxjKXt2YXIgZD1WKGMpLGQ9LTE8Yy5pbmRleE9mKFwic2NhbGVcIik/MTowK2Q7YT1hLnN0eWxlLnRyYW5zZm9ybTtpZighYSlyZXR1cm4gZDtmb3IodmFyIGI9W10sZj1bXSxuPVtdLGs9LyhcXHcrKVxcKCguKz8pXFwpL2c7Yj1rLmV4ZWMoYSk7KWYucHVzaChiWzFdKSxuLnB1c2goYlsyXSk7YT1yKG4sZnVuY3Rpb24oYSxiKXtyZXR1cm4gZltiXT09PWN9KTtyZXR1cm4gYS5sZW5ndGg/YVswXTpkfWZ1bmN0aW9uIEsoYSxjKXtzd2l0Y2goSihhLGMpKXtjYXNlIFwidHJhbnNmb3JtXCI6cmV0dXJuIFgoYSxjKTtjYXNlIFwiY3NzXCI6cmV0dXJuIEUoYSxjKTtjYXNlIFwiYXR0cmlidXRlXCI6cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGMpfXJldHVybiBhW2NdfHxcbjB9ZnVuY3Rpb24gTChhLGMpe3ZhciBkPS9eKFxcKj18XFwrPXwtPSkvLmV4ZWMoYSk7aWYoIWQpcmV0dXJuIGE7dmFyIGI9eShhKXx8MDtjPXBhcnNlRmxvYXQoYyk7YT1wYXJzZUZsb2F0KGEucmVwbGFjZShkWzBdLFwiXCIpKTtzd2l0Y2goZFswXVswXSl7Y2FzZSBcIitcIjpyZXR1cm4gYythK2I7Y2FzZSBcIi1cIjpyZXR1cm4gYy1hK2I7Y2FzZSBcIipcIjpyZXR1cm4gYyphK2J9fWZ1bmN0aW9uIEYoYSxjKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGMueC1hLngsMikrTWF0aC5wb3coYy55LWEueSwyKSl9ZnVuY3Rpb24gTShhKXthPWEucG9pbnRzO2Zvcih2YXIgYz0wLGQsYj0wO2I8YS5udW1iZXJPZkl0ZW1zO2IrKyl7dmFyIGY9YS5nZXRJdGVtKGIpOzA8YiYmKGMrPUYoZCxmKSk7ZD1mfXJldHVybiBjfWZ1bmN0aW9uIE4oYSl7aWYoYS5nZXRUb3RhbExlbmd0aClyZXR1cm4gYS5nZXRUb3RhbExlbmd0aCgpO3N3aXRjaChhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZSBcImNpcmNsZVwiOnJldHVybiAyKlxuTWF0aC5QSSphLmdldEF0dHJpYnV0ZShcInJcIik7Y2FzZSBcInJlY3RcIjpyZXR1cm4gMiphLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpKzIqYS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7Y2FzZSBcImxpbmVcIjpyZXR1cm4gRih7eDphLmdldEF0dHJpYnV0ZShcIngxXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MVwiKX0se3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MlwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTJcIil9KTtjYXNlIFwicG9seWxpbmVcIjpyZXR1cm4gTShhKTtjYXNlIFwicG9seWdvblwiOnZhciBjPWEucG9pbnRzO3JldHVybiBNKGEpK0YoYy5nZXRJdGVtKGMubnVtYmVyT2ZJdGVtcy0xKSxjLmdldEl0ZW0oMCkpfX1mdW5jdGlvbiBZKGEsYyl7ZnVuY3Rpb24gZChiKXtiPXZvaWQgMD09PWI/MDpiO3JldHVybiBhLmVsLmdldFBvaW50QXRMZW5ndGgoMTw9YytiP2MrYjowKX12YXIgYj1kKCksZj1kKC0xKSxuPWQoMSk7c3dpdGNoKGEucHJvcGVydHkpe2Nhc2UgXCJ4XCI6cmV0dXJuIGIueDtjYXNlIFwieVwiOnJldHVybiBiLnk7XG5jYXNlIFwiYW5nbGVcIjpyZXR1cm4gMTgwKk1hdGguYXRhbjIobi55LWYueSxuLngtZi54KS9NYXRoLlBJfX1mdW5jdGlvbiBPKGEsYyl7dmFyIGQ9Ly0/XFxkKlxcLj9cXGQrL2csYjtiPWgucHRoKGEpP2EudG90YWxMZW5ndGg6YTtpZihoLmNvbChiKSlpZihoLnJnYihiKSl7dmFyIGY9L3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKGIpO2I9Zj9cInJnYmEoXCIrZlsxXStcIiwxKVwiOmJ9ZWxzZSBiPWguaGV4KGIpP1QoYik6aC5oc2woYik/VShiKTp2b2lkIDA7ZWxzZSBmPShmPXkoYikpP2Iuc3Vic3RyKDAsYi5sZW5ndGgtZi5sZW5ndGgpOmIsYj1jJiYhL1xccy9nLnRlc3QoYik/ZitjOmY7Yis9XCJcIjtyZXR1cm57b3JpZ2luYWw6YixudW1iZXJzOmIubWF0Y2goZCk/Yi5tYXRjaChkKS5tYXAoTnVtYmVyKTpbMF0sc3RyaW5nczpoLnN0cihhKXx8Yz9iLnNwbGl0KGQpOltdfX1mdW5jdGlvbiBQKGEpe2E9YT9wKGguYXJyKGEpP2EubWFwKG0pOm0oYSkpOltdO3JldHVybiByKGEsXG5mdW5jdGlvbihhLGQsYil7cmV0dXJuIGIuaW5kZXhPZihhKT09PWR9KX1mdW5jdGlvbiBaKGEpe3ZhciBjPVAoYSk7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJue3RhcmdldDphLGlkOmIsdG90YWw6Yy5sZW5ndGh9fSl9ZnVuY3Rpb24gYWEoYSxjKXt2YXIgZD1DKGMpO2lmKGguYXJyKGEpKXt2YXIgYj1hLmxlbmd0aDsyIT09Ynx8aC5vYmooYVswXSk/aC5mbmMoYy5kdXJhdGlvbil8fChkLmR1cmF0aW9uPWMuZHVyYXRpb24vYik6YT17dmFsdWU6YX19cmV0dXJuIG0oYSkubWFwKGZ1bmN0aW9uKGEsYil7Yj1iPzA6Yy5kZWxheTthPWgub2JqKGEpJiYhaC5wdGgoYSk/YTp7dmFsdWU6YX07aC51bmQoYS5kZWxheSkmJihhLmRlbGF5PWIpO3JldHVybiBhfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB6KGEsZCl9KX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXt9LGI7Zm9yKGIgaW4gYSl7dmFyIGY9SShhW2JdLGMpO2guYXJyKGYpJiYoZj1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gSShhLFxuYyl9KSwxPT09Zi5sZW5ndGgmJihmPWZbMF0pKTtkW2JdPWZ9ZC5kdXJhdGlvbj1wYXJzZUZsb2F0KGQuZHVyYXRpb24pO2QuZGVsYXk9cGFyc2VGbG9hdChkLmRlbGF5KTtyZXR1cm4gZH1mdW5jdGlvbiBjYShhKXtyZXR1cm4gaC5hcnIoYSk/QS5hcHBseSh0aGlzLGEpOlFbYV19ZnVuY3Rpb24gZGEoYSxjKXt2YXIgZDtyZXR1cm4gYS50d2VlbnMubWFwKGZ1bmN0aW9uKGIpe2I9YmEoYixjKTt2YXIgZj1iLnZhbHVlLGU9SyhjLnRhcmdldCxhLm5hbWUpLGs9ZD9kLnRvLm9yaWdpbmFsOmUsaz1oLmFycihmKT9mWzBdOmssdz1MKGguYXJyKGYpP2ZbMV06ZixrKSxlPXkodyl8fHkoayl8fHkoZSk7Yi5mcm9tPU8oayxlKTtiLnRvPU8odyxlKTtiLnN0YXJ0PWQ/ZC5lbmQ6YS5vZmZzZXQ7Yi5lbmQ9Yi5zdGFydCtiLmRlbGF5K2IuZHVyYXRpb247Yi5lYXNpbmc9Y2EoYi5lYXNpbmcpO2IuZWxhc3RpY2l0eT0oMUUzLU1hdGgubWluKE1hdGgubWF4KGIuZWxhc3RpY2l0eSwxKSw5OTkpKS9cbjFFMztiLmlzUGF0aD1oLnB0aChmKTtiLmlzQ29sb3I9aC5jb2woYi5mcm9tLm9yaWdpbmFsKTtiLmlzQ29sb3ImJihiLnJvdW5kPTEpO3JldHVybiBkPWJ9KX1mdW5jdGlvbiBlYShhLGMpe3JldHVybiByKHAoYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGIpe3ZhciBjPUooYS50YXJnZXQsYi5uYW1lKTtpZihjKXt2YXIgZD1kYShiLGEpO2I9e3R5cGU6Yyxwcm9wZXJ0eTpiLm5hbWUsYW5pbWF0YWJsZTphLHR3ZWVuczpkLGR1cmF0aW9uOmRbZC5sZW5ndGgtMV0uZW5kLGRlbGF5OmRbMF0uZGVsYXl9fWVsc2UgYj12b2lkIDA7cmV0dXJuIGJ9KX0pKSxmdW5jdGlvbihhKXtyZXR1cm4haC51bmQoYSl9KX1mdW5jdGlvbiBSKGEsYyxkLGIpe3ZhciBmPVwiZGVsYXlcIj09PWE7cmV0dXJuIGMubGVuZ3RoPyhmP01hdGgubWluOk1hdGgubWF4KS5hcHBseShNYXRoLGMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiW2FdfSkpOmY/Yi5kZWxheTpkLm9mZnNldCtiLmRlbGF5K1xuYi5kdXJhdGlvbn1mdW5jdGlvbiBmYShhKXt2YXIgYz1EKGdhLGEpLGQ9RChTLGEpLGI9WihhLnRhcmdldHMpLGY9W10sZT16KGMsZCksaztmb3IoayBpbiBhKWUuaGFzT3duUHJvcGVydHkoayl8fFwidGFyZ2V0c1wiPT09a3x8Zi5wdXNoKHtuYW1lOmssb2Zmc2V0OmUub2Zmc2V0LHR3ZWVuczphYShhW2tdLGQpfSk7YT1lYShiLGYpO3JldHVybiB6KGMse2NoaWxkcmVuOltdLGFuaW1hdGFibGVzOmIsYW5pbWF0aW9uczphLGR1cmF0aW9uOlIoXCJkdXJhdGlvblwiLGEsYyxkKSxkZWxheTpSKFwiZGVsYXlcIixhLGMsZCl9KX1mdW5jdGlvbiBxKGEpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gd2luZG93LlByb21pc2UmJm5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe3JldHVybiBwPWF9KX1mdW5jdGlvbiBkKGEpe3JldHVybiBnLnJldmVyc2VkP2cuZHVyYXRpb24tYTphfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTAsYz17fSxkPWcuYW5pbWF0aW9ucyxmPWQubGVuZ3RoO2I8Zjspe3ZhciBlPWRbYl0sXG5rPWUuYW5pbWF0YWJsZSxoPWUudHdlZW5zLG49aC5sZW5ndGgtMSxsPWhbbl07biYmKGw9cihoLGZ1bmN0aW9uKGIpe3JldHVybiBhPGIuZW5kfSlbMF18fGwpO2Zvcih2YXIgaD1NYXRoLm1pbihNYXRoLm1heChhLWwuc3RhcnQtbC5kZWxheSwwKSxsLmR1cmF0aW9uKS9sLmR1cmF0aW9uLHc9aXNOYU4oaCk/MTpsLmVhc2luZyhoLGwuZWxhc3RpY2l0eSksaD1sLnRvLnN0cmluZ3MscD1sLnJvdW5kLG49W10sbT12b2lkIDAsbT1sLnRvLm51bWJlcnMubGVuZ3RoLHQ9MDt0PG07dCsrKXt2YXIgeD12b2lkIDAseD1sLnRvLm51bWJlcnNbdF0scT1sLmZyb20ubnVtYmVyc1t0XSx4PWwuaXNQYXRoP1kobC52YWx1ZSx3KngpOnErdyooeC1xKTtwJiYobC5pc0NvbG9yJiYyPHR8fCh4PU1hdGgucm91bmQoeCpwKS9wKSk7bi5wdXNoKHgpfWlmKGw9aC5sZW5ndGgpZm9yKG09aFswXSx3PTA7dzxsO3crKylwPWhbdysxXSx0PW5bd10saXNOYU4odCl8fChtPXA/bSsodCtwKTptKyh0K1wiIFwiKSk7XG5lbHNlIG09blswXTtoYVtlLnR5cGVdKGsudGFyZ2V0LGUucHJvcGVydHksbSxjLGsuaWQpO2UuY3VycmVudFZhbHVlPW07YisrfWlmKGI9T2JqZWN0LmtleXMoYykubGVuZ3RoKWZvcihkPTA7ZDxiO2QrKylIfHwoSD1FKGRvY3VtZW50LmJvZHksXCJ0cmFuc2Zvcm1cIik/XCJ0cmFuc2Zvcm1cIjpcIi13ZWJraXQtdHJhbnNmb3JtXCIpLGcuYW5pbWF0YWJsZXNbZF0udGFyZ2V0LnN0eWxlW0hdPWNbZF0uam9pbihcIiBcIik7Zy5jdXJyZW50VGltZT1hO2cucHJvZ3Jlc3M9YS9nLmR1cmF0aW9uKjEwMH1mdW5jdGlvbiBmKGEpe2lmKGdbYV0pZ1thXShnKX1mdW5jdGlvbiBlKCl7Zy5yZW1haW5pbmcmJiEwIT09Zy5yZW1haW5pbmcmJmcucmVtYWluaW5nLS19ZnVuY3Rpb24gayhhKXt2YXIgaz1nLmR1cmF0aW9uLG49Zy5vZmZzZXQsdz1uK2cuZGVsYXkscj1nLmN1cnJlbnRUaW1lLHg9Zy5yZXZlcnNlZCxxPWQoYSk7aWYoZy5jaGlsZHJlbi5sZW5ndGgpe3ZhciB1PWcuY2hpbGRyZW4sdj11Lmxlbmd0aDtcbmlmKHE+PWcuY3VycmVudFRpbWUpZm9yKHZhciBHPTA7Rzx2O0crKyl1W0ddLnNlZWsocSk7ZWxzZSBmb3IoO3YtLTspdVt2XS5zZWVrKHEpfWlmKHE+PXd8fCFrKWcuYmVnYW58fChnLmJlZ2FuPSEwLGYoXCJiZWdpblwiKSksZihcInJ1blwiKTtpZihxPm4mJnE8ayliKHEpO2Vsc2UgaWYocTw9biYmMCE9PXImJihiKDApLHgmJmUoKSkscT49ayYmciE9PWt8fCFrKWIoaykseHx8ZSgpO2YoXCJ1cGRhdGVcIik7YT49ayYmKGcucmVtYWluaW5nPyh0PWgsXCJhbHRlcm5hdGVcIj09PWcuZGlyZWN0aW9uJiYoZy5yZXZlcnNlZD0hZy5yZXZlcnNlZCkpOihnLnBhdXNlKCksZy5jb21wbGV0ZWR8fChnLmNvbXBsZXRlZD0hMCxmKFwiY29tcGxldGVcIiksXCJQcm9taXNlXCJpbiB3aW5kb3cmJihwKCksbT1jKCkpKSksbD0wKX1hPXZvaWQgMD09PWE/e306YTt2YXIgaCx0LGw9MCxwPW51bGwsbT1jKCksZz1mYShhKTtnLnJlc2V0PWZ1bmN0aW9uKCl7dmFyIGE9Zy5kaXJlY3Rpb24sYz1nLmxvb3A7Zy5jdXJyZW50VGltZT1cbjA7Zy5wcm9ncmVzcz0wO2cucGF1c2VkPSEwO2cuYmVnYW49ITE7Zy5jb21wbGV0ZWQ9ITE7Zy5yZXZlcnNlZD1cInJldmVyc2VcIj09PWE7Zy5yZW1haW5pbmc9XCJhbHRlcm5hdGVcIj09PWEmJjE9PT1jPzI6YztiKDApO2ZvcihhPWcuY2hpbGRyZW4ubGVuZ3RoO2EtLTspZy5jaGlsZHJlblthXS5yZXNldCgpfTtnLnRpY2s9ZnVuY3Rpb24oYSl7aD1hO3R8fCh0PWgpO2soKGwraC10KSpxLnNwZWVkKX07Zy5zZWVrPWZ1bmN0aW9uKGEpe2soZChhKSl9O2cucGF1c2U9ZnVuY3Rpb24oKXt2YXIgYT12LmluZGV4T2YoZyk7LTE8YSYmdi5zcGxpY2UoYSwxKTtnLnBhdXNlZD0hMH07Zy5wbGF5PWZ1bmN0aW9uKCl7Zy5wYXVzZWQmJihnLnBhdXNlZD0hMSx0PTAsbD1kKGcuY3VycmVudFRpbWUpLHYucHVzaChnKSxCfHxpYSgpKX07Zy5yZXZlcnNlPWZ1bmN0aW9uKCl7Zy5yZXZlcnNlZD0hZy5yZXZlcnNlZDt0PTA7bD1kKGcuY3VycmVudFRpbWUpfTtnLnJlc3RhcnQ9ZnVuY3Rpb24oKXtnLnBhdXNlKCk7XG5nLnJlc2V0KCk7Zy5wbGF5KCl9O2cuZmluaXNoZWQ9bTtnLnJlc2V0KCk7Zy5hdXRvcGxheSYmZy5wbGF5KCk7cmV0dXJuIGd9dmFyIGdhPXt1cGRhdGU6dm9pZCAwLGJlZ2luOnZvaWQgMCxydW46dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxsb29wOjEsZGlyZWN0aW9uOlwibm9ybWFsXCIsYXV0b3BsYXk6ITAsb2Zmc2V0OjB9LFM9e2R1cmF0aW9uOjFFMyxkZWxheTowLGVhc2luZzpcImVhc2VPdXRFbGFzdGljXCIsZWxhc3RpY2l0eTo1MDAscm91bmQ6MH0sVz1cInRyYW5zbGF0ZVggdHJhbnNsYXRlWSB0cmFuc2xhdGVaIHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzY2FsZVggc2NhbGVZIHNjYWxlWiBza2V3WCBza2V3WSBwZXJzcGVjdGl2ZVwiLnNwbGl0KFwiIFwiKSxILGg9e2FycjpmdW5jdGlvbihhKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKX0sb2JqOmZ1bmN0aW9uKGEpe3JldHVybi0xPE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiT2JqZWN0XCIpfSxcbnB0aDpmdW5jdGlvbihhKXtyZXR1cm4gaC5vYmooYSkmJmEuaGFzT3duUHJvcGVydHkoXCJ0b3RhbExlbmd0aFwiKX0sc3ZnOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudH0sZG9tOmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlfHxoLnN2ZyhhKX0sc3RyOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYX0sZm5jOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfSx1bmQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfSxoZXg6ZnVuY3Rpb24oYSl7cmV0dXJuLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSl9LHJnYjpmdW5jdGlvbihhKXtyZXR1cm4vXnJnYi8udGVzdChhKX0saHNsOmZ1bmN0aW9uKGEpe3JldHVybi9eaHNsLy50ZXN0KGEpfSxjb2w6ZnVuY3Rpb24oYSl7cmV0dXJuIGguaGV4KGEpfHxoLnJnYihhKXx8aC5oc2woYSl9fSxBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLFxuZCxiKXtyZXR1cm4oKCgxLTMqYiszKmQpKmErKDMqYi02KmQpKSphKzMqZCkqYX1yZXR1cm4gZnVuY3Rpb24oYyxkLGIsZil7aWYoMDw9YyYmMT49YyYmMDw9YiYmMT49Yil7dmFyIGU9bmV3IEZsb2F0MzJBcnJheSgxMSk7aWYoYyE9PWR8fGIhPT1mKWZvcih2YXIgaz0wOzExPms7KytrKWVba109YSguMSprLGMsYik7cmV0dXJuIGZ1bmN0aW9uKGspe2lmKGM9PT1kJiZiPT09ZilyZXR1cm4gaztpZigwPT09aylyZXR1cm4gMDtpZigxPT09aylyZXR1cm4gMTtmb3IodmFyIGg9MCxsPTE7MTAhPT1sJiZlW2xdPD1rOysrbCloKz0uMTstLWw7dmFyIGw9aCsoay1lW2xdKS8oZVtsKzFdLWVbbF0pKi4xLG49MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoLjAwMTw9bil7Zm9yKGg9MDs0Pmg7KytoKXtuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKDA9PT1uKWJyZWFrO3ZhciBtPWEobCxjLGIpLWssbD1sLW0vbn1rPWx9ZWxzZSBpZigwPT09XG5uKWs9bDtlbHNle3ZhciBsPWgsaD1oKy4xLGc9MDtkbyBtPWwrKGgtbCkvMixuPWEobSxjLGIpLWssMDxuP2g9bTpsPW07d2hpbGUoMWUtNzxNYXRoLmFicyhuKSYmMTA+KytnKTtrPW19cmV0dXJuIGEoayxkLGYpfX19fSgpLFE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYil7cmV0dXJuIDA9PT1hfHwxPT09YT9hOi1NYXRoLnBvdygyLDEwKihhLTEpKSpNYXRoLnNpbigyKihhLTEtYi8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMSkpKk1hdGguUEkvYil9dmFyIGM9XCJRdWFkIEN1YmljIFF1YXJ0IFF1aW50IFNpbmUgRXhwbyBDaXJjIEJhY2sgRWxhc3RpY1wiLnNwbGl0KFwiIFwiKSxkPXtJbjpbWy41NSwuMDg1LC42OCwuNTNdLFsuNTUsLjA1NSwuNjc1LC4xOV0sWy44OTUsLjAzLC42ODUsLjIyXSxbLjc1NSwuMDUsLjg1NSwuMDZdLFsuNDcsMCwuNzQ1LC43MTVdLFsuOTUsLjA1LC43OTUsLjAzNV0sWy42LC4wNCwuOTgsLjMzNV0sWy42LC0uMjgsLjczNSwuMDQ1XSxhXSxPdXQ6W1suMjUsXG4uNDYsLjQ1LC45NF0sWy4yMTUsLjYxLC4zNTUsMV0sWy4xNjUsLjg0LC40NCwxXSxbLjIzLDEsLjMyLDFdLFsuMzksLjU3NSwuNTY1LDFdLFsuMTksMSwuMjIsMV0sWy4wNzUsLjgyLC4xNjUsMV0sWy4xNzUsLjg4NSwuMzIsMS4yNzVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIDEtYSgxLWIsYyl9XSxJbk91dDpbWy40NTUsLjAzLC41MTUsLjk1NV0sWy42NDUsLjA0NSwuMzU1LDFdLFsuNzcsMCwuMTc1LDFdLFsuODYsMCwuMDcsMV0sWy40NDUsLjA1LC41NSwuOTVdLFsxLDAsMCwxXSxbLjc4NSwuMTM1LC4xNSwuODZdLFsuNjgsLS41NSwuMjY1LDEuNTVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuLjU+Yj9hKDIqYixjKS8yOjEtYSgtMipiKzIsYykvMn1dfSxiPXtsaW5lYXI6QSguMjUsLjI1LC43NSwuNzUpfSxmPXt9LGU7Zm9yKGUgaW4gZClmLnR5cGU9ZSxkW2YudHlwZV0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oZCxmKXtiW1wiZWFzZVwiK2EudHlwZStjW2ZdXT1oLmZuYyhkKT9cbmQ6QS5hcHBseSgkanNjb21wJHRoaXMsZCl9fShmKSksZj17dHlwZTpmLnR5cGV9O3JldHVybiBifSgpLGhhPXtjc3M6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnN0eWxlW2NdPWR9LGF0dHJpYnV0ZTpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc2V0QXR0cmlidXRlKGMsZCl9LG9iamVjdDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGFbY109ZH0sdHJhbnNmb3JtOmZ1bmN0aW9uKGEsYyxkLGIsZil7YltmXXx8KGJbZl09W10pO2JbZl0ucHVzaChjK1wiKFwiK2QrXCIpXCIpfX0sdj1bXSxCPTAsaWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Qj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyl9ZnVuY3Rpb24gYyhjKXt2YXIgYj12Lmxlbmd0aDtpZihiKXtmb3IodmFyIGQ9MDtkPGI7KXZbZF0mJnZbZF0udGljayhjKSxkKys7YSgpfWVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUoQiksQj0wfXJldHVybiBhfSgpO3EudmVyc2lvbj1cIjIuMi4wXCI7cS5zcGVlZD0xO3EucnVubmluZz12O3EucmVtb3ZlPVxuZnVuY3Rpb24oYSl7YT1QKGEpO2Zvcih2YXIgYz12Lmxlbmd0aDtjLS07KWZvcih2YXIgZD12W2NdLGI9ZC5hbmltYXRpb25zLGY9Yi5sZW5ndGg7Zi0tOyl1KGEsYltmXS5hbmltYXRhYmxlLnRhcmdldCkmJihiLnNwbGljZShmLDEpLGIubGVuZ3RofHxkLnBhdXNlKCkpfTtxLmdldFZhbHVlPUs7cS5wYXRoPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9aC5zdHIoYSk/ZShhKVswXTphLGI9Y3x8MTAwO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm57ZWw6ZCxwcm9wZXJ0eTphLHRvdGFsTGVuZ3RoOk4oZCkqKGIvMTAwKX19fTtxLnNldERhc2hvZmZzZXQ9ZnVuY3Rpb24oYSl7dmFyIGM9TihhKTthLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIixjKTtyZXR1cm4gY307cS5iZXppZXI9QTtxLmVhc2luZ3M9UTtxLnRpbWVsaW5lPWZ1bmN0aW9uKGEpe3ZhciBjPXEoYSk7Yy5wYXVzZSgpO2MuZHVyYXRpb249MDtjLmFkZD1mdW5jdGlvbihkKXtjLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYSl7YS5iZWdhbj1cbiEwO2EuY29tcGxldGVkPSEwfSk7bShkKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPXooYixEKFMsYXx8e30pKTtkLnRhcmdldHM9ZC50YXJnZXRzfHxhLnRhcmdldHM7Yj1jLmR1cmF0aW9uO3ZhciBlPWQub2Zmc2V0O2QuYXV0b3BsYXk9ITE7ZC5kaXJlY3Rpb249Yy5kaXJlY3Rpb247ZC5vZmZzZXQ9aC51bmQoZSk/YjpMKGUsYik7Yy5iZWdhbj0hMDtjLmNvbXBsZXRlZD0hMDtjLnNlZWsoZC5vZmZzZXQpO2Q9cShkKTtkLmJlZ2FuPSEwO2QuY29tcGxldGVkPSEwO2QuZHVyYXRpb24+YiYmKGMuZHVyYXRpb249ZC5kdXJhdGlvbik7Yy5jaGlsZHJlbi5wdXNoKGQpfSk7Yy5zZWVrKDApO2MucmVzZXQoKTtjLmF1dG9wbGF5JiZjLnJlc3RhcnQoKTtyZXR1cm4gY307cmV0dXJuIGN9O3EucmFuZG9tPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooYy1hKzEpKSthfTtyZXR1cm4gcX0pOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gQ3JlZGl0IHRvIGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vbW92aW5nLWxldHRlcnMvIGZvciB0aGUgYW5pbWF0aW9uc1xuLy8gVXNlZCBlZmZlY3QgMTUgZm9yIHRpdGxlIGFuaW1hdGlvbiBhbmQgZWZmZWN0IDExIGZvciBkZXNjcmlwdGlvbiBhbmltYXRpb25cblxuLy8gTm9kZSBNb2R1bGVzXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xuXG4vLyBSZXNpemUgbWFyZ2luIHRvcCBmdW5jdGlvblxuaW1wb3J0IHJlc2l6ZU1hcmdpblRvcExvZ28gZnJvbSAnLi9vblJlc2l6ZUhvbWUuanMnO1xuXG5cbi8vIERlZmF1bHQgZnVuY3Rpb24gY2FsbGVkIHRvIHN0YXJ0IHRoZSBhbmltYXRpb24gY2hhaW5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGxMb2dvVGltZWxpbmUoKXtcblxuXHQvLyBFbnN1cmUgdGhhdCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIGJ1dHRvbiBhcmUgbm90IHZpc2libGVcblx0JCgnI25hbWUtYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cdCQoJyNkZXNjLWFuaW1hdGUnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xuXHQkKCcjYnV0dG9uLWFuaW1hdGUnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xuXG5cdC8vIGNyZWRpdCB0byBUb2JpYXMgQWhsaW4gKGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vbW92aW5nLWxldHRlcnMvKSBlZmZlY3QgMTFcblx0Ly8gVXNlZCB0byB3cmFwIGVhY2ggbGV0dGVyIGluIGRlc2NyaXB0aW9uIGluIHNwYW4gZm9yIHR5cGluZyBlZmZlY3Rcblx0JCgnI2Rlc2MtYW5pbWF0ZSAubGV0dGVycycpLmVhY2goZnVuY3Rpb24oKXtcblx0ICAkKHRoaXMpLmh0bWwoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgvKFteXFx4MDAtXFx4ODBdfFxcdykvZywgXCI8c3BhbiBjbGFzcz0nbGV0dGVyJz4kJjwvc3Bhbj5cIikpO1xuXHR9KTtcblxuXHQvLyBSZW1vdmUgdGhlIG92ZXJsYXkgZnJvbSB0aGUgcGFnZVxuXHRyZW1vdmVPdmVybGF5KCk7XG5cblx0Ly8gYW5pbWVqcyB0aW1lbGluZSBmb3IgbG9nbyBzdmcgZHJhd2luZywgc2NhbGluZywgJiByb3RhdGluZ1xuXHRjb25zdCBsb2dvVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdGxvZ29UaW1lbGluZVxuXHQvLyBEcmF3IHJlY3RhbmdsZSAxXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAjY29sb3JlZC1yZWN0LTEnLFxuXHRcdHdpZHRoOiA1MDAsXG5cdFx0aGVpZ2h0OiAxMDAsXG5cdFx0ZWFzaW5nOiAnZWFzZUluT3V0U2luZScsXG5cdFx0ZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIERyYXcgcmVjdGFuZ2xlIDJcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtMicsXG5cdFx0d2lkdGg6IDEwMCxcblx0XHRoZWlnaHQ6IDUwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIERyYXcgcmVjdGFuZ2xlIDNcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtMycsXG5cdFx0d2lkdGg6IDUwMCxcblx0XHRoZWlnaHQ6IDEwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIERyYXcgcmVjdGFuZ2xlIDRcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtNCcsXG5cdFx0d2lkdGg6IDEwMCxcblx0XHRoZWlnaHQ6IDMwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIERyYXcgcmVjdGFuZ2xlIDVcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtNScsXG5cdFx0d2lkdGg6IDMwMCxcblx0XHRoZWlnaHQ6IDEwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIGZhZGVpbiB0aGUgc2hhZG93IHBvbHlnb25zXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAuc2hhZG93LXBvbHknLFxuXHRcdG9wYWNpdHk6IDAuMixcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXHRcdFxuXHR9KVxuXHQvLyBmYWRlaW4gcmVjdGFuZ2xlIGdyYWRpZW50c1xuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgLmdyYWQtc3ZnLXJlY3QnLFxuXHRcdG9wYWNpdHk6IDAuMSxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkdXJhdGlvbjogNTAwXG5cdH0pXG5cdC8vIHNjYWxlIGFuZCByb3RhdGUgc3ZnXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyBzdmcnLFxuXHRcdHNjYWxlOiB7XG5cdFx0XHR2YWx1ZTogMC41LFxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRRdWFydCdcblx0XHR9LFxuXHRcdHJvdGF0ZToge1xuXHRcdFx0dmFsdWU6IDMxNSxcblx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdFx0ZGVsYXk6IDEwMDAsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJ1xuXHRcdH0sXG5cdFx0Ly9vbmNlIGZpbmlzaGVkIGNhbGwgbW92b0xvZ28gdG8gY2VudGVyIHNjYWxlZCBsb2dvXG5cdFx0Y29tcGxldGU6IG1vdmVMb2dvXG5cdH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIG92ZXJsYXkgb25jZSBjc3MgJiBqcyBhc3NldHMgbG9hZGVkXG5mdW5jdGlvbiByZW1vdmVPdmVybGF5KCl7XG5cblx0Ly8gYW5pbWVqcyB0aW1lbGluZSBmb3Igc2xpZGUgdXAgYW5pbWF0aW9uXG5cdGNvbnN0IG92ZXJsYXlUaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0b3ZlcmxheVRpbWVsaW5lXG5cdC8vIHNsaWRlIHVwXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3Bpbm5lci1vdmVybGF5Jyxcblx0XHR0cmFuc2xhdGVZOiBbMCwgJy0xMDAlJ10sXG5cdFx0ZWFzaW5nOiBcImVhc2VJbk91dFNpbmVcIixcblx0XHRkdXJhdGlvbjogMTAwMFxuXHR9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2VudGVyIHRoZSBjb250ZW50IHByb3Blcmx5XG5mdW5jdGlvbiBtb3ZlTG9nbygpe1xuXG5cdC8vIGdldCB0aGUgbWFyZ2luLXRvcCB0byBiZSBhZGRlZCB0byBzdmdcblx0Y29uc3QgbmV3TWFyZ2luVG9wID0gcmVzaXplTWFyZ2luVG9wTG9nbygpO1xuXG5cdC8vIGFuaW1lanMgdGltZWxpbmUgZm9yIGNlbnRlcmluZyBvZiBjb250ZW50XG5cdGNvbnN0IG1vdmVMb2dvVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdG1vdmVMb2dvVGltZWxpbmVcblx0Ly8gY2VudGVyIGxvZ28gc3ZnIHdpdGggY29udGVudFxuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgc3ZnJyxcblx0XHRtYXJnaW5Ub3A6IG5ld01hcmdpblRvcCxcblx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHQvLyBvbmNlIGZpbmlzaGVkIHN0YXJ0IG5hbWUgYW5pbWF0aW9uXG5cdFx0Y29tcGxldGU6IGFuaW1hdGVOYW1lXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlTmFtZSgpe1xuXG5cdC8vIHJldmVydCBvcGFjaXR5IGJhY2sgdG8gZGVmYXVsdFxuXHQkKCcjbmFtZS1hbmltYXRlJykuY3NzKCdvcGFjaXR5JywgJycpO1xuXG5cdC8vIHRpbWVsaW5lIHRvIGFuaW1hdGUgbmFtZVxuXHRjb25zdCBuYW1lVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXHRcblx0bmFtZVRpbWVsaW5lXG5cdC5hZGQoe1xuXHRcdC8vIHNjYWxlIG91dCB0aGVuIGluXG5cdFx0dGFyZ2V0czogJyNuYW1lLWFuaW1hdGUgLndvcmQnLFxuXHRcdHNjYWxlOiBbMTYsIDFdLFxuXHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRlYXNpbmc6ICdlYXNlT3V0Q2lyYycsXG5cdFx0ZHVyYXRpb246IDgwMCxcblx0XHRkZWxheTogZnVuY3Rpb24oZSwgaSl7XG5cdFx0XHRyZXR1cm4gODAwICogaTtcblx0XHR9LFxuXHRcdC8vIG9uY2UgZmluaXNoZWQgc3RhcnQgdGhlIGRlc2NyaXB0aW9uIGFuaW1hdGlvblxuXHRcdGNvbXBsZXRlOiBhbmltYXRlRGVzY3JpcHRpb25cblx0fSk7XG59XG5cbi8vXG5mdW5jdGlvbiBhbmltYXRlRGVzY3JpcHRpb24oKXtcblxuXHQvLyByZXZlcnQgb3BhY2l0eSBiYWNrIHRvIGRlZmF1bHRcblx0JCgnI2Rlc2MtYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcnKTtcblxuXHQvLyB0aW1lbGluZSB0byBhbmltYXRlIGRlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NyaXB0aW9uVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdGRlc2NyaXB0aW9uVGltZWxpbmVcbiAgLmFkZCh7XG4gIFx0Ly8gc3RhcnQgbGluZSBmb3IgdHlwaW5nIGVmZmVjdFxuICAgIHRhcmdldHM6ICcjZGVzYy1hbmltYXRlIC5saW5lJyxcbiAgICBzY2FsZVk6IFswLDFdLFxuICAgIG9wYWNpdHk6IFswLjUsMV0sXG4gICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXG4gICAgZHVyYXRpb246IDcwMFxuICB9KVxuICAvLyBtb3ZlIGxpbmUgdG8gcmlnaHQgZm9yIGVmZmVjdFxuICAuYWRkKHtcbiAgICB0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG4gICAgdHJhbnNsYXRlWDogWzAsJChcIiNkZXNjLWFuaW1hdGUgLmxldHRlcnNcIikud2lkdGgoKV0sXG4gICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXG4gICAgZHVyYXRpb246IDcwMCxcbiAgICBkZWxheTogMTAwXG4gIH0pXG4gIC8vIHR5cGUgaW4gbGV0dGVycyBlZmZlY3RcbiAgLmFkZCh7XG4gICAgdGFyZ2V0czogJyNkZXNjLWFuaW1hdGUgLmxldHRlcicsXG4gICAgb3BhY2l0eTogWzAsMV0sXG4gICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXG4gICAgZHVyYXRpb246IDYwMCxcbiAgICBvZmZzZXQ6ICctPTc3NScsXG4gICAgZGVsYXk6IGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICByZXR1cm4gMzQgKiAoaSsxKVxuICAgIH0sXG4gICAgLy8gb25jZSBmaW5pc2hlZCBjb250aW51ZSB0byBsb29wIGxpbmUgYW5kIGFuaW1hdGUgYnV0dG9uXG4gICAgY29tcGxldGU6IGxvb3BMaW5lQW5pbWF0ZUJ1dHRvblxuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc3RhcnQgbG9vcCB0eXBpbmcgbGluZSBhbmQgc3RhcnQgYnV0dG9uIGFuaW1hdGlvblxuZnVuY3Rpb24gbG9vcExpbmVBbmltYXRlQnV0dG9uKCl7XG5cdGxvb3BMaW5lKCk7XG5cdGFuaW1hdGVCdXR0b24oKTtcbn1cblxuXG4vLyBGdW5jdGlvbiB0byBsb29wIHR5cGluZyBsaW5lXG5mdW5jdGlvbiBsb29wTGluZSgpe1xuXG5cdC8vIHRpbWVsaW5lIHRvIGFuaW1hdGUgdHlwaW5nIGxpbmUgKGluZmluaXRlKVxuXHRjb25zdCBsb29wVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSh7IGxvb3A6IHRydWV9KTtcblxuXHRsb29wVGltZWxpbmVcblx0Ly8gYmxpbmsgb3V0XG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjZGVzYy1hbmltYXRlIC5saW5lJyxcblx0ICBvcGFjaXR5OiBbMSwwXSxcblx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0ZHVyYXRpb246IDgwMFxuXHR9KVxuXHQvLyBibGluayBpblxuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG5cdCAgb3BhY2l0eTogWzAsMV0sXG5cdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdGR1cmF0aW9uOiA4MDBcblx0fSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHN0YXJ0IGJ1dHRvbiBhbmltYXRpb25cbmZ1bmN0aW9uIGFuaW1hdGVCdXR0b24oKXtcblx0XG5cdC8vIHJldmVydCBidXR0b24gdG8gZGVmYXVsdCBvcGFjaXR5XG5cdCQoJyNidXR0b24tYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcxJyk7XG5cblx0Ly8gdGltZWxpbmUgdG8gYW5pbWF0ZSBidXR0b25cblx0Y29uc3QgYnV0dG9uVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdGJ1dHRvblRpbWVsaW5lXG5cdC8vIGZhZGUgYnV0dG9uIGluXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjYnV0dG9uLWFuaW1hdGUgLmxpbmUnLFxuXHQgIG9wYWNpdHk6IFswLDFdLFxuXHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRjb21wbGV0ZTogcmV2ZXJ0RGVzY3JpcHRpb25cblx0fSk7XG59IFxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgc3BhbnMgZnJvbSBkZXNjcmlwdGlvbiAoZm9yIHNlby9yZXNwb25zaXZlIGRpc3BsYXkpXG5mdW5jdGlvbiByZXZlcnREZXNjcmlwdGlvbigpIHtcblx0JCgnI2Rlc2MtYW5pbWF0ZSAubGV0dGVycycpLnJlcGxhY2VXaXRoKCc8c3BhbiBjbGFzcz1cImxldHRlcnNcIj5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj4nKTtcblx0aW5maW5pdGVSb3RhdGUoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gcm90YXRlIHN2ZyBsb2dvIChpbmZpbml0ZSlcbmZ1bmN0aW9uIGluZmluaXRlUm90YXRlKCkge1xuXG5cdC8vIHRpbWVsaW5lIHRvIHJvdGF0ZSBsb2dvXG5cdGNvbnN0IHJvdGF0ZVRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoeyBsb29wOiB0cnVlfSk7XG5cdFxuXHRyb3RhdGVUaW1lbGluZVxuXHQvLyByb3RhdGUgdG8gdG8gR1xuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgc3ZnJyxcblx0XHRzY2FsZTogWzAuNSwgMC41XSxcblx0XHRyb3RhdGU6IHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0ZHVyYXRpb246IDE1MDAsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRRdWludCcsXG5cdFx0XHRkZWxheTogODAwMFxuXHRcdH1cblx0fSlcblx0Ly8gcm90YXRlIHRvIGRpYWdvbmFsIEdcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIHN2ZycsXG5cdFx0c2NhbGU6IFswLjUsIDAuNV0sXG5cdFx0cm90YXRlOiB7XG5cdFx0XHR2YWx1ZTogMzE1LFxuXHRcdFx0ZHVyYXRpb246IDE1MDAsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRRdWFydCcsXG5cdFx0XHRkZWxheTogMTAwMFxuXHRcdH1cblx0fSk7XG59IFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG4vLyBBZGQgbWFyZ2luIHRvcCB0byB3aGVuIG9ubHkgTG9nbyBkcmF3aW5nIChuYW1lL2Rlc2MvYnV0dG9uIG5vIHNob3dpbmcpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsSG9tZVJlc2l6ZSgpe1xuXG5cdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblx0Y29uc3QgaG9tZUNvbnRhaW5lckVsID0gJCgnI2hvbWUtY29udGFpbmVyJyk7XG5cdGNvbnN0IHN2Z0VsID0gJCgnI3N2Z0F0dHJpYnV0ZXMnKTtcblxuXHQvLyBtYXJnaW4gdG8gYWRkIFxuXHRjb25zdCBzdGFydE1hcmdpbiA9ICh3aW5kb3dIZWlnaHQgLSBzdmdFbC5oZWlnaHQoKSkgLyAyO1xuXG5cdC8vIGlmIGhvbWVDb250YWluZXIgPiB3aW5kb3cgdGhlbiBubyBuZWVkIHRvIGFkZCBwYWRkaW5nIHRvIGNlbnRlclxuXHQvLyBkZWZhdWx0IHRvIDMwcHhcblx0aWYoaG9tZUNvbnRhaW5lckVsLmhlaWdodCgpID4gd2luZG93SGVpZ2h0KXtcblx0XHQkKCcjc3ZnQXR0cmlidXRlcyBzdmcnKS5jc3MoJ21hcmdpbi10b3AnLCAnMzBweCcpO1xuXHRcdFxuXHRcdC8vIG1ha2Ugc3VyZSB0aGUgYmFja2dyb3VuZCBncmFkaWVudCBjb3ZlcnMgZW50aXJlIGhvbWVDb250YWluZXJcblx0XHRtaW5IZWlnaHRIb21lQ29udGFpbmVyKCk7XG5cdH0gXG5cdC8vIGlmIGhvbWVDb250YWluZXIgPD0gd2luZG93IHRoZW4gYWRkIHRoZSBtYXJnaW4gdG8gdG9wXG5cdGVsc2Uge1xuXHRcdCQoJyNzdmdBdHRyaWJ1dGVzIHN2ZycpLmNzcygnbWFyZ2luLXRvcCcsIHN0YXJ0TWFyZ2luKTtcblx0fVxufVxuXG4vLyBGdW5jdGlvbiB0byBtYWtlIHN1cmUgZ3JhZGllbnQgYmFja2dyb3VuZCBjb3ZlcnMgYWxsIGNvbnRlbnRcbmZ1bmN0aW9uIG1pbkhlaWdodEhvbWVDb250YWluZXIoKSB7XG5cdGNvbnN0IGhvbWVDb250YWluZXJFbCA9ICQoJyNob21lLWNvbnRhaW5lcicpO1xuXHQkKCcuZnVsbC1oZWlnaHQtd2lkdGgnKS5jc3MoJ21pbi1oZWlnaHQnLCBob21lQ29udGFpbmVyRWwuaGVpZ2h0KCkpO1xufVxuXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbi8vIHJlc2l6ZSBtYXJnaW50b3Agb24gc3ZnIHRvIGNlbnRlciBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNpemVNYXJnaW5Ub3BMb2dvKCl7XG5cblx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG5cdGNvbnN0IHN2Z0F0dHJNYXJnaW5Ub3AgPSBwYXJzZUludCgkKCcjc3ZnQXR0cmlidXRlcyBzdmcnKS5jc3MoJ21hcmdpbi10b3AnKSk7XG5cblx0Ly8gZ2V0IGhvbWUgY29udGFpbmVyIGhlaWdodCB3aXRob3V0IG1hcmdpbiB0b3Bcblx0Y29uc3QgaG9tZUNvbnRhaW5lckhlaWdodCA9ICQoJyNob21lLWNvbnRhaW5lcicpLmhlaWdodCgpIC0gc3ZnQXR0ck1hcmdpblRvcDtcblxuXHQvLyBnZXQgc3ZnQXR0ciBoZWlnaHQgd2l0aG91dCBtYXJnaW4gdG9wXG5cdGNvbnN0IHN2Z0F0dHJIZWlnaHQgPSAkKCcjc3ZnQXR0cmlidXRlcycpLmhlaWdodCgpIC0gc3ZnQXR0ck1hcmdpblRvcDtcblxuXHQvLyBjYWxjdWxhdGUgaGVpZ2h0IG9mIDAuNSBzY2FsZWQgJiBkaWFnb25hbCBzdmcgXG5cdGNvbnN0IHN2Z0hlaWdodCA9IE1hdGguc3FydChNYXRoLnBvdygoc3ZnQXR0ckhlaWdodCAvIDIpLCAyKSAqIDIpO1xuXG5cdC8vIEdldCB2aXN1YWwgcGFkZGluZyBvbiB0aGUgdG9wIG9mIHN2ZyBsb2dvXG5cdGNvbnN0IHN2Z1BhZGRpbmcgPSAoc3ZnQXR0ckhlaWdodCAtIHN2Z0hlaWdodCkgLyAyO1xuXG5cdC8vIGlmIHRoZSBob21lQ29udGFpbmVyIDwgd2luZG93IHRoZW4gbmVlZCBwYWRkaW5nIHRvIGNlbnRlclxuXHRpZihob21lQ29udGFpbmVySGVpZ2h0IDwgd2luZG93SGVpZ2h0KXtcblxuXHRcdC8vIGNhbGN1bGF0ZSBzcGFjZSBiZWxvdyBob21lQ29udGFpbmVyIGNvbnRlbnRcblx0XHRjb25zdCBiZWxvd0NvbnRhaW5lckhlaWdodCA9IHdpbmRvd0hlaWdodCAtIGhvbWVDb250YWluZXJIZWlnaHQ7XG5cblx0XHQvLyBpZiBzcGFjZSBiZWxvdyA8IHNwYWNlIGFib3ZlIGxvZ28gdGhlbiBubyBuZWVkIGZvciBtYXJnaW4gY2VudGVyaW5nXG5cdFx0aWYoYmVsb3dDb250YWluZXJIZWlnaHQgPCBzdmdQYWRkaW5nKSByZXR1cm4gMDtcblxuXHRcdC8vIEtub3cgdGhhdCBsZWZ0b3ZlciA+PSAwXG5cdFx0Y29uc3QgbGVmdG92ZXIgPSBiZWxvd0NvbnRhaW5lckhlaWdodCAtIHN2Z1BhZGRpbmc7XG5cblx0XHQvLyBjdXQgbGVmdG92ZXIgaW4gaGFsZiA9IGFtb3VudCB0byBhZGQgdG8gbWFyZ2luXG5cdFx0Y29uc3QgYW1vdW50VG9NYXJnaW5Ub3AgPSBsZWZ0b3ZlciAvIDI7XG5cblx0XHRyZXR1cm4gYW1vdW50VG9NYXJnaW5Ub3A7XG5cdH0gXG5cdC8vIGlmIHRoZSBob21lQ29udGFpbmVyID49IHdpbmRvdyBubyBuZWVkIGZvciBtYXJnaW4tdG9wIFxuXHRlbHNlIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXHRcbn0iLCJcbi8vIE5vZGUgTW9kdWxlc1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gSW5kaXZpZHVhbCBsb2Rhc2ggZnVuY3Rpb25zXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuLy8gQW5pbWF0aW9uIGZ1bmN0aW9ucyBmb3IgaG9tZXBhZ2VcbmltcG9ydCBjYWxsTG9nb1RpbWVsaW5lIGZyb20gJy4uL21vZHVsZXMvYW5pbWVUaW1lbGluZXMuanMnO1xuaW1wb3J0IGluaXRpYWxIb21lUmVzaXplIGZyb20gJy4uL21vZHVsZXMvaW5pdGlhbEhvbWVSZXNpemUuanMnO1xuaW1wb3J0IHJlc2l6ZU1hcmdpblRvcExvZ28gZnJvbSAnLi4vbW9kdWxlcy9vblJlc2l6ZUhvbWUuanMnO1xuXG4vLyBJbmRleCBwYWdlIGNzc1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvcmVzZXQuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9nZW5lcmFsLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvYnV0dG9ucy5zY3NzJztcbmltcG9ydCAnLi4vLi4vc2Nzcy9tb2R1bGVzL2dyYWRpZW50LWJnLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvc29jaWFsLWljb25zLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvc3Bpbm5lci1vdmVybGF5LnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL3BhZ2VzL2luZGV4L2luZGV4LnNjc3MnO1xuXG4vLyBSdW4gb24ganMgbG9hZFxuJChmdW5jdGlvbigpe1xuXG5cdC8vIEluaXRpYWwgY2VudGVyIG9mIGxvZ28gc3ZnXG5cdGluaXRpYWxIb21lUmVzaXplKCk7XG5cblx0Ly8gU3RhcnQgYW5pbWF0aW9uIG9mIGxvZ28vdGl0bGUvZGVzY3JpcHRpb24vYnV0dG9uXG5cdGNhbGxMb2dvVGltZWxpbmUoKTtcbn0pO1xuXG4vLyBPbiBwYWdlIHJlc2l6ZSBhZGQgcHJvcGVyIG1hcmdpbi10b3AgdG8gY2VudGVyIGNvbnRlbnRcbi8vIGxvZGFzaCBkZWJvdW5jZSBpcyB1c2VkIHRvIHByZXZlbnQgcmVzaXplIGZ1bmN0aW9uIGZyb20gZmlyaW5nIHRvbyBvZnRlblxuLy8gc2V0IHRvIG9ubHkgZmlyZSA1MDBtcyBhZnRlciBsYXN0IGNhbGwgdG8gcmVzaXplIGZpbmlzaGVkXG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cblx0Ly8gZ2V0IHRoZSBuZXcgbWFyZ2luLXRvcCBuZWVkZWQgdG8gY2VudGVyIGNvbnRlbnQsIDAgaWYgc2NyZWVuIHRvbyBzbWFsbCB0byBjZW50ZXJcblx0Y29uc3QgbmV3TWFyZ2luVG9wID0gcmVzaXplTWFyZ2luVG9wTG9nbygpO1xuXHRcblx0Ly8gYWRkIG5ldyBtYXJnaW4tdG9wIHRvIHN2Z1xuXHQkKCcjc3ZnQXR0cmlidXRlcyBzdmcnKS5jc3MoJ21hcmdpbi10b3AnLCBuZXdNYXJnaW5Ub3ApO1xuXHRcdFxuXHQvLyBDYWxjdWxhdGUgdGhlIGFjdHVhbCBoZWlnaHQgb2YgdGhlIGhvbWVjb250YWluZXIgd2l0aG91dCBtYXJnaW4tdG9wXG5cdGNvbnN0IGhvbWVDb250YWluZXJIZWlnaHQgPSAkKCcjaG9tZS1jb250YWluZXInKS5oZWlnaHQoKSAtIG5ld01hcmdpblRvcDtcblxuXHQvLyBlbnN1cmUgdGhhdCB0aGUgZnVsbC1oZWlnaHQtd2lkdGggYmFja2dyb3VuZCBjb3ZlcnMgdGhlIGVudGlyZSBob21lQ29udGFpbmVyXG5cdCQoJy5mdWxsLWhlaWdodC13aWR0aCcpLmNzcygnbWluLWhlaWdodCcsIGhvbWVDb250YWluZXJIZWlnaHQpO1xuXG59LCA1MDApKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbnMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbnMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dlbmVyYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nZW5lcmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dlbmVyYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dyYWRpZW50LWJnLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3JhZGllbnQtYmcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3JhZGllbnQtYmcuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jlc2V0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbC1pY29ucy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbC1pY29ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWwtaWNvbnMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NwaW5uZXItb3ZlcmxheS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NwaW5uZXItb3ZlcmxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcGlubmVyLW92ZXJsYXkuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=