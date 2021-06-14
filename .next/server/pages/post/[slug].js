module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Cjh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/post-image-2-3e63c0907397ece7f1f7c5da7817cc7f.jpg";

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

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "32bR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TfTO");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const DraggerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "DragAndDropUploader__DraggerWrapper",
  componentId: "dtmn58-0"
})([""]);
const {
  Dragger
} = antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a;
const photos = [{
  uid: '1',
  name: 'hotel-1.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
}, {
  uid: '2',
  name: 'hotel-2.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
}, {
  uid: '3',
  name: 'hotel-3.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
}];

const DragAndDropUploader = ({
  onUploadChange
}) => {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    defaultFileList: photos,

    onChange(info) {
      const {
        status
      } = info.file;

      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        onUploadChange(info.fileList);
      }

      if (status === 'done') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success(`${info.file.name} photo uploaded successfully.`);
      } else if (status === 'error') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error(`${info.file.name} photo upload failed.`);
      }
    }

  };
  return __jsx(DraggerWrapper, {
    className: "drag_and_drop_uploader"
  }, __jsx(Dragger, _extends({}, props, {
    className: "uploader"
  }), __jsx("div", {
    className: "ant-upload-drag-icon"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosCloudUpload"], null)), __jsx("p", {
    className: "ant-upload-text"
  }, "Drag & drop to your image assets or browse")));
};

/* harmony default export */ __webpack_exports__["a"] = (DragAndDropUploader);

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

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

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("U1TB");


/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "A1cq":
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "ADye":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/post-thumb-2-ed954bef5d70b0dcf0cdb94450df407e.jpg";

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

/***/ "EUXc":
/***/ (function(module, exports) {

module.exports = require("antd/lib/rate");

/***/ }),

/***/ "EiND":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/LikeOutlined");

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

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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

/***/ "TBIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/UI/HtmlLabel/HtmlLabel.js
var HtmlLabel = __webpack_require__("VRlB");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/UI/FormControl/FormControl.style.js


const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "FormControlstyle__Wrapper",
  componentId: "n7afmm-0"
})(["margin-bottom:24px;.field-label{display:block;color:", ";font-size:15px;line-height:18px;font-weight:600;margin-bottom:15px;}.ant-input,.ant-picker,.ant-input-number,.ant-input-password{width:100%;min-height:48px;border-radius:3px;border-color:", ";&:focus,&.ant-input-focused,&.ant-picker-focused,&.ant-input-number-focused,&.ant-input-password-focused{box-shadow:0 0 0 1px rgba(0,132,137,0.2);}}.ant-checkbox-wrapper{.ant-checkbox{+ span{font-size:15px;font-weight:700;color:", ";line-height:1;}.ant-checkbox-inner{border-radius:0;border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}}}}.ant-input-number{max-width:100px;.ant-input-number-input{min-height:48px;}&:hover{border-color:", ";}}.ant-input-number-handler:hover{.ant-input-number-handler-up-inner,.ant-input-number-handler-down-inner{color:", ";}}.ant-picker{&:hover{border-color:", ";}}.ant-select{&.ant-select-single:not(.ant-select-customize-input){width:100%;.ant-select-selector{border-radius:3px;border-color:", ";min-height:48px;.ant-select-selection-search-input{min-height:48px;}.ant-select-selection-item{display:flex;align-items:center;}}}&.ant-select-focused{&.ant-select-single:not(.ant-select-customize-input){.ant-select-selector{box-shadow:0 0 0 1px rgba(0,132,137,0.2);}}}}&.has-error{.ant-input,.ant-input-password{border-color:", ";}.feedback{color:", ";}.ant-input-password{.ant-input{border-color:transparent;}}}.ant-input-password{.ant-input{min-height:auto;border-radius:initial;border-color:transparent;&:focus{box-shadow:none;}}}.ant-radio-group-solid{.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border-color:", ";background-color:", ";&::before{content:none;}&:hover{color:#fff;&::before{content:none;}}}.ant-radio-button-wrapper{&:hover{color:", ";}}}button[type='submit']{border-radius:3px;height:47px;border-color:", ";background-color:", ";font-size:15px;font-weight:700;text-transform:capitalize;padding-left:28px;padding-right:28px;line-height:1;&::after{content:none;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('error.0', '#F9503D'), Object(theme_get_["themeGet"])('error.0', '#F9503D'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var FormControl_style = (Wrapper);
// CONCATENATED MODULE: ./components/UI/FormControl/FormControl.js
var __jsx = external_react_default.a.createElement;




const FormControl = ({
  className,
  label,
  labelTag,
  htmlFor,
  children,
  error
}) => {
  const addAllClasses = ['form-control'];

  if (error) {
    addAllClasses.push('has-error');
  }

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(FormControl_style, {
    className: addAllClasses.join(' ')
  }, label && __jsx(HtmlLabel["a" /* default */], {
    className: "field-label",
    as: labelTag,
    htmlFor: htmlFor,
    content: label
  }), children, error && __jsx("div", {
    className: "feedback"
  }, error));
};

/* harmony default export */ var FormControl_FormControl = __webpack_exports__["a"] = (FormControl);

/***/ }),

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),

/***/ "TkFD":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/DislikeFilled");

/***/ }),

/***/ "U1TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ SinglePostPage; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__("4Qn9");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./components/UI/Container/Container.js
var Container = __webpack_require__("vVAh");

// EXTERNAL MODULE: ./components/Loader/Loader.js + 1 modules
var Loader = __webpack_require__("vg3h");

// EXTERNAL MODULE: ./library/helpers/get_device_type.js
var get_device_type = __webpack_require__("/3/v");

// EXTERNAL MODULE: ./library/helpers/get_api_data.js
var get_api_data = __webpack_require__("k8oj");

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: ./components/UI/Rating/Rating.js
var Rating = __webpack_require__("y4c0");

// EXTERNAL MODULE: ./components/UI/Heading/Heading.js
var Heading = __webpack_require__("ZiTp");

// EXTERNAL MODULE: ./components/UI/Text/Text.js
var Text = __webpack_require__("Fq9I");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./container/SinglePage/Description/Description.style.js


const DescriptionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Descriptionstyle__DescriptionWrapper",
  componentId: "eyi4r4-0"
})(["padding:0 0 29px;button{font-size:15px;font-weight:700;border:0;padding:0;height:auto;line-height:1;box-shadow:none;text-shadow:none;color:", ";&:hover,&:focus{color:", ";}&::after{content:none;}}"], Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ var Description_style = (DescriptionWrapper);
// EXTERNAL MODULE: ./assets/images/single-post-bg.jpg
var single_post_bg = __webpack_require__("gEPn");
var single_post_bg_default = /*#__PURE__*/__webpack_require__.n(single_post_bg);

// CONCATENATED MODULE: ./container/SinglePage/SinglePageView.style.js



const SinglePageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__SinglePageWrapper",
  componentId: "sc-85oqlx-0"
})(["padding-bottom:56px;@media only screen and (max-width:667px){padding-bottom:0;}"]);
const LocationMeta = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__LocationMeta",
  componentId: "sc-85oqlx-1"
})(["color:", ";font-size:13px;font-weight:400;"], Object(theme_get_["themeGet"])('text.1', '#909090'));
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "SinglePageViewstyle__Title",
  componentId: "sc-85oqlx-2"
})(["color:", ";font-size:25px;line-height:34px;font-weight:700;margin:0 0 4px;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const RatingMeta = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__RatingMeta",
  componentId: "sc-85oqlx-3"
})(["display:flex;align-items:center;color:", ";font-size:13px;margin-top:10px;margin-bottom:27px;@media only screen and (max-width:767px){margin-bottom:20px;}i{color:", ";}svg{fill:", ";}strong{font-weight:700;margin-left:8px;margin-top:-2px;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const SinglePageView_style_Text = external_styled_components_default.a.p.withConfig({
  displayName: "SinglePageViewstyle__Text",
  componentId: "sc-85oqlx-4"
})(["color:", ";font-size:15px;line-height:24px;font-weight:400;margin:0 0 30px;&:last-child{margin-bottom:0;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const TextButton = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__TextButton",
  componentId: "sc-85oqlx-5"
})(["margin:30px 0 0;@media only screen and (max-width:767px){margin-top:19px;}"]);
const TobBarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__TobBarWrapper",
  componentId: "sc-85oqlx-6"
})([".sticky-outer-wrapper{.sticky-inner-wrapper{background-color:", ";.scrollbar{box-shadow:none;border-top:1px solid ", ";border-bottom:1px solid ", ";.scrollbar_left{margin-right:25px;padding-left:25px;a{color:", ";font-size:15px;padding:28px 20px;text-transform:capitalize;transition:color 0.2s ease-in-out;&:first-child{padding-left:0;}@media only screen and (max-width:1200px){padding:18px 20px;}&:hover{color:", ";}&.active{font-weight:700;color:", ";border-bottom:3px solid ", ";}}}.scrollbar_right{padding-right:25px;button,.ant-btn{@media only screen and (max-width:767px){min-width:50px;svg{margin-right:0;}> span{display:none;}}}}}}&.isSticky{.sticky-inner-wrapper{> div{border-bottom:0;box-shadow:0 2px 5px -2px rgba(0,0,0,0.16);}}}}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__ButtonGroup",
  componentId: "sc-85oqlx-7"
})(["button,button.ant-btn{margin:0 5px;height:37px;min-width:90px;padding:0 5px;border:1px solid ", ";color:", ";font-size:15px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;transition:background-color 0.2s ease;svg{width:18.309px;height:15.537px;margin-right:10px;path{fill:transparent;stroke:", ";stroke-width:1.5px;}}&.active{svg{path{stroke:", ";fill:", ";}}}&:focus{outline:none;}&:hover{background-color:", ";}&:after{display:none;}&:first-child{margin-left:0;svg{position:relative;top:1px;path{stroke-width:1.8px;}}}&:last-child{margin-right:0;}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.4', '#FC5C63'), Object(theme_get_["themeGet"])('color.4', '#FC5C63'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'));
const PostImage = external_styled_components_default.a.div.withConfig({
  displayName: "SinglePageViewstyle__PostImage",
  componentId: "sc-85oqlx-8"
})(["background-image:url(", ");background-position:center center;background-size:cover;height:600px;position:relative;@media only screen and (max-width:767px){height:406px;}.image_gallery_button{background:", ";border-radius:3px;font-size:15px;font-weight:700;color:#2c2c2c;border:0;height:37px;box-shadow:0 3px 6px rgba(0,0,0,0.16);position:absolute;bottom:30px;right:25px;&:hover,&:focus{background:", ";color:", ";}}"], single_post_bg_default.a, Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
/* harmony default export */ var SinglePageView_style = (SinglePageWrapper);
// CONCATENATED MODULE: ./container/SinglePage/Description/Description.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Description = ({
  title,
  location,
  content,
  rating,
  ratingCount,
  titleStyle,
  locationMetaStyle,
  contentStyle,
  linkStyle
}) => {
  return __jsx(external_react_scroll_["Element"], {
    name: "overview",
    className: "overview"
  }, __jsx(Description_style, null, __jsx(Text["a" /* default */], _extends({
    content: location.formattedAddress
  }, locationMetaStyle)), __jsx(Heading["a" /* default */], _extends({
    as: "h2",
    content: title
  }, titleStyle)), __jsx(RatingMeta, null, __jsx(Rating["a" /* default */], {
    rating: rating,
    ratingCount: ratingCount,
    type: "bulk"
  })), __jsx(Text["a" /* default */], _extends({
    content: content
  }, contentStyle)), __jsx(TextButton, null, __jsx(button_default.a, null, "Read more about the hotel"))));
};

Description.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px'
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090'
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6'
  }
};
/* harmony default export */ var Description_Description = (Description);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./components/IconCard/IconCard.style.js


const IconCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "IconCardstyle__IconCardWrapper",
  componentId: "sc-1hru2zv-0"
})(["border-radius:4px;padding:38px 36px 30px;background-color:", ";margin-bottom:20px;text-align:", ";@media only screen and (max-width:480px){padding:28px 20px 25px;}"], Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), props => props.align ? props.align : 'center');
const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "IconCardstyle__IconWrapper",
  componentId: "sc-1hru2zv-1"
})(["svg{width:80px;height:auto;fill:", ";@media only screen and (max-width:767px){width:50px;}}"], Object(theme_get_["themeGet"])('primary.0', '#008489'));
const TitleArea = external_styled_components_default.a.div.withConfig({
  displayName: "IconCardstyle__TitleArea",
  componentId: "sc-1hru2zv-2"
})(["color:", ";font-size:15px;font-weight:400;margin-top:10px;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
/* harmony default export */ var IconCard_style = (IconCardWrapper);
// CONCATENATED MODULE: ./components/IconCard/IconCard.js
var IconCard_jsx = external_react_default.a.createElement;



const IconCard = ({
  icon,
  title,
  align,
  className
}) => {
  // Add all classs to an array
  const addAllClasses = ['icon_card']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return IconCard_jsx(IconCard_style, {
    className: addAllClasses.join(' '),
    align: align
  }, icon && IconCard_jsx(IconWrapper, null, icon), title && IconCard_jsx(TitleArea, null, title));
};

/* harmony default export */ var IconCard_IconCard = (IconCard);
// CONCATENATED MODULE: ./container/SinglePage/Amenities/Amenities.style.js

const AmenitiesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Amenitiesstyle__AmenitiesWrapper",
  componentId: "lrqjqm-0"
})(["padding:29px 0;.amenities_title{margin-bottom:30px;}a{&:hover{color:#31b8bd;}}"]);
const AmenitiesArea = external_styled_components_default.a.div.withConfig({
  displayName: "Amenitiesstyle__AmenitiesArea",
  componentId: "lrqjqm-1"
})(["display:flex;flex-wrap:wrap;width:100%;justify-content:space-between;margin-bottom:-15px;> div{width:calc(100% / 4 - 10px);@media only screen and (max-width:767px){width:calc(100% / 3 - 10px);margin-bottom:20px;}@media only screen and (max-width:580px){width:calc(100% / 2 - 10px);margin-bottom:20px;}}"]);
/* harmony default export */ var Amenities_style = (AmenitiesWrapper);
// CONCATENATED MODULE: ./container/SinglePage/Amenities/Amenities.js
var Amenities_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Amenities_extends() { Amenities_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Amenities_extends.apply(this, arguments); }










const Amenities = ({
  titleStyle,
  linkStyle
}) => {
  return Amenities_jsx(external_react_scroll_["Element"], {
    name: "amenities",
    className: "Amenities"
  }, Amenities_jsx(Amenities_style, null, Amenities_jsx(Heading["a" /* default */], Amenities_extends({
    as: "h2",
    content: "Amenities"
  }, titleStyle)), Amenities_jsx(AmenitiesArea, null, Amenities_jsx(IconCard_IconCard, {
    icon: Amenities_jsx(fa_["FaWifi"], null),
    title: "Free wifi"
  }), Amenities_jsx(IconCard_IconCard, {
    icon: Amenities_jsx(fa_["FaCarAlt"], null),
    title: "Free parking"
  }), Amenities_jsx(IconCard_IconCard, {
    icon: Amenities_jsx(fa_["FaSwimmer"], null),
    title: "Free pool"
  }), Amenities_jsx(IconCard_IconCard, {
    icon: Amenities_jsx(fa_["FaAirFreshener"], null),
    title: "Air Freshener"
  })), Amenities_jsx(TextButton, null, Amenities_jsx(link_default.a, {
    href: "#1"
  }, Amenities_jsx("a", {
    style: _objectSpread({}, linkStyle)
  }, "Show all amenities")))));
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px']
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489'
  }
};
/* harmony default export */ var Amenities_Amenities = (Amenities);
// CONCATENATED MODULE: ./container/SinglePage/Location/Location.style.js

const LocationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Locationstyle__LocationWrapper",
  componentId: "sc-1w0bp38-0"
})(["padding:29px 0;.location_meta{margin-bottom:29px;}a{&:hover{color:#31b8bd;}}"]);
/* harmony default export */ var Location_style = (LocationWrapper);
// EXTERNAL MODULE: ./components/Map/Map.js + 3 modules
var Map = __webpack_require__("j1/2");

// CONCATENATED MODULE: ./container/SinglePage/Location/Location.js
var Location_jsx = external_react_default.a.createElement;

function Location_extends() { Location_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Location_extends.apply(this, arguments); }








const Location = ({
  titleStyle,
  locationMetaStyle,
  contentStyle,
  boldContentStyle,
  linkStyle,
  location
}) => {
  const formattedAddress = location.formattedAddress;
  return Location_jsx(external_react_scroll_["Element"], {
    name: "location",
    className: "location"
  }, Location_jsx(Location_style, null, Location_jsx(Heading["a" /* default */], Location_extends({
    as: "h2",
    content: "Location"
  }, titleStyle)), Location_jsx(Text["a" /* default */], Location_extends({
    content: formattedAddress
  }, locationMetaStyle)), Location_jsx(Text["a" /* default */], Location_extends({
    content: "Take an easy walk to the main historic sites of the city. The neighborhood is perfect for an authentic taste of Roman life, with shops, art galleries, restaurants, bars, and clubs all nearby and ready to be discovered."
  }, contentStyle)), Location_jsx(Text["a" /* default */], Location_extends({
    content: "Distance from Leonardo da Vinci International Airport"
  }, contentStyle, boldContentStyle)), Location_jsx(Text["a" /* default */], Location_extends({
    content: "26 mins by car without traffic"
  }, contentStyle)), Location_jsx(Map["a" /* default */], {
    location: location,
    multiple: false
  })));
};

Location.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px'
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
    mb: ['14px', '20px', '27px']
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px']
  },
  boldContentStyle: {
    fontWeight: '700',
    mb: '0!important'
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489'
  }
};
/* harmony default export */ var Location_Location = (Location);
// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__("xZtu");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/DislikeOutlined"
var DislikeOutlined_ = __webpack_require__("UgrS");
var DislikeOutlined_default = /*#__PURE__*/__webpack_require__.n(DislikeOutlined_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/DislikeFilled"
var DislikeFilled_ = __webpack_require__("TkFD");
var DislikeFilled_default = /*#__PURE__*/__webpack_require__.n(DislikeFilled_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/LikeOutlined"
var LikeOutlined_ = __webpack_require__("EiND");
var LikeOutlined_default = /*#__PURE__*/__webpack_require__.n(LikeOutlined_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/LikeFilled"
var LikeFilled_ = __webpack_require__("Yuho");
var LikeFilled_default = /*#__PURE__*/__webpack_require__.n(LikeFilled_);

// CONCATENATED MODULE: ./components/UI/CommentCard/LikeDislike.js





var LikeDislike_jsx = external_react_default.a.createElement;

function LikeDislike_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function LikeDislike_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LikeDislike_ownKeys(Object(source), true).forEach(function (key) { LikeDislike_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LikeDislike_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LikeDislike_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const LikeDislike = () => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    likes: 0,
    dislikes: 0,
    action: null
  });

  const handleLike = () => {
    setState(LikeDislike_objectSpread(LikeDislike_objectSpread({}, state), {}, {
      likes: 1,
      dislikes: 0,
      action: 'liked'
    }));
  };

  const handleDisLike = () => {
    setState(LikeDislike_objectSpread(LikeDislike_objectSpread({}, state), {}, {
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    }));
  };

  return LikeDislike_jsx(external_react_["Fragment"], null, LikeDislike_jsx("span", {
    className: "comment-helpful"
  }, LikeDislike_jsx(tooltip_default.a, {
    title: "Like"
  }, state.action === 'liked' ? LikeDislike_jsx(LikeFilled_default.a, {
    onClick: handleLike
  }) : LikeDislike_jsx(LikeOutlined_default.a, {
    onClick: handleLike
  })), LikeDislike_jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    }
  }, state.likes)), LikeDislike_jsx("span", {
    className: "comment-report"
  }, LikeDislike_jsx(tooltip_default.a, {
    title: "Dislike"
  }, state.action === 'disliked' ? LikeDislike_jsx(DislikeFilled_default.a, {
    onClick: handleDisLike
  }) : LikeDislike_jsx(DislikeOutlined_default.a, {
    onClick: handleDisLike
  })), LikeDislike_jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    }
  }, state.dislikes)));
};

