module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		13: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"16":"f77586858dc84260e257","17":"94526545d6a686bc4cdb","19":"0d85076669d12ee0ef9d","20":"ffd8f943a0cea7345d32","21":"991ea63d101288bc91a4","26":"33e9017b432e00eace68"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Hpp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BannerSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UserInfoArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProfileInformationArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProfileInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SocialAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavigationArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentContactWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ContactDetails; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const AgentDetailsPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__AgentDetailsPage",
  componentId: "sc-1gefxn9-0"
})([""]);
const BannerSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__BannerSection",
  componentId: "sc-1gefxn9-1"
})(["height:400px;"]);
const UserInfoArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__UserInfoArea",
  componentId: "sc-1gefxn9-2"
})(["margin-top:-139px;"]);
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__ProfileImage",
  componentId: "sc-1gefxn9-3"
})(["width:180px;height:180px;border-radius:3px;overflow:hidden;border:5px solid ", ";box-shadow:0 3px 6px ", ";margin-bottom:27px;img{width:100%;height:100%;object-fit:cover;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.1', 'rgba(26, 68, 116, 0.16)'));
const ProfileInformationArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__ProfileInformationArea",
  componentId: "sc-1gefxn9-4"
})(["display:flex;align-items:flex-start;justify-content:space-between;@media only screen and (max-width:667px){flex-direction:column;justify-content:flex-start;padding-bottom:30px;}"]);
const ProfileInformation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__ProfileInformation",
  componentId: "sc-1gefxn9-5"
})(["> *{max-width:864px;width:100%;}h2{font-size:25px;line-height:28px;font-weight:700;color:", ";margin-bottom:23px;}p{font-size:15px;line-height:25px;color:", ";margin-bottom:30px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const SocialAccount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__SocialAccount",
  componentId: "sc-1gefxn9-6"
})(["flex-shrink:0;a{margin:0 20px;@media only screen and (min-width:1441px){margin:0 30px;}}svg{width:18px;height:18px;fill:", ";cursor:pointer;transition:all 0.2s ease;&:first-child{margin-left:0;}&:last-child{margin-right:0;}&.twitter{&:hover{fill:", ";}}&.facebook{&:hover{fill:", ";}}&.instagram{&:hover{fill:", ";}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.6', '#273343'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.8', '#55ADEE'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.7', '#3b5998'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.12', '#e4405f'));
const NavigationArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__NavigationArea",
  componentId: "sc-1gefxn9-7"
})(["margin-bottom:30px;border-top:1px solid ", ";border-bottom:1px solid ", ";> div{display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:667px){flex-wrap:wrap;}@media only screen and (max-width:480px){flex-direction:column;padding-left:25px;padding-right:25px;padding-bottom:20px;}}.add_card{display:inline-flex;align-items:center;padding:11px 22px;border-radius:3px;font-size:15px;text-transform:capitalize;color:", ";background-color:", ";transition:all 0.3s ease;@media only screen and (max-width:480px){width:100%;display:flex;justify-content:center;}svg{font-size:22px;margin-right:5px;margin-left:-5px;}&:hover,&:focus{background-color:", ";}}.ant-menu{border:0;display:flex;align-items:center;@media only screen and (max-width:480px){flex-direction:column;width:100%;padding-bottom:10px;}li{margin:0 !important;height:auto;line-height:1;@media only screen and (max-width:480px){width:100%;padding:0;}&.ant-menu-item-selected{background-color:transparent;}&:first-child{padding-left:0;}&:last-child{padding-right:0;}a{display:block;font-size:15px;line-height:25px;padding:23px 8px;color:", ";position:relative;@media only screen and (max-width:480px){padding:15px 10px;}&::after{content:'';display:block;width:0%;height:2px;border-radius:4px;position:absolute;left:0;bottom:0;opacity:0;visibility:hidden;background-color:", ";transition:all 0.3s ease;}&.active{font-weight:700;&::after{opacity:1;visibility:visible;width:100%;}}&:hover{&::after{opacity:1;visibility:visible;width:100%;}}&:hover,&:focus{text-decoration:none;}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const AgentContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__AgentContactWrapper",
  componentId: "sc-1gefxn9-8"
})(["padding:25px 0 30px;> h2{color:", ";font-size:25px;line-height:30px;font-weight:700;margin-bottom:22px;@media only screen and (max-width:480px){font-size:17px;line-height:21px;}}> .ant-row{> div{@media only screen and (max-width:991px){margin-bottom:40px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ContactDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgentDetailsstyle__ContactDetails",
  componentId: "sc-1gefxn9-9"
})(["border-radius:3px;padding:30px;box-sizing:border-box;background-color:", ";> h3{margin-top:30px;&:first-child{margin-top:0;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'));
/* harmony default export */ __webpack_exports__["j"] = (AgentDetailsPage);

/***/ }),

