module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		10: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"22":"f6fe8004e483a342c5fe"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "067r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HOME_PAGE; });
/* unused harmony export AGENTS_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LISTING_POSTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SINGLE_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AGENT_PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AGENT_ACCOUNT_SETTINGS_PAGE; });
/* unused harmony export AGENT_PROFILE_EDIT_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AGENT_IMAGE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AGENT_PASSWORD_CHANGE_PAGE; });
/* unused harmony export AGENT_PROFILE_DELETE */
/* unused harmony export AGENT_PROFILE_FAVOURITE */
/* unused harmony export AGENT_PROFILE_CONTACT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_HOTEL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PRICING_PLAN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PRIVACY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return REGISTRATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FORGET_PASSWORD_PAGE; });
// General Page Section
const HOME_PAGE = '/';
const AGENTS_PAGE = '/agents'; // Listing Single Page Section

const LISTING_POSTS_PAGE = '/listing';
const SINGLE_POST_PAGE = '/post'; // Agent Profile Page Section

const AGENT_PROFILE_PAGE = '/profile';
const AGENT_ACCOUNT_SETTINGS_PAGE = '/account-settings';
const AGENT_PROFILE_EDIT_PAGE = '/edit';
const AGENT_IMAGE_EDIT_PAGE = '/change-image';
const AGENT_PASSWORD_CHANGE_PAGE = '/change-password';
const AGENT_PROFILE_DELETE = '/delete';
const AGENT_PROFILE_FAVOURITE = '/favourite-post';
const AGENT_PROFILE_CONTACT = '/contact';
const ADD_HOTEL_PAGE = '/add-hotel'; // Other Pages

const PRICING_PLAN_PAGE = '/pricing-plan';
const PRIVACY_PAGE = '/privacy'; // Login / Registation Page

const LOGIN_PAGE = '/sign-in';
const REGISTRATION_PAGE = '/sign-up';
const CHANGE_PASSWORD_PAGE = '/change-password';
const FORGET_PASSWORD_PAGE = '/forget-password';

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4GXx":
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Qn9":
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oiat");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7YAK":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "AMVZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SinglePageLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfilePicLoader; });
/* unused harmony export ImageCardLoader */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SinglePageLoader = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 1000,
    width: 800,
    speed: 3,
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props), __jsx("rect", {
    x: "5.02",
    y: "16.7",
    rx: "0",
    ry: "0",
    width: "782.02",
    height: "319.55"
  }), __jsx("rect", {
    x: "7.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "207.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "104.77",
    y: "362.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "305.77",
    y: "361.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "611.78",
    y: "359.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "709.78",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39"
  }), __jsx("rect", {
    x: "8.02",
    y: "421.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96"
  }), __jsx("rect", {
    x: "550.03",
    y: "418.71",
    rx: "0",
    ry: "0",
    width: "240",
    height: "301.56"
  }), __jsx("rect", {
    x: "9.04",
    y: "561.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96"
  }), __jsx("rect", {
    x: "7.06",
    y: "690.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96"
  }), __jsx("rect", {
    x: "272.25",
    y: "560.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96"
  }), __jsx("rect", {
    x: "405.04",
    y: "558.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96"
  }), __jsx("rect", {
    x: "142.04",
    y: "559.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96"
  }), __jsx("rect", {
    x: "6.06",
    y: "819.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96"
  }));
};
const PostPlaceholder = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 400,
    width: 400,
    speed: 2,
    className: "placeholder",
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props), __jsx("circle", {
    cx: "39.34",
    cy: "17.32",
    r: "0.71"
  }), __jsx("circle", {
    cx: "751.46",
    cy: "58.81",
    r: "40.21"
  }), __jsx("rect", {
    x: "605.25",
    y: "39.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41"
  }), __jsx("rect", {
    x: "639.25",
    y: "59.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), __jsx("rect", {
    x: "518.25",
    y: "38.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41"
  }), __jsx("rect", {
    x: "435.25",
    y: "40.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41"
  }), __jsx("rect", {
    x: "264.25",
    y: "216.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), __jsx("rect", {
    x: "31.25",
    y: "451.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66"
  }), __jsx("rect", {
    x: "399.25",
    y: "531.94",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), __jsx("rect", {
    x: "217.25",
    y: "450.94",
    rx: "0",
    ry: "0",
    width: "176.33",
    height: "147.66"
  }), __jsx("rect", {
    x: "415.25",
    y: "449.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66"
  }), __jsx("rect", {
    x: "608.17",
    y: "448.94",
    rx: "0",
    ry: "0",
    width: "171.75",
    height: "147.66"
  }), __jsx("rect", {
    x: "30.25",
    y: "609.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66"
  }), __jsx("rect", {
    x: "417.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66"
  }), __jsx("rect", {
    x: "609.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66"
  }), __jsx("rect", {
    x: "220.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "174.04",
    height: "147.66"
  }), __jsx("rect", {
    x: "9.63",
    y: "18.61",
    rx: "0",
    ry: "0",
    width: "381.03",
    height: "186"
  }), __jsx("rect", {
    x: "80.63",
    y: "132.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), __jsx("rect", {
    x: "9.63",
    y: "218.61",
    rx: "0",
    ry: "0",
    width: "183",
    height: "25"
  }), __jsx("rect", {
    x: "8.63",
    y: "258.61",
    rx: "0",
    ry: "0",
    width: "381",
    height: "43"
  }), __jsx("rect", {
    x: "8.63",
    y: "319.61",
    rx: "0",
    ry: "0",
    width: "204",
    height: "24"
  }), __jsx("rect", {
    x: "229.63",
    y: "320.61",
    rx: "0",
    ry: "0",
    width: "164.45",
    height: "23"
  }), __jsx("rect", {
    x: "336.63",
    y: "328.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), __jsx("circle", {
    cx: "20.56",
    cy: "370.54",
    r: "11.93"
  }), __jsx("circle", {
    cx: "53.63",
    cy: "376.61",
    r: "1"
  }), __jsx("circle", {
    cx: "52.56",
    cy: "370.54",
    r: "11.93"
  }), __jsx("circle", {
    cx: "81.56",
    cy: "370.54",
    r: "11.93"
  }), __jsx("circle", {
    cx: "112.56",
    cy: "371.54",
    r: "11.93"
  }), __jsx("circle", {
    cx: "141.56",
    cy: "371.54",
    r: "11.93"
  }), __jsx("rect", {
    x: "168.63",
    y: "360.61",
    rx: "0",
    ry: "0",
    width: "104",
    height: "24"
  }), __jsx("rect", {
    x: "213.63",
    y: "397.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }));
};
const ProfilePicLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 180,
  width: 180,
  speed: 3,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, __jsx("circle", {
  cx: "76",
  cy: "60",
  r: "1"
}), __jsx("circle", {
  cx: "90",
  cy: "50",
  r: "41"
}), __jsx("rect", {
  x: "16",
  y: "94",
  rx: "0",
  ry: "0",
  width: "149",
  height: "80"
}));
const ImageCardLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 270,
  width: 215,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, __jsx("circle", {
  cx: "138",
  cy: "80",
  r: "1"
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), __jsx("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "223",
  height: "277"
}));

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BL1r":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MinusOutlined");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E+Jn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Tpg");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], props, props.children)));

