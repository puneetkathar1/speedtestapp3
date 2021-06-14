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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "8Unq":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/CheckCircleFilled");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UQa5");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "UQa5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ pricingPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/PriceCard/PriceCard.style.js


const PriceCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PriceCardstyle__PriceCardWrapper",
  componentId: "sc-19pfakv-0"
})(["border-radius:6px;position:relative;border:1px solid ", ";transition:box-shadow 0.3s ease;&:hover{border-color:0;box-shadow:0 0 30px ", ";button{color:", ";background-color:", ";}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const PricingHeader = external_styled_components_default.a.div.withConfig({
  displayName: "PriceCardstyle__PricingHeader",
  componentId: "sc-19pfakv-1"
})(["padding:27px 29px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:", ";"], Object(theme_get_["themeGet"])('color.2', '#F7F7F7'));
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "PriceCardstyle__Title",
  componentId: "sc-19pfakv-2"
})(["color:", ";font-size:22px;line-height:1.2;font-weight:700;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const Price = external_styled_components_default.a.p.withConfig({
  displayName: "PriceCardstyle__Price",
  componentId: "sc-19pfakv-3"
})(["color:", ";font-size:15px;line-height:18px;margin-bottom:0;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const PricingList = external_styled_components_default.a.ul.withConfig({
  displayName: "PriceCardstyle__PricingList",
  componentId: "sc-19pfakv-4"
})(["margin:0;padding:29px 30px 30px;margin-bottom:97px;li{margin-bottom:14px;color:", ";font-size:13px;line-height:18px;> span{margin-left:15px;}.anticon-check-circle{color:", ";}.anticon-close-circle{color:", ";}&:last-child{margin-bottom:0;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('color.4', '#FC5C63'));
const PriceAction = external_styled_components_default.a.div.withConfig({
  displayName: "PriceCardstyle__PriceAction",
  componentId: "sc-19pfakv-5"
})(["padding:30px;width:100%;position:absolute;left:0;bottom:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;background-color:", ";"], Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "PriceCardstyle__Button",
  componentId: "sc-19pfakv-6"
})(["cursor:pointer;min-width:104px;min-height:37px;border:0;font-size:15px;line-height:18px;font-weight:700;border-radius:3px;color:", ";background-color:", ";transition:background-color 0.25s ease;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'));
/* harmony default export */ var PriceCard_style = (PriceCardWrapper);
// CONCATENATED MODULE: ./components/PriceCard/PriceCard.js
var __jsx = external_react_default.a.createElement;


function PriceCard({
  className,
  data,
  buttonText
}) {
  let price, pricingPlan;

  if (data.type === 'annually') {
    price = Math.ceil(data.price) * 12;
    pricingPlan = '/per year';
  } else {
    price = data.price;
    pricingPlan = '/per month';
  }

  return __jsx(PriceCard_style, {
    className: className
  }, __jsx(PricingHeader, null, __jsx(Title, null, data.title), __jsx(Price, null, __jsx("strong", null, "$", price, " USD"), __jsx("span", null, pricingPlan))), __jsx(PricingList, null, data.features.map(feature => __jsx("li", {
    key: feature.title
  }, feature.icon, __jsx("span", null, feature.title)))), __jsx(PriceAction, null, __jsx(Button, null, buttonText)));
}
// CONCATENATED MODULE: ./container/Pricing/PricingItems.js
var PricingItems_jsx = external_react_default.a.createElement;


function PricingItems({
  plans
}) {
  return plans.map(plan => PricingItems_jsx(PriceCard, {
    className: "price_card",
    data: plan,
    key: plan.title,
    buttonText: 'Select Plan'
  }));
}
// CONCATENATED MODULE: ./container/Pricing/Pricing.style.js


const PricingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Pricingstyle__PricingWrapper",
  componentId: "sc-8tkivk-0"
})(["max-width:1140px;margin:0 auto;padding-bottom:30px;@media only screen and (max-width:1200px){padding-left:30px;padding-right:30px;}@media only screen and (max-width:480px){padding:0 25px;}"]);
const Pricing_style_PricingHeader = external_styled_components_default.a.div.withConfig({
  displayName: "Pricingstyle__PricingHeader",
  componentId: "sc-8tkivk-1"
})(["text-align:center;padding:60px 0;@media only screen and (max-width:480px){padding:40px 0;}"]);
const Pricing_style_Title = external_styled_components_default.a.h2.withConfig({
  displayName: "Pricingstyle__Title",
  componentId: "sc-8tkivk-2"
})(["color:", ";font-size:25px;font-weight:700;margin-bottom:10px;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "Pricingstyle__Description",
  componentId: "sc-8tkivk-3"
})(["color:", ";font-size:15px;line-height:18px;margin-bottom:30px;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const PricingTableArea = external_styled_components_default.a.div.withConfig({
  displayName: "Pricingstyle__PricingTableArea",
  componentId: "sc-8tkivk-4"
})(["display:flex;flex-wrap:wrap;margin:0 -15px;.price_card{width:calc(100% / 3 - 30px);margin:0 15px;@media only screen and (max-width:767px){width:100%;margin-bottom:30px;}}"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "Pricingstyle__ButtonGroup",
  componentId: "sc-8tkivk-5"
})(["width:244px;min-height:47px;padding:5px;border-radius:3px;background-color:", ";margin:0 auto;display:flex;align-items:center;button{color:", ";font-size:15px;min-width:117px;min-height:37px;display:flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;&.active{font-weight:700;border-radius:3px;box-shadow:0 0 1px rgba(0,0,0,0.16);background-color:", ";}&:hover,&:focus{text-decoration:none;outline:none;}}"], Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const Pricing_style_Button = external_styled_components_default.a.button.withConfig({
  displayName: "Pricingstyle__Button",
  componentId: "sc-8tkivk-6"
})([""]);
/* harmony default export */ var Pricing_style = (PricingWrapper);
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CloseCircleFilled"
var CloseCircleFilled_ = __webpack_require__("Y9m+");
var CloseCircleFilled_default = /*#__PURE__*/__webpack_require__.n(CloseCircleFilled_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CheckCircleFilled"
var CheckCircleFilled_ = __webpack_require__("8Unq");
var CheckCircleFilled_default = /*#__PURE__*/__webpack_require__.n(CheckCircleFilled_);

// CONCATENATED MODULE: ./container/Pricing/Pricing.data.js


var Pricing_data_jsx = external_react_default.a.createElement;

const monthlyPlans = [{
  title: 'Basic Plan',
  price: '0.00',
  type: 'monthly',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }]
}, {
  title: 'Standard Plan',
  price: '75.80',
  type: 'monthly',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }]
}, {
  title: 'Premium Plan',
  price: '175.00',
  type: 'monthly',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }]
}];
const annuallyPlans = [{
  title: 'Basic Plan',
  price: '0.00',
  type: 'annually',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }]
}, {
  title: 'Standard Plan',
  price: '50.80',
  type: 'annually',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CloseCircleFilled_default.a, null)
  }]
}, {
  title: 'Premium Plan',
  price: '150.00',
  type: 'annually',
  features: [{
    title: 'Ultimate campaigns',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic donner data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Team fundraising',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Multi team tasking',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic registration & Ticketing',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Basic theming',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Email Reciept',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }, {
    title: 'Expensive donor data',
    icon: Pricing_data_jsx(CheckCircleFilled_default.a, null)
  }]
}];
// CONCATENATED MODULE: ./container/Pricing/Pricing.js
var Pricing_jsx = external_react_default.a.createElement;


 // demo data