/***/ "/3/v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDeviceType; });
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("A1cq");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_0__);

function getDeviceType(req) {
  let userAgent;
  let deviceType;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  const md = new mobile_detect__WEBPACK_IMPORTED_MODULE_0___default.a(userAgent);

  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  return deviceType;
}

/***/ }),

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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

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

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Qn9":
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "5PAT":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/generatePicker");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "A1cq":
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

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

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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

/***/ "D7ag":
/***/ (function(module, exports) {

module.exports = require("rc-picker/lib/generate/dayjs");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

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

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RJ0H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ActiveLink = ({
  className,
  children,
  router,
  href
}) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var container_Agent_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vx9s");
/* harmony import */ var library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("k8oj");
/* harmony import */ var library_helpers_get_device_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/3/v");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function profilePage(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Agent | TripFinder.")), __jsx(container_Agent_index__WEBPACK_IMPORTED_MODULE_2__[/* AgentDetailsViewPage */ "b"], props));
}
async function getStaticProps() {
  const apiUrl = [{
    endpoint: 'agent',
    name: 'listingAgent'
  }];
  const pageData = await Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"])(apiUrl);
  const processedData = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_3__[/* ProcessAPIData */ "b"])(pageData);
  return {
    props: {
      processedData
    }
  };
}

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

/***/ "YPhW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XwqE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "sc-684bzp-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _Base__WEBPACK_IMPORTED_MODULE_2__[/* base */ "a"], Object(_Base__WEBPACK_IMPORTED_MODULE_2__[/* themed */ "b"])('Image'));

