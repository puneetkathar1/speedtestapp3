exports.ids = [24];
exports.modules = {

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

/***/ "uahh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a5Fm");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RJ0H");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("t+0A");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("067r");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const MobileMenu = ({
  className
}) => {
  // auth context
  const {
    loggedIn,
    logOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__[/* AuthContext */ "a"]);
  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0"
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__[/* HOME_PAGE */ "h"]
  }, "Hotels")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1"
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__[/* LISTING_POSTS_PAGE */ "i"]
  }, "Listing")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2"
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__[/* PRICING_PLAN_PAGE */ "k"]
  }, "Pricing")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3"
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__[/* AGENT_ACCOUNT_SETTINGS_PAGE */ "b"]
  }, "Account Settings")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "4"
  }, __jsx("button", {
    onClick: logOut
  }, "Log Out")));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ })

};;