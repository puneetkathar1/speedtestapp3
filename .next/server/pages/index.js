module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Qn9":
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "6nrt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-678e8be229ba73bd1bd3f774ae738e2a.jpg";

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

/***/ "8+2T":
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

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

/***/ "IGpx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapDataHelper; });
function mapDataHelper(infoValue) {
  const tempMapObj = {};
  const tempMapArray = [];

  if (infoValue && infoValue.length !== 0) {
    infoValue.map(({
      place_id,
      address_components,
      formatted_address,
      geometry: {
        location
      }
    }) => {
      let id = '';
      let lat = '';
      let lng = '';
      let formattedAddress = '';
      let city = '';
      let state_long = '';
      let state_short = '';
      let zipcode = '';
      let country_long = '';
      let country_short = '';
      id = place_id;
      lat = location.lat();
      lng = location.lng();
      formattedAddress = formatted_address;

      if (address_components) {
        for (let i = 0; i < address_components.length; i++) {
          if (address_components[i].types.length) {
            switch (address_components[i].types[0]) {
              case 'locality':
                city = address_components[i].long_name;
                break;

              case 'administrative_area_level_1':
                state_long = address_components[i].long_name;
                state_short = address_components[i].short_name;
                break;

              case 'country':
                country_long = address_components[i].long_name;
                country_short = address_components[i].short_name;
                break;

              case 'postal_code':
                zipcode = address_components[i].long_name;
                break;

              default:
                break;
            }
          }
        }
      }

      tempMapObj.id = id;
      tempMapObj.lat = lat;
      tempMapObj.lng = lng;
      tempMapObj.formattedAddress = formattedAddress;
      tempMapObj.city = city;
      tempMapObj.state_short = state_short;
      tempMapObj.state_long = state_long;
      tempMapObj.zipcode = zipcode;
      tempMapObj.country_short = country_short;
      tempMapObj.country_long = country_long;
      tempMapArray.push(tempMapObj);
      return tempMapArray;
    });
  }

  return tempMapArray;
}

/***/ }),

/***/ "L3BB":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "NnCY":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ HomePage; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/UI/Container/Container.js
var Container = __webpack_require__("vVAh");

// EXTERNAL MODULE: ./components/UI/Heading/Heading.js
var Heading = __webpack_require__("ZiTp");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/UI/Base.js
var Base = __webpack_require__("XwqE");

// CONCATENATED MODULE: ./components/UI/Title/Title.style.js


const SectionTitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Titlestyle__SectionTitleWrapper",
  componentId: "sc-1okeadk-0"
})(["display:flex;justify-content:space-between;align-items:baseline;margin:30px 0;@media only screen and (max-width:480px){margin:15px 0 20px;}", ""], Base["a" /* base */]);
const TitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Titlestyle__TitleWrapper",
  componentId: "sc-1okeadk-1"
})([""]);
const LinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Titlestyle__LinkWrapper",
  componentId: "sc-1okeadk-2"
})([""]);
/* harmony default export */ var Title_style = (SectionTitleWrapper);
// CONCATENATED MODULE: ./components/UI/Title/Title.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SectionTitle = _ref => {
  let {
    className,
    title,
    link
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "link"]);

  // Add all classs to an array
  const addAllClasses = ['section_title']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Title_style, _extends({
    className: addAllClasses.join(' ')
  }, props), title && __jsx(TitleWrapper, {
    className: "title_wrapper"
  }, title), link && __jsx(LinkWrapper, {
    className: "link_wrapper"
  }, link));
};

/* harmony default export */ var Title = (SectionTitle);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/SectionTitle/SectionTitle.style.js