const MapWrapper = props => {
  return __jsx(Map, _extends({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
    loadingElement: __jsx("div", {
      style: {
        height: `100%`
      }
    })
  }, props), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (MapWrapper);

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "EupD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/UI/Favorite/useToggle.js


const useToggle = initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialValue);
  const toggler = Object(external_react_["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
};

/* harmony default export */ var Favorite_useToggle = (useToggle);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/UI/Favorite/Favorite.style.js


const addAnimation = Object(external_styled_components_["keyframes"])(["0%{transform:scale(1) rotate(0deg);}50%{transform:scale(1.34) rotateY(90deg);}"]);
const removeAnimation = Object(external_styled_components_["keyframes"])(["0%{transform:scale(1.34) rotateY(90deg);}50%{transform:scale(1) rotateY(0);}"]);
const AddAnimation = Object(external_styled_components_["css"])(["animation:", " 0.4s cubic-bezier(0.38,0.7,0.6,0.29);"], addAnimation);
const RemoveAnimation = Object(external_styled_components_["css"])(["animation:", " 0.55s cubic-bezier(0.38,0.7,0.6,0.29);"], removeAnimation);
const FavoriteWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "Favoritestyle__FavoriteWrapper",
  componentId: "ajvf5h-0"
})(["display:inline-block;cursor:pointer;border:0;padding:10px;background-color:transparent;&:hover,&:focus{border:0;box-shadow:none;outline:none;}svg{width:22px;height:20px;", " path{fill:", ";stroke:", ";stroke-width:2px;transition:fill 1s ease;}}&.active{svg{", ";path{fill:", ";}}}"], RemoveAnimation, Object(theme_get_["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), AddAnimation, Object(theme_get_["themeGet"])('color.4', '#FC5C63'));
/* harmony default export */ var Favorite_style = (FavoriteWrapper);
// CONCATENATED MODULE: ./components/UI/Favorite/Favorite.js
var __jsx = external_react_default.a.createElement;




const Favorite = ({
  className,
  content,
  onClick
}) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = Favorite_useToggle(false); // Add all classs to an array

  const addAllClass = ['favorite']; // className prop checking

  if (className) {
    addAllClass.push(className);
  }

  const handelClick = event => {
    toggleHandler();
    onClick(!toggleValue);
  };

  return __jsx(Favorite_style, {
    onClick: handelClick,
    className: `${addAllClass.join(' ')} ${toggleValue ? 'active' : ''}`
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.64 18.232"
  }, __jsx("path", {
    d: "M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",
    transform: "translate(-47 -55)"
  })), __jsx("span", null, content));
};

Favorite.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ var Favorite_Favorite = __webpack_exports__["a"] = (Favorite);

/***/ }),

/***/ "Fq9I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XwqE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "t69qtu-0"
})(_Base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Text'));

const Text = _ref => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

Text.defaultProps = {
  as: 'p',
  m: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ "Im9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABbCAYAAADdsbM1AAAKPklEQVR42u2dC3BU1RmATzaJ5IF5EEJimmp0Rkkd7FBbph07bWmZopRpQS1WxGm1AZpIiyCBQkzC7t7NPqISgUKUh6hUHFvkEUjwgUUQIQQxJIBCDBAe9iEPReUREnL6n7vnbu6ePffuZu/dx437z/yTnZB7zznf/V/ncReEYhKTmMQkJqGSOI0aA0XV5Ee/cSD5kObMuR5ZnQ8gwVWNbM5VoJuR4GyCn8eRzXUFPl+Enx3i7wRXPXx+Ef7NgSyO3yGzeaAKzH4HzAQDHoKsjskUUifAwEEqgHVtQoK9CM2zZylANDQwt5tZHSMA1Dug1zTAUtJuuO/byGz7kYJbG9HCqr4L1lUXAlgKCm2Z7bcbyQIZYI5bkOD4OwymJ3zQqBKrFpyrkSDcHM3W5+uWJHgLzsuBDDKnZjGetGETfnp3E37lwCG8reMEPnz2HP6qs1PUtnPn8bsnTuI1Bz/CT+3egx+Gv81esChQgJeRxXYvx32jzcrMJrAys78B/WL1qyKElv99hoORHlByLbnHyNVrAgAIfYqy2NcLrbQ0FeLLBrUBDHt+Jd558jTWW8g9yb39xL4NaObM5GiwPLml5UHnDih1On/hUvxSywHRUkIl13p68IvQBnF9Fdf9EPqaGyl4cb6W5mpR6uzda/6BL1zpxOES0hZpU8X6msU+R8Bt5YkgHir/zbwOxoFWbn8vpFamZn1PbtuhYnmujWLfw2h5LDSB17G06hr8xtFjONKyqa0dp7oWKCUMa7iyLVNy2CbwOkQ6euCzMzhahGTfgUrwSNkUYnjeca2sLAca/pLtiAn0rWPHcbQJsX4TP1lcQLPMg0MZ7xgXdTzPe4ILGvfiaJXqXXv4Vmd11IYq3nlDM1cN402jHlpfh6NdyKyDu0BgNheGwmW9wdmc29nG855dgq90d0c9uMtdXfw6T3DU6211jLXZf8Uz9xf2t2KjyIrmFoVEUTVKT3je4ATHFrbB259bEVStVrNnLy5ueNOji5o+8HuNecdOr2uCeWCkxhu6dDkn1jkb9ALnDW3GjAzeiu2W9uDqtZ/DRF9+n9GvvOb3mu/UrvC6hqyqBFvfcTJsJ3rssYF6wPMGZ3FMYhu7cdHSoF0mkuCIFCyu5dV1E/UCZ6I3SgBTXss2NOedbYYFV7r1Xzyre00cqzc8DdY2YUIy3PgS29Du058aFhxZiuIkiUviWDVYHZNNhfvYRnJr/qZpAh9pcKTvWc8s9IVXafu1VnC9bmqBCTHTQAlkNWxgcESmbN7Ci3PWYN01zhecfRnbwHKoh4wObtmH+zng7M9xwMUFB87quyRe1/aJruDugKXv1a0HVZXMUPQEt+FIG6+eW6cXuETINrvZBvZ8+m9dwQWjWsGR5MbJrO+LYw4SnDThTXCDcx1jG+j44oLhwR39/HPe6nAbBZfATPz7mBjITWyuq2wDV69dMzw4sm/LXaPrBRevFdzXbANfX71q+BinAO4r/cAJrna2AWLmRs+qn5w/zwPXriM4xy62gfdPnTY8uPdOnuKtze3UD5zV4VOOrDt8xPDg/vnRYV458rp+4EhRyDRQu6/Z8OAW793H24NYoiO4Kp8p12SYrhgd3GTelMtsr9QPXKXlXrYBctTK6OC4k/xyYbxWcL0F8OjRqbzV333/+a9hwTXBzIe7CkzGqqEA9p5yIXQd+H4D25AF9gCMCo6ca+HEt83iWDVMuVh3vQ4OJv+ZbWjEypcMC+57y1dx1uKEEgouQT9wxTMKeNMeLavAkZJG3uSe6NSpN2gBx08QCA2A4tDnHBx5ckaT4TxrE5wfiGMMMjGox7lKyxTek3oZ5pFGkVUtrXxrK7cUaYlv6u4qWp2z2ahHIC7CwgT3xLrg3E+tTZObqrvrX5/8Ke+J/aGuPurB3b92Pd/aZs/7iczaNG0PKrsrgWd1rud1gByfj1Zx7WpUOjOyVmZtiUj3nXy51U174jbe4iY5vNfQfjTqoJHDjnFKL9L9afqtKklB0/kRE9fqKqxTeU+QHBs9dOZs1EAjx2oVzwGTMfCtzYR0Pa0ktzqEkqAoXqh0ePpteMqRFtIHxfO/5qoF4hhCYG3+M2x+fjJMU+p5HYuvqg7o6Fao5JnGJv65X/fUqh4VFCTpmUn7YnVueGPHZkI6b1XaUHm0rgF3adzY6Yt0Qlk0iX9kVSo9WtH48RmMi4YEnD94SeiR4gLo0EGlzhbWLte8YhyIvP7xEXzb0mVq0JpRUdFN1EVDDs33HQdevBs1KgtZ7QfVtvN++MLLIXkJjryW+QNYcFDdTrTaN6GRIzNU4lrI33UwceId6UwKys4eCCuoh/zth5JVDnK2bseJU7i7p+9nnsg12wHW7K3bfFZM+InA/qbYvwhAU3LZeE+sc3eMHAVNhzT/LrhFQJvKmU8/iyfCUX9SPMtf9CX7tl/CvueRc+fE30kv+j64biNOf6om0Bd9MZov1NN+pchcNEHW/7C8zxWnMqNI8oBDaBCaW7EE3AOH/bXy3syJ0bwKF+2PBE4NWthehIvzWl7vtbrrQTNBB6MZpU9AvdQDU7QwAnOSGq0bPV46nfYjDTSVY20Re1taalAe65IpuAwRHEK5qPgvJbCy2gWDwYG6b5BfYIDFNiqFi6io5CFoO1sGLkUW28L6umUg8BLpU02l7kG+RGUIaB7645RHxAGRgZltZGLtdiUtIMm1RMm9zFQrrWfQxIfvER+Y+8Fl0geZzFhbFL2Tr2x1ZDn622jCg7+B87VfoPkATq5kwBa7WwlMOVAJjvR76e+Isvcpt3agMWN+DG19CzRHjLPebprIQIv4t0GwiWIA7awU64Z44I27/26wvDM+g5a0UlBXpevKLa1o+Ijh0Ea+zNoyaFKQW1tUfoWGiXHZFPrEMz0uS+D9cszPwKWOe9yLqBIQJZVfW2ZuRHl5hRTaDTS2ZchcdEA0uWgg8CTLS6Nuk+2Bd+ed30cVlo+9AASj8yrqUVrarTJo8rgWdQkh0HjHwsuk8HJFeIWFd4D7NXvFrb7o7LKVcJ+bOO5pKGj+LE+aVWTSAeaIA87LGwquttUn8Kup1dGDHp9lgetvlCWCLCamGQqaP3jJsplFFh1wHkpKKkBl8zd6Mqeq2jvR1GklosW6XXOILHvKE4HhoPUF3iBZxs1Hc8vX+IF2Cf3+0d9SK8tlCtxUTq1mOGj+dslYeFLcy0ez5lZ7aje5Wu1noQ4cK4M2uA/TKUOK0rJ7Mifj5opgZs6Z7fVlCRZ7Bxo37i6akXOYzNkvofmDl8Rk3MGeuDd9VjFYWhdA24/uGjlMFs+ymMypBK3fiD940hQti1pfDpo8bRwaOvRmCiybWmY6p9xI6E9W1ld40nJUOrW+LJkOolDTOOVGv4emtMmdwGRcyfrSKMR0GbBUI9dooZ5lSNaXQkGl0s/JzM7UNxKaP9eV9jDkGpatPCPDk287JspghXVHymjw2K3HeGZTJQYsAICx/4pAR4AxiUlMYhKTmMSkX8r/AflgWAYBn1IIAAAAAElFTkSuQmCC");

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "L3BB":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "LdIe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return priceInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calenderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPropertyType; });
// default data for filter elements
const priceInit = {
  0: '$0',
  100: '$100'
};
const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};
const getAmenities = {
  id: 1,
  name: 'Amenities',
  identifier: 'amenities',
  options: [{
    label: 'Free Wi-Fi',
    value: 'free-wifi'
  }, {
    label: 'Free Parking',
    value: 'free-parking'
  }, {
    label: 'Breakfast included',
    value: 'breakfast'
  }, {
    label: 'Pool',
    value: 'pool'
  }, {
    label: 'Air Conditioning',
    value: 'air-condition'
  }, {
    label: 'Hot Shower',
    value: 'hot-shower'
  }, {
    label: 'Cable TV',
    value: 'cable-tv'
  }]
};
const getPropertyType = {
  id: 2,
  name: 'Property Type',
  identifier: 'property-type',
  options: [{
    label: 'Villa',
    value: 'villa'
  }, {
    label: 'Hotel',
    value: 'hotel'
  }, {
    label: 'Resort',
    value: 'resort'
  }, {
    label: 'Cottage',
    value: 'cottage'
  }, {
    label: 'Duplex',
    value: 'duplex'
  }, {
    label: 'Landscape',
    value: 'landscape'
  }]
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QTgS":
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerClusterer");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SEwy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/PlusOutlined"
var PlusOutlined_ = __webpack_require__("L3BB");
var PlusOutlined_default = /*#__PURE__*/__webpack_require__.n(PlusOutlined_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/MinusOutlined"
var MinusOutlined_ = __webpack_require__("BL1r");
var MinusOutlined_default = /*#__PURE__*/__webpack_require__.n(MinusOutlined_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/UI/InputIncDec/InputIncDec.style.js

const InputIncDecWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "InputIncDecstyle__InputIncDecWrapper",
  componentId: "sc-1x9dp7a-0"
})(["width:104px;height:18px;display:flex;align-items:center;position:relative;overflow:hidden;input[type='number']{width:calc(100% - 54px);position:absolute;left:27px;top:0;height:100%;padding:0;border:0;text-align:center;background-color:transparent;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&:focus{outline:none;box-shadow:none;}}button{border:0;width:27px;height:27px;border-radius:50%;display:inline-flex;align-items:center;position:absolute;top:0;padding:0;background-color:transparent;cursor:pointer;justify-content:center;&.decBtn{left:0;}&.incBtn{right:0;}&:hover,&:focus{outline:0;}}"]);
/* harmony default export */ var InputIncDec_style = (InputIncDecWrapper);
// CONCATENATED MODULE: ./components/UI/InputIncDec/InputIncDec.js



var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputIncDec = _ref => {
  let {
    className,
    increment,
    decrement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "increment", "decrement"]);

  const addAllClasses = ['quantity'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(InputIncDec_style, {
    className: addAllClasses.join(' ')
  }, __jsx("button", {
    className: "btn decBtn",
    type: "button",
    onClick: decrement
  }, __jsx(MinusOutlined_default.a, null)), __jsx(input_default.a, _extends({
    className: "qnt-input",
    type: "number"
  }, props)), __jsx("button", {
    className: "btn incBtn",
    type: "button",
    onClick: increment
  }, __jsx(PlusOutlined_default.a, null)));
};

/* harmony default export */ var InputIncDec_InputIncDec = __webpack_exports__["a"] = (InputIncDec);

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XwqE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This is our base component every components must be extend it. */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YG1B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SectionGrid; });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/UI/Text/Text.js
var Text = __webpack_require__("Fq9I");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./components/UI/Base.js
var Base = __webpack_require__("XwqE");