const Image = _ref => {
  let {
    src,
    alt
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, _extends({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
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

/***/ "ZiTp":
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





const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-121p3m5-0"
})(_Base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Heading'));

const Heading = _ref => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: 0,
  fontWeight: 700
};
/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

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

/***/ "lR+B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SidebarMenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AgentAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AgentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FromWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FormTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AgentPictureUploader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const AccountSettingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__AccountSettingWrapper",
  componentId: "i0hqwe-0"
})(["padding:60px 0;@media only screen and (max-width:767px){padding:30px 0;}"]);
const AccountSidebar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside.withConfig({
  displayName: "AccountSettingsstyle__AccountSidebar",
  componentId: "i0hqwe-1"
})(["border-radius:6px;background-color:", ";box-shadow:0 3px 6px ", ";overflow:hidden;@media only screen and (max-width:767px){box-shadow:none;margin-bottom:0;}.ant-menu{padding:27px 0 20px;border:0;@media only screen and (max-width:767px){display:flex;flex-wrap:nowrap;overflow-y:auto;padding:20px 0 30px;}li{margin:22px 0;height:26px;line-height:26px;padding:0 30px !important;@media only screen and (min-width:1441px){padding:0 60px !important;}@media only screen and (max-width:767px){width:auto;height:inherit;line-height:initial;padding:0 15px !important;margin:0 !important;flex-shrink:0;&:first-child{padding-left:0 !important;}&::after{display:none;}}&.ant-menu-item-selected{background-color:transparent;&::after{left:0;right:auto;border-color:", ";}a{color:", ";font-weight:700;}}a{color:", ";font-size:15px;transition:0.3s ease;@media only screen and (max-width:767px){padding-bottom:8px;border-bottom:2px solid transparent;&.active{border-bottom-color:", ";}}&:hover{color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.1', 'rgba(26, 68, 116, 0.16)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const SidebarMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__SidebarMenuWrapper",
  componentId: "i0hqwe-2"
})(["overflow:hidden;@media only screen and (max-width:767px){height:67px;margin-bottom:8px;}"]);
const AgentAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__AgentAvatar",
  componentId: "i0hqwe-3"
})(["background-color:", ";padding:45px 30px 30px;@media only screen and (min-width:1441px){padding:60px 60px 30px;}@media only screen and (max-width:767px){display:flex;align-items:center;padding:32px 30px;}.ant-avatar{width:90px;height:90px;margin-bottom:25px;@media only screen and (max-width:767px){width:80px;height:80px;margin-bottom:0;margin-right:20px;flex-shrink:0;}@media only screen and (max-width:320px){width:65px;height:65px;}}a{color:", ";font-size:13px;line-height:16px;&:hover,&:focus{outline:0;box-shadow:none;text-decoration:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__ContentWrapper",
  componentId: "i0hqwe-4"
})([""]);
const AgentName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "AccountSettingsstyle__AgentName",
  componentId: "i0hqwe-5"
})(["color:", ";font-size:17px;line-height:21px;font-weight:700;margin-bottom:4px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const FromWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__FromWrapper",
  componentId: "i0hqwe-6"
})(["padding:30px;border-radius:6px;border:1px solid ", ";background-color:", ";overflow:hidden;@media only screen and (min-width:1441px){padding:60px;}@media only screen and (max-width:767px){padding:0;border-radius:0;border:0;h2{display:none;}form{padding-bottom:50px;}}.field-container{.ant-form-item{.ant-form-item-label{margin-bottom:6px;label{color:", ";font-size:15px;line-height:18px;font-weight:700;}}.ant-form-item-control{line-height:1;input{border-radius:3px;border-color:", ";height:47px;&:focus{outline:0;box-shadow:none;}}textarea{border-radius:3px;border-color:", ";&:focus{outline:0;box-shadow:none;}}&.has-success{.ant-form-item-children-icon{color:", ";}}.ant-calendar-picker,.ant-form-item-children{display:block;}.ant-select{.ant-select-selection--single{border-radius:3px;border-color:", ";height:47px;.ant-select-selection__rendered{line-height:46px;}&:focus{outline:0;box-shadow:none;}}}&.has-success.has-feedback{.ant-select .ant-select-selection--single,.ant-calendar-picker input{background-color:", ";}}}}}.submit-container{display:flex;flex-direction:row-reverse;margin-top:45px;@media only screen and (max-width:767px){width:100%;margin-top:30px;padding:22px 30px;flex-direction:row;position:fixed;bottom:0;left:0;z-index:1;background-color:", ";border-top:1px solid ", ";}> button[type='submit']{border-radius:3px;height:47px;border-color:", ";background-color:", ";font-size:15px;font-weight:700;text-transform:capitalize;padding-left:28px;padding-right:28px;line-height:1;&::after{content:none;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "AccountSettingsstyle__FormTitle",
  componentId: "i0hqwe-7"
})(["color:", ";font-size:25px;line-height:30px;font-weight:700;margin-bottom:27px;@media only screen and (min-width:1441px){margin-bottom:40px;}@media only screen and (max-width:1200px){font-size:22px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const AgentPictureUploader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AccountSettingsstyle__AgentPictureUploader",
  componentId: "i0hqwe-8"
})(["@media only screen and (max-width:767px){padding-bottom:50px;}h4{font-size:15px;font-weight:700;line-height:18px;margin-bottom:20px;}.image_uploader{display:block;overflow:hidden;margin-bottom:30px;}.ant-upload.ant-upload-drag{border-radius:3px;background-color:", ";border:1px solid ", ";&:not(.ant-upload-disabled):hover{border-color:", ";}.ant-upload.ant-upload-btn{padding:56px 0;@media only screen and (max-width:767px){padding:30px 0;}.ant-upload-drag-container{> div{flex-direction:column;justify-content:center;.ant-upload-text{padding:0;margin:5px 0 0;text-decoration:underline;background-color:transparent;color:", ";}}}}}.ant-upload-list{&.ant-upload-list-picture-card{margin-top:20px;.ant-upload-list-item{padding:5px;border-radius:3px;border-color:", ";}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.0', '#EBEBEB'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'));
/* harmony default export */ __webpack_exports__["i"] = (AccountSettingWrapper);

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

/***/ "oGVf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Containerstyle__ContainerWrapper",
  componentId: "sc-2xnsly-0"
})(["margin-left:auto;margin-right:auto;", ";", ";", " @media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:1170px;width:100%;}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;@media only screen and (max-width:480px){padding-left:25px;padding-right:25px;}"]), props => props.fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100% !important;max-width:1920px !important;@media only screen and (min-width:1441px){padding-left:75px;padding-right:75px;}"]));
/* harmony default export */ __webpack_exports__["a"] = (ContainerWrapper);

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vVAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oGVf");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  fluid
}) => {
  return __jsx(_Container_style__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: className,
    fullWidth: fullWidth,
    noGutter: noGutter,
    fluid: fluid
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

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

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "vx9s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ AgentAccountSettingsPage; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ AgentDetailsViewPage; });

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./library/helpers/activeLink.js
var activeLink = __webpack_require__("RJ0H");

// EXTERNAL MODULE: ./components/UI/Container/Container.style.js
var Container_style = __webpack_require__("oGVf");

// EXTERNAL MODULE: ./settings/constant.js
var constant = __webpack_require__("067r");

// EXTERNAL MODULE: ./container/Agent/AccountSettings/AccountSettings.style.js
var AccountSettings_style = __webpack_require__("lR+B");

// CONCATENATED MODULE: ./container/Agent/AccountSettings/AgentAccountSettingsPage.js




var __jsx = external_react_default.a.createElement;






const AgentCreateOrUpdateForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "xwjx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xwjx")],
    modules: ['./AgentCreateOrUpdateForm']
  }
});
const AgentPictureChangeForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "vTFZ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vTFZ")],
    modules: ['./AgentPictureChangeForm']
  }
});
const ChangePassWord = dynamic_default()(() => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "k65C")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("k65C")],
    modules: ['./ChangePassWordForm']
  }
});
function AgentAccountSettingsPage(props) {
  const {
    processedData
  } = props;
  const {
    0: currentRoute,
    1: setCurrentRoute
  } = Object(external_react_["useState"])('edit-profile');
  const profileData = processedData ? processedData[0] : '';
  const firstName = profileData ? profileData.first_name : '';
  const lastName = profileData ? profileData.last_name : '';
  const profilePic = profileData ? profileData.profile_pic.url : '';
  return __jsx(AccountSettings_style["i" /* default */], null, __jsx(Container_style["a" /* default */], {
    fullWidth: true
  }, __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    md: 9,
    lg: 6
  }, __jsx(AccountSettings_style["a" /* AccountSidebar */], null, __jsx(AccountSettings_style["b" /* AgentAvatar */], null, __jsx(avatar_default.a, {
    src: profilePic,
    alt: "Profile Picture"
  }), __jsx(AccountSettings_style["e" /* ContentWrapper */], null, __jsx(AccountSettings_style["c" /* AgentName */], null, firstName, " ", lastName), __jsx(activeLink["a" /* default */], {
    href: `${constant["e" /* AGENT_PROFILE_PAGE */]}`
  }, "View profile"))), __jsx(external_react_default.a.Fragment, null, __jsx(AccountSettings_style["h" /* SidebarMenuWrapper */], null, __jsx(menu_default.a, {
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: "inline"
  }, __jsx(menu_default.a.Item, {
    key: "1"
  }, __jsx("a", {
    onClick: () => setCurrentRoute('edit-profile')
  }, "Edit Profile")), __jsx(menu_default.a.Item, {
    key: "2"
  }, __jsx("a", {
    onClick: () => setCurrentRoute('change-photo')
  }, "Change Photos")), __jsx(menu_default.a.Item, {
    key: "3"
  }, __jsx("a", {
    onClick: () => setCurrentRoute('change-password')
  }, "Change Password"))))))), __jsx(col_default.a, {
    md: 15,
    lg: 18
  }, __jsx(AccountSettings_style["g" /* FromWrapper */], null, currentRoute === 'edit-profile' ? __jsx(AgentCreateOrUpdateForm, null) : '', currentRoute === 'change-photo' ? __jsx(AgentPictureChangeForm, null) : '', currentRoute === 'change-password' ? __jsx(ChangePassWord, null) : '')))));
}
// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__("4Qn9");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// EXTERNAL MODULE: ./components/UI/Container/Container.js
var Container = __webpack_require__("vVAh");

