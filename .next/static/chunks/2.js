(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Layout\\Header\\MainMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var MainMenu = function MainMenu(_ref) {
  var className = _ref.className,
      router = _ref.router;
  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Hotels")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Listing")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_PROFILE_PAGE"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Agent")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: router.pathname === settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"] ? 'active' : '',
    href: "".concat(settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Pricing")));
};

_c = MainMenu;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MainMenu));

var _c, _c2;

$RefreshReg$(_c, "MainMenu");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./library/helpers/activeLink.js":
/*!***************************************!*\
  !*** ./library/helpers/activeLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\library\\helpers\\activeLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ActiveLink = function ActiveLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

_c = ActiveLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

var _c, _c2;

$RefreshReg$(_c, "ActiveLink");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0xheW91dC9IZWFkZXIvTWFpbk1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rLmpzIl0sIm5hbWVzIjpbIk1haW5NZW51IiwiY2xhc3NOYW1lIiwicm91dGVyIiwicGF0aG5hbWUiLCJIT01FX1BBR0UiLCJMSVNUSU5HX1BPU1RTX1BBR0UiLCJBR0VOVF9QUk9GSUxFX1BBR0UiLCJQUklDSU5HX1BMQU5fUEFHRSIsIndpdGhSb3V0ZXIiLCJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBT0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMkI7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQzFDLFNBQ0U7QUFBTSxhQUFTLEVBQUVELFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxhQUFTLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQkMsMkRBQXBCLEdBQWdDLFFBQWhDLEdBQTJDLEVBRHhEO0FBRUUsUUFBSSxZQUFLQSwyREFBTCxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBU0UsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQ0UsYUFBUyxFQUFFRixNQUFNLENBQUNDLFFBQVAsS0FBb0JFLG9FQUFwQixHQUF5QyxRQUF6QyxHQUFvRCxFQURqRTtBQUVFLFFBQUksWUFBS0Esb0VBQUwsQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FURixFQWlCRSwyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxhQUFTLEVBQUVILE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQkcsb0VBQXBCLEdBQXlDLFFBQXpDLEdBQW9ELEVBRGpFO0FBRUUsUUFBSSxZQUFLQSxvRUFBTCxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQWpCRixFQXlCRSwyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxhQUFTLEVBQUVKLE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQkksbUVBQXBCLEdBQXdDLFFBQXhDLEdBQW1ELEVBRGhFO0FBRUUsUUFBSSxZQUFLQSxtRUFBTCxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQXpCRixDQURGO0FBb0NELENBckNEOztLQUFNUCxRO0FBdUNTLHFFQUFBUSw4REFBVSxDQUFDUixRQUFELENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7O0FBQ0EsSUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkM7QUFBQSxNQUF4Q1IsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JTLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CUixNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYUyxJQUFXLFFBQVhBLElBQVc7O0FBQzVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLENBQUMsRUFBSTtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FaLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZSixJQUFaO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUcsYUFBUyxFQUFFVixTQUFkO0FBQXlCLFFBQUksRUFBRVUsSUFBL0I7QUFBcUMsV0FBTyxFQUFFQyxXQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERjtBQUtELENBWEQ7O0tBQU1ELFU7QUFhUyxxRUFBQUQsOERBQVUsQ0FBQ0MsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJ2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rJztcblxuaW1wb3J0IHtcbiAgSE9NRV9QQUdFLFxuICBMSVNUSU5HX1BPU1RTX1BBR0UsXG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcbiAgUFJJQ0lOR19QTEFOX1BBR0UsXG59IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcblxuY29uc3QgTWFpbk1lbnUgPSAoeyBjbGFzc05hbWUsIHJvdXRlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIwXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IEhPTUVfUEFHRSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgaHJlZj17YCR7SE9NRV9QQUdFfWB9XG4gICAgICAgID5cbiAgICAgICAgICBIb3RlbHNcbiAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cbiAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gTElTVElOR19QT1NUU19QQUdFID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICBocmVmPXtgJHtMSVNUSU5HX1BPU1RTX1BBR0V9YH1cbiAgICAgICAgPlxuICAgICAgICAgIExpc3RpbmdcbiAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cbiAgICAgICAgPEFjdGl2ZUxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gQUdFTlRfUFJPRklMRV9QQUdFID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICBocmVmPXtgJHtBR0VOVF9QUk9GSUxFX1BBR0V9YH1cbiAgICAgICAgPlxuICAgICAgICAgIEFnZW50XG4gICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XG4gICAgICAgIDxBY3RpdmVMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFBSSUNJTkdfUExBTl9QQUdFID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICBocmVmPXtgJHtQUklDSU5HX1BMQU5fUEFHRX1gfVxuICAgICAgICA+XG4gICAgICAgICAgUHJpY2luZ1xuICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE1haW5NZW51KTtcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5jb25zdCBBY3RpdmVMaW5rID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goaHJlZik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7XG4iXSwic291cmNlUm9vdCI6IiJ9