// CONCATENATED MODULE: ./components/UI/Box/Box.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BoxWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-1w2buan-0"
})(Base["a" /* base */], Object(Base["b" /* themed */])('Box'), props => props.flexBox && Object(external_styled_components_["css"])({
  display: 'flex'
}, external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], Object(Base["b" /* themed */])('FlexBox')));

const Box = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ var Box_Box = (Box);
Box.defaultProps = {
  as: 'div'
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./components/UI/Rating/Rating.js
var Rating = __webpack_require__("y4c0");

// EXTERNAL MODULE: ./components/UI/Favorite/Favorite.js + 2 modules
var Favorite = __webpack_require__("EupD");

// EXTERNAL MODULE: ./components/GridCard/GridCard.js + 1 modules
var GridCard = __webpack_require__("vidl");

// CONCATENATED MODULE: ./components/ProductCard/ProductCard.js
var ProductCard_jsx = external_react_default.a.createElement;







const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
function ProductCard({
  title,
  rating,
  location,
  price,
  ratingCount,
  gallery,
  slug,
  link,
  deviceType
}) {
  return ProductCard_jsx(GridCard["a" /* default */], {
    favorite: ProductCard_jsx(Favorite["a" /* default */], {
      onClick: event => {
        console.log(event);
      }
    }),
    location: location.formattedAddress,
    title: title,
    price: `$${price}/Night - Free Cancellation`,
    rating: ProductCard_jsx(Rating["a" /* default */], {
      rating: rating,
      ratingCount: ratingCount,
      type: "bulk"
    }),
    viewDetailsBtn: ProductCard_jsx(link_default.a, {
      href: `${link}/[slug]`,
      as: `${link}/${slug}`,
      prefetch: false
    }, ProductCard_jsx("a", null, ProductCard_jsx(fi_["FiExternalLink"], null), " View Details"))
  }, ProductCard_jsx(external_react_multi_carousel_default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: responsive,
    deviceType: deviceType,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1
  }, gallery.map(({
    url,
    title
  }, index) => ProductCard_jsx("img", {
    src: url,
    alt: title,
    key: index,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative'
    }
  }))));
}
// CONCATENATED MODULE: ./components/SectionGrid/SectionGrid.js

var SectionGrid_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle
}) => {
  return !!showButton && SectionGrid_jsx(Box_Box, _extends({
    className: "loadmore_wrapper"
  }, loadMoreStyle), loadMoreComponent ? loadMoreComponent : SectionGrid_jsx(button_default.a, {
    loading: loading,
    onClick: handleLoadMore
  }, buttonText || 'Load More'));
};

function SectionGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);
  let showButton = data.length < totalItem;
  return SectionGrid_jsx(external_react_default.a.Fragment, null, SectionGrid_jsx(Box_Box, _extends({
    className: "grid_wrapper"
  }, rowStyle), data && data.length ? data.map(item => {
    return SectionGrid_jsx(Box_Box, _extends({
      className: "grid_column",
      width: columnWidth,
      key: item.id
    }, columnStyle), SectionGrid_jsx(ProductCard, _extends({
      link: link
    }, item)));
  }) : null, loading && limits.map((item, i) => SectionGrid_jsx(Box_Box, _extends({
    className: "grid_column",
    width: columnWidth,
    key: i
  }, columnStyle), placeholder ? placeholder : SectionGrid_jsx(Text["a" /* default */], {
    content: "Loading ..."
  })))), showButton && SectionGrid_jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    loading: loading,
    buttonText: buttonText,
    loadMoreComponent: loadMoreComponent,
    loadMoreStyle: loadMoreStyle
  }), paginationComponent && SectionGrid_jsx(Box_Box, {
    className: "pagination_wrapper"
  }, paginationComponent));
}
SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px']
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px']
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem'
  }
};

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZFcg":
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g9v/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-dates/initialize"
var initialize_ = __webpack_require__("hgiS");

// EXTERNAL MODULE: external "react-dates"
var external_react_dates_ = __webpack_require__("4GXx");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./library/helpers/rtl.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction
  }));
};

/* harmony default export */ var rtl = (withDirection);

// CONCATENATED MODULE: ./components/UI/DatePicker/ReactDates.style.js


const ReactDatesStyleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ReactDatesstyle__ReactDatesStyleWrapper",
  componentId: "kysuqv-0"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:40px;.ant-form-item{display:flex;align-items:center;margin-right:30px;margin-bottom:0;margin-left:0;&:last-child{margin-right:0;}.ant-form-item-label{label{font-size:13px;}}}"]);

const ReactDateWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "ReactDatesstyle__ReactDateWrapper",
  componentId: "kysuqv-1"
})([".isoReactDate{height:100vh;.DateInput__display-text--focused{color:#fff;font-weight:400;}.CalendarDay--selected-start,.CalendarDay--selected-end,.CalendarDay--selected{color:#fff;}.CalendarDay--selected-span{color:#fff;}.CalendarDay--hovered-span,.CalendarDay--after-hovered-start{color:#fff;}.DayPickerKeyboardShortcuts__show--bottom-right{border-top:26px solid transparent;bottom:0;right:0;}.DayPicker--horizontal{.DayPickerNavigation--horizontal{.DayPickerNavigation__prev,.DayPickerNavigation__next{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}.DateRangePickerInput{.DateRangePickerInput__arrow{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}"], props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit');

const ReactDatesWrapper = rtl(ReactDateWrapper);

// CONCATENATED MODULE: ./components/UI/DatePicker/ReactDates.js
var ReactDates_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
 * For Localization enable this code [example : French language as "fr"]
 */
// import moment from 'moment';
// import 'moment/locale/fr';

class ReactDates_DateRangePickerBox extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDateChangeFunc", ({
      startDate,
      endDate
    }) => {
      const {
        dateFormat
      } = this.state;
      this.setState({
        startDate,
        endDate
      });

      if (startDate !== null && endDate !== null) {
        this.props.updateSearchData({
          setStartDate: startDate.format(dateFormat),
          setEndDate: endDate.format(dateFormat)
        });
      }
    });

    _defineProperty(this, "onFocusChangeFunc", focusedInput => {
      return this.setState({
        focusedInput
      });
    });

    const separator = this.props.item && this.props.item.separator ? this.props.item.separator : '/';

    const _dateFormat = this.props.item && this.props.item.format ? this.props.item.format : 'llll';

    this.state = {
      focusedInput: null,
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
      dateFormat: _dateFormat,
      separator
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
    /*
     * For Localization enable this code [example : French language as "fr"]
     */
    // moment.locale('fr');
  }

  render() {
    const {
      focusedInput,
      startDate,
      endDate
    } = this.state; // DateRangePickerBox props list

    const {
      className,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      block,
      numberOfMonths,
      regular,
      noBorder
    } = this.props; // Add all classs to an array **************

    const addAllClasses = ['date_picker']; // className prop checking **************

    if (className) {
      addAllClasses.push(className);
    } // React-Dates DateRangePicker Props List


    const defaultCalenderProps = {
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates: showClearDates ? showClearDates : false,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      numberOfMonths: numberOfMonths ? numberOfMonths : 2,
      block,
      regular,
      noBorder
    };
    return ReactDates_jsx(ReactDatesStyleWrapper, {
      className: addAllClasses.join(' ')
    }, ReactDates_jsx(external_react_dates_["DateRangePicker"], defaultCalenderProps));
  }

}

/* harmony default export */ var ReactDates = __webpack_exports__["a"] = (ReactDates_DateRangePickerBox);

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hgiS":
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "j1/2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-google-maps/lib/components/addons/MarkerClusterer"
var MarkerClusterer_ = __webpack_require__("QTgS");
var MarkerClusterer_default = /*#__PURE__*/__webpack_require__.n(MarkerClusterer_);

// EXTERNAL MODULE: ./components/Map/MapWrapper.js
var MapWrapper = __webpack_require__("E+Jn");

// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// EXTERNAL MODULE: ./components/UI/Rating/Rating.js
var Rating = __webpack_require__("y4c0");

// EXTERNAL MODULE: ./components/GridCard/GridCard.js + 1 modules
var GridCard = __webpack_require__("vidl");

// CONCATENATED MODULE: ./components/Map/MapInfoWindow.js
var __jsx = external_react_default.a.createElement;





const MapInfoWindow = ({
  data,
  onCloseClick
}) => {
  return __jsx(external_react_google_maps_["InfoWindow"], {
    id: data === null || data === void 0 ? void 0 : data.id,
    onCloseClick: onCloseClick
  }, __jsx(GridCard["a" /* default */], {
    className: "info_window_card",
    location: data === null || data === void 0 ? void 0 : data.formattedAddress,
    title: data === null || data === void 0 ? void 0 : data.title,
    price: `$${data === null || data === void 0 ? void 0 : data.price}/Night - Free Cancellation`,
    rating: __jsx(Rating["a" /* default */], {
      rating: data === null || data === void 0 ? void 0 : data.rating,
      ratingCount: data === null || data === void 0 ? void 0 : data.ratingCount,
      type: "bulk"
    })
  }, __jsx("img", {
    src: data === null || data === void 0 ? void 0 : data.thumbUrl,
    alt: data === null || data === void 0 ? void 0 : data.title
  })));
};

/* harmony default export */ var Map_MapInfoWindow = (MapInfoWindow);
// EXTERNAL MODULE: ./components/Map/hotelMapMarker.png
var hotelMapMarker = __webpack_require__("Im9u");

// CONCATENATED MODULE: ./components/Map/ListingPageMap.js
var ListingPageMap_jsx = external_react_default.a.createElement;





const HotelMapMarkerCluster = ({
  location
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(external_react_["useState"])(0);
  let hotelData = [];

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location && location.forEach(item => {
    hotelData.push({
      id: item.id,
      lat: parseFloat(item.location.lat),
      lng: parseFloat(item.location.lng),
      title: item.title,
      thumbUrl: item.image.thumb_url,
      formattedAddress: item.location.formattedAddress,
      price: item.price,
      rating: item.rating,
      ratingCount: item.ratingCount
    });
  });
  return hotelData.map((singlePostLoaction, index) => {
    return ListingPageMap_jsx(external_react_google_maps_["Marker"], {
      key: index,
      icon: hotelMapMarker["a" /* default */],
      position: singlePostLoaction,
      onClick: () => infoWindowToggle(singlePostLoaction.id)
    }, isOpen && markerIndex === singlePostLoaction.id ? ListingPageMap_jsx(Map_MapInfoWindow, {
      data: singlePostLoaction,
      onCloseClick: () => infoWindowToggle(singlePostLoaction.id)
    }) : '');
  });
};

/* harmony default export */ var ListingPageMap = (HotelMapMarkerCluster);
// CONCATENATED MODULE: ./components/Map/SinglePageMap.js
var SinglePageMap_jsx = external_react_default.a.createElement;





const SingleMapDisplay = ({
  location
}) => {
  let hotelData = [];
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(external_react_["useState"])(0);

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  hotelData.push({
    lat: location === null || location === void 0 ? void 0 : location.location.lat,
    lng: location === null || location === void 0 ? void 0 : location.location.lng,
    id: location === null || location === void 0 ? void 0 : location.id,
    title: location === null || location === void 0 ? void 0 : location.title,
    thumbUrl: location === null || location === void 0 ? void 0 : location.image.thumb_url,
    formattedAddress: location === null || location === void 0 ? void 0 : location.location.formattedAddress,
    price: location === null || location === void 0 ? void 0 : location.price,
    rating: location === null || location === void 0 ? void 0 : location.rating,
    ratingCount: location === null || location === void 0 ? void 0 : location.ratingCount
  });
  return hotelData.map((singlePostLoaction, index) => {
    return SinglePageMap_jsx(external_react_google_maps_["Marker"], {
      key: index,
      icon: hotelMapMarker["a" /* default */],
      position: singlePostLoaction,
      onClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      }
    }, isOpen && markerIndex === singlePostLoaction.id ? SinglePageMap_jsx(Map_MapInfoWindow, {
      data: singlePostLoaction,
      onCloseClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      }
    }) : '');
  });
};

