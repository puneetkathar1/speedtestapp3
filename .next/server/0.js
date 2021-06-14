exports.ids = [0];
exports.modules = {

/***/ "./components/Map/MapAutoComplete.js":
/*!*******************************************!*\
  !*** ./components/Map/MapAutoComplete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "react-google-maps/lib/components/places/StandaloneSearchBox");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\MapAutoComplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(props => {
  const {
    getinputvalue
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchedLocation: '',
    searchedPlaceAPIData: []
  });

  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});

  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
    getinputvalue(locationInput);
  };

  return __jsx("div", {
    className: "map_autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MapAutoComplete);

/***/ }),

/***/ "./components/Map/mapDataHelper.js":
/*!*****************************************!*\
  !*** ./components/Map/mapDataHelper.js ***!
  \*****************************************/
/*! exports provided: mapDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDataHelper", function() { return mapDataHelper; });
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

/***/ "./container/Layout/Header/NavbarSearch.js":
/*!*************************************************!*\
  !*** ./container/Layout/Header/NavbarSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Map/MapAutoComplete */ "./components/Map/MapAutoComplete.js");
/* harmony import */ var components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Map/mapDataHelper */ "./components/Map/mapDataHelper.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.style */ "./container/Layout/Header/Header.style.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Layout\\Header\\NavbarSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NavbarSearch = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__["SearchContext"]);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0
  };

  const updatevalueFunc = value => {
    const {
      searchedPlaceAPIData
    } = value;
    let tempLocation = [];
    const mapData = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(searchedPlaceAPIData) ? Object(components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__["mapDataHelper"])(searchedPlaceAPIData) : [];

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(mapData) && mapData.length !== 0) {
      mapData.forEach(singleMapData => tempLocation.push({
        location_lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
        location_lng: singleMapData ? singleMapData.lng.toFixed(3) : null
      }));
    }

    const searchLocation = tempLocation ? tempLocation[0] : {};

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(searchLocation)) {
      const query = {
        location_lat: parseFloat(searchLocation.location_lat),
        location_lng: parseFloat(searchLocation.location_lng)
      };
      const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__["setStateToUrl"])(query);
      dispatch({
        type: 'UPDATE',
        payload: _objectSpread(_objectSpread({}, initialState), query)
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: '/listing',
        query: params
      });
    }
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_6__["NavbarSearchWrapper"], {
    className: "navbar_search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updatevalue: value => updatevalueFunc(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavbarSearch));

/***/ }),

/***/ "./library/helpers/url_handler.js":
/*!****************************************!*\
  !*** ./library/helpers/url_handler.js ***!
  \****************************************/