// EXTERNAL MODULE: ./components/UI/Image/Image.js
var Image = __webpack_require__("YPhW");

// EXTERNAL MODULE: ./components/UI/Heading/Heading.js
var Heading = __webpack_require__("ZiTp");

// EXTERNAL MODULE: ./components/UI/Text/Text.js
var Text = __webpack_require__("Fq9I");

// EXTERNAL MODULE: ./components/UI/ContentLoader/ContentLoader.js
var ContentLoader = __webpack_require__("AMVZ");

// EXTERNAL MODULE: ./components/Loader/Loader.js + 1 modules
var Loader = __webpack_require__("vg3h");

// EXTERNAL MODULE: ./container/Agent/AccountDetails/AgentDetails.style.js
var AgentDetails_style = __webpack_require__("+Hpp");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// CONCATENATED MODULE: ./container/Agent/AccountDetails/AgentDetailsViewPage.js


var AgentDetailsViewPage_jsx = external_react_default.a.createElement;













const AgentFavItemLists = dynamic_default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "gexM")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gexM")],
    modules: ['./AgentFavItemLists']
  }
});
const AgentContact = dynamic_default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "yAJ4")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yAJ4")],
    modules: ['./AgentContact']
  }
});
const AgentItemLists = dynamic_default()(() => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "Hjtq")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Hjtq")],
    modules: ['./AgentItemLists']
  }
});