const HotelMapMarkerSingle = props => {
  return SinglePageMap_jsx(SingleMapDisplay, props);
};

/* harmony default export */ var SinglePageMap = (HotelMapMarkerSingle);
// CONCATENATED MODULE: ./components/Map/Map.js
var Map_jsx = external_react_default.a.createElement;






const Map = props => {
  const {
    multiple,
    location
  } = props;

  const handleClustererClick = data => {
    const markerClusterer = data.getMarkers();
    console.log(`Current clicked markers length: ${markerClusterer.length}`);
    console.log(markerClusterer);
  };

  return Map_jsx(external_react_default.a.Fragment, null, multiple && multiple === true ? Map_jsx(MapWrapper["a" /* default */], {
    containerElement: Map_jsx("div", {
      style: {
        height: '400px'
      }
    }),
    mapElement: Map_jsx("div", {
      style: {
        height: '100%'
      }
    }),
    defaultZoom: 7,
    defaultCenter: {
      lat: 41.8858,
      lng: -75.7223
    }
  }, Map_jsx(MarkerClusterer_default.a, {
    gridSize: 60,
    averageCenter: true,
    defaultEnableRetinaIcons: true,
    onClick: handleClustererClick
  }, Map_jsx(ListingPageMap, {
    location: location
  }))) : Map_jsx(MapWrapper["a" /* default */], {
    containerElement: Map_jsx("div", {
      style: {
        height: '400px'
      }
    }),
    mapElement: Map_jsx("div", {
      style: {
        height: '100%'
      }
    }),
    defaultZoom: 8,
    defaultCenter: {
      lat: 40.706877,
      lng: -74.011265
    }
  }, Map_jsx(SinglePageMap, {
    location: location
  })));
};

/* harmony default export */ var Map_Map = __webpack_exports__["a"] = (Map);

/***/ }),

/***/ "jV9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setStateToUrl; });
/* unused harmony export setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (urlData[key] && urlData[key] !== null && urlData[key] !== '' && urlData[key] !== ',' && urlData[key] !== undefined && urlData[key].length !== 0) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  }); // return search;

  return search.substring(0, search.length - 1);
}
function setStateToUrl(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}
function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}

/***/ }),

/***/ "jorE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE */
/* unused harmony export HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE */
/* unused harmony export HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LISTING_PAGE_POST_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LISTING_PAGE_COLUMN_WIDTH_WITH_MAP; });
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE = 5;
const HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_POST_LIMIT = 10;
const LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_COLUMN_WIDTH_WITH_MAP = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];

/***/ }),

/***/ "k8oj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProcessAPIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SearchedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchStateKeyCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paginator; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rWQ8");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__);



const FetchAPIData = url => {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(r => r.json()).then(data => {
    return data;
  });
};

const ProcessAPIData = apiData => {
  let fetchData = {};

  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }

  const data = fetchData ? fetchData.data : [];
  return data;
};
const SearchedData = processedData => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(processedData.slice(0, randNumber));
  return data;
};
const SearchStateKeyCheck = state => {
  for (var key in state) {
    if (state[key] !== null && state[key] != '' && state[key] != [] && state[key] != 0 && state[key] != 100) {
      return true;
    }
  }

  return false;
};
const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

const GetAPIData = async apiUrl => {
  const promises = apiUrl.map(async repo => {
    const apiPath = `/static/data`; // read it from env variable

    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await FetchAPIData(api);
    return {
      name: repo.name,
      data: response
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

/* harmony default export */ __webpack_exports__["e"] = (GetAPIData);

/***/ }),

/***/ "l0iN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, query);
  return __jsx(SearchContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oiat":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ListingPage; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/UI/Toolbar/Toolbar.style.js

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Toolbarstyle__Wrapper",
  componentId: "anmfwz-0"
})(["display:flex;align-items:center;min-height:70px;background:", ";"], props => props.bg ? props.bg : '#fff');
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Toolbarstyle__Container",
  componentId: "anmfwz-1"
})(["max-width:1920px;width:100%;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:space-between;"]);
const LeftSide = external_styled_components_default.a.div.withConfig({
  displayName: "Toolbarstyle__LeftSide",
  componentId: "anmfwz-2"
})([""]);
const RightSide = external_styled_components_default.a.div.withConfig({
  displayName: "Toolbarstyle__RightSide",
  componentId: "anmfwz-3"
})([""]);
/* harmony default export */ var Toolbar_style = (Wrapper);
// CONCATENATED MODULE: ./components/UI/Toolbar/Toolbar.js
var __jsx = external_react_default.a.createElement;


