"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _class = _interopRequireDefault(require("./class"));

var _style = _interopRequireDefault(require("./style"));

var _bind = _interopRequireDefault(require("./bind"));

var _if = _interopRequireDefault(require("./if"));

var _for = _interopRequireDefault(require("./for"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */
var _default = [_if.default, _for.default, _class.default, _style.default, // bind 放在 class 和 style 处理完之后
_bind.default];
exports.default = _default;
//# sourceMappingURL=index.js.map