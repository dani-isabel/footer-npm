"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _ai = require("react-icons/ai");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &.dark {\n        padding: 0 5%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        width: 90%;\n        height: 10vh;\n    }\n    & .text {\n        font-family: Calibri;\n        font-size: 24px;\n        color:purple;\n      }\n    & .icons {\n        display: flex;\n        width: 20%;\n        justify-content: space-between;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterComponent = function FooterComponent(props) {
  var className = props.className,
      classFooter = props.classFooter,
      classText = props.classText,
      classIcons = props.classIcons,
      text = props.text;
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: className + ' ' + classFooter
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: classText
  }, text), /*#__PURE__*/_react["default"].createElement("div", {
    className: classIcons
  }, /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://www.instagram.com/daniisa12/"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillInstagram, null)), /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/DANI.TKM.4/"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillFacebook, null)), /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://github.com/dani-isabel"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillGithub, null)), /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://www.linkedin.com/in/daniela-isabel-bolivar/"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillLinkedin, null))));
};

var StyledFooter = (0, _styledComponents["default"])(FooterComponent)(_templateObject());
exports.StyledFooter = StyledFooter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Footer = require("./Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer(props) {
  /*#__PURE__*/
  _react["default"].createElement(_Footer.StyledFooter, props);
};

var _default = Footer;
exports["default"] = _default;
