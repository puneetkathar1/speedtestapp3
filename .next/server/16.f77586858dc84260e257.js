exports.ids = [16];
exports.modules = {

/***/ "EupD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/UI/Favorite/useToggle.js


const useToggle = initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialValue);
  const toggler = Object(external_react_["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
};

/* harmony default export */ var Favorite_useToggle = (useToggle);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/UI/Favorite/Favorite.style.js


const addAnimation = Object(external_styled_components_["keyframes"])(["0%{transform:scale(1) rotate(0deg);}50%{transform:scale(1.34) rotateY(90deg);}"]);
const removeAnimation = Object(external_styled_components_["keyframes"])(["0%{transform:scale(1.34) rotateY(90deg);}50%{transform:scale(1) rotateY(0);}"]);
const AddAnimation = Object(external_styled_components_["css"])(["animation:", " 0.4s cubic-bezier(0.38,0.7,0.6,0.29);"], addAnimation);
const RemoveAnimation = Object(external_styled_components_["css"])(["animation:", " 0.55s cubic-bezier(0.38,0.7,0.6,0.29);"], removeAnimation);
const FavoriteWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "Favoritestyle__FavoriteWrapper",
  componentId: "ajvf5h-0"
})(["display:inline-block;cursor:pointer;border:0;padding:10px;background-color:transparent;&:hover,&:focus{border:0;box-shadow:none;outline:none;}svg{width:22px;height:20px;", " path{fill:", ";stroke:", ";stroke-width:2px;transition:fill 1s ease;}}&.active{svg{", ";path{fill:", ";}}}"], RemoveAnimation, Object(theme_get_["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), AddAnimation, Object(theme_get_["themeGet"])('color.4', '#FC5C63'));
/* harmony default export */ var Favorite_style = (FavoriteWrapper);
// CONCATENATED MODULE: ./components/UI/Favorite/Favorite.js
var __jsx = external_react_default.a.createElement;




const Favorite = ({
  className,
  content,
  onClick
}) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = Favorite_useToggle(false); // Add all classs to an array

  const addAllClass = ['favorite']; // className prop checking

  if (className) {
    addAllClass.push(className);
  }

  const handelClick = event => {
    toggleHandler();
    onClick(!toggleValue);
  };

  return __jsx(Favorite_style, {
    onClick: handelClick,
    className: `${addAllClass.join(' ')} ${toggleValue ? 'active' : ''}`
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.64 18.232"
  }, __jsx("path", {
    d: "M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",
    transform: "translate(-47 -55)"
  })), __jsx("span", null, content));
};

Favorite.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ var Favorite_Favorite = __webpack_exports__["a"] = (Favorite);

/***/ }),

/***/ "YG1B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SectionGrid; });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/UI/Text/Text.js
var Text = __webpack_require__("Fq9I");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./components/UI/Base.js
var Base = __webpack_require__("XwqE");

// CONCATENATED MODULE: ./components/UI/Box/Box.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BoxWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-1w2buan-0"
})(Base["a" /* base */], Object(Base["b" /* themed */])('Box'), props => props.flexBox && Object(external_styled_components_["css"])({
  display: 'flex'
}, external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], Object(Base["b" /* themed */])('FlexBox')));

const Box = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ var Box_Box = (Box);
Box.defaultProps = {
  as: 'div'
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./components/UI/Rating/Rating.js
var Rating = __webpack_require__("y4c0");

// EXTERNAL MODULE: ./components/UI/Favorite/Favorite.js + 2 modules
var Favorite = __webpack_require__("EupD");

// EXTERNAL MODULE: ./components/GridCard/GridCard.js + 1 modules
var GridCard = __webpack_require__("vidl");

// CONCATENATED MODULE: ./components/ProductCard/ProductCard.js
var ProductCard_jsx = external_react_default.a.createElement;







const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
function ProductCard({
  title,
  rating,
  location,
  price,
  ratingCount,
  gallery,
  slug,
  link,
  deviceType
}) {
  return ProductCard_jsx(GridCard["a" /* default */], {
    favorite: ProductCard_jsx(Favorite["a" /* default */], {
      onClick: event => {
        console.log(event);
      }
    }),
    location: location.formattedAddress,
    title: title,
    price: `$${price}/Night - Free Cancellation`,
    rating: ProductCard_jsx(Rating["a" /* default */], {
      rating: rating,
      ratingCount: ratingCount,
      type: "bulk"
    }),
    viewDetailsBtn: ProductCard_jsx(link_default.a, {
      href: `${link}/[slug]`,
      as: `${link}/${slug}`,
      prefetch: false
    }, ProductCard_jsx("a", null, ProductCard_jsx(fi_["FiExternalLink"], null), " View Details"))
  }, ProductCard_jsx(external_react_multi_carousel_default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: responsive,
    deviceType: deviceType,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1
  }, gallery.map(({
    url,
    title
  }, index) => ProductCard_jsx("img", {
    src: url,
    alt: title,
    key: index,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative'
    }
  }))));
}
// CONCATENATED MODULE: ./components/SectionGrid/SectionGrid.js

