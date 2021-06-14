exports.ids = [2];
exports.modules = {

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Layout\\Header\\MainMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const MainMenu = ({
  className,
  router
}) => {
  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"] ? 'active' : '',
    href: `${settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Hotels")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"] ? 'active' : '',
    href: `${settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Listing")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"] ? 'active' : '',
    href: `${settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Agent")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"] ? 'active' : '',
    href: `${settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Pricing")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MainMenu));

/***/ }),

/***/ "./library/helpers/activeLink.js":
/*!***************************************!*\
  !*** ./library/helpers/activeLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\library\\helpers\\activeLink.js";

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
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9NYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluay5qcyJdLCJuYW1lcyI6WyJNYWluTWVudSIsImNsYXNzTmFtZSIsInJvdXRlciIsInBhdGhuYW1lIiwiSE9NRV9QQUdFIiwiTElTVElOR19QT1NUU19QQUdFIiwiQUdFTlRfUFJPRklMRV9QQUdFIiwiUFJJQ0lOR19QTEFOX1BBR0UiLCJ3aXRoUm91dGVyIiwiQWN0aXZlTGluayIsImNoaWxkcmVuIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFPQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUEyQjtBQUMxQyxTQUNFO0FBQU0sYUFBUyxFQUFFRCxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQ0UsYUFBUyxFQUFFQyxNQUFNLENBQUNDLFFBQVAsS0FBb0JDLDJEQUFwQixHQUFnQyxRQUFoQyxHQUEyQyxFQUR4RDtBQUVFLFFBQUksRUFBRyxHQUFFQSwyREFBVSxFQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQVNFLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLGFBQVMsRUFBRUYsTUFBTSxDQUFDQyxRQUFQLEtBQW9CRSxvRUFBcEIsR0FBeUMsUUFBekMsR0FBb0QsRUFEakU7QUFFRSxRQUFJLEVBQUcsR0FBRUEsb0VBQW1CLEVBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVRGLEVBaUJFLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLGFBQVMsRUFBRUgsTUFBTSxDQUFDQyxRQUFQLEtBQW9CRyxvRUFBcEIsR0FBeUMsUUFBekMsR0FBb0QsRUFEakU7QUFFRSxRQUFJLEVBQUcsR0FBRUEsb0VBQW1CLEVBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQWpCRixFQXlCRSwyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxhQUFTLEVBQUVKLE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQkksbUVBQXBCLEdBQXdDLFFBQXhDLEdBQW1ELEVBRGhFO0FBRUUsUUFBSSxFQUFHLEdBQUVBLG1FQUFrQixFQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0F6QkYsQ0FERjtBQW9DRCxDQXJDRDs7QUF1Q2VDLDZIQUFVLENBQUNSLFFBQUQsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7O0FBQ0EsTUFBTVMsVUFBVSxHQUFHLENBQUM7QUFBRVIsV0FBRjtBQUFhUyxVQUFiO0FBQXVCUixRQUF2QjtBQUErQlM7QUFBL0IsQ0FBRCxLQUEyQztBQUM1RCxRQUFNQyxXQUFXLEdBQUdDLENBQUMsSUFBSTtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FaLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZSixJQUFaO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUcsYUFBUyxFQUFFVixTQUFkO0FBQXlCLFFBQUksRUFBRVUsSUFBL0I7QUFBcUMsV0FBTyxFQUFFQyxXQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERjtBQUtELENBWEQ7O0FBYWVGLDZIQUFVLENBQUNDLFVBQUQsQ0FBekIsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluayc7XG5cbmltcG9ydCB7XG4gIEhPTUVfUEFHRSxcbiAgTElTVElOR19QT1NUU19QQUdFLFxuICBBR0VOVF9QUk9GSUxFX1BBR0UsXG4gIFBSSUNJTkdfUExBTl9QQUdFLFxufSBmcm9tICdzZXR0aW5ncy9jb25zdGFudCc7XG5cbmNvbnN0IE1haW5NZW51ID0gKHsgY2xhc3NOYW1lLCByb3V0ZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMFwiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBIT01FX1BBR0UgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGhyZWY9e2Ake0hPTUVfUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgSG90ZWxzXG4gICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IExJU1RJTkdfUE9TVFNfUEFHRSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgaHJlZj17YCR7TElTVElOR19QT1NUU19QQUdFfWB9XG4gICAgICAgID5cbiAgICAgICAgICBMaXN0aW5nXG4gICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IEFHRU5UX1BST0ZJTEVfUEFHRSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgaHJlZj17YCR7QUdFTlRfUFJPRklMRV9QQUdFfWB9XG4gICAgICAgID5cbiAgICAgICAgICBBZ2VudFxuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxuICAgICAgICA8QWN0aXZlTGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBQUklDSU5HX1BMQU5fUEFHRSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgaHJlZj17YCR7UFJJQ0lOR19QTEFOX1BBR0V9YH1cbiAgICAgICAgPlxuICAgICAgICAgIFByaWNpbmdcbiAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgPC9NZW51PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNYWluTWVudSk7XG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgQWN0aXZlTGluayA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==