function Toolbar({
  left,
  right,
  className,
  children
}) {
  const addAllClasses = ['toolbar'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Toolbar_style, {
    className: addAllClasses.join(' ')
  }, __jsx(Container, null, left && __jsx(LeftSide, {
    className: "toolbar_left__side"
  }, left), right && __jsx(RightSide, {
    className: "toolbar_right__side"
  }, right), children && children));
}
// EXTERNAL MODULE: external "antd/lib/slider"
var slider_ = __webpack_require__("7YAK");
var slider_default = /*#__PURE__*/__webpack_require__.n(slider_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__("ZFcg");

// EXTERNAL MODULE: ./components/UI/ViewWithPopup/ViewWithPopup.js + 3 modules
var ViewWithPopup = __webpack_require__("xjfH");

// EXTERNAL MODULE: ./components/UI/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("SEwy");

// EXTERNAL MODULE: ./components/UI/DatePicker/ReactDates.js + 2 modules
var ReactDates = __webpack_require__("g9v/");

// EXTERNAL MODULE: ./context/SearchProvider.js
var SearchProvider = __webpack_require__("l0iN");

// EXTERNAL MODULE: ./library/helpers/url_handler.js
var url_handler = __webpack_require__("jV9y");

// EXTERNAL MODULE: ./container/Listing/Search/SearchParams.js
var SearchParams = __webpack_require__("LdIe");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./container/Listing/Search/CategorySearch/CategorySearch.style.js


const CategroySearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CategorySearchstyle__CategroySearchWrapper",
  componentId: "sc-13yll7z-0"
})(["display:flex;align-items:center;.view_with__popup{margin-right:15px;&:last-child{margin-right:0;}.popup_handler{button,button.ant-btn{height:38px;font-size:15px;border-radius:3px;color:", ";border:1px solid ", ";&:hover{background-color:", ";}&::after{content:none;}}}&.active{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";}& + .popup_container{margin-top:15px;border:1px solid ", ";}}&::after{content:'';display:block;position:fixed;left:0;top:70px;background-color:rgba(255,255,255,0.9);width:100%;min-height:100vh;pointer-events:none;}}&.activated{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";&:hover{opacity:0.85;}}}}.popup_container{#popup{> div{> button,> .ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{color:", ";border-color:", ";}}}}}}.date_picker{.DateRangePicker{display:block;width:100%;.DateRangePickerInput{width:100%;border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const RoomGuestWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CategorySearchstyle__RoomGuestWrapper",
  componentId: "sc-13yll7z-1"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CategorySearchstyle__ItemWrapper",
  componentId: "sc-13yll7z-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const ActionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CategorySearchstyle__ActionWrapper",
  componentId: "sc-13yll7z-3"
})(["overflow:hidden;margin-top:27px;.ant-btn{border:0;padding:0;height:auto;box-shadow:none;font-weight:600;border-radius:0;text-shadow:none;color:", ";border-bottom:1px solid transparent;&:hover{color:", ";border-bottom-color:", ";}&:focus{outline:none;}&.ant-btn-primary{float:right;border-color:transparent;background-color:transparent;color:", ";&:hover{color:", ";border-bottom-color:", ";}}&::after{display:none;}&:not([disabled]):hover{text-decoration:underline;}}"], Object(theme_get_["themeGet"])('text.2', '#777777'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ var CategorySearch_style = (CategroySearchWrapper);
// CONCATENATED MODULE: ./container/Listing/Search/CategorySearch/CategorySearch.js



var CategorySearch_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const CategorySearch_history = false ? undefined : false;
const CategorySearch_location =  false && false;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return _objectSpread(_objectSpread({}, state), {}, {
        amenities: action.payload
      });

    case 'property':
      return _objectSpread(_objectSpread({}, state), {}, {
        property: action.payload
      });

    case 'date_range':
      return _objectSpread(_objectSpread({}, state), {}, {
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate
      });

    case 'price':
      return _objectSpread(_objectSpread({}, state), {}, {
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice
      });

    case 'roomGuestReset':
      return _objectSpread(_objectSpread({}, state), {}, {
        room: action.payload.room,
        guest: action.payload.guest
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const CategorySearchNext = props => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(SearchProvider["a" /* SearchContext */]);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0
  }; // current component state with dispatching to reducer

  const {
    0: current,
    1: dispatchCurrent
  } = Object(external_react_["useReducer"])(serchReducer, initialState); // Room guest state

  const {
    0: countRoom,
    1: setRoom
  } = Object(external_react_["useState"])(current.room);
  const {
    0: countGuest,
    1: setGuest
  } = Object(external_react_["useState"])(current.guest); // data handling

  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;

          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    } else if (type === 'price') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 100
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 100,
        location_lat: null,
        location_lng: null
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else {
      query = _objectSpread(_objectSpread({}, current), {}, {
        [type]: value
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    }

    const params = Object(url_handler["a" /* setStateToUrl */])(query);
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, current), query)
    });
    CategorySearch_history.push(_objectSpread(_objectSpread({}, CategorySearch_location), {}, {
      search: params
    }));
  };

  const handleRoomGuestApply = () => {
    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: countRoom,
      guest: countGuest
    });

    const params = Object(url_handler["a" /* setStateToUrl */])(query);
    CategorySearch_history.push(_objectSpread(_objectSpread({}, CategorySearch_location), {}, {
      search: params
    }));
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);

    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: 0,
      guest: 0
    });

    dispatchCurrent({
      type: 'roomGuestReset',
      payload: query
    });
    const params = Object(url_handler["a" /* setStateToUrl */])(query);
    CategorySearch_history.push(_objectSpread(_objectSpread({}, CategorySearch_location), {}, {
      search: params
    }));
  };

  const dateRangeActivateClass = current && current.setStartDate !== undefined && current.setEndDate !== undefined && current.setStartDate !== null && current.setEndDate !== null ? 'activated' : '';
  const priceRangeActivateClass = current && current.minPrice !== undefined && current.maxPrice !== undefined && current.minPrice === 0 && current.maxPrice === 100 ? '' : 'activated';
  let amenitiesLength = 0;
  let propertyLength = 0;
  let amenities = [];
  let property = [];

  if (current && current.amenities && typeof current.amenities === 'string') {
    amenities = current.amenities.split(',');
    amenitiesLength = amenities.length;
  } else if (current && current.amenities && current.amenities.length) {
    amenities = current.amenities;
    amenitiesLength = amenities.length;
  }

  if (current && current.property && typeof current.property === 'string') {
    property = current.property.split(',');
    propertyLength = property.length;
  } else if (current && current.property && current.property.length) {
    property = current.property;
    propertyLength = current.property.length;
  }

  return CategorySearch_jsx(CategorySearch_style, null, CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    className: amenitiesLength ? 'activated' : '',
    key: SearchParams["b" /* getAmenities */].id,
    noView: true,
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, SearchParams["b" /* getAmenities */].name, amenitiesLength > 0 && `: ${amenitiesLength}`),
    popup: CategorySearch_jsx(checkbox_default.a.Group, {
      options: SearchParams["b" /* getAmenities */].options,
      defaultValue: amenities,
      onChange: value => onChange(value, 'amenities')
    })
  }), CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    className: propertyLength ? 'activated' : '',
    key: SearchParams["c" /* getPropertyType */].id,
    noView: true,
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, SearchParams["c" /* getPropertyType */].name, propertyLength > 0 && `: ${propertyLength}`),
    popup: CategorySearch_jsx(checkbox_default.a.Group, {
      options: SearchParams["c" /* getPropertyType */].options,
      defaultValue: property,
      onChange: value => onChange(value, 'property')
    })
  }), CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    className: dateRangeActivateClass,
    key: 400,
    noView: true,
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, "Choose Date"),
    popup: CategorySearch_jsx(ReactDates["a" /* default */], {
      startDateId: "startDate-id-category",
      endDateId: "endDate-id-category",
      startDate: current.setStartDate ? external_moment_default()(current.setStartDate) : null,
      endDate: current.setEndDate ? external_moment_default()(current.setEndDate) : null,
      numberOfMonths: 1,
      small: true,
      item: SearchParams["a" /* calenderItem */],
      updateSearchData: value => onChange(value, 'date_range')
    })
  }), CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    className: priceRangeActivateClass,
    key: 300,
    noView: true,
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, current.minPrice > 0 || current.maxPrice < 100 ? `Price Range: ${current.minPrice}, ${current.maxPrice}` : `Price per night`),
    popup: CategorySearch_jsx(slider_default.a, {
      range: true,
      marks: SearchParams["d" /* priceInit */],
      min: 0,
      max: 100,
      defaultValue: [current.minPrice, current.maxPrice],
      onAfterChange: value => onChange(value, 'price')
    })
  }), CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    key: 200,
    noView: true,
    className: countRoom || countGuest ? 'activated' : '',
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, "Room ", countRoom > 0 && `: ${countRoom}`, ", Guest", countGuest > 0 && `: ${countGuest}`),
    popup: CategorySearch_jsx(RoomGuestWrapper, null, CategorySearch_jsx(ItemWrapper, null, CategorySearch_jsx("strong", null, "Room"), CategorySearch_jsx(InputIncDec["a" /* default */], {
      id: "room",
      increment: () => setRoom(countRoom => countRoom + 1),
      decrement: () => setRoom(countRoom => countRoom > 0 && countRoom - 1),
      onChange: e => setRoom(e.target.value),
      value: countRoom
    })), CategorySearch_jsx(ItemWrapper, null, CategorySearch_jsx("strong", null, "Guest"), CategorySearch_jsx(InputIncDec["a" /* default */], {
      id: "guest",
      increment: () => setGuest(countGuest => countGuest + 1),
      decrement: () => setGuest(countGuest => countGuest > 0 && countGuest - 1),
      onChange: e => setGuest(e.target.value),
      value: countGuest
    })), CategorySearch_jsx(ActionWrapper, null, countRoom || countGuest ? CategorySearch_jsx(button_default.a, {
      type: "default",
      onClick: handleRoomGuestCancel
    }, "Cancel") : '', CategorySearch_jsx(button_default.a, {
      type: "primary",
      onClick: handleRoomGuestApply
    }, "Apply")))
  }), CategorySearch_jsx(ViewWithPopup["a" /* default */], {
    key: 100,
    noView: true,
    view: CategorySearch_jsx(button_default.a, {
      type: "default"
    }, "Reset"),
    popup: CategorySearch_jsx(button_default.a, {
      onClick: () => onChange(initialState, 'reset')
    }, "Reset Search Page URL")
  }));
};

/* harmony default export */ var CategorySearch = (CategorySearchNext);
// EXTERNAL MODULE: ./components/SectionGrid/SectionGrid.js + 2 modules
var SectionGrid = __webpack_require__("YG1B");