/* harmony default export */ var CommentCard_LikeDislike = (LikeDislike);
// CONCATENATED MODULE: ./components/UI/CommentCard/CommentCard.js

var CommentCard_jsx = external_react_default.a.createElement;




class CommentCard_App extends external_react_default.a.Component {
  render() {
    const {
      singleReview,
      authorRating
    } = this.props;
    const reviewAuthorFirstName = singleReview ? singleReview.reviewAuthorFirstName : '';
    const reviewAuthorLastName = singleReview ? singleReview.reviewAuthorLastName : '';
    const authorName = reviewAuthorFirstName + ' ' + reviewAuthorLastName;
    const content = singleReview ? singleReview.reviewText : '';
    const reviewTitle = singleReview ? singleReview.reviewTitle : '';
    const commentDate = singleReview ? singleReview.reviewDate : '';
    const postTime = new Date(commentDate).getTime();
    const authorAvatar = singleReview ? singleReview.reviewAuthorPic.url : '';
    const reviewRating = singleReview ? singleReview.reviewFields : '';
    return CommentCard_jsx("div", {
      className: "comment-area"
    }, CommentCard_jsx("div", {
      className: "comment-wrapper"
    }, CommentCard_jsx("div", {
      className: "comment-header"
    }, CommentCard_jsx("div", {
      className: "avatar-area"
    }, CommentCard_jsx("div", {
      className: "author-avatar"
    }, CommentCard_jsx("img", {
      src: authorAvatar,
      alt: authorName
    })), CommentCard_jsx("div", {
      className: "author-info"
    }, CommentCard_jsx("h3", {
      className: "author-name"
    }, authorName), authorRating && CommentCard_jsx("div", {
      className: "author-rating"
    }, authorRating), CommentCard_jsx("div", {
      className: "comment-date"
    }, CommentCard_jsx(popover_default.a, {
      placement: "bottom",
      content: external_moment_default()(commentDate).format('dddd, MMMM Do YYYY, h:mm:ss a')
    }, CommentCard_jsx("span", null, "Reviewd - ", external_moment_default()(postTime).fromNow()))))), CommentCard_jsx("div", {
      className: "rating-area"
    }, CommentCard_jsx(CommentCard_LikeDislike, null))), CommentCard_jsx("div", {
      className: "comment-body"
    }, CommentCard_jsx("h4", null, reviewTitle), CommentCard_jsx("p", null, content)), CommentCard_jsx("div", {
      className: "comment-rating"
    }, reviewRating && reviewRating.length !== 0 ? reviewRating.map((singleReviewRating, i) => {
      return CommentCard_jsx("div", {
        className: "rating-widget",
        key: i
      }, CommentCard_jsx(Rating["a" /* default */], {
        key: i,
        rating: singleReviewRating.rating,
        ratingFieldName: singleReviewRating.ratingFieldName,
        type: "individual"
      }));
    }) : '')));
  }

}
// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__("EUXc");
var rate_default = /*#__PURE__*/__webpack_require__.n(rate_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/UI/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__("TBIP");

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__("XQdj");
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: ./components/UI/RadioGroup/RadioGroup.js

var RadioGroup_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const RadioGroup = _ref => {
  let {
    options
  } = _ref,
      props = _objectWithoutProperties(_ref, ["options"]);

  return RadioGroup_jsx(radio_default.a.Group, props, options.map(item => RadioGroup_jsx(radio_default.a.Button, {
    key: `${item.value}-${item.id}`,
    value: item.value
  }, item.label)));
};

/* harmony default export */ var RadioGroup_RadioGroup = (RadioGroup);
// EXTERNAL MODULE: ./components/UI/ImageUploader/DragAndDropUploader.js
var DragAndDropUploader = __webpack_require__("32bR");

// CONCATENATED MODULE: ./container/SinglePage/Review/Review.style.js


const ReviewWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Reviewstyle__ReviewWrapper",
  componentId: "gckxqd-0"
})(["padding:29px 0;.ant-row{margin-bottom:-29px;> div{margin-bottom:29px;}}.comment-area{.comment-wrapper{padding:20px 0;.comment-header{width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;@media only screen and (max-width:480px){margin-bottom:18px;}.avatar-area{display:flex;align-items:center;.author-avatar{width:70px;height:70px;border-radius:50%;overflow:hidden;margin-right:20px;@media only screen and (max-width:480px){width:50px;height:50px;margin-right:10px;}img{width:100%;height:100%;object-fit:cover;}}.author-info{.author-name{color:", ";font-size:15px;font-weight:700;line-height:18px;@media only screen and (max-width:480px){margin:0 0 6px;}}.comment-date{color:", ";font-size:13px;line-height:16px;}}}.rating-area{> span{margin-right:15px;color:", ";&:last-child{margin-right:0;}}}}.comment-body{h4{color:", ";font-size:15px;font-weight:700;line-height:18px;margin-bottom:7px;@media only screen and (max-width:767px){line-height:26px;margin-bottom:10px;}}p{color:", ";font-size:15px;font-weight:400;line-height:24px;margin-bottom:19px;}}.comment-rating{display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:667px){flex-wrap:wrap;}@media only screen and (max-width:480px){flex-direction:column;align-items:flex-start;}.rating-widget{display:flex;align-items:center;@media only screen and (max-width:667px){margin:5px 0;}span{font-size:13px;font-weight:700;color:", ";margin-right:10px;@media only screen and (max-width:480px){min-width:80px;font-size:14px;}}svg{fill:", ";}}}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.2', '#777777'), Object(theme_get_["themeGet"])('text.2', '#777777'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const FilterElement = external_styled_components_default.a.div.withConfig({
  displayName: "Reviewstyle__FilterElement",
  componentId: "gckxqd-1"
})(["font-size:13px;color:", ";line-height:16px;margin:19px 0;&:last-child{margin-bottom:0;}.ant-checkbox-wrapper{width:100%;display:flex;align-items:center;.ant-checkbox{flex-shrink:0;.ant-checkbox-inner{border-radius:0;border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}}&::after{display:none;}}> span{&:last-child{display:flex;align-items:center;width:100%;}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const RatingWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "Reviewstyle__RatingWrapper",
  componentId: "gckxqd-2"
})(["display:inline-flex;align-items:center;flex:1;color:", ";"], Object(theme_get_["themeGet"])('primary.0', '#008489'));
const HeaderSection = external_styled_components_default.a.div.withConfig({
  displayName: "Reviewstyle__HeaderSection",
  componentId: "gckxqd-3"
})(["display:flex;align-items:center;justify-content:space-between;padding-bottom:25px;margin-bottom:30px;border-bottom:1px solid ", ";@media only screen and (max-width:736px){flex-direction:column;align-items:flex-start;justify-content:flex-start;}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'));
const RatingStatus = external_styled_components_default.a.div.withConfig({
  displayName: "Reviewstyle__RatingStatus",
  componentId: "gckxqd-4"
})(["display:flex;align-items:center;@media only screen and (max-width:736px){margin-bottom:15px;}i{font-size:18px;color:", ";position:relative;top:1px;}svg{width:21px;height:21px;fill:", ";margin-right:2px;position:relative;top:1px;}"], Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const RatingSearch = external_styled_components_default.a.div.withConfig({
  displayName: "Reviewstyle__RatingSearch",
  componentId: "gckxqd-5"
})(["display:flex;flex-wrap:wrap;.ant-input-search{width:calc(100% - 165px);margin-right:30px;.ant-input{color:", ";&::placeholder{color:", ";}}.ant-input-suffix{left:18px;right:auto;color:", ";}&:hover{border-color:", ";}}.ant-input-affix-wrapper:focus,.ant-input-affix-wrapper-focused{border-color:", ";box-shadow:0 0 0 1px rgba(0,132,137,0.2);}button{&.ant-btn{flex-shrink:0;&.ant-btn-primary{height:37px;min-width:133px;border-color:", ";background-color:", ";text-shadow:none;font-size:15px;font-weight:700;border-radius:3px;line-height:1;}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const Review_style_TextButton = external_styled_components_default.a.button.withConfig({
  displayName: "Reviewstyle__TextButton",
  componentId: "gckxqd-6"
})(["border:0;background-color:transparent;color:", ";font-size:13px;line-height:16px;font-weight:700;cursor:pointer;padding:0;display:inline-flex;align-items:center;svg{width:15px;height:15px;margin-left:4px;fill:", ";position:relative;top:1px;}&:hover,&:focus{outline:none;box-shadow:none;}"], Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const ModalTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "Reviewstyle__ModalTitle",
  componentId: "gckxqd-7"
})(["color:", ";font-size:25px;line-height:34px;font-weight:700;margin-bottom:40px;@media only screen and (max-width:1260px){font-size:22px;line-height:32px;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const Label = external_styled_components_default.a.h3.withConfig({
  displayName: "Reviewstyle__Label",
  componentId: "gckxqd-8"
})(["color:", ";font-size:15px;line-height:18px;margin-bottom:30px;@media only screen and (max-width:480px){font-size:14px;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const GroupTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "Reviewstyle__GroupTitle",
  componentId: "gckxqd-9"
})(["color:", ";font-size:22px;line-height:1.2;font-weight:700;margin-bottom:10px;@media only screen and (max-width:767px){font-size:18px;}span{color:", ";font-weight:400;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'));
const Review_style_Description = external_styled_components_default.a.p.withConfig({
  displayName: "Reviewstyle__Description",
  componentId: "gckxqd-10"
})(["color:", ";font-size:15px;line-height:18px;font-weight:400;@media only screen and (max-width:767px){line-height:24px;}@media only screen and (max-width:480px){font-size:14px;}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const Form = external_styled_components_default.a.form.withConfig({
  displayName: "Reviewstyle__Form",
  componentId: "gckxqd-11"
})([".form-control{margin-bottom:30px;&.radio-group-area{.ant-row{@media only screen and (max-width:991px){flex-direction:column;margin-bottom:30px;h3{font-weight:700;margin-bottom:15px;}}}}}.optional-section{margin-top:50px;margin-bottom:35px;}.drag_and_drop_uploader{.ant-upload{min-height:197px;&.ant-upload-drag{border-color:", ";background-color:", ";&:hover{border-color:", ";}.ant-upload-drag-icon{font-size:48px;line-height:1;margin-bottom:0;color:", ";}.ant-upload-text{margin-bottom:0;font-size:17px;color:", ";font-weight:700;line-height:34px;span{text-decoration:underline;}}}}.ant-upload-list{padding-top:15px;.ant-upload-list-item{height:40px;margin-top:0;line-height:50px;&.ant-upload-list-item-done{.ant-upload-list-item-info{a{color:", ";}}}.ant-upload-list-item-info{font-size:15px;font-weight:600;border-radius:3px;.anticon-paper-clip{font-size:15px;top:12px;}}&:hover{.ant-upload-list-item-info{background-color:", ";}}.ant-upload-list-item-card-actions{font-size:15px;top:-5px;}}}}.ant-checkbox-wrapper{.ant-checkbox{+ span{font-weight:400;}}}.submit-container{margin-top:40px;margin-bottom:0;}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'));
/* harmony default export */ var Review_style = (ReviewWrapper);
// CONCATENATED MODULE: ./container/SinglePage/Review/ReviewForm.js






var ReviewForm_jsx = external_react_default.a.createElement;







const ReviewForm = () => {
  const {
    control,
    register,
    errors,
    setValue,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])({
    mode: 'onChange',
    defaultValues: {
      reviewPhotos: [{
        uid: '1',
        name: 'hotel-1.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }, {
        uid: '2',
        name: 'hotel-2.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }, {
        uid: '3',
        name: 'hotel-3.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    }
  });
  Object(external_react_["useEffect"])(() => {
    register({
      name: 'reviewPhotos'
    });
  }, [register]);

  const onSubmit = data => {
    console.log(data);
  };

  return ReviewForm_jsx(Form, {
    onSubmit: handleSubmit(onSubmit)
  }, ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Overall Rating",
    htmlFor: "ratings",
    error: errors.ratings && ReviewForm_jsx("span", null, "This field is required!")
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(rate_default.a, null),
    id: "ratings",
    name: "ratings",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    }
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Title of your review",
    htmlFor: "reviewTitle",
    error: errors.reviewTitle && ReviewForm_jsx("span", null, "This field is required!")
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(input_default.a, null),
    id: "reviewTitle",
    name: "reviewTitle",
    defaultValue: "",
    control: control,
    placeholder: "Summarize your visit  or highlight an interesting details",
    rules: {
      required: true
    }
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Details of your review",
    htmlFor: "reviewDetails",
    error: errors.reviewDetails && ReviewForm_jsx("span", null, "This field is required!")
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(input_default.a.TextArea, {
      rows: 5
    }),
    id: "reviewDetails",
    name: "reviewDetails",
    defaultValue: "",
    control: control,
    placeholder: "Tell people about your experience: your room, location, amenities?",
    rules: {
      required: true
    }
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    label: "What Sort of trip was this?",
    htmlFor: "tripType",
    error: errors.tripType && ReviewForm_jsx("span", null, "This field is required!")
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "tripType",
    name: "tripType",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    size: "large",
    options: [{
      label: 'Business',
      value: 'business'
    }, {
      label: 'Couples',
      value: 'couple'
    }, {
      label: 'Family',
      value: 'family'
    }, {
      label: 'Friends',
      value: 'friend'
    }, {
      label: 'Solo',
      value: 'solo'
    }],
    onChange: ([e]) => {
      return e.target.value;
    },
    rules: {
      required: true
    }
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    className: "optional-section"
  }, ReviewForm_jsx(GroupTitle, null, "Could You Say a Little More About It? ", ReviewForm_jsx("span", null, "(optional)")), ReviewForm_jsx(Review_style_Description, null, "We'd love your opinion ! Anything you can share will help other travelers choose their perfect hotel . Thanks")), ReviewForm_jsx(FormControl["a" /* default */], {
    className: "radio-group-area"
  }, ReviewForm_jsx(row_default.a, null, ReviewForm_jsx(col_default.a, {
    lg: 8
  }, ReviewForm_jsx(Label, null, "Is this a quaint hotel?")), ReviewForm_jsx(col_default.a, {
    lg: 16
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "quaint",
    name: "quaint",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }, {
      label: 'Not Sure',
      value: 'not-sure'
    }],
    onChange: ([e]) => {
      return e.target.value;
    }
  }))), ReviewForm_jsx(row_default.a, null, ReviewForm_jsx(col_default.a, {
    lg: 8
  }, ReviewForm_jsx(Label, null, "Does this hotel offer rooms with great views?")), ReviewForm_jsx(col_default.a, {
    lg: 16
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "roomViews",
    name: "roomViews",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }, {
      label: 'Not Sure',
      value: 'not-sure'
    }],
    onChange: ([e]) => {
      return e.target.value;
    }
  }))), ReviewForm_jsx(row_default.a, null, ReviewForm_jsx(col_default.a, {
    lg: 8
  }, ReviewForm_jsx(Label, null, "Does this hotel have an indoor pool?")), ReviewForm_jsx(col_default.a, {
    lg: 16
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "indoorPool",
    name: "indoorPool",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }, {
      label: 'Not Sure',
      value: 'not-sure'
    }],
    onChange: ([e]) => {
      return e.target.value;
    }
  }))), ReviewForm_jsx(row_default.a, null, ReviewForm_jsx(col_default.a, {
    lg: 8
  }, ReviewForm_jsx(Label, null, "Is this a trendy hotel?")), ReviewForm_jsx(col_default.a, {
    lg: 16
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "isTrendy",
    name: "isTrendy",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }, {
      label: 'Not Sure',
      value: 'not-sure'
    }],
    onChange: ([e]) => {
      return e.target.value;
    }
  }))), ReviewForm_jsx(row_default.a, null, ReviewForm_jsx(col_default.a, {
    lg: 8
  }, ReviewForm_jsx(Label, null, "Is this a romantic hotel?")), ReviewForm_jsx(col_default.a, {
    lg: 16
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(RadioGroup_RadioGroup, null),
    id: "isRomantic",
    name: "isRomantic",
    defaultValue: "",
    control: control,
    buttonStyle: "solid",
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: 'No',
      value: 'no'
    }, {
      label: 'Not Sure',
      value: 'not-sure'
    }],
    onChange: ([e]) => {
      return e.target.value;
    }
  })))), ReviewForm_jsx(row_default.a, {
    type: "flex",
    justify: "space-between"
  }, ReviewForm_jsx(col_default.a, null, ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Service",
    htmlFor: "serviceRatings"
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(rate_default.a, null),
    id: "serviceRatings",
    name: "serviceRatings",
    defaultValue: "",
    control: control
  }))), ReviewForm_jsx(col_default.a, null, ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Rooms",
    htmlFor: "roomsRatings"
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(rate_default.a, null),
    id: "roomsRatings",
    name: "roomsRatings",
    defaultValue: "",
    control: control
  }))), ReviewForm_jsx(col_default.a, null, ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Cleanliness",
    htmlFor: "cleanlinessRatings"
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(rate_default.a, null),
    id: "cleanlinessRatings",
    name: "cleanlinessRatings",
    defaultValue: "",
    control: control
  }))), ReviewForm_jsx(col_default.a, null, ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Food",
    htmlFor: "foodRatings"
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(rate_default.a, null),
    id: "foodRatings",
    name: "foodRatings",
    defaultValue: "",
    control: control
  })))), ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Add a tip to help travelers choose a good room",
    htmlFor: "tips"
  }, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    as: ReviewForm_jsx(input_default.a, null),
    id: "tips",
    name: "tips",
    defaultValue: "",
    control: control,
    placeholder: "E. g. Best views, quieter floors, accessiblity, etc."
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    label: "Do You have photos to share? (Optional)"
  }, ReviewForm_jsx(DragAndDropUploader["a" /* default */], {
    name: "reviewPhotos",
    onUploadChange: data => setValue('hotelPhotos', data)
  })), ReviewForm_jsx(FormControl["a" /* default */], null, ReviewForm_jsx(external_react_hook_form_["Controller"], {
    name: "termsAndCondition",
    onChange: ([e]) => {
      return e.target.checked;
    },
    as: ReviewForm_jsx(checkbox_default.a, null, "I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that TripFinder has a zero-tolerance policy on fake reviews."),
    control: control
  })), ReviewForm_jsx(FormControl["a" /* default */], {
    className: "submit-container"
  }, ReviewForm_jsx(button_default.a, {
    htmlType: "submit",
    type: "primary",
    size: "large"
  }, "Submit Your Review")));
};