/*! exports provided: createUrl, setStateToUrl, setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl", function() { return setStateToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION", function() { return setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION; });
function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (urlData[key] && urlData[key] !== null && urlData[key] !== '' && urlData[key] !== ',' && urlData[key] !== undefined && urlData[key].length !== 0) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  }); // return search;

  return search.substring(0, search.length - 1);
}
function setStateToUrl(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}
function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9NYXBBdXRvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvbWFwRGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9OYXZiYXJTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyLmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwiY29tcG9zZSIsIndpdGhQcm9wcyIsImdvb2dsZU1hcFVSTCIsInByb2Nlc3MiLCJsb2FkaW5nRWxlbWVudCIsImhlaWdodCIsImNvbnRhaW5lckVsZW1lbnQiLCJ3aXRoU2NyaXB0anMiLCJwcm9wcyIsImdldGlucHV0dmFsdWUiLCJsb2NhdGlvbklucHV0Iiwic2V0TG9jYXRpb25JbnB1dCIsInVzZVN0YXRlIiwic2VhcmNoZWRMb2NhdGlvbiIsInNlYXJjaGVkUGxhY2VBUElEYXRhIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZnMiLCJ1c2VSZWYiLCJvblBsYWNlc0NoYW5nZWQiLCJwbGFjZXMiLCJjdXJyZW50IiwiZ2V0UGxhY2VzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJoYW5kbGVPblByZXNzRW50ZXIiLCJNYXBBdXRvQ29tcGxldGUiLCJ1cGRhdGV2YWx1ZSIsIm1hcERhdGFIZWxwZXIiLCJpbmZvVmFsdWUiLCJ0ZW1wTWFwT2JqIiwidGVtcE1hcEFycmF5IiwibGVuZ3RoIiwibWFwIiwicGxhY2VfaWQiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiaWQiLCJsYXQiLCJsbmciLCJmb3JtYXR0ZWRBZGRyZXNzIiwiY2l0eSIsInN0YXRlX2xvbmciLCJzdGF0ZV9zaG9ydCIsInppcGNvZGUiLCJjb3VudHJ5X2xvbmciLCJjb3VudHJ5X3Nob3J0IiwiaSIsInR5cGVzIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsInB1c2giLCJOYXZiYXJTZWFyY2giLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJhbWVuaXRpZXMiLCJwcm9wZXJ0eSIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJtaW5QcmljZSIsInBhcnNlSW50IiwibWF4UHJpY2UiLCJsb2NhdGlvbl9sYXQiLCJsb2NhdGlvbl9sbmciLCJyb29tIiwiZ3Vlc3QiLCJ1cGRhdGV2YWx1ZUZ1bmMiLCJ0ZW1wTG9jYXRpb24iLCJtYXBEYXRhIiwiaXNFbXB0eSIsImZvckVhY2giLCJzaW5nbGVNYXBEYXRhIiwidG9GaXhlZCIsInNlYXJjaExvY2F0aW9uIiwicXVlcnkiLCJwYXJzZUZsb2F0IiwicGFyYW1zIiwic2V0U3RhdGVUb1VybCIsInR5cGUiLCJwYXlsb2FkIiwiUm91dGVyIiwicGF0aG5hbWUiLCJ3aXRoUm91dGVyIiwiY3JlYXRlVXJsIiwidXJsRGF0YSIsImtleXMiLCJPYmplY3QiLCJzZWFyY2giLCJrZXkiLCJ1bmRlZmluZWQiLCJzdWJzdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImpvaW4iLCJzZXRTdGF0ZVRvVXJsX09OX05FWFRfSlNfUk9VVEVSX1BVU0hfVkVSU0lPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsV0FBVyxHQUFHQyx5REFBTyxDQUN6QkMsMkRBQVMsQ0FBQztBQUNSQyxjQUFZLEVBQUVDLCtHQUROO0FBRVJDLGdCQUFjLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlI7QUFHUkMsa0JBQWdCLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFHO0FB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UCxHQUFldEMsS0FBSyxDQUFDc0MsR0FBRCxDQUFwQjtBQUNBO0FBN0RKO0FBK0REO0FBQ0Y7O0FBQ0QsU0FBT0wsU0FBUyxDQUFDQyxPQUFELENBQWhCO0FBQ0QsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFNjcmlwdGpzIH0gZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMnO1xuaW1wb3J0IFN0YW5kYWxvbmVTZWFyY2hCb3ggZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3gnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoe1xuICAgIGdvb2dsZU1hcFVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dPT0dMRV9NQVBfQVBJX0tFWSxcbiAgICBsb2FkaW5nRWxlbWVudDogPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSAvPixcbiAgICBjb250YWluZXJFbGVtZW50OiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDQwMHB4YCB9fSAvPixcbiAgfSksXG4gIHdpdGhTY3JpcHRqc1xuKSgocHJvcHMpID0+IHtcbiAgY29uc3QgeyBnZXRpbnB1dHZhbHVlIH0gPSBwcm9wcztcbiAgY29uc3QgW2xvY2F0aW9uSW5wdXQsIHNldExvY2F0aW9uSW5wdXRdID0gdXNlU3RhdGUoe1xuICAgIHNlYXJjaGVkTG9jYXRpb246ICcnLFxuICAgIHNlYXJjaGVkUGxhY2VBUElEYXRhOiBbXSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAnMTMnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHNldExvY2F0aW9uSW5wdXQoe1xuICAgICAgc2VhcmNoZWRMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuICBjb25zdCByZWZzID0gdXNlUmVmKHt9KTtcbiAgY29uc3Qgb25QbGFjZXNDaGFuZ2VkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlcyA9IHJlZnMuY3VycmVudC5nZXRQbGFjZXMoKTtcbiAgICBzZXRMb2NhdGlvbklucHV0KHtcbiAgICAgIHNlYXJjaGVkTG9jYXRpb246IHBsYWNlcyAmJiBwbGFjZXNbMF0gJiYgcGxhY2VzWzBdLmZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgc2VhcmNoZWRQbGFjZUFQSURhdGE6IHBsYWNlcyA/IHBsYWNlcyA6IFtdLFxuICAgIH0pO1xuICAgIGdldGlucHV0dmFsdWUoe1xuICAgICAgc2VhcmNoZWRMb2NhdGlvbjogcGxhY2VzICYmIHBsYWNlc1swXSAmJiBwbGFjZXNbMF0uZm9ybWF0dGVkX2FkZHJlc3MsXG4gICAgICBzZWFyY2hlZFBsYWNlQVBJRGF0YTogcGxhY2VzID8gcGxhY2VzIDogW10sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25QcmVzc0VudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAnMTMnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHNldExvY2F0aW9uSW5wdXQoeyBzZWFyY2hlZExvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgZ2V0aW5wdXR2YWx1ZShsb2NhdGlvbklucHV0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwX2F1dG9jb21wbGV0ZVwiPlxuICAgICAgPFN0YW5kYWxvbmVTZWFyY2hCb3ggcmVmPXtyZWZzfSBvblBsYWNlc0NoYW5nZWQ9e29uUGxhY2VzQ2hhbmdlZH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbklucHV0LnNlYXJjaGVkTG9jYXRpb24gfHwgJyd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2gg4oCcVGhhaWxhbmQsIEFzaWHigJ1cIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlT25QcmVzc0VudGVyfVxuICAgICAgICAvPlxuICAgICAgPC9TdGFuZGFsb25lU2VhcmNoQm94PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmNvbnN0IE1hcEF1dG9Db21wbGV0ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVwZGF0ZXZhbHVlIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxTZWFyY2hJbnB1dCBnZXRpbnB1dHZhbHVlPXt1cGRhdGV2YWx1ZX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBBdXRvQ29tcGxldGU7XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFwRGF0YUhlbHBlcihpbmZvVmFsdWUpIHtcbiAgY29uc3QgdGVtcE1hcE9iaiA9IHt9O1xuICBjb25zdCB0ZW1wTWFwQXJyYXkgPSBbXTtcblxuICBpZiAoaW5mb1ZhbHVlICYmIGluZm9WYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICBpbmZvVmFsdWUubWFwKFxuICAgICAgKHtcbiAgICAgICAgcGxhY2VfaWQsXG4gICAgICAgIGFkZHJlc3NfY29tcG9uZW50cyxcbiAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3MsXG4gICAgICAgIGdlb21ldHJ5OiB7IGxvY2F0aW9uIH0sXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGxldCBpZCA9ICcnO1xuICAgICAgICBsZXQgbGF0ID0gJyc7XG4gICAgICAgIGxldCBsbmcgPSAnJztcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSAnJztcbiAgICAgICAgbGV0IGNpdHkgPSAnJztcbiAgICAgICAgbGV0IHN0YXRlX2xvbmcgPSAnJztcbiAgICAgICAgbGV0IHN0YXRlX3Nob3J0ID0gJyc7XG4gICAgICAgIGxldCB6aXBjb2RlID0gJyc7XG4gICAgICAgIGxldCBjb3VudHJ5X2xvbmcgPSAnJztcbiAgICAgICAgbGV0IGNvdW50cnlfc2hvcnQgPSAnJztcblxuICAgICAgICBpZCA9IHBsYWNlX2lkO1xuICAgICAgICBsYXQgPSBsb2NhdGlvbi5sYXQoKTtcbiAgICAgICAgbG5nID0gbG9jYXRpb24ubG5nKCk7XG4gICAgICAgIGZvcm1hdHRlZEFkZHJlc3MgPSBmb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgaWYgKGFkZHJlc3NfY29tcG9uZW50cykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcmVzc19jb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1swXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsaXR5JzpcbiAgICAgICAgICAgICAgICAgIGNpdHkgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xJzpcbiAgICAgICAgICAgICAgICAgIHN0YXRlX2xvbmcgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgc3RhdGVfc2hvcnQgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50cnknOlxuICAgICAgICAgICAgICAgICAgY291bnRyeV9sb25nID0gYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlfc2hvcnQgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bvc3RhbF9jb2RlJzpcbiAgICAgICAgICAgICAgICAgIHppcGNvZGUgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGVtcE1hcE9iai5pZCA9IGlkO1xuICAgICAgICB0ZW1wTWFwT2JqLmxhdCA9IGxhdDtcbiAgICAgICAgdGVtcE1hcE9iai5sbmcgPSBsbmc7XG4gICAgICAgIHRlbXBNYXBPYmouZm9ybWF0dGVkQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3M7XG4gICAgICAgIHRlbXBNYXBPYmouY2l0eSA9IGNpdHk7XG4gICAgICAgIHRlbXBNYXBPYmouc3RhdGVfc2hvcnQgPSBzdGF0ZV9zaG9ydDtcbiAgICAgICAgdGVtcE1hcE9iai5zdGF0ZV9sb25nID0gc3RhdGVfbG9uZztcbiAgICAgICAgdGVtcE1hcE9iai56aXBjb2RlID0gemlwY29kZTtcbiAgICAgICAgdGVtcE1hcE9iai5jb3VudHJ5X3Nob3J0ID0gY291bnRyeV9zaG9ydDtcbiAgICAgICAgdGVtcE1hcE9iai5jb3VudHJ5X2xvbmcgPSBjb3VudHJ5X2xvbmc7XG4gICAgICAgIHRlbXBNYXBBcnJheS5wdXNoKHRlbXBNYXBPYmopO1xuICAgICAgICByZXR1cm4gdGVtcE1hcEFycmF5O1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdGVtcE1hcEFycmF5O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCBNYXBBdXRvQ29tcGxldGUgZnJvbSAnY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlJztcbmltcG9ydCB7IG1hcERhdGFIZWxwZXIgfSBmcm9tICdjb21wb25lbnRzL01hcC9tYXBEYXRhSGVscGVyJztcbmltcG9ydCB7IE5hdmJhclNlYXJjaFdyYXBwZXIgfSBmcm9tICcuL0hlYWRlci5zdHlsZSc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnY29udGV4dC9TZWFyY2hQcm92aWRlcic7XG5pbXBvcnQgeyBzZXRTdGF0ZVRvVXJsIH0gZnJvbSAnbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyJztcblxuY29uc3QgTmF2YmFyU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGFtZW5pdGllczogc3RhdGUuYW1lbml0aWVzIHx8IFtdLFxuICAgIHByb3BlcnR5OiBzdGF0ZS5wcm9wZXJ0eSB8fCBbXSxcbiAgICBzZXRTdGFydERhdGU6IHN0YXRlLnNldFN0YXJ0RGF0ZSB8fCBudWxsLFxuICAgIHNldEVuZERhdGU6IHN0YXRlLnNldEVuZERhdGUgfHwgbnVsbCxcbiAgICBtaW5QcmljZTogcGFyc2VJbnQoc3RhdGUubWluUHJpY2UpIHx8IDAsXG4gICAgbWF4UHJpY2U6IHBhcnNlSW50KHN0YXRlLm1heFByaWNlKSB8fCAxMDAsXG4gICAgbG9jYXRpb25fbGF0OiBzdGF0ZS5sb2NhdGlvbl9sYXQgfHwgbnVsbCxcbiAgICBsb2NhdGlvbl9sbmc6IHN0YXRlLmxvY2F0aW9uX2xuZyB8fCBudWxsLFxuICAgIHJvb206IHBhcnNlSW50KHN0YXRlLnJvb20pIHx8IDAsXG4gICAgZ3Vlc3Q6IHBhcnNlSW50KHN0YXRlLmd1ZXN0KSB8fCAwLFxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZXZhbHVlRnVuYyA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoZWRQbGFjZUFQSURhdGEgfSA9IHZhbHVlO1xuICAgIGxldCB0ZW1wTG9jYXRpb24gPSBbXTtcbiAgICBjb25zdCBtYXBEYXRhID0gIWlzRW1wdHkoc2VhcmNoZWRQbGFjZUFQSURhdGEpXG4gICAgICA/IG1hcERhdGFIZWxwZXIoc2VhcmNoZWRQbGFjZUFQSURhdGEpXG4gICAgICA6IFtdO1xuICAgIGlmICghaXNFbXB0eShtYXBEYXRhKSAmJiBtYXBEYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbWFwRGF0YS5mb3JFYWNoKChzaW5nbGVNYXBEYXRhKSA9PlxuICAgICAgICB0ZW1wTG9jYXRpb24ucHVzaCh7XG4gICAgICAgICAgbG9jYXRpb25fbGF0OiBzaW5nbGVNYXBEYXRhID8gc2luZ2xlTWFwRGF0YS5sYXQudG9GaXhlZCgzKSA6IG51bGwsXG4gICAgICAgICAgbG9jYXRpb25fbG5nOiBzaW5nbGVNYXBEYXRhID8gc2luZ2xlTWFwRGF0YS5sbmcudG9GaXhlZCgzKSA6IG51bGwsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gdGVtcExvY2F0aW9uID8gdGVtcExvY2F0aW9uWzBdIDoge307XG4gICAgaWYgKCFpc0VtcHR5KHNlYXJjaExvY2F0aW9uKSkge1xuICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgIGxvY2F0aW9uX2xhdDogcGFyc2VGbG9hdChzZWFyY2hMb2NhdGlvbi5sb2NhdGlvbl9sYXQpLFxuICAgICAgICBsb2NhdGlvbl9sbmc6IHBhcnNlRmxvYXQoc2VhcmNoTG9jYXRpb24ubG9jYXRpb25fbG5nKSxcbiAgICAgIH07XG4gICAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKHF1ZXJ5KTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbGlzdGluZycsXG4gICAgICAgIHF1ZXJ5OiBwYXJhbXMsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyU2VhcmNoV3JhcHBlciBjbGFzc05hbWU9XCJuYXZiYXJfc2VhcmNoXCI+XG4gICAgICA8TWFwQXV0b0NvbXBsZXRlIHVwZGF0ZXZhbHVlPXsodmFsdWUpID0+IHVwZGF0ZXZhbHVlRnVuYyh2YWx1ZSl9IC8+XG4gICAgICA8RmlTZWFyY2ggLz5cbiAgICA8L05hdmJhclNlYXJjaFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE5hdmJhclNlYXJjaCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHVybERhdGEpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHVybERhdGEpO1xuICBsZXQgc2VhcmNoID0gJyc7XG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChcbiAgICAgIHVybERhdGFba2V5XSAmJlxuICAgICAgdXJsRGF0YVtrZXldICE9PSBudWxsICYmXG4gICAgICB1cmxEYXRhW2tleV0gIT09ICcnICYmXG4gICAgICB1cmxEYXRhW2tleV0gIT09ICcsJyAmJlxuICAgICAgdXJsRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHVybERhdGFba2V5XS5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIC8vIHNlYXJjaFtrZXldID0gdXJsRGF0YVtrZXldO1xuICAgICAgc2VhcmNoICs9IGAke2tleX09JHt1cmxEYXRhW2tleV19JmA7XG4gICAgfVxuICB9KTtcbiAgLy8gcmV0dXJuIHNlYXJjaDtcbiAgcmV0dXJuIHNlYXJjaC5zdWJzdHJpbmcoMCwgc2VhcmNoLmxlbmd0aCAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGVUb1VybChzdGF0ZSkge1xuICBsZXQgdXJsRGF0YSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdzZXRTdGFydERhdGUnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NldEVuZERhdGUnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pblByaWNlJzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldID4gMCkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXhQcmljZSc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA8IDEwMCkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbWVuaXRpZXMnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9XG4gICAgICAgICAgICBzdGF0ZVtrZXldICYmIHR5cGVvZiBzdGF0ZVtrZXldICE9PSAnc3RyaW5nJyAmJiBzdGF0ZVtrZXldLmxlbmd0aFxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncm9vbSc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdndWVzdCc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9wZXJ0eSc6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXG4gICAgICAgICAgICAgID8gc3RhdGVba2V5XS5qb2luKClcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsb2NhdGlvbic6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQpIHtcbiAgICAgICAgICAgIHVybERhdGFbYCR7a2V5fV9sYXRgXSA9IHN0YXRlW2tleV0ubG9jYXRpb25fbGF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZykge1xuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xuZ2BdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgdXJsRGF0YSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlVXJsKHVybERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGVUb1VybF9PTl9ORVhUX0pTX1JPVVRFUl9QVVNIX1ZFUlNJT04oc3RhdGUpIHtcbiAgbGV0IHVybERhdGEgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnc2V0U3RhcnREYXRlJzpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZXRFbmREYXRlJzpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW5QcmljZSc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA+IDApIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4UHJpY2UnOlxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPCAxMDApIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYW1lbml0aWVzJzpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPVxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxuICAgICAgICAgICAgICA6IHN0YXRlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jvb20nOlxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldKSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3Vlc3QnOlxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldKSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvcGVydHknOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9XG4gICAgICAgICAgICBzdGF0ZVtrZXldICYmIHR5cGVvZiBzdGF0ZVtrZXldICE9PSAnc3RyaW5nJyAmJiBzdGF0ZVtrZXldLmxlbmd0aFxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbG9jYXRpb24nOlxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0ubG9jYXRpb25fbGF0KSB7XG4gICAgICAgICAgICB1cmxEYXRhW2Ake2tleX1fbGF0YF0gPSBzdGF0ZVtrZXldLmxvY2F0aW9uX2xhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sbmcpIHtcbiAgICAgICAgICAgIHVybERhdGFbYCR7a2V5fV9sbmdgXSA9IHN0YXRlW2tleV0ubG9jYXRpb25fbG5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgIHVybERhdGEgPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVVybCh1cmxEYXRhKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=