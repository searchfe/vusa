"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _modules = _interopRequireDefault(require("./modules"));

var _vueTemplateCompiler = require("vue-template-compiler");

var _stringify = _interopRequireDefault(require("./stringify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file compiler
 * @author cxtom(cxtom2008@gmail.com)
 */
function _default(source, options = {}) {
  const {
    modules = []
  } = options;
  const {
    ast
  } = (0, _vueTemplateCompiler.compile)(source.trim(), {
    modules: [..._modules.default, ...modules],
    preserveWhitespace: false
  });
  return {
    ast,
    code: (0, _stringify.default)(ast)
  };
}
//# sourceMappingURL=index.js.map