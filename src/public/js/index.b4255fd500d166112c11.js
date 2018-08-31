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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/page/index.js");
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

var _jquery = __webpack_require__(/*! jquery */ "jquery");

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

var _jquery = __webpack_require__(/*! jquery */ "jquery");

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

var _jquery = __webpack_require__(/*! jquery */ "jquery");

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


var _jquery = __webpack_require__(/*! jquery */ "jquery");

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

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvYW5pbWUubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9idXR0b25zLnNjc3M/YmQ5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2dlbmVyYWwuc2Nzcz83OWU1Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvZ3JhZGllbnQtYmcuc2Nzcz9iODE3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvcmVzZXQuc2Nzcz9hZDRlIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvc29jaWFsLWljb25zLnNjc3M/ZTk1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3NwaW5uZXItb3ZlcmxheS5zY3NzPzEzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvcGFnZXMvaW5kZXgvaW5kZXguc2Nzcz9iZWJjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYW5pbWVUaW1lbGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvaW5pdGlhbEhvbWVSZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvb25SZXNpemVIb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvYnV0dG9ucy5zY3NzPzcwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9nZW5lcmFsLnNjc3M/MWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2dyYWRpZW50LWJnLnNjc3M/ZTY3NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3Jlc2V0LnNjc3M/ZTUwZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3NvY2lhbC1pY29ucy5zY3NzPzJhMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9zcGlubmVyLW92ZXJsYXkuc2Nzcz8wODE4Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL3BhZ2VzL2luZGV4L2luZGV4LnNjc3M/NDIyNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjYWxsTG9nb1RpbWVsaW5lIiwiY3NzIiwiZWFjaCIsImh0bWwiLCJ0ZXh0IiwicmVwbGFjZSIsInJlbW92ZU92ZXJsYXkiLCJsb2dvVGltZWxpbmUiLCJhbmltZSIsInRpbWVsaW5lIiwiYWRkIiwidGFyZ2V0cyIsIndpZHRoIiwiaGVpZ2h0IiwiZWFzaW5nIiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5Iiwic2NhbGUiLCJ2YWx1ZSIsInJvdGF0ZSIsImRlbGF5IiwiY29tcGxldGUiLCJtb3ZlTG9nbyIsIm92ZXJsYXlUaW1lbGluZSIsInRyYW5zbGF0ZVkiLCJuZXdNYXJnaW5Ub3AiLCJtb3ZlTG9nb1RpbWVsaW5lIiwibWFyZ2luVG9wIiwiYW5pbWF0ZU5hbWUiLCJuYW1lVGltZWxpbmUiLCJlIiwiaSIsImFuaW1hdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGltZWxpbmUiLCJzY2FsZVkiLCJ0cmFuc2xhdGVYIiwib2Zmc2V0IiwiZWwiLCJsb29wTGluZUFuaW1hdGVCdXR0b24iLCJsb29wTGluZSIsImFuaW1hdGVCdXR0b24iLCJsb29wVGltZWxpbmUiLCJsb29wIiwiYnV0dG9uVGltZWxpbmUiLCJyZXZlcnREZXNjcmlwdGlvbiIsInJlcGxhY2VXaXRoIiwiaW5maW5pdGVSb3RhdGUiLCJyb3RhdGVUaW1lbGluZSIsImluaXRpYWxIb21lUmVzaXplIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaG9tZUNvbnRhaW5lckVsIiwic3ZnRWwiLCJzdGFydE1hcmdpbiIsIm1pbkhlaWdodEhvbWVDb250YWluZXIiLCJyZXNpemVNYXJnaW5Ub3BMb2dvIiwic3ZnQXR0ck1hcmdpblRvcCIsInBhcnNlSW50IiwiaG9tZUNvbnRhaW5lckhlaWdodCIsInN2Z0F0dHJIZWlnaHQiLCJzdmdIZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsInN2Z1BhZGRpbmciLCJiZWxvd0NvbnRhaW5lckhlaWdodCIsImxlZnRvdmVyIiwiYW1vdW50VG9NYXJnaW5Ub3AiLCJvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OzhDQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVSx3R0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVB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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtB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RWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQSx3QiIsImZpbGUiOiJqcy9pbmRleC5iNDI1NWZkNTAwZDE2NjExMmMxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlL2luZGV4LmpzXCIpO1xuIiwiLypcbiAyMDE3IEp1bGlhbiBHYXJuaWVyXG4gUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qL1xudmFyICRqc2NvbXA9e3Njb3BlOnt9fTskanNjb21wLmRlZmluZVByb3BlcnR5PVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHIscCl7aWYocC5nZXR8fHAuc2V0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFUzMgZG9lcyBub3Qgc3VwcG9ydCBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlwiKTtlIT1BcnJheS5wcm90b3R5cGUmJmUhPU9iamVjdC5wcm90b3R5cGUmJihlW3JdPXAudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1lP2U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDplfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTskanNjb21wLlNZTUJPTF9QUkVGSVg9XCJqc2NvbXBfc3ltYm9sX1wiO1xuJGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7fTskanNjb21wLmdsb2JhbC5TeW1ib2x8fCgkanNjb21wLmdsb2JhbC5TeW1ib2w9JGpzY29tcC5TeW1ib2wpfTskanNjb21wLnN5bWJvbENvdW50ZXJfPTA7JGpzY29tcC5TeW1ib2w9ZnVuY3Rpb24oZSl7cmV0dXJuICRqc2NvbXAuU1lNQk9MX1BSRUZJWCsoZXx8XCJcIikrJGpzY29tcC5zeW1ib2xDb3VudGVyXysrfTtcbiRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sKCk7dmFyIGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yO2V8fChlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcj0kanNjb21wLmdsb2JhbC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2VdJiYkanNjb21wLmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5hcnJheUl0ZXJhdG9yKHRoaXMpfX0pOyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7fX07JGpzY29tcC5hcnJheUl0ZXJhdG9yPWZ1bmN0aW9uKGUpe3ZhciByPTA7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUoZnVuY3Rpb24oKXtyZXR1cm4gcjxlLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTplW3IrK119Ontkb25lOiEwfX0pfTtcbiRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGU9ZnVuY3Rpb24oZSl7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlPXtuZXh0OmV9O2VbJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZX07JGpzY29tcC5hcnJheT0kanNjb21wLmFycmF5fHx7fTskanNjb21wLml0ZXJhdG9yRnJvbUFycmF5PWZ1bmN0aW9uKGUscil7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlIGluc3RhbmNlb2YgU3RyaW5nJiYoZSs9XCJcIik7dmFyIHA9MCxtPXtuZXh0OmZ1bmN0aW9uKCl7aWYocDxlLmxlbmd0aCl7dmFyIHU9cCsrO3JldHVybnt2YWx1ZTpyKHUsZVt1XSksZG9uZTohMX19bS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07cmV0dXJuIG0ubmV4dCgpfX07bVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG19O3JldHVybiBtfTtcbiRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oZSxyLHAsbSl7aWYocil7cD0kanNjb21wLmdsb2JhbDtlPWUuc3BsaXQoXCIuXCIpO2ZvcihtPTA7bTxlLmxlbmd0aC0xO20rKyl7dmFyIHU9ZVttXTt1IGluIHB8fChwW3VdPXt9KTtwPXBbdV19ZT1lW2UubGVuZ3RoLTFdO209cFtlXTtyPXIobSk7ciE9bSYmbnVsbCE9ciYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShwLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpyfSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmtleXNcIixmdW5jdGlvbihlKXtyZXR1cm4gZT9lOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXkodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZX0pfX0sXCJlczYtaW1wbFwiLFwiZXMzXCIpO3ZhciAkanNjb21wJHRoaXM9dGhpcztcbihmdW5jdGlvbihlLHIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHIpOlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1yKCk6ZS5hbmltZT1yKCl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtpZighaC5jb2woYSkpdHJ5e3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpfWNhdGNoKGMpe319ZnVuY3Rpb24gcihhLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxiPTI8PWFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOnZvaWQgMCxmPVtdLG49MDtuPGQ7bisrKWlmKG4gaW4gYSl7dmFyIGs9YVtuXTtjLmNhbGwoYixrLG4sYSkmJmYucHVzaChrKX1yZXR1cm4gZn1mdW5jdGlvbiBwKGEpe3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGQpe3JldHVybiBhLmNvbmNhdChoLmFycihkKT9wKGQpOmQpfSxbXSl9ZnVuY3Rpb24gbShhKXtpZihoLmFycihhKSlyZXR1cm4gYTtcbmguc3RyKGEpJiYoYT1lKGEpfHxhKTtyZXR1cm4gYSBpbnN0YW5jZW9mIE5vZGVMaXN0fHxhIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24/W10uc2xpY2UuY2FsbChhKTpbYV19ZnVuY3Rpb24gdShhLGMpe3JldHVybiBhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1jfSl9ZnVuY3Rpb24gQyhhKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1hW2RdO3JldHVybiBjfWZ1bmN0aW9uIEQoYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYSlkW2JdPWMuaGFzT3duUHJvcGVydHkoYik/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIHooYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYylkW2JdPWgudW5kKGFbYl0pP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2E9YS5yZXBsYWNlKC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZnVuY3Rpb24oYSxjLGQsayl7cmV0dXJuIGMrYytkK2QraytrfSk7dmFyIGM9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGEpO1xuYT1wYXJzZUludChjWzFdLDE2KTt2YXIgZD1wYXJzZUludChjWzJdLDE2KSxjPXBhcnNlSW50KGNbM10sMTYpO3JldHVyblwicmdiYShcIithK1wiLFwiK2QrXCIsXCIrYytcIiwxKVwifWZ1bmN0aW9uIFUoYSl7ZnVuY3Rpb24gYyhhLGMsYil7MD5iJiYoYis9MSk7MTxiJiYtLWI7cmV0dXJuIGI8MS82P2ErNiooYy1hKSpiOi41PmI/YzpiPDIvMz9hKyhjLWEpKigyLzMtYikqNjphfXZhciBkPS9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGEpfHwvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhhKTthPXBhcnNlSW50KGRbMV0pLzM2MDt2YXIgYj1wYXJzZUludChkWzJdKS8xMDAsZj1wYXJzZUludChkWzNdKS8xMDAsZD1kWzRdfHwxO2lmKDA9PWIpZj1iPWE9ZjtlbHNle3ZhciBuPS41PmY/ZiooMStiKTpmK2ItZipiLGs9MipmLW4sZj1jKGssbixhKzEvMyksYj1jKGssbixhKTthPWMoayxuLGEtMS8zKX1yZXR1cm5cInJnYmEoXCIrXG4yNTUqZitcIixcIisyNTUqYitcIixcIisyNTUqYStcIixcIitkK1wiKVwifWZ1bmN0aW9uIHkoYSl7aWYoYT0vKFtcXCtcXC1dP1swLTkjXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWMoYSkpcmV0dXJuIGFbMl19ZnVuY3Rpb24gVihhKXtpZigtMTxhLmluZGV4T2YoXCJ0cmFuc2xhdGVcIil8fFwicGVyc3BlY3RpdmVcIj09PWEpcmV0dXJuXCJweFwiO2lmKC0xPGEuaW5kZXhPZihcInJvdGF0ZVwiKXx8LTE8YS5pbmRleE9mKFwic2tld1wiKSlyZXR1cm5cImRlZ1wifWZ1bmN0aW9uIEkoYSxjKXtyZXR1cm4gaC5mbmMoYSk/YShjLnRhcmdldCxjLmlkLGMudG90YWwpOmF9ZnVuY3Rpb24gRShhLGMpe2lmKGMgaW4gYS5zdHlsZSlyZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCkpfHxcIjBcIn1mdW5jdGlvbiBKKGEsYyl7aWYoaC5kb20oYSkmJlxudShXLGMpKXJldHVyblwidHJhbnNmb3JtXCI7aWYoaC5kb20oYSkmJihhLmdldEF0dHJpYnV0ZShjKXx8aC5zdmcoYSkmJmFbY10pKXJldHVyblwiYXR0cmlidXRlXCI7aWYoaC5kb20oYSkmJlwidHJhbnNmb3JtXCIhPT1jJiZFKGEsYykpcmV0dXJuXCJjc3NcIjtpZihudWxsIT1hW2NdKXJldHVyblwib2JqZWN0XCJ9ZnVuY3Rpb24gWChhLGMpe3ZhciBkPVYoYyksZD0tMTxjLmluZGV4T2YoXCJzY2FsZVwiKT8xOjArZDthPWEuc3R5bGUudHJhbnNmb3JtO2lmKCFhKXJldHVybiBkO2Zvcih2YXIgYj1bXSxmPVtdLG49W10saz0vKFxcdyspXFwoKC4rPylcXCkvZztiPWsuZXhlYyhhKTspZi5wdXNoKGJbMV0pLG4ucHVzaChiWzJdKTthPXIobixmdW5jdGlvbihhLGIpe3JldHVybiBmW2JdPT09Y30pO3JldHVybiBhLmxlbmd0aD9hWzBdOmR9ZnVuY3Rpb24gSyhhLGMpe3N3aXRjaChKKGEsYykpe2Nhc2UgXCJ0cmFuc2Zvcm1cIjpyZXR1cm4gWChhLGMpO2Nhc2UgXCJjc3NcIjpyZXR1cm4gRShhLGMpO2Nhc2UgXCJhdHRyaWJ1dGVcIjpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYyl9cmV0dXJuIGFbY118fFxuMH1mdW5jdGlvbiBMKGEsYyl7dmFyIGQ9L14oXFwqPXxcXCs9fC09KS8uZXhlYyhhKTtpZighZClyZXR1cm4gYTt2YXIgYj15KGEpfHwwO2M9cGFyc2VGbG9hdChjKTthPXBhcnNlRmxvYXQoYS5yZXBsYWNlKGRbMF0sXCJcIikpO3N3aXRjaChkWzBdWzBdKXtjYXNlIFwiK1wiOnJldHVybiBjK2ErYjtjYXNlIFwiLVwiOnJldHVybiBjLWErYjtjYXNlIFwiKlwiOnJldHVybiBjKmErYn19ZnVuY3Rpb24gRihhLGMpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYy54LWEueCwyKStNYXRoLnBvdyhjLnktYS55LDIpKX1mdW5jdGlvbiBNKGEpe2E9YS5wb2ludHM7Zm9yKHZhciBjPTAsZCxiPTA7YjxhLm51bWJlck9mSXRlbXM7YisrKXt2YXIgZj1hLmdldEl0ZW0oYik7MDxiJiYoYys9RihkLGYpKTtkPWZ9cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtpZihhLmdldFRvdGFsTGVuZ3RoKXJldHVybiBhLmdldFRvdGFsTGVuZ3RoKCk7c3dpdGNoKGEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlIFwiY2lyY2xlXCI6cmV0dXJuIDIqXG5NYXRoLlBJKmEuZ2V0QXR0cmlidXRlKFwiclwiKTtjYXNlIFwicmVjdFwiOnJldHVybiAyKmEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikrMiphLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtjYXNlIFwibGluZVwiOnJldHVybiBGKHt4OmEuZ2V0QXR0cmlidXRlKFwieDFcIikseTphLmdldEF0dHJpYnV0ZShcInkxXCIpfSx7eDphLmdldEF0dHJpYnV0ZShcIngyXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MlwiKX0pO2Nhc2UgXCJwb2x5bGluZVwiOnJldHVybiBNKGEpO2Nhc2UgXCJwb2x5Z29uXCI6dmFyIGM9YS5wb2ludHM7cmV0dXJuIE0oYSkrRihjLmdldEl0ZW0oYy5udW1iZXJPZkl0ZW1zLTEpLGMuZ2V0SXRlbSgwKSl9fWZ1bmN0aW9uIFkoYSxjKXtmdW5jdGlvbiBkKGIpe2I9dm9pZCAwPT09Yj8wOmI7cmV0dXJuIGEuZWwuZ2V0UG9pbnRBdExlbmd0aCgxPD1jK2I/YytiOjApfXZhciBiPWQoKSxmPWQoLTEpLG49ZCgxKTtzd2l0Y2goYS5wcm9wZXJ0eSl7Y2FzZSBcInhcIjpyZXR1cm4gYi54O2Nhc2UgXCJ5XCI6cmV0dXJuIGIueTtcbmNhc2UgXCJhbmdsZVwiOnJldHVybiAxODAqTWF0aC5hdGFuMihuLnktZi55LG4ueC1mLngpL01hdGguUEl9fWZ1bmN0aW9uIE8oYSxjKXt2YXIgZD0vLT9cXGQqXFwuP1xcZCsvZyxiO2I9aC5wdGgoYSk/YS50b3RhbExlbmd0aDphO2lmKGguY29sKGIpKWlmKGgucmdiKGIpKXt2YXIgZj0vcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMoYik7Yj1mP1wicmdiYShcIitmWzFdK1wiLDEpXCI6Yn1lbHNlIGI9aC5oZXgoYik/VChiKTpoLmhzbChiKT9VKGIpOnZvaWQgMDtlbHNlIGY9KGY9eShiKSk/Yi5zdWJzdHIoMCxiLmxlbmd0aC1mLmxlbmd0aCk6YixiPWMmJiEvXFxzL2cudGVzdChiKT9mK2M6ZjtiKz1cIlwiO3JldHVybntvcmlnaW5hbDpiLG51bWJlcnM6Yi5tYXRjaChkKT9iLm1hdGNoKGQpLm1hcChOdW1iZXIpOlswXSxzdHJpbmdzOmguc3RyKGEpfHxjP2Iuc3BsaXQoZCk6W119fWZ1bmN0aW9uIFAoYSl7YT1hP3AoaC5hcnIoYSk/YS5tYXAobSk6bShhKSk6W107cmV0dXJuIHIoYSxcbmZ1bmN0aW9uKGEsZCxiKXtyZXR1cm4gYi5pbmRleE9mKGEpPT09ZH0pfWZ1bmN0aW9uIFooYSl7dmFyIGM9UChhKTtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm57dGFyZ2V0OmEsaWQ6Yix0b3RhbDpjLmxlbmd0aH19KX1mdW5jdGlvbiBhYShhLGMpe3ZhciBkPUMoYyk7aWYoaC5hcnIoYSkpe3ZhciBiPWEubGVuZ3RoOzIhPT1ifHxoLm9iaihhWzBdKT9oLmZuYyhjLmR1cmF0aW9uKXx8KGQuZHVyYXRpb249Yy5kdXJhdGlvbi9iKTphPXt2YWx1ZTphfX1yZXR1cm4gbShhKS5tYXAoZnVuY3Rpb24oYSxiKXtiPWI/MDpjLmRlbGF5O2E9aC5vYmooYSkmJiFoLnB0aChhKT9hOnt2YWx1ZTphfTtoLnVuZChhLmRlbGF5KSYmKGEuZGVsYXk9Yik7cmV0dXJuIGF9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHooYSxkKX0pfWZ1bmN0aW9uIGJhKGEsYyl7dmFyIGQ9e30sYjtmb3IoYiBpbiBhKXt2YXIgZj1JKGFbYl0sYyk7aC5hcnIoZikmJihmPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBJKGEsXG5jKX0pLDE9PT1mLmxlbmd0aCYmKGY9ZlswXSkpO2RbYl09Zn1kLmR1cmF0aW9uPXBhcnNlRmxvYXQoZC5kdXJhdGlvbik7ZC5kZWxheT1wYXJzZUZsb2F0KGQuZGVsYXkpO3JldHVybiBkfWZ1bmN0aW9uIGNhKGEpe3JldHVybiBoLmFycihhKT9BLmFwcGx5KHRoaXMsYSk6UVthXX1mdW5jdGlvbiBkYShhLGMpe3ZhciBkO3JldHVybiBhLnR3ZWVucy5tYXAoZnVuY3Rpb24oYil7Yj1iYShiLGMpO3ZhciBmPWIudmFsdWUsZT1LKGMudGFyZ2V0LGEubmFtZSksaz1kP2QudG8ub3JpZ2luYWw6ZSxrPWguYXJyKGYpP2ZbMF06ayx3PUwoaC5hcnIoZik/ZlsxXTpmLGspLGU9eSh3KXx8eShrKXx8eShlKTtiLmZyb209TyhrLGUpO2IudG89Tyh3LGUpO2Iuc3RhcnQ9ZD9kLmVuZDphLm9mZnNldDtiLmVuZD1iLnN0YXJ0K2IuZGVsYXkrYi5kdXJhdGlvbjtiLmVhc2luZz1jYShiLmVhc2luZyk7Yi5lbGFzdGljaXR5PSgxRTMtTWF0aC5taW4oTWF0aC5tYXgoYi5lbGFzdGljaXR5LDEpLDk5OSkpL1xuMUUzO2IuaXNQYXRoPWgucHRoKGYpO2IuaXNDb2xvcj1oLmNvbChiLmZyb20ub3JpZ2luYWwpO2IuaXNDb2xvciYmKGIucm91bmQ9MSk7cmV0dXJuIGQ9Yn0pfWZ1bmN0aW9uIGVhKGEsYyl7cmV0dXJuIHIocChhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYil7dmFyIGM9SihhLnRhcmdldCxiLm5hbWUpO2lmKGMpe3ZhciBkPWRhKGIsYSk7Yj17dHlwZTpjLHByb3BlcnR5OmIubmFtZSxhbmltYXRhYmxlOmEsdHdlZW5zOmQsZHVyYXRpb246ZFtkLmxlbmd0aC0xXS5lbmQsZGVsYXk6ZFswXS5kZWxheX19ZWxzZSBiPXZvaWQgMDtyZXR1cm4gYn0pfSkpLGZ1bmN0aW9uKGEpe3JldHVybiFoLnVuZChhKX0pfWZ1bmN0aW9uIFIoYSxjLGQsYil7dmFyIGY9XCJkZWxheVwiPT09YTtyZXR1cm4gYy5sZW5ndGg/KGY/TWF0aC5taW46TWF0aC5tYXgpLmFwcGx5KE1hdGgsYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGJbYV19KSk6Zj9iLmRlbGF5OmQub2Zmc2V0K2IuZGVsYXkrXG5iLmR1cmF0aW9ufWZ1bmN0aW9uIGZhKGEpe3ZhciBjPUQoZ2EsYSksZD1EKFMsYSksYj1aKGEudGFyZ2V0cyksZj1bXSxlPXooYyxkKSxrO2ZvcihrIGluIGEpZS5oYXNPd25Qcm9wZXJ0eShrKXx8XCJ0YXJnZXRzXCI9PT1rfHxmLnB1c2goe25hbWU6ayxvZmZzZXQ6ZS5vZmZzZXQsdHdlZW5zOmFhKGFba10sZCl9KTthPWVhKGIsZik7cmV0dXJuIHooYyx7Y2hpbGRyZW46W10sYW5pbWF0YWJsZXM6YixhbmltYXRpb25zOmEsZHVyYXRpb246UihcImR1cmF0aW9uXCIsYSxjLGQpLGRlbGF5OlIoXCJkZWxheVwiLGEsYyxkKX0pfWZ1bmN0aW9uIHEoYSl7ZnVuY3Rpb24gYygpe3JldHVybiB3aW5kb3cuUHJvbWlzZSYmbmV3IFByb21pc2UoZnVuY3Rpb24oYSl7cmV0dXJuIHA9YX0pfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGcucmV2ZXJzZWQ/Zy5kdXJhdGlvbi1hOmF9ZnVuY3Rpb24gYihhKXtmb3IodmFyIGI9MCxjPXt9LGQ9Zy5hbmltYXRpb25zLGY9ZC5sZW5ndGg7YjxmOyl7dmFyIGU9ZFtiXSxcbms9ZS5hbmltYXRhYmxlLGg9ZS50d2VlbnMsbj1oLmxlbmd0aC0xLGw9aFtuXTtuJiYobD1yKGgsZnVuY3Rpb24oYil7cmV0dXJuIGE8Yi5lbmR9KVswXXx8bCk7Zm9yKHZhciBoPU1hdGgubWluKE1hdGgubWF4KGEtbC5zdGFydC1sLmRlbGF5LDApLGwuZHVyYXRpb24pL2wuZHVyYXRpb24sdz1pc05hTihoKT8xOmwuZWFzaW5nKGgsbC5lbGFzdGljaXR5KSxoPWwudG8uc3RyaW5ncyxwPWwucm91bmQsbj1bXSxtPXZvaWQgMCxtPWwudG8ubnVtYmVycy5sZW5ndGgsdD0wO3Q8bTt0Kyspe3ZhciB4PXZvaWQgMCx4PWwudG8ubnVtYmVyc1t0XSxxPWwuZnJvbS5udW1iZXJzW3RdLHg9bC5pc1BhdGg/WShsLnZhbHVlLHcqeCk6cSt3Kih4LXEpO3AmJihsLmlzQ29sb3ImJjI8dHx8KHg9TWF0aC5yb3VuZCh4KnApL3ApKTtuLnB1c2goeCl9aWYobD1oLmxlbmd0aClmb3IobT1oWzBdLHc9MDt3PGw7dysrKXA9aFt3KzFdLHQ9blt3XSxpc05hTih0KXx8KG09cD9tKyh0K3ApOm0rKHQrXCIgXCIpKTtcbmVsc2UgbT1uWzBdO2hhW2UudHlwZV0oay50YXJnZXQsZS5wcm9wZXJ0eSxtLGMsay5pZCk7ZS5jdXJyZW50VmFsdWU9bTtiKyt9aWYoYj1PYmplY3Qua2V5cyhjKS5sZW5ndGgpZm9yKGQ9MDtkPGI7ZCsrKUh8fChIPUUoZG9jdW1lbnQuYm9keSxcInRyYW5zZm9ybVwiKT9cInRyYW5zZm9ybVwiOlwiLXdlYmtpdC10cmFuc2Zvcm1cIiksZy5hbmltYXRhYmxlc1tkXS50YXJnZXQuc3R5bGVbSF09Y1tkXS5qb2luKFwiIFwiKTtnLmN1cnJlbnRUaW1lPWE7Zy5wcm9ncmVzcz1hL2cuZHVyYXRpb24qMTAwfWZ1bmN0aW9uIGYoYSl7aWYoZ1thXSlnW2FdKGcpfWZ1bmN0aW9uIGUoKXtnLnJlbWFpbmluZyYmITAhPT1nLnJlbWFpbmluZyYmZy5yZW1haW5pbmctLX1mdW5jdGlvbiBrKGEpe3ZhciBrPWcuZHVyYXRpb24sbj1nLm9mZnNldCx3PW4rZy5kZWxheSxyPWcuY3VycmVudFRpbWUseD1nLnJldmVyc2VkLHE9ZChhKTtpZihnLmNoaWxkcmVuLmxlbmd0aCl7dmFyIHU9Zy5jaGlsZHJlbix2PXUubGVuZ3RoO1xuaWYocT49Zy5jdXJyZW50VGltZSlmb3IodmFyIEc9MDtHPHY7RysrKXVbR10uc2VlayhxKTtlbHNlIGZvcig7di0tOyl1W3ZdLnNlZWsocSl9aWYocT49d3x8IWspZy5iZWdhbnx8KGcuYmVnYW49ITAsZihcImJlZ2luXCIpKSxmKFwicnVuXCIpO2lmKHE+biYmcTxrKWIocSk7ZWxzZSBpZihxPD1uJiYwIT09ciYmKGIoMCkseCYmZSgpKSxxPj1rJiZyIT09a3x8IWspYihrKSx4fHxlKCk7ZihcInVwZGF0ZVwiKTthPj1rJiYoZy5yZW1haW5pbmc/KHQ9aCxcImFsdGVybmF0ZVwiPT09Zy5kaXJlY3Rpb24mJihnLnJldmVyc2VkPSFnLnJldmVyc2VkKSk6KGcucGF1c2UoKSxnLmNvbXBsZXRlZHx8KGcuY29tcGxldGVkPSEwLGYoXCJjb21wbGV0ZVwiKSxcIlByb21pc2VcImluIHdpbmRvdyYmKHAoKSxtPWMoKSkpKSxsPTApfWE9dm9pZCAwPT09YT97fTphO3ZhciBoLHQsbD0wLHA9bnVsbCxtPWMoKSxnPWZhKGEpO2cucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgYT1nLmRpcmVjdGlvbixjPWcubG9vcDtnLmN1cnJlbnRUaW1lPVxuMDtnLnByb2dyZXNzPTA7Zy5wYXVzZWQ9ITA7Zy5iZWdhbj0hMTtnLmNvbXBsZXRlZD0hMTtnLnJldmVyc2VkPVwicmV2ZXJzZVwiPT09YTtnLnJlbWFpbmluZz1cImFsdGVybmF0ZVwiPT09YSYmMT09PWM/MjpjO2IoMCk7Zm9yKGE9Zy5jaGlsZHJlbi5sZW5ndGg7YS0tOylnLmNoaWxkcmVuW2FdLnJlc2V0KCl9O2cudGljaz1mdW5jdGlvbihhKXtoPWE7dHx8KHQ9aCk7aygobCtoLXQpKnEuc3BlZWQpfTtnLnNlZWs9ZnVuY3Rpb24oYSl7ayhkKGEpKX07Zy5wYXVzZT1mdW5jdGlvbigpe3ZhciBhPXYuaW5kZXhPZihnKTstMTxhJiZ2LnNwbGljZShhLDEpO2cucGF1c2VkPSEwfTtnLnBsYXk9ZnVuY3Rpb24oKXtnLnBhdXNlZCYmKGcucGF1c2VkPSExLHQ9MCxsPWQoZy5jdXJyZW50VGltZSksdi5wdXNoKGcpLEJ8fGlhKCkpfTtnLnJldmVyc2U9ZnVuY3Rpb24oKXtnLnJldmVyc2VkPSFnLnJldmVyc2VkO3Q9MDtsPWQoZy5jdXJyZW50VGltZSl9O2cucmVzdGFydD1mdW5jdGlvbigpe2cucGF1c2UoKTtcbmcucmVzZXQoKTtnLnBsYXkoKX07Zy5maW5pc2hlZD1tO2cucmVzZXQoKTtnLmF1dG9wbGF5JiZnLnBsYXkoKTtyZXR1cm4gZ312YXIgZ2E9e3VwZGF0ZTp2b2lkIDAsYmVnaW46dm9pZCAwLHJ1bjp2b2lkIDAsY29tcGxldGU6dm9pZCAwLGxvb3A6MSxkaXJlY3Rpb246XCJub3JtYWxcIixhdXRvcGxheTohMCxvZmZzZXQ6MH0sUz17ZHVyYXRpb246MUUzLGRlbGF5OjAsZWFzaW5nOlwiZWFzZU91dEVsYXN0aWNcIixlbGFzdGljaXR5OjUwMCxyb3VuZDowfSxXPVwidHJhbnNsYXRlWCB0cmFuc2xhdGVZIHRyYW5zbGF0ZVogcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlIHNjYWxlWCBzY2FsZVkgc2NhbGVaIHNrZXdYIHNrZXdZIHBlcnNwZWN0aXZlXCIuc3BsaXQoXCIgXCIpLEgsaD17YXJyOmZ1bmN0aW9uKGEpe3JldHVybiBBcnJheS5pc0FycmF5KGEpfSxvYmo6ZnVuY3Rpb24oYSl7cmV0dXJuLTE8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJPYmplY3RcIil9LFxucHRoOmZ1bmN0aW9uKGEpe3JldHVybiBoLm9iaihhKSYmYS5oYXNPd25Qcm9wZXJ0eShcInRvdGFsTGVuZ3RoXCIpfSxzdmc6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50fSxkb206ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGV8fGguc3ZnKGEpfSxzdHI6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfSxmbmM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9LHVuZDpmdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF9LGhleDpmdW5jdGlvbihhKXtyZXR1cm4vKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKX0scmdiOmZ1bmN0aW9uKGEpe3JldHVybi9ecmdiLy50ZXN0KGEpfSxoc2w6ZnVuY3Rpb24oYSl7cmV0dXJuL15oc2wvLnRlc3QoYSl9LGNvbDpmdW5jdGlvbihhKXtyZXR1cm4gaC5oZXgoYSl8fGgucmdiKGEpfHxoLmhzbChhKX19LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsXG5kLGIpe3JldHVybigoKDEtMypiKzMqZCkqYSsoMypiLTYqZCkpKmErMypkKSphfXJldHVybiBmdW5jdGlvbihjLGQsYixmKXtpZigwPD1jJiYxPj1jJiYwPD1iJiYxPj1iKXt2YXIgZT1uZXcgRmxvYXQzMkFycmF5KDExKTtpZihjIT09ZHx8YiE9PWYpZm9yKHZhciBrPTA7MTE+azsrK2spZVtrXT1hKC4xKmssYyxiKTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoYz09PWQmJmI9PT1mKXJldHVybiBrO2lmKDA9PT1rKXJldHVybiAwO2lmKDE9PT1rKXJldHVybiAxO2Zvcih2YXIgaD0wLGw9MTsxMCE9PWwmJmVbbF08PWs7KytsKWgrPS4xOy0tbDt2YXIgbD1oKyhrLWVbbF0pLyhlW2wrMV0tZVtsXSkqLjEsbj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZiguMDAxPD1uKXtmb3IoaD0wOzQ+aDsrK2gpe249MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoMD09PW4pYnJlYWs7dmFyIG09YShsLGMsYiktayxsPWwtbS9ufWs9bH1lbHNlIGlmKDA9PT1cbm4paz1sO2Vsc2V7dmFyIGw9aCxoPWgrLjEsZz0wO2RvIG09bCsoaC1sKS8yLG49YShtLGMsYiktaywwPG4/aD1tOmw9bTt3aGlsZSgxZS03PE1hdGguYWJzKG4pJiYxMD4rK2cpO2s9bX1yZXR1cm4gYShrLGQsZil9fX19KCksUT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtyZXR1cm4gMD09PWF8fDE9PT1hP2E6LU1hdGgucG93KDIsMTAqKGEtMSkpKk1hdGguc2luKDIqKGEtMS1iLygyKk1hdGguUEkpKk1hdGguYXNpbigxKSkqTWF0aC5QSS9iKX12YXIgYz1cIlF1YWQgQ3ViaWMgUXVhcnQgUXVpbnQgU2luZSBFeHBvIENpcmMgQmFjayBFbGFzdGljXCIuc3BsaXQoXCIgXCIpLGQ9e0luOltbLjU1LC4wODUsLjY4LC41M10sWy41NSwuMDU1LC42NzUsLjE5XSxbLjg5NSwuMDMsLjY4NSwuMjJdLFsuNzU1LC4wNSwuODU1LC4wNl0sWy40NywwLC43NDUsLjcxNV0sWy45NSwuMDUsLjc5NSwuMDM1XSxbLjYsLjA0LC45OCwuMzM1XSxbLjYsLS4yOCwuNzM1LC4wNDVdLGFdLE91dDpbWy4yNSxcbi40NiwuNDUsLjk0XSxbLjIxNSwuNjEsLjM1NSwxXSxbLjE2NSwuODQsLjQ0LDFdLFsuMjMsMSwuMzIsMV0sWy4zOSwuNTc1LC41NjUsMV0sWy4xOSwxLC4yMiwxXSxbLjA3NSwuODIsLjE2NSwxXSxbLjE3NSwuODg1LC4zMiwxLjI3NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4gMS1hKDEtYixjKX1dLEluT3V0OltbLjQ1NSwuMDMsLjUxNSwuOTU1XSxbLjY0NSwuMDQ1LC4zNTUsMV0sWy43NywwLC4xNzUsMV0sWy44NiwwLC4wNywxXSxbLjQ0NSwuMDUsLjU1LC45NV0sWzEsMCwwLDFdLFsuNzg1LC4xMzUsLjE1LC44Nl0sWy42OCwtLjU1LC4yNjUsMS41NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4uNT5iP2EoMipiLGMpLzI6MS1hKC0yKmIrMixjKS8yfV19LGI9e2xpbmVhcjpBKC4yNSwuMjUsLjc1LC43NSl9LGY9e30sZTtmb3IoZSBpbiBkKWYudHlwZT1lLGRbZi50eXBlXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihkLGYpe2JbXCJlYXNlXCIrYS50eXBlK2NbZl1dPWguZm5jKGQpP1xuZDpBLmFwcGx5KCRqc2NvbXAkdGhpcyxkKX19KGYpKSxmPXt0eXBlOmYudHlwZX07cmV0dXJuIGJ9KCksaGE9e2NzczpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc3R5bGVbY109ZH0sYXR0cmlidXRlOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoYyxkKX0sb2JqZWN0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYVtjXT1kfSx0cmFuc2Zvcm06ZnVuY3Rpb24oYSxjLGQsYixmKXtiW2ZdfHwoYltmXT1bXSk7YltmXS5wdXNoKGMrXCIoXCIrZCtcIilcIil9fSx2PVtdLEI9MCxpYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtCPXJlcXVlc3RBbmltYXRpb25GcmFtZShjKX1mdW5jdGlvbiBjKGMpe3ZhciBiPXYubGVuZ3RoO2lmKGIpe2Zvcih2YXIgZD0wO2Q8YjspdltkXSYmdltkXS50aWNrKGMpLGQrKzthKCl9ZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZShCKSxCPTB9cmV0dXJuIGF9KCk7cS52ZXJzaW9uPVwiMi4yLjBcIjtxLnNwZWVkPTE7cS5ydW5uaW5nPXY7cS5yZW1vdmU9XG5mdW5jdGlvbihhKXthPVAoYSk7Zm9yKHZhciBjPXYubGVuZ3RoO2MtLTspZm9yKHZhciBkPXZbY10sYj1kLmFuaW1hdGlvbnMsZj1iLmxlbmd0aDtmLS07KXUoYSxiW2ZdLmFuaW1hdGFibGUudGFyZ2V0KSYmKGIuc3BsaWNlKGYsMSksYi5sZW5ndGh8fGQucGF1c2UoKSl9O3EuZ2V0VmFsdWU9SztxLnBhdGg9ZnVuY3Rpb24oYSxjKXt2YXIgZD1oLnN0cihhKT9lKGEpWzBdOmEsYj1jfHwxMDA7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybntlbDpkLHByb3BlcnR5OmEsdG90YWxMZW5ndGg6TihkKSooYi8xMDApfX19O3Euc2V0RGFzaG9mZnNldD1mdW5jdGlvbihhKXt2YXIgYz1OKGEpO2Euc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLGMpO3JldHVybiBjfTtxLmJlemllcj1BO3EuZWFzaW5ncz1RO3EudGltZWxpbmU9ZnVuY3Rpb24oYSl7dmFyIGM9cShhKTtjLnBhdXNlKCk7Yy5kdXJhdGlvbj0wO2MuYWRkPWZ1bmN0aW9uKGQpe2MuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhKXthLmJlZ2FuPVxuITA7YS5jb21wbGV0ZWQ9ITB9KTttKGQpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9eihiLEQoUyxhfHx7fSkpO2QudGFyZ2V0cz1kLnRhcmdldHN8fGEudGFyZ2V0cztiPWMuZHVyYXRpb247dmFyIGU9ZC5vZmZzZXQ7ZC5hdXRvcGxheT0hMTtkLmRpcmVjdGlvbj1jLmRpcmVjdGlvbjtkLm9mZnNldD1oLnVuZChlKT9iOkwoZSxiKTtjLmJlZ2FuPSEwO2MuY29tcGxldGVkPSEwO2Muc2VlayhkLm9mZnNldCk7ZD1xKGQpO2QuYmVnYW49ITA7ZC5jb21wbGV0ZWQ9ITA7ZC5kdXJhdGlvbj5iJiYoYy5kdXJhdGlvbj1kLmR1cmF0aW9uKTtjLmNoaWxkcmVuLnB1c2goZCl9KTtjLnNlZWsoMCk7Yy5yZXNldCgpO2MuYXV0b3BsYXkmJmMucmVzdGFydCgpO3JldHVybiBjfTtyZXR1cm4gY307cS5yYW5kb209ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihjLWErMSkpK2F9O3JldHVybiBxfSk7IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBDcmVkaXQgdG8gaHR0cDovL3RvYmlhc2FobGluLmNvbS9tb3ZpbmctbGV0dGVycy8gZm9yIHRoZSBhbmltYXRpb25zXG4vLyBVc2VkIGVmZmVjdCAxNSBmb3IgdGl0bGUgYW5pbWF0aW9uIGFuZCBlZmZlY3QgMTEgZm9yIGRlc2NyaXB0aW9uIGFuaW1hdGlvblxuXG4vLyBOb2RlIE1vZHVsZXNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5cbi8vIFJlc2l6ZSBtYXJnaW4gdG9wIGZ1bmN0aW9uXG5pbXBvcnQgcmVzaXplTWFyZ2luVG9wTG9nbyBmcm9tICcuL29uUmVzaXplSG9tZS5qcyc7XG5cblxuLy8gRGVmYXVsdCBmdW5jdGlvbiBjYWxsZWQgdG8gc3RhcnQgdGhlIGFuaW1hdGlvbiBjaGFpblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbExvZ29UaW1lbGluZSgpe1xuXG5cdC8vIEVuc3VyZSB0aGF0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgYnV0dG9uIGFyZSBub3QgdmlzaWJsZVxuXHQkKCcjbmFtZS1hbmltYXRlJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcblx0JCgnI2Rlc2MtYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cdCQoJyNidXR0b24tYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cblx0Ly8gY3JlZGl0IHRvIFRvYmlhcyBBaGxpbiAoaHR0cDovL3RvYmlhc2FobGluLmNvbS9tb3ZpbmctbGV0dGVycy8pIGVmZmVjdCAxMVxuXHQvLyBVc2VkIHRvIHdyYXAgZWFjaCBsZXR0ZXIgaW4gZGVzY3JpcHRpb24gaW4gc3BhbiBmb3IgdHlwaW5nIGVmZmVjdFxuXHQkKCcjZGVzYy1hbmltYXRlIC5sZXR0ZXJzJykuZWFjaChmdW5jdGlvbigpe1xuXHQgICQodGhpcykuaHRtbCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKC8oW15cXHgwMC1cXHg4MF18XFx3KS9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXInPiQmPC9zcGFuPlwiKSk7XG5cdH0pO1xuXG5cdC8vIFJlbW92ZSB0aGUgb3ZlcmxheSBmcm9tIHRoZSBwYWdlXG5cdHJlbW92ZU92ZXJsYXkoKTtcblxuXHQvLyBhbmltZWpzIHRpbWVsaW5lIGZvciBsb2dvIHN2ZyBkcmF3aW5nLCBzY2FsaW5nLCAmIHJvdGF0aW5nXG5cdGNvbnN0IGxvZ29UaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0bG9nb1RpbWVsaW5lXG5cdC8vIERyYXcgcmVjdGFuZ2xlIDFcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtMScsXG5cdFx0d2lkdGg6IDUwMCxcblx0XHRoZWlnaHQ6IDEwMCxcblx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRkaXJlY3Rpb246ICdhbHRlcm5hdGUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gRHJhdyByZWN0YW5nbGUgMlxuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC0yJyxcblx0XHR3aWR0aDogMTAwLFxuXHRcdGhlaWdodDogNTAwLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gRHJhdyByZWN0YW5nbGUgM1xuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC0zJyxcblx0XHR3aWR0aDogNTAwLFxuXHRcdGhlaWdodDogMTAwLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gRHJhdyByZWN0YW5nbGUgNFxuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC00Jyxcblx0XHR3aWR0aDogMTAwLFxuXHRcdGhlaWdodDogMzAwLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gRHJhdyByZWN0YW5nbGUgNVxuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC01Jyxcblx0XHR3aWR0aDogMzAwLFxuXHRcdGhlaWdodDogMTAwLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gZmFkZWluIHRoZSBzaGFkb3cgcG9seWdvbnNcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIC5zaGFkb3ctcG9seScsXG5cdFx0b3BhY2l0eTogMC4yLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcdFx0XG5cdH0pXG5cdC8vIGZhZGVpbiByZWN0YW5nbGUgZ3JhZGllbnRzXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAuZ3JhZC1zdmctcmVjdCcsXG5cdFx0b3BhY2l0eTogMC4xLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdGR1cmF0aW9uOiA1MDBcblx0fSlcblx0Ly8gc2NhbGUgYW5kIHJvdGF0ZSBzdmdcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIHN2ZycsXG5cdFx0c2NhbGU6IHtcblx0XHRcdHZhbHVlOiAwLjUsXG5cdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFF1YXJ0J1xuXHRcdH0sXG5cdFx0cm90YXRlOiB7XG5cdFx0XHR2YWx1ZTogMzE1LFxuXHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0XHRkZWxheTogMTAwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnXG5cdFx0fSxcblx0XHQvL29uY2UgZmluaXNoZWQgY2FsbCBtb3ZvTG9nbyB0byBjZW50ZXIgc2NhbGVkIGxvZ29cblx0XHRjb21wbGV0ZTogbW92ZUxvZ29cblx0fSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgb3ZlcmxheSBvbmNlIGNzcyAmIGpzIGFzc2V0cyBsb2FkZWRcbmZ1bmN0aW9uIHJlbW92ZU92ZXJsYXkoKXtcblxuXHQvLyBhbmltZWpzIHRpbWVsaW5lIGZvciBzbGlkZSB1cCBhbmltYXRpb25cblx0Y29uc3Qgb3ZlcmxheVRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoKTtcblxuXHRvdmVybGF5VGltZWxpbmVcblx0Ly8gc2xpZGUgdXBcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNzcGlubmVyLW92ZXJsYXknLFxuXHRcdHRyYW5zbGF0ZVk6IFswLCAnLTEwMCUnXSxcblx0XHRlYXNpbmc6IFwiZWFzZUluT3V0U2luZVwiLFxuXHRcdGR1cmF0aW9uOiAxMDAwXG5cdH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjZW50ZXIgdGhlIGNvbnRlbnQgcHJvcGVybHlcbmZ1bmN0aW9uIG1vdmVMb2dvKCl7XG5cblx0Ly8gZ2V0IHRoZSBtYXJnaW4tdG9wIHRvIGJlIGFkZGVkIHRvIHN2Z1xuXHRjb25zdCBuZXdNYXJnaW5Ub3AgPSByZXNpemVNYXJnaW5Ub3BMb2dvKCk7XG5cblx0Ly8gYW5pbWVqcyB0aW1lbGluZSBmb3IgY2VudGVyaW5nIG9mIGNvbnRlbnRcblx0Y29uc3QgbW92ZUxvZ29UaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0bW92ZUxvZ29UaW1lbGluZVxuXHQvLyBjZW50ZXIgbG9nbyBzdmcgd2l0aCBjb250ZW50XG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyBzdmcnLFxuXHRcdG1hcmdpblRvcDogbmV3TWFyZ2luVG9wLFxuXHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdC8vIG9uY2UgZmluaXNoZWQgc3RhcnQgbmFtZSBhbmltYXRpb25cblx0XHRjb21wbGV0ZTogYW5pbWF0ZU5hbWVcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVOYW1lKCl7XG5cblx0Ly8gcmV2ZXJ0IG9wYWNpdHkgYmFjayB0byBkZWZhdWx0XG5cdCQoJyNuYW1lLWFuaW1hdGUnKS5jc3MoJ29wYWNpdHknLCAnJyk7XG5cblx0Ly8gdGltZWxpbmUgdG8gYW5pbWF0ZSBuYW1lXG5cdGNvbnN0IG5hbWVUaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cdFxuXHRuYW1lVGltZWxpbmVcblx0LmFkZCh7XG5cdFx0Ly8gc2NhbGUgb3V0IHRoZW4gaW5cblx0XHR0YXJnZXRzOiAnI25hbWUtYW5pbWF0ZSAud29yZCcsXG5cdFx0c2NhbGU6IFsxNiwgMV0sXG5cdFx0b3BhY2l0eTogWzAsIDFdLFxuXHRcdGVhc2luZzogJ2Vhc2VPdXRDaXJjJyxcblx0XHRkdXJhdGlvbjogODAwLFxuXHRcdGRlbGF5OiBmdW5jdGlvbihlLCBpKXtcblx0XHRcdHJldHVybiA4MDAgKiBpO1xuXHRcdH0sXG5cdFx0Ly8gb25jZSBmaW5pc2hlZCBzdGFydCB0aGUgZGVzY3JpcHRpb24gYW5pbWF0aW9uXG5cdFx0Y29tcGxldGU6IGFuaW1hdGVEZXNjcmlwdGlvblxuXHR9KTtcbn1cblxuLy9cbmZ1bmN0aW9uIGFuaW1hdGVEZXNjcmlwdGlvbigpe1xuXG5cdC8vIHJldmVydCBvcGFjaXR5IGJhY2sgdG8gZGVmYXVsdFxuXHQkKCcjZGVzYy1hbmltYXRlJykuY3NzKCdvcGFjaXR5JywgJycpO1xuXG5cdC8vIHRpbWVsaW5lIHRvIGFuaW1hdGUgZGVzY3JpcHRpb25cblx0Y29uc3QgZGVzY3JpcHRpb25UaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0ZGVzY3JpcHRpb25UaW1lbGluZVxuICAuYWRkKHtcbiAgXHQvLyBzdGFydCBsaW5lIGZvciB0eXBpbmcgZWZmZWN0XG4gICAgdGFyZ2V0czogJyNkZXNjLWFuaW1hdGUgLmxpbmUnLFxuICAgIHNjYWxlWTogWzAsMV0sXG4gICAgb3BhY2l0eTogWzAuNSwxXSxcbiAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICBkdXJhdGlvbjogNzAwXG4gIH0pXG4gIC8vIG1vdmUgbGluZSB0byByaWdodCBmb3IgZWZmZWN0XG4gIC5hZGQoe1xuICAgIHRhcmdldHM6ICcjZGVzYy1hbmltYXRlIC5saW5lJyxcbiAgICB0cmFuc2xhdGVYOiBbMCwkKFwiI2Rlc2MtYW5pbWF0ZSAubGV0dGVyc1wiKS53aWR0aCgpXSxcbiAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICBkdXJhdGlvbjogNzAwLFxuICAgIGRlbGF5OiAxMDBcbiAgfSlcbiAgLy8gdHlwZSBpbiBsZXR0ZXJzIGVmZmVjdFxuICAuYWRkKHtcbiAgICB0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGV0dGVyJyxcbiAgICBvcGFjaXR5OiBbMCwxXSxcbiAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbiAgICBkdXJhdGlvbjogNjAwLFxuICAgIG9mZnNldDogJy09Nzc1JyxcbiAgICBkZWxheTogZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgIHJldHVybiAzNCAqIChpKzEpXG4gICAgfSxcbiAgICAvLyBvbmNlIGZpbmlzaGVkIGNvbnRpbnVlIHRvIGxvb3AgbGluZSBhbmQgYW5pbWF0ZSBidXR0b25cbiAgICBjb21wbGV0ZTogbG9vcExpbmVBbmltYXRlQnV0dG9uXG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBzdGFydCBsb29wIHR5cGluZyBsaW5lIGFuZCBzdGFydCBidXR0b24gYW5pbWF0aW9uXG5mdW5jdGlvbiBsb29wTGluZUFuaW1hdGVCdXR0b24oKXtcblx0bG9vcExpbmUoKTtcblx0YW5pbWF0ZUJ1dHRvbigpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGxvb3AgdHlwaW5nIGxpbmVcbmZ1bmN0aW9uIGxvb3BMaW5lKCl7XG5cblx0Ly8gdGltZWxpbmUgdG8gYW5pbWF0ZSB0eXBpbmcgbGluZSAoaW5maW5pdGUpXG5cdGNvbnN0IGxvb3BUaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKHsgbG9vcDogdHJ1ZX0pO1xuXG5cdGxvb3BUaW1lbGluZVxuXHQvLyBibGluayBvdXRcblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNkZXNjLWFuaW1hdGUgLmxpbmUnLFxuXHQgIG9wYWNpdHk6IFsxLDBdLFxuXHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRkdXJhdGlvbjogODAwXG5cdH0pXG5cdC8vIGJsaW5rIGluXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjZGVzYy1hbmltYXRlIC5saW5lJyxcblx0ICBvcGFjaXR5OiBbMCwxXSxcblx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0ZHVyYXRpb246IDgwMFxuXHR9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc3RhcnQgYnV0dG9uIGFuaW1hdGlvblxuZnVuY3Rpb24gYW5pbWF0ZUJ1dHRvbigpe1xuXHRcblx0Ly8gcmV2ZXJ0IGJ1dHRvbiB0byBkZWZhdWx0IG9wYWNpdHlcblx0JCgnI2J1dHRvbi1hbmltYXRlJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcblxuXHQvLyB0aW1lbGluZSB0byBhbmltYXRlIGJ1dHRvblxuXHRjb25zdCBidXR0b25UaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0YnV0dG9uVGltZWxpbmVcblx0Ly8gZmFkZSBidXR0b24gaW5cblx0LmFkZCh7XG5cdFx0dGFyZ2V0czogJyNidXR0b24tYW5pbWF0ZSAubGluZScsXG5cdCAgb3BhY2l0eTogWzAsMV0sXG5cdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdGNvbXBsZXRlOiByZXZlcnREZXNjcmlwdGlvblxuXHR9KTtcbn0gXG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBzcGFucyBmcm9tIGRlc2NyaXB0aW9uIChmb3Igc2VvL3Jlc3BvbnNpdmUgZGlzcGxheSlcbmZ1bmN0aW9uIHJldmVydERlc2NyaXB0aW9uKCkge1xuXHQkKCcjZGVzYy1hbmltYXRlIC5sZXR0ZXJzJykucmVwbGFjZVdpdGgoJzxzcGFuIGNsYXNzPVwibGV0dGVyc1wiPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPicpO1xuXHRpbmZpbml0ZVJvdGF0ZSgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byByb3RhdGUgc3ZnIGxvZ28gKGluZmluaXRlKVxuZnVuY3Rpb24gaW5maW5pdGVSb3RhdGUoKSB7XG5cblx0Ly8gdGltZWxpbmUgdG8gcm90YXRlIGxvZ29cblx0Y29uc3Qgcm90YXRlVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSh7IGxvb3A6IHRydWV9KTtcblx0XG5cdHJvdGF0ZVRpbWVsaW5lXG5cdC8vIHJvdGF0ZSB0byB0byBHXG5cdC5hZGQoe1xuXHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyBzdmcnLFxuXHRcdHNjYWxlOiBbMC41LCAwLjVdLFxuXHRcdHJvdGF0ZToge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRkdXJhdGlvbjogMTUwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFF1aW50Jyxcblx0XHRcdGRlbGF5OiA4MDAwXG5cdFx0fVxuXHR9KVxuXHQvLyByb3RhdGUgdG8gZGlhZ29uYWwgR1xuXHQuYWRkKHtcblx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgc3ZnJyxcblx0XHRzY2FsZTogWzAuNSwgMC41XSxcblx0XHRyb3RhdGU6IHtcblx0XHRcdHZhbHVlOiAzMTUsXG5cdFx0XHRkdXJhdGlvbjogMTUwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFF1YXJ0Jyxcblx0XHRcdGRlbGF5OiAxMDAwXG5cdFx0fVxuXHR9KTtcbn0gXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbi8vIEFkZCBtYXJnaW4gdG9wIHRvIHdoZW4gb25seSBMb2dvIGRyYXdpbmcgKG5hbWUvZGVzYy9idXR0b24gbm8gc2hvd2luZylcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxIb21lUmVzaXplKCl7XG5cblx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRjb25zdCBob21lQ29udGFpbmVyRWwgPSAkKCcjaG9tZS1jb250YWluZXInKTtcblx0Y29uc3Qgc3ZnRWwgPSAkKCcjc3ZnQXR0cmlidXRlcycpO1xuXG5cdC8vIG1hcmdpbiB0byBhZGQgXG5cdGNvbnN0IHN0YXJ0TWFyZ2luID0gKHdpbmRvd0hlaWdodCAtIHN2Z0VsLmhlaWdodCgpKSAvIDI7XG5cblx0Ly8gaWYgaG9tZUNvbnRhaW5lciA+IHdpbmRvdyB0aGVuIG5vIG5lZWQgdG8gYWRkIHBhZGRpbmcgdG8gY2VudGVyXG5cdC8vIGRlZmF1bHQgdG8gMzBweFxuXHRpZihob21lQ29udGFpbmVyRWwuaGVpZ2h0KCkgPiB3aW5kb3dIZWlnaHQpe1xuXHRcdCQoJyNzdmdBdHRyaWJ1dGVzIHN2ZycpLmNzcygnbWFyZ2luLXRvcCcsICczMHB4Jyk7XG5cdFx0XG5cdFx0Ly8gbWFrZSBzdXJlIHRoZSBiYWNrZ3JvdW5kIGdyYWRpZW50IGNvdmVycyBlbnRpcmUgaG9tZUNvbnRhaW5lclxuXHRcdG1pbkhlaWdodEhvbWVDb250YWluZXIoKTtcblx0fSBcblx0Ly8gaWYgaG9tZUNvbnRhaW5lciA8PSB3aW5kb3cgdGhlbiBhZGQgdGhlIG1hcmdpbiB0byB0b3Bcblx0ZWxzZSB7XG5cdFx0JCgnI3N2Z0F0dHJpYnV0ZXMgc3ZnJykuY3NzKCdtYXJnaW4tdG9wJywgc3RhcnRNYXJnaW4pO1xuXHR9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIG1ha2Ugc3VyZSBncmFkaWVudCBiYWNrZ3JvdW5kIGNvdmVycyBhbGwgY29udGVudFxuZnVuY3Rpb24gbWluSGVpZ2h0SG9tZUNvbnRhaW5lcigpIHtcblx0Y29uc3QgaG9tZUNvbnRhaW5lckVsID0gJCgnI2hvbWUtY29udGFpbmVyJyk7XG5cdCQoJy5mdWxsLWhlaWdodC13aWR0aCcpLmNzcygnbWluLWhlaWdodCcsIGhvbWVDb250YWluZXJFbC5oZWlnaHQoKSk7XG59XG5cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuLy8gcmVzaXplIG1hcmdpbnRvcCBvbiBzdmcgdG8gY2VudGVyIGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2l6ZU1hcmdpblRvcExvZ28oKXtcblxuXHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cblx0Y29uc3Qgc3ZnQXR0ck1hcmdpblRvcCA9IHBhcnNlSW50KCQoJyNzdmdBdHRyaWJ1dGVzIHN2ZycpLmNzcygnbWFyZ2luLXRvcCcpKTtcblxuXHQvLyBnZXQgaG9tZSBjb250YWluZXIgaGVpZ2h0IHdpdGhvdXQgbWFyZ2luIHRvcFxuXHRjb25zdCBob21lQ29udGFpbmVySGVpZ2h0ID0gJCgnI2hvbWUtY29udGFpbmVyJykuaGVpZ2h0KCkgLSBzdmdBdHRyTWFyZ2luVG9wO1xuXG5cdC8vIGdldCBzdmdBdHRyIGhlaWdodCB3aXRob3V0IG1hcmdpbiB0b3Bcblx0Y29uc3Qgc3ZnQXR0ckhlaWdodCA9ICQoJyNzdmdBdHRyaWJ1dGVzJykuaGVpZ2h0KCkgLSBzdmdBdHRyTWFyZ2luVG9wO1xuXG5cdC8vIGNhbGN1bGF0ZSBoZWlnaHQgb2YgMC41IHNjYWxlZCAmIGRpYWdvbmFsIHN2ZyBcblx0Y29uc3Qgc3ZnSGVpZ2h0ID0gTWF0aC5zcXJ0KE1hdGgucG93KChzdmdBdHRySGVpZ2h0IC8gMiksIDIpICogMik7XG5cblx0Ly8gR2V0IHZpc3VhbCBwYWRkaW5nIG9uIHRoZSB0b3Agb2Ygc3ZnIGxvZ29cblx0Y29uc3Qgc3ZnUGFkZGluZyA9IChzdmdBdHRySGVpZ2h0IC0gc3ZnSGVpZ2h0KSAvIDI7XG5cblx0Ly8gaWYgdGhlIGhvbWVDb250YWluZXIgPCB3aW5kb3cgdGhlbiBuZWVkIHBhZGRpbmcgdG8gY2VudGVyXG5cdGlmKGhvbWVDb250YWluZXJIZWlnaHQgPCB3aW5kb3dIZWlnaHQpe1xuXG5cdFx0Ly8gY2FsY3VsYXRlIHNwYWNlIGJlbG93IGhvbWVDb250YWluZXIgY29udGVudFxuXHRcdGNvbnN0IGJlbG93Q29udGFpbmVySGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaG9tZUNvbnRhaW5lckhlaWdodDtcblxuXHRcdC8vIGlmIHNwYWNlIGJlbG93IDwgc3BhY2UgYWJvdmUgbG9nbyB0aGVuIG5vIG5lZWQgZm9yIG1hcmdpbiBjZW50ZXJpbmdcblx0XHRpZihiZWxvd0NvbnRhaW5lckhlaWdodCA8IHN2Z1BhZGRpbmcpIHJldHVybiAwO1xuXG5cdFx0Ly8gS25vdyB0aGF0IGxlZnRvdmVyID49IDBcblx0XHRjb25zdCBsZWZ0b3ZlciA9IGJlbG93Q29udGFpbmVySGVpZ2h0IC0gc3ZnUGFkZGluZztcblxuXHRcdC8vIGN1dCBsZWZ0b3ZlciBpbiBoYWxmID0gYW1vdW50IHRvIGFkZCB0byBtYXJnaW5cblx0XHRjb25zdCBhbW91bnRUb01hcmdpblRvcCA9IGxlZnRvdmVyIC8gMjtcblxuXHRcdHJldHVybiBhbW91bnRUb01hcmdpblRvcDtcblx0fSBcblx0Ly8gaWYgdGhlIGhvbWVDb250YWluZXIgPj0gd2luZG93IG5vIG5lZWQgZm9yIG1hcmdpbi10b3AgXG5cdGVsc2Uge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cdFxufSIsIlxuLy8gTm9kZSBNb2R1bGVzXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBJbmRpdmlkdWFsIGxvZGFzaCBmdW5jdGlvbnNcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG4vLyBBbmltYXRpb24gZnVuY3Rpb25zIGZvciBob21lcGFnZVxuaW1wb3J0IGNhbGxMb2dvVGltZWxpbmUgZnJvbSAnLi4vbW9kdWxlcy9hbmltZVRpbWVsaW5lcy5qcyc7XG5pbXBvcnQgaW5pdGlhbEhvbWVSZXNpemUgZnJvbSAnLi4vbW9kdWxlcy9pbml0aWFsSG9tZVJlc2l6ZS5qcyc7XG5pbXBvcnQgcmVzaXplTWFyZ2luVG9wTG9nbyBmcm9tICcuLi9tb2R1bGVzL29uUmVzaXplSG9tZS5qcyc7XG5cbi8vIEluZGV4IHBhZ2UgY3NzXG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9yZXNldC5zY3NzJztcbmltcG9ydCAnLi4vLi4vc2Nzcy9tb2R1bGVzL2dlbmVyYWwuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9idXR0b25zLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvZ3JhZGllbnQtYmcuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9zb2NpYWwtaWNvbnMuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9zcGlubmVyLW92ZXJsYXkuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvcGFnZXMvaW5kZXgvaW5kZXguc2Nzcyc7XG5cbi8vIFJ1biBvbiBqcyBsb2FkXG4kKGZ1bmN0aW9uKCl7XG5cblx0Ly8gSW5pdGlhbCBjZW50ZXIgb2YgbG9nbyBzdmdcblx0aW5pdGlhbEhvbWVSZXNpemUoKTtcblxuXHQvLyBTdGFydCBhbmltYXRpb24gb2YgbG9nby90aXRsZS9kZXNjcmlwdGlvbi9idXR0b25cblx0Y2FsbExvZ29UaW1lbGluZSgpO1xufSk7XG5cbi8vIE9uIHBhZ2UgcmVzaXplIGFkZCBwcm9wZXIgbWFyZ2luLXRvcCB0byBjZW50ZXIgY29udGVudFxuLy8gbG9kYXNoIGRlYm91bmNlIGlzIHVzZWQgdG8gcHJldmVudCByZXNpemUgZnVuY3Rpb24gZnJvbSBmaXJpbmcgdG9vIG9mdGVuXG4vLyBzZXQgdG8gb25seSBmaXJlIDUwMG1zIGFmdGVyIGxhc3QgY2FsbCB0byByZXNpemUgZmluaXNoZWRcbiQod2luZG93KS5vbigncmVzaXplJywgZGVib3VuY2UoZnVuY3Rpb24oKXtcblxuXHQvLyBnZXQgdGhlIG5ldyBtYXJnaW4tdG9wIG5lZWRlZCB0byBjZW50ZXIgY29udGVudCwgMCBpZiBzY3JlZW4gdG9vIHNtYWxsIHRvIGNlbnRlclxuXHRjb25zdCBuZXdNYXJnaW5Ub3AgPSByZXNpemVNYXJnaW5Ub3BMb2dvKCk7XG5cdFxuXHQvLyBhZGQgbmV3IG1hcmdpbi10b3AgdG8gc3ZnXG5cdCQoJyNzdmdBdHRyaWJ1dGVzIHN2ZycpLmNzcygnbWFyZ2luLXRvcCcsIG5ld01hcmdpblRvcCk7XG5cdFx0XG5cdC8vIENhbGN1bGF0ZSB0aGUgYWN0dWFsIGhlaWdodCBvZiB0aGUgaG9tZWNvbnRhaW5lciB3aXRob3V0IG1hcmdpbi10b3Bcblx0Y29uc3QgaG9tZUNvbnRhaW5lckhlaWdodCA9ICQoJyNob21lLWNvbnRhaW5lcicpLmhlaWdodCgpIC0gbmV3TWFyZ2luVG9wO1xuXG5cdC8vIGVuc3VyZSB0aGF0IHRoZSBmdWxsLWhlaWdodC13aWR0aCBiYWNrZ3JvdW5kIGNvdmVycyB0aGUgZW50aXJlIGhvbWVDb250YWluZXJcblx0JCgnLmZ1bGwtaGVpZ2h0LXdpZHRoJykuY3NzKCdtaW4taGVpZ2h0JywgaG9tZUNvbnRhaW5lckhlaWdodCk7XG5cbn0sIDUwMCkpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYnV0dG9ucy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbnMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYnV0dG9ucy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2VuZXJhbC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dlbmVyYWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2VuZXJhbC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3JhZGllbnQtYmcuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ncmFkaWVudC1iZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ncmFkaWVudC1iZy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNldC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNldC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc29jaWFsLWljb25zLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc29jaWFsLWljb25zLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbC1pY29ucy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3Bpbm5lci1vdmVybGF5LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3Bpbm5lci1vdmVybGF5LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NwaW5uZXItb3ZlcmxheS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==