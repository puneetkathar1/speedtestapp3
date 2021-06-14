(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/hooks/useOnClickOutside */ "./library/hooks/useOnClickOutside.js");
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Layout\\Header\\ProfileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ProfileMenu = function ProfileMenu(_ref) {
  _s();

  var avatar = _ref.avatar;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      logOut = _useContext.logOut;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      state = _useState[0],
      setState = _useState[1];

  var handleDropdown = function handleDropdown() {
    setState(!state);
  };

  var closeDropdown = function closeDropdown() {
    setState(false);
  };

  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, function () {
    return setState(false);
  });
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, avatar), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "dropdown-menu ".concat(state ? 'active' : 'hide'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "View Profile")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Add Hotel")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Log Out"))));
};

_s(ProfileMenu, "t4Dvi0A244Vd06FFO1Zz9rJI0W0=", false, function () {
  return [library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = ProfileMenu;
/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

var _c;

$RefreshReg$(_c, "ProfileMenu");

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

/***/ }),

/***/ "./library/hooks/useOnClickOutside.js":
/*!********************************************!*\
  !*** ./library/hooks/useOnClickOutside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useOnClickOutside(ref, handler) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0xheW91dC9IZWFkZXIvUHJvZmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9saWJyYXJ5L2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVNZW51IiwiYXZhdGFyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwibG9nT3V0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFERF9IT1RFTF9QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQWN0aXZlTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIndpdGhSb3V0ZXIiLCJyZWYiLCJoYW5kbGVyIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbEMsb0JBQW1CQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE3QjtBQUFBLE1BQVFDLE1BQVIsZUFBUUEsTUFBUjs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUFs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O0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBREgsQ0FERjtBQUtELENBWEQ7O0tBQU1GLFU7QUFhUyxxRUFBQVMsOERBQVUsQ0FBQ1QsVUFBRCxDQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBLFNBQVNKLGlCQUFULENBQTJCYyxHQUEzQixFQUFnQ0MsT0FBaEMsRUFBeUM7QUFBQTs7QUFDdkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixVQUFJLENBQUNKLEdBQUcsQ0FBQ0ssT0FBTCxJQUFnQkwsR0FBRyxDQUFDSyxPQUFKLENBQVlDLFFBQVosQ0FBcUJGLEtBQUssQ0FBQ0csTUFBM0IsQ0FBcEIsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFDRE4sYUFBTyxDQUFDRyxLQUFELENBQVA7QUFDRCxLQUxEOztBQU9BSSxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDTixRQUF2QztBQUNBSyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDTixRQUF4QztBQUVBLFdBQU8sWUFBTTtBQUNYSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDUCxRQUExQztBQUNBSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDUCxRQUEzQztBQUNELEtBSEQ7QUFJRCxHQWZRLEVBZU4sQ0FBQ0gsR0FBRCxFQUFNQyxPQUFOLENBZk0sQ0FBVDtBQWdCRDs7R0FqQlFmLGlCOztBQW1CTUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnbGlicmFyeS9ob29rcy91c2VPbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluayc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvQXV0aFByb3ZpZGVyJztcbmltcG9ydCB7XG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcbiAgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFLFxuICBBRERfSE9URUxfUEFHRSxcbn0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xuXG5jb25zdCBQcm9maWxlTWVudSA9ICh7IGF2YXRhciB9KSA9PiB7XG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIXN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT25DbGlja091dHNpZGUoZHJvcGRvd25SZWYsICgpID0+IHNldFN0YXRlKGZhbHNlKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1kcm9wZG93blwiIHJlZj17ZHJvcGRvd25SZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oYW5kbGVyXCIgb25DbGljaz17aGFuZGxlRHJvcGRvd259PlxuICAgICAgICB7YXZhdGFyfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNZW51IGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUgJHtzdGF0ZSA/ICdhY3RpdmUnIDogJ2hpZGUnfWB9PlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjBcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9QUk9GSUxFX1BBR0V9PlZpZXcgUHJvZmlsZTwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17Y2xvc2VEcm9wZG93bn0ga2V5PVwiMVwiPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FERF9IT1RFTF9QQUdFfT5BZGQgSG90ZWw8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjJcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0V9PlxuICAgICAgICAgICAgQWNjb3VudCBTZXR0aW5nc1xuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgQWN0aXZlTGluayA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbcmVmLCBoYW5kbGVyXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU9uQ2xpY2tPdXRzaWRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==