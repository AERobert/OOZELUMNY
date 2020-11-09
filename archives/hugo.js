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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/css/hugo.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/hugo.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-bold {\n    font-weight: bold;\n}\n\n.font-italic {\n    font-style: italic;\n}\n\n.font-underline {\n    text-decoration: underline;\n}\n\n.font-proportional {\n    font-family: serif;\n    font-size: 17px;\n}\n\n.font-fixed-width {\n    font-family: monospace;\n    font-size: 15px;\n    padding: 2px 0;\n}\n\n.textcolor-0 {               /* black */\n    color: #000;\n}\n\n.textcolor-1 {               /* blue */\n    color: #00a;\n}\n\n.textcolor-2 {               /* green */\n    color: #0a0;\n}\n\n.textcolor-3 {               /* cyan */\n    color: #0aa;\n}\n\n.textcolor-4 {               /* red */\n    color: #a00;\n}\n\n.textcolor-5 {               /* magenta */\n    color: #a0a;\n}\n\n.textcolor-6 {               /* brown */\n    color: #a50;\n}\n\n.textcolor-7 {               /* white */\n    color: #aaa;\n}\n\n.textcolor-8 {               /* dark gray */\n    color: #555;\n}\n\n.textcolor-9 {               /* light blue */\n    color: #55f;\n}\n\n.textcolor-10 {              /* light green */\n    color: #5f5;\n}\n\n.textcolor-11 {              /* light cyan */\n    color: #5ff;\n}\n\n.textcolor-12 {              /* light red */\n    color: #f55;\n}\n\n.textcolor-13 {              /* light magenta */\n    color: #f5f;\n}\n\n.textcolor-14 {              /* yellow */\n    color: #ff5;\n}\n\n.textcolor-15 {              /* bright white */\n    color: #fff;\n}\n\n\n\n.bgcolor-0 {                 /* black */\n    background-color: #000;\n}\n\n.bgcolor-1 {                 /* blue */\n    background-color: #00a;\n}\n\n.bgcolor-2 {                 /* green */\n    background-color: #0a0;\n}\n\n.bgcolor-3 {                 /* cyan */\n    background-color: #0aa;\n}\n\n.bgcolor-4 {                 /* red */\n    background-color: #a00;\n}\n\n.bgcolor-5 {                 /* magenta */\n    background-color: #a0a;\n}\n\n.bgcolor-6 {                 /* brown */\n    background-color: #a50;\n}\n\n.bgcolor-7 {                 /* white */\n    background-color: #aaa;\n}\n\n.bgcolor-8 {                 /* dark gray */\n    background-color: #555;\n}\n\n.bgcolor-9 {                 /* light blue */\n    background-color: #55f;\n}\n\n.bgcolor-10 {                /* light green */\n    background-color: #5f5;\n}\n\n.bgcolor-11 {                /* light cyan */\n    background-color: #5ff;\n}\n\n.bgcolor-12 {                /* light red */\n    background-color: #f55;\n}\n\n.bgcolor-13 {                /* light magenta */\n    background-color: #f5f;\n}\n\n.bgcolor-14 {                /* yellow */\n    background-color: #ff5;\n}\n\n.bgcolor-15 {                /* bright white */\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/css/ui.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./src/css/ui.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow-y: scroll;\n}\n\nbody,\ninput,\n#loader {\n    color: #aaa;\n    background-color: #000;\n    font-family: monospace;\n}\n\nbody,\ninput {\n    font-size: 17px;\n}\n\n#lineinput {\n    display: inline-block;\n}\n\n#output {\n    max-width: 751px;\n    padding: 0 15px 10px 15px;\n    margin: 0 auto;\n}\n\n#output span {\n    white-space: pre-wrap;\n}\n\n#lineinput {\n    display: inline-block;\n    width: 500px;\n}\n\n#lineinput-field {\n    border: 0;\n    display: inline;\n    outline: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.havenwindow {\n    position: fixed;\n    overflow: hidden;\n}\n\n.safarifix .havenwindow {\n    position: absolute;\n}\n\n#loader {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n#loader-message {\n    margin-top: 100px;\n    text-align: center;\n}\n\n#loader.stopped #loader-message {\n    text-decoration: line-through;\n}\n\n#spinner {\n    position: fixed;\n    padding-top: 90px;\n    font-family: serif;\n    color: #555;\n    background-color: #000;\n    opacity: 0.7;\n    top: 0;\n    left: 5%;\n    width: 100%;\n    height: 100%;\n    line-height: 100%;\n    font-size: 50px;\n    animation: slide 5s ease-in-out forwards;\n    animation-iteration-count: infinite;\n}\n\n@keyframes slide {\n    50% { left: 90%; }\n    100% { left: 5%; }\n}\n\n#fatal-error {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 1em;\n    color: #fff;\n    background-color: #600;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/custom-event-polyfill/custom-event-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-event-polyfill/custom-event-polyfill.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/css/hugo.css":
/*!**************************!*\
  !*** ./src/css/hugo.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./hugo.css */ "./node_modules/css-loader/index.js!./src/css/hugo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/ui.css":
/*!************************!*\
  !*** ./src/css/ui.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./ui.css */ "./node_modules/css-loader/index.js!./src/css/ui.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/haven/assets.js":
/*!*****************************!*\
  !*** ./src/haven/assets.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCallback = addCallback;
exports.expect = expect;
exports.finalCallback = finalCallback;
exports.finished = finished;
// assets that need to load before we can start
var expectedAssets = ['engine', 'storyfile']; // functions that are called when all assets have loaded

var callbacks = []; // the callback that's called the very last

var lastCallback;
/**
 * When all assets are ready, run the callbacks.
 */

function done() {
  var i = 0;

  var metaCallback = function metaCallback() {
    i++;

    if (i < callbacks.length) {
      callbacks[i](metaCallback);
    } else if (lastCallback) {
      lastCallback();
    }
  };

  if (callbacks.length === 0) {
    return;
  }

  callbacks[0](metaCallback);
}
/**
 * Adds a callback that's run when all assets are ready.
 * If all assets have already loaded, call the callback immediately.
 *
 * The first parameter of the callback function must be a function that
 * itself calls as a callback when it has finished.
 *
 * @param cb
 */


function addCallback(cb) {
  if (expectedAssets.length === 0) {
    // make the function consistently asynchronous
    setTimeout(cb, 0);
  }

  callbacks.push(cb);
}

;
/**
 * Add an expected asset to the list.
 *
 * @param {function} asset
 */

function expect(asset) {
  if (expectedAssets.length === 0) {
    console.warn('An expected asset "' + asset + '" was added ' + 'but all previous assets have already finished loading');
    return;
  }

  expectedAssets.push(asset);
}

;
/**
 * As a bit of a hack this ensures the game starting callback is always
 * the last one.
 *
 * @param cb
 */

function finalCallback(cb) {
  lastCallback = cb;
}

;
/**
 * When an asset has finished loading, this method should be called.
 *
 * @param asset The name of the asset that's ready
 * @returns {boolean} true if asset was expected
 */

function finished(asset) {
  var index = expectedAssets.indexOf(asset);

  if (index === -1) {
    return false;
  } // remove from the list of expected assets


  expectedAssets.splice(index, 1); // if everything's ready, run the callbacks

  if (expectedAssets.length === 0) {
    done();
  }

  return true;
}

;

/***/ }),

/***/ "./src/haven/bootstrap.js":
/*!********************************!*\
  !*** ./src/haven/bootstrap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Module = {
  arguments: [],
  preRun: [],
  postRun: [function () {
    (0, _assets.finished)('engine');
  }],
  print: function print(text) {
    // The engine should always use the custom text printing methods.
    // Anything printed to stdout is an error.
    (0, _error.default)("Unexpected engine output to stdout: " + text);
  },
  printErr: function printErr() {
    console.log(arguments);
    (0, _error.default)(Array.prototype.slice.call(arguments).join(' '));
  },
  TOTAL_MEMORY: 33554432 // Twice the default; this is enough to run any existing Glulx game.

};

/***/ }),

/***/ "./src/haven/buffer.js":
/*!*****************************!*\
  !*** ./src/haven/buffer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.flush = flush;
exports.newline = newline;

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

// output buffers for all windows
var outputBuffer = [""];
/**
 * Make text HTML-printable
 *
 * @param text
 * @returns {string}
 */

function encodeHtml(text) {
  var encoded = "";

  for (var i = 0; i < text.length; ++i) {
    // Extended Latin-1 characters need to be added as HTML entities
    if (text.charCodeAt(i) > 127) {
      encoded += "&#" + text.charCodeAt(i) + ";";
    } else {
      switch (text[i]) {
        case '&':
          encoded += '&amp;';
          break;

        case '<':
          encoded += '&lt;';
          break;

        case '>':
          encoded += '&gt;';
          break;

        case '\r':
          encoded += '\n';
          break;

        default:
          encoded += text[i];
          break;
      }
    }
  }

  return encoded;
}
/**
 * Add text to the text buffer
 *
 * @param text
 * @param targetWindow
 */


function append(text, targetWindow) {
  if (!outputBuffer[targetWindow]) {
    outputBuffer[targetWindow] = "";
  }

  if (text.indexOf('\n') > -1 || text.indexOf('\r') > -1) {
    var nextLBR = Math.max(text.lastIndexOf('\n'), text.lastIndexOf('\r')) + 1;
    outputBuffer[targetWindow] += encodeHtml(text.substr(0, nextLBR));
    flush(targetWindow);
    outputBuffer[targetWindow] = encodeHtml(text.substr(nextLBR));
  } else {
    outputBuffer[targetWindow] += encodeHtml(text);
  }
}
/**
 * Print out the text buffer
 *
 * @param targetWindow
 */


function flush(targetWindow) {
  if (targetWindow === undefined) {
    for (var i in outputBuffer) {
      flush(+i);
    }
  }

  if (!outputBuffer[targetWindow] || !haven.window.get(targetWindow)) {
    return;
  } //        console.log('flushing', outputBuffer[ targetWindow ] );
  // if( outputBuffer[ targetWindow ] === '\n') debugger;


  haven.window.append(outputBuffer[targetWindow], targetWindow);
  outputBuffer[targetWindow] = "";

  if (targetWindow === 0) {
    (0, _input.textWasPrinted)(true);
  }
}
/**
 * Add a newline to the buffer.
 *
 * @param targetWindow
 */


function newline(targetWindow) {
  if (outputBuffer[targetWindow]) {
    outputBuffer[targetWindow] += '\n';
  } else {
    outputBuffer[targetWindow] = '\n';
  }

  flush(targetWindow);
}

/***/ }),

/***/ "./src/haven/error.js":
/*!****************************!*\
  !*** ./src/haven/error.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = error;

/**
 * Show an error message and halt.
 */
function error(message) {
  var elem = document.createElement('div');
  var spinner = document.getElementById('spinner');
  var loader = document.getElementById('loader');
  elem.id = 'fatal-error';
  elem.innerHTML = message;
  document.body.appendChild(elem); // remove spinner animation if error happened on load

  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  } // visual notification that loading has stopped


  if (loader) {
    loader.className = 'stopped';
  }

  throw new Error(message);
}

/***/ }),

/***/ "./src/haven/file.js":
/*!***************************!*\
  !*** ./src/haven/file.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.prompt = prompt;
exports.readUIState = readUIState;
exports.syncfs = syncfs;

var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _state = __webpack_require__(/*! ./state */ "./src/haven/state.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/custom-event-polyfill.js");

var interpreterLoaded = false;
var isGamefileLoaded = false;
var gamefile;
var checksum;
var datadir;
var storyFilename;
/**
 * FNV32-algorithm to calculate the story file's checksum.
 * The checksum is used to name the directories for save games.
 *
 * Taken from https://codepen.io/ImagineProgramming/post/checksum-algorithms-in-javascript-checksum-js-engine
 */

function fnv32(a) {
  var len = a.length;
  var fnv = 0;

  for (var i = 0; i < len; i++) {
    fnv = fnv + ((fnv << 1) + (fnv << 4) + (fnv << 7) + (fnv << 8) + (fnv << 24) >>> 0) ^ a[i] & 0xff;
  }

  return fnv >>> 0;
}
/**
 * Writes the loaded game file into the virtual file system, but only
 * if both the interpreter and the game file are both loaded.
 *
 * @return {boolean} true when all required assets have finished loading
 */


function writeGamefile(done) {
  if (!interpreterLoaded || !isGamefileLoaded) {
    if (!interpreterLoaded) {
      document.getElementById('loader-message').innerHTML = 'Loading interpreter';
    } else {
      document.getElementById('loader-message').innerHTML = 'Loading game file';
    }
  }

  document.getElementById('loader-message').innerHTML = 'Starting game';
  FS.writeFile(storyFilename, gamefile, {
    encoding: 'binary'
  }); // create the virtual savefile directory if it doesn't exist

  datadir = '/gamedata_' + checksum;

  if (!FS.analyzePath(datadir).exists) {
    FS.mkdir(datadir);
  }

  FS.mount(IDBFS, {
    root: '.'
  }, datadir); // create a directory for shared game data

  if (!FS.analyzePath('gamedata').exists) {
    FS.mkdir('gamedata');
  }

  FS.mount(IDBFS, {
    root: '.'
  }, 'gamedata');
  FS.chdir('gamedata'); // synchronize with local data

  FS.syncfs(true, function () {
    if ((0, _options.get)('autosave')) {
      _state.autosave.setName('/gamedata_' + checksum + '/autosave');

      _state.autosave.restore();
    } // start reacting to keypresses


    _input.keypress.init();

    done();
  });
}
/**
 * Start loading the story file.
 */


function init(virtualFilename) {
  var gameUrl = (0, _options.get)('story');
  var proxyOption = (0, _options.get)('use_proxy');
  var requestUrl;
  var useProxy;
  storyFilename = virtualFilename;

  if (!gameUrl) {
    (0, _error.default)("No story file specified");
  }

  var xmlhttp = new XMLHttpRequest();

  switch ("" + proxyOption) {
    case 'always':
    case 'true':
    case '1':
      useProxy = true;
      break;

    case 'never':
    case 'false':
    case '0':
      useProxy = false;
      break;
    //          case 'auto':

    default:
      // use proxy for CORS requests
      useProxy = /^https?:\/\//.test(gameUrl) && gameUrl.indexOf(window.location.protocol + '//' + window.location.host) !== 0; // warn about invalid option

      if (proxyOption !== 'auto') {
        console.warn('Unknown use_proxy option "' + proxyOption + '", using "auto"');
      }

      break;
  }

  if (useProxy) {
    requestUrl = (0, _options.get)('proxy_url').split('%s').join(encodeURIComponent(gameUrl));
  } else {
    requestUrl = gameUrl;
  }

  (0, _assets.addCallback)(writeGamefile);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      switch (xmlhttp.status) {
        case 200:
          isGamefileLoaded = true;
          gamefile = new Uint8Array(xmlhttp.response);
          checksum = fnv32(gamefile).toString(16); // signal that the story file is ready

          (0, _assets.finished)('storyfile');
          break;

        case 404:
          (0, _error.default)("Game file not found");
          break;

        case 415:
          if (useProxy) {
            (0, _error.default)(String.fromCharCode.apply(null, new Uint8Array(xmlhttp.response)));
          } else {
            (0, _error.default)('Unsupported Media Type error encountered when loading game file');
          }

          break;

        case 0:
          // probably cross-origin error
          (0, _error.default)("Unspecified error loading game file (possibly cross-origin restriction)");
          break;

        default:
          (0, _error.default)("Error loading game file. Server returned status code " + xmlhttp.status + " (" + xmlhttp.statusText + ")");
          break;
      }
    }
  };

  xmlhttp.open("GET", requestUrl, true);
  xmlhttp.responseType = "arraybuffer"; // this must be exactly here, otherwise IE11 breaks

  xmlhttp.send();
}

;
/**
 * Ask the user to provide a file name.
 *
 * @param why The reason why a file is being prompted.
 *            One of "for command recording", "for command playback",
 *            "to restore", "to save" or "to begin transcription (or printer name)"
 */

function prompt(why) {
  var filename = window.prompt("Enter filename " + why);
  var input = (0, _prompt.get)().getElementsByClassName("INPUT")[0];

  if (filename && /\S/.test(filename)) {
    input.value = datadir + '/' + filename.split('/').join('-');
  } else {
    input.value = "";
  } // we'll have to wait for the UI to get ready before submitting the input


  setTimeout(function () {
    _prompt.get.dispatchEvent(new Event('submit')); // ..and another timeout to sync the filesystem.
    // We should hook to the file save itself, but this should do for now,
    // especially since this exists only as a backup measure if the
    // same thing in the onbeforeunload event fails.


    setTimeout(function () {
      FS.syncfs(false, function () {});
    }, 1000);
  }, 1);
}

;
/**
 * Read the UI state from the filesystem.
 */

function readUIState() {
  try {
    var state = FS.readFile(autosaveFilename + '_haven_uidata', {
      encoding: 'utf8'
    });
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
}

;
/**
 * Synchronize virtual filesystem status with IndexedDB.
 * Called by the engine.
 */

function syncfs() {
  FS.syncfs(false, function () {});
}

; // store data saved by the game file

window.onbeforeunload = function () {
  FS.syncfs(false, function () {});
};

document.getElementById('loader-message').innerHTML = 'Loading interpreter and game file';

/***/ }),

/***/ "./src/haven/haven.js":
/*!****************************!*\
  !*** ./src/haven/haven.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var fileMethods = _interopRequireWildcard(__webpack_require__(/*! ./file */ "./src/haven/file.js"));

var inputMethods = _interopRequireWildcard(__webpack_require__(/*! ./input */ "./src/haven/input.js"));

var _loader = __webpack_require__(/*! ./loader */ "./src/haven/loader.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var promptMethods = _interopRequireWildcard(__webpack_require__(/*! ./prompt */ "./src/haven/prompt.js"));

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

var _fastclick = _interopRequireDefault(__webpack_require__(/*! ./vendor/fastclick */ "./src/haven/vendor/fastclick.js"));

var stateMethods = _interopRequireWildcard(__webpack_require__(/*! ./state */ "./src/haven/state.js"));

var windowMethods = _interopRequireWildcard(__webpack_require__(/*! ./window */ "./src/haven/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Starts the C engine. The engine should have replaced main() with an
 * otherwise empty function that only stores the command line arguments
 * for passing to the real main() later.
 *
 * startEngine() calls haven_start() in the C code, which should run
 * the real main() function that has been renamed to something else.
 *
 * Example:
 *
 * static char **my_argv;
 *
 * int main(int argc, char *argv[])
 * {
     *    my_argv = argv;
     *    return 0;
     * }
 *
 * int EMSCRIPTEN_KEEPALIVE haven_start()
 * {
     *    return real_main(2, my_argv);
     * }
 *
 * int real_main(int argc, char *argv[])  // renamed from main()
 */
function startEngine() {
  _haven_start();
}
/**
 * Start the game. If assets haven't loaded yet, the game starts
 * as soon as they're ready.
 */


function start(opt) {
  // load the Emterpreter engine
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'engine.bin', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function () {
    Module.emterpreterFile = xhr.response;
    var script = document.createElement('script');
    script.src = 'engine.js';
    document.body.appendChild(script);
  };

  xhr.send(null); // read options from URL

  (0, _options.init)(opt.options); // load the story file

  (0, fileMethods.init)(opt.virtualStoryfile); // set up input handlers

  (0, _assets.addCallback)(function (cb) {
    (0, inputMethods.init)();
    cb();
  }); // set up the prompt

  (0, promptMethods.init)({
    enginePrompt: !!opt.enginePrompt,
    unicode: !!opt.unicode
  }); // initialize style options

  (0, _style.init)({
    engineColors: !!opt.engineColors,
    engineFontFamily: !!opt.engineFontFamily
  }); // remove the loader

  (0, _assets.addCallback)(function (cb) {
    (0, _loader.remove)();
    cb();
  }); // start the engine

  (0, _assets.finalCallback)(startEngine);
  /**
   * fastclick.js initializer - fixes tapping issues in mobile browsers
   */

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      _fastclick.default.attach(document.body);
    }, false);
  }
}

// expose methods for the C engine to use
window.haven = {
  file: fileMethods,
  input: inputMethods,
  prompt: promptMethods,
  state: stateMethods,
  window: windowMethods
};

/***/ }),

/***/ "./src/haven/input.js":
/*!****************************!*\
  !*** ./src/haven/input.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMode = getMode;
exports.init = init;
exports.setMode = setMode;
exports.textWasPrinted = textWasPrinted;
exports.getTextWasPrinted = getTextWasPrinted;
exports.keypress = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// current mode of input the game expects: buffer, getkey, getline or endgame.
// null is no input accepted (during startup)
var inputMode = null; // stores keypresses pressed when the engine isn't specifically expecting them ("buffer" inputMode)

var keypressBuffer = [];
var isTextPrinted = false;
/**
 * Returns the current input mode.
 *
 * @returns {string}
 */

function getMode() {
  return inputMode;
}

function init() {
  // listen to keypresses and mouse clicks
  document.addEventListener('keydown', keypress.send, false);
  document.addEventListener('click', keypress.send, false);
}

var keypress = {
  /**
   * Called when the game starts.
   */
  init: function init() {
    // start expecting keypresses
    if (!inputMode) {
      inputMode = 'buffer';
    }
  },

  /**
   * Check if there's a keypress waiting in the buffer.
   *
   * Called by the engine.
   *
   * @returns {boolean}
   */
  isWaiting: function isWaiting() {
    (0, _buffer.flush)();

    if (isTextPrinted) {
      (0, _prompt.scrollOrFocus)();
    }

    return keypressBuffer.length > 0;
  },
  send: function send(e) {
    var keyCode = e.keyCode;
    var doc = document.documentElement;
    var scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0); // don't react to modifier keys

    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    switch (inputMode) {
      case 'buffer':
        keypressBuffer.push(keyCode);
        break;

      case 'getline':
      case null:
        // do nothing except scroll
        (0, _prompt.scrollOrFocus)(e);
        return;

      case 'getkey':
        // continue with script
        break;

      case 'endgame':
        window.location = hugojs_options.exit_url;
        return;

      default:
        (0, _error.default)('Interpreter error: unknown input mode ' + inputMode);
    }

    inputMode = 'buffer'; // let the scroll handler take this if we're not at the end of the page

    if (scrolltop + window.innerHeight < document.body.clientHeight - 40) {
      (0, _prompt.scrollOrFocus)(e);
      return;
    }

    Module.ccall('haven_getkey', 'null', ['number'], [keyCode]);
  },
  wait: function wait() {
    inputMode = 'getkey';
    (0, _buffer.flush)();
    (0, _prompt.setDoScroll)(); // if there's something in the keypress buffer, "push" that key

    if (keypressBuffer.length > 0) {
      keypress.send({
        keyCode: keypressBuffer.shift()
      });
    }
  }
};
/**
 * Set a new input mode.
 *
 * @param mode
 */

exports.keypress = keypress;

function setMode(mode) {
  inputMode = mode;
}
/**
 * Makes a note that text has been printed on the screen since last check
 *
 * @param newState
 */


function textWasPrinted() {
  var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  isTextPrinted = newState;
}

function getTextWasPrinted() {
  return textWasPrinted;
}

/***/ }),

/***/ "./src/haven/loader.js":
/*!*****************************!*\
  !*** ./src/haven/loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

function remove() {
  var loaderOverlay = document.getElementById('loader');

  if (loaderOverlay) {
    loaderOverlay.parentNode.removeChild(loaderOverlay);
  }
}

/***/ }),

/***/ "./src/haven/options.js":
/*!******************************!*\
  !*** ./src/haven/options.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.init = init;
exports.setOption = setOption;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var opt = {
  autosave: true,
  exit_url: '',
  extra_opcodes: true,
  proxy_url: 'proxy.php',
  use_proxy: 'auto',
  windowing: true
};
/**
 * Parse a GET parameter.
 *
 * @param name
 * @param type
 * @param defaultValue
 */

function getParameter(name, type, defaultValue) {
  var valueSearch = new RegExp('[?&]' + name + '=(.*?)(#|&|$)', 'i').exec(window.location.href),
      value;

  if (valueSearch === null || valueSearch.length < 2) {
    return defaultValue;
  }

  value = decodeURIComponent(valueSearch[1].split('+').join(' '));

  switch (type) {
    case 'boolean':
      if (value.toLowerCase() === 'true' || value === 'on' || value === '1') {
        return true;
      }

      if (value.toLowerCase() === 'false' || value === 'off' || value === '0') {
        return false;
      }

      return defaultValue;

    case 'number':
      if (parseFloat(value) + "" === value) {
        return parseFloat(value);
      }

      return NaN;

    default:
      if (value.length === 0) {
        return defaultValue;
      }

      return value;
  }
}
/**
 * Returns the value of an option.
 *
 * @param name
 * @returns {*}
 */


function get(name) {
  return opt[name];
}
/**
 * Read options from the URL
 */


function init(defaults) {
  var option_key;
  defaults = defaults || {};

  for (option_key in defaults) {
    if (defaults.hasOwnProperty(option_key) && defaults[option_key] !== undefined) {
      opt[option_key] = defaults[option_key];
    }
  }

  if (!opt.lock_story) {
    opt.story = getParameter('story', 'string', opt.story);
  }

  if (!opt.lock_options) {
    for (option_key in opt) {
      if (option_key !== 'story' && opt.hasOwnProperty(option_key)) {
        opt[option_key] = getParameter(option_key, _typeof(opt[option_key]), opt[option_key]);
      }
    } // special cases


    if (opt.exit_url === 'false' || opt.exit_url === '0') {
      opt.exit_url = false;
    }
  }
}
/**
 * Set the value of an option.
 *
 * @param name
 * @returns {*}
 */


function setOption(name, value) {
  opt[name] = value;
}

/***/ }),

/***/ "./src/haven/prompt.js":
/*!*****************************!*\
  !*** ./src/haven/prompt.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeInput = resizeInput;
exports.get = get;
exports.hide = hide;
exports.init = init;
exports.isReady = isReady;
exports.scrollOrFocus = scrollOrFocus;
exports.setDoScroll = setDoScroll;
exports.show = show;
exports.prefix = exports.history = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

var _state = __webpack_require__(/*! ./state */ "./src/haven/state.js");

var _window = __webpack_require__(/*! ./window */ "./src/haven/window.js");

// command history
var cmdHistory = []; // current position in the command history. -1: new input

var currentCmdHistory = -1; // stores the currently typed command when browsing the history

var currentCmdText = ""; // should the screen scroll down? Set to false after screen clear.

var doScroll = false; // does the engine handle printing the prompt prefix?

var enginePrompt = false; // input element

var inputElem = document.getElementById('lineinput-field'); // input element's X position in relation to the window

var inputX = 0; // has text been printed on screen?

var isTextPrinted = false; // prefix, i.e. the > or whatever else is shown before the input field

var prefixElem = document.getElementById('lineinput-prefix'); // the parent prompt form element

var promptElem = document.getElementById('lineinput'); // new event type for others (mainly Vorple) who need to know when line
// input is available

var lineinputReadyEvent = new CustomEvent('lineinputReady');
/**
 * Append the line input to the transcript.
 *
 * @param caret
 * @param inputText
 * @param targetContainer
 */

function appendPrompt(caret, inputText, targetContainer) {
  var target = _window.container.get(targetContainer);

  var lastLineinput = document.createElement('div');
  var lastPrefix = document.createElement('span');
  var lastCommand = document.createElement('span'); // remove the last marker from the previously last input

  var previousLastPrompt = document.getElementsByClassName('lineinput last');

  for (var i = previousLastPrompt.length - 1; i >= 0; --i) {
    previousLastPrompt[i].classList.remove('last');
  }

  lastLineinput.className = 'lineinput last';
  lastPrefix.className = 'prompt-prefix';
  lastCommand.className = 'prompt-input';
  lastPrefix.innerHTML = caret;
  lastCommand.innerHTML = inputText;
  lastLineinput.appendChild(lastPrefix);
  lastLineinput.appendChild(lastCommand);
  target.appendChild(lastLineinput);
}
/**
 * Change the prompt input to next or previous command in the command history.
 *
 * @param delta 1 for next command, -1 for previous
 */


function getCmdFromHistory(delta) {
  var current = currentCmdHistory;
  var new_current = current + delta;

  if (current === -1) {
    currentCmdText = inputElem.value;
  } // Check it's within range


  if (new_current < cmdHistory.length && new_current >= 0) {
    inputElem.value = cmdHistory[new_current];
    currentCmdHistory = new_current;
  } else if (new_current === -1) {
    inputElem.value = currentCmdText;
    currentCmdHistory = new_current;
  }
}
/**
 * Resize the input field so that it fits on the same line as the prompt.
 */


function resizeInput() {
  inputElem.style.width = (0, _window.get)(0).clientWidth - inputX - 2 + 'px';
}
/**
 * Scroll down until text content becomes visible.
 */


function scrollToContent() {
  var output = (0, _window.get)(0);
  var statusline = (0, _window.get)(1);
  var nodes = textNodesUnder(output);
  var scrolltop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  var nonWhitespaceRegex = /\S/;

  for (var i = 0; i < nodes.length; ++i) {
    if (nonWhitespaceRegex.test(nodes[i].textContent)) {
      var newScrollTop = nodes[i].parentNode.getBoundingClientRect().top - window.innerHeight / 3;

      if (statusline) {
        newScrollTop += statusline.getBoundingClientRect().height;
      }

      if (scrolltop < newScrollTop) {
        window.scrollTo(0, newScrollTop);
      }

      return;
    }
  }
}
/**
 * Get all text nodes contained by a DOM node
 *
 * From http://stackoverflow.com/a/10730777
 *
 * @param node
 * @returns {Array}
 */


function textNodesUnder(node) {
  var all = [];

  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 3) {
      all.push(node);
    } else {
      all = all.concat(textNodesUnder(node));
    }
  }

  return all;
}
/**
 * Getter for the lineinput form element.
 *
 * @returns {Element}
 */


function get() {
  return promptElem;
}
/**
 * Hide the prompt and stop expecting line input.
 */


function hide() {
  (0, _input.setMode)('buffer');

  if (promptElem.parentNode) {
    promptElem.parentNode.removeChild(promptElem);
  }
}

;
/**
 * Add, remove, and clear commands in the history.
 */

var history = {
  /**
   * Add a command to the command history.
   *
   * @param cmd
   * @returns {boolean} True if successful
   */
  add: function add(cmd) {
    if (cmd) {
      cmdHistory.push(cmd);
      return true;
    }

    return false;
  },

  /**
   * Clear the entire command history.
   */
  clear: function clear() {
    cmdHistory = [];
  },

  /**
   * Returns a copy of the entire command history.
   *
   * @returns {Array}
   */
  get: function get() {
    return cmdHistory.slice();
  },

  /**
   * Remove a single item from the command history.
   *
   * @param {number} index The index of the command to remove. If empty,
   *  the last command will be removed.
   * @returns {boolean} True if removal was successful.
   */
  remove: function remove(index) {
    if (cmdHistory.length === 0) {
      return false;
    }

    if (typeof index !== 'number') {
      cmdHistory.pop();
      return true;
    }

    if (index < 0 || index >= cmdHistory.length) {
      return false;
    }

    cmdHistory.splice(index, 1);
  },

  /**
   * Sets a completely new command history.
   *
   * @param {Array} newHistory An array of strings that becomes the new
   *  command history.
   */
  set: function set(newHistory) {
    cmdHistory = newHistory.slice();
  }
}; // Convert accented characters to plain ASCII. From http://stackoverflow.com/a/18391901

exports.history = history;
var defaultDiacriticsRemovalMap = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var diacriticsMap = {};

for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
  var letters = defaultDiacriticsRemovalMap[i].letters;

  for (var j = 0; j < letters.length; j++) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
  }
}
/**
 * Initialize line input event handlers.
 */


function init(opt) {
  // make a note if the engine handles printing the prompt or not
  enginePrompt = !!opt.enginePrompt; // handle line input submission

  promptElem.addEventListener('submit', function (e) {
    e.preventDefault(); // Change accented characters to plain ASCII.
    // The Hugo engine doesn't receive non-ASCII characters correctly.

    if (!opt.unicode) {
      inputElem.value = inputElem.value.replace(/[^\u0000-\u007E]/g, function (a) {
        return diacriticsMap[a] || a;
      });
    } // save input to history


    if (inputElem.value !== cmdHistory[0] && /\S/.test(inputElem.value)) {
      cmdHistory.unshift(inputElem.value);
    } // reset the current spot in the command history


    currentCmdHistory = -1; // append the command to the transcript, unless the submit events tells us not to

    if (!enginePrompt && !(e.detail && e.detail.silent)) {
      appendPrompt(prefix.get(), inputElem.value, 0);
    } // pass the command to the engine


    Module.ccall('haven_getline', 'null', ['string'], [inputElem.value + '\n']); // cleanup

    inputElem.value = "";
    hide();
  }, false); // Command history. Adapted from Parchment.

  inputElem.addEventListener('keydown', function (e) {
    var keyCode = e.which || e.keyCode; // Check for up/down to use the command history

    if (keyCode === 38) // up -> prev
      {
        getCmdFromHistory(1);
        e.preventDefault();
      }

    if (keyCode === 40) // down -> next
      {
        getCmdFromHistory(-1);
        e.preventDefault();
      }
  }, false); // fix Mobile Safari bug that breaks fixed positioning when the virtual keyboard pops up

  if ('ontouchstart' in window) {
    // the focus event at the start of the game doesn't open the keyboard
    var firstFocus = true;
    inputElem.addEventListener('focus', function () {
      if (!firstFocus) {
        document.body.classList.add("safarifix");
      } else {
        firstFocus = false;
      }
    });
    inputElem.addEventListener('blur', function () {
      document.body.classList.remove("safarifix");
    });
  } // resize input field when window size changes


  window.addEventListener('resize', resizeInput, false); // remove the prompt from the DOM

  promptElem.parentNode.removeChild(promptElem);
}

;
/**
 * Returns true if the command prompt is ready for line input.
 */

function isReady() {
  return (0, _input.getMode)() === 'getline';
}

;
var prefix = {
  /**
   * Get the current prompt prefix, or empty string if the engine is
   * handling printing the prompt.
   *
   * @returns {string}
   */
  get: function get() {
    if (enginePrompt) {
      return "";
    }

    return prefixElem.innerHTML;
  },

  /**
   * Set the prefix (>) that's shown before the command input.
   * The caret is expected to be "clean" i.e. it's safe to use innerHTML
   * to place it in the element.
   *
   * @param {string} prefix
   */
  set: function set(prefix) {
    if (!enginePrompt) {
      prefixElem.innerHTML = prefix;
    }
  }
};
/**
 * Either scroll the page down one page, or if the prompt is visible,
 * set focus to the prompt.
 *
 * @param e
 */

exports.prefix = prefix;

function scrollOrFocus(e) {
  var doc = document.documentElement;
  var scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  var selection = window.getSelection || function () {
    return document.selection ? document.selection.createRange().text : '';
  };

  var playAreaHeight = window.innerHeight;

  if ((0, _window.get)(1)) {
    playAreaHeight = window.innerHeight - haven.window.get(1).getBoundingClientRect().height;
  } // let non-ASCII keycodes, navigation keys, keys pressed with ctrl/alt/cmd pass
  // so that they don't block browser shortcuts


  if (e && (e.keycode === 32 || e.keyCode > 127 || e.altKey || e.ctrlKey || e.metaKey)) {
    return;
  } // Only intercept on things that aren't inputs and if the user isn't selecting text
  // and if the prompt is available


  if (!e || e.target && e.target.nodeName !== 'INPUT' && selection().toString() === '') {
    // If the input box is close to the viewport then focus it
    if (scrolltop + window.innerHeight > document.body.clientHeight - 40) {
      if (promptElem.parentNode) {
        window.scrollTo(0, 9e9); // Manually reset the target in case focus/trigger don't - we don't want the trigger to recurse

        inputElem.focus(); // Stop propagating after re-triggering it, so that the trigger will work for all keys

        if (e && e.stopPropagation && document.activeElement !== inputElem) {
          e.stopPropagation();
        }
      }
    } else {
      // if there's no prompt, scroll down one pageful
      if (doScroll) {
        window.scrollTo(0, scrolltop + playAreaHeight - 40); // focus on the prompt if it's visible

        if (promptElem.parentNode && scrolltop + playAreaHeight + window.innerHeight - 40 >= document.body.clientHeight) {
          inputElem.focus();
        }

        if (e && e.preventDefault) {
          e.preventDefault();
        }
      } // otherwise just scroll the content into view
      else {
          scrollToContent();
        } // Intercept the backspace key


      if (e && e.type === 'keydown' && (e.which || e.keyCode) === 8) {
        return false;
      }
    }
  }

  isTextPrinted = false;
}

;
/**
 * Set the "doScroll" status which tells whether a keypress scrolls the page.
 */

function setDoScroll(status) {
  doScroll = status;
}
/**
 * Show the prompt and start expecting line input.
 */


function show() {
  (0, _input.setMode)('getline');
  (0, _buffer.flush)();
  (0, _window.get)(0).appendChild(promptElem); // calculate input's location and resize to fit

  if (enginePrompt) {
    inputX = inputElem.offsetLeft - (0, _window.get)(0).offsetLeft;
  } else {
    inputX = prefixElem.offsetWidth;
  }

  resizeInput(); // scroll page down or give the prompt focus

  scrollOrFocus();
  doScroll = true; // do autosave when line input is expected

  _state.autosave.save();

  promptElem.dispatchEvent(lineinputReadyEvent);
}

;

/***/ }),

/***/ "./src/haven/state.js":
/*!****************************!*\
  !*** ./src/haven/state.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreUI = restoreUI;
exports.autosave = void 0;

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _window = __webpack_require__(/*! ./window */ "./src/haven/window.js");

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

var autosaveFilename = "";
/**
 * Read the UI state from the filesystem.
 */

function readUIState() {
  try {
    var state = FS.readFile(autosaveFilename + '_uidata', {
      encoding: 'utf8'
    });
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
}

var autosave = {
  /**
   * Delete the autosave files.
   */
  remove: function remove() {
    try {
      FS.unlink(autosaveFilename);
    } catch (e) {}

    try {
      FS.unlink(autosaveFilename + '_uidata');
    } catch (e) {}
  },

  /**
   * Pass the autosave's filename to the engine that takes care of
   * reloading the save.
   */
  restore: function restore() {
    try {
      // Try to open the autosave file.
      // If it doesn't exist, this throws an error.
      FS.stat(autosaveFilename);
      Module.ccall('hugojs_set_autosave_filename', 'null', ['string'], [autosaveFilename]);
    } catch (e) {// autosave file doesn't exist, do nothing
    }
  },
  save: function save() {
    if (!(0, _options.get)('autosave')) {
      return;
    } // trigger engine autosave


    var engineSaveSucceeded = Module.ccall('haven_save_autosave', 'int', ['string'], [autosaveFilename]); // save UI state

    if (engineSaveSucceeded) {
      FS.writeFile(autosaveFilename + '_uidata', JSON.stringify(haven.window.getUIState()), {
        encoding: 'utf8'
      });
    }
  },

  /**
   * Remember the autosave's filename
   * @param filename
   */
  setName: function setName(filename) {
    autosaveFilename = filename;
  }
};
/**
 * Restore saved UI state.
 */

exports.autosave = autosave;

function restoreUI() {
  var savedState = readUIState();
  var windowCount;

  if (!savedState) {
    return;
  } // if windowing has been set off in options, restore only the main window


  if ((0, _options.get)('windowing')) {
    windowCount = savedState.windowContents.length;
  } else {
    windowCount = 1;
  }

  (0, _window.clear)();

  for (var i = 0; i < windowCount; ++i) {
    (0, _window.create)(i, savedState.windowDimensions[i].left, savedState.windowDimensions[i].top, savedState.windowDimensions[i].right, savedState.windowDimensions[i].bottom);
  }

  _style.color.restore(savedState.currentColors);

  (0, _style.restore)(savedState.font);

  _window.position.restore(savedState.position);

  if (savedState.title) {
    document.title = savedState.title;
  }

  for (var _i = 0; _i < savedState.windowContents.length; ++_i) {
    (0, _window.get)(_i).innerHTML = savedState.windowContents[_i];
    (0, _style.apply)(haven.window.get(_i), _i);
  }

  (0, _style.apply)(document.body, 0); // TODO: only for Hugo!
  // set the same style we had when saving

  Module.ccall('hugojs_set_font', 'null', ['int'], [savedState.font[0].original]);
  Module.ccall('hugojs_set_colors', 'null', ['int', 'int'], [savedState.currentColors[0].text, savedState.currentColors[0].background]); // restore command history

  _prompt.history.set(savedState.cmdHistory || []); // scroll to the bottom


  window.scrollTo(0, 9e9);
  (0, _prompt.setDoScroll)();
}

/***/ }),

/***/ "./src/haven/style.js":
/*!****************************!*\
  !*** ./src/haven/style.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = apply;
exports.init = init;
exports.restore = restore;
exports.set = set;
exports.font = exports.color = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

// currently set colors
var currentColors = [defaultColors(0)]; // currently set fonts

var currentFont = [defaultStyles()]; // let engine decide text and background colors?

var engineColors = true; // ignore font family settings? (proportional/fixed-width)

var ignoreFontFamily = false;
/**
 * Get the default colors of a font object
 *
 * @param targetWindow
 * @returns {{text: number, background: number}}
 */

function defaultColors(targetWindow) {
  if (targetWindow === 1) {
    // status line
    return {
      text: 15,
      background: 1
    };
  } else {
    return {
      text: 7,
      background: 0
    };
  }
}
/**
 * Default styles of the font
 */


function defaultStyles() {
  return {
    bold: false,
    italic: false,
    underline: false,
    proportional: true,
    original: 0 // the original integer value of the font

  };
}
/**
 * Set currently active font styles and colors to an element.
 *
 * @param elem
 * @param targetWindow
 */


function apply(elem, targetWindow) {
  var newClasses = [];
  var prompt = (0, _prompt.get)().getElementsByTagName('INPUT')[0];
  var setPromptStyle = targetWindow === 0;

  if (!currentColors[targetWindow]) {
    currentColors[targetWindow] = defaultColors(targetWindow);
  }

  if (engineColors) {
    newClasses.push("textcolor-" + currentColors[targetWindow].text);
    newClasses.push("bgcolor-" + currentColors[targetWindow].background);
  } // remove old class styles


  elem.className = elem.className.replace(/\b(text|bg)color-\d+/g, "");
  elem.classList.remove("font-fixed-width");

  if (setPromptStyle) {
    prompt.className = prompt.className.replace(/\b(text|bg)color-\d+/g, "");
    prompt.classList.remove("font-fixed-width");
  }

  if (!currentFont[targetWindow]) {
    currentFont[targetWindow] = defaultStyles();
  }

  for (var prop in currentFont[targetWindow]) {
    if (ignoreFontFamily && prop === 'proportional') {
      continue;
    }

    if (currentFont[targetWindow].hasOwnProperty(prop)) {
      elem.classList.remove("font-" + prop);

      if (setPromptStyle) {
        prompt.classList.remove("font-" + prop);
      }

      if (currentFont[targetWindow][prop]) {
        newClasses.push("font-" + prop);
      }
    }
  }

  if (!ignoreFontFamily && currentFont[targetWindow].hasOwnProperty('proportional') && !currentFont[targetWindow].proportional) {
    newClasses.push("font-fixed-width");
  }

  for (var i = 0; i < newClasses.length; ++i) {
    elem.classList.add(newClasses[i]);

    if (setPromptStyle) {
      prompt.classList.add(newClasses[i]);
    }
  }
}

;
var color = {
  get: function get() {
    return currentColors;
  },
  restore: function restore(oldState) {
    currentColors = oldState;
  },

  /**
   * Set colors in windows
   *
   * @param which
   * @param color
   * @param targetWindow
   */
  set: function set(which, color, targetWindow) {
    if (!currentColors[targetWindow]) {
      currentColors[targetWindow] = defaultColors(targetWindow);
    }

    if (currentColors[targetWindow][which] === color) {
      // the color doesn't change, do nothing
      return;
    }

    (0, _buffer.flush)(targetWindow);
    currentColors[targetWindow][which] = color;
  }
};
exports.color = color;
var font = {
  get: function get() {
    return currentFont;
  }
};
exports.font = font;

function init(options) {
  ignoreFontFamily = !options.engineFontFamily;
  engineColors = options.engineColors;
}
/**
 * Restore the entire style state.
 *
 * @param oldState
 */


function restore(oldState) {
  currentFont = oldState;
}
/**
 * Set a current style attribute.
 *
 * @param {string} type  bold, italic, underline, or proportional
 * @param {boolean} value
 * @param {number} targetWindow
 */


function set(type, value, targetWindow) {
  (0, _buffer.flush)(targetWindow);
  currentFont[targetWindow][type] = value;
}

/***/ }),

/***/ "./src/haven/vendor/fastclick.js":
/*!***************************************!*\
  !*** ./src/haven/vendor/fastclick.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function () {
  'use strict';
  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/

  /*global define, Event, Node*/

  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */

  function FastClick(layer, options) {
    var oldOnClick;
    options = options || {};
    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */

    this.trackingClick = false;
    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */

    this.trackingClickStart = 0;
    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */

    this.targetElement = null;
    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartX = 0;
    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartY = 0;
    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */

    this.lastTouchIdentifier = 0;
    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */

    this.touchBoundary = options.touchBoundary || 10;
    /**
     * The FastClick layer.
     *
     * @type Element
     */

    this.layer = layer;
    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */

    this.tapDelay = options.tapDelay || 200;
    /**
     * The maximum time for a tap
     *
     * @type number
     */

    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    } // Some old versions of Android don't have Function.prototype.bind


    function bind(method, context) {
      return function () {
        return method.apply(context, arguments);
      };
    }

    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;

    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    } // Set up event handlers as required


    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false); // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.

    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;

        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;

        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    } // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.


    if (typeof layer.onclick === 'function') {
      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function (event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }
  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */


  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  /**
   * Android requires exceptions.
   *
   * @type boolean
   */

  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */

  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */

  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */

  var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */

  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */

  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      // Don't send a synthetic click to disabled inputs (issue #62)
      case 'button':
      case 'select':
      case 'textarea':
        if (target.disabled) {
          return true;
        }

        break;

      case 'input':
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if (deviceIsIOS && target.type === 'file' || target.disabled) {
          return true;
        }

        break;

      case 'label':
      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames

      case 'video':
        return true;
    }

    return /\bneedsclick\b/.test(target.className);
  };
  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */


  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case 'textarea':
        return true;

      case 'select':
        return !deviceIsAndroid;

      case 'input':
        switch (target.type) {
          case 'button':
          case 'checkbox':
          case 'file':
          case 'image':
          case 'radio':
          case 'submit':
            return false;
        } // No point in attempting to focus disabled inputs


        return !target.disabled && !target.readOnly;

      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };
  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */


  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch; // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)

    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0]; // Synthesise a click event, with an extra attribute so it can be tracked

    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {
    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };
  /**
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.focus = function (targetElement) {
    var length; // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.

    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };
  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;
    scrollParent = targetElement.fastClickScrollParent; // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.

    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;

      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    } // Always update the scroll top tracker if possible.


    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };
  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */


  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };
  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection; // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).

    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {
      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();

      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {
        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier; // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).

        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;
    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY; // Prevent phantom clicks on fast double-tap (issue #36)

    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };
  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
        boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };
  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    } // If the touch has moved, cancel the click tracking


    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };
  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */


  FastClick.prototype.findControl = function (labelElement) {
    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    } // All browsers under test that support touch events also support the HTML5 htmlFor attribute


    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    } // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label


    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };
  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchEnd = function (event) {
    var forElement,
        trackingClickStart,
        targetTagName,
        scrollParent,
        touch,
        targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    } // Prevent phantom clicks on fast double-tap (issue #36)


    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    } // Reset to prevent wrong click cancel on input (issue #156).


    this.cancelNextClick = false;
    this.lastClickTime = event.timeStamp;
    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0; // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .

    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0]; // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null

      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();

    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);

      if (forElement) {
        this.focus(targetElement);

        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {
      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event); // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)

      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {
      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;

      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    } // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.


    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };
  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */


  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };
  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onMouse = function (event) {
    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    } // Programmatically generated events targeting a specific element should be permitted


    if (!event.cancelable) {
      return true;
    } // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.


    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      } // Cancel the event


      event.stopPropagation();
      event.preventDefault();
      return false;
    } // If the mouse event is permitted, return true for the action to go through.


    return true;
  };
  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onClick = function (event) {
    var permitted; // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.

    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    } // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.


    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event); // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.

    if (!permitted) {
      this.targetElement = null;
    } // If clicks are permitted, return true for the action to go through.


    return permitted;
  };
  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */


  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };
  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */


  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion; // Devices that don't support touch don't need FastClick

    if (typeof window.ontouchstart === 'undefined') {
      return true;
    } // Chrome version - zero for other browsers


    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {
      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // Chrome 32 and above with width=device-width or less don't need FastClick


          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        } // Chrome desktop doesn't need FastClick (issue #15)

      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/); // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251

      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // width=device-width (or less than device-width) eliminates click delay.


          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    } // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)


    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    } // Firefox version - zero for other browsers


    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
      metaViewport = document.querySelector('meta[name=viewport]');

      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    } // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx


    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };
  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */


  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };

  if ("function" === 'function' && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return FastClick;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
})();

/***/ }),

/***/ "./src/haven/window.js":
/*!*****************************!*\
  !*** ./src/haven/window.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.clear = clear;
exports.create = create;
exports.get = get;
exports.getUIState = getUIState;
exports.measureDimensions = measureDimensions;
exports.setTitle = setTitle;
exports.position = exports.container = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

// DOM containers for windows
var outputWindows = [document.getElementById('window0')]; // the parent of all windows

var mainContainer = document.getElementById('output');
var currentContainers = [outputWindows[0]];
var windowDimensions = [];
var cursorPosition = [];
/**
 * Add lines to the output.
 *
 * @param amount Number of lines
 * @param column Number of spaces that are added to the last line
 * @param havenWindow
 */

function createLines(amount, column, havenWindow) {
  for (var i = 0; i < amount; ++i) {
    var newlineFiller = document.createElement('span');
    newlineFiller.className = 'font-fixed-width';
    newlineFiller.innerHTML = '\n';
    outputWindows[havenWindow].appendChild(newlineFiller);
  }

  if (column > 0) {
    var spaceFiller = document.createElement('span');
    spaceFiller.innerHTML = Array(column).join(" ");
    spaceFiller.className = 'font-fixed-width';
    outputWindows[havenWindow].appendChild(spaceFiller);
  }

  position.reset(havenWindow);
}
/**
 * Prints text to a specific spot in the text window.
 *
 * @param line
 * @param col
 * @param newContent
 * @param havenWindow
 */


function replacePart(line, col, newContent, havenWindow) {
  //        console.log( 'Replacing line', line, 'col', col, 'with', newContent.innerHTML, 'in window', havenWindow );
  var output = outputWindows[havenWindow];
  var nodes = textNodesUnder(output);
  var range = document.createRange();
  var currentLine = 1;
  var currentCol = 1;
  var startFound = false;
  var endCounter = 0; // check if the new content goes on top of existing content or does the
  // container "overflow" (i.e. new lines need to be created as a padding)

  var overflow = function () {
    for (var i = 0; i < nodes.length; ++i) {
      var textContent = nodes[i].textContent;

      if (currentLine === line) {
        for (var j = 0; j < textContent.length; ++j) {
          if (startFound) {
            endCounter++;

            if (endCounter === newContent.textContent.length || textContent[j] === '\n') {
              range.setEnd(nodes[i], j);
              return false;
            }
          } else if (currentCol === col) {
            range.setStart(nodes[i], j);
            startFound = true;

            if (j === textContent.length - 1) {
              range.setEnd(nodes[i], j);
              return false;
            }
          } else if (textContent[j] === '\n') {
            var filler = document.createTextNode(Array(col - currentCol + 1).join(' ') + '\n');
            nodes[i].textContent = textContent.substr(0, j) + ' ';
            nodes[i].parentNode.insertBefore(filler, nodes[i].nextSibling);
            range.setStart(filler, col - currentCol - 1);
            range.setEnd(filler, col - currentCol - 1);
            return false;
          }

          currentCol++;
        }
      } else {
        if (textContent.indexOf('\n') > -1) {
          currentLine++;
        }
      }
    }

    return true;
  }();

  if (overflow) {
    createLines(cursorPosition[havenWindow].line - currentLine, col, havenWindow);
    output.appendChild(newContent);
    return;
  }

  if (newContent.textContent.indexOf('\n') > -1) {
    newContent.textContent = newContent.textContent.replace('\n', '');
    cursorPosition[havenWindow].line++;
    cursorPosition[havenWindow].col = 1;
  } else {
    cursorPosition[havenWindow].col += newContent.textContent.length;
  }

  range.deleteContents();
  range.insertNode(newContent);

  if (!newContent.nextSibling) {
    cursorPosition[havenWindow].line = null;
    cursorPosition[havenWindow].col = null;
  }
}
/**
 * Get all text nodes contained by a DOM node
 *
 * From http://stackoverflow.com/a/10730777
 *
 * @param node
 * @returns {Array}
 */


function textNodesUnder(node) {
  var all = [];

  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 3) {
      all.push(node);
    } else {
      all = all.concat(textNodesUnder(node));
    }
  }

  return all;
}
/**
 * Append content to a window.
 *
 * @param content
 * @param targetWindow
 */


function append(content, targetWindow) {
  var textContainer = document.createElement('span');

  if (!cursorPosition[targetWindow]) {
    cursorPosition[targetWindow] = {
      col: null,
      line: null
    };
  }

  (0, _style.apply)(textContainer, targetWindow);
  textContainer.innerHTML = content; // console.log( content, content.length );

  if (cursorPosition[targetWindow].col !== null && cursorPosition[targetWindow].line !== null) {
    replacePart(cursorPosition[targetWindow].line, cursorPosition[targetWindow].col, textContainer, targetWindow);
  } else {
    //             outputWindows[ targetWindow ].appendChild( textContainer );
    currentContainers[targetWindow].appendChild(textContainer);
  }
}

;
/**
 * Clears an output window.
 *
 * @param targetWindow
 */

function clear(targetWindow) {
  if (targetWindow === undefined) {
    (0, _buffer.flush)(0);
    mainContainer.innerHTML = "";
    mainContainer.appendChild(outputWindows[0]);
    (0, _style.apply)(outputWindows[0], 0);
    (0, _style.apply)(document.body, 0);
    position.reset();
  } else {
    if (!outputWindows[targetWindow]) {
      return;
    } // console.log( 'clear window', targetWindow );


    (0, _buffer.flush)(targetWindow);
    outputWindows[targetWindow].innerHTML = "";
    (0, _style.apply)(outputWindows[targetWindow], targetWindow); // when clearing the main window, set the entire page's style

    if (targetWindow === 0) {
      (0, _style.apply)(document.body, 0);
    }

    position.reset(targetWindow);
  } // don't scroll automatically right after clearing the main window


  if (targetWindow < 1) {// hugoui.doScroll = false;
  }
}

;
/**
 * Create a new window (Hugo only).
 *
 * @param outputWindow
 * @param left
 * @param top
 * @param right
 * @param bottom
 */

function create(outputWindow, left, top, right, bottom) {
  //        console.log( 'creating window', outputWindow + ':  left', left, 'top', top, 'right', right, 'bottom', bottom );
  var dimensions = measureDimensions();
  var charHeight = dimensions.char.height;
  var mainContainer = get(0).parentNode;
  var newWindow;
  windowDimensions[outputWindow] = {
    left: left,
    top: top,
    right: right,
    bottom: bottom
  };

  if (!(0, _options.get)('windowing')) {
    return false;
  } // the main window only changes size


  if (outputWindow === 0) {
    //                outputWindow[0].style.paddingLeft = ( left - 1 ) + 'px';
    get(0).style.paddingTop = (top - 1) * dimensions.char.height + 'px'; //                outputWindow[0].style.width = ( ( right + 1 ) * dimensions.char.width ) + 'px';

    return;
  }

  if (get(outputWindow)) {
    mainContainer.removeChild(get(outputWindow));
  }

  newWindow = document.createElement('div');
  newWindow.id = 'window' + outputWindow;
  newWindow.className = 'havenwindow font-fixed-width';
  newWindow.style.height = charHeight * (bottom - top + 1) + 'px';
  newWindow.style.top = (top - 1) * charHeight + 'px';
  newWindow.style.marginLeft = left - 1 + 'px';
  newWindow.style.width = (right - left + 2) * dimensions.char.width + 'px';
  outputWindows[outputWindow] = newWindow;
  currentContainers[outputWindow] = newWindow;
  container.append(newWindow, mainContainer);
}

;
/**
 * Output containers inside the windows.
 */

var container = {
  append: function append(container, target) {
    if (typeof target === 'number') {
      outputWindows[target].appendChild(container);
    } else {
      target.appendChild(container);
    }
  },
  get: function get(targetWindow) {
    return currentContainers[targetWindow];
  },
  set: function set(newContainer, targetWindow) {
    currentContainers[targetWindow] = newContainer;
  }
};
/**
 * Returns the output window element.
 *
 * @param targetWindow
 * @returns {*}
 */

exports.container = container;

function get(targetWindow) {
  return outputWindows[targetWindow];
}
/**
 * Get all data required to later reconstruct the UI state.
 */


function getUIState() {
  var windowContents = [];
  var promptElem = (0, _prompt.get)();
  var promptParent = promptElem.parentNode; // put prompt away during the save

  if (promptParent) {
    promptParent.removeChild(promptElem);
  } // remove the >


  var lastChild = outputWindows[0].lastChild;
  outputWindows[0].removeChild(lastChild);

  for (var i = 0; i < outputWindows.length; ++i) {
    windowContents[i] = outputWindows[i].innerHTML;
  } // put back what was removed


  outputWindows[0].appendChild(lastChild);

  if (promptParent) {
    promptParent.appendChild(promptElem);
  } // this should be done better, but remove the last line break
  // because restoring adds one back again


  var lastLbr = windowContents[0].lastIndexOf('\n');
  windowContents[0] = windowContents[0].substring(0, lastLbr) + windowContents[0].substring(lastLbr + 1);
  return {
    cmdHistory: _prompt.history.get(),
    currentColors: _style.color.get(),
    font: _style.font.get(),
    position: cursorPosition,
    title: document.title,
    windowDimensions: windowDimensions,
    windowContents: windowContents
  };
}
/**
 * When the window size changes, measure the window width in characters (Hugo only)
 */


function measureDimensions() {
  var outputContainer = get(0).parentNode;
  var dimensions = {
    window: {
      width: parseInt(window.getComputedStyle(outputContainer).width, 10),
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    line: {},
    char: {}
  };
  var measureElem = document.createElement('span');
  var outputDimensions = dimensions.window;
  var measureElemHeight;
  measureElem.innerHTML = '00000<br>00000<br>00000';
  measureElem.className = 'font-fixed-width';
  measureElem.style.display = 'inline-block';
  outputContainer.appendChild(measureElem);
  dimensions.char.width = measureElem.offsetWidth / 5;
  dimensions.line.width = Math.floor((outputDimensions.width - 1) / dimensions.char.width);
  measureElem.style.display = 'block';
  measureElemHeight = measureElem.clientHeight;
  measureElem.innerHTML += '<br>00000<br>00000';
  dimensions.char.height = (measureElem.clientHeight - measureElemHeight) / 2 + 3;
  dimensions.line.height = Math.floor(outputDimensions.height / dimensions.char.height);
  measureElem.parentNode.removeChild(measureElem);
  return dimensions;
}
/**
 * Set the cursor position inside the target window. Hugo only.
 */


var position = {
  reset: function reset(targetWindow) {
    // if no window specified, reset all positions
    if (targetWindow === undefined) {
      cursorPosition = [{
        col: null,
        line: null
      }];
    } else {
      position.set(null, null, targetWindow);
    }
  },
  restore: function restore(oldState) {
    cursorPosition = oldState;
  },
  set: function set(col, line, havenWindow) {
    if (!cursorPosition[havenWindow]) {
      cursorPosition[havenWindow] = {};
    }

    cursorPosition[havenWindow].col = col;
    cursorPosition[havenWindow].line = line;
  }
};
/**
 * Set the window title
 *
 * @param title
 */

exports.position = position;

function setTitle(title) {
  document.title = title;
}

/***/ }),

/***/ "./src/hugo.js":
/*!*********************!*\
  !*** ./src/hugo.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.gameEnded = gameEnded;
exports.init = init;
exports.initScreen = initScreen;
exports.print = print;
exports.restoreUI = restoreUI;
exports.sendWindowDimensions = sendWindowDimensions;
exports.setTitle = setTitle;
exports.position = exports.font = exports.color = exports.opcodes = void 0;

var _buffer = __webpack_require__(/*! ./haven/buffer */ "./src/haven/buffer.js");

var _haven = __webpack_require__(/*! ./haven/haven */ "./src/haven/haven.js");

var _input = __webpack_require__(/*! ./haven/input */ "./src/haven/input.js");

var _options = __webpack_require__(/*! ./haven/options */ "./src/haven/options.js");

var _state = __webpack_require__(/*! ./haven/state */ "./src/haven/state.js");

var _style = __webpack_require__(/*! ./haven/style */ "./src/haven/style.js");

var _window = __webpack_require__(/*! ./haven/window */ "./src/haven/window.js");

var _opcodes = _interopRequireWildcard(__webpack_require__(/*! ./opcodes */ "./src/opcodes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var opcodes = _opcodes;
/**
 * Clear target window, or if omitted, the entire screen.
 *
 * @param hugoWindow
 */

exports.opcodes = opcodes;

function clear(hugoWindow) {
  (0, _window.clear)(hugoWindow);
}

var color = {
  /**
   * Set colors in windows
   *
   * @param which
   * @param newColor
   * @param hugoWindow
   */
  set: function set(which, newColor, hugoWindow) {
    _style.color.set(which, newColor, hugoWindow);
  }
};
exports.color = color;
var font = {
  /**
   * Set font styles
   *
   * @param f
   * @param hugoWindow
   */
  set: function set(f, hugoWindow) {
    (0, _style.set)("bold", !!(f & 1), hugoWindow);
    (0, _style.set)("italic", !!(f & 2), hugoWindow);
    (0, _style.set)("underline", !!(f & 4), hugoWindow);
    (0, _style.set)("proportional", !!(f & 8), hugoWindow);
    (0, _style.set)("original", f, hugoWindow); // setStyle( flushedText, hugoWindow );
  }
};
/**
 * Called by the engine when the game has ended.
 */

exports.font = font;

function gameEnded() {
  // delete the autosave file
  if ((0, _options.get)('autosave')) {
    _state.autosave.remove();
  } // Redirect to an exit URL when the game ends.
  // A fatal error should block the redirection.
  // As a crude check for whether an error was thrown,
  // check if the error message div is present.


  if ((0, _options.get)('exit_url') && !document.getElementById('fatal-error')) {
    // if any text is printed after previous input,
    // wait for keypress/click before redirecting
    if ((0, _input.getTextWasPrinted)()) {
      (0, _input.setMode)('endgame');
    } else {
      window.location = (0, _options.get)('exit_url');
    }
  }
}
/**
 * Initialize HugoJS methods and start Haven
 */


function init() {
  (0, _haven.start)({
    // Hugo engine decides text and background colors
    engineColors: true,
    // the Hugo engine will handle printing the prompt,
    // as opposed to Vorple that uses a custom prompt
    enginePrompt: true,
    // let the Hugo engine set the font family
    // (fixed width or proportional)
    engineFontFamily: true,
    // user-provided options
    options: hugojs_options,
    // no Unicode support
    unicode: false,
    // the name of the story file in the virtual filesystem
    virtualStoryfile: 'game.hex'
  });
  opcodes.init();
}
/**
 * Send the current window dimensions back to the engine.
 *
 * Called by the engine when it needs to init the display.
 */


function initScreen() {
  var loader = document.getElementById('loader');

  if (loader) {
    loader.parentNode.removeChild(loader);
  }

  sendWindowDimensions();
}
/**
 * Set the print cursor position.
 */


var position = {
  set: function set(column, line, hugoWindow) {
    _window.position.set(column, line, hugoWindow);
  }
};
/**
 * Print text.
 *
 * @param text
 * @param hugoWindow
 */

exports.position = position;

function print(text, hugoWindow) {
  // \n is a carriage return, not needed in the browser environment
  if (text === '\n') {
    return;
  }

  (0, _buffer.append)(text, hugoWindow);
}
/**
 * Reset UI state after restore
 */


function restoreUI() {
  (0, _state.restoreUI)();
}
/**
 * Send the window dimensions to the engine (Hugo only)
 */


function sendWindowDimensions() {
  var dimensions = (0, _window.measureDimensions)(); //        console.log( 'sending dimensions', dimensions);

  Module.ccall('hugo_set_window_dimensions', 'null', ['number', 'number', 'number', 'number', 'number', 'number'], [dimensions.window.width, dimensions.window.height, dimensions.line.width, dimensions.line.height, dimensions.char.width, dimensions.char.height]);
}
/**
 * Sets the window title. Called by the engine.
 *
 * @param title
 */


function setTitle(title) {
  (0, _window.setTitle)(title);
} // Set Emscripten's command line arguments that load the story file


window.Module.arguments = ['/game.hex'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./haven/bootstrap */ "./src/haven/bootstrap.js");

var ui = _interopRequireWildcard(__webpack_require__(/*! ./hugo */ "./src/hugo.js"));

__webpack_require__(/*! ./css/hugo.css */ "./src/css/hugo.css");

__webpack_require__(/*! ./css/ui.css */ "./src/css/ui.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

window.hugoui = ui;

/***/ }),

/***/ "./src/opcodes.js":
/*!************************!*\
  !*** ./src/opcodes.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.process = process;

var _assets = __webpack_require__(/*! ./haven/assets */ "./src/haven/assets.js");

var _options = __webpack_require__(/*! ./haven/options */ "./src/haven/options.js");

/**
 * Support for non-standard opcodes.
 */
var OPCODE_CONTROL_FILE = "HrCtlAPI";
var OPCODE_CHECK_FILE = "OpCheck";
/**
 * Save the virtual file that tells the game file we support extra opcodes.
 */

function init() {
  (0, _assets.addCallback)(function (done) {
    FS.syncfs(true, function () {
      if ((0, _options.get)('extra_opcodes')) {
        FS.writeFile(OPCODE_CHECK_FILE, new Uint8Array([89, 47]) // == 12121
        );
      } else {
        try {
          FS.unlink(OPCODE_CHECK_FILE);
        } catch (e) {}
      }

      try {
        FS.unlink(OPCODE_CONTROL_FILE);
      } catch (e) {}

      FS.syncfs(false, done);
    });
  });
}
/**
 * The engine has written to the opcode file. See what's in it,
 * execute the opcode, and write the response (if any).
 */


function process() {
  if (!(0, _options.get)('extra_opcodes')) {
    return;
  }

  console.log(OPCODE_CONTROL_FILE);
  var opcodeData = FS.readFile(OPCODE_CONTROL_FILE);
  var paramcount = opcodeData.length / 2 - 1;
  var response = [];

  var addResponse = function addResponse(value) {
    response.push(value % 256);
    response.push(value >> 8);
  };

  var readWord = function readWord(index) {
    return opcodeData[index * 2] + opcodeData[index * 2 + 1] * 256;
  };

  var writeResponse = function writeResponse() {
    console.log(response);
    FS.writeFile(OPCODE_CONTROL_FILE, new Uint8Array(response));
  }; // odd number of bytes in the input, should never happen


  if (opcodeData.length % 2 === 1) {
    addResponse(20); // 20: RESULT_WRONG_BYTE_COUNT

    writeResponse();
    return;
  }

  var opcodes = {
    1: function _() {
      // IS_OPCODE_AVAILABLE
      if (opcodes[readWord(1)]) {
        addResponse(1);
      } else {
        addResponse(1);
      }
    },
    200: function _() {
      // GET_OS
      addResponse(6); // 6 = Browser
    },
    300: function _() {
      // ABORT
      // try to close the window – won't work unless the interpreter
      // window was programmatically opened by another page
      window.close(); // quick-and-dirty abort by throwing an exception

      throw new Error('Abort opcode called');
    },
    500: function _() {
      // OPEN_URL
      var url = Module.ccall('hugojs_get_dictionary_word', 'string', ['int'], [opcodeData[2] + opcodeData[3] * 256]);

      if (confirm('Game wants to open web address ' + url + '. Continue?')) {
        window.open(url);
      }
    },
    800: function _() {
      // IS_MUSIC_PLAYING
      addResponse(0);
    },
    900: function _() {
      // IS_SAMPLE_PLAYING
      addResponse(0);
    },
    1000: function _() {
      // IS_FLUID_LAYOUT
      addResponse(1);
    },

    /*
     1100: function() {  // SET_COLOR
     hugoui.setCustomColor( opcodeData[ 2 ], opcodeData[ 4 ], opcodeData[ 6 ], opcodeData[ 8 ] );
     },
     */
    1300: function _() {
      // HIDES_CURSOR
      addResponse(1);
    }
  }; // all non-zero parameter counts

  var paramCounts = {
    1: 1,
    400: 4,
    500: 1,
    600: 1,
    700: 1,
    1100: 4,
    1600: 2
  };
  var op = readWord(0);

  if (opcodes[op]) {
    var requiredParams = paramCounts[op] || 0; // check that the parameter count is correct

    if (paramcount !== requiredParams) {
      addResponse(10);
      writeResponse();
      return;
    } // execute the opcode


    addResponse(0); // 0: RESULT_OK

    opcodes[op]();
  } else {
    // unknown opcode or no support
    addResponse(30); // 30: UNRECOGNIZED_OPCODE

    addResponse(op);
    addResponse(paramcount);

    for (var i = 1; i < paramcount; ++i) {
      addResponse(readWord(i));
    }
  } // write the response to the control file


  writeResponse();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9odWdvLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaHVnby5jc3M/NGU0OSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3VpLmNzcz80YzBhIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vaHVnb2pzL3NyYy9oYXZlbi9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vYnVmZmVyLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2Vycm9yLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vaGF2ZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vcHJvbXB0LmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3N0eWxlLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3ZlbmRvci9mYXN0Y2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vd2luZG93LmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2h1Z28uanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvb3Bjb2Rlcy5qcyJdLCJuYW1lcyI6WyJleHBlY3RlZEFzc2V0cyIsImNhbGxiYWNrcyIsImxhc3RDYWxsYmFjayIsImRvbmUiLCJpIiwibWV0YUNhbGxiYWNrIiwibGVuZ3RoIiwiYWRkQ2FsbGJhY2siLCJjYiIsInNldFRpbWVvdXQiLCJwdXNoIiwiZXhwZWN0IiwiYXNzZXQiLCJjb25zb2xlIiwid2FybiIsImZpbmFsQ2FsbGJhY2siLCJmaW5pc2hlZCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIndpbmRvdyIsIk1vZHVsZSIsImFyZ3VtZW50cyIsInByZVJ1biIsInBvc3RSdW4iLCJwcmludCIsInRleHQiLCJwcmludEVyciIsImxvZyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiam9pbiIsIlRPVEFMX01FTU9SWSIsIm91dHB1dEJ1ZmZlciIsImVuY29kZUh0bWwiLCJlbmNvZGVkIiwiY2hhckNvZGVBdCIsImFwcGVuZCIsInRhcmdldFdpbmRvdyIsIm5leHRMQlIiLCJNYXRoIiwibWF4IiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJmbHVzaCIsInVuZGVmaW5lZCIsImhhdmVuIiwiZ2V0IiwibmV3bGluZSIsImVycm9yIiwibWVzc2FnZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcGlubmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkZXIiLCJpZCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsIkVycm9yIiwicmVxdWlyZSIsImludGVycHJldGVyTG9hZGVkIiwiaXNHYW1lZmlsZUxvYWRlZCIsImdhbWVmaWxlIiwiY2hlY2tzdW0iLCJkYXRhZGlyIiwic3RvcnlGaWxlbmFtZSIsImZudjMyIiwiYSIsImxlbiIsImZudiIsIndyaXRlR2FtZWZpbGUiLCJGUyIsIndyaXRlRmlsZSIsImVuY29kaW5nIiwiYW5hbHl6ZVBhdGgiLCJleGlzdHMiLCJta2RpciIsIm1vdW50IiwiSURCRlMiLCJyb290IiwiY2hkaXIiLCJzeW5jZnMiLCJhdXRvc2F2ZSIsInNldE5hbWUiLCJyZXN0b3JlIiwia2V5cHJlc3MiLCJpbml0IiwidmlydHVhbEZpbGVuYW1lIiwiZ2FtZVVybCIsInByb3h5T3B0aW9uIiwicmVxdWVzdFVybCIsInVzZVByb3h5IiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwidGVzdCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0Iiwic3BsaXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsIlVpbnQ4QXJyYXkiLCJyZXNwb25zZSIsInRvU3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJzdGF0dXNUZXh0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJwcm9tcHQiLCJ3aHkiLCJmaWxlbmFtZSIsImlucHV0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInZhbHVlIiwiZ2V0UHJvbXB0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwicmVhZFVJU3RhdGUiLCJzdGF0ZSIsInJlYWRGaWxlIiwiYXV0b3NhdmVGaWxlbmFtZSIsIkpTT04iLCJwYXJzZSIsImUiLCJvbmJlZm9yZXVubG9hZCIsInN0YXJ0RW5naW5lIiwiX2hhdmVuX3N0YXJ0Iiwic3RhcnQiLCJvcHQiLCJ4aHIiLCJvbmxvYWQiLCJlbXRlcnByZXRlckZpbGUiLCJzY3JpcHQiLCJzcmMiLCJvcHRpb25zIiwidmlydHVhbFN0b3J5ZmlsZSIsImVuZ2luZVByb21wdCIsInVuaWNvZGUiLCJlbmdpbmVDb2xvcnMiLCJlbmdpbmVGb250RmFtaWx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkZhc3RDbGljayIsImF0dGFjaCIsImZpbGUiLCJmaWxlTWV0aG9kcyIsImlucHV0TWV0aG9kcyIsInByb21wdE1ldGhvZHMiLCJzdGF0ZU1ldGhvZHMiLCJ3aW5kb3dNZXRob2RzIiwiaW5wdXRNb2RlIiwia2V5cHJlc3NCdWZmZXIiLCJpc1RleHRQcmludGVkIiwiZ2V0TW9kZSIsImlzV2FpdGluZyIsImtleUNvZGUiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGx0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJodWdvanNfb3B0aW9ucyIsImV4aXRfdXJsIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjY2FsbCIsIndhaXQiLCJzaGlmdCIsInNldE1vZGUiLCJtb2RlIiwidGV4dFdhc1ByaW50ZWQiLCJuZXdTdGF0ZSIsImdldFRleHRXYXNQcmludGVkIiwicmVtb3ZlIiwibG9hZGVyT3ZlcmxheSIsImV4dHJhX29wY29kZXMiLCJwcm94eV91cmwiLCJ1c2VfcHJveHkiLCJ3aW5kb3dpbmciLCJnZXRQYXJhbWV0ZXIiLCJuYW1lIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU2VhcmNoIiwiUmVnRXhwIiwiZXhlYyIsImhyZWYiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlRmxvYXQiLCJOYU4iLCJkZWZhdWx0cyIsIm9wdGlvbl9rZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImxvY2tfc3RvcnkiLCJzdG9yeSIsImxvY2tfb3B0aW9ucyIsInNldE9wdGlvbiIsImNtZEhpc3RvcnkiLCJjdXJyZW50Q21kSGlzdG9yeSIsImN1cnJlbnRDbWRUZXh0IiwiZG9TY3JvbGwiLCJpbnB1dEVsZW0iLCJpbnB1dFgiLCJwcmVmaXhFbGVtIiwicHJvbXB0RWxlbSIsImxpbmVpbnB1dFJlYWR5RXZlbnQiLCJDdXN0b21FdmVudCIsImFwcGVuZFByb21wdCIsImNhcmV0IiwiaW5wdXRUZXh0IiwidGFyZ2V0Q29udGFpbmVyIiwidGFyZ2V0Iiwid2luZG93Q29udGFpbmVyIiwibGFzdExpbmVpbnB1dCIsImxhc3RQcmVmaXgiLCJsYXN0Q29tbWFuZCIsInByZXZpb3VzTGFzdFByb21wdCIsImNsYXNzTGlzdCIsImdldENtZEZyb21IaXN0b3J5IiwiZGVsdGEiLCJjdXJyZW50IiwibmV3X2N1cnJlbnQiLCJyZXNpemVJbnB1dCIsInN0eWxlIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbFRvQ29udGVudCIsIm91dHB1dCIsInN0YXR1c2xpbmUiLCJub2RlcyIsInRleHROb2Rlc1VuZGVyIiwibm9uV2hpdGVzcGFjZVJlZ2V4IiwidGV4dENvbnRlbnQiLCJuZXdTY3JvbGxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWlnaHQiLCJzY3JvbGxUbyIsIm5vZGUiLCJhbGwiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJub2RlVHlwZSIsImNvbmNhdCIsImhpZGUiLCJoaXN0b3J5IiwiYWRkIiwiY21kIiwiY2xlYXIiLCJwb3AiLCJzZXQiLCJuZXdIaXN0b3J5IiwiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkaWFjcml0aWNzTWFwIiwiaiIsInByZXZlbnREZWZhdWx0IiwicmVwbGFjZSIsInVuc2hpZnQiLCJkZXRhaWwiLCJzaWxlbnQiLCJwcmVmaXgiLCJ3aGljaCIsImZpcnN0Rm9jdXMiLCJpc1JlYWR5Iiwic2Nyb2xsT3JGb2N1cyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNyZWF0ZVJhbmdlIiwicGxheUFyZWFIZWlnaHQiLCJrZXljb2RlIiwibm9kZU5hbWUiLCJmb2N1cyIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJzZXREb1Njcm9sbCIsInNob3ciLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzYXZlIiwidW5saW5rIiwic3RhdCIsImVuZ2luZVNhdmVTdWNjZWVkZWQiLCJzdHJpbmdpZnkiLCJnZXRVSVN0YXRlIiwicmVzdG9yZVVJIiwic2F2ZWRTdGF0ZSIsIndpbmRvd0NvdW50Iiwid2luZG93Q29udGVudHMiLCJ3aW5kb3dEaW1lbnNpb25zIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiY29sb3IiLCJjdXJyZW50Q29sb3JzIiwiZm9udCIsIndpbmRvd1Bvc2l0aW9uIiwicG9zaXRpb24iLCJ0aXRsZSIsIm9yaWdpbmFsIiwiYmFja2dyb3VuZCIsImRlZmF1bHRDb2xvcnMiLCJjdXJyZW50Rm9udCIsImRlZmF1bHRTdHlsZXMiLCJpZ25vcmVGb250RmFtaWx5IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsInByb3BvcnRpb25hbCIsIm5ld0NsYXNzZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldFByb21wdFN0eWxlIiwicHJvcCIsIm9sZFN0YXRlIiwibGF5ZXIiLCJvbGRPbkNsaWNrIiwidHJhY2tpbmdDbGljayIsInRyYWNraW5nQ2xpY2tTdGFydCIsInRhcmdldEVsZW1lbnQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwibGFzdFRvdWNoSWRlbnRpZmllciIsInRvdWNoQm91bmRhcnkiLCJ0YXBEZWxheSIsInRhcFRpbWVvdXQiLCJub3ROZWVkZWQiLCJiaW5kIiwibWV0aG9kIiwiY29udGV4dCIsIm1ldGhvZHMiLCJsIiwiZGV2aWNlSXNBbmRyb2lkIiwib25Nb3VzZSIsIm9uQ2xpY2siLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJvblRvdWNoQ2FuY2VsIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrIiwiY2FwdHVyZSIsInJtdiIsIk5vZGUiLCJoaWphY2tlZCIsImFkdiIsImV2ZW50IiwicHJvcGFnYXRpb25TdG9wcGVkIiwib25jbGljayIsImRldmljZUlzV2luZG93c1Bob25lIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGV2aWNlSXNJT1MiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJkaXNhYmxlZCIsIm5lZWRzRm9jdXMiLCJyZWFkT25seSIsInNlbmRDbGljayIsImNsaWNrRXZlbnQiLCJ0b3VjaCIsImJsdXIiLCJjaGFuZ2VkVG91Y2hlcyIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkZXRlcm1pbmVFdmVudFR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZm9yd2FyZGVkVG91Y2hFdmVudCIsInRhZ05hbWUiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInVwZGF0ZVNjcm9sbFBhcmVudCIsInNjcm9sbFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJmYXN0Q2xpY2tTY3JvbGxQYXJlbnQiLCJjb250YWlucyIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImZhc3RDbGlja0xhc3RTY3JvbGxUb3AiLCJnZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJURVhUX05PREUiLCJ0YXJnZXRUb3VjaGVzIiwicmFuZ2VDb3VudCIsImlzQ29sbGFwc2VkIiwiaWRlbnRpZmllciIsInRpbWVTdGFtcCIsInBhZ2VYIiwicGFnZVkiLCJsYXN0Q2xpY2tUaW1lIiwidG91Y2hIYXNNb3ZlZCIsImJvdW5kYXJ5IiwiYWJzIiwiZmluZENvbnRyb2wiLCJsYWJlbEVsZW1lbnQiLCJjb250cm9sIiwiaHRtbEZvciIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsImNhbmNlbGFibGUiLCJwZXJtaXR0ZWQiLCJkZXN0cm95IiwibWV0YVZpZXdwb3J0IiwiY2hyb21lVmVyc2lvbiIsImJsYWNrYmVycnlWZXJzaW9uIiwiZmlyZWZveFZlcnNpb24iLCJvbnRvdWNoc3RhcnQiLCJjb250ZW50Iiwic2Nyb2xsV2lkdGgiLCJvdXRlcldpZHRoIiwibWF0Y2giLCJtc1RvdWNoQWN0aW9uIiwidG91Y2hBY3Rpb24iLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwib3V0cHV0V2luZG93cyIsIm1haW5Db250YWluZXIiLCJjdXJyZW50Q29udGFpbmVycyIsImN1cnNvclBvc2l0aW9uIiwiY3JlYXRlTGluZXMiLCJhbW91bnQiLCJjb2x1bW4iLCJoYXZlbldpbmRvdyIsIm5ld2xpbmVGaWxsZXIiLCJzcGFjZUZpbGxlciIsInJlc2V0IiwicmVwbGFjZVBhcnQiLCJsaW5lIiwiY29sIiwibmV3Q29udGVudCIsInJhbmdlIiwiY3VycmVudExpbmUiLCJjdXJyZW50Q29sIiwic3RhcnRGb3VuZCIsImVuZENvdW50ZXIiLCJvdmVyZmxvdyIsInNldEVuZCIsInNldFN0YXJ0IiwiZmlsbGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkZWxldGVDb250ZW50cyIsImluc2VydE5vZGUiLCJ0ZXh0Q29udGFpbmVyIiwiY3JlYXRlIiwib3V0cHV0V2luZG93IiwiZGltZW5zaW9ucyIsIm1lYXN1cmVEaW1lbnNpb25zIiwiY2hhckhlaWdodCIsImNoYXIiLCJuZXdXaW5kb3ciLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsImNvbnRhaW5lciIsIm5ld0NvbnRhaW5lciIsInByb21wdFBhcmVudCIsImxhc3RDaGlsZCIsImxhc3RMYnIiLCJzdWJzdHJpbmciLCJvdXRwdXRDb250YWluZXIiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJtZWFzdXJlRWxlbSIsIm91dHB1dERpbWVuc2lvbnMiLCJtZWFzdXJlRWxlbUhlaWdodCIsImRpc3BsYXkiLCJmbG9vciIsInNldFRpdGxlIiwib3Bjb2RlcyIsIl9vcGNvZGVzIiwiaHVnb1dpbmRvdyIsIm5ld0NvbG9yIiwiY29sb3JzIiwiZiIsImdhbWVFbmRlZCIsImluaXRTY3JlZW4iLCJzZW5kV2luZG93RGltZW5zaW9ucyIsImh1Z291aSIsInVpIiwiT1BDT0RFX0NPTlRST0xfRklMRSIsIk9QQ09ERV9DSEVDS19GSUxFIiwicHJvY2VzcyIsIm9wY29kZURhdGEiLCJwYXJhbWNvdW50IiwiYWRkUmVzcG9uc2UiLCJyZWFkV29yZCIsIndyaXRlUmVzcG9uc2UiLCJjbG9zZSIsInVybCIsImNvbmZpcm0iLCJwYXJhbUNvdW50cyIsIm9wIiwicmVxdWlyZWRQYXJhbXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0Msd0JBQXdCLEdBQUcsa0JBQWtCLHlCQUF5QixHQUFHLHFCQUFxQixpQ0FBaUMsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQixHQUFHLHVCQUF1Qiw2QkFBNkIsc0JB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLElBQU1BLGlCQUFpQixDQUFFLFFBQUYsRUFBWSxXQUFaLENBQXZCLEMsQ0FFQTs7QUFDQSxJQUFNQyxZQUFZLEVBQWxCLEMsQ0FFQTs7QUFDQSxJQUFJQyxZQUFKO0FBR0E7Ozs7QUFHQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osTUFBSUMsSUFBSSxDQUFSOztBQUNBLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQzVCRDs7QUFDQSxRQUFJQSxJQUFJSCxVQUFVSyxNQUFsQixFQUEyQjtBQUN2QkwsZ0JBQVdHLENBQVgsRUFBZ0JDLFlBQWhCO0FBQ0gsS0FGRCxNQUdLLElBQUlILFlBQUosRUFBbUI7QUFDcEJBO0FBQ0g7QUFDSixHQVJEOztBQVVBLE1BQUlELFVBQVVLLE1BQVYsS0FBcUIsQ0FBekIsRUFBNkI7QUFDekI7QUFDSDs7QUFFREwsWUFBVyxDQUFYLEVBQWdCSSxZQUFoQjtBQUNIO0FBR0Q7Ozs7Ozs7Ozs7O0FBU08sU0FBU0UsV0FBVCxDQUFzQkMsRUFBdEIsRUFBMkI7QUFDOUIsTUFBSVIsZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5QjtBQUNBRyxlQUFZRCxFQUFaLEVBQWdCLENBQWhCO0FBQ0g7O0FBRURQLFlBQVVTLElBQVYsQ0FBZ0JGLEVBQWhCO0FBQ0g7O0FBQUE7QUFHRDs7Ozs7O0FBS08sU0FBU0csTUFBVCxDQUFpQkMsS0FBakIsRUFBeUI7QUFDNUIsTUFBSVosZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5Qk8sWUFBUUMsSUFBUixDQUFjLHdCQUF3QkYsS0FBeEIsR0FBZ0MsY0FBaEMsR0FDUix1REFETjtBQUVBO0FBQ0g7O0FBRURaLGlCQUFlVSxJQUFmLENBQXFCRSxLQUFyQjtBQUNIOztBQUFBO0FBR0Q7Ozs7Ozs7QUFNTyxTQUFTRyxhQUFULENBQXdCUCxFQUF4QixFQUE2QjtBQUNoQ04saUJBQWVNLEVBQWY7QUFDSDs7QUFBQTtBQUdEOzs7Ozs7O0FBTU8sU0FBU1EsUUFBVCxDQUFtQkosS0FBbkIsRUFBMkI7QUFDOUIsTUFBTUssUUFBUWpCLGVBQWVrQixPQUFmLENBQXdCTixLQUF4QixDQUFkOztBQUVBLE1BQUlLLFVBQVUsQ0FBQyxDQUFmLEVBQW1CO0FBQ2YsV0FBTyxLQUFQO0FBQ0gsR0FMNkIsQ0FPOUI7OztBQUNBakIsaUJBQWVtQixNQUFmLENBQXVCRixLQUF2QixFQUE4QixDQUE5QixFQVI4QixDQVU5Qjs7QUFDQSxNQUFJakIsZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5Qkg7QUFDSDs7QUFFRCxTQUFPLElBQVA7QUFDSDs7QUFBQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JHRDs7QUFDQTs7OztBQUVBaUIsT0FBT0MsTUFBUCxHQUFnQjtBQUNaQyxhQUFXLEVBREM7QUFFWkMsVUFBUSxFQUZJO0FBR1pDLFdBQVMsQ0FBRSxZQUFXO0FBQUUsMEJBQVUsUUFBVjtBQUF1QixHQUF0QyxDQUhHO0FBSVpDLFNBQU8sZUFBVUMsSUFBVixFQUFpQjtBQUNwQjtBQUNBO0FBQ0Esd0JBQU8seUNBQXlDQSxJQUFoRDtBQUNILEdBUlc7QUFTWkMsWUFBVSxvQkFBVztBQUNqQmQsWUFBUWUsR0FBUixDQUFhTixTQUFiO0FBQ0Esd0JBQU9PLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQlYsU0FBM0IsRUFBc0NXLElBQXRDLENBQTJDLEdBQTNDLENBQVA7QUFDSCxHQVpXO0FBYVpDLGdCQUFjLFFBYkYsQ0FhWTs7QUFiWixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBLElBQU1DLGVBQWUsQ0FBRSxFQUFGLENBQXJCO0FBR0E7Ozs7Ozs7QUFNQSxTQUFTQyxVQUFULENBQXFCVixJQUFyQixFQUE0QjtBQUN4QixNQUFJVyxVQUFVLEVBQWQ7O0FBQ0EsT0FBSyxJQUFJakMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc0IsS0FBS3BCLE1BQXpCLEVBQWlDLEVBQUVGLENBQW5DLEVBQXVDO0FBRW5DO0FBQ0EsUUFBSXNCLEtBQUtZLFVBQUwsQ0FBaUJsQyxDQUFqQixJQUF1QixHQUEzQixFQUFpQztBQUM3QmlDLGlCQUFXLE9BQU9YLEtBQUtZLFVBQUwsQ0FBaUJsQyxDQUFqQixDQUFQLEdBQThCLEdBQXpDO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsY0FBUXNCLEtBQU10QixDQUFOLENBQVI7QUFDSSxhQUFLLEdBQUw7QUFDSWlDLHFCQUFXLE9BQVg7QUFDQTs7QUFFSixhQUFLLEdBQUw7QUFDSUEscUJBQVcsTUFBWDtBQUNBOztBQUVKLGFBQUssR0FBTDtBQUNJQSxxQkFBVyxNQUFYO0FBQ0E7O0FBRUosYUFBSyxJQUFMO0FBQ0lBLHFCQUFXLElBQVg7QUFDQTs7QUFFSjtBQUNJQSxxQkFBV1gsS0FBTXRCLENBQU4sQ0FBWDtBQUNBO0FBbkJSO0FBcUJIO0FBQ0o7O0FBRUQsU0FBT2lDLE9BQVA7QUFDSDtBQUdEOzs7Ozs7OztBQU1PLFNBQVNFLE1BQVQsQ0FBaUJiLElBQWpCLEVBQXVCYyxZQUF2QixFQUFzQztBQUN6QyxNQUFJLENBQUNMLGFBQWNLLFlBQWQsQ0FBTCxFQUFvQztBQUNoQ0wsaUJBQWNLLFlBQWQsSUFBK0IsRUFBL0I7QUFDSDs7QUFFRCxNQUFJZCxLQUFLUixPQUFMLENBQWMsSUFBZCxJQUF1QixDQUFDLENBQXhCLElBQTZCUSxLQUFLUixPQUFMLENBQWMsSUFBZCxJQUF1QixDQUFDLENBQXpELEVBQTZEO0FBQ3pELFFBQU11QixVQUFVQyxLQUFLQyxHQUFMLENBQVVqQixLQUFLa0IsV0FBTCxDQUFrQixJQUFsQixDQUFWLEVBQW9DbEIsS0FBS2tCLFdBQUwsQ0FBa0IsSUFBbEIsQ0FBcEMsSUFBaUUsQ0FBakY7QUFFQVQsaUJBQWNLLFlBQWQsS0FBZ0NKLFdBQVlWLEtBQUttQixNQUFMLENBQWEsQ0FBYixFQUFnQkosT0FBaEIsQ0FBWixDQUFoQztBQUNBSyxVQUFPTixZQUFQO0FBQ0FMLGlCQUFjSyxZQUFkLElBQStCSixXQUFZVixLQUFLbUIsTUFBTCxDQUFhSixPQUFiLENBQVosQ0FBL0I7QUFDSCxHQU5ELE1BT0s7QUFDRE4saUJBQWNLLFlBQWQsS0FBZ0NKLFdBQVlWLElBQVosQ0FBaEM7QUFDSDtBQUNKO0FBR0Q7Ozs7Ozs7QUFLTyxTQUFTb0IsS0FBVCxDQUFnQk4sWUFBaEIsRUFBK0I7QUFDbEMsTUFBSUEsaUJBQWlCTyxTQUFyQixFQUFpQztBQUM3QixTQUFLLElBQUkzQyxDQUFULElBQWMrQixZQUFkLEVBQTZCO0FBQ3pCVyxZQUFPLENBQUMxQyxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxNQUFJLENBQUMrQixhQUFjSyxZQUFkLENBQUQsSUFBaUMsQ0FBQ1EsTUFBTTVCLE1BQU4sQ0FBYTZCLEdBQWIsQ0FBa0JULFlBQWxCLENBQXRDLEVBQXlFO0FBQ3JFO0FBQ0gsR0FUaUMsQ0FXdEM7QUFDSTs7O0FBRUFRLFFBQU01QixNQUFOLENBQWFtQixNQUFiLENBQXFCSixhQUFjSyxZQUFkLENBQXJCLEVBQW1EQSxZQUFuRDtBQUNBTCxlQUFjSyxZQUFkLElBQStCLEVBQS9COztBQUVBLE1BQUlBLGlCQUFpQixDQUFyQixFQUF5QjtBQUNyQiwrQkFBZ0IsSUFBaEI7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTVSxPQUFULENBQWtCVixZQUFsQixFQUFpQztBQUNwQyxNQUFJTCxhQUFjSyxZQUFkLENBQUosRUFBbUM7QUFDL0JMLGlCQUFjSyxZQUFkLEtBQWdDLElBQWhDO0FBQ0gsR0FGRCxNQUdLO0FBQ0RMLGlCQUFjSyxZQUFkLElBQStCLElBQS9CO0FBQ0g7O0FBRURNLFFBQU9OLFlBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhEOzs7QUFHZSxTQUFTVyxLQUFULENBQWdCQyxPQUFoQixFQUEwQjtBQUNyQyxNQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXdCLEtBQXhCLENBQWI7QUFDQSxNQUFNQyxVQUFVRixTQUFTRyxjQUFULENBQXlCLFNBQXpCLENBQWhCO0FBQ0EsTUFBTUMsU0FBU0osU0FBU0csY0FBVCxDQUF5QixRQUF6QixDQUFmO0FBRUFKLE9BQUtNLEVBQUwsR0FBVSxhQUFWO0FBQ0FOLE9BQUtPLFNBQUwsR0FBaUJSLE9BQWpCO0FBQ0FFLFdBQVNPLElBQVQsQ0FBY0MsV0FBZCxDQUEyQlQsSUFBM0IsRUFQcUMsQ0FTckM7O0FBQ0EsTUFBSUcsT0FBSixFQUFjO0FBQ1ZBLFlBQVFPLFVBQVIsQ0FBbUJDLFdBQW5CLENBQWdDUixPQUFoQztBQUNILEdBWm9DLENBY3JDOzs7QUFDQSxNQUFJRSxNQUFKLEVBQWE7QUFDVEEsV0FBT08sU0FBUCxHQUFtQixTQUFuQjtBQUNIOztBQUVELFFBQU0sSUFBSUMsS0FBSixDQUFXZCxPQUFYLENBQU47QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJEOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBUEEsbUJBQUFlLENBQVMsNEZBQVQ7O0FBU0EsSUFBSUMsb0JBQW9CLEtBQXhCO0FBQ0EsSUFBSUMsbUJBQW1CLEtBQXZCO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxPQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUdBOzs7Ozs7O0FBTUEsU0FBU0MsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBb0I7QUFDaEIsTUFBTUMsTUFBTUQsRUFBRXJFLE1BQWQ7QUFDQSxNQUFJdUUsTUFBTSxDQUFWOztBQUVBLE9BQUssSUFBSXpFLElBQUksQ0FBYixFQUFnQkEsSUFBSXdFLEdBQXBCLEVBQXlCeEUsR0FBekIsRUFBK0I7QUFDM0J5RSxVQUFPQSxPQUFRLENBQUNBLE9BQU8sQ0FBUixLQUFjQSxPQUFPLENBQXJCLEtBQTJCQSxPQUFPLENBQWxDLEtBQXdDQSxPQUFPLENBQS9DLEtBQXFEQSxPQUFPLEVBQTVELENBQUQsS0FBc0UsQ0FBN0UsQ0FBRCxHQUFxRkYsRUFBR3ZFLENBQUgsSUFBUyxJQUFwRztBQUNIOztBQUVELFNBQU95RSxRQUFRLENBQWY7QUFDSDtBQUdEOzs7Ozs7OztBQU1BLFNBQVNDLGFBQVQsQ0FBd0IzRSxJQUF4QixFQUErQjtBQUMzQixNQUFJLENBQUNpRSxpQkFBRCxJQUFzQixDQUFDQyxnQkFBM0IsRUFBOEM7QUFDMUMsUUFBSSxDQUFDRCxpQkFBTCxFQUF5QjtBQUNyQmQsZUFBU0csY0FBVCxDQUF5QixnQkFBekIsRUFBNENHLFNBQTVDLEdBQXdELHFCQUF4RDtBQUNILEtBRkQsTUFHSztBQUNETixlQUFTRyxjQUFULENBQXlCLGdCQUF6QixFQUE0Q0csU0FBNUMsR0FBd0QsbUJBQXhEO0FBQ0g7QUFDSjs7QUFFRE4sV0FBU0csY0FBVCxDQUF5QixnQkFBekIsRUFBNENHLFNBQTVDLEdBQXdELGVBQXhEO0FBRUFtQixLQUFHQyxTQUFILENBQ0lQLGFBREosRUFFSUgsUUFGSixFQUdJO0FBQUNXLGNBQVU7QUFBWCxHQUhKLEVBWjJCLENBa0IzQjs7QUFDQVQsWUFBVSxlQUFlRCxRQUF6Qjs7QUFFQSxNQUFJLENBQUNRLEdBQUdHLFdBQUgsQ0FBZ0JWLE9BQWhCLEVBQTBCVyxNQUEvQixFQUF3QztBQUNwQ0osT0FBR0ssS0FBSCxDQUFVWixPQUFWO0FBQ0g7O0FBRURPLEtBQUdNLEtBQUgsQ0FBVUMsS0FBVixFQUFpQjtBQUFDQyxVQUFNO0FBQVAsR0FBakIsRUFBOEJmLE9BQTlCLEVBekIyQixDQTJCM0I7O0FBQ0EsTUFBSSxDQUFDTyxHQUFHRyxXQUFILENBQWdCLFVBQWhCLEVBQTZCQyxNQUFsQyxFQUEyQztBQUN2Q0osT0FBR0ssS0FBSCxDQUFVLFVBQVY7QUFDSDs7QUFFREwsS0FBR00sS0FBSCxDQUFVQyxLQUFWLEVBQWlCO0FBQUNDLFVBQU07QUFBUCxHQUFqQixFQUE4QixVQUE5QjtBQUNBUixLQUFHUyxLQUFILENBQVUsVUFBVixFQWpDMkIsQ0FtQzNCOztBQUNBVCxLQUFHVSxNQUFILENBQVcsSUFBWCxFQUFpQixZQUFXO0FBQ3hCLFFBQUksa0JBQUssVUFBTCxDQUFKLEVBQXdCO0FBQ3BCQyxzQkFBU0MsT0FBVCxDQUFrQixlQUFlcEIsUUFBZixHQUEwQixXQUE1Qzs7QUFDQW1CLHNCQUFTRSxPQUFUO0FBQ0gsS0FKdUIsQ0FNeEI7OztBQUNBQyxvQkFBU0MsSUFBVDs7QUFFQTNGO0FBQ0gsR0FWRDtBQVdIO0FBR0Q7Ozs7O0FBR08sU0FBUzJGLElBQVQsQ0FBZUMsZUFBZixFQUFpQztBQUNwQyxNQUFNQyxVQUFVLGtCQUFLLE9BQUwsQ0FBaEI7QUFDQSxNQUFNQyxjQUFjLGtCQUFLLFdBQUwsQ0FBcEI7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsUUFBSjtBQUVBMUIsa0JBQWdCc0IsZUFBaEI7O0FBRUEsTUFBSSxDQUFDQyxPQUFMLEVBQWU7QUFDWCx3QkFBTyx5QkFBUDtBQUNIOztBQUVELE1BQU1JLFVBQVUsSUFBSUMsY0FBSixFQUFoQjs7QUFFQSxVQUFRLEtBQUtKLFdBQWI7QUFDSSxTQUFLLFFBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEdBQUw7QUFDSUUsaUJBQVcsSUFBWDtBQUNBOztBQUVKLFNBQUssT0FBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssR0FBTDtBQUNJQSxpQkFBVyxLQUFYO0FBQ0E7QUFFWjs7QUFDUTtBQUNJO0FBQ0FBLGlCQUFXLGVBQWVHLElBQWYsQ0FBcUJOLE9BQXJCLEtBQWtDQSxRQUFROUUsT0FBUixDQUFpQkUsT0FBT21GLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCLElBQTNCLEdBQWtDcEYsT0FBT21GLFFBQVAsQ0FBZ0JFLElBQW5FLE1BQThFLENBQTNILENBRkosQ0FJSTs7QUFDQSxVQUFJUixnQkFBZ0IsTUFBcEIsRUFBNkI7QUFDekJwRixnQkFBUUMsSUFBUixDQUFjLCtCQUErQm1GLFdBQS9CLEdBQTZDLGlCQUEzRDtBQUNIOztBQUNEO0FBdEJSOztBQXlCQSxNQUFJRSxRQUFKLEVBQWU7QUFDWEQsaUJBQWEsa0JBQUssV0FBTCxFQUFtQlEsS0FBbkIsQ0FBMEIsSUFBMUIsRUFBaUN6RSxJQUFqQyxDQUF1QzBFLG1CQUFvQlgsT0FBcEIsQ0FBdkMsQ0FBYjtBQUNILEdBRkQsTUFHSztBQUNERSxpQkFBYUYsT0FBYjtBQUNIOztBQUVELDJCQUFhbEIsYUFBYjs7QUFFQXNCLFVBQVFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDcEMsUUFBSVIsUUFBUVMsVUFBUixJQUFzQlIsZUFBZVMsSUFBekMsRUFBZ0Q7QUFDNUMsY0FBUVYsUUFBUVcsTUFBaEI7QUFDSSxhQUFLLEdBQUw7QUFDSTFDLDZCQUFtQixJQUFuQjtBQUNBQyxxQkFBVyxJQUFJMEMsVUFBSixDQUFnQlosUUFBUWEsUUFBeEIsQ0FBWDtBQUNBMUMscUJBQVdHLE1BQU9KLFFBQVAsRUFBa0I0QyxRQUFsQixDQUE0QixFQUE1QixDQUFYLENBSEosQ0FLSTs7QUFDQSxnQ0FBVSxXQUFWO0FBQ0E7O0FBRUosYUFBSyxHQUFMO0FBQ0ksOEJBQU8scUJBQVA7QUFDQTs7QUFFSixhQUFLLEdBQUw7QUFDSSxjQUFJZixRQUFKLEVBQWU7QUFDWCxnQ0FBT2dCLE9BQU9DLFlBQVAsQ0FBb0JDLEtBQXBCLENBQTJCLElBQTNCLEVBQWlDLElBQUlMLFVBQUosQ0FBZ0JaLFFBQVFhLFFBQXhCLENBQWpDLENBQVA7QUFDSCxXQUZELE1BR0s7QUFDRCxnQ0FBTyxpRUFBUDtBQUNIOztBQUNEOztBQUVKLGFBQUssQ0FBTDtBQUFZO0FBQ1IsOEJBQU8seUVBQVA7QUFDQTs7QUFFSjtBQUNJLDhCQUFPLDBEQUEwRGIsUUFBUVcsTUFBbEUsR0FBMkUsSUFBM0UsR0FBa0ZYLFFBQVFrQixVQUExRixHQUF1RyxHQUE5RztBQUNBO0FBN0JSO0FBK0JIO0FBQ0osR0FsQ0Q7O0FBb0NBbEIsVUFBUW1CLElBQVIsQ0FBYyxLQUFkLEVBQXFCckIsVUFBckIsRUFBaUMsSUFBakM7QUFDQUUsVUFBUW9CLFlBQVIsR0FBdUIsYUFBdkIsQ0FyRm9DLENBcUZJOztBQUN4Q3BCLFVBQVFxQixJQUFSO0FBQ0g7O0FBQUE7QUFHRDs7Ozs7Ozs7QUFPTyxTQUFTQyxNQUFULENBQWlCQyxHQUFqQixFQUF1QjtBQUMxQixNQUFNQyxXQUFXeEcsT0FBT3NHLE1BQVAsQ0FBZSxvQkFBb0JDLEdBQW5DLENBQWpCO0FBQ0EsTUFBTUUsUUFBUSxtQkFBWUMsc0JBQVosQ0FBb0MsT0FBcEMsRUFBOEMsQ0FBOUMsQ0FBZDs7QUFFQSxNQUFJRixZQUFZLEtBQUt0QixJQUFMLENBQVdzQixRQUFYLENBQWhCLEVBQXdDO0FBQ3BDQyxVQUFNRSxLQUFOLEdBQWN2RCxVQUFVLEdBQVYsR0FBZ0JvRCxTQUFTbEIsS0FBVCxDQUFnQixHQUFoQixFQUFzQnpFLElBQXRCLENBQTRCLEdBQTVCLENBQTlCO0FBQ0gsR0FGRCxNQUdLO0FBQ0Q0RixVQUFNRSxLQUFOLEdBQWMsRUFBZDtBQUNILEdBVHlCLENBVzFCOzs7QUFDQXRILGFBQVksWUFBVztBQUNuQnVILGdCQUFVQyxhQUFWLENBQXlCLElBQUlDLEtBQUosQ0FBVyxRQUFYLENBQXpCLEVBRG1CLENBR25CO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQXpILGVBQVksWUFBVztBQUNuQnNFLFNBQUdVLE1BQUgsQ0FBVyxLQUFYLEVBQWtCLFlBQVcsQ0FDNUIsQ0FERDtBQUVILEtBSEQsRUFHRyxJQUhIO0FBSUgsR0FYRCxFQVdHLENBWEg7QUFZSDs7QUFBQTtBQUdEOzs7O0FBR08sU0FBUzBDLFdBQVQsR0FBdUI7QUFDMUIsTUFBSTtBQUNBLFFBQU1DLFFBQVFyRCxHQUFHc0QsUUFBSCxDQUNWQyxtQkFBbUIsZUFEVCxFQUVWO0FBQUNyRCxnQkFBVTtBQUFYLEtBRlUsQ0FBZDtBQUtBLFdBQU9zRCxLQUFLQyxLQUFMLENBQVlKLEtBQVosQ0FBUDtBQUNILEdBUEQsQ0FRQSxPQUFNSyxDQUFOLEVBQVM7QUFDTCxXQUFPLElBQVA7QUFDSDtBQUNKOztBQUFBO0FBR0Q7Ozs7O0FBSU8sU0FBU2hELE1BQVQsR0FBa0I7QUFDckJWLEtBQUdVLE1BQUgsQ0FBVyxLQUFYLEVBQWtCLFlBQVcsQ0FBRSxDQUEvQjtBQUNIOztBQUFBLEMsQ0FHRDs7QUFDQXJFLE9BQU9zSCxjQUFQLEdBQXdCLFlBQVc7QUFDL0IzRCxLQUFHVSxNQUFILENBQVcsS0FBWCxFQUFrQixZQUFXLENBQUUsQ0FBL0I7QUFDSCxDQUZEOztBQUlBbkMsU0FBU0csY0FBVCxDQUF5QixnQkFBekIsRUFBNENHLFNBQTVDLEdBQXdELG1DQUF4RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVBBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQWlHQTs7QUFDQTs7Ozs7O0FBaEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFNBQVMrRSxXQUFULEdBQXVCO0FBQ25CQztBQUNIO0FBR0Q7Ozs7OztBQUlPLFNBQVNDLEtBQVQsQ0FBZ0JDLEdBQWhCLEVBQXNCO0FBQ3pCO0FBQ0EsTUFBTUMsTUFBTSxJQUFJMUMsY0FBSixFQUFaO0FBRUEwQyxNQUFJeEIsSUFBSixDQUFVLEtBQVYsRUFBaUIsWUFBakIsRUFBK0IsSUFBL0I7QUFDQXdCLE1BQUl2QixZQUFKLEdBQW1CLGFBQW5COztBQUNBdUIsTUFBSUMsTUFBSixHQUFhLFlBQVc7QUFDcEIzSCxXQUFPNEgsZUFBUCxHQUF5QkYsSUFBSTlCLFFBQTdCO0FBRUEsUUFBTWlDLFNBQVM1RixTQUFTQyxhQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQTJGLFdBQU9DLEdBQVAsR0FBYSxXQUFiO0FBQ0E3RixhQUFTTyxJQUFULENBQWNDLFdBQWQsQ0FBMkJvRixNQUEzQjtBQUNILEdBTkQ7O0FBT0FILE1BQUl0QixJQUFKLENBQVUsSUFBVixFQWJ5QixDQWV6Qjs7QUFDQSxxQkFBYXFCLElBQUlNLE9BQWpCLEVBaEJ5QixDQWtCekI7O0FBQ0Esd0JBQVVOLElBQUlPLGdCQUFkLEVBbkJ5QixDQXFCekI7O0FBQ0EsMkJBQWEsVUFBVTdJLEVBQVYsRUFBZTtBQUN4QjtBQUNBQTtBQUNILEdBSEQsRUF0QnlCLENBMkJ6Qjs7QUFDQSwwQkFBWTtBQUNSOEksa0JBQWMsQ0FBQyxDQUFDUixJQUFJUSxZQURaO0FBRVJDLGFBQVMsQ0FBQyxDQUFDVCxJQUFJUztBQUZQLEdBQVosRUE1QnlCLENBaUN6Qjs7QUFDQSxtQkFBVztBQUNQQyxrQkFBYyxDQUFDLENBQUNWLElBQUlVLFlBRGI7QUFFUEMsc0JBQWtCLENBQUMsQ0FBQ1gsSUFBSVc7QUFGakIsR0FBWCxFQWxDeUIsQ0F1Q3pCOztBQUNBLDJCQUFhLFVBQVVqSixFQUFWLEVBQWU7QUFDeEI7QUFDQUE7QUFDSCxHQUhELEVBeEN5QixDQTZDekI7O0FBQ0EsNkJBQWVtSSxXQUFmO0FBRUE7Ozs7QUFHQSxNQUFJLHNCQUFzQnJGLFFBQTFCLEVBQXFDO0FBQ2pDQSxhQUFTb0csZ0JBQVQsQ0FBMkIsa0JBQTNCLEVBQStDLFlBQVc7QUFDdERDLHlCQUFVQyxNQUFWLENBQWtCdEcsU0FBU08sSUFBM0I7QUFDSCxLQUZELEVBRUcsS0FGSDtBQUdIO0FBQ0o7O0FBUUQ7QUFDQXpDLE9BQU80QixLQUFQLEdBQWU7QUFDWDZHLFFBQU1DLFdBREs7QUFFWGpDLFNBQU9rQyxZQUZJO0FBR1hyQyxVQUFRc0MsYUFIRztBQUlYNUIsU0FBTzZCLFlBSkk7QUFLWDdJLFVBQVE4STtBQUxHLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBLElBQUlDLFlBQVksSUFBaEIsQyxDQUVBOztBQUNBLElBQU1DLGlCQUFpQixFQUF2QjtBQUVBLElBQUlDLGdCQUFnQixLQUFwQjtBQUdBOzs7Ozs7QUFLTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCLFNBQU9ILFNBQVA7QUFDSDs7QUFHTSxTQUFTckUsSUFBVCxHQUFnQjtBQUNuQjtBQUNBeEMsV0FBU29HLGdCQUFULENBQTJCLFNBQTNCLEVBQXNDN0QsU0FBUzRCLElBQS9DLEVBQXFELEtBQXJEO0FBQ0FuRSxXQUFTb0csZ0JBQVQsQ0FBMkIsT0FBM0IsRUFBb0M3RCxTQUFTNEIsSUFBN0MsRUFBbUQsS0FBbkQ7QUFDSDs7QUFHTSxJQUFNNUIsV0FBVztBQUNwQjs7O0FBR0FDLFFBQU0sZ0JBQVc7QUFDYjtBQUNBLFFBQUksQ0FBQ3FFLFNBQUwsRUFBaUI7QUFDYkEsa0JBQVksUUFBWjtBQUNIO0FBQ0osR0FUbUI7O0FBV3BCOzs7Ozs7O0FBT0FJLGFBQVcscUJBQVc7QUFDbEI7O0FBRUEsUUFBSUYsYUFBSixFQUFvQjtBQUNoQjtBQUNIOztBQUVELFdBQU9ELGVBQWU5SixNQUFmLEdBQXdCLENBQS9CO0FBQ0gsR0ExQm1CO0FBNEJwQm1ILFFBQU0sY0FBVWdCLENBQVYsRUFBYztBQUNoQixRQUFNK0IsVUFBVS9CLEVBQUUrQixPQUFsQjtBQUNBLFFBQU1DLE1BQU1uSCxTQUFTb0gsZUFBckI7QUFDQSxRQUFNQyxZQUFZLENBQUN2SixPQUFPd0osV0FBUCxJQUFzQkgsSUFBSUksU0FBM0IsS0FBeUNKLElBQUlLLFNBQUosSUFBaUIsQ0FBMUQsQ0FBbEIsQ0FIZ0IsQ0FLaEI7O0FBQ0EsUUFBSXJDLEVBQUVzQyxNQUFGLElBQVl0QyxFQUFFdUMsT0FBZCxJQUF5QnZDLEVBQUV3QyxPQUEzQixJQUFzQ3hDLEVBQUV5QyxRQUE1QyxFQUF1RDtBQUNuRDtBQUNIOztBQUVELFlBQVFmLFNBQVI7QUFDSSxXQUFLLFFBQUw7QUFDSUMsdUJBQWUxSixJQUFmLENBQXFCOEosT0FBckI7QUFDQTs7QUFFSixXQUFLLFNBQUw7QUFDQSxXQUFLLElBQUw7QUFDSTtBQUNBLG1DQUFlL0IsQ0FBZjtBQUNBOztBQUVKLFdBQUssUUFBTDtBQUNJO0FBQ0E7O0FBRUosV0FBSyxTQUFMO0FBQ0lySCxlQUFPbUYsUUFBUCxHQUFrQjRFLGVBQWVDLFFBQWpDO0FBQ0E7O0FBRUo7QUFDSSw0QkFBTywyQ0FBMkNqQixTQUFsRDtBQXBCUjs7QUF1QkFBLGdCQUFZLFFBQVosQ0FqQ2dCLENBbUNoQjs7QUFDQSxRQUFJUSxZQUFZdkosT0FBT2lLLFdBQW5CLEdBQWlDL0gsU0FBU08sSUFBVCxDQUFjeUgsWUFBZCxHQUE2QixFQUFsRSxFQUF1RTtBQUNuRSxpQ0FBZTdDLENBQWY7QUFDQTtBQUNIOztBQUVEcEgsV0FBT2tLLEtBQVAsQ0FDSSxjQURKLEVBRUksTUFGSixFQUdJLENBQUUsUUFBRixDQUhKLEVBSUksQ0FBRWYsT0FBRixDQUpKO0FBTUgsR0EzRW1CO0FBNkVwQmdCLFFBQU0sZ0JBQVc7QUFDYnJCLGdCQUFZLFFBQVo7QUFFQTtBQUNBLCtCQUphLENBTWI7O0FBQ0EsUUFBSUMsZUFBZTlKLE1BQWYsR0FBd0IsQ0FBNUIsRUFBZ0M7QUFDNUJ1RixlQUFTNEIsSUFBVCxDQUFjO0FBQUUrQyxpQkFBU0osZUFBZXFCLEtBQWY7QUFBWCxPQUFkO0FBQ0g7QUFDSjtBQXZGbUIsQ0FBakI7QUEyRlA7Ozs7Ozs7O0FBS08sU0FBU0MsT0FBVCxDQUFrQkMsSUFBbEIsRUFBeUI7QUFDNUJ4QixjQUFZd0IsSUFBWjtBQUNIO0FBR0Q7Ozs7Ozs7QUFLTyxTQUFTQyxjQUFULEdBQTJDO0FBQUEsTUFBbEJDLFFBQWtCLHVFQUFQLElBQU87QUFDOUN4QixrQkFBZ0J3QixRQUFoQjtBQUNIOztBQUVNLFNBQVNDLGlCQUFULEdBQTZCO0FBQ2hDLFNBQU9GLGNBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lNLFNBQVNHLE1BQVQsR0FBa0I7QUFDckIsTUFBTUMsZ0JBQWdCMUksU0FBU0csY0FBVCxDQUF5QixRQUF6QixDQUF0Qjs7QUFFQSxNQUFJdUksYUFBSixFQUFvQjtBQUNoQkEsa0JBQWNqSSxVQUFkLENBQXlCQyxXQUF6QixDQUFzQ2dJLGFBQXRDO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05ELElBQU1sRCxNQUFNO0FBQ1JwRCxZQUFVLElBREY7QUFFUjBGLFlBQVUsRUFGRjtBQUdSYSxpQkFBZSxJQUhQO0FBSVJDLGFBQVcsV0FKSDtBQUtSQyxhQUFXLE1BTEg7QUFNUkMsYUFBVztBQU5ILENBQVo7QUFVQTs7Ozs7Ozs7QUFPQSxTQUFTQyxZQUFULENBQXVCQyxJQUF2QixFQUE2QkMsSUFBN0IsRUFBbUNDLFlBQW5DLEVBQWtEO0FBQzlDLE1BQUlDLGNBQWMsSUFBSUMsTUFBSixDQUFZLFNBQVNKLElBQVQsR0FBZ0IsZUFBNUIsRUFBNkMsR0FBN0MsRUFBbURLLElBQW5ELENBQXlEdkwsT0FBT21GLFFBQVAsQ0FBZ0JxRyxJQUF6RSxDQUFsQjtBQUFBLE1BQ0k3RSxLQURKOztBQUdBLE1BQUkwRSxnQkFBZ0IsSUFBaEIsSUFBd0JBLFlBQVluTSxNQUFaLEdBQXFCLENBQWpELEVBQXFEO0FBQ2pELFdBQU9rTSxZQUFQO0FBQ0g7O0FBRUR6RSxVQUFROEUsbUJBQW9CSixZQUFhLENBQWIsRUFBaUIvRixLQUFqQixDQUF3QixHQUF4QixFQUE4QnpFLElBQTlCLENBQW9DLEdBQXBDLENBQXBCLENBQVI7O0FBRUEsVUFBUXNLLElBQVI7QUFDSSxTQUFLLFNBQUw7QUFDSSxVQUFJeEUsTUFBTStFLFdBQU4sT0FBd0IsTUFBeEIsSUFBa0MvRSxVQUFVLElBQTVDLElBQW9EQSxVQUFVLEdBQWxFLEVBQXdFO0FBQ3BFLGVBQU8sSUFBUDtBQUNIOztBQUVELFVBQUlBLE1BQU0rRSxXQUFOLE9BQXdCLE9BQXhCLElBQW1DL0UsVUFBVSxLQUE3QyxJQUFzREEsVUFBVSxHQUFwRSxFQUEwRTtBQUN0RSxlQUFPLEtBQVA7QUFDSDs7QUFFRCxhQUFPeUUsWUFBUDs7QUFFSixTQUFLLFFBQUw7QUFDSSxVQUFJTyxXQUFZaEYsS0FBWixJQUFzQixFQUF0QixLQUE2QkEsS0FBakMsRUFBeUM7QUFDckMsZUFBT2dGLFdBQVloRixLQUFaLENBQVA7QUFDSDs7QUFFRCxhQUFPaUYsR0FBUDs7QUFFSjtBQUNJLFVBQUlqRixNQUFNekgsTUFBTixLQUFpQixDQUFyQixFQUF5QjtBQUNyQixlQUFPa00sWUFBUDtBQUNIOztBQUVELGFBQU96RSxLQUFQO0FBeEJSO0FBMEJIO0FBR0Q7Ozs7Ozs7O0FBTU8sU0FBUzlFLEdBQVQsQ0FBY3FKLElBQWQsRUFBcUI7QUFDeEIsU0FBT3hELElBQUt3RCxJQUFMLENBQVA7QUFDSDtBQUdEOzs7OztBQUdPLFNBQVN4RyxJQUFULENBQWVtSCxRQUFmLEVBQTBCO0FBQzdCLE1BQUlDLFVBQUo7QUFFQUQsYUFBV0EsWUFBWSxFQUF2Qjs7QUFFQSxPQUFLQyxVQUFMLElBQW1CRCxRQUFuQixFQUE4QjtBQUMxQixRQUFJQSxTQUFTRSxjQUFULENBQXlCRCxVQUF6QixLQUF5Q0QsU0FBVUMsVUFBVixNQUEyQm5LLFNBQXhFLEVBQW9GO0FBQ2hGK0YsVUFBS29FLFVBQUwsSUFBb0JELFNBQVVDLFVBQVYsQ0FBcEI7QUFDSDtBQUNKOztBQUVELE1BQUksQ0FBQ3BFLElBQUlzRSxVQUFULEVBQXNCO0FBQ2xCdEUsUUFBSXVFLEtBQUosR0FBWWhCLGFBQWMsT0FBZCxFQUF1QixRQUF2QixFQUFpQ3ZELElBQUl1RSxLQUFyQyxDQUFaO0FBQ0g7O0FBRUQsTUFBSSxDQUFDdkUsSUFBSXdFLFlBQVQsRUFBd0I7QUFDcEIsU0FBS0osVUFBTCxJQUFtQnBFLEdBQW5CLEVBQXlCO0FBQ3JCLFVBQUlvRSxlQUFlLE9BQWYsSUFBMEJwRSxJQUFJcUUsY0FBSixDQUFvQkQsVUFBcEIsQ0FBOUIsRUFBaUU7QUFDN0RwRSxZQUFLb0UsVUFBTCxJQUFvQmIsYUFBY2EsVUFBZCxVQUFpQ3BFLElBQUtvRSxVQUFMLENBQWpDLEdBQW9EcEUsSUFBS29FLFVBQUwsQ0FBcEQsQ0FBcEI7QUFDSDtBQUNKLEtBTG1CLENBT3BCOzs7QUFDQSxRQUFJcEUsSUFBSXNDLFFBQUosS0FBaUIsT0FBakIsSUFBNEJ0QyxJQUFJc0MsUUFBSixLQUFpQixHQUFqRCxFQUF1RDtBQUNuRHRDLFVBQUlzQyxRQUFKLEdBQWUsS0FBZjtBQUNIO0FBQ0o7QUFDSjtBQUdEOzs7Ozs7OztBQU1PLFNBQVNtQyxTQUFULENBQW9CakIsSUFBcEIsRUFBMEJ2RSxLQUExQixFQUFrQztBQUNyQ2UsTUFBS3dELElBQUwsSUFBY3ZFLEtBQWQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0Q7O0FBRUE7O0FBS0E7O0FBRUE7O0FBS0E7QUFDQSxJQUFJeUYsYUFBYSxFQUFqQixDLENBRUE7O0FBQ0EsSUFBSUMsb0JBQW9CLENBQUMsQ0FBekIsQyxDQUVBOztBQUNBLElBQUlDLGlCQUFpQixFQUFyQixDLENBRUE7O0FBQ0EsSUFBSUMsV0FBVyxLQUFmLEMsQ0FFQTs7QUFDQSxJQUFJckUsZUFBZSxLQUFuQixDLENBRUE7O0FBQ0EsSUFBSXNFLFlBQVl0SyxTQUFTRyxjQUFULENBQXlCLGlCQUF6QixDQUFoQixDLENBRUE7O0FBQ0EsSUFBSW9LLFNBQVMsQ0FBYixDLENBRUE7O0FBQ0EsSUFBSXhELGdCQUFnQixLQUFwQixDLENBRUE7O0FBQ0EsSUFBSXlELGFBQWF4SyxTQUFTRyxjQUFULENBQXlCLGtCQUF6QixDQUFqQixDLENBRUE7O0FBQ0EsSUFBSXNLLGFBQWF6SyxTQUFTRyxjQUFULENBQXlCLFdBQXpCLENBQWpCLEMsQ0FFQTtBQUNBOztBQUNBLElBQUl1SyxzQkFBc0IsSUFBSUMsV0FBSixDQUFpQixnQkFBakIsQ0FBMUI7QUFHQTs7Ozs7Ozs7QUFPQSxTQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QkMsU0FBOUIsRUFBeUNDLGVBQXpDLEVBQTJEO0FBQ3ZELE1BQU1DLFNBQVNDLGtCQUFnQnRMLEdBQWhCLENBQXFCb0wsZUFBckIsQ0FBZjs7QUFDQSxNQUFNRyxnQkFBZ0JsTCxTQUFTQyxhQUFULENBQXdCLEtBQXhCLENBQXRCO0FBQ0EsTUFBTWtMLGFBQWFuTCxTQUFTQyxhQUFULENBQXdCLE1BQXhCLENBQW5CO0FBQ0EsTUFBTW1MLGNBQWNwTCxTQUFTQyxhQUFULENBQXdCLE1BQXhCLENBQXBCLENBSnVELENBTXZEOztBQUNBLE1BQU1vTCxxQkFBcUJyTCxTQUFTd0Usc0JBQVQsQ0FBaUMsZ0JBQWpDLENBQTNCOztBQUVBLE9BQUssSUFBSTFILElBQUl1TyxtQkFBbUJyTyxNQUFuQixHQUE0QixDQUF6QyxFQUE0Q0YsS0FBSyxDQUFqRCxFQUFvRCxFQUFFQSxDQUF0RCxFQUEwRDtBQUN0RHVPLHVCQUFvQnZPLENBQXBCLEVBQXdCd08sU0FBeEIsQ0FBa0M3QyxNQUFsQyxDQUEwQyxNQUExQztBQUNIOztBQUVEeUMsZ0JBQWN2SyxTQUFkLEdBQTBCLGdCQUExQjtBQUNBd0ssYUFBV3hLLFNBQVgsR0FBdUIsZUFBdkI7QUFDQXlLLGNBQVl6SyxTQUFaLEdBQXdCLGNBQXhCO0FBRUF3SyxhQUFXN0ssU0FBWCxHQUF1QnVLLEtBQXZCO0FBQ0FPLGNBQVk5SyxTQUFaLEdBQXdCd0ssU0FBeEI7QUFFQUksZ0JBQWMxSyxXQUFkLENBQTJCMkssVUFBM0I7QUFDQUQsZ0JBQWMxSyxXQUFkLENBQTJCNEssV0FBM0I7QUFFQUosU0FBT3hLLFdBQVAsQ0FBb0IwSyxhQUFwQjtBQUNIO0FBR0Q7Ozs7Ozs7QUFLQSxTQUFTSyxpQkFBVCxDQUE0QkMsS0FBNUIsRUFBb0M7QUFDaEMsTUFBTUMsVUFBVXRCLGlCQUFoQjtBQUNBLE1BQU11QixjQUFjRCxVQUFVRCxLQUE5Qjs7QUFFQSxNQUFJQyxZQUFZLENBQUMsQ0FBakIsRUFBcUI7QUFDakJyQixxQkFBaUJFLFVBQVU3RixLQUEzQjtBQUNILEdBTitCLENBUWhDOzs7QUFDQSxNQUFJaUgsY0FBY3hCLFdBQVdsTixNQUF6QixJQUFtQzBPLGVBQWUsQ0FBdEQsRUFBMEQ7QUFDdERwQixjQUFVN0YsS0FBVixHQUFrQnlGLFdBQVl3QixXQUFaLENBQWxCO0FBQ0F2Qix3QkFBb0J1QixXQUFwQjtBQUNILEdBSEQsTUFJSyxJQUFJQSxnQkFBZ0IsQ0FBQyxDQUFyQixFQUF5QjtBQUMxQnBCLGNBQVU3RixLQUFWLEdBQWtCMkYsY0FBbEI7QUFDQUQsd0JBQW9CdUIsV0FBcEI7QUFDSDtBQUNKO0FBR0Q7Ozs7O0FBR08sU0FBU0MsV0FBVCxHQUF1QjtBQUMxQnJCLFlBQVVzQixLQUFWLENBQWdCQyxLQUFoQixHQUEwQixpQkFBVyxDQUFYLEVBQWVDLFdBQWYsR0FBNkJ2QixNQUE3QixHQUFzQyxDQUF4QyxHQUE4QyxJQUF0RTtBQUNIO0FBR0Q7Ozs7O0FBR0EsU0FBU3dCLGVBQVQsR0FBMkI7QUFDdkIsTUFBTUMsU0FBUyxpQkFBVyxDQUFYLENBQWY7QUFDQSxNQUFNQyxhQUFhLGlCQUFXLENBQVgsQ0FBbkI7QUFDQSxNQUFNQyxRQUFRQyxlQUFnQkgsTUFBaEIsQ0FBZDtBQUNBLE1BQU0zRSxZQUFZLENBQUN2SixPQUFPd0osV0FBUCxJQUFzQnRILFNBQVNvSCxlQUFULENBQXlCRyxTQUFoRCxLQUE4RHZILFNBQVNvSCxlQUFULENBQXlCSSxTQUF6QixJQUFzQyxDQUFwRyxDQUFsQjtBQUNBLE1BQU00RSxxQkFBcUIsSUFBM0I7O0FBRUEsT0FBSyxJQUFJdFAsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb1AsTUFBTWxQLE1BQTFCLEVBQWtDLEVBQUVGLENBQXBDLEVBQXdDO0FBQ3BDLFFBQUlzUCxtQkFBbUJwSixJQUFuQixDQUF5QmtKLE1BQU9wUCxDQUFQLEVBQVd1UCxXQUFwQyxDQUFKLEVBQXdEO0FBQ3BELFVBQUlDLGVBQWVKLE1BQU9wUCxDQUFQLEVBQVcyRCxVQUFYLENBQXNCOEwscUJBQXRCLEdBQThDQyxHQUE5QyxHQUFvRDFPLE9BQU9pSyxXQUFQLEdBQXFCLENBQTVGOztBQUVBLFVBQUlrRSxVQUFKLEVBQWlCO0FBQ2JLLHdCQUFnQkwsV0FBV00scUJBQVgsR0FBbUNFLE1BQW5EO0FBQ0g7O0FBRUQsVUFBSXBGLFlBQVlpRixZQUFoQixFQUErQjtBQUMzQnhPLGVBQU80TyxRQUFQLENBQWlCLENBQWpCLEVBQW9CSixZQUFwQjtBQUNIOztBQUNEO0FBQ0g7QUFDSjtBQUNKO0FBR0Q7Ozs7Ozs7Ozs7QUFRQSxTQUFTSCxjQUFULENBQXlCUSxJQUF6QixFQUFnQztBQUM1QixNQUFJQyxNQUFNLEVBQVY7O0FBRUEsT0FBS0QsT0FBT0EsS0FBS0UsVUFBakIsRUFBNkJGLElBQTdCLEVBQW1DQSxPQUFPQSxLQUFLRyxXQUEvQyxFQUE2RDtBQUN6RCxRQUFJSCxLQUFLSSxRQUFMLEtBQWtCLENBQXRCLEVBQTBCO0FBQ3RCSCxVQUFJeFAsSUFBSixDQUFVdVAsSUFBVjtBQUNILEtBRkQsTUFHSztBQUNEQyxZQUFNQSxJQUFJSSxNQUFKLENBQVliLGVBQWdCUSxJQUFoQixDQUFaLENBQU47QUFDSDtBQUNKOztBQUVELFNBQU9DLEdBQVA7QUFDSDtBQUdEOzs7Ozs7O0FBS08sU0FBU2pOLEdBQVQsR0FBZTtBQUNsQixTQUFPOEssVUFBUDtBQUNIO0FBR0Q7Ozs7O0FBR08sU0FBU3dDLElBQVQsR0FBZ0I7QUFDbkIsc0JBQWMsUUFBZDs7QUFFQSxNQUFJeEMsV0FBV2hLLFVBQWYsRUFBNEI7QUFDeEJnSyxlQUFXaEssVUFBWCxDQUFzQkMsV0FBdEIsQ0FBbUMrSixVQUFuQztBQUNIO0FBQ0o7O0FBQUE7QUFHRDs7OztBQUdPLElBQU15QyxVQUFVO0FBQ25COzs7Ozs7QUFNQUMsT0FBSyxhQUFVQyxHQUFWLEVBQWdCO0FBQ2pCLFFBQUlBLEdBQUosRUFBVTtBQUNObEQsaUJBQVc5TSxJQUFYLENBQWlCZ1EsR0FBakI7QUFDQSxhQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPLEtBQVA7QUFDSCxHQWRrQjs7QUFpQm5COzs7QUFHQUMsU0FBTyxpQkFBVztBQUNkbkQsaUJBQWEsRUFBYjtBQUNILEdBdEJrQjs7QUF5Qm5COzs7OztBQUtBdkssT0FBSyxlQUFXO0FBQ1osV0FBT3VLLFdBQVd6TCxLQUFYLEVBQVA7QUFDSCxHQWhDa0I7O0FBbUNuQjs7Ozs7OztBQU9BZ0ssVUFBUSxnQkFBVTlLLEtBQVYsRUFBa0I7QUFDdEIsUUFBSXVNLFdBQVdsTixNQUFYLEtBQXNCLENBQTFCLEVBQThCO0FBQzFCLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUksT0FBT1csS0FBUCxLQUFpQixRQUFyQixFQUFnQztBQUM1QnVNLGlCQUFXb0QsR0FBWDtBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUVELFFBQUkzUCxRQUFRLENBQVIsSUFBYUEsU0FBU3VNLFdBQVdsTixNQUFyQyxFQUE4QztBQUMxQyxhQUFPLEtBQVA7QUFDSDs7QUFFRGtOLGVBQVdyTSxNQUFYLENBQW1CRixLQUFuQixFQUEwQixDQUExQjtBQUNILEdBekRrQjs7QUE0RG5COzs7Ozs7QUFNQTRQLE9BQUssYUFBVUMsVUFBVixFQUF1QjtBQUN4QnRELGlCQUFhc0QsV0FBVy9PLEtBQVgsRUFBYjtBQUNIO0FBcEVrQixDQUFoQixDLENBd0VQOzs7QUFDQSxJQUFNZ1AsOEJBQThCLENBQ2hDO0FBQ0lDLFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FEZ0MsRUFLaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FMZ0MsRUFNaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FOZ0MsRUFPaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FQZ0MsRUFRaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FSZ0MsRUFTaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FUZ0MsRUFVaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FWZ0MsRUFXaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQVhnQyxFQWVoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBZmdDLEVBbUJoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBbkJnQyxFQXVCaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0F2QmdDLEVBd0JoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQXhCZ0MsRUF5QmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F6QmdDLEVBNkJoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQTdCZ0MsRUE4QmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E5QmdDLEVBa0NoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBbENnQyxFQXNDaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXRDZ0MsRUEwQ2hDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBMUNnQyxFQTJDaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTNDZ0MsRUErQ2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0EvQ2dDLEVBbURoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQW5EZ0MsRUFvRGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBcERnQyxFQXFEaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0FyRGdDLEVBc0RoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdERnQyxFQTBEaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0ExRGdDLEVBMkRoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTNEZ0MsRUE0RGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E1RGdDLEVBZ0VoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQWhFZ0MsRUFpRWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBakVnQyxFQWtFaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FsRWdDLEVBbUVoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQW5FZ0MsRUFvRWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBcEVnQyxFQXFFaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXJFZ0MsRUF5RWhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBekVnQyxFQTBFaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTFFZ0MsRUE4RWhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E5RWdDLEVBa0ZoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBbEZnQyxFQXNGaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0F0RmdDLEVBdUZoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdkZnQyxFQTJGaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0EzRmdDLEVBNEZoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTVGZ0MsRUE2RmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E3RmdDLEVBaUdoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQWpHZ0MsRUFrR2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FsR2dDLEVBc0doQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdEdnQyxFQTBHaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTFHZ0MsRUE4R2hDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBOUdnQyxFQStHaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0EvR2dDLEVBZ0hoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQWhIZ0MsRUFpSGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBakhnQyxFQWtIaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FsSGdDLEVBbUhoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQW5IZ0MsRUFvSGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FwSGdDLEVBd0hoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBeEhnQyxFQTRIaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTVIZ0MsRUFnSWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBaElnQyxFQWlJaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQWpJZ0MsRUFxSWhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBcklnQyxFQXNJaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXRJZ0MsRUEwSWhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0ExSWdDLEVBOEloQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTlJZ0MsRUErSWhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0EvSWdDLEVBbUpoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQW5KZ0MsRUFvSmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FwSmdDLEVBd0poQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBeEpnQyxFQTRKaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0E1SmdDLEVBNkpoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQTdKZ0MsRUE4SmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E5SmdDLEVBa0toQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQWxLZ0MsRUFtS2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FuS2dDLEVBdUtoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQXZLZ0MsRUF3S2hDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBeEtnQyxFQXlLaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0F6S2dDLEVBMEtoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBMUtnQyxFQThLaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0E5S2dDLEVBK0toQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBL0tnQyxFQW1MaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQW5MZ0MsRUF1TGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F2TGdDLEVBMkxoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTNMZ0MsRUE0TGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0E1TGdDLEVBZ01oQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQWhNZ0MsRUFpTWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBak1nQyxFQWtNaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQWxNZ0MsRUFzTWhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBdE1nQyxFQXVNaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXZNZ0MsRUEyTWhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0EzTWdDLENBQXBDO0FBaU5BLElBQU1DLGdCQUFnQixFQUF0Qjs7QUFFQSxLQUFLLElBQUk5USxJQUFJLENBQWIsRUFBZ0JBLElBQUkyUSw0QkFBNEJ6USxNQUFoRCxFQUF3REYsR0FBeEQsRUFBOEQ7QUFDMUQsTUFBTTZRLFVBQVVGLDRCQUE2QjNRLENBQTdCLEVBQWlDNlEsT0FBakQ7O0FBQ0EsT0FBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFFBQVEzUSxNQUE1QixFQUFvQzZRLEdBQXBDLEVBQTBDO0FBQ3RDRCxrQkFBZUQsUUFBU0UsQ0FBVCxDQUFmLElBQWdDSiw0QkFBOEIzUSxDQUE5QixFQUFrQzRRLElBQWxFO0FBQ0g7QUFDSjtBQUdEOzs7OztBQUdPLFNBQVNsTCxJQUFULENBQWVnRCxHQUFmLEVBQXFCO0FBQ3hCO0FBQ0FRLGlCQUFlLENBQUMsQ0FBQ1IsSUFBSVEsWUFBckIsQ0FGd0IsQ0FJeEI7O0FBQ0F5RSxhQUFXckUsZ0JBQVgsQ0FBNkIsUUFBN0IsRUFBdUMsVUFBVWpCLENBQVYsRUFBYztBQUNqREEsTUFBRTJJLGNBQUYsR0FEaUQsQ0FHakQ7QUFDQTs7QUFDQSxRQUFJLENBQUN0SSxJQUFJUyxPQUFULEVBQW1CO0FBQ2ZxRSxnQkFBVTdGLEtBQVYsR0FBa0I2RixVQUFVN0YsS0FBVixDQUFnQnNKLE9BQWhCLENBQXlCLG1CQUF6QixFQUE4QyxVQUFVMU0sQ0FBVixFQUFjO0FBQzFFLGVBQU91TSxjQUFldk0sQ0FBZixLQUFzQkEsQ0FBN0I7QUFDSCxPQUZpQixDQUFsQjtBQUdILEtBVGdELENBV2pEOzs7QUFDQSxRQUFJaUosVUFBVTdGLEtBQVYsS0FBb0J5RixXQUFZLENBQVosQ0FBcEIsSUFBdUMsS0FBS2xILElBQUwsQ0FBV3NILFVBQVU3RixLQUFyQixDQUEzQyxFQUEwRTtBQUN0RXlGLGlCQUFXOEQsT0FBWCxDQUFvQjFELFVBQVU3RixLQUE5QjtBQUNILEtBZGdELENBZ0JqRDs7O0FBQ0EwRix3QkFBb0IsQ0FBQyxDQUFyQixDQWpCaUQsQ0FtQmpEOztBQUNBLFFBQUksQ0FBQ25FLFlBQUQsSUFBaUIsRUFBRWIsRUFBRThJLE1BQUYsSUFBWTlJLEVBQUU4SSxNQUFGLENBQVNDLE1BQXZCLENBQXJCLEVBQXNEO0FBQ2xEdEQsbUJBQWN1RCxPQUFPeE8sR0FBUCxFQUFkLEVBQTRCMkssVUFBVTdGLEtBQXRDLEVBQTZDLENBQTdDO0FBQ0gsS0F0QmdELENBd0JqRDs7O0FBQ0ExRyxXQUFPa0ssS0FBUCxDQUNJLGVBREosRUFFSSxNQUZKLEVBR0ksQ0FBRSxRQUFGLENBSEosRUFJSSxDQUFFcUMsVUFBVTdGLEtBQVYsR0FBa0IsSUFBcEIsQ0FKSixFQXpCaUQsQ0FnQ2pEOztBQUNBNkYsY0FBVTdGLEtBQVYsR0FBa0IsRUFBbEI7QUFDQXdJO0FBQ0gsR0FuQ0QsRUFtQ0csS0FuQ0gsRUFMd0IsQ0EwQ3hCOztBQUNBM0MsWUFBVWxFLGdCQUFWLENBQTRCLFNBQTVCLEVBQXVDLFVBQVVqQixDQUFWLEVBQWM7QUFDakQsUUFBTStCLFVBQVUvQixFQUFFaUosS0FBRixJQUFXakosRUFBRStCLE9BQTdCLENBRGlELENBR2pEOztBQUNBLFFBQUlBLFlBQVksRUFBaEIsRUFBcUI7QUFDckI7QUFDSXFFLDBCQUFtQixDQUFuQjtBQUNBcEcsVUFBRTJJLGNBQUY7QUFDSDs7QUFDRCxRQUFJNUcsWUFBWSxFQUFoQixFQUFxQjtBQUNyQjtBQUNJcUUsMEJBQW1CLENBQUMsQ0FBcEI7QUFDQXBHLFVBQUUySSxjQUFGO0FBQ0g7QUFDSixHQWRELEVBY0csS0FkSCxFQTNDd0IsQ0EyRHhCOztBQUNBLE1BQUksa0JBQWtCaFEsTUFBdEIsRUFBK0I7QUFDM0I7QUFDQSxRQUFJdVEsYUFBYSxJQUFqQjtBQUVBL0QsY0FBVWxFLGdCQUFWLENBQTRCLE9BQTVCLEVBQXFDLFlBQVc7QUFDNUMsVUFBSSxDQUFDaUksVUFBTCxFQUFrQjtBQUNkck8saUJBQVNPLElBQVQsQ0FBYytLLFNBQWQsQ0FBd0I2QixHQUF4QixDQUE2QixXQUE3QjtBQUNILE9BRkQsTUFHSztBQUNEa0IscUJBQWEsS0FBYjtBQUNIO0FBQ0osS0FQRDtBQVNBL0QsY0FBVWxFLGdCQUFWLENBQTRCLE1BQTVCLEVBQW9DLFlBQVc7QUFDM0NwRyxlQUFTTyxJQUFULENBQWMrSyxTQUFkLENBQXdCN0MsTUFBeEIsQ0FBZ0MsV0FBaEM7QUFDSCxLQUZEO0FBR0gsR0E1RXVCLENBOEV4Qjs7O0FBQ0EzSyxTQUFPc0ksZ0JBQVAsQ0FBeUIsUUFBekIsRUFBbUN1RixXQUFuQyxFQUFnRCxLQUFoRCxFQS9Fd0IsQ0FpRnhCOztBQUNBbEIsYUFBV2hLLFVBQVgsQ0FBc0JDLFdBQXRCLENBQW1DK0osVUFBbkM7QUFDSDs7QUFBQTtBQUdEOzs7O0FBR08sU0FBUzZELE9BQVQsR0FBbUI7QUFDdEIsU0FBTywwQkFBbUIsU0FBMUI7QUFDSDs7QUFBQTtBQUdNLElBQU1ILFNBQVM7QUFDbEI7Ozs7OztBQU1BeE8sT0FBSyxlQUFXO0FBQ1osUUFBSXFHLFlBQUosRUFBbUI7QUFDZixhQUFPLEVBQVA7QUFDSDs7QUFFRCxXQUFPd0UsV0FBV2xLLFNBQWxCO0FBQ0gsR0FiaUI7O0FBZWxCOzs7Ozs7O0FBT0FpTixPQUFLLGFBQVVZLE1BQVYsRUFBbUI7QUFDcEIsUUFBSSxDQUFDbkksWUFBTCxFQUFvQjtBQUNoQndFLGlCQUFXbEssU0FBWCxHQUF1QjZOLE1BQXZCO0FBQ0g7QUFDSjtBQTFCaUIsQ0FBZjtBQTZCUDs7Ozs7Ozs7O0FBTU8sU0FBU0ksYUFBVCxDQUF3QnBKLENBQXhCLEVBQTRCO0FBQy9CLE1BQU1nQyxNQUFNbkgsU0FBU29ILGVBQXJCO0FBQ0EsTUFBTUMsWUFBWSxDQUFDdkosT0FBT3dKLFdBQVAsSUFBc0JILElBQUlJLFNBQTNCLEtBQXlDSixJQUFJSyxTQUFKLElBQWlCLENBQTFELENBQWxCOztBQUNBLE1BQU1nSCxZQUFZMVEsT0FBTzJRLFlBQVAsSUFDVixZQUFXO0FBQ1AsV0FBT3pPLFNBQVN3TyxTQUFULEdBQXFCeE8sU0FBU3dPLFNBQVQsQ0FBbUJFLFdBQW5CLEdBQWlDdFEsSUFBdEQsR0FBNkQsRUFBcEU7QUFDSCxHQUhUOztBQUlBLE1BQUl1USxpQkFBaUI3USxPQUFPaUssV0FBNUI7O0FBRUEsTUFBSSxpQkFBVyxDQUFYLENBQUosRUFBcUI7QUFDakI0RyxxQkFBaUI3USxPQUFPaUssV0FBUCxHQUFxQnJJLE1BQU01QixNQUFOLENBQWE2QixHQUFiLENBQWtCLENBQWxCLEVBQXNCNE0scUJBQXRCLEdBQThDRSxNQUFwRjtBQUNILEdBWDhCLENBYS9CO0FBQ0E7OztBQUNBLE1BQUl0SCxNQUFNQSxFQUFFeUosT0FBRixLQUFjLEVBQWQsSUFBb0J6SixFQUFFK0IsT0FBRixHQUFZLEdBQWhDLElBQXVDL0IsRUFBRXNDLE1BQXpDLElBQW1EdEMsRUFBRXVDLE9BQXJELElBQWdFdkMsRUFBRXdDLE9BQXhFLENBQUosRUFBdUY7QUFDbkY7QUFDSCxHQWpCOEIsQ0FtQi9CO0FBQ0E7OztBQUNBLE1BQUksQ0FBQ3hDLENBQUQsSUFBT0EsRUFBRTZGLE1BQUYsSUFBWTdGLEVBQUU2RixNQUFGLENBQVM2RCxRQUFULEtBQXNCLE9BQWxDLElBQTZDTCxZQUFZNUssUUFBWixPQUEyQixFQUFuRixFQUF5RjtBQUNyRjtBQUNBLFFBQUl5RCxZQUFZdkosT0FBT2lLLFdBQW5CLEdBQWlDL0gsU0FBU08sSUFBVCxDQUFjeUgsWUFBZCxHQUE2QixFQUFsRSxFQUF1RTtBQUNuRSxVQUFJeUMsV0FBV2hLLFVBQWYsRUFBNEI7QUFDeEIzQyxlQUFPNE8sUUFBUCxDQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUR3QixDQUd4Qjs7QUFDQXBDLGtCQUFVd0UsS0FBVixHQUp3QixDQU14Qjs7QUFDQSxZQUFJM0osS0FBS0EsRUFBRTRKLGVBQVAsSUFBMEIvTyxTQUFTZ1AsYUFBVCxLQUEyQjFFLFNBQXpELEVBQXFFO0FBQ2pFbkYsWUFBRTRKLGVBQUY7QUFDSDtBQUNKO0FBQ0osS0FaRCxNQWFLO0FBQ0Q7QUFDQSxVQUFJMUUsUUFBSixFQUFlO0FBQ1h2TSxlQUFPNE8sUUFBUCxDQUFpQixDQUFqQixFQUFvQnJGLFlBQVlzSCxjQUFaLEdBQTZCLEVBQWpELEVBRFcsQ0FHWDs7QUFDQSxZQUFJbEUsV0FBV2hLLFVBQVgsSUFBeUI0RyxZQUFZc0gsY0FBWixHQUE2QjdRLE9BQU9pSyxXQUFwQyxHQUFrRCxFQUFsRCxJQUF3RC9ILFNBQVNPLElBQVQsQ0FBY3lILFlBQW5HLEVBQWtIO0FBQzlHc0Msb0JBQVV3RSxLQUFWO0FBQ0g7O0FBRUQsWUFBSTNKLEtBQUtBLEVBQUUySSxjQUFYLEVBQTRCO0FBQ3hCM0ksWUFBRTJJLGNBQUY7QUFDSDtBQUNKLE9BWEQsQ0FZQTtBQVpBLFdBYUs7QUFDRC9CO0FBQ0gsU0FqQkEsQ0FtQkQ7OztBQUNBLFVBQUk1RyxLQUFLQSxFQUFFOEQsSUFBRixLQUFXLFNBQWhCLElBQTZCLENBQUM5RCxFQUFFaUosS0FBRixJQUFXakosRUFBRStCLE9BQWQsTUFBMkIsQ0FBNUQsRUFBZ0U7QUFDNUQsZUFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUVESCxrQkFBZ0IsS0FBaEI7QUFDSDs7QUFBQTtBQUdEOzs7O0FBR08sU0FBU2tJLFdBQVQsQ0FBc0J4TCxNQUF0QixFQUErQjtBQUNsQzRHLGFBQVc1RyxNQUFYO0FBQ0g7QUFHRDs7Ozs7QUFHTyxTQUFTeUwsSUFBVCxHQUFnQjtBQUNuQixzQkFBYyxTQUFkO0FBQ0E7QUFDQSxtQkFBVyxDQUFYLEVBQWUxTyxXQUFmLENBQTRCaUssVUFBNUIsRUFIbUIsQ0FLbkI7O0FBQ0EsTUFBSXpFLFlBQUosRUFBbUI7QUFDZnVFLGFBQVNELFVBQVU2RSxVQUFWLEdBQXVCLGlCQUFXLENBQVgsRUFBZUEsVUFBL0M7QUFDSCxHQUZELE1BR0s7QUFDRDVFLGFBQVNDLFdBQVc0RSxXQUFwQjtBQUNIOztBQUVEekQsZ0JBYm1CLENBZW5COztBQUNBNEM7QUFDQWxFLGFBQVcsSUFBWCxDQWpCbUIsQ0FtQm5COztBQUNBakksa0JBQVNpTixJQUFUOztBQUVBNUUsYUFBVzlGLGFBQVgsQ0FBMEIrRixtQkFBMUI7QUFDSDs7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVzQkQ7O0FBQ0E7O0FBRUE7O0FBT0E7O0FBTUEsSUFBSTFGLG1CQUFtQixFQUF2QjtBQUdBOzs7O0FBR0EsU0FBU0gsV0FBVCxHQUF3QjtBQUNwQixNQUFJO0FBQ0EsUUFBTUMsUUFBUXJELEdBQUdzRCxRQUFILENBQ1ZDLG1CQUFtQixTQURULEVBRVY7QUFBQ3JELGdCQUFVO0FBQVgsS0FGVSxDQUFkO0FBS0EsV0FBT3NELEtBQUtDLEtBQUwsQ0FBWUosS0FBWixDQUFQO0FBQ0gsR0FQRCxDQVFBLE9BQU1LLENBQU4sRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBR00sSUFBTS9DLFdBQVc7QUFDcEI7OztBQUdBcUcsVUFBUSxrQkFBVztBQUNmLFFBQUk7QUFDQWhILFNBQUc2TixNQUFILENBQVd0SyxnQkFBWDtBQUNILEtBRkQsQ0FHQSxPQUFNRyxDQUFOLEVBQVMsQ0FBRTs7QUFFWCxRQUFJO0FBQ0ExRCxTQUFHNk4sTUFBSCxDQUFXdEssbUJBQW1CLFNBQTlCO0FBQ0gsS0FGRCxDQUdBLE9BQU1HLENBQU4sRUFBUyxDQUFFO0FBQ2QsR0FkbUI7O0FBZ0JwQjs7OztBQUlBN0MsV0FBUyxtQkFBVztBQUNoQixRQUFJO0FBQ0E7QUFDQTtBQUNBYixTQUFHOE4sSUFBSCxDQUFTdkssZ0JBQVQ7QUFFQWpILGFBQU9rSyxLQUFQLENBQ0ksOEJBREosRUFFSSxNQUZKLEVBR0ksQ0FBRSxRQUFGLENBSEosRUFJSSxDQUFFakQsZ0JBQUYsQ0FKSjtBQU1ILEtBWEQsQ0FZQSxPQUFNRyxDQUFOLEVBQVMsQ0FDTDtBQUNIO0FBQ0osR0FwQ21CO0FBc0NwQmtLLFFBQU0sZ0JBQVc7QUFDYixRQUFJLENBQUMsa0JBQVcsVUFBWCxDQUFMLEVBQStCO0FBQzNCO0FBQ0gsS0FIWSxDQUtiOzs7QUFDQSxRQUFNRyxzQkFBc0J6UixPQUFPa0ssS0FBUCxDQUN4QixxQkFEd0IsRUFFeEIsS0FGd0IsRUFHeEIsQ0FBRSxRQUFGLENBSHdCLEVBSXhCLENBQUVqRCxnQkFBRixDQUp3QixDQUE1QixDQU5hLENBYWI7O0FBQ0EsUUFBSXdLLG1CQUFKLEVBQTBCO0FBQ3RCL04sU0FBR0MsU0FBSCxDQUNJc0QsbUJBQW1CLFNBRHZCLEVBRUlDLEtBQUt3SyxTQUFMLENBQWdCL1AsTUFBTTVCLE1BQU4sQ0FBYTRSLFVBQWIsRUFBaEIsQ0FGSixFQUdJO0FBQUMvTixrQkFBVTtBQUFYLE9BSEo7QUFLSDtBQUNKLEdBM0RtQjs7QUE2RHBCOzs7O0FBSUFVLFdBQVMsaUJBQVVpQyxRQUFWLEVBQXFCO0FBQzFCVSx1QkFBbUJWLFFBQW5CO0FBQ0g7QUFuRW1CLENBQWpCO0FBdUVQOzs7Ozs7QUFHTyxTQUFTcUwsU0FBVCxHQUFxQjtBQUN4QixNQUFNQyxhQUFhL0ssYUFBbkI7QUFDQSxNQUFJZ0wsV0FBSjs7QUFFQSxNQUFJLENBQUNELFVBQUwsRUFBa0I7QUFDZDtBQUNILEdBTnVCLENBUXhCOzs7QUFDQSxNQUFJLGtCQUFXLFdBQVgsQ0FBSixFQUErQjtBQUMzQkMsa0JBQWNELFdBQVdFLGNBQVgsQ0FBMEI5UyxNQUF4QztBQUNILEdBRkQsTUFHSztBQUNENlMsa0JBQWMsQ0FBZDtBQUNIOztBQUVEOztBQUVBLE9BQUssSUFBSS9TLElBQUksQ0FBYixFQUFnQkEsSUFBSStTLFdBQXBCLEVBQWlDLEVBQUUvUyxDQUFuQyxFQUF1QztBQUNuQyx3QkFDSUEsQ0FESixFQUVJOFMsV0FBV0csZ0JBQVgsQ0FBNkJqVCxDQUE3QixFQUFpQ2tULElBRnJDLEVBR0lKLFdBQVdHLGdCQUFYLENBQTZCalQsQ0FBN0IsRUFBaUMwUCxHQUhyQyxFQUlJb0QsV0FBV0csZ0JBQVgsQ0FBNkJqVCxDQUE3QixFQUFpQ21ULEtBSnJDLEVBS0lMLFdBQVdHLGdCQUFYLENBQTZCalQsQ0FBN0IsRUFBaUNvVCxNQUxyQztBQU9IOztBQUVEQyxlQUFNN04sT0FBTixDQUFlc04sV0FBV1EsYUFBMUI7O0FBQ0Esc0JBQWNSLFdBQVdTLElBQXpCOztBQUNBQyxtQkFBZWhPLE9BQWYsQ0FBd0JzTixXQUFXVyxRQUFuQzs7QUFFQSxNQUFJWCxXQUFXWSxLQUFmLEVBQXVCO0FBQ25CeFEsYUFBU3dRLEtBQVQsR0FBaUJaLFdBQVdZLEtBQTVCO0FBQ0g7O0FBRUQsT0FBSyxJQUFJMVQsS0FBSSxDQUFiLEVBQWdCQSxLQUFJOFMsV0FBV0UsY0FBWCxDQUEwQjlTLE1BQTlDLEVBQXNELEVBQUVGLEVBQXhELEVBQTREO0FBQ3hELHFCQUFXQSxFQUFYLEVBQWV3RCxTQUFmLEdBQTJCc1AsV0FBV0UsY0FBWCxDQUEyQmhULEVBQTNCLENBQTNCO0FBQ0Esc0JBQVk0QyxNQUFNNUIsTUFBTixDQUFhNkIsR0FBYixDQUFrQjdDLEVBQWxCLENBQVosRUFBbUNBLEVBQW5DO0FBQ0g7O0FBRUQsb0JBQVlrRCxTQUFTTyxJQUFyQixFQUEyQixDQUEzQixFQXpDd0IsQ0EyQ3hCO0FBQ0E7O0FBQ0F4QyxTQUFPa0ssS0FBUCxDQUNJLGlCQURKLEVBRUksTUFGSixFQUdJLENBQUUsS0FBRixDQUhKLEVBSUksQ0FBRTJILFdBQVdTLElBQVgsQ0FBaUIsQ0FBakIsRUFBcUJJLFFBQXZCLENBSko7QUFPQTFTLFNBQU9rSyxLQUFQLENBQ0ksbUJBREosRUFFSSxNQUZKLEVBR0ksQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUhKLEVBSUksQ0FBRTJILFdBQVdRLGFBQVgsQ0FBMEIsQ0FBMUIsRUFBOEJoUyxJQUFoQyxFQUFzQ3dSLFdBQVdRLGFBQVgsQ0FBMEIsQ0FBMUIsRUFBOEJNLFVBQXBFLENBSkosRUFwRHdCLENBMkR4Qjs7QUFDQXhELGtCQUFRSyxHQUFSLENBQWFxQyxXQUFXMUYsVUFBWCxJQUF5QixFQUF0QyxFQTVEd0IsQ0E4RHhCOzs7QUFDQXBNLFNBQU80TyxRQUFQLENBQWlCLENBQWpCLEVBQW9CLEdBQXBCO0FBQ0E7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMRDs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQUkwRCxnQkFBZ0IsQ0FBRU8sY0FBZSxDQUFmLENBQUYsQ0FBcEIsQyxDQUVBOztBQUNBLElBQUlDLGNBQWMsQ0FBRUMsZUFBRixDQUFsQixDLENBRUE7O0FBQ0EsSUFBSTNLLGVBQWUsSUFBbkIsQyxDQUVBOztBQUNBLElBQUk0SyxtQkFBbUIsS0FBdkI7QUFHQTs7Ozs7OztBQU1BLFNBQVNILGFBQVQsQ0FBd0J6UixZQUF4QixFQUF1QztBQUNuQyxNQUFJQSxpQkFBaUIsQ0FBckIsRUFBeUI7QUFBRztBQUN4QixXQUFPO0FBQ0hkLFlBQU0sRUFESDtBQUVIc1Msa0JBQVk7QUFGVCxLQUFQO0FBSUgsR0FMRCxNQU1LO0FBQ0QsV0FBTztBQUNIdFMsWUFBTSxDQURIO0FBRUhzUyxrQkFBWTtBQUZULEtBQVA7QUFJSDtBQUNKO0FBR0Q7Ozs7O0FBR0EsU0FBU0csYUFBVCxHQUF5QjtBQUNyQixTQUFPO0FBQ0hFLFVBQU0sS0FESDtBQUVIQyxZQUFRLEtBRkw7QUFHSEMsZUFBVyxLQUhSO0FBSUhDLGtCQUFjLElBSlg7QUFLSFQsY0FBVSxDQUxQLENBS2E7O0FBTGIsR0FBUDtBQU9IO0FBR0Q7Ozs7Ozs7O0FBTU8sU0FBUzFNLEtBQVQsQ0FBZ0JoRSxJQUFoQixFQUFzQmIsWUFBdEIsRUFBcUM7QUFDeEMsTUFBTWlTLGFBQWEsRUFBbkI7QUFDQSxNQUFNL00sU0FBUyxtQkFBWWdOLG9CQUFaLENBQWtDLE9BQWxDLEVBQTZDLENBQTdDLENBQWY7QUFDQSxNQUFNQyxpQkFBa0JuUyxpQkFBaUIsQ0FBekM7O0FBRUEsTUFBSSxDQUFDa1IsY0FBZWxSLFlBQWYsQ0FBTCxFQUFxQztBQUNqQ2tSLGtCQUFlbFIsWUFBZixJQUFnQ3lSLGNBQWV6UixZQUFmLENBQWhDO0FBQ0g7O0FBRUQsTUFBSWdILFlBQUosRUFBbUI7QUFDZmlMLGVBQVcvVCxJQUFYLENBQWlCLGVBQWVnVCxjQUFlbFIsWUFBZixFQUE4QmQsSUFBOUQ7QUFDQStTLGVBQVcvVCxJQUFYLENBQWlCLGFBQWFnVCxjQUFlbFIsWUFBZixFQUE4QndSLFVBQTVEO0FBQ0gsR0FadUMsQ0FjeEM7OztBQUNBM1EsT0FBS1ksU0FBTCxHQUFpQlosS0FBS1ksU0FBTCxDQUFlb04sT0FBZixDQUF3Qix1QkFBeEIsRUFBaUQsRUFBakQsQ0FBakI7QUFDQWhPLE9BQUt1TCxTQUFMLENBQWU3QyxNQUFmLENBQXVCLGtCQUF2Qjs7QUFFQSxNQUFJNEksY0FBSixFQUFxQjtBQUNqQmpOLFdBQU96RCxTQUFQLEdBQW1CeUQsT0FBT3pELFNBQVAsQ0FBaUJvTixPQUFqQixDQUEwQix1QkFBMUIsRUFBbUQsRUFBbkQsQ0FBbkI7QUFDQTNKLFdBQU9rSCxTQUFQLENBQWlCN0MsTUFBakIsQ0FBeUIsa0JBQXpCO0FBQ0g7O0FBRUQsTUFBSSxDQUFDbUksWUFBYTFSLFlBQWIsQ0FBTCxFQUFtQztBQUMvQjBSLGdCQUFhMVIsWUFBYixJQUE4QjJSLGVBQTlCO0FBQ0g7O0FBRUQsT0FBSyxJQUFJUyxJQUFULElBQWlCVixZQUFhMVIsWUFBYixDQUFqQixFQUErQztBQUMzQyxRQUFJNFIsb0JBQW9CUSxTQUFTLGNBQWpDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBRUQsUUFBSVYsWUFBYTFSLFlBQWIsRUFBNEIySyxjQUE1QixDQUE0Q3lILElBQTVDLENBQUosRUFBeUQ7QUFDckR2UixXQUFLdUwsU0FBTCxDQUFlN0MsTUFBZixDQUF1QixVQUFVNkksSUFBakM7O0FBRUEsVUFBSUQsY0FBSixFQUFxQjtBQUNqQmpOLGVBQU9rSCxTQUFQLENBQWlCN0MsTUFBakIsQ0FBeUIsVUFBVTZJLElBQW5DO0FBQ0g7O0FBRUQsVUFBSVYsWUFBYTFSLFlBQWIsRUFBNkJvUyxJQUE3QixDQUFKLEVBQTBDO0FBQ3RDSCxtQkFBVy9ULElBQVgsQ0FBaUIsVUFBVWtVLElBQTNCO0FBQ0g7QUFDSjtBQUNKOztBQUVELE1BQUksQ0FBQ1IsZ0JBQUQsSUFBcUJGLFlBQWExUixZQUFiLEVBQTRCMkssY0FBNUIsQ0FBNEMsY0FBNUMsQ0FBckIsSUFBcUYsQ0FBQytHLFlBQWExUixZQUFiLEVBQTRCZ1MsWUFBdEgsRUFBcUk7QUFDaklDLGVBQVcvVCxJQUFYLENBQWlCLGtCQUFqQjtBQUNIOztBQUVELE9BQUssSUFBSU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJcVUsV0FBV25VLE1BQS9CLEVBQXVDLEVBQUVGLENBQXpDLEVBQTZDO0FBQ3pDaUQsU0FBS3VMLFNBQUwsQ0FBZTZCLEdBQWYsQ0FBb0JnRSxXQUFZclUsQ0FBWixDQUFwQjs7QUFFQSxRQUFJdVUsY0FBSixFQUFxQjtBQUNqQmpOLGFBQU9rSCxTQUFQLENBQWlCNkIsR0FBakIsQ0FBc0JnRSxXQUFZclUsQ0FBWixDQUF0QjtBQUNIO0FBQ0o7QUFDSjs7QUFBQTtBQUdNLElBQU1xVCxRQUFRO0FBQ2pCeFEsT0FBSyxlQUFXO0FBQ1osV0FBT3lRLGFBQVA7QUFDSCxHQUhnQjtBQUtqQjlOLFdBQVMsaUJBQVVpUCxRQUFWLEVBQXFCO0FBQzFCbkIsb0JBQWdCbUIsUUFBaEI7QUFDSCxHQVBnQjs7QUFTakI7Ozs7Ozs7QUFPQWhFLE9BQUssYUFBVWEsS0FBVixFQUFpQitCLEtBQWpCLEVBQXdCalIsWUFBeEIsRUFBdUM7QUFDeEMsUUFBSSxDQUFDa1IsY0FBZWxSLFlBQWYsQ0FBTCxFQUFxQztBQUNqQ2tSLG9CQUFlbFIsWUFBZixJQUFnQ3lSLGNBQWV6UixZQUFmLENBQWhDO0FBQ0g7O0FBRUQsUUFBSWtSLGNBQWVsUixZQUFmLEVBQStCa1AsS0FBL0IsTUFBMkMrQixLQUEvQyxFQUF1RDtBQUNuRDtBQUNBO0FBQ0g7O0FBRUQsdUJBQU9qUixZQUFQO0FBRUFrUixrQkFBZWxSLFlBQWYsRUFBK0JrUCxLQUEvQixJQUF5QytCLEtBQXpDO0FBQ0g7QUE3QmdCLENBQWQ7O0FBaUNBLElBQU1FLE9BQU87QUFDaEIxUSxPQUFLLGVBQVc7QUFDWixXQUFPaVIsV0FBUDtBQUNIO0FBSGUsQ0FBYjs7O0FBT0EsU0FBU3BPLElBQVQsQ0FBZXNELE9BQWYsRUFBeUI7QUFDNUJnTCxxQkFBbUIsQ0FBQ2hMLFFBQVFLLGdCQUE1QjtBQUNBRCxpQkFBZUosUUFBUUksWUFBdkI7QUFDSDtBQUdEOzs7Ozs7O0FBS08sU0FBUzVELE9BQVQsQ0FBa0JpUCxRQUFsQixFQUE2QjtBQUNoQ1gsZ0JBQWNXLFFBQWQ7QUFDSDtBQUdEOzs7Ozs7Ozs7QUFPTyxTQUFTaEUsR0FBVCxDQUFjdEUsSUFBZCxFQUFvQnhFLEtBQXBCLEVBQTJCdkYsWUFBM0IsRUFBMEM7QUFDN0MscUJBQU9BLFlBQVA7QUFDQTBSLGNBQWExUixZQUFiLEVBQTZCK0osSUFBN0IsSUFBc0N4RSxLQUF0QztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TEQ7O0FBQUUsYUFBWTtBQUNiO0FBRUE7Ozs7Ozs7O0FBUUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7O0FBT0EsV0FBUzRCLFNBQVQsQ0FBbUJtTCxLQUFuQixFQUEwQjFMLE9BQTFCLEVBQW1DO0FBQ2xDLFFBQUkyTCxVQUFKO0FBRUEzTCxjQUFVQSxXQUFXLEVBQXJCO0FBRUE7Ozs7OztBQUtBLFNBQUs0TCxhQUFMLEdBQXFCLEtBQXJCO0FBR0E7Ozs7OztBQUtBLFNBQUtDLGtCQUFMLEdBQTBCLENBQTFCO0FBR0E7Ozs7OztBQUtBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFHQTs7Ozs7O0FBS0EsU0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUdBOzs7Ozs7QUFLQSxTQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBR0E7Ozs7OztBQUtBLFNBQUtDLG1CQUFMLEdBQTJCLENBQTNCO0FBR0E7Ozs7OztBQUtBLFNBQUtDLGFBQUwsR0FBcUJsTSxRQUFRa00sYUFBUixJQUF5QixFQUE5QztBQUdBOzs7Ozs7QUFLQSxTQUFLUixLQUFMLEdBQWFBLEtBQWI7QUFFQTs7Ozs7O0FBS0EsU0FBS1MsUUFBTCxHQUFnQm5NLFFBQVFtTSxRQUFSLElBQW9CLEdBQXBDO0FBRUE7Ozs7OztBQUtBLFNBQUtDLFVBQUwsR0FBa0JwTSxRQUFRb00sVUFBUixJQUFzQixHQUF4Qzs7QUFFQSxRQUFJN0wsVUFBVThMLFNBQVYsQ0FBb0JYLEtBQXBCLENBQUosRUFBZ0M7QUFDL0I7QUFDQSxLQXBGaUMsQ0FzRmxDOzs7QUFDQSxhQUFTWSxJQUFULENBQWNDLE1BQWQsRUFBc0JDLE9BQXRCLEVBQStCO0FBQzlCLGFBQU8sWUFBVztBQUFFLGVBQU9ELE9BQU90TyxLQUFQLENBQWF1TyxPQUFiLEVBQXNCdFUsU0FBdEIsQ0FBUDtBQUEwQyxPQUE5RDtBQUNBOztBQUdELFFBQUl1VSxVQUFVLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsY0FBdkIsRUFBdUMsYUFBdkMsRUFBc0QsWUFBdEQsRUFBb0UsZUFBcEUsQ0FBZDtBQUNBLFFBQUlELFVBQVUsSUFBZDs7QUFDQSxTQUFLLElBQUl4VixJQUFJLENBQVIsRUFBVzBWLElBQUlELFFBQVF2VixNQUE1QixFQUFvQ0YsSUFBSTBWLENBQXhDLEVBQTJDMVYsR0FBM0MsRUFBZ0Q7QUFDL0N3VixjQUFRQyxRQUFRelYsQ0FBUixDQUFSLElBQXNCc1YsS0FBS0UsUUFBUUMsUUFBUXpWLENBQVIsQ0FBUixDQUFMLEVBQTBCd1YsT0FBMUIsQ0FBdEI7QUFDQSxLQWhHaUMsQ0FrR2xDOzs7QUFDQSxRQUFJRyxlQUFKLEVBQXFCO0FBQ3BCakIsWUFBTXBMLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DLEtBQUtzTSxPQUF6QyxFQUFrRCxJQUFsRDtBQUNBbEIsWUFBTXBMLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DLEtBQUtzTSxPQUF6QyxFQUFrRCxJQUFsRDtBQUNBbEIsWUFBTXBMLGdCQUFOLENBQXVCLFNBQXZCLEVBQWtDLEtBQUtzTSxPQUF2QyxFQUFnRCxJQUFoRDtBQUNBOztBQUVEbEIsVUFBTXBMLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLEtBQUt1TSxPQUFyQyxFQUE4QyxJQUE5QztBQUNBbkIsVUFBTXBMLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDLEtBQUt3TSxZQUExQyxFQUF3RCxLQUF4RDtBQUNBcEIsVUFBTXBMLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DLEtBQUt5TSxXQUF6QyxFQUFzRCxLQUF0RDtBQUNBckIsVUFBTXBMLGdCQUFOLENBQXVCLFVBQXZCLEVBQW1DLEtBQUswTSxVQUF4QyxFQUFvRCxLQUFwRDtBQUNBdEIsVUFBTXBMLGdCQUFOLENBQXVCLGFBQXZCLEVBQXNDLEtBQUsyTSxhQUEzQyxFQUEwRCxLQUExRCxFQTdHa0MsQ0ErR2xDO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNuTyxNQUFNcEcsU0FBTixDQUFnQndVLHdCQUFyQixFQUErQztBQUM5Q3hCLFlBQU15QixtQkFBTixHQUE0QixVQUFTaEssSUFBVCxFQUFlaUssUUFBZixFQUF5QkMsT0FBekIsRUFBa0M7QUFDN0QsWUFBSUMsTUFBTUMsS0FBSzdVLFNBQUwsQ0FBZXlVLG1CQUF6Qjs7QUFDQSxZQUFJaEssU0FBUyxPQUFiLEVBQXNCO0FBQ3JCbUssY0FBSTFVLElBQUosQ0FBUzhTLEtBQVQsRUFBZ0J2SSxJQUFoQixFQUFzQmlLLFNBQVNJLFFBQVQsSUFBcUJKLFFBQTNDLEVBQXFEQyxPQUFyRDtBQUNBLFNBRkQsTUFFTztBQUNOQyxjQUFJMVUsSUFBSixDQUFTOFMsS0FBVCxFQUFnQnZJLElBQWhCLEVBQXNCaUssUUFBdEIsRUFBZ0NDLE9BQWhDO0FBQ0E7QUFDRCxPQVBEOztBQVNBM0IsWUFBTXBMLGdCQUFOLEdBQXlCLFVBQVM2QyxJQUFULEVBQWVpSyxRQUFmLEVBQXlCQyxPQUF6QixFQUFrQztBQUMxRCxZQUFJSSxNQUFNRixLQUFLN1UsU0FBTCxDQUFlNEgsZ0JBQXpCOztBQUNBLFlBQUk2QyxTQUFTLE9BQWIsRUFBc0I7QUFDckJzSyxjQUFJN1UsSUFBSixDQUFTOFMsS0FBVCxFQUFnQnZJLElBQWhCLEVBQXNCaUssU0FBU0ksUUFBVCxLQUFzQkosU0FBU0ksUUFBVCxHQUFvQixVQUFTRSxLQUFULEVBQWdCO0FBQy9FLGdCQUFJLENBQUNBLE1BQU1DLGtCQUFYLEVBQStCO0FBQzlCUCx1QkFBU00sS0FBVDtBQUNBO0FBQ0QsV0FKcUIsQ0FBdEIsRUFJSUwsT0FKSjtBQUtBLFNBTkQsTUFNTztBQUNOSSxjQUFJN1UsSUFBSixDQUFTOFMsS0FBVCxFQUFnQnZJLElBQWhCLEVBQXNCaUssUUFBdEIsRUFBZ0NDLE9BQWhDO0FBQ0E7QUFDRCxPQVhEO0FBWUEsS0F4SWlDLENBMElsQztBQUNBO0FBQ0E7OztBQUNBLFFBQUksT0FBTzNCLE1BQU1rQyxPQUFiLEtBQXlCLFVBQTdCLEVBQXlDO0FBRXhDO0FBQ0E7QUFDQWpDLG1CQUFhRCxNQUFNa0MsT0FBbkI7QUFDQWxDLFlBQU1wTCxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFTb04sS0FBVCxFQUFnQjtBQUMvQy9CLG1CQUFXK0IsS0FBWDtBQUNBLE9BRkQsRUFFRyxLQUZIO0FBR0FoQyxZQUFNa0MsT0FBTixHQUFnQixJQUFoQjtBQUNBO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLE1BQUlDLHVCQUF1QkMsVUFBVUMsU0FBVixDQUFvQmpXLE9BQXBCLENBQTRCLGVBQTVCLEtBQWdELENBQTNFO0FBRUE7Ozs7OztBQUtBLE1BQUk2VSxrQkFBa0JtQixVQUFVQyxTQUFWLENBQW9CalcsT0FBcEIsQ0FBNEIsU0FBNUIsSUFBeUMsQ0FBekMsSUFBOEMsQ0FBQytWLG9CQUFyRTtBQUdBOzs7Ozs7QUFLQSxNQUFJRyxjQUFjLGlCQUFpQjlRLElBQWpCLENBQXNCNFEsVUFBVUMsU0FBaEMsS0FBOEMsQ0FBQ0Ysb0JBQWpFO0FBR0E7Ozs7OztBQUtBLE1BQUlJLGVBQWVELGVBQWdCLGVBQUQsQ0FBa0I5USxJQUFsQixDQUF1QjRRLFVBQVVDLFNBQWpDLENBQWxDO0FBR0E7Ozs7OztBQUtBLE1BQUlHLDJCQUEyQkYsZUFBZ0IsYUFBRCxDQUFnQjlRLElBQWhCLENBQXFCNFEsVUFBVUMsU0FBL0IsQ0FBOUM7QUFFQTs7Ozs7O0FBS0EsTUFBSUksdUJBQXVCTCxVQUFVQyxTQUFWLENBQW9CalcsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FBakU7QUFFQTs7Ozs7OztBQU1BeUksWUFBVTdILFNBQVYsQ0FBb0IwVixVQUFwQixHQUFpQyxVQUFTbEosTUFBVCxFQUFpQjtBQUNqRCxZQUFRQSxPQUFPNkQsUUFBUCxDQUFnQnJGLFdBQWhCLEVBQVI7QUFFQTtBQUNBLFdBQUssUUFBTDtBQUNBLFdBQUssUUFBTDtBQUNBLFdBQUssVUFBTDtBQUNDLFlBQUl3QixPQUFPbUosUUFBWCxFQUFxQjtBQUNwQixpQkFBTyxJQUFQO0FBQ0E7O0FBRUQ7O0FBQ0QsV0FBSyxPQUFMO0FBRUM7QUFDQSxZQUFLTCxlQUFlOUksT0FBTy9CLElBQVAsS0FBZ0IsTUFBaEMsSUFBMkMrQixPQUFPbUosUUFBdEQsRUFBZ0U7QUFDL0QsaUJBQU8sSUFBUDtBQUNBOztBQUVEOztBQUNELFdBQUssT0FBTDtBQUNBLFdBQUssUUFBTCxDQXBCQSxDQW9CZTs7QUFDZixXQUFLLE9BQUw7QUFDQyxlQUFPLElBQVA7QUF0QkQ7O0FBeUJBLFdBQVEsZ0JBQUQsQ0FBbUJuUixJQUFuQixDQUF3QmdJLE9BQU9ySyxTQUEvQixDQUFQO0FBQ0EsR0EzQkQ7QUE4QkE7Ozs7Ozs7O0FBTUEwRixZQUFVN0gsU0FBVixDQUFvQjRWLFVBQXBCLEdBQWlDLFVBQVNwSixNQUFULEVBQWlCO0FBQ2pELFlBQVFBLE9BQU82RCxRQUFQLENBQWdCckYsV0FBaEIsRUFBUjtBQUNBLFdBQUssVUFBTDtBQUNDLGVBQU8sSUFBUDs7QUFDRCxXQUFLLFFBQUw7QUFDQyxlQUFPLENBQUNpSixlQUFSOztBQUNELFdBQUssT0FBTDtBQUNDLGdCQUFRekgsT0FBTy9CLElBQWY7QUFDQSxlQUFLLFFBQUw7QUFDQSxlQUFLLFVBQUw7QUFDQSxlQUFLLE1BQUw7QUFDQSxlQUFLLE9BQUw7QUFDQSxlQUFLLE9BQUw7QUFDQSxlQUFLLFFBQUw7QUFDQyxtQkFBTyxLQUFQO0FBUEQsU0FERCxDQVdDOzs7QUFDQSxlQUFPLENBQUMrQixPQUFPbUosUUFBUixJQUFvQixDQUFDbkosT0FBT3FKLFFBQW5DOztBQUNEO0FBQ0MsZUFBUSxnQkFBRCxDQUFtQnJSLElBQW5CLENBQXdCZ0ksT0FBT3JLLFNBQS9CLENBQVA7QUFuQkQ7QUFxQkEsR0F0QkQ7QUF5QkE7Ozs7Ozs7O0FBTUEwRixZQUFVN0gsU0FBVixDQUFvQjhWLFNBQXBCLEdBQWdDLFVBQVMxQyxhQUFULEVBQXdCNEIsS0FBeEIsRUFBK0I7QUFDOUQsUUFBSWUsVUFBSixFQUFnQkMsS0FBaEIsQ0FEOEQsQ0FHOUQ7O0FBQ0EsUUFBSXhVLFNBQVNnUCxhQUFULElBQTBCaFAsU0FBU2dQLGFBQVQsS0FBMkI0QyxhQUF6RCxFQUF3RTtBQUN2RTVSLGVBQVNnUCxhQUFULENBQXVCeUYsSUFBdkI7QUFDQTs7QUFFREQsWUFBUWhCLE1BQU1rQixjQUFOLENBQXFCLENBQXJCLENBQVIsQ0FSOEQsQ0FVOUQ7O0FBQ0FILGlCQUFhdlUsU0FBUzJVLFdBQVQsQ0FBcUIsYUFBckIsQ0FBYjtBQUNBSixlQUFXSyxjQUFYLENBQTBCLEtBQUtDLGtCQUFMLENBQXdCakQsYUFBeEIsQ0FBMUIsRUFBa0UsSUFBbEUsRUFBd0UsSUFBeEUsRUFBOEU5VCxNQUE5RSxFQUFzRixDQUF0RixFQUF5RjBXLE1BQU1NLE9BQS9GLEVBQXdHTixNQUFNTyxPQUE5RyxFQUF1SFAsTUFBTVEsT0FBN0gsRUFBc0lSLE1BQU1TLE9BQTVJLEVBQXFKLEtBQXJKLEVBQTRKLEtBQTVKLEVBQW1LLEtBQW5LLEVBQTBLLEtBQTFLLEVBQWlMLENBQWpMLEVBQW9MLElBQXBMO0FBQ0FWLGVBQVdXLG1CQUFYLEdBQWlDLElBQWpDO0FBQ0F0RCxrQkFBY2pOLGFBQWQsQ0FBNEI0UCxVQUE1QjtBQUNBLEdBZkQ7O0FBaUJBbE8sWUFBVTdILFNBQVYsQ0FBb0JxVyxrQkFBcEIsR0FBeUMsVUFBU2pELGFBQVQsRUFBd0I7QUFFaEU7QUFDQSxRQUFJYSxtQkFBbUJiLGNBQWN1RCxPQUFkLENBQXNCM0wsV0FBdEIsT0FBd0MsUUFBL0QsRUFBeUU7QUFDeEUsYUFBTyxXQUFQO0FBQ0E7O0FBRUQsV0FBTyxPQUFQO0FBQ0EsR0FSRDtBQVdBOzs7OztBQUdBbkQsWUFBVTdILFNBQVYsQ0FBb0JzUSxLQUFwQixHQUE0QixVQUFTOEMsYUFBVCxFQUF3QjtBQUNuRCxRQUFJNVUsTUFBSixDQURtRCxDQUduRDs7QUFDQSxRQUFJOFcsZUFBZWxDLGNBQWN3RCxpQkFBN0IsSUFBa0R4RCxjQUFjM0ksSUFBZCxDQUFtQnJMLE9BQW5CLENBQTJCLE1BQTNCLE1BQXVDLENBQXpGLElBQThGZ1UsY0FBYzNJLElBQWQsS0FBdUIsTUFBckgsSUFBK0gySSxjQUFjM0ksSUFBZCxLQUF1QixPQUExSixFQUFtSztBQUNsS2pNLGVBQVM0VSxjQUFjbk4sS0FBZCxDQUFvQnpILE1BQTdCO0FBQ0E0VSxvQkFBY3dELGlCQUFkLENBQWdDcFksTUFBaEMsRUFBd0NBLE1BQXhDO0FBQ0EsS0FIRCxNQUdPO0FBQ040VSxvQkFBYzlDLEtBQWQ7QUFDQTtBQUNELEdBVkQ7QUFhQTs7Ozs7OztBQUtBekksWUFBVTdILFNBQVYsQ0FBb0I2VyxrQkFBcEIsR0FBeUMsVUFBU3pELGFBQVQsRUFBd0I7QUFDaEUsUUFBSTBELFlBQUosRUFBa0JDLGFBQWxCO0FBRUFELG1CQUFlMUQsY0FBYzRELHFCQUE3QixDQUhnRSxDQUtoRTtBQUNBOztBQUNBLFFBQUksQ0FBQ0YsWUFBRCxJQUFpQixDQUFDQSxhQUFhRyxRQUFiLENBQXNCN0QsYUFBdEIsQ0FBdEIsRUFBNEQ7QUFDM0QyRCxzQkFBZ0IzRCxhQUFoQjs7QUFDQSxTQUFHO0FBQ0YsWUFBSTJELGNBQWNHLFlBQWQsR0FBNkJILGNBQWNJLFlBQS9DLEVBQTZEO0FBQzVETCx5QkFBZUMsYUFBZjtBQUNBM0Qsd0JBQWM0RCxxQkFBZCxHQUFzQ0QsYUFBdEM7QUFDQTtBQUNBOztBQUVEQSx3QkFBZ0JBLGNBQWNBLGFBQTlCO0FBQ0EsT0FSRCxRQVFTQSxhQVJUO0FBU0EsS0FsQitELENBb0JoRTs7O0FBQ0EsUUFBSUQsWUFBSixFQUFrQjtBQUNqQkEsbUJBQWFNLHNCQUFiLEdBQXNDTixhQUFhL04sU0FBbkQ7QUFDQTtBQUNELEdBeEJEO0FBMkJBOzs7Ozs7QUFJQWxCLFlBQVU3SCxTQUFWLENBQW9CcVgsK0JBQXBCLEdBQXNELFVBQVNDLFdBQVQsRUFBc0I7QUFFM0U7QUFDQSxRQUFJQSxZQUFZL0ksUUFBWixLQUF5QnNHLEtBQUswQyxTQUFsQyxFQUE2QztBQUM1QyxhQUFPRCxZQUFZclYsVUFBbkI7QUFDQTs7QUFFRCxXQUFPcVYsV0FBUDtBQUNBLEdBUkQ7QUFXQTs7Ozs7Ozs7QUFNQXpQLFlBQVU3SCxTQUFWLENBQW9Cb1UsWUFBcEIsR0FBbUMsVUFBU1ksS0FBVCxFQUFnQjtBQUNsRCxRQUFJNUIsYUFBSixFQUFtQjRDLEtBQW5CLEVBQTBCaEcsU0FBMUIsQ0FEa0QsQ0FHbEQ7O0FBQ0EsUUFBSWdGLE1BQU13QyxhQUFOLENBQW9CaFosTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbkMsYUFBTyxJQUFQO0FBQ0E7O0FBRUQ0VSxvQkFBZ0IsS0FBS2lFLCtCQUFMLENBQXFDckMsTUFBTXhJLE1BQTNDLENBQWhCO0FBQ0F3SixZQUFRaEIsTUFBTXdDLGFBQU4sQ0FBb0IsQ0FBcEIsQ0FBUjs7QUFFQSxRQUFJbEMsV0FBSixFQUFpQjtBQUVoQjtBQUNBdEYsa0JBQVkxUSxPQUFPMlEsWUFBUCxFQUFaOztBQUNBLFVBQUlELFVBQVV5SCxVQUFWLElBQXdCLENBQUN6SCxVQUFVMEgsV0FBdkMsRUFBb0Q7QUFDbkQsZUFBTyxJQUFQO0FBQ0E7O0FBRUQsVUFBSSxDQUFDbkMsWUFBTCxFQUFtQjtBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSVMsTUFBTTJCLFVBQU4sSUFBb0IzQixNQUFNMkIsVUFBTixLQUFxQixLQUFLcEUsbUJBQWxELEVBQXVFO0FBQ3RFeUIsZ0JBQU0xRixjQUFOO0FBQ0EsaUJBQU8sS0FBUDtBQUNBOztBQUVELGFBQUtpRSxtQkFBTCxHQUEyQnlDLE1BQU0yQixVQUFqQyxDQWZrQixDQWlCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGFBQUtkLGtCQUFMLENBQXdCekQsYUFBeEI7QUFDQTtBQUNEOztBQUVELFNBQUtGLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQjZCLE1BQU00QyxTQUFoQztBQUNBLFNBQUt4RSxhQUFMLEdBQXFCQSxhQUFyQjtBQUVBLFNBQUtDLFdBQUwsR0FBbUIyQyxNQUFNNkIsS0FBekI7QUFDQSxTQUFLdkUsV0FBTCxHQUFtQjBDLE1BQU04QixLQUF6QixDQW5Ea0QsQ0FxRGxEOztBQUNBLFFBQUs5QyxNQUFNNEMsU0FBTixHQUFrQixLQUFLRyxhQUF4QixHQUF5QyxLQUFLdEUsUUFBbEQsRUFBNEQ7QUFDM0R1QixZQUFNMUYsY0FBTjtBQUNBOztBQUVELFdBQU8sSUFBUDtBQUNBLEdBM0REO0FBOERBOzs7Ozs7OztBQU1BekgsWUFBVTdILFNBQVYsQ0FBb0JnWSxhQUFwQixHQUFvQyxVQUFTaEQsS0FBVCxFQUFnQjtBQUNuRCxRQUFJZ0IsUUFBUWhCLE1BQU1rQixjQUFOLENBQXFCLENBQXJCLENBQVo7QUFBQSxRQUFxQytCLFdBQVcsS0FBS3pFLGFBQXJEOztBQUVBLFFBQUk1UyxLQUFLc1gsR0FBTCxDQUFTbEMsTUFBTTZCLEtBQU4sR0FBYyxLQUFLeEUsV0FBNUIsSUFBMkM0RSxRQUEzQyxJQUF1RHJYLEtBQUtzWCxHQUFMLENBQVNsQyxNQUFNOEIsS0FBTixHQUFjLEtBQUt4RSxXQUE1QixJQUEyQzJFLFFBQXRHLEVBQWdIO0FBQy9HLGFBQU8sSUFBUDtBQUNBOztBQUVELFdBQU8sS0FBUDtBQUNBLEdBUkQ7QUFXQTs7Ozs7Ozs7QUFNQXBRLFlBQVU3SCxTQUFWLENBQW9CcVUsV0FBcEIsR0FBa0MsVUFBU1csS0FBVCxFQUFnQjtBQUNqRCxRQUFJLENBQUMsS0FBSzlCLGFBQVYsRUFBeUI7QUFDeEIsYUFBTyxJQUFQO0FBQ0EsS0FIZ0QsQ0FLakQ7OztBQUNBLFFBQUksS0FBS0UsYUFBTCxLQUF1QixLQUFLaUUsK0JBQUwsQ0FBcUNyQyxNQUFNeEksTUFBM0MsQ0FBdkIsSUFBNkUsS0FBS3dMLGFBQUwsQ0FBbUJoRCxLQUFuQixDQUFqRixFQUE0RztBQUMzRyxXQUFLOUIsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFdBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDQTs7QUFFRCxXQUFPLElBQVA7QUFDQSxHQVpEO0FBZUE7Ozs7Ozs7O0FBTUF2TCxZQUFVN0gsU0FBVixDQUFvQm1ZLFdBQXBCLEdBQWtDLFVBQVNDLFlBQVQsRUFBdUI7QUFFeEQ7QUFDQSxRQUFJQSxhQUFhQyxPQUFiLEtBQXlCcFgsU0FBN0IsRUFBd0M7QUFDdkMsYUFBT21YLGFBQWFDLE9BQXBCO0FBQ0EsS0FMdUQsQ0FPeEQ7OztBQUNBLFFBQUlELGFBQWFFLE9BQWpCLEVBQTBCO0FBQ3pCLGFBQU85VyxTQUFTRyxjQUFULENBQXdCeVcsYUFBYUUsT0FBckMsQ0FBUDtBQUNBLEtBVnVELENBWXhEO0FBQ0E7OztBQUNBLFdBQU9GLGFBQWFHLGFBQWIsQ0FBMkIscUZBQTNCLENBQVA7QUFDQSxHQWZEO0FBa0JBOzs7Ozs7OztBQU1BMVEsWUFBVTdILFNBQVYsQ0FBb0JzVSxVQUFwQixHQUFpQyxVQUFTVSxLQUFULEVBQWdCO0FBQ2hELFFBQUl3RCxVQUFKO0FBQUEsUUFBZ0JyRixrQkFBaEI7QUFBQSxRQUFvQ3NGLGFBQXBDO0FBQUEsUUFBbUQzQixZQUFuRDtBQUFBLFFBQWlFZCxLQUFqRTtBQUFBLFFBQXdFNUMsZ0JBQWdCLEtBQUtBLGFBQTdGOztBQUVBLFFBQUksQ0FBQyxLQUFLRixhQUFWLEVBQXlCO0FBQ3hCLGFBQU8sSUFBUDtBQUNBLEtBTCtDLENBT2hEOzs7QUFDQSxRQUFLOEIsTUFBTTRDLFNBQU4sR0FBa0IsS0FBS0csYUFBeEIsR0FBeUMsS0FBS3RFLFFBQWxELEVBQTREO0FBQzNELFdBQUtpRixlQUFMLEdBQXVCLElBQXZCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7O0FBRUQsUUFBSzFELE1BQU00QyxTQUFOLEdBQWtCLEtBQUt6RSxrQkFBeEIsR0FBOEMsS0FBS08sVUFBdkQsRUFBbUU7QUFDbEUsYUFBTyxJQUFQO0FBQ0EsS0FmK0MsQ0FpQmhEOzs7QUFDQSxTQUFLZ0YsZUFBTCxHQUF1QixLQUF2QjtBQUVBLFNBQUtYLGFBQUwsR0FBcUIvQyxNQUFNNEMsU0FBM0I7QUFFQXpFLHlCQUFxQixLQUFLQSxrQkFBMUI7QUFDQSxTQUFLRCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsQ0FBMUIsQ0F4QmdELENBMEJoRDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJcUMsd0JBQUosRUFBOEI7QUFDN0JRLGNBQVFoQixNQUFNa0IsY0FBTixDQUFxQixDQUFyQixDQUFSLENBRDZCLENBRzdCOztBQUNBOUMsc0JBQWdCNVIsU0FBU21YLGdCQUFULENBQTBCM0MsTUFBTTZCLEtBQU4sR0FBY3ZZLE9BQU9zWixXQUEvQyxFQUE0RDVDLE1BQU04QixLQUFOLEdBQWN4WSxPQUFPd0osV0FBakYsS0FBaUdzSyxhQUFqSDtBQUNBQSxvQkFBYzRELHFCQUFkLEdBQXNDLEtBQUs1RCxhQUFMLENBQW1CNEQscUJBQXpEO0FBQ0E7O0FBRUR5QixvQkFBZ0JyRixjQUFjdUQsT0FBZCxDQUFzQjNMLFdBQXRCLEVBQWhCOztBQUNBLFFBQUl5TixrQkFBa0IsT0FBdEIsRUFBK0I7QUFDOUJELG1CQUFhLEtBQUtMLFdBQUwsQ0FBaUIvRSxhQUFqQixDQUFiOztBQUNBLFVBQUlvRixVQUFKLEVBQWdCO0FBQ2YsYUFBS2xJLEtBQUwsQ0FBVzhDLGFBQVg7O0FBQ0EsWUFBSWEsZUFBSixFQUFxQjtBQUNwQixpQkFBTyxLQUFQO0FBQ0E7O0FBRURiLHdCQUFnQm9GLFVBQWhCO0FBQ0E7QUFDRCxLQVZELE1BVU8sSUFBSSxLQUFLNUMsVUFBTCxDQUFnQnhDLGFBQWhCLENBQUosRUFBb0M7QUFFMUM7QUFDQTtBQUNBLFVBQUs0QixNQUFNNEMsU0FBTixHQUFrQnpFLGtCQUFuQixHQUF5QyxHQUF6QyxJQUFpRG1DLGVBQWVoVyxPQUFPME8sR0FBUCxLQUFlMU8sTUFBOUIsSUFBd0NtWixrQkFBa0IsT0FBL0csRUFBeUg7QUFDeEgsYUFBS3JGLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxlQUFPLEtBQVA7QUFDQTs7QUFFRCxXQUFLOUMsS0FBTCxDQUFXOEMsYUFBWDtBQUNBLFdBQUswQyxTQUFMLENBQWUxQyxhQUFmLEVBQThCNEIsS0FBOUIsRUFWMEMsQ0FZMUM7QUFDQTs7QUFDQSxVQUFJLENBQUNNLFdBQUQsSUFBZ0JtRCxrQkFBa0IsUUFBdEMsRUFBZ0Q7QUFDL0MsYUFBS3JGLGFBQUwsR0FBcUIsSUFBckI7QUFDQTRCLGNBQU0xRixjQUFOO0FBQ0E7O0FBRUQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSWdHLGVBQWUsQ0FBQ0MsWUFBcEIsRUFBa0M7QUFFakM7QUFDQTtBQUNBdUIscUJBQWUxRCxjQUFjNEQscUJBQTdCOztBQUNBLFVBQUlGLGdCQUFnQkEsYUFBYU0sc0JBQWIsS0FBd0NOLGFBQWEvTixTQUF6RSxFQUFvRjtBQUNuRixlQUFPLElBQVA7QUFDQTtBQUNELEtBL0UrQyxDQWlGaEQ7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUsyTSxVQUFMLENBQWdCdEMsYUFBaEIsQ0FBTCxFQUFxQztBQUNwQzRCLFlBQU0xRixjQUFOO0FBQ0EsV0FBS3dHLFNBQUwsQ0FBZTFDLGFBQWYsRUFBOEI0QixLQUE5QjtBQUNBOztBQUVELFdBQU8sS0FBUDtBQUNBLEdBekZEO0FBNEZBOzs7Ozs7O0FBS0FuTixZQUFVN0gsU0FBVixDQUFvQnVVLGFBQXBCLEdBQW9DLFlBQVc7QUFDOUMsU0FBS3JCLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLRSxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsR0FIRDtBQU1BOzs7Ozs7OztBQU1BdkwsWUFBVTdILFNBQVYsQ0FBb0JrVSxPQUFwQixHQUE4QixVQUFTYyxLQUFULEVBQWdCO0FBRTdDO0FBQ0EsUUFBSSxDQUFDLEtBQUs1QixhQUFWLEVBQXlCO0FBQ3hCLGFBQU8sSUFBUDtBQUNBOztBQUVELFFBQUk0QixNQUFNMEIsbUJBQVYsRUFBK0I7QUFDOUIsYUFBTyxJQUFQO0FBQ0EsS0FUNEMsQ0FXN0M7OztBQUNBLFFBQUksQ0FBQzFCLE1BQU02RCxVQUFYLEVBQXVCO0FBQ3RCLGFBQU8sSUFBUDtBQUNBLEtBZDRDLENBZ0I3QztBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxLQUFLbkQsVUFBTCxDQUFnQixLQUFLdEMsYUFBckIsQ0FBRCxJQUF3QyxLQUFLc0YsZUFBakQsRUFBa0U7QUFFakU7QUFDQSxVQUFJMUQsTUFBTVIsd0JBQVYsRUFBb0M7QUFDbkNRLGNBQU1SLHdCQUFOO0FBQ0EsT0FGRCxNQUVPO0FBRU47QUFDQVEsY0FBTUMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQSxPQVRnRSxDQVdqRTs7O0FBQ0FELFlBQU16RSxlQUFOO0FBQ0F5RSxZQUFNMUYsY0FBTjtBQUVBLGFBQU8sS0FBUDtBQUNBLEtBbkM0QyxDQXFDN0M7OztBQUNBLFdBQU8sSUFBUDtBQUNBLEdBdkNEO0FBMENBOzs7Ozs7Ozs7O0FBUUF6SCxZQUFVN0gsU0FBVixDQUFvQm1VLE9BQXBCLEdBQThCLFVBQVNhLEtBQVQsRUFBZ0I7QUFDN0MsUUFBSThELFNBQUosQ0FENkMsQ0FHN0M7O0FBQ0EsUUFBSSxLQUFLNUYsYUFBVCxFQUF3QjtBQUN2QixXQUFLRSxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0YsYUFBTCxHQUFxQixLQUFyQjtBQUNBLGFBQU8sSUFBUDtBQUNBLEtBUjRDLENBVTdDOzs7QUFDQSxRQUFJOEIsTUFBTXhJLE1BQU4sQ0FBYS9CLElBQWIsS0FBc0IsUUFBdEIsSUFBa0N1SyxNQUFNdkYsTUFBTixLQUFpQixDQUF2RCxFQUEwRDtBQUN6RCxhQUFPLElBQVA7QUFDQTs7QUFFRHFKLGdCQUFZLEtBQUs1RSxPQUFMLENBQWFjLEtBQWIsQ0FBWixDQWY2QyxDQWlCN0M7O0FBQ0EsUUFBSSxDQUFDOEQsU0FBTCxFQUFnQjtBQUNmLFdBQUsxRixhQUFMLEdBQXFCLElBQXJCO0FBQ0EsS0FwQjRDLENBc0I3Qzs7O0FBQ0EsV0FBTzBGLFNBQVA7QUFDQSxHQXhCRDtBQTJCQTs7Ozs7OztBQUtBalIsWUFBVTdILFNBQVYsQ0FBb0IrWSxPQUFwQixHQUE4QixZQUFXO0FBQ3hDLFFBQUkvRixRQUFRLEtBQUtBLEtBQWpCOztBQUVBLFFBQUlpQixlQUFKLEVBQXFCO0FBQ3BCakIsWUFBTXlCLG1CQUFOLENBQTBCLFdBQTFCLEVBQXVDLEtBQUtQLE9BQTVDLEVBQXFELElBQXJEO0FBQ0FsQixZQUFNeUIsbUJBQU4sQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS1AsT0FBNUMsRUFBcUQsSUFBckQ7QUFDQWxCLFlBQU15QixtQkFBTixDQUEwQixTQUExQixFQUFxQyxLQUFLUCxPQUExQyxFQUFtRCxJQUFuRDtBQUNBOztBQUVEbEIsVUFBTXlCLG1CQUFOLENBQTBCLE9BQTFCLEVBQW1DLEtBQUtOLE9BQXhDLEVBQWlELElBQWpEO0FBQ0FuQixVQUFNeUIsbUJBQU4sQ0FBMEIsWUFBMUIsRUFBd0MsS0FBS0wsWUFBN0MsRUFBMkQsS0FBM0Q7QUFDQXBCLFVBQU15QixtQkFBTixDQUEwQixXQUExQixFQUF1QyxLQUFLSixXQUE1QyxFQUF5RCxLQUF6RDtBQUNBckIsVUFBTXlCLG1CQUFOLENBQTBCLFVBQTFCLEVBQXNDLEtBQUtILFVBQTNDLEVBQXVELEtBQXZEO0FBQ0F0QixVQUFNeUIsbUJBQU4sQ0FBMEIsYUFBMUIsRUFBeUMsS0FBS0YsYUFBOUMsRUFBNkQsS0FBN0Q7QUFDQSxHQWREO0FBaUJBOzs7Ozs7O0FBS0ExTSxZQUFVOEwsU0FBVixHQUFzQixVQUFTWCxLQUFULEVBQWdCO0FBQ3JDLFFBQUlnRyxZQUFKO0FBQ0EsUUFBSUMsYUFBSjtBQUNBLFFBQUlDLGlCQUFKO0FBQ0EsUUFBSUMsY0FBSixDQUpxQyxDQU1yQzs7QUFDQSxRQUFJLE9BQU83WixPQUFPOFosWUFBZCxLQUErQixXQUFuQyxFQUFnRDtBQUMvQyxhQUFPLElBQVA7QUFDQSxLQVRvQyxDQVdyQzs7O0FBQ0FILG9CQUFnQixDQUFDLENBQUMsbUJBQW1CcE8sSUFBbkIsQ0FBd0J1SyxVQUFVQyxTQUFsQyxLQUFnRCxHQUFFLENBQUYsQ0FBakQsRUFBdUQsQ0FBdkQsQ0FBakI7O0FBRUEsUUFBSTRELGFBQUosRUFBbUI7QUFFbEIsVUFBSWhGLGVBQUosRUFBcUI7QUFDcEIrRSx1QkFBZXhYLFNBQVMrVyxhQUFULENBQXVCLHFCQUF2QixDQUFmOztBQUVBLFlBQUlTLFlBQUosRUFBa0I7QUFDakI7QUFDQSxjQUFJQSxhQUFhSyxPQUFiLENBQXFCamEsT0FBckIsQ0FBNkIsa0JBQTdCLE1BQXFELENBQUMsQ0FBMUQsRUFBNkQ7QUFDNUQsbUJBQU8sSUFBUDtBQUNBLFdBSmdCLENBS2pCOzs7QUFDQSxjQUFJNlosZ0JBQWdCLEVBQWhCLElBQXNCelgsU0FBU29ILGVBQVQsQ0FBeUIwUSxXQUF6QixJQUF3Q2hhLE9BQU9pYSxVQUF6RSxFQUFxRjtBQUNwRixtQkFBTyxJQUFQO0FBQ0E7QUFDRCxTQVptQixDQWNyQjs7QUFDQyxPQWZELE1BZU87QUFDTixlQUFPLElBQVA7QUFDQTtBQUNEOztBQUVELFFBQUk5RCxvQkFBSixFQUEwQjtBQUN6QnlELDBCQUFvQjlELFVBQVVDLFNBQVYsQ0FBb0JtRSxLQUFwQixDQUEwQiw2QkFBMUIsQ0FBcEIsQ0FEeUIsQ0FHekI7QUFDQTs7QUFDQSxVQUFJTixrQkFBa0IsQ0FBbEIsS0FBd0IsRUFBeEIsSUFBOEJBLGtCQUFrQixDQUFsQixLQUF3QixDQUExRCxFQUE2RDtBQUM1REYsdUJBQWV4WCxTQUFTK1csYUFBVCxDQUF1QixxQkFBdkIsQ0FBZjs7QUFFQSxZQUFJUyxZQUFKLEVBQWtCO0FBQ2pCO0FBQ0EsY0FBSUEsYUFBYUssT0FBYixDQUFxQmphLE9BQXJCLENBQTZCLGtCQUE3QixNQUFxRCxDQUFDLENBQTFELEVBQTZEO0FBQzVELG1CQUFPLElBQVA7QUFDQSxXQUpnQixDQUtqQjs7O0FBQ0EsY0FBSW9DLFNBQVNvSCxlQUFULENBQXlCMFEsV0FBekIsSUFBd0NoYSxPQUFPaWEsVUFBbkQsRUFBK0Q7QUFDOUQsbUJBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNELEtBdkRvQyxDQXlEckM7OztBQUNBLFFBQUl2RyxNQUFNNUYsS0FBTixDQUFZcU0sYUFBWixLQUE4QixNQUE5QixJQUF3Q3pHLE1BQU01RixLQUFOLENBQVlzTSxXQUFaLEtBQTRCLGNBQXhFLEVBQXdGO0FBQ3ZGLGFBQU8sSUFBUDtBQUNBLEtBNURvQyxDQThEckM7OztBQUNBUCxxQkFBaUIsQ0FBQyxDQUFDLG9CQUFvQnRPLElBQXBCLENBQXlCdUssVUFBVUMsU0FBbkMsS0FBaUQsR0FBRSxDQUFGLENBQWxELEVBQXdELENBQXhELENBQWxCOztBQUVBLFFBQUk4RCxrQkFBa0IsRUFBdEIsRUFBMEI7QUFDekI7QUFFQUgscUJBQWV4WCxTQUFTK1csYUFBVCxDQUF1QixxQkFBdkIsQ0FBZjs7QUFDQSxVQUFJUyxpQkFBaUJBLGFBQWFLLE9BQWIsQ0FBcUJqYSxPQUFyQixDQUE2QixrQkFBN0IsTUFBcUQsQ0FBQyxDQUF0RCxJQUEyRG9DLFNBQVNvSCxlQUFULENBQXlCMFEsV0FBekIsSUFBd0NoYSxPQUFPaWEsVUFBM0gsQ0FBSixFQUE0STtBQUMzSSxlQUFPLElBQVA7QUFDQTtBQUNELEtBeEVvQyxDQTBFckM7QUFDQTs7O0FBQ0EsUUFBSXZHLE1BQU01RixLQUFOLENBQVlzTSxXQUFaLEtBQTRCLE1BQTVCLElBQXNDMUcsTUFBTTVGLEtBQU4sQ0FBWXNNLFdBQVosS0FBNEIsY0FBdEUsRUFBc0Y7QUFDckYsYUFBTyxJQUFQO0FBQ0E7O0FBRUQsV0FBTyxLQUFQO0FBQ0EsR0FqRkQ7QUFvRkE7Ozs7Ozs7O0FBTUE3UixZQUFVQyxNQUFWLEdBQW1CLFVBQVNrTCxLQUFULEVBQWdCMUwsT0FBaEIsRUFBeUI7QUFDM0MsV0FBTyxJQUFJTyxTQUFKLENBQWNtTCxLQUFkLEVBQXFCMUwsT0FBckIsQ0FBUDtBQUNBLEdBRkQ7O0FBS0EsTUFBSSxlQUFrQixVQUFsQixJQUFnQyxRQUFPLGdHQUFQLE1BQXNCLFFBQXRELElBQWtFLGdHQUF0RSxFQUFrRjtBQUVqRjtBQUNBcVMsSUFBQSxtQ0FBTyxZQUFXO0FBQ2pCLGFBQU85UixTQUFQO0FBQ0EsS0FGRDtBQUFBO0FBR0EsR0FORCxNQU1PLElBQUksT0FBTytSLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9DLE9BQTVDLEVBQXFEO0FBQzNERCxXQUFPQyxPQUFQLEdBQWlCaFMsVUFBVUMsTUFBM0I7QUFDQThSLFdBQU9DLE9BQVAsQ0FBZWhTLFNBQWYsR0FBMkJBLFNBQTNCO0FBQ0EsR0FITSxNQUdBO0FBQ052SSxXQUFPdUksU0FBUCxHQUFtQkEsU0FBbkI7QUFDQTtBQUNELENBeDBCQyxHQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUQ7O0FBQ0E7O0FBRUE7O0FBS0E7O0FBT0E7QUFDQSxJQUFNaVMsZ0JBQWdCLENBQUV0WSxTQUFTRyxjQUFULENBQXlCLFNBQXpCLENBQUYsQ0FBdEIsQyxDQUVBOztBQUNBLElBQU1vWSxnQkFBZ0J2WSxTQUFTRyxjQUFULENBQXlCLFFBQXpCLENBQXRCO0FBQ0EsSUFBTXFZLG9CQUFvQixDQUFFRixjQUFlLENBQWYsQ0FBRixDQUExQjtBQUNBLElBQU12SSxtQkFBbUIsRUFBekI7QUFFQSxJQUFJMEksaUJBQWlCLEVBQXJCO0FBR0E7Ozs7Ozs7O0FBT0EsU0FBU0MsV0FBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLE1BQTlCLEVBQXNDQyxXQUF0QyxFQUFvRDtBQUNoRCxPQUFLLElBQUkvYixJQUFJLENBQWIsRUFBZ0JBLElBQUk2YixNQUFwQixFQUE0QixFQUFFN2IsQ0FBOUIsRUFBa0M7QUFDOUIsUUFBTWdjLGdCQUFnQjlZLFNBQVNDLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBdEI7QUFFQTZZLGtCQUFjblksU0FBZCxHQUEwQixrQkFBMUI7QUFDQW1ZLGtCQUFjeFksU0FBZCxHQUEwQixJQUExQjtBQUNBZ1ksa0JBQWVPLFdBQWYsRUFBNkJyWSxXQUE3QixDQUEwQ3NZLGFBQTFDO0FBQ0g7O0FBRUQsTUFBSUYsU0FBUyxDQUFiLEVBQWlCO0FBQ2IsUUFBTUcsY0FBYy9ZLFNBQVNDLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBcEI7QUFFQThZLGdCQUFZelksU0FBWixHQUF3Qi9CLE1BQU9xYSxNQUFQLEVBQWdCamEsSUFBaEIsQ0FBc0IsR0FBdEIsQ0FBeEI7QUFDQW9hLGdCQUFZcFksU0FBWixHQUF3QixrQkFBeEI7QUFDQTJYLGtCQUFlTyxXQUFmLEVBQTZCclksV0FBN0IsQ0FBMEN1WSxXQUExQztBQUNIOztBQUVEeEksV0FBU3lJLEtBQVQsQ0FBZ0JILFdBQWhCO0FBQ0g7QUFHRDs7Ozs7Ozs7OztBQVFBLFNBQVNJLFdBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxHQUE1QixFQUFpQ0MsVUFBakMsRUFBNkNQLFdBQTdDLEVBQTJEO0FBQzNEO0FBQ0ksTUFBTTdNLFNBQVNzTSxjQUFlTyxXQUFmLENBQWY7QUFDQSxNQUFNM00sUUFBUUMsZUFBZ0JILE1BQWhCLENBQWQ7QUFDQSxNQUFNcU4sUUFBUXJaLFNBQVMwTyxXQUFULEVBQWQ7QUFFQSxNQUFJNEssY0FBYyxDQUFsQjtBQUNBLE1BQUlDLGFBQWEsQ0FBakI7QUFDQSxNQUFJQyxhQUFhLEtBQWpCO0FBQ0EsTUFBSUMsYUFBYSxDQUFqQixDQVR1RCxDQVd2RDtBQUNBOztBQUNBLE1BQU1DLFdBQVksWUFBVztBQUN6QixTQUFLLElBQUk1YyxJQUFJLENBQWIsRUFBZ0JBLElBQUlvUCxNQUFNbFAsTUFBMUIsRUFBa0MsRUFBRUYsQ0FBcEMsRUFBd0M7QUFDcEMsVUFBSXVQLGNBQWNILE1BQU9wUCxDQUFQLEVBQVd1UCxXQUE3Qjs7QUFDQSxVQUFJaU4sZ0JBQWdCSixJQUFwQixFQUEyQjtBQUN2QixhQUFLLElBQUlyTCxJQUFJLENBQWIsRUFBZ0JBLElBQUl4QixZQUFZclAsTUFBaEMsRUFBd0MsRUFBRTZRLENBQTFDLEVBQThDO0FBQzFDLGNBQUkyTCxVQUFKLEVBQWlCO0FBQ2JDOztBQUNBLGdCQUFJQSxlQUFlTCxXQUFXL00sV0FBWCxDQUF1QnJQLE1BQXRDLElBQWdEcVAsWUFBYXdCLENBQWIsTUFBcUIsSUFBekUsRUFBZ0Y7QUFDNUV3TCxvQkFBTU0sTUFBTixDQUFjek4sTUFBT3BQLENBQVAsQ0FBZCxFQUEwQitRLENBQTFCO0FBQ0EscUJBQU8sS0FBUDtBQUNIO0FBQ0osV0FORCxNQU9LLElBQUkwTCxlQUFlSixHQUFuQixFQUF5QjtBQUMxQkUsa0JBQU1PLFFBQU4sQ0FBZ0IxTixNQUFPcFAsQ0FBUCxDQUFoQixFQUE0QitRLENBQTVCO0FBQ0EyTCx5QkFBYSxJQUFiOztBQUNBLGdCQUFJM0wsTUFBTXhCLFlBQVlyUCxNQUFaLEdBQXFCLENBQS9CLEVBQW1DO0FBQy9CcWMsb0JBQU1NLE1BQU4sQ0FBY3pOLE1BQU9wUCxDQUFQLENBQWQsRUFBMEIrUSxDQUExQjtBQUNBLHFCQUFPLEtBQVA7QUFDSDtBQUNKLFdBUEksTUFRQSxJQUFJeEIsWUFBYXdCLENBQWIsTUFBcUIsSUFBekIsRUFBZ0M7QUFDakMsZ0JBQU1nTSxTQUFTN1osU0FBUzhaLGNBQVQsQ0FBeUJ2YixNQUFPNGEsTUFBTUksVUFBTixHQUFtQixDQUExQixFQUE4QjVhLElBQTlCLENBQW9DLEdBQXBDLElBQTRDLElBQXJFLENBQWY7QUFFQXVOLGtCQUFPcFAsQ0FBUCxFQUFXdVAsV0FBWCxHQUF5QkEsWUFBWTlNLE1BQVosQ0FBb0IsQ0FBcEIsRUFBdUJzTyxDQUF2QixJQUE2QixHQUF0RDtBQUNBM0Isa0JBQU9wUCxDQUFQLEVBQVcyRCxVQUFYLENBQXNCc1osWUFBdEIsQ0FBb0NGLE1BQXBDLEVBQTRDM04sTUFBT3BQLENBQVAsRUFBV2dRLFdBQXZEO0FBQ0F1TSxrQkFBTU8sUUFBTixDQUFnQkMsTUFBaEIsRUFBd0JWLE1BQU1JLFVBQU4sR0FBbUIsQ0FBM0M7QUFDQUYsa0JBQU1NLE1BQU4sQ0FBY0UsTUFBZCxFQUFzQlYsTUFBTUksVUFBTixHQUFtQixDQUF6QztBQUNBLG1CQUFPLEtBQVA7QUFDSDs7QUFFREE7QUFDSDtBQUNKLE9BN0JELE1BOEJLO0FBQ0QsWUFBSWxOLFlBQVl6TyxPQUFaLENBQXFCLElBQXJCLElBQThCLENBQUMsQ0FBbkMsRUFBdUM7QUFDbkMwYjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxXQUFPLElBQVA7QUFDSCxHQXpDZ0IsRUFBakI7O0FBMkNBLE1BQUlJLFFBQUosRUFBZTtBQUNYaEIsZ0JBQWFELGVBQWdCSSxXQUFoQixFQUE4QkssSUFBOUIsR0FBcUNJLFdBQWxELEVBQStESCxHQUEvRCxFQUFvRU4sV0FBcEU7QUFDQTdNLFdBQU94TCxXQUFQLENBQW9CNFksVUFBcEI7QUFDQTtBQUNIOztBQUVELE1BQUlBLFdBQVcvTSxXQUFYLENBQXVCek8sT0FBdkIsQ0FBZ0MsSUFBaEMsSUFBeUMsQ0FBQyxDQUE5QyxFQUFrRDtBQUM5Q3diLGVBQVcvTSxXQUFYLEdBQXlCK00sV0FBVy9NLFdBQVgsQ0FBdUIwQixPQUF2QixDQUFnQyxJQUFoQyxFQUFzQyxFQUF0QyxDQUF6QjtBQUNBMEssbUJBQWdCSSxXQUFoQixFQUE4QkssSUFBOUI7QUFDQVQsbUJBQWdCSSxXQUFoQixFQUE4Qk0sR0FBOUIsR0FBb0MsQ0FBcEM7QUFDSCxHQUpELE1BS0s7QUFDRFYsbUJBQWdCSSxXQUFoQixFQUE4Qk0sR0FBOUIsSUFBcUNDLFdBQVcvTSxXQUFYLENBQXVCclAsTUFBNUQ7QUFDSDs7QUFFRHFjLFFBQU1XLGNBQU47QUFDQVgsUUFBTVksVUFBTixDQUFrQmIsVUFBbEI7O0FBRUEsTUFBSSxDQUFDQSxXQUFXdE0sV0FBaEIsRUFBOEI7QUFDMUIyTCxtQkFBZ0JJLFdBQWhCLEVBQThCSyxJQUE5QixHQUFxQyxJQUFyQztBQUNBVCxtQkFBZ0JJLFdBQWhCLEVBQThCTSxHQUE5QixHQUFvQyxJQUFwQztBQUNIO0FBQ0o7QUFHRDs7Ozs7Ozs7OztBQVFBLFNBQVNoTixjQUFULENBQXlCUSxJQUF6QixFQUFnQztBQUM1QixNQUFJQyxNQUFNLEVBQVY7O0FBRUEsT0FBS0QsT0FBT0EsS0FBS0UsVUFBakIsRUFBNkJGLElBQTdCLEVBQW1DQSxPQUFPQSxLQUFLRyxXQUEvQyxFQUE2RDtBQUN6RCxRQUFJSCxLQUFLSSxRQUFMLEtBQWtCLENBQXRCLEVBQTBCO0FBQ3RCSCxVQUFJeFAsSUFBSixDQUFVdVAsSUFBVjtBQUNILEtBRkQsTUFHSztBQUNEQyxZQUFNQSxJQUFJSSxNQUFKLENBQVliLGVBQWdCUSxJQUFoQixDQUFaLENBQU47QUFDSDtBQUNKOztBQUNELFNBQU9DLEdBQVA7QUFDSDtBQUdEOzs7Ozs7OztBQU1PLFNBQVMzTixNQUFULENBQWlCNFksT0FBakIsRUFBMEIzWSxZQUExQixFQUF5QztBQUM1QyxNQUFNZ2IsZ0JBQWdCbGEsU0FBU0MsYUFBVCxDQUF3QixNQUF4QixDQUF0Qjs7QUFFQSxNQUFJLENBQUN3WSxlQUFnQnZaLFlBQWhCLENBQUwsRUFBc0M7QUFDbEN1WixtQkFBZ0J2WixZQUFoQixJQUFpQztBQUM3QmlhLFdBQUssSUFEd0I7QUFFN0JELFlBQU07QUFGdUIsS0FBakM7QUFJSDs7QUFFRCxvQkFBWWdCLGFBQVosRUFBMkJoYixZQUEzQjtBQUNBZ2IsZ0JBQWM1WixTQUFkLEdBQTBCdVgsT0FBMUIsQ0FYNEMsQ0FZNUM7O0FBRUEsTUFBSVksZUFBZ0J2WixZQUFoQixFQUErQmlhLEdBQS9CLEtBQXVDLElBQXZDLElBQStDVixlQUFnQnZaLFlBQWhCLEVBQStCZ2EsSUFBL0IsS0FBd0MsSUFBM0YsRUFBa0c7QUFDOUZELGdCQUFhUixlQUFnQnZaLFlBQWhCLEVBQStCZ2EsSUFBNUMsRUFBa0RULGVBQWdCdlosWUFBaEIsRUFBK0JpYSxHQUFqRixFQUFzRmUsYUFBdEYsRUFBcUdoYixZQUFyRztBQUNILEdBRkQsTUFHSztBQUNUO0FBQ1FzWixzQkFBbUJ0WixZQUFuQixFQUFrQ3NCLFdBQWxDLENBQStDMFosYUFBL0M7QUFDSDtBQUNKOztBQUFBO0FBR0Q7Ozs7OztBQUtPLFNBQVM3TSxLQUFULENBQWdCbk8sWUFBaEIsRUFBK0I7QUFDbEMsTUFBSUEsaUJBQWlCTyxTQUFyQixFQUFpQztBQUM3Qix1QkFBTyxDQUFQO0FBQ0E4WSxrQkFBY2pZLFNBQWQsR0FBMEIsRUFBMUI7QUFDQWlZLGtCQUFjL1gsV0FBZCxDQUEyQjhYLGNBQWUsQ0FBZixDQUEzQjtBQUNBLHNCQUFZQSxjQUFlLENBQWYsQ0FBWixFQUFnQyxDQUFoQztBQUNBLHNCQUFZdFksU0FBU08sSUFBckIsRUFBMkIsQ0FBM0I7QUFDQWdRLGFBQVN5SSxLQUFUO0FBQ0gsR0FQRCxNQVFLO0FBQ0QsUUFBSSxDQUFDVixjQUFlcFosWUFBZixDQUFMLEVBQXFDO0FBQ2pDO0FBQ0gsS0FIQSxDQUtUOzs7QUFDUSx1QkFBT0EsWUFBUDtBQUNBb1osa0JBQWVwWixZQUFmLEVBQThCb0IsU0FBOUIsR0FBMEMsRUFBMUM7QUFDQSxzQkFBWWdZLGNBQWVwWixZQUFmLENBQVosRUFBMkNBLFlBQTNDLEVBUkMsQ0FVRDs7QUFDQSxRQUFJQSxpQkFBaUIsQ0FBckIsRUFBeUI7QUFDckIsd0JBQVljLFNBQVNPLElBQXJCLEVBQTJCLENBQTNCO0FBQ0g7O0FBRURnUSxhQUFTeUksS0FBVCxDQUFnQjlaLFlBQWhCO0FBQ0gsR0F6QmlDLENBMkJsQzs7O0FBQ0EsTUFBSUEsZUFBZSxDQUFuQixFQUF1QixDQUNuQjtBQUNIO0FBQ0o7O0FBQUE7QUFHRDs7Ozs7Ozs7OztBQVNPLFNBQVNpYixNQUFULENBQWlCQyxZQUFqQixFQUErQnBLLElBQS9CLEVBQXFDeEQsR0FBckMsRUFBMEN5RCxLQUExQyxFQUFpREMsTUFBakQsRUFBMEQ7QUFDakU7QUFDSSxNQUFNbUssYUFBYUMsbUJBQW5CO0FBQ0EsTUFBTUMsYUFBYUYsV0FBV0csSUFBWCxDQUFnQi9OLE1BQW5DO0FBQ0EsTUFBTThMLGdCQUFnQjVZLElBQUssQ0FBTCxFQUFTYyxVQUEvQjtBQUVBLE1BQUlnYSxTQUFKO0FBRUExSyxtQkFBa0JxSyxZQUFsQixJQUFtQztBQUMvQnBLLFVBQU1BLElBRHlCO0FBRS9CeEQsU0FBS0EsR0FGMEI7QUFHL0J5RCxXQUFPQSxLQUh3QjtBQUkvQkMsWUFBUUE7QUFKdUIsR0FBbkM7O0FBT0EsTUFBSSxDQUFDLGtCQUFXLFdBQVgsQ0FBTCxFQUFnQztBQUM1QixXQUFPLEtBQVA7QUFDSCxHQWpCNEQsQ0FtQjdEOzs7QUFDQSxNQUFJa0ssaUJBQWlCLENBQXJCLEVBQXlCO0FBQzdCO0FBQ1F6YSxRQUFLLENBQUwsRUFBU2lNLEtBQVQsQ0FBZThPLFVBQWYsR0FBNkIsQ0FBQ2xPLE1BQU0sQ0FBUCxJQUFZNk4sV0FBV0csSUFBWCxDQUFnQi9OLE1BQTdCLEdBQXVDLElBQW5FLENBRnFCLENBRzdCOztBQUNRO0FBQ0g7O0FBRUQsTUFBSTlNLElBQUt5YSxZQUFMLENBQUosRUFBMEI7QUFDdEI3QixrQkFBYzdYLFdBQWQsQ0FBMkJmLElBQUt5YSxZQUFMLENBQTNCO0FBQ0g7O0FBRURLLGNBQVl6YSxTQUFTQyxhQUFULENBQXdCLEtBQXhCLENBQVo7QUFDQXdhLFlBQVVwYSxFQUFWLEdBQWUsV0FBVytaLFlBQTFCO0FBQ0FLLFlBQVU5WixTQUFWLEdBQXNCLDhCQUF0QjtBQUNBOFosWUFBVTdPLEtBQVYsQ0FBZ0JhLE1BQWhCLEdBQXlCOE4sY0FBY3JLLFNBQVMxRCxHQUFULEdBQWUsQ0FBN0IsSUFBa0MsSUFBM0Q7QUFDQWlPLFlBQVU3TyxLQUFWLENBQWdCWSxHQUFoQixHQUF1QixDQUFDQSxNQUFNLENBQVAsSUFBWStOLFVBQWIsR0FBMkIsSUFBakQ7QUFDQUUsWUFBVTdPLEtBQVYsQ0FBZ0IrTyxVQUFoQixHQUE4QjNLLE9BQU8sQ0FBUixHQUFhLElBQTFDO0FBQ0F5SyxZQUFVN08sS0FBVixDQUFnQkMsS0FBaEIsR0FBeUIsQ0FBQ29FLFFBQVFELElBQVIsR0FBZSxDQUFoQixJQUFxQnFLLFdBQVdHLElBQVgsQ0FBZ0IzTyxLQUF0QyxHQUErQyxJQUF2RTtBQUVBeU0sZ0JBQWU4QixZQUFmLElBQWdDSyxTQUFoQztBQUNBakMsb0JBQW1CNEIsWUFBbkIsSUFBb0NLLFNBQXBDO0FBQ0FHLFlBQVUzYixNQUFWLENBQWtCd2IsU0FBbEIsRUFBNkJsQyxhQUE3QjtBQUNIOztBQUFBO0FBR0Q7Ozs7QUFHTyxJQUFNcUMsWUFBWTtBQUNyQjNiLFVBQVEsZ0JBQVUyYixTQUFWLEVBQXFCNVAsTUFBckIsRUFBOEI7QUFDbEMsUUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWlDO0FBQzdCc04sb0JBQWV0TixNQUFmLEVBQXdCeEssV0FBeEIsQ0FBcUNvYSxTQUFyQztBQUNILEtBRkQsTUFHSztBQUNENVAsYUFBT3hLLFdBQVAsQ0FBb0JvYSxTQUFwQjtBQUNIO0FBQ0osR0FSb0I7QUFVckJqYixPQUFLLGFBQVVULFlBQVYsRUFBeUI7QUFDMUIsV0FBT3NaLGtCQUFtQnRaLFlBQW5CLENBQVA7QUFDSCxHQVpvQjtBQWNyQnFPLE9BQUssYUFBVXNOLFlBQVYsRUFBd0IzYixZQUF4QixFQUF1QztBQUN4Q3NaLHNCQUFtQnRaLFlBQW5CLElBQW9DMmIsWUFBcEM7QUFDSDtBQWhCb0IsQ0FBbEI7QUFvQlA7Ozs7Ozs7OztBQU1PLFNBQVNsYixHQUFULENBQWNULFlBQWQsRUFBNkI7QUFDaEMsU0FBT29aLGNBQWVwWixZQUFmLENBQVA7QUFDSDtBQUdEOzs7OztBQUdPLFNBQVN3USxVQUFULEdBQXNCO0FBQ3pCLE1BQU1JLGlCQUFpQixFQUF2QjtBQUNBLE1BQU1yRixhQUFhLGtCQUFuQjtBQUNBLE1BQU1xUSxlQUFlclEsV0FBV2hLLFVBQWhDLENBSHlCLENBS3pCOztBQUNBLE1BQUlxYSxZQUFKLEVBQW1CO0FBQ2ZBLGlCQUFhcGEsV0FBYixDQUEwQitKLFVBQTFCO0FBQ0gsR0FSd0IsQ0FVekI7OztBQUNBLE1BQUlzUSxZQUFZekMsY0FBZSxDQUFmLEVBQW1CeUMsU0FBbkM7QUFDQXpDLGdCQUFlLENBQWYsRUFBbUI1WCxXQUFuQixDQUFnQ3FhLFNBQWhDOztBQUVBLE9BQUssSUFBSWplLElBQUksQ0FBYixFQUFnQkEsSUFBSXdiLGNBQWN0YixNQUFsQyxFQUEwQyxFQUFFRixDQUE1QyxFQUFnRDtBQUM1Q2dULG1CQUFnQmhULENBQWhCLElBQXNCd2IsY0FBZXhiLENBQWYsRUFBbUJ3RCxTQUF6QztBQUNILEdBaEJ3QixDQWtCekI7OztBQUNBZ1ksZ0JBQWUsQ0FBZixFQUFtQjlYLFdBQW5CLENBQWdDdWEsU0FBaEM7O0FBRUEsTUFBSUQsWUFBSixFQUFtQjtBQUNmQSxpQkFBYXRhLFdBQWIsQ0FBMEJpSyxVQUExQjtBQUNILEdBdkJ3QixDQXlCekI7QUFDQTs7O0FBQ0EsTUFBTXVRLFVBQVVsTCxlQUFnQixDQUFoQixFQUFvQnhRLFdBQXBCLENBQWlDLElBQWpDLENBQWhCO0FBQ0F3USxpQkFBZ0IsQ0FBaEIsSUFBc0JBLGVBQWdCLENBQWhCLEVBQW9CbUwsU0FBcEIsQ0FBK0IsQ0FBL0IsRUFBa0NELE9BQWxDLElBQThDbEwsZUFBZ0IsQ0FBaEIsRUFBb0JtTCxTQUFwQixDQUErQkQsVUFBVSxDQUF6QyxDQUFwRTtBQUVBLFNBQU87QUFDSDlRLGdCQUFZZ0QsZ0JBQVF2TixHQUFSLEVBRFQ7QUFFSHlRLG1CQUFlRCxhQUFNeFEsR0FBTixFQUZaO0FBR0gwUSxVQUFNQSxZQUFLMVEsR0FBTCxFQUhIO0FBSUg0USxjQUFVa0ksY0FKUDtBQUtIakksV0FBT3hRLFNBQVN3USxLQUxiO0FBTUhULHNCQUFrQkEsZ0JBTmY7QUFPSEQsb0JBQWdCQTtBQVBiLEdBQVA7QUFTSDtBQUdEOzs7OztBQUdPLFNBQVN3SyxpQkFBVCxHQUE2QjtBQUNoQyxNQUFNWSxrQkFBa0J2YixJQUFLLENBQUwsRUFBU2MsVUFBakM7QUFDQSxNQUFNNFosYUFBYTtBQUNYdmMsWUFBUTtBQUNKK04sYUFBT3NQLFNBQVVyZCxPQUFPc2QsZ0JBQVAsQ0FBeUJGLGVBQXpCLEVBQTJDclAsS0FBckQsRUFBNEQsRUFBNUQsQ0FESDtBQUVKWSxjQUFRM08sT0FBT2lLLFdBQVAsSUFBc0IvSCxTQUFTb0gsZUFBVCxDQUF5QlksWUFBL0MsSUFBK0RoSSxTQUFTTyxJQUFULENBQWN5SDtBQUZqRixLQURHO0FBS1hrUixVQUFNLEVBTEs7QUFNWHNCLFVBQU07QUFOSyxHQUFuQjtBQVFBLE1BQU1hLGNBQWNyYixTQUFTQyxhQUFULENBQXdCLE1BQXhCLENBQXBCO0FBQ0EsTUFBTXFiLG1CQUFtQmpCLFdBQVd2YyxNQUFwQztBQUVBLE1BQUl5ZCxpQkFBSjtBQUVBRixjQUFZL2EsU0FBWixHQUF3Qix5QkFBeEI7QUFDQSthLGNBQVkxYSxTQUFaLEdBQXdCLGtCQUF4QjtBQUNBMGEsY0FBWXpQLEtBQVosQ0FBa0I0UCxPQUFsQixHQUE0QixjQUE1QjtBQUVBTixrQkFBZ0IxYSxXQUFoQixDQUE2QjZhLFdBQTdCO0FBRUFoQixhQUFXRyxJQUFYLENBQWdCM08sS0FBaEIsR0FBd0J3UCxZQUFZak0sV0FBWixHQUEwQixDQUFsRDtBQUNBaUwsYUFBV25CLElBQVgsQ0FBZ0JyTixLQUFoQixHQUF3QnpNLEtBQUtxYyxLQUFMLENBQVksQ0FBRUgsaUJBQWlCelAsS0FBakIsR0FBeUIsQ0FBM0IsSUFBaUN3TyxXQUFXRyxJQUFYLENBQWdCM08sS0FBN0QsQ0FBeEI7QUFFQXdQLGNBQVl6UCxLQUFaLENBQWtCNFAsT0FBbEIsR0FBNEIsT0FBNUI7QUFDQUQsc0JBQW9CRixZQUFZclQsWUFBaEM7QUFDQXFULGNBQVkvYSxTQUFaLElBQXlCLG9CQUF6QjtBQUNBK1osYUFBV0csSUFBWCxDQUFnQi9OLE1BQWhCLEdBQXlCLENBQUM0TyxZQUFZclQsWUFBWixHQUEyQnVULGlCQUE1QixJQUFpRCxDQUFqRCxHQUFxRCxDQUE5RTtBQUNBbEIsYUFBV25CLElBQVgsQ0FBZ0J6TSxNQUFoQixHQUF5QnJOLEtBQUtxYyxLQUFMLENBQVlILGlCQUFpQjdPLE1BQWpCLEdBQTBCNE4sV0FBV0csSUFBWCxDQUFnQi9OLE1BQXRELENBQXpCO0FBRUE0TyxjQUFZNWEsVUFBWixDQUF1QkMsV0FBdkIsQ0FBb0MyYSxXQUFwQztBQUVBLFNBQU9oQixVQUFQO0FBQ0g7QUFHRDs7Ozs7QUFHTyxJQUFNOUosV0FBVztBQUNwQnlJLFNBQU8sZUFBVTlaLFlBQVYsRUFBeUI7QUFDNUI7QUFDQSxRQUFJQSxpQkFBaUJPLFNBQXJCLEVBQWlDO0FBQzdCZ1osdUJBQWlCLENBQUM7QUFDZFUsYUFBSyxJQURTO0FBRWRELGNBQU07QUFGUSxPQUFELENBQWpCO0FBSUgsS0FMRCxNQU1LO0FBQ0QzSSxlQUFTaEQsR0FBVCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEJyTyxZQUExQjtBQUNIO0FBQ0osR0FabUI7QUFjcEJvRCxXQUFTLGlCQUFVaVAsUUFBVixFQUFxQjtBQUMxQmtILHFCQUFpQmxILFFBQWpCO0FBQ0gsR0FoQm1CO0FBa0JwQmhFLE9BQUssYUFBVTRMLEdBQVYsRUFBZUQsSUFBZixFQUFxQkwsV0FBckIsRUFBbUM7QUFDcEMsUUFBSSxDQUFDSixlQUFnQkksV0FBaEIsQ0FBTCxFQUFxQztBQUNqQ0oscUJBQWdCSSxXQUFoQixJQUFnQyxFQUFoQztBQUNIOztBQUVESixtQkFBZ0JJLFdBQWhCLEVBQThCTSxHQUE5QixHQUFvQ0EsR0FBcEM7QUFDQVYsbUJBQWdCSSxXQUFoQixFQUE4QkssSUFBOUIsR0FBcUNBLElBQXJDO0FBQ0g7QUF6Qm1CLENBQWpCO0FBNkJQOzs7Ozs7OztBQUtPLFNBQVN3QyxRQUFULENBQW1CbEwsS0FBbkIsRUFBMkI7QUFDOUJ4USxXQUFTd1EsS0FBVCxHQUFpQkEsS0FBakI7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5YkQ7O0FBQ0E7O0FBRUE7O0FBS0E7O0FBRUE7O0FBS0E7O0FBS0E7O0FBT0E7Ozs7QUFDTyxJQUFNbUwsVUFBVUMsUUFBaEI7QUFHUDs7Ozs7Ozs7QUFLTyxTQUFTdk8sS0FBVCxDQUFnQndPLFVBQWhCLEVBQTZCO0FBQ2hDLHFCQUFhQSxVQUFiO0FBQ0g7O0FBR00sSUFBTTFMLFFBQVE7QUFDakI7Ozs7Ozs7QUFPQTVDLE9BQUssYUFBVWEsS0FBVixFQUFpQjBOLFFBQWpCLEVBQTJCRCxVQUEzQixFQUF3QztBQUN6Q0UsaUJBQU94TyxHQUFQLENBQVlhLEtBQVosRUFBbUIwTixRQUFuQixFQUE2QkQsVUFBN0I7QUFDSDtBQVZnQixDQUFkOztBQWNBLElBQU14TCxPQUFPO0FBQ2hCOzs7Ozs7QUFNQTlDLE9BQUssYUFBVXlPLENBQVYsRUFBYUgsVUFBYixFQUEwQjtBQUMzQixvQkFBVSxNQUFWLEVBQWtCLENBQUMsRUFBRUcsSUFBSSxDQUFOLENBQW5CLEVBQTZCSCxVQUE3QjtBQUNBLG9CQUFVLFFBQVYsRUFBb0IsQ0FBQyxFQUFFRyxJQUFJLENBQU4sQ0FBckIsRUFBK0JILFVBQS9CO0FBQ0Esb0JBQVUsV0FBVixFQUF1QixDQUFDLEVBQUVHLElBQUksQ0FBTixDQUF4QixFQUFrQ0gsVUFBbEM7QUFDQSxvQkFBVSxjQUFWLEVBQTBCLENBQUMsRUFBRUcsSUFBSSxDQUFOLENBQTNCLEVBQXFDSCxVQUFyQztBQUNBLG9CQUFVLFVBQVYsRUFBc0JHLENBQXRCLEVBQXlCSCxVQUF6QixFQUwyQixDQU8zQjtBQUNIO0FBZmUsQ0FBYjtBQW1CUDs7Ozs7O0FBR08sU0FBU0ksU0FBVCxHQUFxQjtBQUN4QjtBQUNBLE1BQUksa0JBQVcsVUFBWCxDQUFKLEVBQThCO0FBQzFCN1osb0JBQVNxRyxNQUFUO0FBQ0gsR0FKdUIsQ0FNeEI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUksa0JBQVcsVUFBWCxLQUEyQixDQUFDekksU0FBU0csY0FBVCxDQUF5QixhQUF6QixDQUFoQyxFQUEyRTtBQUN2RTtBQUNBO0FBQ0EsUUFBSSwrQkFBSixFQUEwQjtBQUN0QiwwQkFBUyxTQUFUO0FBQ0gsS0FGRCxNQUdLO0FBQ0RyQyxhQUFPbUYsUUFBUCxHQUFrQixrQkFBVyxVQUFYLENBQWxCO0FBQ0g7QUFDSjtBQUNKO0FBR0Q7Ozs7O0FBR08sU0FBU1QsSUFBVCxHQUFnQjtBQUNuQixvQkFBTztBQUNIO0FBQ0EwRCxrQkFBYyxJQUZYO0FBSUg7QUFDQTtBQUNBRixrQkFBYyxJQU5YO0FBUUg7QUFDQTtBQUNBRyxzQkFBa0IsSUFWZjtBQVlIO0FBQ0FMLGFBQVMrQixjQWJOO0FBZUg7QUFDQTVCLGFBQVMsS0FoQk47QUFrQkg7QUFDQUYsc0JBQWtCO0FBbkJmLEdBQVA7QUFzQkE0VixVQUFRblosSUFBUjtBQUNIO0FBR0Q7Ozs7Ozs7QUFLTyxTQUFTMFosVUFBVCxHQUFzQjtBQUN6QixNQUFNOWIsU0FBU0osU0FBU0csY0FBVCxDQUF5QixRQUF6QixDQUFmOztBQUVBLE1BQUlDLE1BQUosRUFBYTtBQUNUQSxXQUFPSyxVQUFQLENBQWtCQyxXQUFsQixDQUErQk4sTUFBL0I7QUFDSDs7QUFFRCtiO0FBQ0g7QUFHRDs7Ozs7QUFHTyxJQUFNNUwsV0FBVztBQUNwQmhELE9BQUssYUFBVXFMLE1BQVYsRUFBa0JNLElBQWxCLEVBQXdCMkMsVUFBeEIsRUFBcUM7QUFDdEN2TCxxQkFBZS9DLEdBQWYsQ0FBb0JxTCxNQUFwQixFQUE0Qk0sSUFBNUIsRUFBa0MyQyxVQUFsQztBQUNIO0FBSG1CLENBQWpCO0FBT1A7Ozs7Ozs7OztBQU1PLFNBQVMxZCxLQUFULENBQWdCQyxJQUFoQixFQUFzQnlkLFVBQXRCLEVBQW1DO0FBQ3RDO0FBQ0EsTUFBSXpkLFNBQVMsSUFBYixFQUFvQjtBQUNoQjtBQUNIOztBQUVELHNCQUFnQkEsSUFBaEIsRUFBc0J5ZCxVQUF0QjtBQUNIO0FBR0Q7Ozs7O0FBR08sU0FBU2xNLFNBQVQsR0FBcUI7QUFDeEI7QUFDSDtBQUdEOzs7OztBQUdPLFNBQVN3TSxvQkFBVCxHQUFnQztBQUNuQyxNQUFNOUIsYUFBYSxnQ0FBbkIsQ0FEbUMsQ0FFdkM7O0FBRUl0YyxTQUFPa0ssS0FBUCxDQUNJLDRCQURKLEVBRUksTUFGSixFQUdJLENBQUUsUUFBRixFQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsUUFBaEMsRUFBMEMsUUFBMUMsRUFBb0QsUUFBcEQsQ0FISixFQUlJLENBQ0lvUyxXQUFXdmMsTUFBWCxDQUFrQitOLEtBRHRCLEVBRUl3TyxXQUFXdmMsTUFBWCxDQUFrQjJPLE1BRnRCLEVBR0k0TixXQUFXbkIsSUFBWCxDQUFnQnJOLEtBSHBCLEVBSUl3TyxXQUFXbkIsSUFBWCxDQUFnQnpNLE1BSnBCLEVBS0k0TixXQUFXRyxJQUFYLENBQWdCM08sS0FMcEIsRUFNSXdPLFdBQVdHLElBQVgsQ0FBZ0IvTixNQU5wQixDQUpKO0FBYUg7QUFHRDs7Ozs7OztBQUtPLFNBQVNpUCxRQUFULENBQW1CbEwsS0FBbkIsRUFBMkI7QUFDOUIsd0JBQWdCQSxLQUFoQjtBQUNILEMsQ0FHRDs7O0FBQ0ExUyxPQUFPQyxNQUFQLENBQWNDLFNBQWQsR0FBMEIsQ0FBRSxXQUFGLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7O0FDdE5BOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUFGLE9BQU9zZSxNQUFQLEdBQWdCQyxFQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOztBQUxBOzs7QUFPQSxJQUFNQyxzQkFBc0IsVUFBNUI7QUFDQSxJQUFNQyxvQkFBb0IsU0FBMUI7QUFHQTs7OztBQUdPLFNBQVMvWixJQUFULEdBQWdCO0FBQ25CLDJCQUFhLFVBQVUzRixJQUFWLEVBQWlCO0FBQzFCNEUsT0FBR1UsTUFBSCxDQUFXLElBQVgsRUFBaUIsWUFBVztBQUN4QixVQUFJLGtCQUFXLGVBQVgsQ0FBSixFQUFtQztBQUMvQlYsV0FBR0MsU0FBSCxDQUNJNmEsaUJBREosRUFFSSxJQUFJN1ksVUFBSixDQUFlLENBQUUsRUFBRixFQUFNLEVBQU4sQ0FBZixDQUZKLENBRWlDO0FBRmpDO0FBSUgsT0FMRCxNQU1LO0FBQ0QsWUFBSTtBQUNBakMsYUFBRzZOLE1BQUgsQ0FBV2lOLGlCQUFYO0FBQ0gsU0FGRCxDQUdBLE9BQU1wWCxDQUFOLEVBQVMsQ0FDUjtBQUNKOztBQUVELFVBQUk7QUFDQTFELFdBQUc2TixNQUFILENBQVdnTixtQkFBWDtBQUNILE9BRkQsQ0FHQSxPQUFNblgsQ0FBTixFQUFTLENBQ1I7O0FBRUQxRCxTQUFHVSxNQUFILENBQVcsS0FBWCxFQUFrQnRGLElBQWxCO0FBQ0gsS0F0QkQ7QUF1QkgsR0F4QkQ7QUF5Qkg7QUFFRDs7Ozs7O0FBSU8sU0FBUzJmLE9BQVQsR0FBbUI7QUFDdEIsTUFBSSxDQUFDLGtCQUFXLGVBQVgsQ0FBTCxFQUFvQztBQUNoQztBQUNIOztBQUVEamYsVUFBUWUsR0FBUixDQUFZZ2UsbUJBQVo7QUFDQSxNQUFNRyxhQUFhaGIsR0FBR3NELFFBQUgsQ0FBYXVYLG1CQUFiLENBQW5CO0FBQ0EsTUFBTUksYUFBYUQsV0FBV3pmLE1BQVgsR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBM0M7QUFDQSxNQUFNMkcsV0FBVyxFQUFqQjs7QUFFQSxNQUFNZ1osY0FBYyxTQUFkQSxXQUFjLENBQVVsWSxLQUFWLEVBQWtCO0FBQ2xDZCxhQUFTdkcsSUFBVCxDQUFlcUgsUUFBUSxHQUF2QjtBQUNBZCxhQUFTdkcsSUFBVCxDQUFlcUgsU0FBUyxDQUF4QjtBQUNILEdBSEQ7O0FBS0EsTUFBTW1ZLFdBQVcsU0FBWEEsUUFBVyxDQUFVamYsS0FBVixFQUFrQjtBQUMvQixXQUFPOGUsV0FBWTllLFFBQVEsQ0FBcEIsSUFBMEI4ZSxXQUFZOWUsUUFBUSxDQUFSLEdBQVksQ0FBeEIsSUFBOEIsR0FBL0Q7QUFDSCxHQUZEOztBQUlBLE1BQU1rZixnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQVc7QUFDN0J0ZixZQUFRZSxHQUFSLENBQVlxRixRQUFaO0FBQ0FsQyxPQUFHQyxTQUFILENBQWM0YSxtQkFBZCxFQUFtQyxJQUFJNVksVUFBSixDQUFnQkMsUUFBaEIsQ0FBbkM7QUFDSCxHQUhELENBbkJzQixDQXdCdEI7OztBQUNBLE1BQUk4WSxXQUFXemYsTUFBWCxHQUFvQixDQUFwQixLQUEwQixDQUE5QixFQUFrQztBQUM5QjJmLGdCQUFhLEVBQWIsRUFEOEIsQ0FDVjs7QUFDcEJFO0FBQ0E7QUFDSDs7QUFFRCxNQUFNbEIsVUFBVTtBQUNaLE9BQUcsYUFBVztBQUFNO0FBQ2hCLFVBQUlBLFFBQVNpQixTQUFVLENBQVYsQ0FBVCxDQUFKLEVBQStCO0FBQzNCRCxvQkFBYSxDQUFiO0FBQ0gsT0FGRCxNQUdLO0FBQ0RBLG9CQUFhLENBQWI7QUFDSDtBQUNKLEtBUlc7QUFVWixTQUFLLGFBQVc7QUFBSTtBQUNoQkEsa0JBQWEsQ0FBYixFQURZLENBQ1E7QUFDdkIsS0FaVztBQWNaLFNBQUssYUFBVztBQUFJO0FBQ2hCO0FBQ0E7QUFDQTdlLGFBQU9nZixLQUFQLEdBSFksQ0FLWjs7QUFDQSxZQUFNLElBQUlsYyxLQUFKLENBQVcscUJBQVgsQ0FBTjtBQUNILEtBckJXO0FBdUJaLFNBQUssYUFBVztBQUFJO0FBQ2hCLFVBQU1tYyxNQUFNaGYsT0FBT2tLLEtBQVAsQ0FDUiw0QkFEUSxFQUVSLFFBRlEsRUFHUixDQUFFLEtBQUYsQ0FIUSxFQUlSLENBQUV3VSxXQUFZLENBQVosSUFBa0JBLFdBQVksQ0FBWixJQUFrQixHQUF0QyxDQUpRLENBQVo7O0FBT0EsVUFBSU8sUUFBUyxvQ0FBb0NELEdBQXBDLEdBQTBDLGFBQW5ELENBQUosRUFBeUU7QUFDckVqZixlQUFPbUcsSUFBUCxDQUFhOFksR0FBYjtBQUNIO0FBQ0osS0FsQ1c7QUFvQ1osU0FBSyxhQUFXO0FBQUk7QUFDaEJKLGtCQUFhLENBQWI7QUFDSCxLQXRDVztBQXdDWixTQUFLLGFBQVc7QUFBSTtBQUNoQkEsa0JBQWEsQ0FBYjtBQUNILEtBMUNXO0FBNENaLFVBQU0sYUFBVztBQUFHO0FBQ2hCQSxrQkFBYSxDQUFiO0FBQ0gsS0E5Q1c7O0FBK0NaOzs7OztBQUtBLFVBQU0sYUFBVztBQUFHO0FBQ2hCQSxrQkFBYSxDQUFiO0FBQ0g7QUF0RFcsR0FBaEIsQ0EvQnNCLENBd0Z0Qjs7QUFDQSxNQUFNTSxjQUFjO0FBQ2hCLE9BQUcsQ0FEYTtBQUVoQixTQUFLLENBRlc7QUFHaEIsU0FBSyxDQUhXO0FBSWhCLFNBQUssQ0FKVztBQUtoQixTQUFLLENBTFc7QUFNaEIsVUFBTSxDQU5VO0FBT2hCLFVBQU07QUFQVSxHQUFwQjtBQVVBLE1BQU1DLEtBQUtOLFNBQVUsQ0FBVixDQUFYOztBQUVBLE1BQUlqQixRQUFTdUIsRUFBVCxDQUFKLEVBQW9CO0FBQ2hCLFFBQU1DLGlCQUFpQkYsWUFBYUMsRUFBYixLQUFxQixDQUE1QyxDQURnQixDQUdoQjs7QUFDQSxRQUFJUixlQUFlUyxjQUFuQixFQUFvQztBQUNoQ1Isa0JBQWEsRUFBYjtBQUNBRTtBQUNBO0FBQ0gsS0FSZSxDQVVoQjs7O0FBQ0FGLGdCQUFhLENBQWIsRUFYZ0IsQ0FXSTs7QUFDcEJoQixZQUFTdUIsRUFBVDtBQUNILEdBYkQsTUFjSztBQUNEO0FBQ0FQLGdCQUFhLEVBQWIsRUFGQyxDQUVtQjs7QUFDcEJBLGdCQUFhTyxFQUFiO0FBQ0FQLGdCQUFhRCxVQUFiOztBQUVBLFNBQUssSUFBSTVmLElBQUksQ0FBYixFQUFnQkEsSUFBSTRmLFVBQXBCLEVBQWdDLEVBQUU1ZixDQUFsQyxFQUFzQztBQUNsQzZmLGtCQUFhQyxTQUFVOWYsQ0FBVixDQUFiO0FBQ0g7QUFDSixHQTVIcUIsQ0E4SHRCOzs7QUFDQStmO0FBQ0gsQyIsImZpbGUiOiJwbGF5L2h1Z28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb250LWJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZm9udC11bmRlcmxpbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZvbnQtcHJvcG9ydGlvbmFsIHtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5mb250LWZpeGVkLXdpZHRoIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG59XFxuXFxuLnRleHRjb2xvci0wIHsgICAgICAgICAgICAgICAvKiBibGFjayAqL1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnRleHRjb2xvci0xIHsgICAgICAgICAgICAgICAvKiBibHVlICovXFxuICAgIGNvbG9yOiAjMDBhO1xcbn1cXG5cXG4udGV4dGNvbG9yLTIgeyAgICAgICAgICAgICAgIC8qIGdyZWVuICovXFxuICAgIGNvbG9yOiAjMGEwO1xcbn1cXG5cXG4udGV4dGNvbG9yLTMgeyAgICAgICAgICAgICAgIC8qIGN5YW4gKi9cXG4gICAgY29sb3I6ICMwYWE7XFxufVxcblxcbi50ZXh0Y29sb3ItNCB7ICAgICAgICAgICAgICAgLyogcmVkICovXFxuICAgIGNvbG9yOiAjYTAwO1xcbn1cXG5cXG4udGV4dGNvbG9yLTUgeyAgICAgICAgICAgICAgIC8qIG1hZ2VudGEgKi9cXG4gICAgY29sb3I6ICNhMGE7XFxufVxcblxcbi50ZXh0Y29sb3ItNiB7ICAgICAgICAgICAgICAgLyogYnJvd24gKi9cXG4gICAgY29sb3I6ICNhNTA7XFxufVxcblxcbi50ZXh0Y29sb3ItNyB7ICAgICAgICAgICAgICAgLyogd2hpdGUgKi9cXG4gICAgY29sb3I6ICNhYWE7XFxufVxcblxcbi50ZXh0Y29sb3ItOCB7ICAgICAgICAgICAgICAgLyogZGFyayBncmF5ICovXFxuICAgIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGV4dGNvbG9yLTkgeyAgICAgICAgICAgICAgIC8qIGxpZ2h0IGJsdWUgKi9cXG4gICAgY29sb3I6ICM1NWY7XFxufVxcblxcbi50ZXh0Y29sb3ItMTAgeyAgICAgICAgICAgICAgLyogbGlnaHQgZ3JlZW4gKi9cXG4gICAgY29sb3I6ICM1ZjU7XFxufVxcblxcbi50ZXh0Y29sb3ItMTEgeyAgICAgICAgICAgICAgLyogbGlnaHQgY3lhbiAqL1xcbiAgICBjb2xvcjogIzVmZjtcXG59XFxuXFxuLnRleHRjb2xvci0xMiB7ICAgICAgICAgICAgICAvKiBsaWdodCByZWQgKi9cXG4gICAgY29sb3I6ICNmNTU7XFxufVxcblxcbi50ZXh0Y29sb3ItMTMgeyAgICAgICAgICAgICAgLyogbGlnaHQgbWFnZW50YSAqL1xcbiAgICBjb2xvcjogI2Y1ZjtcXG59XFxuXFxuLnRleHRjb2xvci0xNCB7ICAgICAgICAgICAgICAvKiB5ZWxsb3cgKi9cXG4gICAgY29sb3I6ICNmZjU7XFxufVxcblxcbi50ZXh0Y29sb3ItMTUgeyAgICAgICAgICAgICAgLyogYnJpZ2h0IHdoaXRlICovXFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG4uYmdjb2xvci0wIHsgICAgICAgICAgICAgICAgIC8qIGJsYWNrICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5iZ2NvbG9yLTEgeyAgICAgICAgICAgICAgICAgLyogYmx1ZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhO1xcbn1cXG5cXG4uYmdjb2xvci0yIHsgICAgICAgICAgICAgICAgIC8qIGdyZWVuICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTA7XFxufVxcblxcbi5iZ2NvbG9yLTMgeyAgICAgICAgICAgICAgICAgLyogY3lhbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFhO1xcbn1cXG5cXG4uYmdjb2xvci00IHsgICAgICAgICAgICAgICAgIC8qIHJlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAwO1xcbn1cXG5cXG4uYmdjb2xvci01IHsgICAgICAgICAgICAgICAgIC8qIG1hZ2VudGEgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTtcXG59XFxuXFxuLmJnY29sb3ItNiB7ICAgICAgICAgICAgICAgICAvKiBicm93biAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwO1xcbn1cXG5cXG4uYmdjb2xvci03IHsgICAgICAgICAgICAgICAgIC8qIHdoaXRlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XFxufVxcblxcbi5iZ2NvbG9yLTggeyAgICAgICAgICAgICAgICAgLyogZGFyayBncmF5ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5iZ2NvbG9yLTkgeyAgICAgICAgICAgICAgICAgLyogbGlnaHQgYmx1ZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmO1xcbn1cXG5cXG4uYmdjb2xvci0xMCB7ICAgICAgICAgICAgICAgIC8qIGxpZ2h0IGdyZWVuICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjU7XFxufVxcblxcbi5iZ2NvbG9yLTExIHsgICAgICAgICAgICAgICAgLyogbGlnaHQgY3lhbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZmO1xcbn1cXG5cXG4uYmdjb2xvci0xMiB7ICAgICAgICAgICAgICAgIC8qIGxpZ2h0IHJlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU1O1xcbn1cXG5cXG4uYmdjb2xvci0xMyB7ICAgICAgICAgICAgICAgIC8qIGxpZ2h0IG1hZ2VudGEgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjtcXG59XFxuXFxuLmJnY29sb3ItMTQgeyAgICAgICAgICAgICAgICAvKiB5ZWxsb3cgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTtcXG59XFxuXFxuLmJnY29sb3ItMTUgeyAgICAgICAgICAgICAgICAvKiBicmlnaHQgd2hpdGUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5LFxcbmlucHV0LFxcbiNsb2FkZXIge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSxcXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuI2xpbmVpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI291dHB1dCB7XFxuICAgIG1heC13aWR0aDogNzUxcHg7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jb3V0cHV0IHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbiNsaW5laW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuI2xpbmVpbnB1dC1maWVsZCB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhhdmVud2luZG93IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2FmYXJpZml4IC5oYXZlbndpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI2xvYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG4jbG9hZGVyLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbG9hZGVyLnN0b3BwZWQgI2xvYWRlci1tZXNzYWdlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbiNzcGlubmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBjb2xvcjogIzU1NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBhbmltYXRpb246IHNsaWRlIDVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZSB7XFxuICAgIDUwJSB7IGxlZnQ6IDkwJTsgfVxcbiAgICAxMDAlIHsgbGVmdDogNSU7IH1cXG59XFxuXFxuI2ZhdGFsLWVycm9yIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvLyBQb2x5ZmlsbCBmb3IgY3JlYXRpbmcgQ3VzdG9tRXZlbnRzIG9uIElFOS8xMC8xMVxuXG4vLyBjb2RlIHB1bGxlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Q0dG9jY2hpbmkvY3VzdG9tZXZlbnQtcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXG50cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnKTtcbiAgICBjZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHQnKTtcbiAgICB9XG59IGNhdGNoKGUpIHtcbiAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIG9yaWdQcmV2ZW50ID0gZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdQcmV2ZW50LmNhbGwodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2h1Z28uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2h1Z28uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9odWdvLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VpLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91aS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VpLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIGFzc2V0cyB0aGF0IG5lZWQgdG8gbG9hZCBiZWZvcmUgd2UgY2FuIHN0YXJ0XG5jb25zdCBleHBlY3RlZEFzc2V0cyA9IFsgJ2VuZ2luZScsICdzdG9yeWZpbGUnIF07XG5cbi8vIGZ1bmN0aW9ucyB0aGF0IGFyZSBjYWxsZWQgd2hlbiBhbGwgYXNzZXRzIGhhdmUgbG9hZGVkXG5jb25zdCBjYWxsYmFja3MgPSBbXTtcblxuLy8gdGhlIGNhbGxiYWNrIHRoYXQncyBjYWxsZWQgdGhlIHZlcnkgbGFzdFxubGV0IGxhc3RDYWxsYmFjaztcblxuXG4vKipcbiAqIFdoZW4gYWxsIGFzc2V0cyBhcmUgcmVhZHksIHJ1biB0aGUgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBkb25lKCkge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBtZXRhQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZiggaSA8IGNhbGxiYWNrcy5sZW5ndGggKSB7XG4gICAgICAgICAgICBjYWxsYmFja3NbIGkgXSggbWV0YUNhbGxiYWNrICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggbGFzdENhbGxiYWNrICkge1xuICAgICAgICAgICAgbGFzdENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoIGNhbGxiYWNrcy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsYmFja3NbIDAgXSggbWV0YUNhbGxiYWNrICk7XG59XG5cblxuLyoqXG4gKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCdzIHJ1biB3aGVuIGFsbCBhc3NldHMgYXJlIHJlYWR5LlxuICogSWYgYWxsIGFzc2V0cyBoYXZlIGFscmVhZHkgbG9hZGVkLCBjYWxsIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseS5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdFxuICogaXRzZWxmIGNhbGxzIGFzIGEgY2FsbGJhY2sgd2hlbiBpdCBoYXMgZmluaXNoZWQuXG4gKlxuICogQHBhcmFtIGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsYmFjayggY2IgKSB7XG4gICAgaWYoIGV4cGVjdGVkQXNzZXRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgZnVuY3Rpb24gY29uc2lzdGVudGx5IGFzeW5jaHJvbm91c1xuICAgICAgICBzZXRUaW1lb3V0KCBjYiwgMCApO1xuICAgIH1cblxuICAgIGNhbGxiYWNrcy5wdXNoKCBjYiApO1xufTtcblxuXG4vKipcbiAqIEFkZCBhbiBleHBlY3RlZCBhc3NldCB0byB0aGUgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBhc3NldFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0KCBhc3NldCApIHtcbiAgICBpZiggZXhwZWN0ZWRBc3NldHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBjb25zb2xlLndhcm4oICdBbiBleHBlY3RlZCBhc3NldCBcIicgKyBhc3NldCArICdcIiB3YXMgYWRkZWQgJ1xuICAgICAgICAgICAgKyAnYnV0IGFsbCBwcmV2aW91cyBhc3NldHMgaGF2ZSBhbHJlYWR5IGZpbmlzaGVkIGxvYWRpbmcnICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBlY3RlZEFzc2V0cy5wdXNoKCBhc3NldCApO1xufTtcblxuXG4vKipcbiAqIEFzIGEgYml0IG9mIGEgaGFjayB0aGlzIGVuc3VyZXMgdGhlIGdhbWUgc3RhcnRpbmcgY2FsbGJhY2sgaXMgYWx3YXlzXG4gKiB0aGUgbGFzdCBvbmUuXG4gKlxuICogQHBhcmFtIGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5hbENhbGxiYWNrKCBjYiApIHtcbiAgICBsYXN0Q2FsbGJhY2sgPSBjYjtcbn07XG5cblxuLyoqXG4gKiBXaGVuIGFuIGFzc2V0IGhhcyBmaW5pc2hlZCBsb2FkaW5nLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxuICpcbiAqIEBwYXJhbSBhc3NldCBUaGUgbmFtZSBvZiB0aGUgYXNzZXQgdGhhdCdzIHJlYWR5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBhc3NldCB3YXMgZXhwZWN0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaGVkKCBhc3NldCApIHtcbiAgICBjb25zdCBpbmRleCA9IGV4cGVjdGVkQXNzZXRzLmluZGV4T2YoIGFzc2V0ICk7XG5cbiAgICBpZiggaW5kZXggPT09IC0xICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGZyb20gdGhlIGxpc3Qgb2YgZXhwZWN0ZWQgYXNzZXRzXG4gICAgZXhwZWN0ZWRBc3NldHMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgLy8gaWYgZXZlcnl0aGluZydzIHJlYWR5LCBydW4gdGhlIGNhbGxiYWNrc1xuICAgIGlmKCBleHBlY3RlZEFzc2V0cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07IiwiaW1wb3J0IHsgZmluaXNoZWQgfSBmcm9tIFwiLi9hc3NldHNcIjtcbmltcG9ydCBlcnJvciBmcm9tIFwiLi9lcnJvclwiO1xuXG53aW5kb3cuTW9kdWxlID0ge1xuICAgIGFyZ3VtZW50czogW10sXG4gICAgcHJlUnVuOiBbXSxcbiAgICBwb3N0UnVuOiBbIGZ1bmN0aW9uKCkgeyBmaW5pc2hlZCggJ2VuZ2luZScgKTsgfSBdLFxuICAgIHByaW50OiBmdW5jdGlvbiggdGV4dCApIHtcbiAgICAgICAgLy8gVGhlIGVuZ2luZSBzaG91bGQgYWx3YXlzIHVzZSB0aGUgY3VzdG9tIHRleHQgcHJpbnRpbmcgbWV0aG9kcy5cbiAgICAgICAgLy8gQW55dGhpbmcgcHJpbnRlZCB0byBzdGRvdXQgaXMgYW4gZXJyb3IuXG4gICAgICAgIGVycm9yKCBcIlVuZXhwZWN0ZWQgZW5naW5lIG91dHB1dCB0byBzdGRvdXQ6IFwiICsgdGV4dCApO1xuICAgIH0sXG4gICAgcHJpbnRFcnI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggYXJndW1lbnRzICk7XG4gICAgICAgIGVycm9yKCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmpvaW4oJyAnKSApO1xuICAgIH0sXG4gICAgVE9UQUxfTUVNT1JZOiAzMzU1NDQzMiAgLy8gVHdpY2UgdGhlIGRlZmF1bHQ7IHRoaXMgaXMgZW5vdWdoIHRvIHJ1biBhbnkgZXhpc3RpbmcgR2x1bHggZ2FtZS5cbn07IiwiaW1wb3J0IHsgdGV4dFdhc1ByaW50ZWQgfSBmcm9tIFwiLi9pbnB1dFwiO1xuXG4vLyBvdXRwdXQgYnVmZmVycyBmb3IgYWxsIHdpbmRvd3NcbmNvbnN0IG91dHB1dEJ1ZmZlciA9IFsgXCJcIiBdO1xuXG5cbi8qKlxuICogTWFrZSB0ZXh0IEhUTUwtcHJpbnRhYmxlXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUh0bWwoIHRleHQgKSB7XG4gICAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSApIHtcblxuICAgICAgICAvLyBFeHRlbmRlZCBMYXRpbi0xIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBhZGRlZCBhcyBIVE1MIGVudGl0aWVzXG4gICAgICAgIGlmKCB0ZXh0LmNoYXJDb2RlQXQoIGkgKSA+IDEyNyApIHtcbiAgICAgICAgICAgIGVuY29kZWQgKz0gXCImI1wiICsgdGV4dC5jaGFyQ29kZUF0KCBpICkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCggdGV4dFsgaSBdICkge1xuICAgICAgICAgICAgICAgIGNhc2UgJyYnOlxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkICs9ICcmYW1wOyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZWQgKz0gJyZsdDsnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkICs9ICcmZ3Q7JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkICs9ICdcXG4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZWQgKz0gdGV4dFsgaSBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGVkO1xufVxuXG5cbi8qKlxuICogQWRkIHRleHQgdG8gdGhlIHRleHQgYnVmZmVyXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCggdGV4dCwgdGFyZ2V0V2luZG93ICkge1xuICAgIGlmKCAhb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSA9IFwiXCI7XG4gICAgfVxuXG4gICAgaWYoIHRleHQuaW5kZXhPZiggJ1xcbicgKSA+IC0xIHx8IHRleHQuaW5kZXhPZiggJ1xccicgKSA+IC0xICkge1xuICAgICAgICBjb25zdCBuZXh0TEJSID0gTWF0aC5tYXgoIHRleHQubGFzdEluZGV4T2YoICdcXG4nICksIHRleHQubGFzdEluZGV4T2YoICdcXHInICkgKSArIDE7XG5cbiAgICAgICAgb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSArPSBlbmNvZGVIdG1sKCB0ZXh0LnN1YnN0ciggMCwgbmV4dExCUiApICk7XG4gICAgICAgIGZsdXNoKCB0YXJnZXRXaW5kb3cgKTtcbiAgICAgICAgb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSA9IGVuY29kZUh0bWwoIHRleHQuc3Vic3RyKCBuZXh0TEJSICkgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gKz0gZW5jb2RlSHRtbCggdGV4dCApO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIFByaW50IG91dCB0aGUgdGV4dCBidWZmZXJcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaCggdGFyZ2V0V2luZG93ICkge1xuICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgZm9yKCB2YXIgaSBpbiBvdXRwdXRCdWZmZXIgKSB7XG4gICAgICAgICAgICBmbHVzaCggK2kgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSB8fCAhaGF2ZW4ud2luZG93LmdldCggdGFyZ2V0V2luZG93ICkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbi8vICAgICAgICBjb25zb2xlLmxvZygnZmx1c2hpbmcnLCBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdICk7XG4gICAgLy8gaWYoIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gPT09ICdcXG4nKSBkZWJ1Z2dlcjtcblxuICAgIGhhdmVuLndpbmRvdy5hcHBlbmQoIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0sIHRhcmdldFdpbmRvdyApO1xuICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gPSBcIlwiO1xuXG4gICAgaWYoIHRhcmdldFdpbmRvdyA9PT0gMCApIHtcbiAgICAgICAgdGV4dFdhc1ByaW50ZWQoIHRydWUgKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGEgbmV3bGluZSB0byB0aGUgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld2xpbmUoIHRhcmdldFdpbmRvdyApIHtcbiAgICBpZiggb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSArPSAnXFxuJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gPSAnXFxuJztcbiAgICB9XG5cbiAgICBmbHVzaCggdGFyZ2V0V2luZG93ICk7XG59XG4iLCIvKipcbiAqIFNob3cgYW4gZXJyb3IgbWVzc2FnZSBhbmQgaGFsdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3IoIG1lc3NhZ2UgKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3Bpbm5lcicgKTtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlcicgKTtcblxuICAgIGVsZW0uaWQgPSAnZmF0YWwtZXJyb3InO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cbiAgICAvLyByZW1vdmUgc3Bpbm5lciBhbmltYXRpb24gaWYgZXJyb3IgaGFwcGVuZWQgb24gbG9hZFxuICAgIGlmKCBzcGlubmVyICkge1xuICAgICAgICBzcGlubmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHNwaW5uZXIgKTtcbiAgICB9XG5cbiAgICAvLyB2aXN1YWwgbm90aWZpY2F0aW9uIHRoYXQgbG9hZGluZyBoYXMgc3RvcHBlZFxuICAgIGlmKCBsb2FkZXIgKSB7XG4gICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnc3RvcHBlZCc7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCBtZXNzYWdlICk7XG59XG4iLCJyZXF1aXJlKCBcImN1c3RvbS1ldmVudC1wb2x5ZmlsbFwiICk7XG5cbmltcG9ydCB7IGFkZENhbGxiYWNrLCBmaW5pc2hlZCB9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IGVycm9yIGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQgeyBrZXlwcmVzcyB9IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0UHJvbXB0IH0gZnJvbSBcIi4vcHJvbXB0XCI7XG5pbXBvcnQgeyBhdXRvc2F2ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmxldCBpbnRlcnByZXRlckxvYWRlZCA9IGZhbHNlO1xubGV0IGlzR2FtZWZpbGVMb2FkZWQgPSBmYWxzZTtcbmxldCBnYW1lZmlsZTtcbmxldCBjaGVja3N1bTtcbmxldCBkYXRhZGlyO1xubGV0IHN0b3J5RmlsZW5hbWU7XG5cblxuLyoqXG4gKiBGTlYzMi1hbGdvcml0aG0gdG8gY2FsY3VsYXRlIHRoZSBzdG9yeSBmaWxlJ3MgY2hlY2tzdW0uXG4gKiBUaGUgY2hlY2tzdW0gaXMgdXNlZCB0byBuYW1lIHRoZSBkaXJlY3RvcmllcyBmb3Igc2F2ZSBnYW1lcy5cbiAqXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vY29kZXBlbi5pby9JbWFnaW5lUHJvZ3JhbW1pbmcvcG9zdC9jaGVja3N1bS1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQtY2hlY2tzdW0tanMtZW5naW5lXG4gKi9cbmZ1bmN0aW9uIGZudjMyKCBhICkge1xuICAgIGNvbnN0IGxlbiA9IGEubGVuZ3RoO1xuICAgIGxldCBmbnYgPSAwO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgZm52ID0gKGZudiArICgoKGZudiA8PCAxKSArIChmbnYgPDwgNCkgKyAoZm52IDw8IDcpICsgKGZudiA8PCA4KSArIChmbnYgPDwgMjQpKSA+Pj4gMCkpIF4gKGFbIGkgXSAmIDB4ZmYpO1xuICAgIH1cblxuICAgIHJldHVybiBmbnYgPj4+IDA7XG59XG5cblxuLyoqXG4gKiBXcml0ZXMgdGhlIGxvYWRlZCBnYW1lIGZpbGUgaW50byB0aGUgdmlydHVhbCBmaWxlIHN5c3RlbSwgYnV0IG9ubHlcbiAqIGlmIGJvdGggdGhlIGludGVycHJldGVyIGFuZCB0aGUgZ2FtZSBmaWxlIGFyZSBib3RoIGxvYWRlZC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIHdoZW4gYWxsIHJlcXVpcmVkIGFzc2V0cyBoYXZlIGZpbmlzaGVkIGxvYWRpbmdcbiAqL1xuZnVuY3Rpb24gd3JpdGVHYW1lZmlsZSggZG9uZSApIHtcbiAgICBpZiggIWludGVycHJldGVyTG9hZGVkIHx8ICFpc0dhbWVmaWxlTG9hZGVkICkge1xuICAgICAgICBpZiggIWludGVycHJldGVyTG9hZGVkICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXItbWVzc2FnZScgKS5pbm5lckhUTUwgPSAnTG9hZGluZyBpbnRlcnByZXRlcic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlci1tZXNzYWdlJyApLmlubmVySFRNTCA9ICdMb2FkaW5nIGdhbWUgZmlsZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlci1tZXNzYWdlJyApLmlubmVySFRNTCA9ICdTdGFydGluZyBnYW1lJztcblxuICAgIEZTLndyaXRlRmlsZShcbiAgICAgICAgc3RvcnlGaWxlbmFtZSxcbiAgICAgICAgZ2FtZWZpbGUsXG4gICAgICAgIHtlbmNvZGluZzogJ2JpbmFyeSd9XG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgdmlydHVhbCBzYXZlZmlsZSBkaXJlY3RvcnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGRhdGFkaXIgPSAnL2dhbWVkYXRhXycgKyBjaGVja3N1bTtcblxuICAgIGlmKCAhRlMuYW5hbHl6ZVBhdGgoIGRhdGFkaXIgKS5leGlzdHMgKSB7XG4gICAgICAgIEZTLm1rZGlyKCBkYXRhZGlyICk7XG4gICAgfVxuXG4gICAgRlMubW91bnQoIElEQkZTLCB7cm9vdDogJy4nfSwgZGF0YWRpciApO1xuXG4gICAgLy8gY3JlYXRlIGEgZGlyZWN0b3J5IGZvciBzaGFyZWQgZ2FtZSBkYXRhXG4gICAgaWYoICFGUy5hbmFseXplUGF0aCggJ2dhbWVkYXRhJyApLmV4aXN0cyApIHtcbiAgICAgICAgRlMubWtkaXIoICdnYW1lZGF0YScgKTtcbiAgICB9XG5cbiAgICBGUy5tb3VudCggSURCRlMsIHtyb290OiAnLid9LCAnZ2FtZWRhdGEnICk7XG4gICAgRlMuY2hkaXIoICdnYW1lZGF0YScgKTtcblxuICAgIC8vIHN5bmNocm9uaXplIHdpdGggbG9jYWwgZGF0YVxuICAgIEZTLnN5bmNmcyggdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCBnZXQoICdhdXRvc2F2ZScgKSApIHtcbiAgICAgICAgICAgIGF1dG9zYXZlLnNldE5hbWUoICcvZ2FtZWRhdGFfJyArIGNoZWNrc3VtICsgJy9hdXRvc2F2ZScgKTtcbiAgICAgICAgICAgIGF1dG9zYXZlLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YXJ0IHJlYWN0aW5nIHRvIGtleXByZXNzZXNcbiAgICAgICAga2V5cHJlc3MuaW5pdCgpO1xuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9ICk7XG59XG5cblxuLyoqXG4gKiBTdGFydCBsb2FkaW5nIHRoZSBzdG9yeSBmaWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggdmlydHVhbEZpbGVuYW1lICkge1xuICAgIGNvbnN0IGdhbWVVcmwgPSBnZXQoICdzdG9yeScgKTtcbiAgICBjb25zdCBwcm94eU9wdGlvbiA9IGdldCggJ3VzZV9wcm94eScgKTtcbiAgICBsZXQgcmVxdWVzdFVybDtcbiAgICBsZXQgdXNlUHJveHk7XG5cbiAgICBzdG9yeUZpbGVuYW1lID0gdmlydHVhbEZpbGVuYW1lO1xuXG4gICAgaWYoICFnYW1lVXJsICkge1xuICAgICAgICBlcnJvciggXCJObyBzdG9yeSBmaWxlIHNwZWNpZmllZFwiICk7XG4gICAgfVxuXG4gICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgc3dpdGNoKCBcIlwiICsgcHJveHlPcHRpb24gKSB7XG4gICAgICAgIGNhc2UgJ2Fsd2F5cyc6XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIHVzZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ25ldmVyJzpcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIHVzZVByb3h5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuLy8gICAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyB1c2UgcHJveHkgZm9yIENPUlMgcmVxdWVzdHNcbiAgICAgICAgICAgIHVzZVByb3h5ID0gL15odHRwcz86XFwvXFwvLy50ZXN0KCBnYW1lVXJsICkgJiYgZ2FtZVVybC5pbmRleE9mKCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKSAhPT0gMDtcblxuICAgICAgICAgICAgLy8gd2FybiBhYm91dCBpbnZhbGlkIG9wdGlvblxuICAgICAgICAgICAgaWYoIHByb3h5T3B0aW9uICE9PSAnYXV0bycgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCAnVW5rbm93biB1c2VfcHJveHkgb3B0aW9uIFwiJyArIHByb3h5T3B0aW9uICsgJ1wiLCB1c2luZyBcImF1dG9cIicgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmKCB1c2VQcm94eSApIHtcbiAgICAgICAgcmVxdWVzdFVybCA9IGdldCggJ3Byb3h5X3VybCcgKS5zcGxpdCggJyVzJyApLmpvaW4oIGVuY29kZVVSSUNvbXBvbmVudCggZ2FtZVVybCApICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXF1ZXN0VXJsID0gZ2FtZVVybDtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFjayggd3JpdGVHYW1lZmlsZSApO1xuXG4gICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIHhtbGh0dHAucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FICkge1xuICAgICAgICAgICAgc3dpdGNoKCB4bWxodHRwLnN0YXR1cyApIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgaXNHYW1lZmlsZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVmaWxlID0gbmV3IFVpbnQ4QXJyYXkoIHhtbGh0dHAucmVzcG9uc2UgKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gPSBmbnYzMiggZ2FtZWZpbGUgKS50b1N0cmluZyggMTYgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaWduYWwgdGhhdCB0aGUgc3RvcnkgZmlsZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCggJ3N0b3J5ZmlsZScgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoIFwiR2FtZSBmaWxlIG5vdCBmb3VuZFwiICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgICAgIGlmKCB1c2VQcm94eSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KCBudWxsLCBuZXcgVWludDhBcnJheSggeG1saHR0cC5yZXNwb25zZSApICkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSBlcnJvciBlbmNvdW50ZXJlZCB3aGVuIGxvYWRpbmcgZ2FtZSBmaWxlJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAwOiAgICAgLy8gcHJvYmFibHkgY3Jvc3Mtb3JpZ2luIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCBcIlVuc3BlY2lmaWVkIGVycm9yIGxvYWRpbmcgZ2FtZSBmaWxlIChwb3NzaWJseSBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb24pXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBlcnJvciggXCJFcnJvciBsb2FkaW5nIGdhbWUgZmlsZS4gU2VydmVyIHJldHVybmVkIHN0YXR1cyBjb2RlIFwiICsgeG1saHR0cC5zdGF0dXMgKyBcIiAoXCIgKyB4bWxodHRwLnN0YXR1c1RleHQgKyBcIilcIiApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4bWxodHRwLm9wZW4oIFwiR0VUXCIsIHJlcXVlc3RVcmwsIHRydWUgKTtcbiAgICB4bWxodHRwLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjsgICAvLyB0aGlzIG11c3QgYmUgZXhhY3RseSBoZXJlLCBvdGhlcndpc2UgSUUxMSBicmVha3NcbiAgICB4bWxodHRwLnNlbmQoKTtcbn07XG5cblxuLyoqXG4gKiBBc2sgdGhlIHVzZXIgdG8gcHJvdmlkZSBhIGZpbGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gd2h5IFRoZSByZWFzb24gd2h5IGEgZmlsZSBpcyBiZWluZyBwcm9tcHRlZC5cbiAqICAgICAgICAgICAgT25lIG9mIFwiZm9yIGNvbW1hbmQgcmVjb3JkaW5nXCIsIFwiZm9yIGNvbW1hbmQgcGxheWJhY2tcIixcbiAqICAgICAgICAgICAgXCJ0byByZXN0b3JlXCIsIFwidG8gc2F2ZVwiIG9yIFwidG8gYmVnaW4gdHJhbnNjcmlwdGlvbiAob3IgcHJpbnRlciBuYW1lKVwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQoIHdoeSApIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHdpbmRvdy5wcm9tcHQoIFwiRW50ZXIgZmlsZW5hbWUgXCIgKyB3aHkgKTtcbiAgICBjb25zdCBpbnB1dCA9IGdldFByb21wdCgpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIFwiSU5QVVRcIiApWzBdO1xuXG4gICAgaWYoIGZpbGVuYW1lICYmIC9cXFMvLnRlc3QoIGZpbGVuYW1lICkgKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gZGF0YWRpciArICcvJyArIGZpbGVuYW1lLnNwbGl0KCAnLycgKS5qb2luKCAnLScgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgICAvLyB3ZSdsbCBoYXZlIHRvIHdhaXQgZm9yIHRoZSBVSSB0byBnZXQgcmVhZHkgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGdldFByb21wdC5kaXNwYXRjaEV2ZW50KCBuZXcgRXZlbnQoICdzdWJtaXQnICkgKTtcblxuICAgICAgICAvLyAuLmFuZCBhbm90aGVyIHRpbWVvdXQgdG8gc3luYyB0aGUgZmlsZXN5c3RlbS5cbiAgICAgICAgLy8gV2Ugc2hvdWxkIGhvb2sgdG8gdGhlIGZpbGUgc2F2ZSBpdHNlbGYsIGJ1dCB0aGlzIHNob3VsZCBkbyBmb3Igbm93LFxuICAgICAgICAvLyBlc3BlY2lhbGx5IHNpbmNlIHRoaXMgZXhpc3RzIG9ubHkgYXMgYSBiYWNrdXAgbWVhc3VyZSBpZiB0aGVcbiAgICAgICAgLy8gc2FtZSB0aGluZyBpbiB0aGUgb25iZWZvcmV1bmxvYWQgZXZlbnQgZmFpbHMuXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgRlMuc3luY2ZzKCBmYWxzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sIDEwMDAgKTtcbiAgICB9LCAxICk7XG59O1xuXG5cbi8qKlxuICogUmVhZCB0aGUgVUkgc3RhdGUgZnJvbSB0aGUgZmlsZXN5c3RlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVSVN0YXRlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gRlMucmVhZEZpbGUoXG4gICAgICAgICAgICBhdXRvc2F2ZUZpbGVuYW1lICsgJ19oYXZlbl91aWRhdGEnLFxuICAgICAgICAgICAge2VuY29kaW5nOiAndXRmOCd9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoIHN0YXRlICk7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFN5bmNocm9uaXplIHZpcnR1YWwgZmlsZXN5c3RlbSBzdGF0dXMgd2l0aCBJbmRleGVkREIuXG4gKiBDYWxsZWQgYnkgdGhlIGVuZ2luZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN5bmNmcygpIHtcbiAgICBGUy5zeW5jZnMoIGZhbHNlLCBmdW5jdGlvbigpIHt9ICk7XG59O1xuXG5cbi8vIHN0b3JlIGRhdGEgc2F2ZWQgYnkgdGhlIGdhbWUgZmlsZVxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgRlMuc3luY2ZzKCBmYWxzZSwgZnVuY3Rpb24oKSB7fSApO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXItbWVzc2FnZScgKS5pbm5lckhUTUwgPSAnTG9hZGluZyBpbnRlcnByZXRlciBhbmQgZ2FtZSBmaWxlJztcbiIsImltcG9ydCB7YWRkQ2FsbGJhY2ssIGZpbmFsQ2FsbGJhY2t9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHtpbml0IGFzIGluaXRGaWxlfSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQge2luaXQgYXMgaW5wdXRJbml0fSBmcm9tIFwiLi9pbnB1dFwiO1xuaW1wb3J0IHtyZW1vdmV9IGZyb20gXCIuL2xvYWRlclwiO1xuaW1wb3J0IHtpbml0IGFzIGluaXRPcHRpb25zfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQge2luaXQgYXMgaW5pdFByb21wdH0gZnJvbSBcIi4vcHJvbXB0XCI7XG5pbXBvcnQge2luaXQgYXMgaW5pdFN0eWxlfSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IEZhc3RDbGljayBmcm9tIFwiLi92ZW5kb3IvZmFzdGNsaWNrXCI7XG5cbi8qKlxuICogU3RhcnRzIHRoZSBDIGVuZ2luZS4gVGhlIGVuZ2luZSBzaG91bGQgaGF2ZSByZXBsYWNlZCBtYWluKCkgd2l0aCBhblxuICogb3RoZXJ3aXNlIGVtcHR5IGZ1bmN0aW9uIHRoYXQgb25seSBzdG9yZXMgdGhlIGNvbW1hbmQgbGluZSBhcmd1bWVudHNcbiAqIGZvciBwYXNzaW5nIHRvIHRoZSByZWFsIG1haW4oKSBsYXRlci5cbiAqXG4gKiBzdGFydEVuZ2luZSgpIGNhbGxzIGhhdmVuX3N0YXJ0KCkgaW4gdGhlIEMgY29kZSwgd2hpY2ggc2hvdWxkIHJ1blxuICogdGhlIHJlYWwgbWFpbigpIGZ1bmN0aW9uIHRoYXQgaGFzIGJlZW4gcmVuYW1lZCB0byBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIHN0YXRpYyBjaGFyICoqbXlfYXJndjtcbiAqXG4gKiBpbnQgbWFpbihpbnQgYXJnYywgY2hhciAqYXJndltdKVxuICoge1xuICAgICAqICAgIG15X2FyZ3YgPSBhcmd2O1xuICAgICAqICAgIHJldHVybiAwO1xuICAgICAqIH1cbiAqXG4gKiBpbnQgRU1TQ1JJUFRFTl9LRUVQQUxJVkUgaGF2ZW5fc3RhcnQoKVxuICoge1xuICAgICAqICAgIHJldHVybiByZWFsX21haW4oMiwgbXlfYXJndik7XG4gICAgICogfVxuICpcbiAqIGludCByZWFsX21haW4oaW50IGFyZ2MsIGNoYXIgKmFyZ3ZbXSkgIC8vIHJlbmFtZWQgZnJvbSBtYWluKClcbiAqL1xuZnVuY3Rpb24gc3RhcnRFbmdpbmUoKSB7XG4gICAgX2hhdmVuX3N0YXJ0KCk7XG59XG5cblxuLyoqXG4gKiBTdGFydCB0aGUgZ2FtZS4gSWYgYXNzZXRzIGhhdmVuJ3QgbG9hZGVkIHlldCwgdGhlIGdhbWUgc3RhcnRzXG4gKiBhcyBzb29uIGFzIHRoZXkncmUgcmVhZHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydCggb3B0ICkge1xuICAgIC8vIGxvYWQgdGhlIEVtdGVycHJldGVyIGVuZ2luZVxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9wZW4oICdHRVQnLCAnZW5naW5lLmJpbicsIHRydWUgKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIE1vZHVsZS5lbXRlcnByZXRlckZpbGUgPSB4aHIucmVzcG9uc2U7XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdlbmdpbmUuanMnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBzY3JpcHQgKTtcbiAgICB9O1xuICAgIHhoci5zZW5kKCBudWxsICk7XG5cbiAgICAvLyByZWFkIG9wdGlvbnMgZnJvbSBVUkxcbiAgICBpbml0T3B0aW9ucyggb3B0Lm9wdGlvbnMgKTtcblxuICAgIC8vIGxvYWQgdGhlIHN0b3J5IGZpbGVcbiAgICBpbml0RmlsZSggb3B0LnZpcnR1YWxTdG9yeWZpbGUgKTtcblxuICAgIC8vIHNldCB1cCBpbnB1dCBoYW5kbGVyc1xuICAgIGFkZENhbGxiYWNrKCBmdW5jdGlvbiggY2IgKSB7XG4gICAgICAgIGlucHV0SW5pdCgpO1xuICAgICAgICBjYigpO1xuICAgIH0gKTtcblxuICAgIC8vIHNldCB1cCB0aGUgcHJvbXB0XG4gICAgaW5pdFByb21wdCgge1xuICAgICAgICBlbmdpbmVQcm9tcHQ6ICEhb3B0LmVuZ2luZVByb21wdCxcbiAgICAgICAgdW5pY29kZTogISFvcHQudW5pY29kZVxuICAgIH0gKTtcblxuICAgIC8vIGluaXRpYWxpemUgc3R5bGUgb3B0aW9uc1xuICAgIGluaXRTdHlsZSgge1xuICAgICAgICBlbmdpbmVDb2xvcnM6ICEhb3B0LmVuZ2luZUNvbG9ycyxcbiAgICAgICAgZW5naW5lRm9udEZhbWlseTogISFvcHQuZW5naW5lRm9udEZhbWlseVxuICAgIH0gKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgbG9hZGVyXG4gICAgYWRkQ2FsbGJhY2soIGZ1bmN0aW9uKCBjYiApIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIGNiKCk7XG4gICAgfSApO1xuXG4gICAgLy8gc3RhcnQgdGhlIGVuZ2luZVxuICAgIGZpbmFsQ2FsbGJhY2soIHN0YXJ0RW5naW5lICk7XG5cbiAgICAvKipcbiAgICAgKiBmYXN0Y2xpY2suanMgaW5pdGlhbGl6ZXIgLSBmaXhlcyB0YXBwaW5nIGlzc3VlcyBpbiBtb2JpbGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICBpZiggJ2FkZEV2ZW50TGlzdGVuZXInIGluIGRvY3VtZW50ICkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgRmFzdENsaWNrLmF0dGFjaCggZG9jdW1lbnQuYm9keSApO1xuICAgICAgICB9LCBmYWxzZSApO1xuICAgIH1cbn1cblxuaW1wb3J0ICogYXMgZmlsZU1ldGhvZHMgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0ICogYXMgaW5wdXRNZXRob2RzIGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgKiBhcyBwcm9tcHRNZXRob2RzIGZyb20gXCIuL3Byb21wdFwiO1xuaW1wb3J0ICogYXMgc3RhdGVNZXRob2RzIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyB3aW5kb3dNZXRob2RzIGZyb20gXCIuL3dpbmRvd1wiO1xuXG4vLyBleHBvc2UgbWV0aG9kcyBmb3IgdGhlIEMgZW5naW5lIHRvIHVzZVxud2luZG93LmhhdmVuID0ge1xuICAgIGZpbGU6IGZpbGVNZXRob2RzLFxuICAgIGlucHV0OiBpbnB1dE1ldGhvZHMsXG4gICAgcHJvbXB0OiBwcm9tcHRNZXRob2RzLFxuICAgIHN0YXRlOiBzdGF0ZU1ldGhvZHMsXG4gICAgd2luZG93OiB3aW5kb3dNZXRob2RzXG59OyIsImltcG9ydCB7IGZsdXNoIH0gZnJvbSBcIi4vYnVmZmVyXCI7XG5pbXBvcnQgeyBzY3JvbGxPckZvY3VzLCBzZXREb1Njcm9sbCB9IGZyb20gXCIuL3Byb21wdFwiO1xuaW1wb3J0IGVycm9yIGZyb20gXCIuL2Vycm9yXCI7XG5cbi8vIGN1cnJlbnQgbW9kZSBvZiBpbnB1dCB0aGUgZ2FtZSBleHBlY3RzOiBidWZmZXIsIGdldGtleSwgZ2V0bGluZSBvciBlbmRnYW1lLlxuLy8gbnVsbCBpcyBubyBpbnB1dCBhY2NlcHRlZCAoZHVyaW5nIHN0YXJ0dXApXG5sZXQgaW5wdXRNb2RlID0gbnVsbDtcblxuLy8gc3RvcmVzIGtleXByZXNzZXMgcHJlc3NlZCB3aGVuIHRoZSBlbmdpbmUgaXNuJ3Qgc3BlY2lmaWNhbGx5IGV4cGVjdGluZyB0aGVtIChcImJ1ZmZlclwiIGlucHV0TW9kZSlcbmNvbnN0IGtleXByZXNzQnVmZmVyID0gW107XG5cbmxldCBpc1RleHRQcmludGVkID0gZmFsc2U7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGlucHV0IG1vZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGUoKSB7XG4gICAgcmV0dXJuIGlucHV0TW9kZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBsaXN0ZW4gdG8ga2V5cHJlc3NlcyBhbmQgbW91c2UgY2xpY2tzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBrZXlwcmVzcy5zZW5kLCBmYWxzZSApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGtleXByZXNzLnNlbmQsIGZhbHNlICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGtleXByZXNzID0ge1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBnYW1lIHN0YXJ0cy5cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gc3RhcnQgZXhwZWN0aW5nIGtleXByZXNzZXNcbiAgICAgICAgaWYoICFpbnB1dE1vZGUgKSB7XG4gICAgICAgICAgICBpbnB1dE1vZGUgPSAnYnVmZmVyJztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGVyZSdzIGEga2V5cHJlc3Mgd2FpdGluZyBpbiB0aGUgYnVmZmVyLlxuICAgICAqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1dhaXRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmbHVzaCgpO1xuXG4gICAgICAgIGlmKCBpc1RleHRQcmludGVkICkge1xuICAgICAgICAgICAgc2Nyb2xsT3JGb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXByZXNzQnVmZmVyLmxlbmd0aCA+IDA7XG4gICAgfSxcblxuICAgIHNlbmQ6IGZ1bmN0aW9uKCBlICkge1xuICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbHRvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcblxuICAgICAgICAvLyBkb24ndCByZWFjdCB0byBtb2RpZmllciBrZXlzXG4gICAgICAgIGlmKCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuc2hpZnRLZXkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goIGlucHV0TW9kZSApIHtcbiAgICAgICAgICAgIGNhc2UgJ2J1ZmZlcic6XG4gICAgICAgICAgICAgICAga2V5cHJlc3NCdWZmZXIucHVzaCgga2V5Q29kZSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdnZXRsaW5lJzpcbiAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nIGV4Y2VwdCBzY3JvbGxcbiAgICAgICAgICAgICAgICBzY3JvbGxPckZvY3VzKCBlICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjYXNlICdnZXRrZXknOlxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIHdpdGggc2NyaXB0XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZGdhbWUnOlxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGh1Z29qc19vcHRpb25zLmV4aXRfdXJsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBlcnJvciggJ0ludGVycHJldGVyIGVycm9yOiB1bmtub3duIGlucHV0IG1vZGUgJyArIGlucHV0TW9kZSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRNb2RlID0gJ2J1ZmZlcic7XG5cbiAgICAgICAgLy8gbGV0IHRoZSBzY3JvbGwgaGFuZGxlciB0YWtlIHRoaXMgaWYgd2UncmUgbm90IGF0IHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICAgICAgaWYoIHNjcm9sbHRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gNDAgKSB7XG4gICAgICAgICAgICBzY3JvbGxPckZvY3VzKCBlICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICAgICAnaGF2ZW5fZ2V0a2V5JyxcbiAgICAgICAgICAgICdudWxsJyxcbiAgICAgICAgICAgIFsgJ251bWJlcicgXSxcbiAgICAgICAgICAgIFsga2V5Q29kZSBdXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHdhaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnB1dE1vZGUgPSAnZ2V0a2V5JztcblxuICAgICAgICBmbHVzaCgpO1xuICAgICAgICBzZXREb1Njcm9sbCgpO1xuXG4gICAgICAgIC8vIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSBrZXlwcmVzcyBidWZmZXIsIFwicHVzaFwiIHRoYXQga2V5XG4gICAgICAgIGlmKCBrZXlwcmVzc0J1ZmZlci5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAga2V5cHJlc3Muc2VuZCh7IGtleUNvZGU6IGtleXByZXNzQnVmZmVyLnNoaWZ0KCkgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKlxuICogU2V0IGEgbmV3IGlucHV0IG1vZGUuXG4gKlxuICogQHBhcmFtIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGUoIG1vZGUgKSB7XG4gICAgaW5wdXRNb2RlID0gbW9kZTtcbn1cblxuXG4vKipcbiAqIE1ha2VzIGEgbm90ZSB0aGF0IHRleHQgaGFzIGJlZW4gcHJpbnRlZCBvbiB0aGUgc2NyZWVuIHNpbmNlIGxhc3QgY2hlY2tcbiAqXG4gKiBAcGFyYW0gbmV3U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRleHRXYXNQcmludGVkKCBuZXdTdGF0ZSA9IHRydWUgKSB7XG4gICAgaXNUZXh0UHJpbnRlZCA9IG5ld1N0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFdhc1ByaW50ZWQoKSB7XG4gICAgcmV0dXJuIHRleHRXYXNQcmludGVkO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgY29uc3QgbG9hZGVyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9hZGVyJyApO1xuXG4gICAgaWYoIGxvYWRlck92ZXJsYXkgKSB7XG4gICAgICAgIGxvYWRlck92ZXJsYXkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbG9hZGVyT3ZlcmxheSApO1xuICAgIH1cbn0iLCJjb25zdCBvcHQgPSB7XG4gICAgYXV0b3NhdmU6IHRydWUsXG4gICAgZXhpdF91cmw6ICcnLFxuICAgIGV4dHJhX29wY29kZXM6IHRydWUsXG4gICAgcHJveHlfdXJsOiAncHJveHkucGhwJyxcbiAgICB1c2VfcHJveHk6ICdhdXRvJyxcbiAgICB3aW5kb3dpbmc6IHRydWVcbn07XG5cblxuLyoqXG4gKiBQYXJzZSBhIEdFVCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlciggbmFtZSwgdHlwZSwgZGVmYXVsdFZhbHVlICkge1xuICAgIHZhciB2YWx1ZVNlYXJjaCA9IG5ldyBSZWdFeHAoICdbPyZdJyArIG5hbWUgKyAnPSguKj8pKCN8JnwkKScsICdpJyApLmV4ZWMoIHdpbmRvdy5sb2NhdGlvbi5ocmVmICksXG4gICAgICAgIHZhbHVlO1xuXG4gICAgaWYoIHZhbHVlU2VhcmNoID09PSBudWxsIHx8IHZhbHVlU2VhcmNoLmxlbmd0aCA8IDIgKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoIHZhbHVlU2VhcmNoWyAxIF0uc3BsaXQoICcrJyApLmpvaW4oICcgJyApICk7XG5cbiAgICBzd2l0Y2goIHR5cGUgKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgaWYoIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ29uJyB8fCB2YWx1ZSA9PT0gJzEnICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ29mZicgfHwgdmFsdWUgPT09ICcwJyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGlmKCBwYXJzZUZsb2F0KCB2YWx1ZSApICsgXCJcIiA9PT0gdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBOYU47XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmKCB2YWx1ZS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoIG5hbWUgKSB7XG4gICAgcmV0dXJuIG9wdFsgbmFtZSBdO1xufVxuXG5cbi8qKlxuICogUmVhZCBvcHRpb25zIGZyb20gdGhlIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggZGVmYXVsdHMgKSB7XG4gICAgbGV0IG9wdGlvbl9rZXk7XG5cbiAgICBkZWZhdWx0cyA9IGRlZmF1bHRzIHx8IHt9O1xuXG4gICAgZm9yKCBvcHRpb25fa2V5IGluIGRlZmF1bHRzICkge1xuICAgICAgICBpZiggZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoIG9wdGlvbl9rZXkgKSAmJiBkZWZhdWx0c1sgb3B0aW9uX2tleSBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBvcHRbIG9wdGlvbl9rZXkgXSA9IGRlZmF1bHRzWyBvcHRpb25fa2V5IF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIW9wdC5sb2NrX3N0b3J5ICkge1xuICAgICAgICBvcHQuc3RvcnkgPSBnZXRQYXJhbWV0ZXIoICdzdG9yeScsICdzdHJpbmcnLCBvcHQuc3RvcnkgKTtcbiAgICB9XG5cbiAgICBpZiggIW9wdC5sb2NrX29wdGlvbnMgKSB7XG4gICAgICAgIGZvciggb3B0aW9uX2tleSBpbiBvcHQgKSB7XG4gICAgICAgICAgICBpZiggb3B0aW9uX2tleSAhPT0gJ3N0b3J5JyAmJiBvcHQuaGFzT3duUHJvcGVydHkoIG9wdGlvbl9rZXkgKSApIHtcbiAgICAgICAgICAgICAgICBvcHRbIG9wdGlvbl9rZXkgXSA9IGdldFBhcmFtZXRlciggb3B0aW9uX2tleSwgdHlwZW9mIG9wdFsgb3B0aW9uX2tleSBdLCBvcHRbIG9wdGlvbl9rZXkgXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlc1xuICAgICAgICBpZiggb3B0LmV4aXRfdXJsID09PSAnZmFsc2UnIHx8IG9wdC5leGl0X3VybCA9PT0gJzAnICkge1xuICAgICAgICAgICAgb3B0LmV4aXRfdXJsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcHRpb24oIG5hbWUsIHZhbHVlICkge1xuICAgIG9wdFsgbmFtZSBdID0gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBmbHVzaCB9IGZyb20gXCIuL2J1ZmZlclwiO1xuXG5pbXBvcnQge1xuICAgIGdldE1vZGUgYXMgZ2V0SW5wdXRNb2RlLFxuICAgIHNldE1vZGUgYXMgc2V0SW5wdXRNb2RlXG59IGZyb20gXCIuL2lucHV0XCI7XG5cbmltcG9ydCB7IGF1dG9zYXZlIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuaW1wb3J0IHtcbiAgICBjb250YWluZXIgYXMgd2luZG93Q29udGFpbmVyLFxuICAgIGdldCBhcyBnZXRXaW5kb3dcbn0gZnJvbSBcIi4vd2luZG93XCI7XG5cbi8vIGNvbW1hbmQgaGlzdG9yeVxubGV0IGNtZEhpc3RvcnkgPSBbXTtcblxuLy8gY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY29tbWFuZCBoaXN0b3J5LiAtMTogbmV3IGlucHV0XG5sZXQgY3VycmVudENtZEhpc3RvcnkgPSAtMTtcblxuLy8gc3RvcmVzIHRoZSBjdXJyZW50bHkgdHlwZWQgY29tbWFuZCB3aGVuIGJyb3dzaW5nIHRoZSBoaXN0b3J5XG5sZXQgY3VycmVudENtZFRleHQgPSBcIlwiO1xuXG4vLyBzaG91bGQgdGhlIHNjcmVlbiBzY3JvbGwgZG93bj8gU2V0IHRvIGZhbHNlIGFmdGVyIHNjcmVlbiBjbGVhci5cbmxldCBkb1Njcm9sbCA9IGZhbHNlO1xuXG4vLyBkb2VzIHRoZSBlbmdpbmUgaGFuZGxlIHByaW50aW5nIHRoZSBwcm9tcHQgcHJlZml4P1xubGV0IGVuZ2luZVByb21wdCA9IGZhbHNlO1xuXG4vLyBpbnB1dCBlbGVtZW50XG5sZXQgaW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsaW5laW5wdXQtZmllbGQnICk7XG5cbi8vIGlucHV0IGVsZW1lbnQncyBYIHBvc2l0aW9uIGluIHJlbGF0aW9uIHRvIHRoZSB3aW5kb3dcbmxldCBpbnB1dFggPSAwO1xuXG4vLyBoYXMgdGV4dCBiZWVuIHByaW50ZWQgb24gc2NyZWVuP1xubGV0IGlzVGV4dFByaW50ZWQgPSBmYWxzZTtcblxuLy8gcHJlZml4LCBpLmUuIHRoZSA+IG9yIHdoYXRldmVyIGVsc2UgaXMgc2hvd24gYmVmb3JlIHRoZSBpbnB1dCBmaWVsZFxubGV0IHByZWZpeEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xpbmVpbnB1dC1wcmVmaXgnICk7XG5cbi8vIHRoZSBwYXJlbnQgcHJvbXB0IGZvcm0gZWxlbWVudFxubGV0IHByb21wdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xpbmVpbnB1dCcgKTtcblxuLy8gbmV3IGV2ZW50IHR5cGUgZm9yIG90aGVycyAobWFpbmx5IFZvcnBsZSkgd2hvIG5lZWQgdG8ga25vdyB3aGVuIGxpbmVcbi8vIGlucHV0IGlzIGF2YWlsYWJsZVxubGV0IGxpbmVpbnB1dFJlYWR5RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoICdsaW5laW5wdXRSZWFkeScgKTtcblxuXG4vKipcbiAqIEFwcGVuZCB0aGUgbGluZSBpbnB1dCB0byB0aGUgdHJhbnNjcmlwdC5cbiAqXG4gKiBAcGFyYW0gY2FyZXRcbiAqIEBwYXJhbSBpbnB1dFRleHRcbiAqIEBwYXJhbSB0YXJnZXRDb250YWluZXJcbiAqL1xuZnVuY3Rpb24gYXBwZW5kUHJvbXB0KCBjYXJldCwgaW5wdXRUZXh0LCB0YXJnZXRDb250YWluZXIgKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93Q29udGFpbmVyLmdldCggdGFyZ2V0Q29udGFpbmVyICk7XG4gICAgY29uc3QgbGFzdExpbmVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgY29uc3QgbGFzdFByZWZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgIGNvbnN0IGxhc3RDb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGxhc3QgbWFya2VyIGZyb20gdGhlIHByZXZpb3VzbHkgbGFzdCBpbnB1dFxuICAgIGNvbnN0IHByZXZpb3VzTGFzdFByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdsaW5laW5wdXQgbGFzdCcgKTtcblxuICAgIGZvciggbGV0IGkgPSBwcmV2aW91c0xhc3RQcm9tcHQubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkgKSB7XG4gICAgICAgIHByZXZpb3VzTGFzdFByb21wdFsgaSBdLmNsYXNzTGlzdC5yZW1vdmUoICdsYXN0JyApO1xuICAgIH1cblxuICAgIGxhc3RMaW5laW5wdXQuY2xhc3NOYW1lID0gJ2xpbmVpbnB1dCBsYXN0JztcbiAgICBsYXN0UHJlZml4LmNsYXNzTmFtZSA9ICdwcm9tcHQtcHJlZml4JztcbiAgICBsYXN0Q29tbWFuZC5jbGFzc05hbWUgPSAncHJvbXB0LWlucHV0JztcblxuICAgIGxhc3RQcmVmaXguaW5uZXJIVE1MID0gY2FyZXQ7XG4gICAgbGFzdENvbW1hbmQuaW5uZXJIVE1MID0gaW5wdXRUZXh0O1xuXG4gICAgbGFzdExpbmVpbnB1dC5hcHBlbmRDaGlsZCggbGFzdFByZWZpeCApO1xuICAgIGxhc3RMaW5laW5wdXQuYXBwZW5kQ2hpbGQoIGxhc3RDb21tYW5kICk7XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoIGxhc3RMaW5laW5wdXQgKTtcbn1cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgcHJvbXB0IGlucHV0IHRvIG5leHQgb3IgcHJldmlvdXMgY29tbWFuZCBpbiB0aGUgY29tbWFuZCBoaXN0b3J5LlxuICpcbiAqIEBwYXJhbSBkZWx0YSAxIGZvciBuZXh0IGNvbW1hbmQsIC0xIGZvciBwcmV2aW91c1xuICovXG5mdW5jdGlvbiBnZXRDbWRGcm9tSGlzdG9yeSggZGVsdGEgKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRDbWRIaXN0b3J5O1xuICAgIGNvbnN0IG5ld19jdXJyZW50ID0gY3VycmVudCArIGRlbHRhO1xuXG4gICAgaWYoIGN1cnJlbnQgPT09IC0xICkge1xuICAgICAgICBjdXJyZW50Q21kVGV4dCA9IGlucHV0RWxlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpdCdzIHdpdGhpbiByYW5nZVxuICAgIGlmKCBuZXdfY3VycmVudCA8IGNtZEhpc3RvcnkubGVuZ3RoICYmIG5ld19jdXJyZW50ID49IDAgKSB7XG4gICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IGNtZEhpc3RvcnlbIG5ld19jdXJyZW50IF07XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gbmV3X2N1cnJlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYoIG5ld19jdXJyZW50ID09PSAtMSApIHtcbiAgICAgICAgaW5wdXRFbGVtLnZhbHVlID0gY3VycmVudENtZFRleHQ7XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gbmV3X2N1cnJlbnQ7XG4gICAgfVxufVxuXG5cbi8qKlxuICogUmVzaXplIHRoZSBpbnB1dCBmaWVsZCBzbyB0aGF0IGl0IGZpdHMgb24gdGhlIHNhbWUgbGluZSBhcyB0aGUgcHJvbXB0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplSW5wdXQoKSB7XG4gICAgaW5wdXRFbGVtLnN0eWxlLndpZHRoID0gKCBnZXRXaW5kb3coIDAgKS5jbGllbnRXaWR0aCAtIGlucHV0WCAtIDIgKSArICdweCc7XG59XG5cblxuLyoqXG4gKiBTY3JvbGwgZG93biB1bnRpbCB0ZXh0IGNvbnRlbnQgYmVjb21lcyB2aXNpYmxlLlxuICovXG5mdW5jdGlvbiBzY3JvbGxUb0NvbnRlbnQoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZ2V0V2luZG93KCAwICk7XG4gICAgY29uc3Qgc3RhdHVzbGluZSA9IGdldFdpbmRvdyggMSApO1xuICAgIGNvbnN0IG5vZGVzID0gdGV4dE5vZGVzVW5kZXIoIG91dHB1dCApO1xuICAgIGNvbnN0IHNjcm9sbHRvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcbiAgICBjb25zdCBub25XaGl0ZXNwYWNlUmVnZXggPSAvXFxTLztcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgIGlmKCBub25XaGl0ZXNwYWNlUmVnZXgudGVzdCggbm9kZXNbIGkgXS50ZXh0Q29udGVudCApICkge1xuICAgICAgICAgICAgbGV0IG5ld1Njcm9sbFRvcCA9IG5vZGVzWyBpIF0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAzO1xuXG4gICAgICAgICAgICBpZiggc3RhdHVzbGluZSApIHtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgKz0gc3RhdHVzbGluZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBzY3JvbGx0b3AgPCBuZXdTY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKCAwLCBuZXdTY3JvbGxUb3AgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEdldCBhbGwgdGV4dCBub2RlcyBjb250YWluZWQgYnkgYSBET00gbm9kZVxuICpcbiAqIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA3MzA3NzdcbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiB0ZXh0Tm9kZXNVbmRlciggbm9kZSApIHtcbiAgICBsZXQgYWxsID0gW107XG5cbiAgICBmb3IoIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7IG5vZGU7IG5vZGUgPSBub2RlLm5leHRTaWJsaW5nICkge1xuICAgICAgICBpZiggbm9kZS5ub2RlVHlwZSA9PT0gMyApIHtcbiAgICAgICAgICAgIGFsbC5wdXNoKCBub2RlICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGwgPSBhbGwuY29uY2F0KCB0ZXh0Tm9kZXNVbmRlciggbm9kZSApICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxsO1xufVxuXG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgbGluZWlucHV0IGZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gcHJvbXB0RWxlbTtcbn1cblxuXG4vKipcbiAqIEhpZGUgdGhlIHByb21wdCBhbmQgc3RvcCBleHBlY3RpbmcgbGluZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgc2V0SW5wdXRNb2RlKCAnYnVmZmVyJyApO1xuXG4gICAgaWYoIHByb21wdEVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgcHJvbXB0RWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBwcm9tcHRFbGVtICk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIEFkZCwgcmVtb3ZlLCBhbmQgY2xlYXIgY29tbWFuZHMgaW4gdGhlIGhpc3RvcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0ge1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbW1hbmQgdG8gdGhlIGNvbW1hbmQgaGlzdG9yeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjbWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiggY21kICkge1xuICAgICAgICBpZiggY21kICkge1xuICAgICAgICAgICAgY21kSGlzdG9yeS5wdXNoKCBjbWQgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBlbnRpcmUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY21kSGlzdG9yeSA9IFtdO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBlbnRpcmUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjbWRIaXN0b3J5LnNsaWNlKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgc2luZ2xlIGl0ZW0gZnJvbSB0aGUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29tbWFuZCB0byByZW1vdmUuIElmIGVtcHR5LFxuICAgICAqICB0aGUgbGFzdCBjb21tYW5kIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiByZW1vdmFsIHdhcyBzdWNjZXNzZnVsLlxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oIGluZGV4ICkge1xuICAgICAgICBpZiggY21kSGlzdG9yeS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgIGNtZEhpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBpbmRleCA8IDAgfHwgaW5kZXggPj0gY21kSGlzdG9yeS5sZW5ndGggKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjbWRIaXN0b3J5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgY29tcGxldGVseSBuZXcgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbmV3SGlzdG9yeSBBbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgYmVjb21lcyB0aGUgbmV3XG4gICAgICogIGNvbW1hbmQgaGlzdG9yeS5cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKCBuZXdIaXN0b3J5ICkge1xuICAgICAgICBjbWRIaXN0b3J5ID0gbmV3SGlzdG9yeS5zbGljZSgpO1xuICAgIH1cbn07XG5cblxuLy8gQ29udmVydCBhY2NlbnRlZCBjaGFyYWN0ZXJzIHRvIHBsYWluIEFTQ0lJLiBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MzkxOTAxXG5jb25zdCBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXG4gICAge1xuICAgICAgICBiYXNlOiAnQScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdBQScsIGxldHRlcnM6ICdcXHVBNzMyJ30sXG4gICAge2Jhc2U6ICdBRScsIGxldHRlcnM6ICdcXHUwMEM2XFx1MDFGQ1xcdTAxRTInfSxcbiAgICB7YmFzZTogJ0FPJywgbGV0dGVyczogJ1xcdUE3MzQnfSxcbiAgICB7YmFzZTogJ0FVJywgbGV0dGVyczogJ1xcdUE3MzYnfSxcbiAgICB7YmFzZTogJ0FWJywgbGV0dGVyczogJ1xcdUE3MzhcXHVBNzNBJ30sXG4gICAge2Jhc2U6ICdBWScsIGxldHRlcnM6ICdcXHVBNzNDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnQicsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdDJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0QnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzknXG4gICAgfSxcbiAgICB7YmFzZTogJ0RaJywgbGV0dGVyczogJ1xcdTAxRjFcXHUwMUM0J30sXG4gICAge2Jhc2U6ICdEeicsIGxldHRlcnM6ICdcXHUwMUYyXFx1MDFDNSd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0UnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdGJywgbGV0dGVyczogJ1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Qid9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0cnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnSCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTcnXG4gICAgfSxcbiAgICB7YmFzZTogJ0onLCBsZXR0ZXJzOiAnXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDgnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdLJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnTCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODAnXG4gICAgfSxcbiAgICB7YmFzZTogJ0xKJywgbGV0dGVyczogJ1xcdTAxQzcnfSxcbiAgICB7YmFzZTogJ0xqJywgbGV0dGVyczogJ1xcdTAxQzgnfSxcbiAgICB7YmFzZTogJ00nLCBsZXR0ZXJzOiAnXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUMnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdOJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTQnXG4gICAgfSxcbiAgICB7YmFzZTogJ05KJywgbGV0dGVyczogJ1xcdTAxQ0EnfSxcbiAgICB7YmFzZTogJ05qJywgbGV0dGVyczogJ1xcdTAxQ0InfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdPJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NEMnXG4gICAgfSxcbiAgICB7YmFzZTogJ09JJywgbGV0dGVyczogJ1xcdTAxQTInfSxcbiAgICB7YmFzZTogJ09PJywgbGV0dGVyczogJ1xcdUE3NEUnfSxcbiAgICB7YmFzZTogJ09VJywgbGV0dGVyczogJ1xcdTAyMjInfSxcbiAgICB7YmFzZTogJ09FJywgbGV0dGVyczogJ1xcdTAwOENcXHUwMTUyJ30sXG4gICAge2Jhc2U6ICdvZScsIGxldHRlcnM6ICdcXHUwMDlDXFx1MDE1Myd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ1AnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NCdcbiAgICB9LFxuICAgIHtiYXNlOiAnUScsIGxldHRlcnM6ICdcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEEnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdSJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnUycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ1QnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2J1xuICAgIH0sXG4gICAge2Jhc2U6ICdUWicsIGxldHRlcnM6ICdcXHVBNzI4J30sXG4gICAge1xuICAgICAgICBiYXNlOiAnVScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0J1xuICAgIH0sXG4gICAge2Jhc2U6ICdWJywgbGV0dGVyczogJ1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1J30sXG4gICAge2Jhc2U6ICdWWScsIGxldHRlcnM6ICdcXHVBNzYwJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnVycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdYJywgbGV0dGVyczogJ1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnWScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdaJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnYScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MCdcbiAgICB9LFxuICAgIHtiYXNlOiAnYWEnLCBsZXR0ZXJzOiAnXFx1QTczMyd9LFxuICAgIHtiYXNlOiAnYWUnLCBsZXR0ZXJzOiAnXFx1MDBFNlxcdTAxRkRcXHUwMUUzJ30sXG4gICAge2Jhc2U6ICdhbycsIGxldHRlcnM6ICdcXHVBNzM1J30sXG4gICAge2Jhc2U6ICdhdScsIGxldHRlcnM6ICdcXHVBNzM3J30sXG4gICAge2Jhc2U6ICdhdicsIGxldHRlcnM6ICdcXHVBNzM5XFx1QTczQid9LFxuICAgIHtiYXNlOiAnYXknLCBsZXR0ZXJzOiAnXFx1QTczRCd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2InLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnYycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnZCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QSdcbiAgICB9LFxuICAgIHtiYXNlOiAnZHonLCBsZXR0ZXJzOiAnXFx1MDFGM1xcdTAxQzYnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdlJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxREQnXG4gICAgfSxcbiAgICB7YmFzZTogJ2YnLCBsZXR0ZXJzOiAnXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnZycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0YnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdoJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NSdcbiAgICB9LFxuICAgIHtiYXNlOiAnaHYnLCBsZXR0ZXJzOiAnXFx1MDE5NSd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzEnXG4gICAgfSxcbiAgICB7YmFzZTogJ2onLCBsZXR0ZXJzOiAnXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAnaycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2wnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0NydcbiAgICB9LFxuICAgIHtiYXNlOiAnbGonLCBsZXR0ZXJzOiAnXFx1MDFDOSd9LFxuICAgIHtiYXNlOiAnbScsIGxldHRlcnM6ICdcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rid9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ24nLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTUnXG4gICAgfSxcbiAgICB7YmFzZTogJ25qJywgbGV0dGVyczogJ1xcdTAxQ0MnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdvJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzUnXG4gICAgfSxcbiAgICB7YmFzZTogJ29pJywgbGV0dGVyczogJ1xcdTAxQTMnfSxcbiAgICB7YmFzZTogJ291JywgbGV0dGVyczogJ1xcdTAyMjMnfSxcbiAgICB7YmFzZTogJ29vJywgbGV0dGVyczogJ1xcdUE3NEYnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdwJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTUnXG4gICAgfSxcbiAgICB7YmFzZTogJ3EnLCBsZXR0ZXJzOiAnXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAncicsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3MnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAndCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3J1xuICAgIH0sXG4gICAge2Jhc2U6ICd0eicsIGxldHRlcnM6ICdcXHVBNzI5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAndScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5J1xuICAgIH0sXG4gICAge2Jhc2U6ICd2JywgbGV0dGVyczogJ1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDJ30sXG4gICAge2Jhc2U6ICd2eScsIGxldHRlcnM6ICdcXHVBNzYxJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAndycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3MydcbiAgICB9LFxuICAgIHtiYXNlOiAneCcsIGxldHRlcnM6ICdcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RCd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3onLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjMnXG4gICAgfVxuXTtcblxuY29uc3QgZGlhY3JpdGljc01hcCA9IHt9O1xuXG5mb3IoIGxldCBpID0gMDsgaSA8IGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5sZW5ndGg7IGkrKyApIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwWyBpIF0ubGV0dGVycztcbiAgICBmb3IoIGxldCBqID0gMDsgaiA8IGxldHRlcnMubGVuZ3RoOyBqKysgKSB7XG4gICAgICAgIGRpYWNyaXRpY3NNYXBbIGxldHRlcnNbIGogXSBdID0gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIFsgaSBdLmJhc2U7XG4gICAgfVxufVxuXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBsaW5lIGlucHV0IGV2ZW50IGhhbmRsZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggb3B0ICkge1xuICAgIC8vIG1ha2UgYSBub3RlIGlmIHRoZSBlbmdpbmUgaGFuZGxlcyBwcmludGluZyB0aGUgcHJvbXB0IG9yIG5vdFxuICAgIGVuZ2luZVByb21wdCA9ICEhb3B0LmVuZ2luZVByb21wdDtcblxuICAgIC8vIGhhbmRsZSBsaW5lIGlucHV0IHN1Ym1pc3Npb25cbiAgICBwcm9tcHRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoICdzdWJtaXQnLCBmdW5jdGlvbiggZSApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENoYW5nZSBhY2NlbnRlZCBjaGFyYWN0ZXJzIHRvIHBsYWluIEFTQ0lJLlxuICAgICAgICAvLyBUaGUgSHVnbyBlbmdpbmUgZG9lc24ndCByZWNlaXZlIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIGNvcnJlY3RseS5cbiAgICAgICAgaWYoICFvcHQudW5pY29kZSApIHtcbiAgICAgICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IGlucHV0RWxlbS52YWx1ZS5yZXBsYWNlKCAvW15cXHUwMDAwLVxcdTAwN0VdL2csIGZ1bmN0aW9uKCBhICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaWFjcml0aWNzTWFwWyBhIF0gfHwgYTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgaW5wdXQgdG8gaGlzdG9yeVxuICAgICAgICBpZiggaW5wdXRFbGVtLnZhbHVlICE9PSBjbWRIaXN0b3J5WyAwIF0gJiYgL1xcUy8udGVzdCggaW5wdXRFbGVtLnZhbHVlICkgKSB7XG4gICAgICAgICAgICBjbWRIaXN0b3J5LnVuc2hpZnQoIGlucHV0RWxlbS52YWx1ZSApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIGN1cnJlbnQgc3BvdCBpbiB0aGUgY29tbWFuZCBoaXN0b3J5XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gLTE7XG5cbiAgICAgICAgLy8gYXBwZW5kIHRoZSBjb21tYW5kIHRvIHRoZSB0cmFuc2NyaXB0LCB1bmxlc3MgdGhlIHN1Ym1pdCBldmVudHMgdGVsbHMgdXMgbm90IHRvXG4gICAgICAgIGlmKCAhZW5naW5lUHJvbXB0ICYmICEoZS5kZXRhaWwgJiYgZS5kZXRhaWwuc2lsZW50KSApIHtcbiAgICAgICAgICAgIGFwcGVuZFByb21wdCggcHJlZml4LmdldCgpLCBpbnB1dEVsZW0udmFsdWUsIDAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhc3MgdGhlIGNvbW1hbmQgdG8gdGhlIGVuZ2luZVxuICAgICAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICAgICAnaGF2ZW5fZ2V0bGluZScsXG4gICAgICAgICAgICAnbnVsbCcsXG4gICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICBbIGlucHV0RWxlbS52YWx1ZSArICdcXG4nIF1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjbGVhbnVwXG4gICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGhpZGUoKTtcbiAgICB9LCBmYWxzZSApO1xuXG4gICAgLy8gQ29tbWFuZCBoaXN0b3J5LiBBZGFwdGVkIGZyb20gUGFyY2htZW50LlxuICAgIGlucHV0RWxlbS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGZ1bmN0aW9uKCBlICkge1xuICAgICAgICBjb25zdCBrZXlDb2RlID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVwL2Rvd24gdG8gdXNlIHRoZSBjb21tYW5kIGhpc3RvcnlcbiAgICAgICAgaWYoIGtleUNvZGUgPT09IDM4ICkgLy8gdXAgLT4gcHJldlxuICAgICAgICB7XG4gICAgICAgICAgICBnZXRDbWRGcm9tSGlzdG9yeSggMSApO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCBrZXlDb2RlID09PSA0MCApIC8vIGRvd24gLT4gbmV4dFxuICAgICAgICB7XG4gICAgICAgICAgICBnZXRDbWRGcm9tSGlzdG9yeSggLTEgKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlICk7XG5cbiAgICAvLyBmaXggTW9iaWxlIFNhZmFyaSBidWcgdGhhdCBicmVha3MgZml4ZWQgcG9zaXRpb25pbmcgd2hlbiB0aGUgdmlydHVhbCBrZXlib2FyZCBwb3BzIHVwXG4gICAgaWYoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHtcbiAgICAgICAgLy8gdGhlIGZvY3VzIGV2ZW50IGF0IHRoZSBzdGFydCBvZiB0aGUgZ2FtZSBkb2Vzbid0IG9wZW4gdGhlIGtleWJvYXJkXG4gICAgICAgIGxldCBmaXJzdEZvY3VzID0gdHJ1ZTtcblxuICAgICAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiggIWZpcnN0Rm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBcInNhZmFyaWZpeFwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXJzdEZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcblxuICAgICAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggXCJzYWZhcmlmaXhcIiApO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgLy8gcmVzaXplIGlucHV0IGZpZWxkIHdoZW4gd2luZG93IHNpemUgY2hhbmdlc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgcmVzaXplSW5wdXQsIGZhbHNlICk7XG5cbiAgICAvLyByZW1vdmUgdGhlIHByb21wdCBmcm9tIHRoZSBET01cbiAgICBwcm9tcHRFbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHByb21wdEVsZW0gKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbW1hbmQgcHJvbXB0IGlzIHJlYWR5IGZvciBsaW5lIGlucHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gZ2V0SW5wdXRNb2RlKCkgPT09ICdnZXRsaW5lJztcbn07XG5cblxuZXhwb3J0IGNvbnN0IHByZWZpeCA9IHtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcHJvbXB0IHByZWZpeCwgb3IgZW1wdHkgc3RyaW5nIGlmIHRoZSBlbmdpbmUgaXNcbiAgICAgKiBoYW5kbGluZyBwcmludGluZyB0aGUgcHJvbXB0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiggZW5naW5lUHJvbXB0ICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlZml4RWxlbS5pbm5lckhUTUw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcHJlZml4ICg+KSB0aGF0J3Mgc2hvd24gYmVmb3JlIHRoZSBjb21tYW5kIGlucHV0LlxuICAgICAqIFRoZSBjYXJldCBpcyBleHBlY3RlZCB0byBiZSBcImNsZWFuXCIgaS5lLiBpdCdzIHNhZmUgdG8gdXNlIGlubmVySFRNTFxuICAgICAqIHRvIHBsYWNlIGl0IGluIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24oIHByZWZpeCApIHtcbiAgICAgICAgaWYoICFlbmdpbmVQcm9tcHQgKSB7XG4gICAgICAgICAgICBwcmVmaXhFbGVtLmlubmVySFRNTCA9IHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRWl0aGVyIHNjcm9sbCB0aGUgcGFnZSBkb3duIG9uZSBwYWdlLCBvciBpZiB0aGUgcHJvbXB0IGlzIHZpc2libGUsXG4gKiBzZXQgZm9jdXMgdG8gdGhlIHByb21wdC5cbiAqXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsT3JGb2N1cyggZSApIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsdG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24gPyBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0IDogJyc7XG4gICAgICAgICAgICB9O1xuICAgIGxldCBwbGF5QXJlYUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmKCBnZXRXaW5kb3coIDEgKSApIHtcbiAgICAgICAgcGxheUFyZWFIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoYXZlbi53aW5kb3cuZ2V0KCAxICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIGxldCBub24tQVNDSUkga2V5Y29kZXMsIG5hdmlnYXRpb24ga2V5cywga2V5cyBwcmVzc2VkIHdpdGggY3RybC9hbHQvY21kIHBhc3NcbiAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgYmxvY2sgYnJvd3NlciBzaG9ydGN1dHNcbiAgICBpZiggZSAmJiAoZS5rZXljb2RlID09PSAzMiB8fCBlLmtleUNvZGUgPiAxMjcgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGludGVyY2VwdCBvbiB0aGluZ3MgdGhhdCBhcmVuJ3QgaW5wdXRzIGFuZCBpZiB0aGUgdXNlciBpc24ndCBzZWxlY3RpbmcgdGV4dFxuICAgIC8vIGFuZCBpZiB0aGUgcHJvbXB0IGlzIGF2YWlsYWJsZVxuICAgIGlmKCAhZSB8fCAoZS50YXJnZXQgJiYgZS50YXJnZXQubm9kZU5hbWUgIT09ICdJTlBVVCcgJiYgc2VsZWN0aW9uKCkudG9TdHJpbmcoKSA9PT0gJycpICkge1xuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgYm94IGlzIGNsb3NlIHRvIHRoZSB2aWV3cG9ydCB0aGVuIGZvY3VzIGl0XG4gICAgICAgIGlmKCBzY3JvbGx0b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQwICkge1xuICAgICAgICAgICAgaWYoIHByb21wdEVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIDAsIDllOSApO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFudWFsbHkgcmVzZXQgdGhlIHRhcmdldCBpbiBjYXNlIGZvY3VzL3RyaWdnZXIgZG9uJ3QgLSB3ZSBkb24ndCB3YW50IHRoZSB0cmlnZ2VyIHRvIHJlY3Vyc2VcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpbmcgYWZ0ZXIgcmUtdHJpZ2dlcmluZyBpdCwgc28gdGhhdCB0aGUgdHJpZ2dlciB3aWxsIHdvcmsgZm9yIGFsbCBrZXlzXG4gICAgICAgICAgICAgICAgaWYoIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24gJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRFbGVtICkge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gcHJvbXB0LCBzY3JvbGwgZG93biBvbmUgcGFnZWZ1bFxuICAgICAgICAgICAgaWYoIGRvU2Nyb2xsICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyggMCwgc2Nyb2xsdG9wICsgcGxheUFyZWFIZWlnaHQgLSA0MCApO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9jdXMgb24gdGhlIHByb21wdCBpZiBpdCdzIHZpc2libGVcbiAgICAgICAgICAgICAgICBpZiggcHJvbXB0RWxlbS5wYXJlbnROb2RlICYmIHNjcm9sbHRvcCArIHBsYXlBcmVhSGVpZ2h0ICsgd2luZG93LmlubmVySGVpZ2h0IC0gNDAgPj0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBlICYmIGUucHJldmVudERlZmF1bHQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UganVzdCBzY3JvbGwgdGhlIGNvbnRlbnQgaW50byB2aWV3XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0NvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW50ZXJjZXB0IHRoZSBiYWNrc3BhY2Uga2V5XG4gICAgICAgICAgICBpZiggZSAmJiBlLnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZS53aGljaCB8fCBlLmtleUNvZGUpID09PSA4ICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVGV4dFByaW50ZWQgPSBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIFwiZG9TY3JvbGxcIiBzdGF0dXMgd2hpY2ggdGVsbHMgd2hldGhlciBhIGtleXByZXNzIHNjcm9sbHMgdGhlIHBhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREb1Njcm9sbCggc3RhdHVzICkge1xuICAgIGRvU2Nyb2xsID0gc3RhdHVzO1xufVxuXG5cbi8qKlxuICogU2hvdyB0aGUgcHJvbXB0IGFuZCBzdGFydCBleHBlY3RpbmcgbGluZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgc2V0SW5wdXRNb2RlKCAnZ2V0bGluZScgKTtcbiAgICBmbHVzaCgpO1xuICAgIGdldFdpbmRvdyggMCApLmFwcGVuZENoaWxkKCBwcm9tcHRFbGVtICk7XG5cbiAgICAvLyBjYWxjdWxhdGUgaW5wdXQncyBsb2NhdGlvbiBhbmQgcmVzaXplIHRvIGZpdFxuICAgIGlmKCBlbmdpbmVQcm9tcHQgKSB7XG4gICAgICAgIGlucHV0WCA9IGlucHV0RWxlbS5vZmZzZXRMZWZ0IC0gZ2V0V2luZG93KCAwICkub2Zmc2V0TGVmdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0WCA9IHByZWZpeEVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuXG4gICAgcmVzaXplSW5wdXQoKTtcblxuICAgIC8vIHNjcm9sbCBwYWdlIGRvd24gb3IgZ2l2ZSB0aGUgcHJvbXB0IGZvY3VzXG4gICAgc2Nyb2xsT3JGb2N1cygpO1xuICAgIGRvU2Nyb2xsID0gdHJ1ZTtcblxuICAgIC8vIGRvIGF1dG9zYXZlIHdoZW4gbGluZSBpbnB1dCBpcyBleHBlY3RlZFxuICAgIGF1dG9zYXZlLnNhdmUoKTtcblxuICAgIHByb21wdEVsZW0uZGlzcGF0Y2hFdmVudCggbGluZWlucHV0UmVhZHlFdmVudCApO1xufTsiLCJpbXBvcnQgeyBnZXQgYXMgZ2V0T3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgaGlzdG9yeSwgc2V0RG9TY3JvbGwgfSBmcm9tIFwiLi9wcm9tcHRcIjtcblxuaW1wb3J0IHtcbiAgICBjbGVhciBhcyBjbGVhcldpbmRvdyxcbiAgICBjcmVhdGUgYXMgY3JlYXRlV2luZG93LFxuICAgIGdldCBhcyBnZXRXaW5kb3csXG4gICAgcG9zaXRpb24gYXMgd2luZG93UG9zaXRpb25cbn0gZnJvbSBcIi4vd2luZG93XCI7XG5cbmltcG9ydCB7XG4gICAgYXBwbHkgYXMgYXBwbHlTdHlsZSxcbiAgICBjb2xvcixcbiAgICByZXN0b3JlIGFzIHJlc3RvcmVTdHlsZVxufSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5sZXQgYXV0b3NhdmVGaWxlbmFtZSA9IFwiXCI7XG5cblxuLyoqXG4gKiBSZWFkIHRoZSBVSSBzdGF0ZSBmcm9tIHRoZSBmaWxlc3lzdGVtLlxuICovXG5mdW5jdGlvbiByZWFkVUlTdGF0ZSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBGUy5yZWFkRmlsZShcbiAgICAgICAgICAgIGF1dG9zYXZlRmlsZW5hbWUgKyAnX3VpZGF0YScsXG4gICAgICAgICAgICB7ZW5jb2Rpbmc6ICd1dGY4J31cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSggc3RhdGUgKTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dG9zYXZlID0ge1xuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgYXV0b3NhdmUgZmlsZXMuXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEZTLnVubGluayggYXV0b3NhdmVGaWxlbmFtZSApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEZTLnVubGluayggYXV0b3NhdmVGaWxlbmFtZSArICdfdWlkYXRhJyApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgdGhlIGF1dG9zYXZlJ3MgZmlsZW5hbWUgdG8gdGhlIGVuZ2luZSB0aGF0IHRha2VzIGNhcmUgb2ZcbiAgICAgKiByZWxvYWRpbmcgdGhlIHNhdmUuXG4gICAgICovXG4gICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gb3BlbiB0aGUgYXV0b3NhdmUgZmlsZS5cbiAgICAgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgZXhpc3QsIHRoaXMgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICAgICAgRlMuc3RhdCggYXV0b3NhdmVGaWxlbmFtZSApO1xuXG4gICAgICAgICAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICAgICAgICAgJ2h1Z29qc19zZXRfYXV0b3NhdmVfZmlsZW5hbWUnLFxuICAgICAgICAgICAgICAgICdudWxsJyxcbiAgICAgICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICAgICAgWyBhdXRvc2F2ZUZpbGVuYW1lIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgLy8gYXV0b3NhdmUgZmlsZSBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCAhZ2V0T3B0aW9uKCAnYXV0b3NhdmUnICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGVuZ2luZSBhdXRvc2F2ZVxuICAgICAgICBjb25zdCBlbmdpbmVTYXZlU3VjY2VlZGVkID0gTW9kdWxlLmNjYWxsKFxuICAgICAgICAgICAgJ2hhdmVuX3NhdmVfYXV0b3NhdmUnLFxuICAgICAgICAgICAgJ2ludCcsXG4gICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICBbIGF1dG9zYXZlRmlsZW5hbWUgXVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNhdmUgVUkgc3RhdGVcbiAgICAgICAgaWYoIGVuZ2luZVNhdmVTdWNjZWVkZWQgKSB7XG4gICAgICAgICAgICBGUy53cml0ZUZpbGUoXG4gICAgICAgICAgICAgICAgYXV0b3NhdmVGaWxlbmFtZSArICdfdWlkYXRhJyxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSggaGF2ZW4ud2luZG93LmdldFVJU3RhdGUoKSApLFxuICAgICAgICAgICAgICAgIHtlbmNvZGluZzogJ3V0ZjgnfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1lbWJlciB0aGUgYXV0b3NhdmUncyBmaWxlbmFtZVxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxuICAgICAqL1xuICAgIHNldE5hbWU6IGZ1bmN0aW9uKCBmaWxlbmFtZSApIHtcbiAgICAgICAgYXV0b3NhdmVGaWxlbmFtZSA9IGZpbGVuYW1lO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHNhdmVkIFVJIHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVVJKCkge1xuICAgIGNvbnN0IHNhdmVkU3RhdGUgPSByZWFkVUlTdGF0ZSgpO1xuICAgIGxldCB3aW5kb3dDb3VudDtcblxuICAgIGlmKCAhc2F2ZWRTdGF0ZSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHdpbmRvd2luZyBoYXMgYmVlbiBzZXQgb2ZmIGluIG9wdGlvbnMsIHJlc3RvcmUgb25seSB0aGUgbWFpbiB3aW5kb3dcbiAgICBpZiggZ2V0T3B0aW9uKCAnd2luZG93aW5nJyApICkge1xuICAgICAgICB3aW5kb3dDb3VudCA9IHNhdmVkU3RhdGUud2luZG93Q29udGVudHMubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Q291bnQgPSAxO1xuICAgIH1cblxuICAgIGNsZWFyV2luZG93KCk7XG5cbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHdpbmRvd0NvdW50OyArK2kgKSB7XG4gICAgICAgIGNyZWF0ZVdpbmRvdyhcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzYXZlZFN0YXRlLndpbmRvd0RpbWVuc2lvbnNbIGkgXS5sZWZ0LFxuICAgICAgICAgICAgc2F2ZWRTdGF0ZS53aW5kb3dEaW1lbnNpb25zWyBpIF0udG9wLFxuICAgICAgICAgICAgc2F2ZWRTdGF0ZS53aW5kb3dEaW1lbnNpb25zWyBpIF0ucmlnaHQsXG4gICAgICAgICAgICBzYXZlZFN0YXRlLndpbmRvd0RpbWVuc2lvbnNbIGkgXS5ib3R0b21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb2xvci5yZXN0b3JlKCBzYXZlZFN0YXRlLmN1cnJlbnRDb2xvcnMgKTtcbiAgICByZXN0b3JlU3R5bGUoIHNhdmVkU3RhdGUuZm9udCApO1xuICAgIHdpbmRvd1Bvc2l0aW9uLnJlc3RvcmUoIHNhdmVkU3RhdGUucG9zaXRpb24gKTtcblxuICAgIGlmKCBzYXZlZFN0YXRlLnRpdGxlICkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHNhdmVkU3RhdGUudGl0bGU7XG4gICAgfVxuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBzYXZlZFN0YXRlLndpbmRvd0NvbnRlbnRzLmxlbmd0aDsgKytpICkge1xuICAgICAgICBnZXRXaW5kb3coIGkgKS5pbm5lckhUTUwgPSBzYXZlZFN0YXRlLndpbmRvd0NvbnRlbnRzWyBpIF07XG4gICAgICAgIGFwcGx5U3R5bGUoIGhhdmVuLndpbmRvdy5nZXQoIGkgKSwgaSApO1xuICAgIH1cblxuICAgIGFwcGx5U3R5bGUoIGRvY3VtZW50LmJvZHksIDAgKTtcblxuICAgIC8vIFRPRE86IG9ubHkgZm9yIEh1Z28hXG4gICAgLy8gc2V0IHRoZSBzYW1lIHN0eWxlIHdlIGhhZCB3aGVuIHNhdmluZ1xuICAgIE1vZHVsZS5jY2FsbChcbiAgICAgICAgJ2h1Z29qc19zZXRfZm9udCcsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgWyAnaW50JyBdLFxuICAgICAgICBbIHNhdmVkU3RhdGUuZm9udFsgMCBdLm9yaWdpbmFsIF1cbiAgICApO1xuXG4gICAgTW9kdWxlLmNjYWxsKFxuICAgICAgICAnaHVnb2pzX3NldF9jb2xvcnMnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgIFsgJ2ludCcsICdpbnQnIF0sXG4gICAgICAgIFsgc2F2ZWRTdGF0ZS5jdXJyZW50Q29sb3JzWyAwIF0udGV4dCwgc2F2ZWRTdGF0ZS5jdXJyZW50Q29sb3JzWyAwIF0uYmFja2dyb3VuZCBdXG4gICAgKTtcblxuICAgIC8vIHJlc3RvcmUgY29tbWFuZCBoaXN0b3J5XG4gICAgaGlzdG9yeS5zZXQoIHNhdmVkU3RhdGUuY21kSGlzdG9yeSB8fCBbXSApO1xuXG4gICAgLy8gc2Nyb2xsIHRvIHRoZSBib3R0b21cbiAgICB3aW5kb3cuc2Nyb2xsVG8oIDAsIDllOSApO1xuICAgIHNldERvU2Nyb2xsKCk7XG59IiwiaW1wb3J0IHsgZmx1c2ggfSBmcm9tIFwiLi9idWZmZXJcIjtcbmltcG9ydCB7IGdldCBhcyBnZXRPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0UHJvbXB0IH0gZnJvbSBcIi4vcHJvbXB0XCI7XG5cbi8vIGN1cnJlbnRseSBzZXQgY29sb3JzXG5sZXQgY3VycmVudENvbG9ycyA9IFsgZGVmYXVsdENvbG9ycyggMCApIF07XG5cbi8vIGN1cnJlbnRseSBzZXQgZm9udHNcbmxldCBjdXJyZW50Rm9udCA9IFsgZGVmYXVsdFN0eWxlcygpIF07XG5cbi8vIGxldCBlbmdpbmUgZGVjaWRlIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3JzP1xubGV0IGVuZ2luZUNvbG9ycyA9IHRydWU7XG5cbi8vIGlnbm9yZSBmb250IGZhbWlseSBzZXR0aW5ncz8gKHByb3BvcnRpb25hbC9maXhlZC13aWR0aClcbmxldCBpZ25vcmVGb250RmFtaWx5ID0gZmFsc2U7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY29sb3JzIG9mIGEgZm9udCBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKiBAcmV0dXJucyB7e3RleHQ6IG51bWJlciwgYmFja2dyb3VuZDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdENvbG9ycyggdGFyZ2V0V2luZG93ICkge1xuICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IDEgKSB7ICAvLyBzdGF0dXMgbGluZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogMTUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAxXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogNyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBEZWZhdWx0IHN0eWxlcyBvZiB0aGUgZm9udFxuICovXG5mdW5jdGlvbiBkZWZhdWx0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBwcm9wb3J0aW9uYWw6IHRydWUsXG4gICAgICAgIG9yaWdpbmFsOiAwICAgICAvLyB0aGUgb3JpZ2luYWwgaW50ZWdlciB2YWx1ZSBvZiB0aGUgZm9udFxuICAgIH07XG59XG5cblxuLyoqXG4gKiBTZXQgY3VycmVudGx5IGFjdGl2ZSBmb250IHN0eWxlcyBhbmQgY29sb3JzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGVsZW1cbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCBlbGVtLCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IFtdO1xuICAgIGNvbnN0IHByb21wdCA9IGdldFByb21wdCgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnSU5QVVQnIClbIDAgXTtcbiAgICBjb25zdCBzZXRQcm9tcHRTdHlsZSA9ICh0YXJnZXRXaW5kb3cgPT09IDApO1xuXG4gICAgaWYoICFjdXJyZW50Q29sb3JzWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0gPSBkZWZhdWx0Q29sb3JzKCB0YXJnZXRXaW5kb3cgKTtcbiAgICB9XG5cbiAgICBpZiggZW5naW5lQ29sb3JzICkge1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwidGV4dGNvbG9yLVwiICsgY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0udGV4dCApO1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwiYmdjb2xvci1cIiArIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdLmJhY2tncm91bmQgKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgb2xkIGNsYXNzIHN0eWxlc1xuICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZSggL1xcYih0ZXh0fGJnKWNvbG9yLVxcZCsvZywgXCJcIiApO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LWZpeGVkLXdpZHRoXCIgKTtcblxuICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgcHJvbXB0LmNsYXNzTmFtZSA9IHByb21wdC5jbGFzc05hbWUucmVwbGFjZSggL1xcYih0ZXh0fGJnKWNvbG9yLVxcZCsvZywgXCJcIiApO1xuICAgICAgICBwcm9tcHQuY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LWZpeGVkLXdpZHRoXCIgKTtcbiAgICB9XG5cbiAgICBpZiggIWN1cnJlbnRGb250WyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdID0gZGVmYXVsdFN0eWxlcygpO1xuICAgIH1cblxuICAgIGZvciggbGV0IHByb3AgaW4gY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdICkge1xuICAgICAgICBpZiggaWdub3JlRm9udEZhbWlseSAmJiBwcm9wID09PSAncHJvcG9ydGlvbmFsJyApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGN1cnJlbnRGb250WyB0YXJnZXRXaW5kb3cgXS5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCBcImZvbnQtXCIgKyBwcm9wICk7XG5cbiAgICAgICAgICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQuY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LVwiICsgcHJvcCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdWyBwcm9wIF0gKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCBcImZvbnQtXCIgKyBwcm9wICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIWlnbm9yZUZvbnRGYW1pbHkgJiYgY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdLmhhc093blByb3BlcnR5KCAncHJvcG9ydGlvbmFsJyApICYmICFjdXJyZW50Rm9udFsgdGFyZ2V0V2luZG93IF0ucHJvcG9ydGlvbmFsICkge1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwiZm9udC1maXhlZC13aWR0aFwiICk7XG4gICAgfVxuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdDbGFzc2VzLmxlbmd0aDsgKytpICkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoIG5ld0NsYXNzZXNbIGkgXSApO1xuXG4gICAgICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgICAgIHByb21wdC5jbGFzc0xpc3QuYWRkKCBuZXdDbGFzc2VzWyBpIF0gKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29sb3JzO1xuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbiggb2xkU3RhdGUgKSB7XG4gICAgICAgIGN1cnJlbnRDb2xvcnMgPSBvbGRTdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvbG9ycyBpbiB3aW5kb3dzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2hpY2hcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiggd2hpY2gsIGNvbG9yLCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgICAgIGlmKCAhY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0gKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3JzWyB0YXJnZXRXaW5kb3cgXSA9IGRlZmF1bHRDb2xvcnMoIHRhcmdldFdpbmRvdyApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdWyB3aGljaCBdID09PSBjb2xvciApIHtcbiAgICAgICAgICAgIC8vIHRoZSBjb2xvciBkb2Vzbid0IGNoYW5nZSwgZG8gbm90aGluZ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmx1c2goIHRhcmdldFdpbmRvdyApO1xuXG4gICAgICAgIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdWyB3aGljaCBdID0gY29sb3I7XG4gICAgfVxufTtcblxuXG5leHBvcnQgY29uc3QgZm9udCA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudEZvbnQ7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggb3B0aW9ucyApIHtcbiAgICBpZ25vcmVGb250RmFtaWx5ID0gIW9wdGlvbnMuZW5naW5lRm9udEZhbWlseTtcbiAgICBlbmdpbmVDb2xvcnMgPSBvcHRpb25zLmVuZ2luZUNvbG9ycztcbn1cblxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGVudGlyZSBzdHlsZSBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0gb2xkU3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmUoIG9sZFN0YXRlICkge1xuICAgIGN1cnJlbnRGb250ID0gb2xkU3RhdGU7XG59XG5cblxuLyoqXG4gKiBTZXQgYSBjdXJyZW50IHN0eWxlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgYm9sZCwgaXRhbGljLCB1bmRlcmxpbmUsIG9yIHByb3BvcnRpb25hbFxuICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFdpbmRvd1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KCB0eXBlLCB2YWx1ZSwgdGFyZ2V0V2luZG93ICkge1xuICAgIGZsdXNoKCB0YXJnZXRXaW5kb3cgKTtcbiAgICBjdXJyZW50Rm9udFsgdGFyZ2V0V2luZG93IF1bIHR5cGUgXSA9IHZhbHVlO1xufVxuIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpc2UgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnRvdWNoSGFzTW92ZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLCBib3VuZGFyeSA9IHRoaXMudG91Y2hCb3VuZGFyeTtcblxuXHRcdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgdG91Y2ggaGFzIG1vdmVkLCBjYW5jZWwgdGhlIGNsaWNrIHRyYWNraW5nXG5cdFx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbGFiZWxsZWQgY29udHJvbCBmb3IgdGhlIGdpdmVuIGxhYmVsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cblx0XHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5jb250cm9sICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbDtcblx0XHR9XG5cblx0XHQvLyBBbGwgYnJvd3NlcnMgdW5kZXIgdGVzdCB0aGF0IHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFsc28gc3VwcG9ydCB0aGUgSFRNTDUgaHRtbEZvciBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50Lmh0bWxGb3IpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gZm9yIGF0dHJpYnV0ZSBleGlzdHMsIGF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIGZpcnN0IGxhYmVsbGFibGUgZGVzY2VuZGFudCBlbGVtZW50XG5cdFx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGVuZCwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IGF0IG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBGYXN0Q2xpY2s7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEZhc3RDbGljay5hdHRhY2g7XG5cdFx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH1cbn0oKSk7XG4iLCJpbXBvcnQgeyBmbHVzaCB9IGZyb20gXCIuL2J1ZmZlclwiO1xuaW1wb3J0IHsgZ2V0IGFzIGdldE9wdGlvbiB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuaW1wb3J0IHtcbiAgICBnZXQgYXMgZ2V0UHJvbXB0LFxuICAgIGhpc3Rvcnlcbn0gZnJvbSBcIi4vcHJvbXB0XCI7XG5cbmltcG9ydCB7IGNvbG9yIH0gZnJvbSBcIi4vc3R5bGVcIjtcblxuaW1wb3J0IHtcbiAgICBhcHBseSBhcyBhcHBseVN0eWxlLFxuICAgIGZvbnRcbn0gZnJvbSBcIi4vc3R5bGVcIjtcblxuLy8gRE9NIGNvbnRhaW5lcnMgZm9yIHdpbmRvd3NcbmNvbnN0IG91dHB1dFdpbmRvd3MgPSBbIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnd2luZG93MCcgKSBdO1xuXG4vLyB0aGUgcGFyZW50IG9mIGFsbCB3aW5kb3dzXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdvdXRwdXQnICk7XG5jb25zdCBjdXJyZW50Q29udGFpbmVycyA9IFsgb3V0cHV0V2luZG93c1sgMCBdIF07XG5jb25zdCB3aW5kb3dEaW1lbnNpb25zID0gW107XG5cbmxldCBjdXJzb3JQb3NpdGlvbiA9IFtdO1xuXG5cbi8qKlxuICogQWRkIGxpbmVzIHRvIHRoZSBvdXRwdXQuXG4gKlxuICogQHBhcmFtIGFtb3VudCBOdW1iZXIgb2YgbGluZXNcbiAqIEBwYXJhbSBjb2x1bW4gTnVtYmVyIG9mIHNwYWNlcyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgbGFzdCBsaW5lXG4gKiBAcGFyYW0gaGF2ZW5XaW5kb3dcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTGluZXMoIGFtb3VudCwgY29sdW1uLCBoYXZlbldpbmRvdyApIHtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGFtb3VudDsgKytpICkge1xuICAgICAgICBjb25zdCBuZXdsaW5lRmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cbiAgICAgICAgbmV3bGluZUZpbGxlci5jbGFzc05hbWUgPSAnZm9udC1maXhlZC13aWR0aCc7XG4gICAgICAgIG5ld2xpbmVGaWxsZXIuaW5uZXJIVE1MID0gJ1xcbic7XG4gICAgICAgIG91dHB1dFdpbmRvd3NbIGhhdmVuV2luZG93IF0uYXBwZW5kQ2hpbGQoIG5ld2xpbmVGaWxsZXIgKTtcbiAgICB9XG5cbiAgICBpZiggY29sdW1uID4gMCApIHtcbiAgICAgICAgY29uc3Qgc3BhY2VGaWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblxuICAgICAgICBzcGFjZUZpbGxlci5pbm5lckhUTUwgPSBBcnJheSggY29sdW1uICkuam9pbiggXCIgXCIgKTtcbiAgICAgICAgc3BhY2VGaWxsZXIuY2xhc3NOYW1lID0gJ2ZvbnQtZml4ZWQtd2lkdGgnO1xuICAgICAgICBvdXRwdXRXaW5kb3dzWyBoYXZlbldpbmRvdyBdLmFwcGVuZENoaWxkKCBzcGFjZUZpbGxlciApO1xuICAgIH1cblxuICAgIHBvc2l0aW9uLnJlc2V0KCBoYXZlbldpbmRvdyApO1xufVxuXG5cbi8qKlxuICogUHJpbnRzIHRleHQgdG8gYSBzcGVjaWZpYyBzcG90IGluIHRoZSB0ZXh0IHdpbmRvdy5cbiAqXG4gKiBAcGFyYW0gbGluZVxuICogQHBhcmFtIGNvbFxuICogQHBhcmFtIG5ld0NvbnRlbnRcbiAqIEBwYXJhbSBoYXZlbldpbmRvd1xuICovXG5mdW5jdGlvbiByZXBsYWNlUGFydCggbGluZSwgY29sLCBuZXdDb250ZW50LCBoYXZlbldpbmRvdyApIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyggJ1JlcGxhY2luZyBsaW5lJywgbGluZSwgJ2NvbCcsIGNvbCwgJ3dpdGgnLCBuZXdDb250ZW50LmlubmVySFRNTCwgJ2luIHdpbmRvdycsIGhhdmVuV2luZG93ICk7XG4gICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0V2luZG93c1sgaGF2ZW5XaW5kb3cgXTtcbiAgICBjb25zdCBub2RlcyA9IHRleHROb2Rlc1VuZGVyKCBvdXRwdXQgKTtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBsZXQgY3VycmVudExpbmUgPSAxO1xuICAgIGxldCBjdXJyZW50Q29sID0gMTtcbiAgICBsZXQgc3RhcnRGb3VuZCA9IGZhbHNlO1xuICAgIGxldCBlbmRDb3VudGVyID0gMDtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBuZXcgY29udGVudCBnb2VzIG9uIHRvcCBvZiBleGlzdGluZyBjb250ZW50IG9yIGRvZXMgdGhlXG4gICAgLy8gY29udGFpbmVyIFwib3ZlcmZsb3dcIiAoaS5lLiBuZXcgbGluZXMgbmVlZCB0byBiZSBjcmVhdGVkIGFzIGEgcGFkZGluZylcbiAgICBjb25zdCBvdmVyZmxvdyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IG5vZGVzWyBpIF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiggY3VycmVudExpbmUgPT09IGxpbmUgKSB7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCB0ZXh0Q29udGVudC5sZW5ndGg7ICsraiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHN0YXJ0Rm91bmQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZW5kQ291bnRlciA9PT0gbmV3Q29udGVudC50ZXh0Q29udGVudC5sZW5ndGggfHwgdGV4dENvbnRlbnRbIGogXSA9PT0gJ1xcbicgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKCBub2Rlc1sgaSBdLCBqICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGN1cnJlbnRDb2wgPT09IGNvbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KCBub2Rlc1sgaSBdLCBqICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBqID09PSB0ZXh0Q29udGVudC5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZCggbm9kZXNbIGkgXSwgaiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCB0ZXh0Q29udGVudFsgaiBdID09PSAnXFxuJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCBBcnJheSggY29sIC0gY3VycmVudENvbCArIDEgKS5qb2luKCAnICcgKSArICdcXG4nICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzWyBpIF0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudC5zdWJzdHIoIDAsIGogKSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzWyBpIF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGZpbGxlciwgbm9kZXNbIGkgXS5uZXh0U2libGluZyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoIGZpbGxlciwgY29sIC0gY3VycmVudENvbCAtIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZCggZmlsbGVyLCBjb2wgLSBjdXJyZW50Q29sIC0gMSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKCB0ZXh0Q29udGVudC5pbmRleE9mKCAnXFxuJyApID4gLTEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkoKTtcblxuICAgIGlmKCBvdmVyZmxvdyApIHtcbiAgICAgICAgY3JlYXRlTGluZXMoIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmxpbmUgLSBjdXJyZW50TGluZSwgY29sLCBoYXZlbldpbmRvdyApO1xuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoIG5ld0NvbnRlbnQgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCBuZXdDb250ZW50LnRleHRDb250ZW50LmluZGV4T2YoICdcXG4nICkgPiAtMSApIHtcbiAgICAgICAgbmV3Q29udGVudC50ZXh0Q29udGVudCA9IG5ld0NvbnRlbnQudGV4dENvbnRlbnQucmVwbGFjZSggJ1xcbicsICcnICk7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmxpbmUrKztcbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0uY29sID0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmNvbCArPSBuZXdDb250ZW50LnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgIHJhbmdlLmluc2VydE5vZGUoIG5ld0NvbnRlbnQgKTtcblxuICAgIGlmKCAhbmV3Q29udGVudC5uZXh0U2libGluZyApIHtcbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0ubGluZSA9IG51bGw7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmNvbCA9IG51bGw7XG4gICAgfVxufVxuXG5cbi8qKlxuICogR2V0IGFsbCB0ZXh0IG5vZGVzIGNvbnRhaW5lZCBieSBhIERPTSBub2RlXG4gKlxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDczMDc3N1xuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRleHROb2Rlc1VuZGVyKCBub2RlICkge1xuICAgIGxldCBhbGwgPSBbXTtcblxuICAgIGZvciggbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDsgbm9kZTsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcgKSB7XG4gICAgICAgIGlmKCBub2RlLm5vZGVUeXBlID09PSAzICkge1xuICAgICAgICAgICAgYWxsLnB1c2goIG5vZGUgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsbCA9IGFsbC5jb25jYXQoIHRleHROb2Rlc1VuZGVyKCBub2RlICkgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsO1xufVxuXG5cbi8qKlxuICogQXBwZW5kIGNvbnRlbnQgdG8gYSB3aW5kb3cuXG4gKlxuICogQHBhcmFtIGNvbnRlbnRcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCggY29udGVudCwgdGFyZ2V0V2luZG93ICkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblxuICAgIGlmKCAhY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdICkge1xuICAgICAgICBjdXJzb3JQb3NpdGlvblsgdGFyZ2V0V2luZG93IF0gPSB7XG4gICAgICAgICAgICBjb2w6IG51bGwsXG4gICAgICAgICAgICBsaW5lOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXBwbHlTdHlsZSggdGV4dENvbnRhaW5lciwgdGFyZ2V0V2luZG93ICk7XG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKCBjb250ZW50LCBjb250ZW50Lmxlbmd0aCApO1xuXG4gICAgaWYoIGN1cnNvclBvc2l0aW9uWyB0YXJnZXRXaW5kb3cgXS5jb2wgIT09IG51bGwgJiYgY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdLmxpbmUgIT09IG51bGwgKSB7XG4gICAgICAgIHJlcGxhY2VQYXJ0KCBjdXJzb3JQb3NpdGlvblsgdGFyZ2V0V2luZG93IF0ubGluZSwgY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdLmNvbCwgdGV4dENvbnRhaW5lciwgdGFyZ2V0V2luZG93ICk7XG4gICAgfVxuICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgb3V0cHV0V2luZG93c1sgdGFyZ2V0V2luZG93IF0uYXBwZW5kQ2hpbGQoIHRleHRDb250YWluZXIgKTtcbiAgICAgICAgY3VycmVudENvbnRhaW5lcnNbIHRhcmdldFdpbmRvdyBdLmFwcGVuZENoaWxkKCB0ZXh0Q29udGFpbmVyICk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIENsZWFycyBhbiBvdXRwdXQgd2luZG93LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgaWYoIHRhcmdldFdpbmRvdyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBmbHVzaCggMCApO1xuICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoIG91dHB1dFdpbmRvd3NbIDAgXSApO1xuICAgICAgICBhcHBseVN0eWxlKCBvdXRwdXRXaW5kb3dzWyAwIF0sIDAgKTtcbiAgICAgICAgYXBwbHlTdHlsZSggZG9jdW1lbnQuYm9keSwgMCApO1xuICAgICAgICBwb3NpdGlvbi5yZXNldCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYoICFvdXRwdXRXaW5kb3dzWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4vLyBjb25zb2xlLmxvZyggJ2NsZWFyIHdpbmRvdycsIHRhcmdldFdpbmRvdyApO1xuICAgICAgICBmbHVzaCggdGFyZ2V0V2luZG93ICk7XG4gICAgICAgIG91dHB1dFdpbmRvd3NbIHRhcmdldFdpbmRvdyBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGFwcGx5U3R5bGUoIG91dHB1dFdpbmRvd3NbIHRhcmdldFdpbmRvdyBdLCB0YXJnZXRXaW5kb3cgKTtcblxuICAgICAgICAvLyB3aGVuIGNsZWFyaW5nIHRoZSBtYWluIHdpbmRvdywgc2V0IHRoZSBlbnRpcmUgcGFnZSdzIHN0eWxlXG4gICAgICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IDAgKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlKCBkb2N1bWVudC5ib2R5LCAwICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbi5yZXNldCggdGFyZ2V0V2luZG93ICk7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3Qgc2Nyb2xsIGF1dG9tYXRpY2FsbHkgcmlnaHQgYWZ0ZXIgY2xlYXJpbmcgdGhlIG1haW4gd2luZG93XG4gICAgaWYoIHRhcmdldFdpbmRvdyA8IDEgKSB7XG4gICAgICAgIC8vIGh1Z291aS5kb1Njcm9sbCA9IGZhbHNlO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgd2luZG93IChIdWdvIG9ubHkpLlxuICpcbiAqIEBwYXJhbSBvdXRwdXRXaW5kb3dcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gcmlnaHRcbiAqIEBwYXJhbSBib3R0b21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSggb3V0cHV0V2luZG93LCBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2coICdjcmVhdGluZyB3aW5kb3cnLCBvdXRwdXRXaW5kb3cgKyAnOiAgbGVmdCcsIGxlZnQsICd0b3AnLCB0b3AsICdyaWdodCcsIHJpZ2h0LCAnYm90dG9tJywgYm90dG9tICk7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IG1lYXN1cmVEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgY2hhckhlaWdodCA9IGRpbWVuc2lvbnMuY2hhci5oZWlnaHQ7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGdldCggMCApLnBhcmVudE5vZGU7XG5cbiAgICBsZXQgbmV3V2luZG93O1xuXG4gICAgd2luZG93RGltZW5zaW9uc1sgb3V0cHV0V2luZG93IF0gPSB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgfTtcblxuICAgIGlmKCAhZ2V0T3B0aW9uKCAnd2luZG93aW5nJyApICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdGhlIG1haW4gd2luZG93IG9ubHkgY2hhbmdlcyBzaXplXG4gICAgaWYoIG91dHB1dFdpbmRvdyA9PT0gMCApIHtcbi8vICAgICAgICAgICAgICAgIG91dHB1dFdpbmRvd1swXS5zdHlsZS5wYWRkaW5nTGVmdCA9ICggbGVmdCAtIDEgKSArICdweCc7XG4gICAgICAgIGdldCggMCApLnN0eWxlLnBhZGRpbmdUb3AgPSAoKHRvcCAtIDEpICogZGltZW5zaW9ucy5jaGFyLmhlaWdodCkgKyAncHgnO1xuLy8gICAgICAgICAgICAgICAgb3V0cHV0V2luZG93WzBdLnN0eWxlLndpZHRoID0gKCAoIHJpZ2h0ICsgMSApICogZGltZW5zaW9ucy5jaGFyLndpZHRoICkgKyAncHgnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIGdldCggb3V0cHV0V2luZG93ICkgKSB7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoIGdldCggb3V0cHV0V2luZG93ICkgKTtcbiAgICB9XG5cbiAgICBuZXdXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIG5ld1dpbmRvdy5pZCA9ICd3aW5kb3cnICsgb3V0cHV0V2luZG93O1xuICAgIG5ld1dpbmRvdy5jbGFzc05hbWUgPSAnaGF2ZW53aW5kb3cgZm9udC1maXhlZC13aWR0aCc7XG4gICAgbmV3V2luZG93LnN0eWxlLmhlaWdodCA9IGNoYXJIZWlnaHQgKiAoYm90dG9tIC0gdG9wICsgMSkgKyAncHgnO1xuICAgIG5ld1dpbmRvdy5zdHlsZS50b3AgPSAoKHRvcCAtIDEpICogY2hhckhlaWdodCkgKyAncHgnO1xuICAgIG5ld1dpbmRvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gKGxlZnQgLSAxKSArICdweCc7XG4gICAgbmV3V2luZG93LnN0eWxlLndpZHRoID0gKChyaWdodCAtIGxlZnQgKyAyKSAqIGRpbWVuc2lvbnMuY2hhci53aWR0aCkgKyAncHgnO1xuXG4gICAgb3V0cHV0V2luZG93c1sgb3V0cHV0V2luZG93IF0gPSBuZXdXaW5kb3c7XG4gICAgY3VycmVudENvbnRhaW5lcnNbIG91dHB1dFdpbmRvdyBdID0gbmV3V2luZG93O1xuICAgIGNvbnRhaW5lci5hcHBlbmQoIG5ld1dpbmRvdywgbWFpbkNvbnRhaW5lciApO1xufTtcblxuXG4vKipcbiAqIE91dHB1dCBjb250YWluZXJzIGluc2lkZSB0aGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBhcHBlbmQ6IGZ1bmN0aW9uKCBjb250YWluZXIsIHRhcmdldCApIHtcbiAgICAgICAgaWYoIHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgb3V0cHV0V2luZG93c1sgdGFyZ2V0IF0uYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29udGFpbmVyc1sgdGFyZ2V0V2luZG93IF07XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oIG5ld0NvbnRhaW5lciwgdGFyZ2V0V2luZG93ICkge1xuICAgICAgICBjdXJyZW50Q29udGFpbmVyc1sgdGFyZ2V0V2luZG93IF0gPSBuZXdDb250YWluZXI7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG91dHB1dCB3aW5kb3cgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCggdGFyZ2V0V2luZG93ICkge1xuICAgIHJldHVybiBvdXRwdXRXaW5kb3dzWyB0YXJnZXRXaW5kb3cgXTtcbn1cblxuXG4vKipcbiAqIEdldCBhbGwgZGF0YSByZXF1aXJlZCB0byBsYXRlciByZWNvbnN0cnVjdCB0aGUgVUkgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVSVN0YXRlKCkge1xuICAgIGNvbnN0IHdpbmRvd0NvbnRlbnRzID0gW107XG4gICAgY29uc3QgcHJvbXB0RWxlbSA9IGdldFByb21wdCgpO1xuICAgIGNvbnN0IHByb21wdFBhcmVudCA9IHByb21wdEVsZW0ucGFyZW50Tm9kZTtcblxuICAgIC8vIHB1dCBwcm9tcHQgYXdheSBkdXJpbmcgdGhlIHNhdmVcbiAgICBpZiggcHJvbXB0UGFyZW50ICkge1xuICAgICAgICBwcm9tcHRQYXJlbnQucmVtb3ZlQ2hpbGQoIHByb21wdEVsZW0gKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdGhlID5cbiAgICBsZXQgbGFzdENoaWxkID0gb3V0cHV0V2luZG93c1sgMCBdLmxhc3RDaGlsZDtcbiAgICBvdXRwdXRXaW5kb3dzWyAwIF0ucmVtb3ZlQ2hpbGQoIGxhc3RDaGlsZCApO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBvdXRwdXRXaW5kb3dzLmxlbmd0aDsgKytpICkge1xuICAgICAgICB3aW5kb3dDb250ZW50c1sgaSBdID0gb3V0cHV0V2luZG93c1sgaSBdLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICAvLyBwdXQgYmFjayB3aGF0IHdhcyByZW1vdmVkXG4gICAgb3V0cHV0V2luZG93c1sgMCBdLmFwcGVuZENoaWxkKCBsYXN0Q2hpbGQgKTtcblxuICAgIGlmKCBwcm9tcHRQYXJlbnQgKSB7XG4gICAgICAgIHByb21wdFBhcmVudC5hcHBlbmRDaGlsZCggcHJvbXB0RWxlbSApO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGJlIGRvbmUgYmV0dGVyLCBidXQgcmVtb3ZlIHRoZSBsYXN0IGxpbmUgYnJlYWtcbiAgICAvLyBiZWNhdXNlIHJlc3RvcmluZyBhZGRzIG9uZSBiYWNrIGFnYWluXG4gICAgY29uc3QgbGFzdExiciA9IHdpbmRvd0NvbnRlbnRzWyAwIF0ubGFzdEluZGV4T2YoICdcXG4nICk7XG4gICAgd2luZG93Q29udGVudHNbIDAgXSA9IHdpbmRvd0NvbnRlbnRzWyAwIF0uc3Vic3RyaW5nKCAwLCBsYXN0TGJyICkgKyB3aW5kb3dDb250ZW50c1sgMCBdLnN1YnN0cmluZyggbGFzdExiciArIDEgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNtZEhpc3Rvcnk6IGhpc3RvcnkuZ2V0KCksXG4gICAgICAgIGN1cnJlbnRDb2xvcnM6IGNvbG9yLmdldCgpLFxuICAgICAgICBmb250OiBmb250LmdldCgpLFxuICAgICAgICBwb3NpdGlvbjogY3Vyc29yUG9zaXRpb24sXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgd2luZG93RGltZW5zaW9uczogd2luZG93RGltZW5zaW9ucyxcbiAgICAgICAgd2luZG93Q29udGVudHM6IHdpbmRvd0NvbnRlbnRzXG4gICAgfTtcbn1cblxuXG4vKipcbiAqIFdoZW4gdGhlIHdpbmRvdyBzaXplIGNoYW5nZXMsIG1lYXN1cmUgdGhlIHdpbmRvdyB3aWR0aCBpbiBjaGFyYWN0ZXJzIChIdWdvIG9ubHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlRGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBvdXRwdXRDb250YWluZXIgPSBnZXQoIDAgKS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBvdXRwdXRDb250YWluZXIgKS53aWR0aCwgMTAgKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge30sXG4gICAgICAgICAgICBjaGFyOiB7fVxuICAgICAgICB9O1xuICAgIGNvbnN0IG1lYXN1cmVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgY29uc3Qgb3V0cHV0RGltZW5zaW9ucyA9IGRpbWVuc2lvbnMud2luZG93O1xuXG4gICAgbGV0IG1lYXN1cmVFbGVtSGVpZ2h0O1xuXG4gICAgbWVhc3VyZUVsZW0uaW5uZXJIVE1MID0gJzAwMDAwPGJyPjAwMDAwPGJyPjAwMDAwJztcbiAgICBtZWFzdXJlRWxlbS5jbGFzc05hbWUgPSAnZm9udC1maXhlZC13aWR0aCc7XG4gICAgbWVhc3VyZUVsZW0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG4gICAgb3V0cHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKCBtZWFzdXJlRWxlbSApO1xuXG4gICAgZGltZW5zaW9ucy5jaGFyLndpZHRoID0gbWVhc3VyZUVsZW0ub2Zmc2V0V2lkdGggLyA1O1xuICAgIGRpbWVuc2lvbnMubGluZS53aWR0aCA9IE1hdGguZmxvb3IoICggb3V0cHV0RGltZW5zaW9ucy53aWR0aCAtIDEgKSAvIGRpbWVuc2lvbnMuY2hhci53aWR0aCApO1xuXG4gICAgbWVhc3VyZUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWVhc3VyZUVsZW1IZWlnaHQgPSBtZWFzdXJlRWxlbS5jbGllbnRIZWlnaHQ7XG4gICAgbWVhc3VyZUVsZW0uaW5uZXJIVE1MICs9ICc8YnI+MDAwMDA8YnI+MDAwMDAnO1xuICAgIGRpbWVuc2lvbnMuY2hhci5oZWlnaHQgPSAobWVhc3VyZUVsZW0uY2xpZW50SGVpZ2h0IC0gbWVhc3VyZUVsZW1IZWlnaHQpIC8gMiArIDM7XG4gICAgZGltZW5zaW9ucy5saW5lLmhlaWdodCA9IE1hdGguZmxvb3IoIG91dHB1dERpbWVuc2lvbnMuaGVpZ2h0IC8gZGltZW5zaW9ucy5jaGFyLmhlaWdodCApO1xuXG4gICAgbWVhc3VyZUVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbWVhc3VyZUVsZW0gKTtcblxuICAgIHJldHVybiBkaW1lbnNpb25zO1xufVxuXG5cbi8qKlxuICogU2V0IHRoZSBjdXJzb3IgcG9zaXRpb24gaW5zaWRlIHRoZSB0YXJnZXQgd2luZG93LiBIdWdvIG9ubHkuXG4gKi9cbmV4cG9ydCBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICByZXNldDogZnVuY3Rpb24oIHRhcmdldFdpbmRvdyApIHtcbiAgICAgICAgLy8gaWYgbm8gd2luZG93IHNwZWNpZmllZCwgcmVzZXQgYWxsIHBvc2l0aW9uc1xuICAgICAgICBpZiggdGFyZ2V0V2luZG93ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IFt7XG4gICAgICAgICAgICAgICAgY29sOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbmU6IG51bGxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0KCBudWxsLCBudWxsLCB0YXJnZXRXaW5kb3cgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbiggb2xkU3RhdGUgKSB7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uID0gb2xkU3RhdGU7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oIGNvbCwgbGluZSwgaGF2ZW5XaW5kb3cgKSB7XG4gICAgICAgIGlmKCAhY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0gKSB7XG4gICAgICAgICAgICBjdXJzb3JQb3NpdGlvblsgaGF2ZW5XaW5kb3cgXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0uY29sID0gY29sO1xuICAgICAgICBjdXJzb3JQb3NpdGlvblsgaGF2ZW5XaW5kb3cgXS5saW5lID0gbGluZTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB3aW5kb3cgdGl0bGVcbiAqXG4gKiBAcGFyYW0gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRpdGxlKCB0aXRsZSApIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xufSIsImltcG9ydCB7IGFwcGVuZCBhcyBhcHBlbmRUb0J1ZmZlciB9IGZyb20gXCIuL2hhdmVuL2J1ZmZlclwiO1xuaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi9oYXZlbi9oYXZlblwiO1xuXG5pbXBvcnQge1xuICAgIGdldFRleHRXYXNQcmludGVkLFxuICAgIHNldE1vZGVcbn0gZnJvbSBcIi4vaGF2ZW4vaW5wdXRcIjtcblxuaW1wb3J0IHsgZ2V0IGFzIGdldE9wdGlvbiB9IGZyb20gXCIuL2hhdmVuL29wdGlvbnNcIjtcblxuaW1wb3J0IHtcbiAgICBhdXRvc2F2ZSxcbiAgICByZXN0b3JlVUkgYXMgcmVzdG9yZUhhdmVuVUkgXG59IGZyb20gXCIuL2hhdmVuL3N0YXRlXCI7XG5cbmltcG9ydCB7IFxuICAgIGNvbG9yIGFzIGNvbG9ycywgXG4gICAgc2V0IGFzIHNldFN0eWxlIFxufSBmcm9tIFwiLi9oYXZlbi9zdHlsZVwiO1xuXG5pbXBvcnQge1xuICAgIGNsZWFyIGFzIGNsZWFyV2luZG93LFxuICAgIG1lYXN1cmVEaW1lbnNpb25zLFxuICAgIHBvc2l0aW9uIGFzIHdpbmRvd1Bvc2l0aW9uLFxuICAgIHNldFRpdGxlIGFzIHNldFdpbmRvd1RpdGxlXG59IGZyb20gXCIuL2hhdmVuL3dpbmRvd1wiO1xuXG5pbXBvcnQgKiBhcyBfb3Bjb2RlcyBmcm9tIFwiLi9vcGNvZGVzXCI7XG5leHBvcnQgY29uc3Qgb3Bjb2RlcyA9IF9vcGNvZGVzO1xuXG5cbi8qKlxuICogQ2xlYXIgdGFyZ2V0IHdpbmRvdywgb3IgaWYgb21pdHRlZCwgdGhlIGVudGlyZSBzY3JlZW4uXG4gKlxuICogQHBhcmFtIGh1Z29XaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCBodWdvV2luZG93ICkge1xuICAgIGNsZWFyV2luZG93KCBodWdvV2luZG93ICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICAgIC8qKlxuICAgICAqIFNldCBjb2xvcnMgaW4gd2luZG93c1xuICAgICAqXG4gICAgICogQHBhcmFtIHdoaWNoXG4gICAgICogQHBhcmFtIG5ld0NvbG9yXG4gICAgICogQHBhcmFtIGh1Z29XaW5kb3dcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKCB3aGljaCwgbmV3Q29sb3IsIGh1Z29XaW5kb3cgKSB7XG4gICAgICAgIGNvbG9ycy5zZXQoIHdoaWNoLCBuZXdDb2xvciwgaHVnb1dpbmRvdyApO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IGZvbnQgPSB7XG4gICAgLyoqXG4gICAgICogU2V0IGZvbnQgc3R5bGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZlxuICAgICAqIEBwYXJhbSBodWdvV2luZG93XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiggZiwgaHVnb1dpbmRvdyApIHtcbiAgICAgICAgc2V0U3R5bGUoIFwiYm9sZFwiLCAhIShmICYgMSksIGh1Z29XaW5kb3cgKTtcbiAgICAgICAgc2V0U3R5bGUoIFwiaXRhbGljXCIsICEhKGYgJiAyKSwgaHVnb1dpbmRvdyApO1xuICAgICAgICBzZXRTdHlsZSggXCJ1bmRlcmxpbmVcIiwgISEoZiAmIDQpLCBodWdvV2luZG93ICk7XG4gICAgICAgIHNldFN0eWxlKCBcInByb3BvcnRpb25hbFwiLCAhIShmICYgOCksIGh1Z29XaW5kb3cgKTtcbiAgICAgICAgc2V0U3R5bGUoIFwib3JpZ2luYWxcIiwgZiwgaHVnb1dpbmRvdyApO1xuXG4gICAgICAgIC8vIHNldFN0eWxlKCBmbHVzaGVkVGV4dCwgaHVnb1dpbmRvdyApO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIHRoZSBnYW1lIGhhcyBlbmRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdhbWVFbmRlZCgpIHtcbiAgICAvLyBkZWxldGUgdGhlIGF1dG9zYXZlIGZpbGVcbiAgICBpZiggZ2V0T3B0aW9uKCAnYXV0b3NhdmUnICkgKSB7XG4gICAgICAgIGF1dG9zYXZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIFJlZGlyZWN0IHRvIGFuIGV4aXQgVVJMIHdoZW4gdGhlIGdhbWUgZW5kcy5cbiAgICAvLyBBIGZhdGFsIGVycm9yIHNob3VsZCBibG9jayB0aGUgcmVkaXJlY3Rpb24uXG4gICAgLy8gQXMgYSBjcnVkZSBjaGVjayBmb3Igd2hldGhlciBhbiBlcnJvciB3YXMgdGhyb3duLFxuICAgIC8vIGNoZWNrIGlmIHRoZSBlcnJvciBtZXNzYWdlIGRpdiBpcyBwcmVzZW50LlxuICAgIGlmKCBnZXRPcHRpb24oICdleGl0X3VybCcgKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmYXRhbC1lcnJvcicgKSApIHtcbiAgICAgICAgLy8gaWYgYW55IHRleHQgaXMgcHJpbnRlZCBhZnRlciBwcmV2aW91cyBpbnB1dCxcbiAgICAgICAgLy8gd2FpdCBmb3Iga2V5cHJlc3MvY2xpY2sgYmVmb3JlIHJlZGlyZWN0aW5nXG4gICAgICAgIGlmKCBnZXRUZXh0V2FzUHJpbnRlZCgpICkge1xuICAgICAgICAgICAgc2V0TW9kZSggJ2VuZGdhbWUnICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBnZXRPcHRpb24oICdleGl0X3VybCcgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEluaXRpYWxpemUgSHVnb0pTIG1ldGhvZHMgYW5kIHN0YXJ0IEhhdmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIHN0YXJ0KCB7XG4gICAgICAgIC8vIEh1Z28gZW5naW5lIGRlY2lkZXMgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvcnNcbiAgICAgICAgZW5naW5lQ29sb3JzOiB0cnVlLFxuXG4gICAgICAgIC8vIHRoZSBIdWdvIGVuZ2luZSB3aWxsIGhhbmRsZSBwcmludGluZyB0aGUgcHJvbXB0LFxuICAgICAgICAvLyBhcyBvcHBvc2VkIHRvIFZvcnBsZSB0aGF0IHVzZXMgYSBjdXN0b20gcHJvbXB0XG4gICAgICAgIGVuZ2luZVByb21wdDogdHJ1ZSxcblxuICAgICAgICAvLyBsZXQgdGhlIEh1Z28gZW5naW5lIHNldCB0aGUgZm9udCBmYW1pbHlcbiAgICAgICAgLy8gKGZpeGVkIHdpZHRoIG9yIHByb3BvcnRpb25hbClcbiAgICAgICAgZW5naW5lRm9udEZhbWlseTogdHJ1ZSxcblxuICAgICAgICAvLyB1c2VyLXByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczogaHVnb2pzX29wdGlvbnMsXG5cbiAgICAgICAgLy8gbm8gVW5pY29kZSBzdXBwb3J0XG4gICAgICAgIHVuaWNvZGU6IGZhbHNlLFxuXG4gICAgICAgIC8vIHRoZSBuYW1lIG9mIHRoZSBzdG9yeSBmaWxlIGluIHRoZSB2aXJ0dWFsIGZpbGVzeXN0ZW1cbiAgICAgICAgdmlydHVhbFN0b3J5ZmlsZTogJ2dhbWUuaGV4J1xuICAgIH0gKTtcblxuICAgIG9wY29kZXMuaW5pdCgpO1xufVxuXG5cbi8qKlxuICogU2VuZCB0aGUgY3VycmVudCB3aW5kb3cgZGltZW5zaW9ucyBiYWNrIHRvIHRoZSBlbmdpbmUuXG4gKlxuICogQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBpdCBuZWVkcyB0byBpbml0IHRoZSBkaXNwbGF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNjcmVlbigpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlcicgKTtcblxuICAgIGlmKCBsb2FkZXIgKSB7XG4gICAgICAgIGxvYWRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBsb2FkZXIgKTtcbiAgICB9XG5cbiAgICBzZW5kV2luZG93RGltZW5zaW9ucygpO1xufVxuXG5cbi8qKlxuICogU2V0IHRoZSBwcmludCBjdXJzb3IgcG9zaXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uKCBjb2x1bW4sIGxpbmUsIGh1Z29XaW5kb3cgKSB7XG4gICAgICAgIHdpbmRvd1Bvc2l0aW9uLnNldCggY29sdW1uLCBsaW5lLCBodWdvV2luZG93ICk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFByaW50IHRleHQuXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBodWdvV2luZG93XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludCggdGV4dCwgaHVnb1dpbmRvdyApIHtcbiAgICAvLyBcXG4gaXMgYSBjYXJyaWFnZSByZXR1cm4sIG5vdCBuZWVkZWQgaW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgICBpZiggdGV4dCA9PT0gJ1xcbicgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhcHBlbmRUb0J1ZmZlciggdGV4dCwgaHVnb1dpbmRvdyApO1xufVxuXG5cbi8qKlxuICogUmVzZXQgVUkgc3RhdGUgYWZ0ZXIgcmVzdG9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVVJKCkge1xuICAgIHJlc3RvcmVIYXZlblVJKCk7XG59XG5cblxuLyoqXG4gKiBTZW5kIHRoZSB3aW5kb3cgZGltZW5zaW9ucyB0byB0aGUgZW5naW5lIChIdWdvIG9ubHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kV2luZG93RGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gbWVhc3VyZURpbWVuc2lvbnMoKTtcbi8vICAgICAgICBjb25zb2xlLmxvZyggJ3NlbmRpbmcgZGltZW5zaW9ucycsIGRpbWVuc2lvbnMpO1xuXG4gICAgTW9kdWxlLmNjYWxsKFxuICAgICAgICAnaHVnb19zZXRfd2luZG93X2RpbWVuc2lvbnMnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgIFsgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJyBdLFxuICAgICAgICBbXG4gICAgICAgICAgICBkaW1lbnNpb25zLndpbmRvdy53aWR0aCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMud2luZG93LmhlaWdodCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMubGluZS53aWR0aCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMubGluZS5oZWlnaHQsXG4gICAgICAgICAgICBkaW1lbnNpb25zLmNoYXIud2lkdGgsXG4gICAgICAgICAgICBkaW1lbnNpb25zLmNoYXIuaGVpZ2h0XG4gICAgICAgIF1cbiAgICApO1xufVxuXG5cbi8qKlxuICogU2V0cyB0aGUgd2luZG93IHRpdGxlLiBDYWxsZWQgYnkgdGhlIGVuZ2luZS5cbiAqXG4gKiBAcGFyYW0gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRpdGxlKCB0aXRsZSApIHtcbiAgICBzZXRXaW5kb3dUaXRsZSggdGl0bGUgKTtcbn1cblxuXG4vLyBTZXQgRW1zY3JpcHRlbidzIGNvbW1hbmQgbGluZSBhcmd1bWVudHMgdGhhdCBsb2FkIHRoZSBzdG9yeSBmaWxlXG53aW5kb3cuTW9kdWxlLmFyZ3VtZW50cyA9IFsgJy9nYW1lLmhleCcgXTsiLCJpbXBvcnQgXCIuL2hhdmVuL2Jvb3RzdHJhcFwiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vaHVnb1wiO1xuXG5pbXBvcnQgXCIuL2Nzcy9odWdvLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdWkuY3NzXCI7XG5cbndpbmRvdy5odWdvdWkgPSB1aTsiLCIvKipcbiAqIFN1cHBvcnQgZm9yIG5vbi1zdGFuZGFyZCBvcGNvZGVzLlxuICovXG5cbmltcG9ydCB7IGFkZENhbGxiYWNrIH0gZnJvbSBcIi4vaGF2ZW4vYXNzZXRzXCI7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0T3B0aW9uIH0gZnJvbSBcIi4vaGF2ZW4vb3B0aW9uc1wiO1xuXG5jb25zdCBPUENPREVfQ09OVFJPTF9GSUxFID0gXCJIckN0bEFQSVwiO1xuY29uc3QgT1BDT0RFX0NIRUNLX0ZJTEUgPSBcIk9wQ2hlY2tcIjtcblxuXG4vKipcbiAqIFNhdmUgdGhlIHZpcnR1YWwgZmlsZSB0aGF0IHRlbGxzIHRoZSBnYW1lIGZpbGUgd2Ugc3VwcG9ydCBleHRyYSBvcGNvZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRDYWxsYmFjayggZnVuY3Rpb24oIGRvbmUgKSB7XG4gICAgICAgIEZTLnN5bmNmcyggdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiggZ2V0T3B0aW9uKCAnZXh0cmFfb3Bjb2RlcycgKSApIHtcbiAgICAgICAgICAgICAgICBGUy53cml0ZUZpbGUoXG4gICAgICAgICAgICAgICAgICAgIE9QQ09ERV9DSEVDS19GSUxFLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVWludDhBcnJheShbIDg5LCA0NyBdKSAgIC8vID09IDEyMTIxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEZTLnVubGluayggT1BDT0RFX0NIRUNLX0ZJTEUgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBGUy51bmxpbmsoIE9QQ09ERV9DT05UUk9MX0ZJTEUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRlMuc3luY2ZzKCBmYWxzZSwgZG9uZSApO1xuICAgICAgICB9ICk7XG4gICAgfSApO1xufVxuXG4vKipcbiAqIFRoZSBlbmdpbmUgaGFzIHdyaXR0ZW4gdG8gdGhlIG9wY29kZSBmaWxlLiBTZWUgd2hhdCdzIGluIGl0LFxuICogZXhlY3V0ZSB0aGUgb3Bjb2RlLCBhbmQgd3JpdGUgdGhlIHJlc3BvbnNlIChpZiBhbnkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICBpZiggIWdldE9wdGlvbiggJ2V4dHJhX29wY29kZXMnICkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhPUENPREVfQ09OVFJPTF9GSUxFKVxuICAgIGNvbnN0IG9wY29kZURhdGEgPSBGUy5yZWFkRmlsZSggT1BDT0RFX0NPTlRST0xfRklMRSApO1xuICAgIGNvbnN0IHBhcmFtY291bnQgPSBvcGNvZGVEYXRhLmxlbmd0aCAvIDIgLSAxO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gW107XG5cbiAgICBjb25zdCBhZGRSZXNwb25zZSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgcmVzcG9uc2UucHVzaCggdmFsdWUgJSAyNTYgKTtcbiAgICAgICAgcmVzcG9uc2UucHVzaCggdmFsdWUgPj4gOCApO1xuICAgIH07XG5cbiAgICBjb25zdCByZWFkV29yZCA9IGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICAgICAgcmV0dXJuIG9wY29kZURhdGFbIGluZGV4ICogMiBdICsgb3Bjb2RlRGF0YVsgaW5kZXggKiAyICsgMSBdICogMjU2O1xuICAgIH07XG5cbiAgICBjb25zdCB3cml0ZVJlc3BvbnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBGUy53cml0ZUZpbGUoIE9QQ09ERV9DT05UUk9MX0ZJTEUsIG5ldyBVaW50OEFycmF5KCByZXNwb25zZSApICk7XG4gICAgfTtcblxuICAgIC8vIG9kZCBudW1iZXIgb2YgYnl0ZXMgaW4gdGhlIGlucHV0LCBzaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgaWYoIG9wY29kZURhdGEubGVuZ3RoICUgMiA9PT0gMSApIHtcbiAgICAgICAgYWRkUmVzcG9uc2UoIDIwICk7ICAvLyAyMDogUkVTVUxUX1dST05HX0JZVEVfQ09VTlRcbiAgICAgICAgd3JpdGVSZXNwb25zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3Bjb2RlcyA9IHtcbiAgICAgICAgMTogZnVuY3Rpb24oKSB7ICAgICAvLyBJU19PUENPREVfQVZBSUxBQkxFXG4gICAgICAgICAgICBpZiggb3Bjb2Rlc1sgcmVhZFdvcmQoIDEgKSBdICkge1xuICAgICAgICAgICAgICAgIGFkZFJlc3BvbnNlKCAxICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRSZXNwb25zZSggMSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIDIwMDogZnVuY3Rpb24oKSB7ICAgLy8gR0VUX09TXG4gICAgICAgICAgICBhZGRSZXNwb25zZSggNiApOyAgIC8vIDYgPSBCcm93c2VyXG4gICAgICAgIH0sXG5cbiAgICAgICAgMzAwOiBmdW5jdGlvbigpIHsgICAvLyBBQk9SVFxuICAgICAgICAgICAgLy8gdHJ5IHRvIGNsb3NlIHRoZSB3aW5kb3cg4oCTIHdvbid0IHdvcmsgdW5sZXNzIHRoZSBpbnRlcnByZXRlclxuICAgICAgICAgICAgLy8gd2luZG93IHdhcyBwcm9ncmFtbWF0aWNhbGx5IG9wZW5lZCBieSBhbm90aGVyIHBhZ2VcbiAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuXG4gICAgICAgICAgICAvLyBxdWljay1hbmQtZGlydHkgYWJvcnQgYnkgdGhyb3dpbmcgYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoICdBYm9ydCBvcGNvZGUgY2FsbGVkJyApO1xuICAgICAgICB9LFxuXG4gICAgICAgIDUwMDogZnVuY3Rpb24oKSB7ICAgLy8gT1BFTl9VUkxcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IE1vZHVsZS5jY2FsbChcbiAgICAgICAgICAgICAgICAnaHVnb2pzX2dldF9kaWN0aW9uYXJ5X3dvcmQnLFxuICAgICAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIFsgJ2ludCcgXSxcbiAgICAgICAgICAgICAgICBbIG9wY29kZURhdGFbIDIgXSArIG9wY29kZURhdGFbIDMgXSAqIDI1NiBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiggY29uZmlybSggJ0dhbWUgd2FudHMgdG8gb3BlbiB3ZWIgYWRkcmVzcyAnICsgdXJsICsgJy4gQ29udGludWU/JyApICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCB1cmwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICA4MDA6IGZ1bmN0aW9uKCkgeyAgIC8vIElTX01VU0lDX1BMQVlJTkdcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCAwICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgOTAwOiBmdW5jdGlvbigpIHsgICAvLyBJU19TQU1QTEVfUExBWUlOR1xuICAgICAgICAgICAgYWRkUmVzcG9uc2UoIDAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAxMDAwOiBmdW5jdGlvbigpIHsgIC8vIElTX0ZMVUlEX0xBWU9VVFxuICAgICAgICAgICAgYWRkUmVzcG9uc2UoIDEgKTtcbiAgICAgICAgfSxcbiAgICAgICAgLypcbiAgICAgICAgIDExMDA6IGZ1bmN0aW9uKCkgeyAgLy8gU0VUX0NPTE9SXG4gICAgICAgICBodWdvdWkuc2V0Q3VzdG9tQ29sb3IoIG9wY29kZURhdGFbIDIgXSwgb3Bjb2RlRGF0YVsgNCBdLCBvcGNvZGVEYXRhWyA2IF0sIG9wY29kZURhdGFbIDggXSApO1xuICAgICAgICAgfSxcbiAgICAgICAgICovXG4gICAgICAgIDEzMDA6IGZ1bmN0aW9uKCkgeyAgLy8gSElERVNfQ1VSU09SXG4gICAgICAgICAgICBhZGRSZXNwb25zZSggMSApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFsbCBub24temVybyBwYXJhbWV0ZXIgY291bnRzXG4gICAgY29uc3QgcGFyYW1Db3VudHMgPSB7XG4gICAgICAgIDE6IDEsXG4gICAgICAgIDQwMDogNCxcbiAgICAgICAgNTAwOiAxLFxuICAgICAgICA2MDA6IDEsXG4gICAgICAgIDcwMDogMSxcbiAgICAgICAgMTEwMDogNCxcbiAgICAgICAgMTYwMDogMlxuICAgIH07XG5cbiAgICBjb25zdCBvcCA9IHJlYWRXb3JkKCAwICk7XG5cbiAgICBpZiggb3Bjb2Rlc1sgb3AgXSApIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQYXJhbXMgPSBwYXJhbUNvdW50c1sgb3AgXSB8fCAwO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHBhcmFtZXRlciBjb3VudCBpcyBjb3JyZWN0XG4gICAgICAgIGlmKCBwYXJhbWNvdW50ICE9PSByZXF1aXJlZFBhcmFtcyApIHtcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCAxMCApO1xuICAgICAgICAgICAgd3JpdGVSZXNwb25zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb3Bjb2RlXG4gICAgICAgIGFkZFJlc3BvbnNlKCAwICk7ICAgLy8gMDogUkVTVUxUX09LXG4gICAgICAgIG9wY29kZXNbIG9wIF0oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHVua25vd24gb3Bjb2RlIG9yIG5vIHN1cHBvcnRcbiAgICAgICAgYWRkUmVzcG9uc2UoIDMwICk7ICAvLyAzMDogVU5SRUNPR05JWkVEX09QQ09ERVxuICAgICAgICBhZGRSZXNwb25zZSggb3AgKTtcbiAgICAgICAgYWRkUmVzcG9uc2UoIHBhcmFtY291bnQgKTtcblxuICAgICAgICBmb3IoIGxldCBpID0gMTsgaSA8IHBhcmFtY291bnQ7ICsraSApIHtcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCByZWFkV29yZCggaSApICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3cml0ZSB0aGUgcmVzcG9uc2UgdG8gdGhlIGNvbnRyb2wgZmlsZVxuICAgIHdyaXRlUmVzcG9uc2UoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9