/* harmony default export */ var Review_ReviewForm = (ReviewForm);
// CONCATENATED MODULE: ./container/SinglePage/Review/Review.js







var Review_jsx = external_react_default.a.createElement;

function Review_extends() { Review_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Review_extends.apply(this, arguments); }

function Review_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Review_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Review_ownKeys(Object(source), true).forEach(function (key) { Review_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Review_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Review_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Search = input_default.a.Search;

const CommentBox = props => {
  const {
    reviews
  } = props;
  return reviews && reviews.length !== 0 ? reviews.map((singleReview, i) => {
    return Review_jsx(external_react_["Fragment"], {
      key: i
    }, Review_jsx(divider_default.a, null), Review_jsx(CommentCard_App, {
      singleReview: singleReview
    }));
  }) : 'No Review Found';
};

const Review = props => {
  const {
    ratingCount,
    reviews,
    statusHeadingStyle,
    filterHeadingStyle,
    ratingLabelStyle,
    ratingCountStyle
  } = props;
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    review: false,
    language: false
  });

  const handleModalOpen = key => {
    setState(Review_objectSpread(Review_objectSpread({}, state), {}, {
      [key]: true
    }));
  };

  const handleModalClose = key => {
    setState(Review_objectSpread(Review_objectSpread({}, state), {}, {
      [key]: false
    }));
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return Review_jsx(external_react_scroll_["Element"], {
    name: "reviews",
    className: "reviews"
  }, Review_jsx(Review_style, null, Review_jsx(HeaderSection, null, Review_jsx(RatingStatus, null, Review_jsx(Heading["a" /* default */], Review_extends({
    content: `${ratingCount} Reviews`
  }, statusHeadingStyle)), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null)), Review_jsx(RatingSearch, null, Review_jsx(Search, {
    placeholder: "Search reviews",
    onSearch: value => console.log(value)
  }), Review_jsx(button_default.a, {
    type: "primary",
    onClick: () => handleModalOpen('review')
  }, "Write a Review"), Review_jsx(modal_default.a, {
    visible: state.review,
    onCancel: () => handleModalClose('review'),
    footer: null,
    width: "100%",
    maskStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    wrapClassName: "review_modal"
  }, Review_jsx(ModalTitle, null, "Write your review here"), Review_jsx(Review_ReviewForm, null)))), Review_jsx(row_default.a, {
    gutter: 20
  }, Review_jsx(col_default.a, {
    sm: 12,
    lg: 9
  }, Review_jsx(Heading["a" /* default */], Review_extends({
    content: "Traveler Ratings"
  }, filterHeadingStyle)), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Exccellent",
    as: "span"
  }, ratingLabelStyle)), Review_jsx(RatingWrapper, null, Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(Text["a" /* default */], Review_extends({
    content: "172",
    as: "span"
  }, ratingCountStyle))))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Very Good",
    as: "span"
  }, ratingLabelStyle)), Review_jsx(RatingWrapper, null, Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(Text["a" /* default */], Review_extends({
    content: "92",
    as: "span"
  }, ratingCountStyle))))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Average",
    as: "span"
  }, ratingLabelStyle)), Review_jsx(RatingWrapper, null, Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(Text["a" /* default */], Review_extends({
    content: "34",
    as: "span"
  }, ratingCountStyle))))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Poor",
    as: "span"
  }, ratingLabelStyle)), Review_jsx(RatingWrapper, null, Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStar"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(io_["IoIosStarOutline"], null), Review_jsx(Text["a" /* default */], Review_extends({
    content: "11",
    as: "span"
  }, ratingCountStyle)))))), Review_jsx(col_default.a, {
    sm: 12,
    lg: 5
  }, Review_jsx(Heading["a" /* default */], Review_extends({
    content: "Traveler Type"
  }, filterHeadingStyle)), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Families",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Couples",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Solo",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Business",
    as: "span"
  }, ratingLabelStyle))))), Review_jsx(col_default.a, {
    sm: 12,
    lg: 5
  }, Review_jsx(Heading["a" /* default */], Review_extends({
    content: "Time Of Year"
  }, filterHeadingStyle)), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Jan-Mar",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Apr-Jun",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Jul-Sep",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Oct-Dec",
    as: "span"
  }, ratingLabelStyle))))), Review_jsx(col_default.a, {
    sm: 12,
    lg: 5
  }, Review_jsx(Heading["a" /* default */], Review_extends({
    content: "Languages"
  }, filterHeadingStyle)), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "All Languages",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "English",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Spanish",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(Review_style_TextButton, {
    onClick: () => handleModalOpen('language')
  }, "More Language ", Review_jsx(io_["IoIosArrowDown"], null)), Review_jsx(modal_default.a, {
    width: 320,
    visible: state.language,
    onCancel: () => handleModalClose('language'),
    footer: null,
    maskStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    wrapClassName: "language_modal"
  }, Review_jsx(Heading["a" /* default */], Review_extends({
    content: "Languages"
  }, filterHeadingStyle)), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "All Languages",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "English",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Chinese (Sim.)",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Chinese (Trad.)",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Spanish",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "German",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Italian",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "French",
    as: "span"
  }, ratingLabelStyle)))), Review_jsx(FilterElement, null, Review_jsx(checkbox_default.a, {
    onChange: onChange
  }, Review_jsx(Text["a" /* default */], Review_extends({
    content: "Russian",
    as: "span"
  }, ratingLabelStyle))))))), Review_jsx(CommentBox, {
    reviews: reviews
  })));
};