// EXTERNAL MODULE: ./components/UI/ContentLoader/ContentLoader.js
var ContentLoader = __webpack_require__("AMVZ");

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__("4Qn9");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// EXTERNAL MODULE: ./components/Map/Map.js + 3 modules
var Map = __webpack_require__("j1/2");

// EXTERNAL MODULE: ./components/Loader/Loader.js + 1 modules
var Loader = __webpack_require__("vg3h");

// CONCATENATED MODULE: ./container/Listing/Listing.style.js


const fadeIn = Object(external_styled_components_["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const ListingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__ListingWrapper",
  componentId: "sc-1c13aqm-0"
})(["position:relative;.ant-checkbox-group{.ant-checkbox-group-item{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.DateRangePicker{.DateRangePickerInput{.DateInput{.DateInput_input{&.DateInput_input__focused{border-bottom:0;}}.DateInput_fang{top:40px !important;}}}}.ant-slider{.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}.toolbar{padding-left:30px;padding-right:30px;border-bottom:1px solid ", ";@media only screen and (min-width:1441px){min-height:78px;}}.loadmore_wrapper{margin-top:30px;> button{border:0;min-width:115px;height:40px;display:inline-flex;align-items:center;justify-content:center;padding:0 15px;font-size:15px;font-weight:700;border-radius:3px;color:", ";border-color:", ";background-color:", ";transition:all 0.3s ease;&:hover{outline:none;opacity:0.8;}&:focus{outline:none;}&::after{content:none;}}}"], Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const ShowMapCheckbox = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__ShowMapCheckbox",
  componentId: "sc-1c13aqm-1"
})([".ant-checkbox-wrapper{display:flex;align-items:center;flex-direction:row-reverse;}.ant-checkbox{top:0;+ span{font-size:14px;font-weight:700;color:", ";}}.ant-checkbox-inner{width:20px;height:20px;border-color:", ";}.ant-checkbox-wrapper{.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";&::after{transform:rotate(45deg) scale(1) translate(-50%,-70%);}}}}.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const PostsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__PostsWrapper",
  componentId: "sc-1c13aqm-2"
})(["max-width:1920px;padding:30px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const FixedMap = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__FixedMap",
  componentId: "sc-1c13aqm-3"
})(["position:fixed;background-color:", ";right:0;width:40%;height:calc(100% - 152px);top:152px;z-index:9;@media only screen and (max-width:767px){width:100%;}> div{position:absolute;width:100%;height:100% !important;> div{height:100% !important;}}"], Object(theme_get_["themeGet"])('color.2', '#F7F7F7'));
const Label = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__Label",
  componentId: "sc-1c13aqm-4"
})(["color:", ";font-size:15px;margin-right:15px;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const FilterArea = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__FilterArea",
  componentId: "sc-1c13aqm-5"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const FilterElementsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__FilterElementsWrapper",
  componentId: "sc-1c13aqm-6"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('color.13', '#E2E2E2'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "Listingstyle__ButtonGroup",
  componentId: "sc-1c13aqm-7"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var Listing_style = (ListingWrapper);
// CONCATENATED MODULE: ./container/Listing/ListingMap.js
var ListingMap_jsx = external_react_default.a.createElement;






const ListingMap = props => {
  const {
    mapData,
    loading
  } = props;
  return ListingMap_jsx(FixedMap, null, isEmpty_default()(mapData) || loading ? ListingMap_jsx(Loader["a" /* default */], null) : ListingMap_jsx(Map["a" /* default */], {
    location: mapData,
    multiple: true
  }));
};

/* harmony default export */ var Listing_ListingMap = (ListingMap);
// EXTERNAL MODULE: ./library/helpers/get_api_data.js
var get_api_data = __webpack_require__("k8oj");

// EXTERNAL MODULE: ./settings/constant.js
var constant = __webpack_require__("067r");

// EXTERNAL MODULE: ./settings/config.js
var config = __webpack_require__("jorE");

// CONCATENATED MODULE: ./pages/listing.js


var listing_jsx = external_react_default.a.createElement;














const FilterDrawer = dynamic_default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "8Wl6")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8Wl6")],
    modules: ['container/Listing/Search/MobileSearchView']
  }
});
function ListingPage(props) {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(SearchProvider["a" /* SearchContext */]);
  const statekey = Object(get_api_data["c" /* SearchStateKeyCheck */])(state);
  const {
    0: posts,
    1: setPosts
  } = Object(external_react_["useState"])(props.processedData.slice(0, config["d" /* LISTING_PAGE_POST_LIMIT */]) || []);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: showMap,
    1: setShowMap
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (statekey === true) {
      const newData = Object(get_api_data["d" /* SearchedData */])(props.processedData);
      setPosts(newData);
    } else {
      setPosts(props.processedData.slice(0, config["d" /* LISTING_PAGE_POST_LIMIT */]) || []);
    }
  }, [statekey]);

  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Object(get_api_data["a" /* Paginator */])(posts, props.processedData, config["d" /* LISTING_PAGE_POST_LIMIT */]);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = config["b" /* LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP */];

  if (showMap) {
    columnWidth = config["c" /* LISTING_PAGE_COLUMN_WIDTH_WITH_MAP */];
  }

  let columnCount = 'col-24';
  return listing_jsx(Listing_style, null, listing_jsx(head_default.a, null, listing_jsx("title", null, "Listing | A react next listing template")), listing_jsx(external_react_stickynode_default.a, {
    top: 82,
    innerZ: 999,
    activeClass: "isHeaderSticky"
  }, listing_jsx(Toolbar, {
    right: listing_jsx(ShowMapCheckbox, null, listing_jsx(checkbox_default.a, {
      defaultChecked: false,
      onChange: handleMapToggle
    }, "Show map"))
  })), listing_jsx(PostsWrapper, {
    className: columnCount
  }, listing_jsx(SectionGrid["a" /* default */], {
    link: constant["n" /* SINGLE_POST_PAGE */],
    columnWidth: columnWidth,
    data: posts,
    totalItem: props.processedData.length,
    limit: config["d" /* LISTING_PAGE_POST_LIMIT */],
    loading: loading,
    handleLoadMore: handleLoadMore,
    placeholder: listing_jsx(ContentLoader["a" /* PostPlaceholder */], null)
  })), showMap && listing_jsx(Listing_ListingMap, {
    loading: loading,
    mapData: posts
  }));
}
async function getStaticProps() {
  const apiUrl = [{
    endpoint: 'hotel',
    name: 'listingHotel'
  }];
  const pageData = await Object(get_api_data["e" /* default */])(apiUrl);
  const processedData = Object(get_api_data["b" /* ProcessAPIData */])(pageData);
  return {
    props: {
      processedData: processedData
    }
  };
}

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "uQVn":
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "vg3h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Loader/Loader.style.js

const LoaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Loaderstyle__LoaderWrapper",
  componentId: "xriqg-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;svg{width:52px;height:100px;display:inline-block;}"]);
/* harmony default export */ var Loader_style = (LoaderWrapper);
// CONCATENATED MODULE: ./components/Loader/Loader.js
var __jsx = external_react_default.a.createElement;



const Loader = ({
  fill,
  className
}) => {
  // default className
  const addAllClasses = ['loader']; // add new class using className prop

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Loader_style, {
    className: addAllClasses.join(' ')
  }, __jsx("svg", {
    enableBackground: "new 0 0 0 0"
  }, __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "6",
    cy: "50",
    r: "6"
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.1"
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "26",
    cy: "50",
    r: "6"
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.2"
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "46",
    cy: "50",
    r: "6"
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.3"
  }))));
};

Loader.defaultProps = {
  fill: '#008489'
};
/* harmony default export */ var Loader_Loader = __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "vidl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/GridCard/GridCard.style.js


const GridCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__GridCardWrapper",
  componentId: "sc-6ijidl-0"
})(["position:relative;border-radius:6px;overflow:hidden;margin-bottom:30px;@media only screen and (max-width:480px){margin-bottom:20px;}&.has_btn{.button_group{@media only screen and (min-width:481px){position:absolute;top:5px;padding-top:3px;}}}&:hover{box-shadow:0 6px 12px ", ";.content_wrapper{border-color:transparent;}&.has_btn{.meta_wrapper{.rating{@media only screen and (min-width:481px){opacity:0;visibility:hidden;}}}@media only screen and (min-width:481px){.button_group{top:19px;opacity:1;visibility:visible;}}}.react-multiple-carousel__arrow{opacity:1;visibility:visible;}.react-multi-carousel-dot-list{bottom:0;}}"], Object(theme_get_["themeGet"])('boxShadow.2', 'rgba(0, 0, 0, 0.16)'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ImageWrapper",
  componentId: "sc-6ijidl-1"
})(["> img{max-width:100%;height:auto;}.react-multi-carousel-list{min-height:150px;background-color:#e9e8ec;}.react-multi-carousel-item{height:170px;}.react-multiple-carousel__arrow{top:0;width:22%;height:100%;border-radius:0;padding:0;opacity:0;visibility:hidden;z-index:1;&::before{font-weight:700;}}.react-multiple-carousel__arrow--left{left:0;background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multiple-carousel__arrow--right{right:0;background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multi-carousel-dot-list{position:absolute;bottom:-30%;left:0;width:100%;padding-top:10px;padding-bottom:10px;display:flex;justify-content:center;align-items:center;background:linear-gradient( to bottom,transparent 0%,rgba(0,0,0,0.25) 100% );transition:bottom 0.3s ease;}.react-multi-carousel-dot{align-items:center;button{width:6px;height:6px;border:0;background-color:", ";box-shadow:0 2px 2px rgba(0,0,0,0.05);transition:all 0.3s ease;}}.react-multi-carousel-dot--active{button{width:8px;height:8px;background-color:", ";}}"], Object(theme_get_["themeGet"])('color.3', '#E9E8E8'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const FavoriteIcon = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__FavoriteIcon",
  componentId: "sc-6ijidl-2"
})(["position:absolute;top:10px;right:8px;z-index:9;"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ContentWrapper",
  componentId: "sc-6ijidl-3"
})(["padding:15px;border-width:1px;border-style:solid;border-top-width:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-color:", ";transition:border-color 0.2s ease;"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'));
const LocationArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__LocationArea",
  componentId: "sc-6ijidl-4"
})(["color:", ";font-size:13px;font-weight:400;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(theme_get_["themeGet"])('text.1', '#909090'));
const TitleArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__TitleArea",
  componentId: "sc-6ijidl-5"
})(["color:", ";font-size:17px;font-weight:700;margin-bottom:2px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}a{color:", ";font-size:17px;font-weight:700;margin-bottom:2px;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}&:hover{color:", ";}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const PriceArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__PriceArea",
  componentId: "sc-6ijidl-6"
})(["color:", ";font-size:13px;font-weight:400;margin-top:1px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const RatingArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__RatingArea",
  componentId: "sc-6ijidl-7"
})(["display:flex;align-items:center;color:", ";font-size:13px;margin-top:4px;span{flex-shrink:0;}i{color:", ";}svg{fill:", ";}strong{margin-top:-2px;font-weight:700;margin-left:8px;}.ant-rate{.ant-rate-star{margin-right:4px;font-size:15px;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const MetaWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__MetaWrapper",
  componentId: "sc-6ijidl-8"
})(["position:relative;transition:all 0.3s ease-out;"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ButtonGroup",
  componentId: "sc-6ijidl-9"
})(["padding-top:7px;@media only screen and (min-width:481px){opacity:0;visibility:hidden;}> a{display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:", ";transition:all 0.3s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}svg{margin-right:5px;width:18px;height:18px;}}"], Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ var GridCard_style = (GridCardWrapper);
// CONCATENATED MODULE: ./components/GridCard/GridCard.js
var __jsx = external_react_default.a.createElement;



const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return __jsx(GridCard_style, {
    className: `grid_card ${classes}`.trim()
  }, __jsx(ImageWrapper, {
    className: "media_wrapper"
  }, children), __jsx(ContentWrapper, {
    className: "content_wrapper"
  }, location && __jsx(LocationArea, null, location), title && __jsx(TitleArea, null, title), __jsx(MetaWrapper, {
    className: "meta_wrapper"
  }, price && __jsx(PriceArea, {
    className: "price"
  }, price), rating && __jsx(RatingArea, {
    className: "rating"
  }, rating), viewDetailsBtn || editBtn ? __jsx(ButtonGroup, {
    className: "button_group"
  }, viewDetailsBtn, editBtn) : null)), favorite && __jsx(FavoriteIcon, null, favorite));
};

/* harmony default export */ var GridCard_GridCard = __webpack_exports__["a"] = (GridCard);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xjfH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ViewWithPopup; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/UI/Portal/Portal.js
// The portal element is inserted in the DOM tree after
// the Modal's children are mounted, meaning that children
// will be mounted on a detached DOM node. If a child
// component requires to be attached to the DOM tree
// immediately when mounted, for example to measure a
// DOM node, or uses 'autoFocus' in a descendant, add
// state to Modal and only render the children when Modal
// is inserted in the DOM tree.


function Portal({
  children,
  rendererId
}) {
  const {
    0: containerEl
  } = Object(external_react_["useState"])(document.createElement('div'));
  Object(external_react_["useEffect"])(() => {
    let portalRoot = document.getElementById(rendererId) || document.body;
    portalRoot.appendChild(containerEl);
    return () => portalRoot.removeChild(containerEl);
  });
  return /*#__PURE__*/external_react_dom_default.a.createPortal(children, containerEl);
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/UI/ViewWithPopup/ViewWithPopup.style.js

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Container",
  componentId: "sc-1m2a7on-0"
})(["border-radius:", "px;", " .ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin:9px 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-radius:3px;}}}"], props => props.radius ? props.radius : 3, props => props.showPopup && Object(external_styled_components_["css"])(["box-shadow:0 2px 20px rgba(0,0,0,0.16);position:absolute;width:100%;z-index:999;min-width:300px;padding:30px;background-color:#ffffff;"]));
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Wrapper",
  componentId: "sc-1m2a7on-1"
})(["position:relative;width:100%;"]);
// CONCATENATED MODULE: ./components/UI/ViewWithPopup/useOnClickOutside.js
// Hook

function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Empty array ensures that effect is only run on mount and unmount
}
// CONCATENATED MODULE: ./components/UI/ViewWithPopup/ViewWithPopup.js
var __jsx = external_react_default.a.createElement;




function ViewWithPopup({
  view,
  popup,
  noView = false,
  style,
  className
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(external_react_["useState"])(false);
  const ref = Object(external_react_["useRef"])();
  useOnClickOutside(ref, () => setShowPopup(false)); // Add all classs to an array

  const addAllClasses = ['view_with__popup']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Wrapper, {
    className: `${addAllClasses.join(' ')} ${showPopup ? 'active' : ''}`,
    ref: ref
  }, view && noView && __jsx("div", {
    className: "popup_handler",
    onClick: () => setShowPopup(!showPopup)
  }, view), __jsx(Container, {
    className: "popup_container",
    showPopup: showPopup,
    onClick: () => setShowPopup(true),
    style: style
  }, view && !noView && view, showPopup && __jsx("div", {
    id: "popup"
  }, __jsx(Portal, {
    rendererId: "popup"
  }, popup && popup))));
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y4c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = props => {
  const {
    rating,
    ratingCount,
    type,
    ratingFieldName
  } = props;
  let i, floorValue;
  let ratingView = [];

  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);

    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStar"], {
          key: i
        }));
      } else {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStarOutline"], {
          key: i
        }));
      }
    }
  }

  let listingCondition;

  if (rating && rating === 5) {
    listingCondition = 'Awesome';
  } else if (4 <= rating && rating < 5) {
    listingCondition = 'Good';
  } else if (3 <= rating && rating < 4) {
    listingCondition = 'Average';
  } else if (2 <= rating && rating < 3) {
    listingCondition = 'Bad';
  } else if (rating >= 1) {
    listingCondition = 'Terrible';
  } else {
    listingCondition = '';
  }

  let showRatingCount;

  if (ratingCount) {
    showRatingCount = `(` + ratingCount + `)`;
  } else {
    showRatingCount = '';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type && type === 'bulk' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, ratingView), __jsx("strong", null, ` ${listingCondition}`, " ", `${showRatingCount}`)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, ratingFieldName), " ", ratingView));
};

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ })

/******/ });