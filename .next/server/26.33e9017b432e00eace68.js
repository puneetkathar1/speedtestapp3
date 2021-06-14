exports.ids = [26];
exports.modules = {

/***/ "vTFZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AgentPictureChangeForm; });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/UI/Heading/Heading.js
var Heading = __webpack_require__("ZiTp");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__("TfTO");
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/UI/ImageUploader/imageUploader.style.js

const ImageUpload = external_styled_components_default.a.div.withConfig({
  displayName: "imageUploaderstyle__ImageUpload",
  componentId: "o3v02w-0"
})(["display:flex;align-items:center;.image-drag-area{width:125px;height:125px;border:1px dashed #e6e6e6;border-radius:3px;font-size:38px;color:#e6e6e6;display:flex;align-items:center;justify-content:center;}.ant-upload-text{font-size:15px;font-weight:700;color:#fff;background-color:#008489;border-radius:3px;padding:8px 15px;margin-left:30px;}"]);
// CONCATENATED MODULE: ./components/UI/ImageUploader/ImageUploader.js


var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ImageUploader_ImageUploader extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    });

    _defineProperty(this, "handleCancel", () => this.setState({
      previewVisible: false
    }));

    _defineProperty(this, "handlePreview", file => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    _defineProperty(this, "handleChange", ({
      fileList
    }) => this.setState({
      fileList
    }));
  }

  render() {
    const {
      previewVisible,
      previewImage,
      fileList
    } = this.state;
    const Dragger = upload_default.a.Dragger;

    const uploadButton = __jsx(ImageUpload, null, __jsx("div", {
      className: "image-drag-area"
    }, __jsx(fa_["FaCamera"], null)), __jsx("div", {
      className: "ant-upload-text"
    }, "Upload Photos"));

    return __jsx("div", {
      className: "clearfix"
    }, __jsx(Dragger, {
      action: "//jsonplaceholder.typicode.com/posts/",
      listType: "picture-card",
      fileList: fileList,
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      className: "image_uploader"
    }, fileList.length >= 4 ? null : uploadButton), __jsx(modal_default.a, {
      visible: previewVisible,
      footer: null,
      onCancel: this.handleCancel
    }, __jsx("img", {
      alt: "example",
      style: {
        width: '100%'
      },
      src: previewImage
    })));
  }

}
// EXTERNAL MODULE: ./container/Agent/AccountSettings/AccountSettings.style.js
var AccountSettings_style = __webpack_require__("lR+B");

// CONCATENATED MODULE: ./container/Agent/AccountSettings/AgentPictureChangeForm.js

var AgentPictureChangeForm_jsx = external_react_default.a.createElement;




function AgentPictureChangeForm() {
  return AgentPictureChangeForm_jsx(AccountSettings_style["d" /* AgentPictureUploader */], null, AgentPictureChangeForm_jsx(AccountSettings_style["f" /* FormTitle */], null, "Profile Images"), AgentPictureChangeForm_jsx(Heading["a" /* default */], {
    content: "Cover Image",
    as: "h4"
  }), AgentPictureChangeForm_jsx(ImageUploader_ImageUploader, null), AgentPictureChangeForm_jsx(Heading["a" /* default */], {
    content: "Profile Image",
    as: "h4"
  }), AgentPictureChangeForm_jsx(ImageUploader_ImageUploader, null), AgentPictureChangeForm_jsx("div", {
    className: "submit-container"
  }, AgentPictureChangeForm_jsx(button_default.a, {
    htmlType: "submit",
    type: "primary"
  }, "Save Changes")));
}

/***/ })

};;