var SectionGrid_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle
}) => {
  return !!showButton && SectionGrid_jsx(Box_Box, _extends({
    className: "loadmore_wrapper"
  }, loadMoreStyle), loadMoreComponent ? loadMoreComponent : SectionGrid_jsx(button_default.a, {
    loading: loading,
    onClick: handleLoadMore
  }, buttonText || 'Load More'));
};

function SectionGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);
  let showButton = data.length < totalItem;
  return SectionGrid_jsx(external_react_default.a.Fragment, null, SectionGrid_jsx(Box_Box, _extends({
    className: "grid_wrapper"
  }, rowStyle), data && data.length ? data.map(item => {
    return SectionGrid_jsx(Box_Box, _extends({
      className: "grid_column",
      width: columnWidth,
      key: item.id
    }, columnStyle), SectionGrid_jsx(ProductCard, _extends({
      link: link
    }, item)));
  }) : null, loading && limits.map((item, i) => SectionGrid_jsx(Box_Box, _extends({
    className: "grid_column",
    width: columnWidth,
    key: i
  }, columnStyle), placeholder ? placeholder : SectionGrid_jsx(Text["a" /* default */], {
    content: "Loading ..."
  })))), showButton && SectionGrid_jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    loading: loading,
    buttonText: buttonText,
    loadMoreComponent: loadMoreComponent,
    loadMoreStyle: loadMoreStyle
  }), paginationComponent && SectionGrid_jsx(Box_Box, {
    className: "pagination_wrapper"
  }, paginationComponent));
}
SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px']
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px']
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem'
  }
};

/***/ }),

/***/ "gexM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgentFavItemLists; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YG1B");
/* harmony import */ var components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AMVZ");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("067r");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FAVOURITE_POST_LIMIT = 6;
function AgentFavItemLists({
  processedData,
  loadMoreData,
  loading,
  deviceType
}) {
  const favourite_post = processedData[0] && processedData[0].favourite_post ? processedData[0].favourite_post : [];
  return __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_3__[/* SINGLE_POST_PAGE */ "n"],
    columnWidth: [1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6],
    deviceType: deviceType,
    data: favourite_post,
    totalItem: favourite_post.length,
    limit: FAVOURITE_POST_LIMIT,
    loading: loading,
    handleLoadMore: loadMoreData,
    placeholder: __jsx(components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_2__[/* PostPlaceholder */ "a"], null)
  });
}

/***/ }),

/***/ "vidl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/GridCard/GridCard.style.js


const GridCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__GridCardWrapper",
  componentId: "sc-6ijidl-0"
})(["position:relative;border-radius:6px;overflow:hidden;margin-bottom:30px;@media only screen and (max-width:480px){margin-bottom:20px;}&.has_btn{.button_group{@media only screen and (min-width:481px){position:absolute;top:5px;padding-top:3px;}}}&:hover{box-shadow:0 6px 12px ", ";.content_wrapper{border-color:transparent;}&.has_btn{.meta_wrapper{.rating{@media only screen and (min-width:481px){opacity:0;visibility:hidden;}}}@media only screen and (min-width:481px){.button_group{top:19px;opacity:1;visibility:visible;}}}.react-multiple-carousel__arrow{opacity:1;visibility:visible;}.react-multi-carousel-dot-list{bottom:0;}}"], Object(theme_get_["themeGet"])('boxShadow.2', 'rgba(0, 0, 0, 0.16)'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ImageWrapper",
  componentId: "sc-6ijidl-1"
})(["> img{max-width:100%;height:auto;}.react-multi-carousel-list{min-height:150px;background-color:#e9e8ec;}.react-multi-carousel-item{height:170px;}.react-multiple-carousel__arrow{top:0;width:22%;height:100%;border-radius:0;padding:0;opacity:0;visibility:hidden;z-index:1;&::before{font-weight:700;}}.react-multiple-carousel__arrow--left{left:0;background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multiple-carousel__arrow--right{right:0;background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multi-carousel-dot-list{position:absolute;bottom:-30%;left:0;width:100%;padding-top:10px;padding-bottom:10px;display:flex;justify-content:center;align-items:center;background:linear-gradient( to bottom,transparent 0%,rgba(0,0,0,0.25) 100% );transition:bottom 0.3s ease;}.react-multi-carousel-dot{align-items:center;button{width:6px;height:6px;border:0;background-color:", ";box-shadow:0 2px 2px rgba(0,0,0,0.05);transition:all 0.3s ease;}}.react-multi-carousel-dot--active{button{width:8px;height:8px;background-color:", ";}}"], Object(theme_get_["themeGet"])('color.3', '#E9E8E8'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
const FavoriteIcon = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__FavoriteIcon",
  componentId: "sc-6ijidl-2"
})(["position:absolute;top:10px;right:8px;z-index:9;"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ContentWrapper",
  componentId: "sc-6ijidl-3"
})(["padding:15px;border-width:1px;border-style:solid;border-top-width:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-color:", ";transition:border-color 0.2s ease;"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'));
const LocationArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__LocationArea",
  componentId: "sc-6ijidl-4"
})(["color:", ";font-size:13px;font-weight:400;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(theme_get_["themeGet"])('text.1', '#909090'));
const TitleArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__TitleArea",
  componentId: "sc-6ijidl-5"
})(["color:", ";font-size:17px;font-weight:700;margin-bottom:2px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}a{color:", ";font-size:17px;font-weight:700;margin-bottom:2px;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}&:hover{color:", ";}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const PriceArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__PriceArea",
  componentId: "sc-6ijidl-6"
})(["color:", ";font-size:13px;font-weight:400;margin-top:1px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const RatingArea = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__RatingArea",
  componentId: "sc-6ijidl-7"
})(["display:flex;align-items:center;color:", ";font-size:13px;margin-top:4px;span{flex-shrink:0;}i{color:", ";}svg{fill:", ";}strong{margin-top:-2px;font-weight:700;margin-left:8px;}.ant-rate{.ant-rate-star{margin-right:4px;font-size:15px;}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.0', '#008489'));
const MetaWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__MetaWrapper",
  componentId: "sc-6ijidl-8"
})(["position:relative;transition:all 0.3s ease-out;"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "GridCardstyle__ButtonGroup",
  componentId: "sc-6ijidl-9"
})(["padding-top:7px;@media only screen and (min-width:481px){opacity:0;visibility:hidden;}> a{display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:", ";transition:all 0.3s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}svg{margin-right:5px;width:18px;height:18px;}}"], Object(theme_get_["themeGet"])('primary.0', '#008489'), Object(theme_get_["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ var GridCard_style = (GridCardWrapper);
// CONCATENATED MODULE: ./components/GridCard/GridCard.js
var __jsx = external_react_default.a.createElement;



const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return __jsx(GridCard_style, {
    className: `grid_card ${classes}`.trim()
  }, __jsx(ImageWrapper, {
    className: "media_wrapper"
  }, children), __jsx(ContentWrapper, {
    className: "content_wrapper"
  }, location && __jsx(LocationArea, null, location), title && __jsx(TitleArea, null, title), __jsx(MetaWrapper, {
    className: "meta_wrapper"
  }, price && __jsx(PriceArea, {
    className: "price"
  }, price), rating && __jsx(RatingArea, {
    className: "rating"
  }, rating), viewDetailsBtn || editBtn ? __jsx(ButtonGroup, {
    className: "button_group"
  }, viewDetailsBtn, editBtn) : null)), favorite && __jsx(FavoriteIcon, null, favorite));
};

/* harmony default export */ var GridCard_GridCard = __webpack_exports__["a"] = (GridCard);

/***/ }),

/***/ "y4c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = props => {
  const {
    rating,
    ratingCount,
    type,
    ratingFieldName
  } = props;
  let i, floorValue;
  let ratingView = [];

  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);

    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStar"], {
          key: i
        }));
      } else {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStarOutline"], {
          key: i
        }));
      }
    }
  }

  let listingCondition;

  if (rating && rating === 5) {
    listingCondition = 'Awesome';
  } else if (4 <= rating && rating < 5) {
    listingCondition = 'Good';
  } else if (3 <= rating && rating < 4) {
    listingCondition = 'Average';
  } else if (2 <= rating && rating < 3) {
    listingCondition = 'Bad';
  } else if (rating >= 1) {
    listingCondition = 'Terrible';
  } else {
    listingCondition = '';
  }

  let showRatingCount;

  if (ratingCount) {
    showRatingCount = `(` + ratingCount + `)`;
  } else {
    showRatingCount = '';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type && type === 'bulk' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, ratingView), __jsx("strong", null, ` ${listingCondition}`, " ", `${showRatingCount}`)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, ratingFieldName), " ", ratingView));
};

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ })

};;