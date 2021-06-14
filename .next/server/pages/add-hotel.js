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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "226c":
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xtV8");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "BL1r":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MinusOutlined");

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "CHpt":
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/SearchBox");

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

/***/ "GqX/":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

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

/***/ "Im9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/png;base64,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");

/***/ }),

/***/ "ItoS":
/***/ (function(module, exports) {

module.exports = require("little-state-machine");

/***/ }),

/***/ "L3BB":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

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

/***/ "XQdj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xtV8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addHotelPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd/lib/progress"
var progress_ = __webpack_require__("226c");
var progress_default = /*#__PURE__*/__webpack_require__.n(progress_);

// EXTERNAL MODULE: external "little-state-machine"
var external_little_state_machine_ = __webpack_require__("ItoS");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/input-number"
var input_number_ = __webpack_require__("GqX/");
var input_number_default = /*#__PURE__*/__webpack_require__.n(input_number_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/UI/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("SEwy");

// EXTERNAL MODULE: ./components/UI/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__("TBIP");

// CONCATENATED MODULE: ./container/AddListing/AddListingAction.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AddListingAction(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    data: _objectSpread(_objectSpread({}, state.data), payload)
  });
}
function AddListingResetAction() {
  return {
    data: {}
  };
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./container/AddListing/AddListing.style.js


const Stepper = external_styled_components_default.a.div.withConfig({
  displayName: "AddListingstyle__Stepper",
  componentId: "sc-15octs7-0"
})(["display:flex;min-height:100vh;flex-direction:column;padding-top:15px;h3{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}.stepper-progress{position:fixed;z-index:1;left:0;top:79px;&.ant-progress-line{line-height:1;}.ant-progress-outer{.ant-progress-inner{border-radius:0;background-color:", ";.ant-progress-bg{height:10px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important;background-color:", ";box-shadow:0 3px 6px rgba(0,0,0,0.16);}}}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const FormHeader = external_styled_components_default.a.div.withConfig({
  displayName: "AddListingstyle__FormHeader",
  componentId: "sc-15octs7-1"
})(["margin-bottom:30px;@media only screen and (max-width:480px){margin-bottom:0;}"]);
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "AddListingstyle__Title",
  componentId: "sc-15octs7-2"
})(["font-size:25px;line-height:30px;font-weight:700;color:", ";margin-bottom:9px;@media only screen and (max-width:991px){font-size:22px;}@media only screen and (max-width:480px){font-size:18px;}span{font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'));
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "AddListingstyle__Description",
  componentId: "sc-15octs7-3"
})(["color:", ";font-size:15px;line-height:24px;font-weight:400;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const FormContent = external_styled_components_default.a.div.withConfig({
  displayName: "AddListingstyle__FormContent",
  componentId: "sc-15octs7-4"
})(["flex:1;max-width:1050px;width:100%;margin:71px auto 104px;@media only screen and (max-width:1050px){padding:0 30px;}@media only screen and (max-width:480px){margin-top:50px;}.ant-row{margin-bottom:0;}.quantity{margin-left:-4px;min-height:27px;input{min-height:27px;}}.form-control{margin-bottom:30px;}.has-error{.quantity{margin-bottom:8px;}}.drag_and_drop_uploader{.ant-upload{min-height:197px;&.ant-upload-drag{border-color:", ";background-color:", ";&:hover{border-color:", ";}.ant-upload-drag-icon{font-size:48px;line-height:1;margin-bottom:0;color:", ";}.ant-upload-text{margin-bottom:0;font-size:17px;color:", ";font-weight:700;line-height:34px;span{text-decoration:underline;}}}}.ant-upload-list{padding-top:15px;.ant-upload-list-item{height:40px;margin-top:0;line-height:50px;&.ant-upload-list-item-done{.ant-upload-list-item-info{a{color:", ";}}}.ant-upload-list-item-info{font-size:15px;font-weight:600;border-radius:3px;.anticon-paper-clip{font-size:15px;top:12px;}}&:hover{.ant-upload-list-item-info{background-color:", ";}}.ant-upload-list-item-card-actions{font-size:15px;top:-5px;}}}}.gm-style > input[type='text']{left:9px !important;top:46px !important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}.ant-radio-group{display:flex;.ant-radio-wrapper{margin-right:49px;span{color:", ";font-size:13px;line-height:16px;}.ant-radio{.ant-radio-input:focus + .ant-radio-inner{box-shadow:none;}.ant-radio-inner{border-color:", ";&:focus{outline:none;}&::after{width:12px;height:12px;left:1px;top:1px;border-radius:30px;}}&.ant-radio-checked{&::after{display:none;}.ant-radio-inner{border-color:", ";&::after{background-color:", ";}}}}&:last-child{margin-right:0;}}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.1', '#909090'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const FormAction = external_styled_components_default.a.div.withConfig({
  displayName: "AddListingstyle__FormAction",
  componentId: "sc-15octs7-5"
})(["width:100%;position:fixed;left:0;bottom:0;z-index:9;background-color:", ";.inner-wrapper{padding:30px 0;margin:0 auto;max-width:1050px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid ", ";@media only screen and (max-width:1050px){margin-left:30px;width:calc(100% - 60px);}}button{font-size:15px;font-weight:700;height:47px;border:0;border-radius:3px;min-width:95px;font-family:'Lato',sans-serif;background-color:", ";display:inline-flex;align-items:center;justify-content:center;text-transform:capitalize;cursor:pointer;transition:all 0.3s ease;&:hover,&:focus{outline:0;box-shadow:none;opacity:0.9;background-color:", ";}&.back-btn{background-color:transparent;min-width:auto;width:auto;padding:0;&:hover,&:focus{color:", ";}svg{margin-right:4px;width:18px;height:18px;}}}"], Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var AddListing_style = (Stepper);
// CONCATENATED MODULE: ./container/AddListing/BasicInformation.js





var __jsx = external_react_default.a.createElement;

function BasicInformation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function BasicInformation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BasicInformation_ownKeys(Object(source), true).forEach(function (key) { BasicInformation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BasicInformation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BasicInformation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BasicInformation = ({
  setStep
}) => {
  var _errors$pricePerNight, _errors$pricePerNight2;

  const {
    action,
    state
  } = Object(external_little_state_machine_["useStateMachine"])(AddListingAction);
  const {
    control,
    register,
    errors,
    setValue,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])({
    guest: 0,
    bed: 0
  });
  Object(external_react_["useEffect"])(() => {
    register({
      name: 'guest'
    }, {
      required: true
    });
    register({
      name: 'bed'
    }, {
      required: true
    });
  }, [register]);

  const handleOnChange = key => event => {
    setQuantity(BasicInformation_objectSpread(BasicInformation_objectSpread({}, quantity), {}, {
      [key]: event.target.value
    }));
    setValue([key], event.target.value);
  };

  const handleIncrement = key => {
    setQuantity(BasicInformation_objectSpread(BasicInformation_objectSpread({}, quantity), {}, {
      [key]: ++quantity[key]
    }));
    setValue([key], ++quantity[key]);
  };

  const handleDecrement = key => {
    if (quantity[key] <= 0) {
      return false;
    }

    setQuantity(BasicInformation_objectSpread(BasicInformation_objectSpread({}, quantity), {}, {
      [key]: --quantity[key]
    }));
    setValue([key], --quantity[key]);
  };

  const onSubmit = data => {
    action(data);
    setStep(2);
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(FormContent, null, __jsx(FormHeader, null, __jsx(Title, null, "Step 1: Start with the basics")), __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    sm: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Hotel Name",
    htmlFor: "hotelName",
    error: errors.hotelName && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    id: "hotelName",
    name: "hotelName",
    defaultValue: state.data.hotelName,
    control: control,
    placeholder: "Write your hotel name here",
    rules: {
      required: true
    }
  }))), __jsx(col_default.a, {
    sm: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Price Per Night (USD)",
    htmlFor: "pricePerNight",
    error: errors.pricePerNight && __jsx(external_react_default.a.Fragment, null, ((_errors$pricePerNight = errors.pricePerNight) === null || _errors$pricePerNight === void 0 ? void 0 : _errors$pricePerNight.type) === 'required' && __jsx("span", null, "This field is required!"), ((_errors$pricePerNight2 = errors.pricePerNight) === null || _errors$pricePerNight2 === void 0 ? void 0 : _errors$pricePerNight2.type) === 'pattern' && __jsx("span", null, "Please enter only number!"))
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_number_default.a, null),
    id: "pricePerNight",
    name: "pricePerNight",
    defaultValue: state.data.pricePerNight,
    control: control,
    placeholder: "00.00",
    rules: {
      required: true,
      pattern: /^[0-9]*$/
    }
  })))), __jsx(FormControl["a" /* default */], {
    label: "Hotel Description",
    htmlFor: "hotelDescription",
    error: errors.hotelDescription && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a.TextArea, {
      rows: 5
    }),
    id: "hotelDescription",
    name: "hotelDescription",
    defaultValue: state.data.hotelDescription,
    control: control,
    placeholder: "Tell people about your hotel, room, location & amenities",
    rules: {
      required: true
    }
  })), __jsx(FormControl["a" /* default */], {
    label: "How many guests can your hotel accommodate?",
    error: errors.guest && __jsx("span", null, "This field is required!")
  }, __jsx(InputIncDec["a" /* default */], {
    name: "guest",
    value: quantity.guest,
    onChange: handleOnChange('guest'),
    increment: () => handleIncrement('guest'),
    decrement: () => handleDecrement('guest')
  })), __jsx(FormControl["a" /* default */], {
    label: "How many beds can guests use?",
    error: errors.bed && __jsx("span", null, "This field is required!")
  }, __jsx(InputIncDec["a" /* default */], {
    name: "bed",
    value: quantity.bed,
    onChange: handleOnChange('bed'),
    increment: () => handleIncrement('bed'),
    decrement: () => handleDecrement('bed')
  }))), __jsx(FormAction, null, __jsx("div", {
    className: "inner-wrapper"
  }, __jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "Next"))));
};

/* harmony default export */ var AddListing_BasicInformation = (BasicInformation);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: ./components/UI/ImageUploader/DragAndDropUploader.js
var DragAndDropUploader = __webpack_require__("32bR");

// CONCATENATED MODULE: ./container/AddListing/HotelPhotos.js

var HotelPhotos_jsx = external_react_default.a.createElement;









const HotelPhotos = ({
  setStep
}) => {
  const {
    register,
    errors,
    setValue,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])({
    defaultValues: {
      hotelPhotos: [{
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
  const {
    action,
    state
  } = Object(external_little_state_machine_["useStateMachine"])(AddListingAction);
  Object(external_react_["useEffect"])(() => {
    register({
      name: 'hotelPhotos'
    }, {
      required: true
    });
  }, [register]);

  const onSubmit = data => {
    action(data);
    setStep(3);
  };

  return HotelPhotos_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, HotelPhotos_jsx(FormContent, null, HotelPhotos_jsx(FormHeader, null, HotelPhotos_jsx(Title, null, "Step 2: Hotel Photos")), HotelPhotos_jsx(FormControl["a" /* default */], {
    error: errors.hotelPhotos && HotelPhotos_jsx("span", null, "This field is required!")
  }, HotelPhotos_jsx(DragAndDropUploader["a" /* default */], {
    name: "hotelPhotos",
    value: state.data.hotelPhotos,
    onUploadChange: data => setValue('hotelPhotos', data)
  }))), HotelPhotos_jsx(FormAction, null, HotelPhotos_jsx("div", {
    className: "inner-wrapper"
  }, HotelPhotos_jsx(button_default.a, {
    className: "back-btn",
    htmlType: "button",
    onClick: () => setStep(1)
  }, HotelPhotos_jsx(io_["IoIosArrowBack"], null), " Back"), HotelPhotos_jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "Next"))));
};

/* harmony default export */ var AddListing_HotelPhotos = (HotelPhotos);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// EXTERNAL MODULE: ./components/Map/MapWrapper.js
var MapWrapper = __webpack_require__("E+Jn");

// EXTERNAL MODULE: ./components/Map/hotelMapMarker.png
var hotelMapMarker = __webpack_require__("Im9u");

// CONCATENATED MODULE: ./components/Map/MapSearchBox.js

var MapSearchBox_jsx = external_react_default.a.createElement;

function MapSearchBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function MapSearchBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MapSearchBox_ownKeys(Object(source), true).forEach(function (key) { MapSearchBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MapSearchBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MapSearchBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  SearchBox
} = __webpack_require__("CHpt");

const MapWithSearchBox = props => {
  const {
    0: dragNDropData,
    1: setDragNDropData
  } = Object(external_react_["useState"])([]);
  const {
    updatevalue,
    name
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(external_react_["useState"])({
    searchedLocation: ''
  });
  const {
    0: locationDetails,
    1: setLocationDetails
  } = Object(external_react_["useState"])({
    center: {
      lat: 40.7128,
      lng: -74.006
    },
    markers: [{
      position: {
        lat: 40.7128,
        lng: -74.006
      }
    }],
    places: []
  }); // const googleMapRef = useRef(null);

  const SearchBoxRef = Object(external_react_["useRef"])(null);

  const onPlacesChanged = () => {
    const places = SearchBoxRef.current.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location
    }));

    const nextCenter = external_lodash_default.a.get(nextMarkers, '0.position', locationDetails.center);

    setLocationDetails({
      places,
      center: nextCenter,
      markers: nextMarkers
    });
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address
    });
    updatevalue(places);
  };

  const handleOnChange = event => {
    event.stopPropagation();

    if (event.which === '13') {
      event.preventDefault();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const handleOnPressEnter = event => {
    event.stopPropagation();

    if (event.which === '13') {
      event.preventDefault();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const onDragEndFunc = marker => {
    let tempLocArray = [];
    var geocoder = new window.google.maps.Geocoder();
    const latlng = {
      lat: Number(marker.latLng.lat().toFixed(4)),
      lng: Number(marker.latLng.lng().toFixed(4))
    };
    setLocationDetails(MapSearchBox_objectSpread(MapSearchBox_objectSpread({}, locationDetails), {}, {
      center: latlng
    }));
    geocoder.geocode({
      latLng: latlng
    }, function (results, status) {
      console.log(results, 'results');

      if (results[0] && results[0].formatted_address) {
        setLocationInput({
          searchedLocation: results[0] && results[0].formatted_address
        });
        const location = {
          place_id: results[0].place_id,
          formatted_address: results[0].formatted_address,
          address_components: results[0].address_components,
          geometry: results[0].geometry
        };
        tempLocArray.push(location);
      }

      setDragNDropData(tempLocArray);
    });
    updatevalue(dragNDropData);
  };

  return MapSearchBox_jsx(MapWrapper["a" /* default */], {
    containerElement: MapSearchBox_jsx("div", {
      style: {
        height: '400px'
      }
    }),
    mapElement: MapSearchBox_jsx("div", {
      style: {
        height: '100%'
      }
    }),
    defaultZoom: 15,
    center: locationDetails.center
  }, MapSearchBox_jsx(SearchBox, {
    ref: SearchBoxRef,
    controlPosition: window.google.maps.ControlPosition.TOP_LEFT,
    onPlacesChanged: onPlacesChanged
  }, MapSearchBox_jsx(input_default.a, {
    type: "text",
    name: name,
    placeholder: "Enter your hotel location",
    style: {
      boxSizing: `border-box`,
      border: `1px solid transparent`,
      width: `260px`,
      height: `40px`,
      marginTop: `10px`,
      padding: `0 12px`,
      borderRadius: `2px`,
      boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16)`,
      fontSize: `15px`,
      outline: `none`,
      textOverflow: `ellipses`
    },
    defaultValue: "",
    value: locationInput ? locationInput.searchedLocation : '',
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter
  })), locationDetails.markers.map((marker, index) => {
    return MapSearchBox_jsx(external_react_google_maps_["Marker"], {
      icon: hotelMapMarker["a" /* default */],
      key: index,
      position: marker.position,
      onDragEnd: marker => onDragEndFunc(marker)
    });
  }));
};

/* harmony default export */ var MapSearchBox = (MapWithSearchBox);
// EXTERNAL MODULE: ./components/Map/mapDataHelper.js
var mapDataHelper = __webpack_require__("IGpx");

// CONCATENATED MODULE: ./container/AddListing/HotelLocation.js




var HotelLocation_jsx = external_react_default.a.createElement;










const HotelLocation = ({
  setStep
}) => {
  var _errors$contactNumber, _errors$contactNumber2;

  let tempLocationData = [];
  const {
    0: location,
    1: setLocation
  } = Object(external_react_["useState"])([]);
  const {
    control,
    register,
    errors,
    setValue,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])({
    mode: 'onChange'
  });
  const {
    action,
    state
  } = Object(external_little_state_machine_["useStateMachine"])(AddListingAction);
  Object(external_react_["useEffect"])(() => {
    register({
      name: 'locationData'
    }, {
      required: true
    });
  }, [register]);

  const onSubmit = data => {
    action(data);
    setStep(4);
  };

  return HotelLocation_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, HotelLocation_jsx(FormContent, null, HotelLocation_jsx(FormHeader, null, HotelLocation_jsx(Title, null, "Step 3: Hotel Location")), HotelLocation_jsx(row_default.a, {
    gutter: 30
  }, HotelLocation_jsx(col_default.a, {
    sm: 12
  }, HotelLocation_jsx(FormControl["a" /* default */], {
    label: "Contact number",
    htmlFor: "contactNumber",
    error: errors.contactNumber && HotelLocation_jsx(external_react_default.a.Fragment, null, ((_errors$contactNumber = errors.contactNumber) === null || _errors$contactNumber === void 0 ? void 0 : _errors$contactNumber.type) === 'required' && HotelLocation_jsx("span", null, "This field is required!"), ((_errors$contactNumber2 = errors.contactNumber) === null || _errors$contactNumber2 === void 0 ? void 0 : _errors$contactNumber2.type) === 'pattern' && HotelLocation_jsx("span", null, "Please enter your valid number!"))
  }, HotelLocation_jsx(external_react_hook_form_["Controller"], {
    as: HotelLocation_jsx(input_default.a, null),
    id: "contactNumber",
    name: "contactNumber",
    defaultValue: state.data.contactNumber,
    control: control,
    placeholder: "Phone",
    rules: {
      required: true,
      pattern: /^[0-9]*$/
    }
  })))), HotelLocation_jsx(FormControl["a" /* default */], {
    label: "Details description",
    htmlFor: "locationDescription",
    error: errors.locationDescription && HotelLocation_jsx("span", null, "This field is required!")
  }, HotelLocation_jsx(external_react_hook_form_["Controller"], {
    as: HotelLocation_jsx(input_default.a.TextArea, {
      rows: 5
    }),
    id: "locationDescription",
    name: "locationDescription",
    defaultValue: state.data.locationDescription,
    control: control,
    placeholder: "Write your hotel direction in details , it may help traveler to find your hotel easily",
    rules: {
      required: true
    }
  })), HotelLocation_jsx(FormControl["a" /* default */], {
    error: errors.locationData && HotelLocation_jsx("span", null, "This field is required!")
  }, HotelLocation_jsx(MapSearchBox, {
    name: "locationData",
    updatevalue: value => {
      tempLocationData = Object(mapDataHelper["a" /* mapDataHelper */])(value);
      setValue('locationData', tempLocationData);
      setLocation(value);
    }
  }))), HotelLocation_jsx(FormAction, null, HotelLocation_jsx("div", {
    className: "inner-wrapper"
  }, HotelLocation_jsx(button_default.a, {
    className: "back-btn",
    htmlType: "button",
    onClick: () => setStep(2)
  }, HotelLocation_jsx(io_["IoIosArrowBack"], null), " Back"), HotelLocation_jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "Next"))));
};

/* harmony default export */ var AddListing_HotelLocation = (HotelLocation);
// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__("XQdj");
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: ./container/AddListing/HotelAmenities.data.js
const hotelAmenities = [{
  id: 1,
  label: 'Wi-fi Availability',
  name: 'wifiAvailability',
  options: [{
    label: 'Free',
    value: 'free'
  }, {
    label: 'Paid',
    value: 'paid'
  }]
}, {
  id: 2,
  label: 'Parking Availability',
  name: 'parking',
  options: [{
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }]
}, {
  id: 3,
  label: 'Pool Availability',
  name: 'pool',
  options: [{
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }]
}, {
  id: 4,
  label: 'Air-Conditioner',
  name: 'airCondition',
  options: [{
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }]
}, {
  id: 5,
  label: 'Extra Bed Availability',
  name: 'extraBed',
  options: [{
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }]
}];
// CONCATENATED MODULE: ./container/AddListing/HotelAmenities.js




var HotelAmenities_jsx = external_react_default.a.createElement;

function HotelAmenities_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function HotelAmenities_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HotelAmenities_ownKeys(Object(source), true).forEach(function (key) { HotelAmenities_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HotelAmenities_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HotelAmenities_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // demo data



const HotelAmenities = ({
  setStep
}) => {
  const {
    control,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])();
  const {
    state
  } = Object(external_little_state_machine_["useStateMachine"])(AddListingAction);
  const {
    action
  } = Object(external_little_state_machine_["useStateMachine"])(AddListingResetAction);

  const onSubmit = data => {
    const formData = HotelAmenities_objectSpread(HotelAmenities_objectSpread({}, state.data), data);

    console.log('add hotel data: ', formData);
    alert(JSON.stringify(formData, null, 2));
    action({});
    window.STATE_MACHINE_RESET();
  };

  return HotelAmenities_jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, HotelAmenities_jsx(FormContent, null, HotelAmenities_jsx(FormHeader, null, HotelAmenities_jsx(Title, null, "Step 4: Hotel Amenities ", HotelAmenities_jsx("span", null, " (optional)")), HotelAmenities_jsx(Description, null, "Add your hotel amenities , it can help travelers to choose their perfect hotel. Thanks.")), HotelAmenities_jsx(row_default.a, {
    gutter: 30
  }, hotelAmenities.map(item => HotelAmenities_jsx(col_default.a, {
    key: `hotel-amenities--key${item.id}`,
    md: 8
  }, HotelAmenities_jsx(FormControl["a" /* default */], {
    label: item.label,
    labelTag: "h3"
  }, HotelAmenities_jsx(external_react_hook_form_["Controller"], {
    as: HotelAmenities_jsx(radio_default.a.Group, null),
    name: item.name,
    defaultValue: state.data[item.name] !== undefined ? state.data[item.name] : '',
    onChange: ([e]) => {
      return e.target.value;
    },
    control: control,
    options: item.options
  })))))), HotelAmenities_jsx(FormAction, null, HotelAmenities_jsx("div", {
    className: "inner-wrapper"
  }, HotelAmenities_jsx(button_default.a, {
    className: "back-btn",
    htmlType: "button",
    onClick: () => setStep(3)
  }, HotelAmenities_jsx(io_["IoIosArrowBack"], null), " Back"), HotelAmenities_jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ var AddListing_HotelAmenities = (HotelAmenities);
// CONCATENATED MODULE: ./container/AddListing/AddListing.js

var AddListing_jsx = external_react_default.a.createElement;







Object(external_little_state_machine_["createStore"])({
  data: {}
});

const AddListing = () => {
  let stepComponent;
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])(1);

  switch (step) {
    case 1:
      stepComponent = AddListing_jsx(AddListing_BasicInformation, {
        setStep: setStep
      });
      break;

    case 2:
      stepComponent = AddListing_jsx(AddListing_HotelPhotos, {
        setStep: setStep
      });
      break;

    case 3:
      stepComponent = AddListing_jsx(AddListing_HotelLocation, {
        setStep: setStep
      });
      break;

    case 4:
      stepComponent = AddListing_jsx(AddListing_HotelAmenities, {
        setStep: setStep
      });
      break;

    default:
      stepComponent = null;
  }

  return AddListing_jsx(external_little_state_machine_["StateMachineProvider"], null, AddListing_jsx(AddListing_style, null, AddListing_jsx(progress_default.a, {
    className: "stepper-progress",
    percent: step * 25,
    showInfo: false
  }), stepComponent));
};

/* harmony default export */ var AddListing_AddListing = (AddListing);
// CONCATENATED MODULE: ./pages/add-hotel.js
var add_hotel_jsx = external_react_default.a.createElement;



function addHotelPage() {
  return add_hotel_jsx(external_react_default.a.Fragment, null, add_hotel_jsx(head_default.a, null, add_hotel_jsx("title", null, "Add Hotel | TripFinder.")), add_hotel_jsx(AddListing_AddListing, null));
}

/***/ })

/******/ });