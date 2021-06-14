exports.ids = [1];
exports.modules = {

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/hooks/useOnClickOutside */ "./library/hooks/useOnClickOutside.js");
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Layout\\Header\\ProfileMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ProfileMenu = ({
  avatar
}) => {
  const {
    logOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, () => setState(false));
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, avatar), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: `dropdown-menu ${state ? 'active' : 'hide'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "View Profile")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Add Hotel")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Log Out"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

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

/***/ }),

/***/ "./library/hooks/useOnClickOutside.js":
/*!********************************************!*\
  !*** ./library/hooks/useOnClickOutside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9Qcm9maWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVNZW51IiwiYXZhdGFyIiwibG9nT3V0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFERF9IT1RFTF9QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQWN0aXZlTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIndpdGhSb3V0ZXIiLCJyZWYiLCJoYW5kbGVyIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDbEMsUUFBTTtBQUFFQztBQUFGLE1BQWFDLHdEQUFVLENBQUNDLGdFQUFELENBQTdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7O0FBRUEsUUFBTUMsY0FB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QUFKLENBQVlDLFFBQVosQ0FBcUJGLEtBQUssQ0FBQ0csTUFBM0IsQ0FBcEIsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFDRE4sYUFBTyxDQUFDRyxLQUFELENBQVA7QUFDRCxLQUxEOztBQU9BSSxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDTixRQUF2QztBQUNBSyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDTixRQUF4QztBQUVBLFdBQU8sTUFBTTtBQUNYSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDUCxRQUExQztBQUNBSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDUCxRQUEzQztBQUNELEtBSEQ7QUFJRCxHQWZRLEVBZU4sQ0FBQ0gsR0FBRCxFQUFNQyxPQUFOLENBZk0sQ0FBVDtBQWdCRDs7QUFFY2YsZ0ZBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnbGlicmFyeS9ob29rcy91c2VPbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluayc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvQXV0aFByb3ZpZGVyJztcbmltcG9ydCB7XG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcbiAgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFLFxuICBBRERfSE9URUxfUEFHRSxcbn0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xuXG5jb25zdCBQcm9maWxlTWVudSA9ICh7IGF2YXRhciB9KSA9PiB7XG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIXN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlT25DbGlja091dHNpZGUoZHJvcGRvd25SZWYsICgpID0+IHNldFN0YXRlKGZhbHNlKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1kcm9wZG93blwiIHJlZj17ZHJvcGRvd25SZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oYW5kbGVyXCIgb25DbGljaz17aGFuZGxlRHJvcGRvd259PlxuICAgICAgICB7YXZhdGFyfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNZW51IGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUgJHtzdGF0ZSA/ICdhY3RpdmUnIDogJ2hpZGUnfWB9PlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjBcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9QUk9GSUxFX1BBR0V9PlZpZXcgUHJvZmlsZTwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17Y2xvc2VEcm9wZG93bn0ga2V5PVwiMVwiPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FERF9IT1RFTF9QQUdFfT5BZGQgSG90ZWw8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjJcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0V9PlxuICAgICAgICAgICAgQWNjb3VudCBTZXR0aW5nc1xuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgQWN0aXZlTGluayA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbcmVmLCBoYW5kbGVyXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU9uQ2xpY2tPdXRzaWRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==