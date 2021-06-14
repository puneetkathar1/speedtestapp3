exports.ids = [18];
exports.modules = {

/***/ "AEIH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Qn9");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("C9pf");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("n3ZG");
/* harmony import */ var components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("IGpx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VSZM");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("l0iN");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jV9y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NavbarSearch = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__[/* SearchContext */ "a"]);
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
    const mapData = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(searchedPlaceAPIData) ? Object(components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__[/* mapDataHelper */ "a"])(searchedPlaceAPIData) : [];

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
      const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__[/* setStateToUrl */ "a"])(query);
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

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_6__[/* NavbarSearchWrapper */ "g"], {
    className: "navbar_search"
  }, __jsx(components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    updatevalue: value => updatevalueFunc(value)
  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSearch"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavbarSearch));

/***/ }),

/***/ "IGpx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapDataHelper; });
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

/***/ "jV9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setStateToUrl; });
/* unused harmony export setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
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

/***/ }),

/***/ "n3ZG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NnCY");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Tpg");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8+2T");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
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
    className: "map_autocomplete"
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MapAutoComplete);

/***/ })

};;