const SectionTitle_style_SectionTitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SectionTitlestyle__SectionTitleWrapper",
  componentId: "sc-62tmmv-0"
})(["h2,a{margin:0;}h2{color:", ";font-size:25px;line-height:30px;font-weight:700;@media only screen and (max-width:480px){font-size:17px;line-height:21px;}}a{color:", ";font-size:17px;line-height:21px;font-weight:400;@media only screen and (max-width:480px){font-size:15px;line-height:20px;}&:hover{color:", ";}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var SectionTitle_style = (SectionTitle_style_SectionTitleWrapper);
// CONCATENATED MODULE: ./components/SectionTitle/SectionTitle.js
var SectionTitle_jsx = external_react_default.a.createElement;




const SectionTitle_SectionTitle = _ref => {
  let props = Object.assign({}, _ref);
  return SectionTitle_jsx(SectionTitle_style, null, SectionTitle_jsx(Title, props));
};

/* harmony default export */ var components_SectionTitle_SectionTitle = (SectionTitle_SectionTitle);
// EXTERNAL MODULE: ./components/UI/Text/Text.js
var Text = __webpack_require__("Fq9I");

// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__("UbIB");
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// CONCATENATED MODULE: ./components/UI/GlideCarousel/GlideCarousel.style.js
 // Glide wrapper style

const GlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GlideCarouselstyle__GlideWrapper",
  componentId: "sc-1kbmqwy-0"
})([".glide__slides{margin-bottom:0;}.glide__controls{.glide__prev--area,.glide__next--area{cursor:pointer;}}"]); // Glide slide wrapper style

const GlideSlideWrapper = external_styled_components_default.a.li.withConfig({
  displayName: "GlideCarouselstyle__GlideSlideWrapper",
  componentId: "sc-1kbmqwy-1"
})(["position:relative;"]); // Button wrapper style

const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonWrapper",
  componentId: "sc-1kbmqwy-2"
})(["display:inline-block;"]); // ButtonControlWrapper style

const ButtonControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonControlWrapper",
  componentId: "sc-1kbmqwy-3"
})([""]); // BulletControlWrapper style

const BulletControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GlideCarouselstyle__BulletControlWrapper",
  componentId: "sc-1kbmqwy-4"
})([""]); // BulletButton style

const BulletButton = external_styled_components_default.a.button.withConfig({
  displayName: "GlideCarouselstyle__BulletButton",
  componentId: "sc-1kbmqwy-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#d6d6d6;&:hover,&.glide__bullet--active{background-color:#869791;}"]); // default button style

