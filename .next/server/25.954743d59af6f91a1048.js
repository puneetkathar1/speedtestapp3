exports.ids = [25];
exports.modules = {

/***/ "+COd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./library/hooks/useOnClickOutside.js


function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
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
  }, [ref, handler]);
}

/* harmony default export */ var hooks_useOnClickOutside = (useOnClickOutside);
// EXTERNAL MODULE: ./library/helpers/activeLink.js
var activeLink = __webpack_require__("RJ0H");

// EXTERNAL MODULE: ./context/AuthProvider.js
var AuthProvider = __webpack_require__("t+0A");

// EXTERNAL MODULE: ./settings/constant.js
var constant = __webpack_require__("067r");

// CONCATENATED MODULE: ./container/Layout/Header/ProfileMenu.js

var __jsx = external_react_default.a.createElement;






const ProfileMenu = ({
  avatar
}) => {
  const {
    logOut
  } = Object(external_react_["useContext"])(AuthProvider["a" /* AuthContext */]);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = Object(external_react_["useRef"])(null);
  hooks_useOnClickOutside(dropdownRef, () => setState(false));
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown
  }, avatar), __jsx(menu_default.a, {
    className: `dropdown-menu ${state ? 'active' : 'hide'}`
  }, __jsx(menu_default.a.Item, {
    onClick: closeDropdown,
    key: "0"
  }, __jsx(activeLink["a" /* default */], {
    href: constant["e" /* AGENT_PROFILE_PAGE */]
  }, "View Profile")), __jsx(menu_default.a.Item, {
    onClick: closeDropdown,
    key: "1"
  }, __jsx(activeLink["a" /* default */], {
    href: constant["a" /* ADD_HOTEL_PAGE */]
  }, "Add Hotel")), __jsx(menu_default.a.Item, {
    onClick: closeDropdown,
    key: "2"
  }, __jsx(activeLink["a" /* default */], {
    href: constant["b" /* AGENT_ACCOUNT_SETTINGS_PAGE */]
  }, "Account Settings")), __jsx(menu_default.a.Item, {
    key: "3"
  }, __jsx("button", {
    onClick: logOut
  }, "Log Out"))));
};

/* harmony default export */ var Header_ProfileMenu = __webpack_exports__["default"] = (ProfileMenu);

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

/***/ })

};;