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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/overlay-menu.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/overlay-menu.scss ***!
  \*******************************************************************************************************************************************************************************************************/
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

var _animejs = __webpack_require__(/*! animejs */ "animejs");

var _animejs2 = _interopRequireDefault(_animejs);

var _onResizeHome = __webpack_require__(/*! ./onResizeHome.js */ "./src/js/modules/onResizeHome.js");

var _onResizeHome2 = _interopRequireDefault(_onResizeHome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default function called to start the animation chain
function callLogoTimeline() {

	// Ensure that name, description, and button are not visible
	(0, _jquery2.default)('#name-animate').css('opacity', '0');
	(0, _jquery2.default)('#desc-animate').css('opacity', '0');
	(0, _jquery2.default)('.button-pulse').css('opacity', '0');

	// credit to Tobias Ahlin (http://tobiasahlin.com/moving-letters/) effect 11
	// Used to wrap each letter in description in span for typing effect
	(0, _jquery2.default)('#desc-animate .letters').each(function () {
		(0, _jquery2.default)(this).html((0, _jquery2.default)(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>'));
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
		duration: 400,
		delay: 1200
	})
	// Draw rectangle 2
	.add({
		targets: '#svgAttributes #colored-rect-2',
		width: 100,
		height: 500,
		easing: 'easeInOutSine',
		duration: 400
	})
	// Draw rectangle 3
	.add({
		targets: '#svgAttributes #colored-rect-3',
		width: 500,
		height: 100,
		easing: 'easeInOutSine',
		duration: 400
	})
	// Draw rectangle 4
	.add({
		targets: '#svgAttributes #colored-rect-4',
		width: 100,
		height: 300,
		easing: 'easeInOutSine',
		duration: 400
	})
	// Draw rectangle 5
	.add({
		targets: '#svgAttributes #colored-rect-5',
		width: 300,
		height: 100,
		easing: 'easeInOutSine',
		duration: 400
	})
	// fadein rectangle gradients
	.add({
		targets: '#svgAttributes .grad-svg-rect',
		opacity: 0.1,
		easing: 'easeInOutSine',
		duration: 200
	})
	// fadein the shadow polygons
	.add({
		targets: '#svgAttributes .shadow-poly',
		opacity: 0.2,
		easing: 'easeInOutSine',
		duration: 500
	})
	// scale and rotate svg
	.add({
		targets: '#svgAttributes svg',
		delay: 300,
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
		easing: 'easeInOutSine',
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
		scale: [0, 1],
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

	descriptionTimeline
	// start line for typing effect
	.add({
		targets: '#desc-animate .line',
		scaleY: [0, 1],
		opacity: [0.5, 1],
		easing: 'easeOutExpo',
		duration: 700
	})
	// move line to right for effect
	.add({
		targets: '#desc-animate .line',
		translateX: [0, (0, _jquery2.default)('#desc-animate .letters').width()],
		easing: 'easeOutExpo',
		duration: 700,
		delay: 100
	})
	// type in letters effect
	.add({
		targets: '#desc-animate .letter',
		opacity: [0, 1],
		easing: 'easeOutExpo',
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
	(0, _jquery2.default)('.button-pulse').css('opacity', '1');

	// timeline to animate button
	var buttonTimeline = _animejs2.default.timeline();

	buttonTimeline
	// fade button in
	.add({
		targets: '.button-pulse',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 1000,
		complete: revertDescription
	});
}

// Function to remove spans from description (for seo/responsive display)
function revertDescription() {
	(0, _jquery2.default)('#desc-animate .letters').replaceWith('<span class="letters">Web Developer</span>');
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
		(0, _jquery2.default)('#svgAttributes svg').css('margin-top', '50px');

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
			return 30;
		}
}

/***/ }),

/***/ "./src/js/modules/overlayMenu.js":
/*!***************************************!*\
  !*** ./src/js/modules/overlayMenu.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = addOverlayMenuClick;
function addOverlayMenuClick() {
	document.querySelector('.menu-icon-item i').addEventListener('click', function () {
		var overlay = document.querySelector('#menu-overlay-container');
		overlay.classList.add('visible');
	});

	document.querySelector('.close-menu-item i').addEventListener('click', function () {
		var overlay = document.querySelector('#menu-overlay-container');
		overlay.classList.remove('visible');
	});
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

var _overlayMenu = __webpack_require__(/*! ../modules/overlayMenu */ "./src/js/modules/overlayMenu.js");

var _overlayMenu2 = _interopRequireDefault(_overlayMenu);

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

__webpack_require__(/*! ../../scss/modules/overlay-menu.scss */ "./src/scss/modules/overlay-menu.scss");

__webpack_require__(/*! ../../scss/pages/index/index.scss */ "./src/scss/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Run on js load


// Index page css


// Animation functions for homepage

// Node Modules
(0, _jquery2.default)(function () {

	(0, _overlayMenu2.default)();

	// Initial center of logo svg
	(0, _initialHomeResize2.default)();

	var homeContainerHeight = (0, _jquery2.default)('#home-container').height();

	if (homeContainerHeight > (0, _jquery2.default)('.full-height-width').height()) {
		(0, _jquery2.default)('.full-height-width').css('min-height', homeContainerHeight);
	}

	// Start animation of logo/title/description/button
	(0, _animeTimelines2.default)();
});

// On page resize add proper margin-top to center content
// lodash debounce is used to prevent resize function from firing too often
// set to only fire 500ms after last call to resize finished


// Individual lodash functions
(0, _jquery2.default)(window).on('resize', (0, _lodash2.default)(function () {

	var test = (0, _jquery2.default)('#desc-animate .letters').width();

	(0, _jquery2.default)('#desc-animate .line').css({ 'transform': 'translateX(' + test + 'px)' });

	var homeContainerEl = (0, _jquery2.default)('#home-container');

	// get the new margin-top needed to center content, 0 if screen too small to center
	var newMarginTop = (0, _onResizeHome2.default)();

	// add new margin-top to svg
	(0, _jquery2.default)('#svgAttributes svg').css('margin-top', newMarginTop);

	// Calculate the actual height of the homecontainer without margin-top

	(0, _jquery2.default)('.full-height-width').css('min-height', homeContainerEl.height());
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

/***/ "./src/scss/modules/overlay-menu.scss":
/*!********************************************!*\
  !*** ./src/scss/modules/overlay-menu.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./overlay-menu.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/modules/overlay-menu.scss");

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

/***/ "animejs":
/*!************************!*\
  !*** external "anime" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = anime;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2J1dHRvbnMuc2Nzcz9iZDk3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvZ2VuZXJhbC5zY3NzPzc5ZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9ncmFkaWVudC1iZy5zY3NzP2I4MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9vdmVybGF5LW1lbnUuc2Nzcz84YzVmIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvcmVzZXQuc2Nzcz9hZDRlIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvc29jaWFsLWljb25zLnNjc3M/ZTk1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL3NwaW5uZXItb3ZlcmxheS5zY3NzPzEzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvcGFnZXMvaW5kZXgvaW5kZXguc2Nzcz9iZWJjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvYW5pbWVUaW1lbGluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvaW5pdGlhbEhvbWVSZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvb25SZXNpemVIb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL292ZXJsYXlNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvYnV0dG9ucy5zY3NzPzcwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9nZW5lcmFsLnNjc3M/MWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL2dyYWRpZW50LWJnLnNjc3M/ZTY3NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tb2R1bGVzL292ZXJsYXktbWVudS5zY3NzP2RiODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9yZXNldC5zY3NzP2U1MGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbW9kdWxlcy9zb2NpYWwtaWNvbnMuc2Nzcz8yYTFhIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21vZHVsZXMvc3Bpbm5lci1vdmVybGF5LnNjc3M/MDgxOCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9wYWdlcy9pbmRleC9pbmRleC5zY3NzPzQyMjYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5pbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjYWxsTG9nb1RpbWVsaW5lIiwiY3NzIiwiZWFjaCIsImh0bWwiLCJ0ZXh0IiwicmVwbGFjZSIsInJlbW92ZU92ZXJsYXkiLCJsb2dvVGltZWxpbmUiLCJhbmltZSIsInRpbWVsaW5lIiwiYWRkIiwidGFyZ2V0cyIsIndpZHRoIiwiaGVpZ2h0IiwiZWFzaW5nIiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIm9wYWNpdHkiLCJzY2FsZSIsInZhbHVlIiwicm90YXRlIiwiY29tcGxldGUiLCJtb3ZlTG9nbyIsIm92ZXJsYXlUaW1lbGluZSIsInRyYW5zbGF0ZVkiLCJuZXdNYXJnaW5Ub3AiLCJtb3ZlTG9nb1RpbWVsaW5lIiwibWFyZ2luVG9wIiwiYW5pbWF0ZU5hbWUiLCJuYW1lVGltZWxpbmUiLCJlIiwiaSIsImFuaW1hdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGltZWxpbmUiLCJzY2FsZVkiLCJ0cmFuc2xhdGVYIiwib2Zmc2V0IiwiZWwiLCJsb29wTGluZUFuaW1hdGVCdXR0b24iLCJsb29wTGluZSIsImFuaW1hdGVCdXR0b24iLCJsb29wVGltZWxpbmUiLCJsb29wIiwiYnV0dG9uVGltZWxpbmUiLCJyZXZlcnREZXNjcmlwdGlvbiIsInJlcGxhY2VXaXRoIiwiaW5maW5pdGVSb3RhdGUiLCJyb3RhdGVUaW1lbGluZSIsImluaXRpYWxIb21lUmVzaXplIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaG9tZUNvbnRhaW5lckVsIiwic3ZnRWwiLCJzdGFydE1hcmdpbiIsIm1pbkhlaWdodEhvbWVDb250YWluZXIiLCJyZXNpemVNYXJnaW5Ub3BMb2dvIiwic3ZnQXR0ck1hcmdpblRvcCIsInBhcnNlSW50IiwiaG9tZUNvbnRhaW5lckhlaWdodCIsInN2Z0F0dHJIZWlnaHQiLCJzdmdIZWlnaHQiLCJNYXRoIiwic3FydCIsInBvdyIsInN2Z1BhZGRpbmciLCJiZWxvd0NvbnRhaW5lckhlaWdodCIsImxlZnRvdmVyIiwiYW1vdW50VG9NYXJnaW5Ub3AiLCJhZGRPdmVybGF5TWVudUNsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm92ZXJsYXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvbiIsInRlc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sWUFBWTtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hYQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLGNBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJqcy9pbmRleC5mMDBiYjBhMjRmZWExMDJkMmY0Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBDcmVkaXQgdG8gaHR0cDovL3RvYmlhc2FobGluLmNvbS9tb3ZpbmctbGV0dGVycy8gZm9yIHRoZSBhbmltYXRpb25zXG4vLyBVc2VkIGVmZmVjdCAxNSBmb3IgdGl0bGUgYW5pbWF0aW9uIGFuZCBlZmZlY3QgMTEgZm9yIGRlc2NyaXB0aW9uIGFuaW1hdGlvblxuXG4vLyBOb2RlIE1vZHVsZXNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5cbi8vIFJlc2l6ZSBtYXJnaW4gdG9wIGZ1bmN0aW9uXG5pbXBvcnQgcmVzaXplTWFyZ2luVG9wTG9nbyBmcm9tICcuL29uUmVzaXplSG9tZS5qcyc7XG5cblxuLy8gRGVmYXVsdCBmdW5jdGlvbiBjYWxsZWQgdG8gc3RhcnQgdGhlIGFuaW1hdGlvbiBjaGFpblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbExvZ29UaW1lbGluZSgpe1xuXG5cdC8vIEVuc3VyZSB0aGF0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgYnV0dG9uIGFyZSBub3QgdmlzaWJsZVxuXHQkKCcjbmFtZS1hbmltYXRlJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcblx0JCgnI2Rlc2MtYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cdCQoJy5idXR0b24tcHVsc2UnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xuXG5cdC8vIGNyZWRpdCB0byBUb2JpYXMgQWhsaW4gKGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vbW92aW5nLWxldHRlcnMvKSBlZmZlY3QgMTFcblx0Ly8gVXNlZCB0byB3cmFwIGVhY2ggbGV0dGVyIGluIGRlc2NyaXB0aW9uIGluIHNwYW4gZm9yIHR5cGluZyBlZmZlY3Rcblx0JCgnI2Rlc2MtYW5pbWF0ZSAubGV0dGVycycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmh0bWwoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgvKFteXFx4MDAtXFx4ODBdfFxcdykvZywgJzxzcGFuIGNsYXNzPVwibGV0dGVyXCI+JCY8L3NwYW4+JykpO1xuXHR9KTtcblxuXHQvLyBSZW1vdmUgdGhlIG92ZXJsYXkgZnJvbSB0aGUgcGFnZVxuXHRyZW1vdmVPdmVybGF5KCk7XG5cblx0Ly8gYW5pbWVqcyB0aW1lbGluZSBmb3IgbG9nbyBzdmcgZHJhd2luZywgc2NhbGluZywgJiByb3RhdGluZ1xuXHRjb25zdCBsb2dvVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdGxvZ29UaW1lbGluZVxuXHRcdC8vIERyYXcgcmVjdGFuZ2xlIDFcblx0XHQuYWRkKHtcblx0XHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAjY29sb3JlZC1yZWN0LTEnLFxuXHRcdFx0d2lkdGg6IDUwMCxcblx0XHRcdGhlaWdodDogMTAwLFxuXHRcdFx0ZWFzaW5nOiAnZWFzZUluT3V0U2luZScsXG5cdFx0XHRkaXJlY3Rpb246ICdhbHRlcm5hdGUnLFxuXHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdGRlbGF5OiAxMjAwXG5cdFx0fSlcblx0XHQvLyBEcmF3IHJlY3RhbmdsZSAyXG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC0yJyxcblx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRoZWlnaHQ6IDUwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdFx0ZHVyYXRpb246IDQwMFxuXHRcdH0pXG5cdFx0Ly8gRHJhdyByZWN0YW5nbGUgM1xuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzICNjb2xvcmVkLXJlY3QtMycsXG5cdFx0XHR3aWR0aDogNTAwLFxuXHRcdFx0aGVpZ2h0OiAxMDAsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRcdGR1cmF0aW9uOiA0MDBcblx0XHR9KVxuXHRcdC8vIERyYXcgcmVjdGFuZ2xlIDRcblx0XHQuYWRkKHtcblx0XHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAjY29sb3JlZC1yZWN0LTQnLFxuXHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdGhlaWdodDogMzAwLFxuXHRcdFx0ZWFzaW5nOiAnZWFzZUluT3V0U2luZScsXG5cdFx0XHRkdXJhdGlvbjogNDAwXG5cdFx0fSlcblx0XHQvLyBEcmF3IHJlY3RhbmdsZSA1XG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI3N2Z0F0dHJpYnV0ZXMgI2NvbG9yZWQtcmVjdC01Jyxcblx0XHRcdHdpZHRoOiAzMDAsXG5cdFx0XHRoZWlnaHQ6IDEwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdFx0ZHVyYXRpb246IDQwMFxuXHRcdH0pXG5cdFx0Ly8gZmFkZWluIHJlY3RhbmdsZSBncmFkaWVudHNcblx0XHQuYWRkKHtcblx0XHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyAuZ3JhZC1zdmctcmVjdCcsXG5cdFx0XHRvcGFjaXR5OiAwLjEsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRcdGR1cmF0aW9uOiAyMDAsXG5cdFx0fSlcblx0XHQvLyBmYWRlaW4gdGhlIHNoYWRvdyBwb2x5Z29uc1xuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIC5zaGFkb3ctcG9seScsXG5cdFx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJyxcblx0XHRcdGR1cmF0aW9uOiA1MDBcdFx0XG5cdFx0fSlcblx0XHQvLyBzY2FsZSBhbmQgcm90YXRlIHN2Z1xuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIHN2ZycsXG5cdFx0XHRkZWxheTogMzAwLFxuXHRcdFx0c2NhbGU6IHtcblx0XHRcdFx0dmFsdWU6IDAuNSxcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFF1YXJ0Jyxcblx0XHRcdH0sXG5cdFx0XHRyb3RhdGU6IHtcblx0XHRcdFx0dmFsdWU6IDMxNSxcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRTaW5lJ1xuXHRcdFx0fSxcblx0XHRcdC8vb25jZSBmaW5pc2hlZCBjYWxsIG1vdm9Mb2dvIHRvIGNlbnRlciBzY2FsZWQgbG9nb1xuXHRcdFx0Y29tcGxldGU6IG1vdmVMb2dvXG5cdFx0fSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgb3ZlcmxheSBvbmNlIGNzcyAmIGpzIGFzc2V0cyBsb2FkZWRcbmZ1bmN0aW9uIHJlbW92ZU92ZXJsYXkoKXtcblxuXHQvLyBhbmltZWpzIHRpbWVsaW5lIGZvciBzbGlkZSB1cCBhbmltYXRpb25cblx0Y29uc3Qgb3ZlcmxheVRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoKTtcblxuXHRvdmVybGF5VGltZWxpbmVcblx0XHQvLyBzbGlkZSB1cFxuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNzcGlubmVyLW92ZXJsYXknLFxuXHRcdFx0dHJhbnNsYXRlWTogWzAsICctMTAwJSddLFxuXHRcdFx0ZWFzaW5nOiAnZWFzZUluT3V0U2luZScsXG5cdFx0XHRkdXJhdGlvbjogMTAwMFxuXHRcdH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjZW50ZXIgdGhlIGNvbnRlbnQgcHJvcGVybHlcbmZ1bmN0aW9uIG1vdmVMb2dvKCl7XG5cblx0Ly8gZ2V0IHRoZSBtYXJnaW4tdG9wIHRvIGJlIGFkZGVkIHRvIHN2Z1xuXHRjb25zdCBuZXdNYXJnaW5Ub3AgPSByZXNpemVNYXJnaW5Ub3BMb2dvKCk7XG5cblx0Ly8gYW5pbWVqcyB0aW1lbGluZSBmb3IgY2VudGVyaW5nIG9mIGNvbnRlbnRcblx0Y29uc3QgbW92ZUxvZ29UaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cblx0bW92ZUxvZ29UaW1lbGluZVxuXHRcdC8vIGNlbnRlciBsb2dvIHN2ZyB3aXRoIGNvbnRlbnRcblx0XHQuYWRkKHtcblx0XHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyBzdmcnLFxuXHRcdFx0bWFyZ2luVG9wOiBuZXdNYXJnaW5Ub3AsXG5cdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuXHRcdFx0Ly8gb25jZSBmaW5pc2hlZCBzdGFydCBuYW1lIGFuaW1hdGlvblxuXHRcdFx0Y29tcGxldGU6IGFuaW1hdGVOYW1lXG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVOYW1lKCl7XG5cblx0Ly8gcmV2ZXJ0IG9wYWNpdHkgYmFjayB0byBkZWZhdWx0XG5cdCQoJyNuYW1lLWFuaW1hdGUnKS5jc3MoJ29wYWNpdHknLCAnJyk7XG5cblx0Ly8gdGltZWxpbmUgdG8gYW5pbWF0ZSBuYW1lXG5cdGNvbnN0IG5hbWVUaW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKCk7XG5cdFxuXHRuYW1lVGltZWxpbmVcblx0XHQuYWRkKHtcblx0XHRcdC8vIHNjYWxlIG91dCB0aGVuIGluXG5cdFx0XHR0YXJnZXRzOiAnI25hbWUtYW5pbWF0ZSAud29yZCcsXG5cdFx0XHRzY2FsZTogWzAsIDFdLFxuXHRcdFx0b3BhY2l0eTogWzAsIDFdLFxuXHRcdFx0ZWFzaW5nOiAnZWFzZU91dENpcmMnLFxuXHRcdFx0ZHVyYXRpb246IDgwMCxcblx0XHRcdGRlbGF5OiBmdW5jdGlvbihlLCBpKXtcblx0XHRcdFx0cmV0dXJuIDgwMCAqIGk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gb25jZSBmaW5pc2hlZCBzdGFydCB0aGUgZGVzY3JpcHRpb24gYW5pbWF0aW9uXG5cdFx0XHRjb21wbGV0ZTogYW5pbWF0ZURlc2NyaXB0aW9uXG5cdFx0fSk7XG59XG5cbi8vXG5mdW5jdGlvbiBhbmltYXRlRGVzY3JpcHRpb24oKXtcblxuXHQvLyByZXZlcnQgb3BhY2l0eSBiYWNrIHRvIGRlZmF1bHRcblx0JCgnI2Rlc2MtYW5pbWF0ZScpLmNzcygnb3BhY2l0eScsICcnKTtcblxuXHQvLyB0aW1lbGluZSB0byBhbmltYXRlIGRlc2NyaXB0aW9uXG5cdGNvbnN0IGRlc2NyaXB0aW9uVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSgpO1xuXG5cdGRlc2NyaXB0aW9uVGltZWxpbmVcblx0XHQvLyBzdGFydCBsaW5lIGZvciB0eXBpbmcgZWZmZWN0XG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG5cdFx0XHRzY2FsZVk6IFswLDFdLFxuXHRcdFx0b3BhY2l0eTogWzAuNSwxXSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGR1cmF0aW9uOiA3MDBcblx0XHR9KVxuXHRcdC8vIG1vdmUgbGluZSB0byByaWdodCBmb3IgZWZmZWN0XG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG5cdFx0XHR0cmFuc2xhdGVYOiBbMCwkKCcjZGVzYy1hbmltYXRlIC5sZXR0ZXJzJykud2lkdGgoKV0sXG5cdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRkdXJhdGlvbjogNzAwLFxuXHRcdFx0ZGVsYXk6IDEwMFxuXHRcdH0pXG5cdFx0Ly8gdHlwZSBpbiBsZXR0ZXJzIGVmZmVjdFxuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNkZXNjLWFuaW1hdGUgLmxldHRlcicsXG5cdFx0XHRvcGFjaXR5OiBbMCwxXSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGR1cmF0aW9uOiA2MDAsXG5cdFx0XHRvZmZzZXQ6ICctPTc3NScsXG5cdFx0XHRkZWxheTogZnVuY3Rpb24oZWwsIGkpIHtcblx0XHRcdFx0cmV0dXJuIDM0ICogKGkrMSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gb25jZSBmaW5pc2hlZCBjb250aW51ZSB0byBsb29wIGxpbmUgYW5kIGFuaW1hdGUgYnV0dG9uXG5cdFx0XHRjb21wbGV0ZTogbG9vcExpbmVBbmltYXRlQnV0dG9uXG5cdFx0fSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHN0YXJ0IGxvb3AgdHlwaW5nIGxpbmUgYW5kIHN0YXJ0IGJ1dHRvbiBhbmltYXRpb25cbmZ1bmN0aW9uIGxvb3BMaW5lQW5pbWF0ZUJ1dHRvbigpe1xuXHRsb29wTGluZSgpO1xuXHRhbmltYXRlQnV0dG9uKCk7XG59XG5cblxuLy8gRnVuY3Rpb24gdG8gbG9vcCB0eXBpbmcgbGluZVxuZnVuY3Rpb24gbG9vcExpbmUoKXtcblxuXHQvLyB0aW1lbGluZSB0byBhbmltYXRlIHR5cGluZyBsaW5lIChpbmZpbml0ZSlcblx0Y29uc3QgbG9vcFRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoeyBsb29wOiB0cnVlfSk7XG5cblx0bG9vcFRpbWVsaW5lXG5cdFx0Ly8gYmxpbmsgb3V0XG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG5cdFx0XHRvcGFjaXR5OiBbMSwwXSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGR1cmF0aW9uOiA4MDBcblx0XHR9KVxuXHRcdC8vIGJsaW5rIGluXG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnI2Rlc2MtYW5pbWF0ZSAubGluZScsXG5cdFx0XHRvcGFjaXR5OiBbMCwxXSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGR1cmF0aW9uOiA4MDBcblx0XHR9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc3RhcnQgYnV0dG9uIGFuaW1hdGlvblxuZnVuY3Rpb24gYW5pbWF0ZUJ1dHRvbigpe1xuXG5cdC8vIHJldmVydCBidXR0b24gdG8gZGVmYXVsdCBvcGFjaXR5XG5cdCQoJy5idXR0b24tcHVsc2UnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuXG5cdC8vIHRpbWVsaW5lIHRvIGFuaW1hdGUgYnV0dG9uXG5cdGNvbnN0IGJ1dHRvblRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoKTtcblxuXHRidXR0b25UaW1lbGluZVxuXHRcdC8vIGZhZGUgYnV0dG9uIGluXG5cdFx0LmFkZCh7XG5cdFx0XHR0YXJnZXRzOiAnLmJ1dHRvbi1wdWxzZScsXG5cdFx0XHRvcGFjaXR5OiBbMCwxXSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdFx0Y29tcGxldGU6IHJldmVydERlc2NyaXB0aW9uXG5cdFx0fSk7XG59IFxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgc3BhbnMgZnJvbSBkZXNjcmlwdGlvbiAoZm9yIHNlby9yZXNwb25zaXZlIGRpc3BsYXkpXG5mdW5jdGlvbiByZXZlcnREZXNjcmlwdGlvbigpIHtcblx0JCgnI2Rlc2MtYW5pbWF0ZSAubGV0dGVycycpLnJlcGxhY2VXaXRoKCc8c3BhbiBjbGFzcz1cImxldHRlcnNcIj5XZWIgRGV2ZWxvcGVyPC9zcGFuPicpO1xuXHRpbmZpbml0ZVJvdGF0ZSgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byByb3RhdGUgc3ZnIGxvZ28gKGluZmluaXRlKVxuZnVuY3Rpb24gaW5maW5pdGVSb3RhdGUoKSB7XG5cblx0Ly8gdGltZWxpbmUgdG8gcm90YXRlIGxvZ29cblx0Y29uc3Qgcm90YXRlVGltZWxpbmUgPSBhbmltZS50aW1lbGluZSh7IGxvb3A6IHRydWV9KTtcblx0XG5cdHJvdGF0ZVRpbWVsaW5lXG5cdFx0Ly8gcm90YXRlIHRvIHRvIEdcblx0XHQuYWRkKHtcblx0XHRcdHRhcmdldHM6ICcjc3ZnQXR0cmlidXRlcyBzdmcnLFxuXHRcdFx0c2NhbGU6IFswLjUsIDAuNV0sXG5cdFx0XHRyb3RhdGU6IHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdGR1cmF0aW9uOiAxNTAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlSW5PdXRRdWludCcsXG5cdFx0XHRcdGRlbGF5OiA4MDAwXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQvLyByb3RhdGUgdG8gZGlhZ29uYWwgR1xuXHRcdC5hZGQoe1xuXHRcdFx0dGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIHN2ZycsXG5cdFx0XHRzY2FsZTogWzAuNSwgMC41XSxcblx0XHRcdHJvdGF0ZToge1xuXHRcdFx0XHR2YWx1ZTogMzE1LFxuXHRcdFx0XHRkdXJhdGlvbjogMTUwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZUluT3V0UXVhcnQnLFxuXHRcdFx0XHRkZWxheTogMTAwMFxuXHRcdFx0fVxuXHRcdH0pO1xufSBcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuLy8gQWRkIG1hcmdpbiB0b3AgdG8gd2hlbiBvbmx5IExvZ28gZHJhd2luZyAobmFtZS9kZXNjL2J1dHRvbiBubyBzaG93aW5nKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbEhvbWVSZXNpemUoKXtcblxuXHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cdGNvbnN0IGhvbWVDb250YWluZXJFbCA9ICQoJyNob21lLWNvbnRhaW5lcicpO1xuXHRjb25zdCBzdmdFbCA9ICQoJyNzdmdBdHRyaWJ1dGVzJyk7XG5cblx0Ly8gbWFyZ2luIHRvIGFkZCBcblx0Y29uc3Qgc3RhcnRNYXJnaW4gPSAod2luZG93SGVpZ2h0IC0gc3ZnRWwuaGVpZ2h0KCkpIC8gMjtcblxuXHQvLyBpZiBob21lQ29udGFpbmVyID4gd2luZG93IHRoZW4gbm8gbmVlZCB0byBhZGQgcGFkZGluZyB0byBjZW50ZXJcblx0Ly8gZGVmYXVsdCB0byAzMHB4XG5cdGlmKGhvbWVDb250YWluZXJFbC5oZWlnaHQoKSA+IHdpbmRvd0hlaWdodCl7XG5cdFx0JCgnI3N2Z0F0dHJpYnV0ZXMgc3ZnJykuY3NzKCdtYXJnaW4tdG9wJywgJzUwcHgnKTtcblx0XHRcblx0XHQvLyBtYWtlIHN1cmUgdGhlIGJhY2tncm91bmQgZ3JhZGllbnQgY292ZXJzIGVudGlyZSBob21lQ29udGFpbmVyXG5cdFx0bWluSGVpZ2h0SG9tZUNvbnRhaW5lcigpO1xuXHR9IFxuXHQvLyBpZiBob21lQ29udGFpbmVyIDw9IHdpbmRvdyB0aGVuIGFkZCB0aGUgbWFyZ2luIHRvIHRvcFxuXHRlbHNlIHtcblx0XHQkKCcjc3ZnQXR0cmlidXRlcyBzdmcnKS5jc3MoJ21hcmdpbi10b3AnLCBzdGFydE1hcmdpbik7XG5cdH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gbWFrZSBzdXJlIGdyYWRpZW50IGJhY2tncm91bmQgY292ZXJzIGFsbCBjb250ZW50XG5mdW5jdGlvbiBtaW5IZWlnaHRIb21lQ29udGFpbmVyKCkge1xuXHRjb25zdCBob21lQ29udGFpbmVyRWwgPSAkKCcjaG9tZS1jb250YWluZXInKTtcblx0JCgnLmZ1bGwtaGVpZ2h0LXdpZHRoJykuY3NzKCdtaW4taGVpZ2h0JywgaG9tZUNvbnRhaW5lckVsLmhlaWdodCgpKTtcbn1cblxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG4vLyByZXNpemUgbWFyZ2ludG9wIG9uIHN2ZyB0byBjZW50ZXIgY29udGVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzaXplTWFyZ2luVG9wTG9nbygpe1xuXG5cdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuXHRjb25zdCBzdmdBdHRyTWFyZ2luVG9wID0gcGFyc2VJbnQoJCgnI3N2Z0F0dHJpYnV0ZXMgc3ZnJykuY3NzKCdtYXJnaW4tdG9wJykpO1xuXG5cdC8vIGdldCBob21lIGNvbnRhaW5lciBoZWlnaHQgd2l0aG91dCBtYXJnaW4gdG9wXG5cdGNvbnN0IGhvbWVDb250YWluZXJIZWlnaHQgPSAkKCcjaG9tZS1jb250YWluZXInKS5oZWlnaHQoKSAtIHN2Z0F0dHJNYXJnaW5Ub3A7XG5cblx0Ly8gZ2V0IHN2Z0F0dHIgaGVpZ2h0IHdpdGhvdXQgbWFyZ2luIHRvcFxuXHRjb25zdCBzdmdBdHRySGVpZ2h0ID0gJCgnI3N2Z0F0dHJpYnV0ZXMnKS5oZWlnaHQoKSAtIHN2Z0F0dHJNYXJnaW5Ub3A7XG5cblx0Ly8gY2FsY3VsYXRlIGhlaWdodCBvZiAwLjUgc2NhbGVkICYgZGlhZ29uYWwgc3ZnIFxuXHRjb25zdCBzdmdIZWlnaHQgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHN2Z0F0dHJIZWlnaHQgLyAyKSwgMikgKiAyKTtcblxuXHQvLyBHZXQgdmlzdWFsIHBhZGRpbmcgb24gdGhlIHRvcCBvZiBzdmcgbG9nb1xuXHRjb25zdCBzdmdQYWRkaW5nID0gKHN2Z0F0dHJIZWlnaHQgLSBzdmdIZWlnaHQpIC8gMjtcblxuXHQvLyBpZiB0aGUgaG9tZUNvbnRhaW5lciA8IHdpbmRvdyB0aGVuIG5lZWQgcGFkZGluZyB0byBjZW50ZXJcblx0aWYoaG9tZUNvbnRhaW5lckhlaWdodCA8IHdpbmRvd0hlaWdodCl7XG5cblx0XHQvLyBjYWxjdWxhdGUgc3BhY2UgYmVsb3cgaG9tZUNvbnRhaW5lciBjb250ZW50XG5cdFx0Y29uc3QgYmVsb3dDb250YWluZXJIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBob21lQ29udGFpbmVySGVpZ2h0O1xuXG5cdFx0Ly8gaWYgc3BhY2UgYmVsb3cgPCBzcGFjZSBhYm92ZSBsb2dvIHRoZW4gbm8gbmVlZCBmb3IgbWFyZ2luIGNlbnRlcmluZ1xuXHRcdGlmKGJlbG93Q29udGFpbmVySGVpZ2h0IDwgc3ZnUGFkZGluZykgcmV0dXJuIDA7XG5cblx0XHQvLyBLbm93IHRoYXQgbGVmdG92ZXIgPj0gMFxuXHRcdGNvbnN0IGxlZnRvdmVyID0gYmVsb3dDb250YWluZXJIZWlnaHQgLSBzdmdQYWRkaW5nO1xuXG5cdFx0Ly8gY3V0IGxlZnRvdmVyIGluIGhhbGYgPSBhbW91bnQgdG8gYWRkIHRvIG1hcmdpblxuXHRcdGNvbnN0IGFtb3VudFRvTWFyZ2luVG9wID0gbGVmdG92ZXIgLyAyO1xuXG5cdFx0cmV0dXJuIGFtb3VudFRvTWFyZ2luVG9wO1xuXHR9IFxuXHQvLyBpZiB0aGUgaG9tZUNvbnRhaW5lciA+PSB3aW5kb3cgbm8gbmVlZCBmb3IgbWFyZ2luLXRvcCBcblx0ZWxzZSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cdFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE92ZXJsYXlNZW51Q2xpY2soKXtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbi1pdGVtIGknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LW92ZXJsYXktY29udGFpbmVyJyk7XG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cdH0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tZW51LWl0ZW0gaScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtb3ZlcmxheS1jb250YWluZXInKTtcblx0XHRvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblx0fSk7XG59IiwiXG4vLyBOb2RlIE1vZHVsZXNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIEluZGl2aWR1YWwgbG9kYXNoIGZ1bmN0aW9uc1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbi8vIEFuaW1hdGlvbiBmdW5jdGlvbnMgZm9yIGhvbWVwYWdlXG5pbXBvcnQgYWRkT3ZlcmxheU1lbnVDbGljayBmcm9tICcuLi9tb2R1bGVzL292ZXJsYXlNZW51JztcbmltcG9ydCBjYWxsTG9nb1RpbWVsaW5lIGZyb20gJy4uL21vZHVsZXMvYW5pbWVUaW1lbGluZXMuanMnO1xuaW1wb3J0IGluaXRpYWxIb21lUmVzaXplIGZyb20gJy4uL21vZHVsZXMvaW5pdGlhbEhvbWVSZXNpemUuanMnO1xuaW1wb3J0IHJlc2l6ZU1hcmdpblRvcExvZ28gZnJvbSAnLi4vbW9kdWxlcy9vblJlc2l6ZUhvbWUuanMnO1xuXG4vLyBJbmRleCBwYWdlIGNzc1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvcmVzZXQuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvbW9kdWxlcy9nZW5lcmFsLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvYnV0dG9ucy5zY3NzJztcbmltcG9ydCAnLi4vLi4vc2Nzcy9tb2R1bGVzL2dyYWRpZW50LWJnLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvc29jaWFsLWljb25zLnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvc3Bpbm5lci1vdmVybGF5LnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL21vZHVsZXMvb3ZlcmxheS1tZW51LnNjc3MnO1xuaW1wb3J0ICcuLi8uLi9zY3NzL3BhZ2VzL2luZGV4L2luZGV4LnNjc3MnO1xuXG4vLyBSdW4gb24ganMgbG9hZFxuJChmdW5jdGlvbigpe1xuXG5cdGFkZE92ZXJsYXlNZW51Q2xpY2soKTtcblxuXHQvLyBJbml0aWFsIGNlbnRlciBvZiBsb2dvIHN2Z1xuXHRpbml0aWFsSG9tZVJlc2l6ZSgpO1xuXG5cdGNvbnN0IGhvbWVDb250YWluZXJIZWlnaHQgPSAkKCcjaG9tZS1jb250YWluZXInKS5oZWlnaHQoKTtcblxuXHRpZihob21lQ29udGFpbmVySGVpZ2h0ID4gJCgnLmZ1bGwtaGVpZ2h0LXdpZHRoJykuaGVpZ2h0KCkpIHtcblx0XHQkKCcuZnVsbC1oZWlnaHQtd2lkdGgnKS5jc3MoJ21pbi1oZWlnaHQnLCBob21lQ29udGFpbmVySGVpZ2h0KTtcblx0fVxuXG5cdC8vIFN0YXJ0IGFuaW1hdGlvbiBvZiBsb2dvL3RpdGxlL2Rlc2NyaXB0aW9uL2J1dHRvblxuXHRjYWxsTG9nb1RpbWVsaW5lKCk7XG59KTtcblxuLy8gT24gcGFnZSByZXNpemUgYWRkIHByb3BlciBtYXJnaW4tdG9wIHRvIGNlbnRlciBjb250ZW50XG4vLyBsb2Rhc2ggZGVib3VuY2UgaXMgdXNlZCB0byBwcmV2ZW50IHJlc2l6ZSBmdW5jdGlvbiBmcm9tIGZpcmluZyB0b28gb2Z0ZW5cbi8vIHNldCB0byBvbmx5IGZpcmUgNTAwbXMgYWZ0ZXIgbGFzdCBjYWxsIHRvIHJlc2l6ZSBmaW5pc2hlZFxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBkZWJvdW5jZShmdW5jdGlvbigpe1xuXG5cdGNvbnN0IHRlc3QgPSAkKCcjZGVzYy1hbmltYXRlIC5sZXR0ZXJzJykud2lkdGgoKTtcblxuXHQkKCcjZGVzYy1hbmltYXRlIC5saW5lJykuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJysgdGVzdCArJ3B4KSd9KTtcblxuXHRjb25zdCBob21lQ29udGFpbmVyRWwgPSAkKCcjaG9tZS1jb250YWluZXInKTtcblxuXHQvLyBnZXQgdGhlIG5ldyBtYXJnaW4tdG9wIG5lZWRlZCB0byBjZW50ZXIgY29udGVudCwgMCBpZiBzY3JlZW4gdG9vIHNtYWxsIHRvIGNlbnRlclxuXHRjb25zdCBuZXdNYXJnaW5Ub3AgPSByZXNpemVNYXJnaW5Ub3BMb2dvKCk7XG5cdFxuXHQvLyBhZGQgbmV3IG1hcmdpbi10b3AgdG8gc3ZnXG5cdCQoJyNzdmdBdHRyaWJ1dGVzIHN2ZycpLmNzcygnbWFyZ2luLXRvcCcsIG5ld01hcmdpblRvcCk7XG5cdFx0XG5cdC8vIENhbGN1bGF0ZSB0aGUgYWN0dWFsIGhlaWdodCBvZiB0aGUgaG9tZWNvbnRhaW5lciB3aXRob3V0IG1hcmdpbi10b3BcblxuXHQkKCcuZnVsbC1oZWlnaHQtd2lkdGgnKS5jc3MoJ21pbi1oZWlnaHQnLCBob21lQ29udGFpbmVyRWwuaGVpZ2h0KCkpO1xuXG59LCA1MDApKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbnMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2J1dHRvbnMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dlbmVyYWwuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nZW5lcmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dlbmVyYWwuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dyYWRpZW50LWJnLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3JhZGllbnQtYmcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3JhZGllbnQtYmcuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL292ZXJsYXktbWVudS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL292ZXJsYXktbWVudS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9vdmVybGF5LW1lbnUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jlc2V0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbC1pY29ucy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbC1pY29ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWwtaWNvbnMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NwaW5uZXItb3ZlcmxheS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NwaW5uZXItb3ZlcmxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcGlubmVyLW92ZXJsYXkuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gYW5pbWU7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==