const DefaultBtn = external_styled_components_default.a.button.withConfig({
  displayName: "GlideCarouselstyle__DefaultBtn",
  componentId: "sc-1kbmqwy-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ var GlideCarousel_style = (GlideWrapper);
// CONCATENATED MODULE: ./components/UI/GlideCarousel/GlideCarousel.js
var GlideCarousel_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector
}) => {
  // Add all classs to an array.
  const addAllClasses = ['glide']; // className prop checking.

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop.


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide.


  Object(external_react_["useEffect"])(() => {
    const glide = new glide_default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  }, [carouselSelector, options]);
  return GlideCarousel_jsx(GlideCarousel_style, {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide'
  }, GlideCarousel_jsx("div", {
    className: "glide__track",
    "data-glide-el": "track"
  }, GlideCarousel_jsx("ul", {
    className: "glide__slides"
  }, children)), controls && GlideCarousel_jsx(ButtonControlWrapper, {
    className: "glide__controls",
    "data-glide-el": "controls"
  }, GlideCarousel_jsx(ButtonWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<"
  }, prevButton ? prevButton : GlideCarousel_jsx(DefaultBtn, null, "Prev")), GlideCarousel_jsx(ButtonWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">"
  }, nextButton ? nextButton : GlideCarousel_jsx(DefaultBtn, null, "Next"))), bullets && GlideCarousel_jsx(BulletControlWrapper, {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, GlideCarousel_jsx(external_react_["Fragment"], null, totalBullets.map(index => GlideCarousel_jsx(BulletButton, {
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`
  })))));
}; // Glide Slide wrapper component.


const GlideSlide = ({
  children
}) => {
  return GlideCarousel_jsx(GlideSlideWrapper, {
    className: "glide__slide"
  }, children);
};

// GlideCarousel default props.
GlideCarousel.defaultProps = {
  controls: true
};

/* harmony default export */ var GlideCarousel_GlideCarousel = (GlideCarousel);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__("4Qn9");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./components/Map/MapAutoComplete.js
var MapAutoComplete = __webpack_require__("n3ZG");

// EXTERNAL MODULE: ./components/UI/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("SEwy");

// EXTERNAL MODULE: ./components/UI/DatePicker/ReactDates.js + 2 modules
var ReactDates = __webpack_require__("g9v/");

// EXTERNAL MODULE: ./components/Map/mapDataHelper.js
var mapDataHelper = __webpack_require__("IGpx");

// EXTERNAL MODULE: ./components/UI/ViewWithPopup/ViewWithPopup.js + 3 modules
var ViewWithPopup = __webpack_require__("xjfH");

// CONCATENATED MODULE: ./container/Home/Search/Search.style.js


const BannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__BannerWrapper",
  componentId: "dh2rqj-0"
})(["width:100%;min-height:100vh;position:relative;background-color:", ";@media only screen and (max-width:991px){> div{max-width:100%;}}.glide,.glide__track,.glide__slides{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:all;}.glide__slide{img{width:100%;height:100%;object-fit:cover;}}.glide__bullets{position:absolute;bottom:30px;width:100%;display:flex;align-items:center;justify-content:center;z-index:1;}.glide__bullet{width:7px;height:7px;background-color:", ";transition:width 0.3s ease;}.glide__bullet--active{width:25px;border-radius:8px;background-color:", ";}> div{position:relative;min-height:100vh;}&:after{display:block;content:'';width:100%;height:60%;position:absolute;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,0.5));pointer-events:none;z-index:0;}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "dh2rqj-1"
})(["width:calc(100% - 60px);padding:28px 30px 30px;border-radius:6px;background-color:", ";box-shadow:0 1px 20px rgba(0,0,0,0.08);position:absolute;bottom:81px;z-index:1;@media only screen and (min-width:569px) and (max-width:991px){width:414px;left:30px;}@media only screen and (max-width:480px){width:calc(100% - 30px);padding:15px;left:15px;> p{display:none;}}> div{@media only screen and (min-width:481px){margin-top:30px;}}h2{margin-bottom:10px;}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const FormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__FormWrapper",
  componentId: "dh2rqj-2"
})(["display:flex;align-items:center;justify-content:flex-end;background-color:", ";border-radius:3px 0 0 3px;min-height:60px;@media only screen and (max-width:991px){flex-direction:column;}@media only screen and (max-width:480px){margin-top:10px;}button[type='submit'].ant-btn{min-width:157px;height:60px;color:", ";background-color:", ";border-radius:0 3px 3px 0;border:0;box-shadow:none;font-size:15px;font-weight:700;text-shadow:none;@media only screen and (max-width:991px){min-width:100%;border-radius:0 0 3px 3px;}@media only screen and (max-width:480px){height:47px;}&::after{display:none;}&:hover{opacity:0.85;}}"], Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const ComponentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__ComponentWrapper",
  componentId: "dh2rqj-3"
})(["display:flex;width:100%;align-items:center;position:relative;.target{right:10px;left:auto;@media only screen and (max-width:480px){right:25px;}}.map_autocomplete{width:100%;position:relative;&::after{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:auto;background-color:", ";}@media only screen and (max-width:991px){&::after{top:auto;bottom:0;height:1px;width:calc(100% - 40px);left:20px;}}@media only screen and (max-width:480px){&::after{width:calc(100% - 30px);left:15px;}}input{border:0;font-size:15px;font-weight:400;border-radius:0;height:60px;padding:0 30px 0 40px;background:transparent;color:", ";@media only screen and (max-width:480px){height:47px;padding:0 30px 0 36px;}&:hover,&:focus{outline:none;box-shadow:none;}&::placeholder{color:", ";}}}.date_picker{min-width:calc(250px - 14px);width:calc(100% - 14px);margin:0 0 0 14px;display:flex;justify-content:center;align-items:center;@media only screen and (max-width:991px){justify-content:flex-start;height:60px;}@media only screen and (max-width:480px){height:47px;}.DayPicker__withBorder{box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);}.DateRangePicker{display:block;width:100%;.DateRangePickerInput{border:0;padding-right:0;display:flex;align-items:center;justify-content:space-between;background:transparent;.DateRangePickerInput_clearDates,.DateRangePickerInput_clearDates{&.DateRangePickerInput_clearDates__small{display:none;}}.DateInput{width:100%;padding:0 15px 0 30px;background:transparent;@media only screen and (min-width:569px) and (max-width:991px){padding:0 25px 0 30px;}@media only screen and (max-width:568px){padding:0 15px 0 25px;}.DateInput_fang{display:none;}.DateInput_input{padding:0;font-weight:400;color:", ";background:transparent;&.DateInput_input__focused{border-color:transparent;}&::placeholder{color:", ";}}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{margin-top:-12px;z-index:2;@media only screen and (max-width:991px){top:47px !important;}@media only screen and (max-width:320px){left:-29px !important;.DayPicker,.DayPicker > div > div,.DayPicker > div > div .DayPicker_transitionContainer{width:294px !important;}.DayPicker{.DayPicker_weekHeader{padding:0 !important;}.CalendarMonth{padding:0 !important;}}}}}}.view_with__popup{max-width:100%;position:relative;&::before{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:0;z-index:1;background-color:", ";@media only screen and (max-width:991px){top:0;bottom:auto;height:1px;width:calc(100% - 40px);left:20px;}@media only screen and (max-width:480px){width:calc(100% - 30px);left:15px;}}.popup_handler{width:calc(100% - 14px);margin-left:14px;button.ant-btn{min-width:auto;width:100%;height:60px;border:0;padding:0 30px;border-radius:0;box-shadow:none;font-weight:400;font-size:15px;color:", ";background-color:", ";@media only screen and (max-width:991px){text-align:left;padding:0 25px 0 30px;}@media only screen and (max-width:480px){height:47px;padding:0 20px 0 25px;}&::after{display:none;}}}&.room_guest{.popup_handler{button.ant-btn{display:flex;align-items:center;justify-content:space-between;}}}&.active{.popup_container{margin-top:0;padding:22px;box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);@media only screen and (max-width:991px){margin-top:0;}@media only screen and (max-width:480px){min-width:auto;}}}}> svg{position:absolute;z-index:1;top:auto;&.map-marker,&.calendar,&.user-friends{left:15px;right:auto;fill:", ";}&.calendar{@media only screen and (max-width:480px){width:14px;height:14px;}}&.user-friends{width:17px;height:17px;@media only screen and (max-width:480px){width:16px;height:16px;}}&.caret-down{right:12px;left:auto;fill:", ";@media only screen and (max-width:991px){right:20px;}@media only screen and (max-width:991px){right:15px;}}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('text.1', '#909090'));
const RoomGuestWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__RoomGuestWrapper",
  componentId: "dh2rqj-4"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "dh2rqj-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:5px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
/* harmony default export */ var Search_style = (BannerWrapper);
// EXTERNAL MODULE: ./settings/constant.js
var constant = __webpack_require__("067r");

// EXTERNAL MODULE: ./context/SearchProvider.js
var SearchProvider = __webpack_require__("l0iN");

// CONCATENATED MODULE: ./container/Home/Search/SearchForm.js

var SearchForm_jsx = external_react_default.a.createElement;

function SearchForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchForm_ownKeys(Object(source), true).forEach(function (key) { SearchForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};

const SearchForm = () => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(SearchProvider["a" /* SearchContext */]);
  const {
    0: searchDate,
    1: setSearchDate
  } = Object(external_react_["useState"])({
    setStartDate: null,
    setEndDate: null
  });
  const {
    0: mapValue,
    1: setMapValue
  } = Object(external_react_["useState"])([]);
  const {
    0: roomGuest,
    1: setRoomGuest
  } = Object(external_react_["useState"])({
    room: 0,
    guest: 0
  });

  const updatevalueFunc = event => {
    const {
      searchedPlaceAPIData
    } = event;

    if (!isEmpty_default()(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  const handleIncrement = type => {
    setRoomGuest(SearchForm_objectSpread(SearchForm_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] + 1
    }));
  };

  const handleDecrement = type => {
    if (roomGuest[type] <= 0) {
      return false;
    }

    setRoomGuest(SearchForm_objectSpread(SearchForm_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest(SearchForm_objectSpread(SearchForm_objectSpread({}, roomGuest), {}, {
      [type]: currentValue
    }));
  };

  const goToSearchPage = () => {
    let tempLocation = [],
        dateRange = {},
        location_lat = '',
        location_lng = '';
    const mapData = mapValue ? Object(mapDataHelper["a" /* mapDataHelper */])(mapValue) : [];
    mapData && mapData.map((singleMapData, i) => {
      return tempLocation.push({
        formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
        lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
        lng: singleMapData ? singleMapData.lng.toFixed(3) : null
      });
    });
    const location = tempLocation ? tempLocation[0] : {};
    dateRange.startDate = searchDate ? searchDate.setStartDate : null;
    dateRange.endDate = searchDate ? searchDate.setEndDate : null;

    if (location && location.lat) {
      location_lat = location.lat;
    }

    if (location && location.lng) {
      location_lng = location.lng;
    }

    let query = {
      setStartDate: searchDate.setStartDate,
      setEndDate: searchDate.setEndDate,
      room: roomGuest.room,
      guest: roomGuest.guest,
      location_lat,
      location_lng
    };

    for (const key in query) {
      if (query[key] === '' || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }

    dispatch({
      type: 'UPDATE',
      payload: SearchForm_objectSpread(SearchForm_objectSpread({}, state), {}, {
        setStartDate: searchDate.setStartDate,
        setEndDate: searchDate.setEndDate,
        room: roomGuest.room,
        guest: roomGuest.guest,
        location_lat,
        location_lng
      })
    });
    router_default.a.push({
      pathname: `${constant["i" /* LISTING_POSTS_PAGE */]}`,
      query: query
    }, {
      pathname: `${constant["i" /* LISTING_POSTS_PAGE */]}`,
      query: query
    }, {
      shallow: true
    });
  };

  return SearchForm_jsx(FormWrapper, null, SearchForm_jsx(ComponentWrapper, null, SearchForm_jsx(fa_["FaMapMarkerAlt"], {
    className: "map-marker"
  }), SearchForm_jsx(MapAutoComplete["a" /* default */], {
    updatevalue: value => updatevalueFunc(value)
  }), SearchForm_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 144.083 144",
    enableBackground: "new 0 0 144.083 144",
    className: "target"
  }, SearchForm_jsx("path", {
    d: "M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z"
  }), SearchForm_jsx("path", {
    d: "M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z"
  }))), SearchForm_jsx(ComponentWrapper, null, SearchForm_jsx(fa_["FaRegCalendar"], {
    className: "calendar"
  }), SearchForm_jsx(ReactDates["a" /* default */], {
    item: calendarItem,
    startDateId: "startDateId-id-home",
    endDateId: "endDateId-id-home",
    updateSearchData: setDateValue => setSearchDate(setDateValue),
    showClearDates: true,
    small: true,
    numberOfMonths: 1
  })), SearchForm_jsx(ComponentWrapper, null, SearchForm_jsx(fa_["FaUserFriends"], {
    className: "user-friends"
  }), SearchForm_jsx(ViewWithPopup["a" /* default */], {
    key: 200,
    noView: true,
    className: "room_guest",
    view: SearchForm_jsx(button_default.a, {
      type: "default"
    }, SearchForm_jsx("span", null, "Room ", roomGuest.room > 0 && `: ${roomGuest.room}`), SearchForm_jsx("span", null, "-"), SearchForm_jsx("span", null, "Guest", roomGuest.guest > 0 && `: ${roomGuest.guest}`)),
    popup: SearchForm_jsx(RoomGuestWrapper, null, SearchForm_jsx(ItemWrapper, null, SearchForm_jsx("strong", null, "Room"), SearchForm_jsx(InputIncDec["a" /* default */], {
      id: "room",
      increment: () => handleIncrement('room'),
      decrement: () => handleDecrement('room'),
      onChange: e => handleIncDecOnChnage(e, 'room'),
      value: roomGuest.room
    })), SearchForm_jsx(ItemWrapper, null, SearchForm_jsx("strong", null, "Guest"), SearchForm_jsx(InputIncDec["a" /* default */], {
      id: "guest",
      increment: () => handleIncrement('guest'),
      decrement: () => handleDecrement('guest'),
      onChange: e => handleIncDecOnChnage(e, 'guest'),
      value: roomGuest.guest
    })))
  })), SearchForm_jsx(button_default.a, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    onClick: goToSearchPage
  }, "Find Hotels"));
};

/* harmony default export */ var Search_SearchForm = (Object(router_["withRouter"])(SearchForm));
// EXTERNAL MODULE: ./assets/images/banner/1.jpg
var _1 = __webpack_require__("6nrt");
var _1_default = /*#__PURE__*/__webpack_require__.n(_1);

// EXTERNAL MODULE: ./assets/images/banner/2.jpg
var _2 = __webpack_require__("viIg");
var _2_default = /*#__PURE__*/__webpack_require__.n(_2);

// EXTERNAL MODULE: ./assets/images/banner/3.jpg
var _3 = __webpack_require__("bTsj");
var _3_default = /*#__PURE__*/__webpack_require__.n(_3);

// CONCATENATED MODULE: ./container/Home/Search/Search.js
var Search_jsx = external_react_default.a.createElement;

function Search_extends() { Search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Search_extends.apply(this, arguments); }







 // slider images





const HomeSearch = ({
  searchTitleStyle,
  searchDescriptionStyle
}) => {
  return Search_jsx(Search_style, null, Search_jsx(GlideCarousel_GlideCarousel, {
    controls: false,
    options: {
      gap: 0,
      autoplay: 5000,
      animationDuration: 1000
    },
    bullets: true,
    numberOfBullets: 3
  }, Search_jsx(external_react_default.a.Fragment, null, Search_jsx(GlideSlide, null, Search_jsx("img", {
    src: _1_default.a,
    alt: "Banner"
  })), Search_jsx(GlideSlide, null, Search_jsx("img", {
    src: _2_default.a,
    alt: "Banner"
  })), Search_jsx(GlideSlide, null, Search_jsx("img", {
    src: _3_default.a,
    alt: "Banner"
  })))), Search_jsx(Container["a" /* default */], null, Search_jsx(SearchWrapper, null, Search_jsx(Heading["a" /* default */], Search_extends({}, searchTitleStyle, {
    content: "Latest reviews. Lowest prices."
  })), Search_jsx(Text["a" /* default */], Search_extends({}, searchDescriptionStyle, {
    content: "compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you."
  })), Search_jsx(Search_SearchForm, null))));
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px'
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    mb: '30px'
  }
};
/* harmony default export */ var Search = (HomeSearch);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./components/Loader/Loader.js + 1 modules
var Loader = __webpack_require__("vg3h");

// CONCATENATED MODULE: ./components/ImageCard/ImageCard.style.js


const ImageCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ImageCardstyle__ImageCardWrapper",
  componentId: "autsop-0"
})(["> a{display:block;height:370px;position:relative;border-radius:6px;overflow:hidden;> img{width:100%;height:100%;object-fit:cover;position:absolute;left:0;top:0;}}"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ImageCardstyle__ContentWrapper",
  componentId: "autsop-1"
})(["position:absolute;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.4);z-index:2;"]);
const ImageCard_style_Title = external_styled_components_default.a.h4.withConfig({
  displayName: "ImageCardstyle__Title",
  componentId: "autsop-2"
})(["color:", ";font-size:25px;line-height:30px;font-weight:700;text-transform:capitalize;text-align:center;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:20px;line-height:28px;}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const Meta = external_styled_components_default.a.div.withConfig({
  displayName: "ImageCardstyle__Meta",
  componentId: "autsop-3"
})(["color:", ";font-size:17px;line-height:21px;font-weight:400;text-transform:capitalize;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:15px;}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ var ImageCard_style = (ImageCardWrapper);
// CONCATENATED MODULE: ./components/ImageCard/ImageCard.js
var ImageCard_jsx = external_react_default.a.createElement;




const ImageCardNext = ({
  className,
  imageSrc,
  title,
  link,
  meta
}) => {
  const addAllClasses = ['image_card'];
  const pathLink = title.replace(/\s/g, '-');

  if (className) {
    addAllClasses.push(className);
  }

  return ImageCard_jsx(ImageCard_style, {
    className: addAllClasses.join(' ')
  }, ImageCard_jsx(link_default.a, {
    href: {
      pathname: `${link}`,
      query: {
        country: `${pathLink}`
      }
    }
  }, ImageCard_jsx("a", null, ImageCard_jsx("img", {
    src: imageSrc,
    alt: title,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }), ImageCard_jsx(ContentWrapper, null, title && ImageCard_jsx(ImageCard_style_Title, null, title), meta && ImageCard_jsx(Meta, null, meta)))));
};

ImageCardNext.defaultProps = {
  link: '#'
};
/* harmony default export */ var ImageCard = (ImageCardNext);
// CONCATENATED MODULE: ./container/Home/Location/Location.style.js


const LocationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Locationstyle__LocationWrapper",
  componentId: "sc-8cwnh4-0"
})(["padding:52px 0;@media only screen and (max-width:480px){padding:30px 0;}"]);
const CarouselSection = external_styled_components_default.a.div.withConfig({
  displayName: "Locationstyle__CarouselSection",
  componentId: "sc-8cwnh4-1"
})([".react-multi-carousel-list{.react-multi-carousel-item{padding:0 10px;transition:transform 0.3s ease;.image_card{> a{@media only screen and (max-width:1600px){height:310px;}@media only screen and (max-width:991px){height:280px;}}}}.react-multiple-carousel__arrow{opacity:0;visibility:hidden;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";box-shadow:0 3px 6px ", ";transition:background-color 0.2s ease;&::before{color:", ";}&:hover{background-color:", ";&::before{color:", ";}}}&:hover{.react-multiple-carousel__arrow{opacity:1;visibility:visible;}}.react-multiple-carousel__arrow--left{left:30px;}.react-multiple-carousel__arrow--right{right:30px;}}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ var Location_style = (LocationWrapper);
// CONCATENATED MODULE: ./container/Home/Location/Location.js
var Location_jsx = external_react_default.a.createElement;


 // import 'react-multi-carousel/lib/styles.css';









const LocationGrid = ({
  data,
  deviceType
}) => {
  return Location_jsx(Location_style, null, Location_jsx(Container["a" /* default */], {
    fluid: true
  }, Location_jsx(components_SectionTitle_SectionTitle, {
    title: Location_jsx(Heading["a" /* default */], {
      content: "Explore Destinations"
    }),
    link: Location_jsx(link_default.a, {
      href: `${constant["i" /* LISTING_POSTS_PAGE */]}`
    }, Location_jsx("a", null, "Show all"))
  }), Location_jsx(CarouselSection, null, data.length !== 0 ? Location_jsx(external_react_multi_carousel_default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 5
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 3
      }
    },
    deviceType: deviceType,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1
  }, data.map((post, index) => Location_jsx(ImageCard, {
    key: index,
    imageSrc: post.locationImage.url,
    title: post.city,
    meta: `${post.numberOfPost} Hotels`,
    link: constant["i" /* LISTING_POSTS_PAGE */]
  }))) : Location_jsx(Loader["a" /* default */], null))));
};

/* harmony default export */ var Location = (LocationGrid);
// EXTERNAL MODULE: ./components/SectionGrid/SectionGrid.js + 2 modules
var SectionGrid = __webpack_require__("YG1B");

// EXTERNAL MODULE: ./library/helpers/get_api_data.js
var get_api_data = __webpack_require__("k8oj");

// EXTERNAL MODULE: ./settings/config.js
var config = __webpack_require__("jorE");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;











function HomePage(props) {
  let limit;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "TripFinder. | A react next listing template")), pages_jsx(Search, null), pages_jsx(Location, {
    data: props.locationData
  }), pages_jsx(Container["a" /* default */], {
    fluid: true
  }, pages_jsx(components_SectionTitle_SectionTitle, {
    title: pages_jsx(Heading["a" /* default */], {
      content: "Travelers\u2019 Choice: Top hotels"
    }),
    link: pages_jsx(link_default.a, {
      href: constant["i" /* LISTING_POSTS_PAGE */]
    }, pages_jsx("a", null, "Show all"))
  }), pages_jsx(SectionGrid["a" /* default */], {
    link: constant["n" /* SINGLE_POST_PAGE */],
    columnWidth: config["a" /* HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH */],
    data: props.topHotelData.slice(0, limit),
    limit: limit
  }), pages_jsx(components_SectionTitle_SectionTitle, {
    title: pages_jsx(Heading["a" /* default */], {
      content: "Best Rated: Luxary hotels"
    }),
    link: pages_jsx(link_default.a, {
      href: constant["i" /* LISTING_POSTS_PAGE */]
    }, pages_jsx("a", null, "Show all"))
  }), pages_jsx(SectionGrid["a" /* default */], {
    link: constant["n" /* SINGLE_POST_PAGE */],
    columnWidth: config["a" /* HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH */],
    data: props.luxaryHotelData.slice(0, limit),
    limit: limit
  })));
}
async function getStaticProps() {
  const apiUrl = [{
    endpoint: 'hotel',
    name: 'luxaryHotelData'
  }, {
    endpoint: 'top-hotel',
    name: 'topHotelData'
  }, {
    endpoint: 'location',
    name: 'locationData'
  }];
  const pageData = await Object(get_api_data["e" /* default */])(apiUrl);
  let locationData = [],
      topHotelData = [],
      luxaryHotelData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      } else if (item.name === 'topHotelData') {
        topHotelData = item.data ? [...item.data] : [];
      } else if (item.name === 'luxaryHotelData') {
        luxaryHotelData = item.data ? [...item.data] : [];
      }
    });
  }

  return {
    props: {
      locationData,
      topHotelData,
      luxaryHotelData
    }
  };
}

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

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

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

/***/ "bTsj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-e6f6cc3684b3722342cc3cbed9fed797.jpg";

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

/***/ "n3ZG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NnCY");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Tpg");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8+2T");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(props => {
  const {
    getinputvalue
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchedLocation: '',
    searchedPlaceAPIData: []
  });

  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});

  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
    getinputvalue(locationInput);
  };

  return __jsx("div", {
    className: "map_autocomplete"
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MapAutoComplete);

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

/***/ "viIg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-2dd5cca27e45e981dda0d27fae543bfd.jpg";

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