Review.defaultProps = {
  statusHeadingStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    mr: '10px'
  },
  filterHeadingStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '1.2',
    mb: '0.5em'
  },
  ratingLabelStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    flex: '1'
  },
  ratingCountStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    ml: '8px'
  }
};
/* harmony default export */ var Review_Review = (Review);
// CONCATENATED MODULE: ./components/UI/Card/Card.style.js

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Cardstyle__Wrapper",
  componentId: "sc-1k3aiox-0"
})(["padding:1rem;border-radius:3px;box-shadow:0 2px 20px rgba(0,0,0,0.16);"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "Cardstyle__Header",
  componentId: "sc-1k3aiox-1"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "Cardstyle__Content",
  componentId: "sc-1k3aiox-2"
})([""]);
const Footer = external_styled_components_default.a.footer.withConfig({
  displayName: "Cardstyle__Footer",
  componentId: "sc-1k3aiox-3"
})(["display:flex;justify-content:space-between;align-items:center;"]);
// CONCATENATED MODULE: ./components/UI/Card/Card.js
var Card_jsx = external_react_default.a.createElement;


function Card({
  title,
  className,
  header,
  content,
  children,
  footer
}) {
  return Card_jsx(Wrapper, {
    className: className
  }, Card_jsx(Header, null, header ? header : Card_jsx("h2", null, title)), Card_jsx(Content, null, content ? content : children), footer && Card_jsx(Footer, null, footer));
}
// EXTERNAL MODULE: ./components/UI/HtmlLabel/HtmlLabel.js
var HtmlLabel = __webpack_require__("VRlB");

// EXTERNAL MODULE: ./components/UI/DatePicker/ReactDates.js + 2 modules
var ReactDates = __webpack_require__("g9v/");

// EXTERNAL MODULE: ./components/UI/ViewWithPopup/ViewWithPopup.js + 3 modules
var ViewWithPopup = __webpack_require__("xjfH");

// EXTERNAL MODULE: ./components/UI/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("SEwy");

// CONCATENATED MODULE: ./container/SinglePage/Reservation/Reservation.style.js