const Pricing = () => {
  const {
    0: currentPlan,
    1: setCurrentPlan
  } = Object(external_react_["useState"])('monthly');
  let plans = [];

  if (currentPlan === 'monthly') {
    plans = monthlyPlans;
  }

  if (currentPlan === 'annually') {
    plans = annuallyPlans;
  }

  return Pricing_jsx(Pricing_style, null, Pricing_jsx(Pricing_style_PricingHeader, null, Pricing_jsx(Pricing_style_Title, null, "Select Your Pricing Plan"), Pricing_jsx(Description, null, "Simple Transparent pricing for everyone, whether you are local hotel owner or an agent."), Pricing_jsx(ButtonGroup, null, Pricing_jsx(Pricing_style_Button, {
    onClick: () => setCurrentPlan('monthly'),
    className: currentPlan === 'monthly' ? 'active' : null
  }, "Monthly"), Pricing_jsx(Pricing_style_Button, {
    onClick: () => setCurrentPlan('annually'),
    className: currentPlan === 'annually' ? 'active' : null
  }, "Annually"))), Pricing_jsx(PricingTableArea, null, Pricing_jsx(PricingItems, {
    plans: plans
  })));
};

/* harmony default export */ var Pricing_Pricing = (Pricing);
// CONCATENATED MODULE: ./pages/pricing-plan.js
var pricing_plan_jsx = external_react_default.a.createElement;



function pricingPage() {
  return pricing_plan_jsx(external_react_default.a.Fragment, null, pricing_plan_jsx(head_default.a, null, pricing_plan_jsx("title", null, "Pricing plan | TripFinder.")), pricing_plan_jsx(Pricing_Pricing, null));
}

/***/ }),

/***/ "Y9m+":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/CloseCircleFilled");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });