exports.ids = [21];
exports.modules = {

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

/***/ "k65C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangePassWord; });
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TBIP");
/* harmony import */ var _AccountSettings_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lR+B");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




function ChangePassWord() {
  var _errors$newPassword, _errors$newPassword2, _errors$newPassword3;

  const {
    control,
    errors,
    watch,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    mode: 'onChange'
  });
  const newPassword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = data => console.log(data);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_AccountSettings_style__WEBPACK_IMPORTED_MODULE_7__[/* FormTitle */ "f"], null, "Change Password"), __jsx("form", {
    className: "form-container",
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 30
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 12
  }, __jsx(components_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: "Enter old password",
    htmlFor: "oldPassword",
    error: errors.oldPassword && __jsx("span", null, "This field is required!")
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, null),
    defaultValue: "",
    control: control,
    id: "oldPassword",
    name: "oldPassword",
    rules: {
      required: true
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 12
  }, __jsx(components_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: "Enter new password",
    htmlFor: "newPassword",
    error: errors.newPassword && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, ((_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.type) === 'required' && __jsx("span", null, "This field is required!"), ((_errors$newPassword2 = errors.newPassword) === null || _errors$newPassword2 === void 0 ? void 0 : _errors$newPassword2.type) === 'minLength' && __jsx("span", null, "New password must be at lest 6 characters!"), ((_errors$newPassword3 = errors.newPassword) === null || _errors$newPassword3 === void 0 ? void 0 : _errors$newPassword3.type) === 'maxLength' && __jsx("span", null, "New password must not be longer than 20 characters!"))
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, null),
    defaultValue: "",
    control: control,
    id: "newPassword",
    name: "newPassword",
    rules: {
      required: true,
      minLength: 6,
      maxLength: 20
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 24
  }, __jsx(components_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: "Confirm new password",
    htmlFor: "confirmPassword",
    error: confirmPassword && newPassword !== confirmPassword && __jsx("span", null, "Confirm password must be the same!")
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, null),
    defaultValue: "",
    control: control,
    id: "confirmPassword",
    name: "confirmPassword"
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 24
  }, __jsx("div", {
    className: "submit-container"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    htmlType: "submit",
    type: "primary"
  }, "Save Changes"))))));
}

/***/ })

};;