const ProfileNavigation = props => {
  const {
    0: component,
    1: setComponent
  } = Object(external_react_["useState"])('allListing');
  const {
    className,
    isLoggedIn
  } = props;
  return AgentDetailsViewPage_jsx(external_react_default.a.Fragment, null, AgentDetailsViewPage_jsx(AgentDetails_style["d" /* NavigationArea */], null, AgentDetailsViewPage_jsx(Container["a" /* default */], {
    fluid: true
  }, AgentDetailsViewPage_jsx(menu_default.a, {
    className: className
  }, AgentDetailsViewPage_jsx(menu_default.a.Item, {
    key: "0"
  }, AgentDetailsViewPage_jsx("a", {
    className: component === 'allListing' ? 'active' : '',
    onClick: () => setComponent('allListing')
  }, "Listings")), AgentDetailsViewPage_jsx(menu_default.a.Item, {
    key: "1"
  }, AgentDetailsViewPage_jsx("a", {
    className: component === 'favouriteListing' ? 'active' : '',
    onClick: () => setComponent('favouriteListing')
  }, "Favourites")), AgentDetailsViewPage_jsx(menu_default.a.Item, {
    key: "2"
  }, AgentDetailsViewPage_jsx("a", {
    className: component === 'contact' ? 'active' : '',
    onClick: () => setComponent('contact')
  }, "Contact"))), isLoggedIn && AgentDetailsViewPage_jsx(link_default.a, {
    href: `${constant["a" /* ADD_HOTEL_PAGE */]}`
  }, AgentDetailsViewPage_jsx("a", {
    className: "add_card"
  }, AgentDetailsViewPage_jsx(io_["IoIosAdd"], null), " Add Hotel")))), AgentDetailsViewPage_jsx(Container["a" /* default */], {
    fluid: true
  }, component === 'allListing' && AgentDetailsViewPage_jsx(AgentItemLists, props), component === 'favouriteListing' && AgentDetailsViewPage_jsx(AgentFavItemLists, props), component === 'contact' && AgentDetailsViewPage_jsx(AgentContact, props)));
};