const ReservationFormWrapper = external_styled_components_default.a.form.withConfig({
  displayName: "Reservationstyle__ReservationFormWrapper",
  componentId: "mmj2hk-0"
})(["padding:0 30px;@media only screen and (max-width:375px){padding:0 15px;}"]);
const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Reservationstyle__FieldWrapper",
  componentId: "mmj2hk-1"
})(["margin-bottom:30px;@media only screen and (max-width:375px){margin-bottom:25px;}label{font-size:15px;color:", ";text-transform:capitalize;margin-bottom:7px;display:block;}.date_picker{margin-bottom:0;> label{margin-bottom:0;width:100%;}.DateRangePicker{width:100%;input,.DateRangePickerInput{border:0;width:100%;height:54px;display:flex;padding:0 15px;font-size:15px;font-weight:400;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::placeholder{font-size:15px;color:", ";}.DateInput{width:auto;.DateInput_fang{top:46px !important;}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{top:56px !important;.DayPicker{width:316px !important;.DayPicker_focusRegion{.DayPicker_transitionContainer{width:316px !important;.CalendarMonth_caption{font-size:16px;color:", ";}}}}}}}.view_with__popup{.popup_handler{button,button.ant-btn{border:0;width:100%;display:flex;padding:0 25px;font-size:15px;font-weight:400;min-height:54px;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::after{display:none;}}}&.active{.popup_container{max-width:316px;padding:25px 22px;position:absolute;left:0;top:56px;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);&::before{content:'';width:14px;height:14px;top:-8px;left:36px;position:absolute;border-radius:2px;transform:rotate(45deg);background-color:", ";border-top:1px solid ", ";border-left:1px solid ", ";}}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'));
const RoomGuestWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Reservationstyle__RoomGuestWrapper",
  componentId: "mmj2hk-2"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Reservationstyle__ItemWrapper",
  componentId: "mmj2hk-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:10px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const FormActionArea = external_styled_components_default.a.div.withConfig({
  displayName: "Reservationstyle__FormActionArea",
  componentId: "mmj2hk-4"
})(["button.ant-btn-primary{width:100%;height:47px;color:", ";font-size:15px;font-weight:700;border-color:", ";background-color:", ";transition:all 0.2s ease;&:hover,&:focus{outline:none;opacity:0.93;}}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var Reservation_style = (ReservationFormWrapper);
// CONCATENATED MODULE: ./container/SinglePage/Reservation/RenderReservationForm.js

var RenderReservationForm_jsx = external_react_default.a.createElement;

function RenderReservationForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function RenderReservationForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RenderReservationForm_ownKeys(Object(source), true).forEach(function (key) { RenderReservationForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RenderReservationForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RenderReservationForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RenderReservationForm = () => {
  const {
    0: formState,
    1: setFormState
  } = Object(external_react_["useState"])({
    startDate: null,
    endDate: null,
    room: 0,
    guest: 0
  });

  const handleIncrement = type => {
    setFormState(RenderReservationForm_objectSpread(RenderReservationForm_objectSpread({}, formState), {}, {
      [type]: formState[type] + 1
    }));
  };

  const handleDecrement = type => {
    if (formState[type] <= 0) {
      return false;
    }

    setFormState(RenderReservationForm_objectSpread(RenderReservationForm_objectSpread({}, formState), {}, {
      [type]: formState[type] - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setFormState(RenderReservationForm_objectSpread(RenderReservationForm_objectSpread({}, formState), {}, {
      [type]: currentValue
    }));
  };

  const updateSearchDataFunc = value => {
    setFormState(RenderReservationForm_objectSpread(RenderReservationForm_objectSpread({}, formState), {}, {
      startDate: value.setStartDate,
      endDate: value.setEndDate
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Start Date: ${formState.startDate}\nEnd Date: ${formState.endDate}\nRooms: ${formState.room}\nGuests: ${formState.guest}`);
  };

  return RenderReservationForm_jsx(Reservation_style, {
    className: "form-container",
    onSubmit: handleSubmit
  }, RenderReservationForm_jsx(FieldWrapper, null, RenderReservationForm_jsx(HtmlLabel["a" /* default */], {
    htmlFor: "dates",
    content: "Dates"
  }), RenderReservationForm_jsx(ReactDates["a" /* default */], {
    startDateId: "checkin-Id",
    endDateId: "checkout-id",
    startDatePlaceholderText: "Check In",
    endDatePlaceholderText: "Check Out",
    updateSearchData: value => updateSearchDataFunc(value),
    numberOfMonths: 1,
    small: true
  })), RenderReservationForm_jsx(FieldWrapper, null, RenderReservationForm_jsx(HtmlLabel["a" /* default */], {
    htmlFor: "guests",
    content: "Guests"
  }), RenderReservationForm_jsx(ViewWithPopup["a" /* default */], {
    key: 200,
    noView: true,
    className: formState.room || formState.guest ? 'activated' : '',
    view: RenderReservationForm_jsx(button_default.a, {
      type: "default"
    }, RenderReservationForm_jsx("span", null, "Room ", formState.room > 0 && `: ${formState.room}`), RenderReservationForm_jsx("span", null, "-"), RenderReservationForm_jsx("span", null, "Guest", formState.guest > 0 && `: ${formState.guest}`)),
    popup: RenderReservationForm_jsx(RoomGuestWrapper, null, RenderReservationForm_jsx(ItemWrapper, null, RenderReservationForm_jsx("strong", null, "Room"), RenderReservationForm_jsx(InputIncDec["a" /* default */], {
      id: "room",
      increment: () => handleIncrement('room'),
      decrement: () => handleDecrement('room'),
      onChange: e => handleIncDecOnChnage(e, 'room'),
      value: formState.room
    })), RenderReservationForm_jsx(ItemWrapper, null, RenderReservationForm_jsx("strong", null, "Guest"), RenderReservationForm_jsx(InputIncDec["a" /* default */], {
      id: "guest",
      increment: () => handleIncrement('guest'),
      decrement: () => handleDecrement('guest'),
      onChange: e => handleIncDecOnChnage(e, 'guest'),
      value: formState.guest
    })))
  })), RenderReservationForm_jsx(FormActionArea, null, RenderReservationForm_jsx(button_default.a, {
    htmlType: "submit",
    type: "primary"
  }, "Book Hotel")));
};

/* harmony default export */ var Reservation_RenderReservationForm = (RenderReservationForm);
// CONCATENATED MODULE: ./container/SinglePage/Reservation/Reservation.js
var Reservation_jsx = external_react_default.a.createElement;

function Reservation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Reservation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Reservation_ownKeys(Object(source), true).forEach(function (key) { Reservation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Reservation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Reservation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Reservation_extends() { Reservation_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Reservation_extends.apply(this, arguments); }








const CardHeader = ({
  priceStyle,
  pricePeriodStyle,
  linkStyle
}) => {
  return Reservation_jsx(external_react_["Fragment"], null, Reservation_jsx(Heading["a" /* default */], Reservation_extends({
    content: Reservation_jsx(external_react_["Fragment"], null, "$162 ", Reservation_jsx(Text["a" /* default */], Reservation_extends({
      as: "span",
      content: "/ night"
    }, pricePeriodStyle)))
  }, priceStyle)), Reservation_jsx(link_default.a, {
    href: "/#1"
  }, Reservation_jsx("a", {
    style: Reservation_objectSpread({}, linkStyle)
  }, "Contact Hotel")));
};

function Reservation({
  linkStyle
}) {
  return Reservation_jsx(Card, {
    className: "reservation_sidebar",
    header: Reservation_jsx(CardHeader, null),
    content: Reservation_jsx(Reservation_RenderReservationForm, null),
    footer: Reservation_jsx("p", null, "Special offers available.", Reservation_jsx(link_default.a, {
      href: "/#1"
    }, Reservation_jsx("a", {
      style: Reservation_objectSpread({}, linkStyle)
    }, "See details")))
  });
}
CardHeader.defaultProps = {
  priceStyle: {
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700'
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400'
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489'
  }
};
// CONCATENATED MODULE: ./components/StickyBooking/useWindowSize.js


function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}

const useWindowSize = () => {
  let {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

/* harmony default export */ var StickyBooking_useWindowSize = (useWindowSize);
// CONCATENATED MODULE: ./components/StickyBooking/StickyBooking.style.js


const StickyBookingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__StickyBookingWrapper",
  componentId: "sc-9ckiey-0"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:fixed;width:100%;left:0;bottom:0;z-index:9999;padding:15px 30px;background-color:", ";box-shadow:0 1px 4px 1px ", ";"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16'));
const HotelInfo = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__HotelInfo",
  componentId: "sc-9ckiey-1"
})(["display:flex;align-items:center;"]);
const InfoArea = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__InfoArea",
  componentId: "sc-9ckiey-2"
})(["padding-left:27px;@media only screen and (max-width:767px){padding-left:0;}"]);
const Logo = external_styled_components_default.a.img.withConfig({
  displayName: "StickyBookingstyle__Logo",
  componentId: "sc-9ckiey-3"
})(["height:28px;width:auto;position:relative;top:1px;"]);
const StickyBooking_style_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "StickyBookingstyle__Title",
  componentId: "sc-9ckiey-4"
})(["margin:0;font-size:13px;font-weight:700;letter-spacing:0.083em;text-transform:uppercase;color:", ";"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const HotelRating = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__HotelRating",
  componentId: "sc-9ckiey-5"
})(["display:flex;align-items:center;color:", ";font-size:12px;margin-top:1px;i{color:", ";}svg{fill:", ";}strong{font-weight:700;margin-left:7px;}.ant-rate{margin-top:-2px;.ant-rate-star{margin-right:4px;font-size:15px;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const HotelAction = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__HotelAction",
  componentId: "sc-9ckiey-6"
})(["display:flex;align-items:center;flex-shrink:0;"]);
const Price = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__Price",
  componentId: "sc-9ckiey-7"
})(["font-size:12px;font-weight:700;line-height:1.33em;text-transform:uppercase;padding:10px 32px;border-left:1px solid ", ";span{font-size:16px;line-height:1.37em;color:", ";}@media only screen and (max-width:767px){padding:0;border-left:0;}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ActionBtn = external_styled_components_default.a.div.withConfig({
  displayName: "StickyBookingstyle__ActionBtn",
  componentId: "sc-9ckiey-8"
})(["> button,> button.ant-btn{min-width:156px;height:44px;line-height:1;display:inline-flex;align-items:center;justify-content:center;border-radius:3px;border:0;font-size:12px;box-shadow:none;font-weight:700;text-shadow:none;text-transform:uppercase;color:", ";background-color:", ";transition:all 0.3s ease;@media only screen and (max-width:375px){min-width:120px;}@media only screen and (max-width:320px){min-width:90px;}&::after{display:none;}&:hover{outline:none;background-color:", ";}&:focus{outline:none;}}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ var StickyBooking_style = (StickyBookingWrapper);
// CONCATENATED MODULE: ./components/StickyBooking/StickyBooking.js
var StickyBooking_jsx = external_react_default.a.createElement;




const StickyBooking = ({
  logo,
  title,
  price,
  rating,
  action,
  className
}) => {
  // Add all classs to an array
  const addAllClasses = ['sticky_booking']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // useWindowSize hook


  const windowSize = StickyBooking_useWindowSize();
  const windowInnerWidth =  false && false;
  return StickyBooking_jsx(StickyBooking_style, {
    className: addAllClasses.join(' ')
  }, StickyBooking_jsx(HotelInfo, {
    className: "hotel_info"
  }, windowInnerWidth > 767 && StickyBooking_jsx(external_react_["Fragment"], null, logo && StickyBooking_jsx(Logo, {
    src: logo,
    alt: title
  })), title || rating || price ? StickyBooking_jsx(InfoArea, null, windowInnerWidth > 767 ? StickyBooking_jsx(external_react_["Fragment"], null, title && StickyBooking_jsx(StickyBooking_style_Title, null, title)) : StickyBooking_jsx(Price, null, StickyBooking_jsx("span", null, "$", price), " / Night"), rating && StickyBooking_jsx(HotelRating, null, rating)) : ''), StickyBooking_jsx(HotelAction, {
    className: "hotel_action"
  }, windowInnerWidth > 767 && StickyBooking_jsx(Price, null, StickyBooking_jsx("span", null, "$", price), " / Night"), StickyBooking_jsx(ActionBtn, null, action)));
};

/* harmony default export */ var StickyBooking_StickyBooking = (StickyBooking);
// EXTERNAL MODULE: ./assets/images/logo-alt.svg
var logo_alt = __webpack_require__("pES2");

// CONCATENATED MODULE: ./container/SinglePage/Reservation/BottomReservation.js


var BottomReservation_jsx = external_react_default.a.createElement;







const BottomReservation = ({
  title,
  price,
  rating,
  ratingCount
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false);

  const toggleModal = () => {
    setState(!state);
  };

  const handleCancel = () => {
    setState(!state);
  };

  return BottomReservation_jsx(external_react_["Fragment"], null, BottomReservation_jsx(StickyBooking_StickyBooking, {
    logo: logo_alt["a" /* default */],
    title: title,
    price: price,
    rating: BottomReservation_jsx(Rating["a" /* default */], {
      rating: rating,
      ratingCount: ratingCount,
      type: "bulk"
    }),
    action: BottomReservation_jsx(button_default.a, {
      type: "primary",
      onClick: toggleModal
    }, "Book")
  }), BottomReservation_jsx(modal_default.a, {
    visible: state,
    onCancel: handleCancel,
    footer: null,
    maskStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    wrapClassName: "reservation_modal",
    closable: false
  }, BottomReservation_jsx(Reservation, null), BottomReservation_jsx(button_default.a, {
    onClick: handleCancel,
    className: "close"
  }, BottomReservation_jsx(io_["IoIosClose"], null))));
};

/* harmony default export */ var Reservation_BottomReservation = (BottomReservation);
// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// CONCATENATED MODULE: ./components/SocialShare/SocialShare.js

var SocialShare_jsx = external_react_default.a.createElement;



const FaceBookShare = props => {
  const {
    title,
    shareURL
  } = props;
  return SocialShare_jsx(popover_default.a, {
    content: "Facebook"
  }, SocialShare_jsx("div", {
    className: "facebook"
  }, SocialShare_jsx(external_react_share_["FacebookShareButton"], {
    url: shareURL,
    quote: title
  }, SocialShare_jsx(fa_["FaFacebookF"], null), " Facebook")));
};
const TwitterShare = props => {
  const {
    shareURL,
    title,
    author
  } = props;
  return SocialShare_jsx(popover_default.a, {
    content: "Twitter"
  }, SocialShare_jsx("div", {
    className: "twitter"
  }, SocialShare_jsx(external_react_share_["TwitterShareButton"], {
    url: shareURL,
    title: title,
    via: author
  }, SocialShare_jsx(fa_["FaTwitter"], null), " Twitter")));
};
const LinkedInShare = props => {
  const {
    shareURL,
    title
  } = props;
  return SocialShare_jsx(popover_default.a, {
    content: "Twitter"
  }, SocialShare_jsx("div", {
    className: "twitter"
  }, SocialShare_jsx(external_react_share_["LinkedinShareButton"], {
    url: shareURL,
    title: title,
    windowWidth: 750,
    windowHeight: 600
  }, SocialShare_jsx(fa_["FaLinkedinIn"], null), " LinkedIn")));
};
const PinterestShare = props => {
  const {
    shareURL,
    title,
    media
  } = props;
  const mediaForPinterest = media ? media[0].url : [];
  return SocialShare_jsx(popover_default.a, {
    content: "Pinterest"
  }, SocialShare_jsx("div", {
    className: "pinterest"
  }, SocialShare_jsx(external_react_share_["PinterestShareButton"], {
    url: shareURL,
    media: mediaForPinterest,
    description: title
  }, SocialShare_jsx(fa_["FaPinterest"], null), " Pinterest")));
};
// EXTERNAL MODULE: ./components/UI/Favorite/Favorite.js + 2 modules
var Favorite = __webpack_require__("EupD");

// CONCATENATED MODULE: ./components/UI/ScrollBar/ScrollBar.style.js

const ScrollBar_style_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ScrollBarstyle__Wrapper",
  componentId: "xlng14-0"
})(["min-height:80px;background-color:#ffffff;overflow-y:hidden;@media only screen and (max-width:1200px){min-height:60px;}> div{padding-left:0;padding-right:0;}.linkItem{padding:1rem;}.scrollbar_right{flex-shrink:0;}"]);
const InnerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ScrollBarstyle__InnerWrapper",
  componentId: "xlng14-1"
})(["display:flex;justify-content:space-between;align-items:center;overflow-x:auto;min-height:110px;padding-bottom:30px;margin-bottom:-30px;@media only screen and (max-width:1200px){min-height:80px;padding-bottom:20px;margin-bottom:-20px;}"]);
// CONCATENATED MODULE: ./components/UI/ScrollBar/ScrollBar.js
var ScrollBar_jsx = external_react_default.a.createElement;




function TopBar({
  menu = [],
  other,
  height,
  className
}) {
  const addAllClasses = ['scrollbar'];

  if (className) {
    addAllClasses.push(className);
  }

  return ScrollBar_jsx(ScrollBar_style_Wrapper, {
    className: addAllClasses.join(' '),
    height: height
  }, ScrollBar_jsx(Container["a" /* default */], {
    fluid: true
  }, ScrollBar_jsx(InnerWrapper, null, ScrollBar_jsx("div", {
    className: "scrollbar_left"
  }, menu.map(menuItem => ScrollBar_jsx(external_react_scroll_["Link"], {
    key: menuItem.target,
    className: "linkItem",
    activeClass: "active",
    to: menuItem.target,
    spy: true,
    smooth: true,
    hashSpy: true,
    offset: -170,
    duration: 600,
    isDynamic: true,
    ignoreCancelEvents: false
  }, menuItem.name))), ScrollBar_jsx("div", {
    className: "scrollbar_right"
  }, other && other))));
}
// CONCATENATED MODULE: ./container/SinglePage/TopBar/TopBar.js



var TopBar_jsx = external_react_default.a.createElement;






const topBarMenu = [{
  name: 'Overview',
  target: 'overview'
}, {
  name: 'Amenities',
  target: 'amenities'
}, {
  name: 'Location',
  target: 'location'
}, {
  name: 'Reviews',
  target: 'reviews'
}];

const SocialShareMenu = props => {
  return TopBar_jsx(menu_default.a, null, TopBar_jsx(menu_default.a.Item, null, TopBar_jsx(TwitterShare, props)), TopBar_jsx(menu_default.a.Item, null, TopBar_jsx(FaceBookShare, props)), TopBar_jsx(menu_default.a.Item, null, TopBar_jsx(LinkedInShare, props)), TopBar_jsx(menu_default.a.Item, null, TopBar_jsx(PinterestShare, props)));
};

const SideButtons = props => {
  return TopBar_jsx(ButtonGroup, null, TopBar_jsx(Favorite["a" /* default */], {
    className: "ant-btn",
    content: "Save"
  }), TopBar_jsx(dropdown_default.a, {
    placement: "bottomRight",
    overlay: () => TopBar_jsx(SocialShareMenu, props),
    overlayClassName: "social_share_menu"
  }, TopBar_jsx(button_default.a, {
    className: "ant-dropdown-link"
  }, TopBar_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.309 15.537"
  }, TopBar_jsx("path", {
    d: "M80.68,101.873,74.507,96.1a.316.316,0,0,0-.245-.105c-.193.009-.438.144-.438.35v2.9a.187.187,0,0,1-.158.179c-6.138.941-8.724,5.535-9.639,10.3-.035.188.219.363.337.214a11.158,11.158,0,0,1,9.275-4.7.216.216,0,0,1,.184.21v2.844a.375.375,0,0,0,.634.232l6.217-5.876a.483.483,0,0,0,.153-.368A.586.586,0,0,0,80.68,101.873Z",
    transform: "translate(-63.271 -95.242)"
  })), "Share")));
};

const TopBar_TopBar = props => {
  const {
    title,
    shareURL,
    author,
    media
  } = props;
  return TopBar_jsx(TobBarWrapper, null, TopBar_jsx(external_react_stickynode_default.a, {
    innerZ: 9999,
    top: 80,
    activeClass: "isSticky"
  }, TopBar_jsx(TopBar, {
    menu: topBarMenu,
    other: TopBar_jsx(SideButtons, {
      media: media,
      author: author,
      title: title,
      shareURL: shareURL
    })
  })));
};

/* harmony default export */ var SinglePage_TopBar_TopBar = (TopBar_TopBar);
// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__("UMQD");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);

// CONCATENATED MODULE: ./container/SinglePage/ImageGallery/ImageGallery.style.js


const ImageGalleryWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ImageGallerystyle__ImageGalleryWrapper",
  componentId: "sc-1tbhd9b-0"
})([".image-gallery-slides{border-radius:3px;box-shadow:0 2px 25px ", ";}.image-gallery-slide{.image-gallery-image{object-fit:cover;}}.image-gallery-icon{.image-gallery-svg{height:80px;width:auto;}&:hover{color:", ";}}.image-gallery-index{padding:0;font-size:15px;font-weight:700;position:static;margin:30px 0 16px 0;background-color:transparent;color:", ";&:after{content:'photos';display:inline-block;margin-left:0.25em;}}.image-gallery-thumbnails-wrapper{.image-gallery-thumbnails{padding:0;.image-gallery-thumbnail{width:150px;padding:0;margin:0 20px 0 0;border:0;border-radius:3px;overflow:hidden;position:relative;&.active{border:0;}&:last-child{margin-right:0;}&:before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background:", ";opacity:0.7;z-index:1;transform:scaleX(1);transform-origin:left center 0px;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68) 0s;}&:hover,&.active{&:before{transform:scaleX(0);transform-origin:right center 0px;transition:transform 0.7s cubic-bezier(0.19,1,0.22,1) 0s;}}}}}"], Object(theme_get_["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ var ImageGallery_style = (ImageGalleryWrapper);
// EXTERNAL MODULE: ./assets/images/post-image-1.jpg
var post_image_1 = __webpack_require__("XcTE");
var post_image_1_default = /*#__PURE__*/__webpack_require__.n(post_image_1);

// EXTERNAL MODULE: ./assets/images/post-image-2.jpg
var post_image_2 = __webpack_require__("+Cjh");
var post_image_2_default = /*#__PURE__*/__webpack_require__.n(post_image_2);

// EXTERNAL MODULE: ./assets/images/post-thumb-1.jpg
var post_thumb_1 = __webpack_require__("WbAA");
var post_thumb_1_default = /*#__PURE__*/__webpack_require__.n(post_thumb_1);

// EXTERNAL MODULE: ./assets/images/post-thumb-2.jpg
var post_thumb_2 = __webpack_require__("ADye");
var post_thumb_2_default = /*#__PURE__*/__webpack_require__.n(post_thumb_2);

// CONCATENATED MODULE: ./container/SinglePage/ImageGallery/ImageGallery.js
var ImageGallery_jsx = external_react_default.a.createElement;







const ImageGallery_images = [{
  original: post_image_1_default.a,
  thumbnail: post_thumb_1_default.a
}, {
  original: post_image_2_default.a,
  thumbnail: post_thumb_2_default.a
}];

const PostImageGallery = () => {
  return ImageGallery_jsx(ImageGallery_style, null, ImageGallery_jsx(external_react_image_gallery_default.a, {
    items: ImageGallery_images,
    showPlayButton: false,
    showFullscreenButton: false,
    showIndex: true,
    lazyLoad: true,
    slideDuration: 550
  }));
};

/* harmony default export */ var ImageGallery = (PostImageGallery);
// CONCATENATED MODULE: ./pages/post/[slug].js





var _slug_jsx = external_react_default.a.createElement;

















function SinglePostPage({
  processedData,
  deviceType,
  query
}) {
  const {
    0: href,
    1: setHref
  } = Object(external_react_["useState"])('');
  const {
    0: isModalShowing,
    1: setIsModalShowing
  } = Object(external_react_["useState"])(false);
  if (isEmpty_default()(processedData)) return _slug_jsx(Loader["a" /* default */], null);
  const {
    reviews,
    rating,
    ratingCount,
    price,
    title,
    gallery,
    location,
    content,
    amenities,
    author
  } = processedData[0];
  const pageTitle = query.slug.split('-').join(' ').charAt(0).toUpperCase() + query.slug.split('-').join(' ').slice(1);
  Object(external_react_["useEffect"])(() => {
    const path = window.location.href;
    setHref(path);
  }, [setHref]);
  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(head_default.a, null, _slug_jsx("title", null, pageTitle, " | TripFinder.")), _slug_jsx(SinglePageView_style, null, _slug_jsx(PostImage, null, _slug_jsx(button_default.a, {
    type: "primary",
    onClick: () => setIsModalShowing(true),
    className: "image_gallery_button"
  }, "View Photos"), _slug_jsx(modal_default.a, {
    visible: isModalShowing,
    onCancel: () => setIsModalShowing(false),
    footer: null,
    width: "100%",
    maskStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)'
    },
    wrapClassName: "image_gallery_modal",
    closable: false
  }, _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(ImageGallery, null), _slug_jsx(button_default.a, {
    onClick: () => setIsModalShowing(false),
    className: "image_gallery_close"
  }, _slug_jsx("svg", {
    width: "16.004",
    height: "16",
    viewBox: "0 0 16.004 16"
  }, _slug_jsx("path", {
    id: "_ionicons_svg_ios-close_2_",
    d: "M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z",
    transform: "translate(-160.5 -160.55)",
    fill: "#909090"
  })))))), _slug_jsx(SinglePage_TopBar_TopBar, {
    title: title,
    shareURL: href,
    author: author,
    media: gallery
  }), _slug_jsx(Container["a" /* default */], null, _slug_jsx(row_default.a, {
    gutter: 30,
    id: "reviewSection",
    style: {
      marginTop: 30
    }
  }, _slug_jsx(col_default.a, {
    xl: 16
  }, _slug_jsx(Description_Description, {
    content: content,
    title: title,
    location: location,
    rating: rating,
    ratingCount: ratingCount
  }), _slug_jsx(Amenities_Amenities, {
    amenities: amenities
  }), _slug_jsx(Location_Location, {
    location: processedData[0]
  })), _slug_jsx(col_default.a, {
    xl: 8
  }, deviceType === 'desktop' ? _slug_jsx(external_react_stickynode_default.a, {
    innerZ: 999,
    activeClass: "isSticky",
    top: 202,
    bottomBoundary: "#reviewSection"
  }, _slug_jsx(Reservation, null)) : _slug_jsx(Reservation_BottomReservation, {
    title: title,
    price: price,
    rating: rating,
    ratingCount: ratingCount
  }))), _slug_jsx(row_default.a, {
    gutter: 30
  }, _slug_jsx(col_default.a, {
    xl: 16
  }, _slug_jsx(Review_Review, {
    reviews: reviews,
    ratingCount: ratingCount,
    rating: rating
  })), _slug_jsx(col_default.a, {
    xl: 8
  })))));
}
async function getServerSideProps(context) {
  const {
    req,
    query
  } = context;
  const apiUrl = [{
    endpoint: 'hotel-single',
    name: 'hotelSingleData'
  }];
  const pageData = await Object(get_api_data["e" /* default */])(apiUrl);
  const processedData = Object(get_api_data["b" /* ProcessAPIData */])(pageData);
  const deviceType = Object(get_device_type["a" /* getDeviceType */])(req);
  return {
    props: {
      query,
      processedData,
      deviceType
    }
  };
}

/***/ }),

/***/ "UMQD":
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),

/***/ "UgrS":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/DislikeOutlined");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VRlB":
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('label').withConfig({
  displayName: "HtmlLabel__LabelWrapper",
  componentId: "sc-1fmiocp-0"
})(_Base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Heading'));

const HtmlLabel = _ref => {
  let {
    htmlFor,
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["htmlFor", "content"]);

  return __jsx(LabelWrapper, _extends({
    htmlFor: htmlFor
  }, props), content);
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlLabel);

/***/ }),

/***/ "WbAA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/post-thumb-1-d2a8eb12362f29ce2fea87530f05de95.jpg";

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

/***/ "XQdj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "XcTE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/post-image-1-68c16c8cd1ec6eb4790fbab4f26f631f.jpg";

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

/***/ "Yuho":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/LikeFilled");

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

/***/ "gEPn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/single-post-bg-0692042a8231fd92da0fd72a0c2a2ff2.jpg";

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

/***/ "pES2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNy45ODQiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMTAwMyI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQzMiIgZD0iTTIzLjQ1LjMxN2EzNC41IDM0LjUgMCAwMC00IDEuMTQzIDM1LjI2MiAzNS4yNjIgMCAwMC0zLjc3MSAxLjU0NSAyNi4wNjkgMjYuMDY5IDAgMDAtMy4xNzkgMS44IDI2LjA2OCAyNi4wNjggMCAwMC0zLjE5MS0xLjhBMzUuMjYyIDM1LjI2MiAwIDAwNS41NCAxLjQ1OSAzNC41IDM0LjUgMCAwMDEuNTUuMzE3TDAgMHYxNS40OWExMi41IDEyLjUgMCAxMDI1IDBWMHpNMTIuNSA4LjA0MmMyLjMzOSAxLjk2IDMuNTIyIDQuMTkgMy41MTIgNi42MDhhMy41MTIgMy41MTIgMCAxMS03LjAyNCAwYy0uMDA4LTIuNDQgMS4xNzQtNC42NTggMy41MTItNi42MDh6bTkuOTEzIDcuNDQ4YTkuOTE1IDkuOTE1IDAgMDEtMTkuODMxIDBWMy4yNGEzMS44IDMxLjggMCAwMTcuNzQ4IDMuMjU5IDEzLjQzIDEzLjQzIDAgMDAtMi4zNDQgMi43MzdBOS45MjkgOS45MjkgMCAwMDYuNCAxNC42NDVhNi4xIDYuMSAwIDEwMTIuMiAwIDkuOTMyIDkuOTMyIDAgMDAtMS41ODctNS40MTIgMTMuNDI3IDEzLjQyNyAwIDAwLTIuMzQ2LTIuNzQyIDI5LjczNyAyOS43MzcgMCAwMTUuNTg2LTIuNTc3Yy44MTktLjI4NCAxLjU1OS0uNTEgMi4xNTgtLjY3NXoiIGZpbGw9IiMwMDg0ODkiLz48L2c+PC9zdmc+");

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

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

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

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ })

/******/ });