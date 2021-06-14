exports.ids = [20];
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

/***/ "xwjx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/UI/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__("TBIP");

// EXTERNAL MODULE: external "rc-picker/lib/generate/dayjs"
var dayjs_ = __webpack_require__("D7ag");
var dayjs_default = /*#__PURE__*/__webpack_require__.n(dayjs_);

// EXTERNAL MODULE: external "antd/lib/date-picker/generatePicker"
var generatePicker_ = __webpack_require__("5PAT");
var generatePicker_default = /*#__PURE__*/__webpack_require__.n(generatePicker_);

// CONCATENATED MODULE: ./components/UI/AntdDatePicker/AntdDatePicker.js


const DatePicker = generatePicker_default()(dayjs_default.a);
/* harmony default export */ var AntdDatePicker = (DatePicker);
// EXTERNAL MODULE: ./container/Agent/AccountSettings/AccountSettings.style.js
var AccountSettings_style = __webpack_require__("lR+B");

// CONCATENATED MODULE: ./container/Agent/AccountSettings/AgentCreateOrUpdateForm.js





var __jsx = external_react_default.a.createElement;





const genderOptions = [{
  label: 'Male',
  value: 'male'
}, {
  label: 'Female',
  value: 'female'
}, {
  label: 'Other',
  value: 'Other'
}];
const languageOptions = [{
  label: 'English',
  value: 'english'
}, {
  label: 'Spanish',
  value: 'spanish'
}, {
  label: 'French',
  value: 'french'
}, {
  label: 'Russian',
  value: 'russian'
}];
/* harmony default export */ var AgentCreateOrUpdateForm = __webpack_exports__["default"] = (() => {
  var _errors$email, _errors$email2, _errors$phoneNumber, _errors$phoneNumber2;

  const {
    control,
    errors,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])();

  const onSubmit = data => console.log(data);

  return __jsx(external_react_["Fragment"], null, __jsx(AccountSettings_style["f" /* FormTitle */], null, "Basic Information"), __jsx("form", {
    className: "form-container",
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    lg: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "First name",
    htmlFor: "firstName",
    error: errors.firstName && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    id: "firstName",
    name: "firstName",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    }
  }))), __jsx(col_default.a, {
    lg: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Last name",
    htmlFor: "lastName",
    error: errors.lastName && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    id: "lastName",
    name: "lastName",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    }
  })))), __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    lg: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Date of birth",
    htmlFor: "dateOfBirthday",
    error: errors.dateOfBirthday && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(AntdDatePicker, null),
    id: "dateOfBirthday",
    name: "dateOfBirthday",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    }
  }))), __jsx(col_default.a, {
    lg: 12
  }, __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    md: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "I am",
    htmlFor: "agentGender",
    error: errors.agentGender && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(select_default.a, {
      options: genderOptions
    }),
    id: "agentGender",
    name: "agentGender",
    defaultValue: 'male',
    control: control,
    rules: {
      required: true
    }
  }))), __jsx(col_default.a, {
    md: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Preferred Language",
    htmlFor: "preferredLanguage",
    error: errors.preferredLanguage && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(select_default.a, {
      options: languageOptions
    }),
    id: "preferredLanguage",
    name: "preferredLanguage",
    defaultValue: 'english',
    control: control,
    rules: {
      required: true
    }
  })))))), __jsx(row_default.a, {
    gutter: 30
  }, __jsx(col_default.a, {
    lg: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Email address",
    htmlFor: "email",
    error: errors.email && __jsx(external_react_default.a.Fragment, null, ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === 'required' && __jsx("span", null, "This field is required!"), ((_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.type) === 'pattern' && __jsx("span", null, "Please enter a valid email address!"))
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    type: "email",
    id: "email",
    name: "email",
    defaultValue: "",
    control: control,
    rules: {
      required: true,
      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    }
  }))), __jsx(col_default.a, {
    lg: 12
  }, __jsx(FormControl["a" /* default */], {
    label: "Phone number",
    htmlFor: "phoneNumber",
    error: errors.phoneNumber && __jsx(external_react_default.a.Fragment, null, ((_errors$phoneNumber = errors.phoneNumber) === null || _errors$phoneNumber === void 0 ? void 0 : _errors$phoneNumber.type) === 'required' && __jsx("span", null, "This field is required!"), ((_errors$phoneNumber2 = errors.phoneNumber) === null || _errors$phoneNumber2 === void 0 ? void 0 : _errors$phoneNumber2.type) === 'pattern' && __jsx("span", null, "Please enter your valid number!"))
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    id: "phoneNumber",
    name: "phoneNumber",
    defaultValue: "",
    control: control,
    rules: {
      required: true,
      pattern: /^[0-9]*$/
    }
  }))), __jsx(col_default.a, {
    lg: 24
  }, __jsx(FormControl["a" /* default */], {
    label: "Where you live",
    htmlFor: "address",
    error: errors.address && __jsx("span", null, "This field is required!")
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a, null),
    id: "address",
    name: "address",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    }
  }))), __jsx(col_default.a, {
    lg: 24
  }, __jsx(FormControl["a" /* default */], {
    label: "Describe Yourself (Optional)",
    htmlFor: "describeYourself"
  }, __jsx(external_react_hook_form_["Controller"], {
    as: __jsx(input_default.a.TextArea, {
      rows: 5
    }),
    id: "describeYourself",
    name: "describeYourself",
    defaultValue: "",
    control: control
  })))), __jsx("div", {
    className: "submit-container"
  }, __jsx(button_default.a, {
    htmlType: "submit",
    type: "primary"
  }, "Save Changes"))));
});

/***/ })

};;