const AgentProfileInfo = props => {
  const {
    processedData,
    loading
  } = props;
  if (isEmpty_default()(processedData) || loading) return AgentDetailsViewPage_jsx(Loader["a" /* default */], null);
  const {
    first_name,
    last_name,
    content,
    profile_pic,
    cover_pic,
    social_profile
  } = processedData[0];
  const username = `${first_name} ${last_name}`;
  return AgentDetailsViewPage_jsx(external_react_["Fragment"], null, AgentDetailsViewPage_jsx(AgentDetails_style["b" /* BannerSection */], {
    style: {
      background: `url(${cover_pic.url}) center center / cover no-repeat`
    }
  }), AgentDetailsViewPage_jsx(AgentDetails_style["i" /* UserInfoArea */], null, AgentDetailsViewPage_jsx(Container["a" /* default */], {
    fluid: true
  }, AgentDetailsViewPage_jsx(AgentDetails_style["e" /* ProfileImage */], null, profile_pic ? AgentDetailsViewPage_jsx(Image["a" /* default */], {
    src: profile_pic.url,
    alt: "Profile Pic"
  }) : AgentDetailsViewPage_jsx(ContentLoader["b" /* ProfilePicLoader */], null)), AgentDetailsViewPage_jsx(AgentDetails_style["g" /* ProfileInformationArea */], null, AgentDetailsViewPage_jsx(AgentDetails_style["f" /* ProfileInformation */], null, AgentDetailsViewPage_jsx(Heading["a" /* default */], {
    content: username
  }), AgentDetailsViewPage_jsx(Text["a" /* default */], {
    content: content
  })), AgentDetailsViewPage_jsx(AgentDetails_style["h" /* SocialAccount */], null, AgentDetailsViewPage_jsx(popover_default.a, {
    content: "Twitter"
  }, AgentDetailsViewPage_jsx("a", {
    href: social_profile.twitter,
    target: "_blank",
    rel: "noopener noreferrer"
  }, AgentDetailsViewPage_jsx(io_["IoLogoTwitter"], {
    className: "twitter"
  }))), AgentDetailsViewPage_jsx(popover_default.a, {
    content: "Facebook"
  }, AgentDetailsViewPage_jsx("a", {
    href: social_profile.facebook,
    target: "_blank",
    rel: "noopener noreferrer"
  }, AgentDetailsViewPage_jsx(io_["IoLogoFacebook"], {
    className: "facebook"
  }))), AgentDetailsViewPage_jsx(popover_default.a, {
    content: "Instagram"
  }, AgentDetailsViewPage_jsx("a", {
    href: social_profile.instagram,
    target: "_blank",
    rel: "noopener noreferrer"
  }, AgentDetailsViewPage_jsx(io_["IoLogoInstagram"], {
    className: "instagram"
  }))))))));
};

function AgentDetailsViewPage(props) {
  return AgentDetailsViewPage_jsx(AgentDetails_style["j" /* default */], null, AgentDetailsViewPage_jsx(AgentProfileInfo, props), AgentDetailsViewPage_jsx(ProfileNavigation, props));
}
// CONCATENATED MODULE: ./container/Agent/index.js



/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });