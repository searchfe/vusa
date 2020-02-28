"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _util = require("../shared/util");

/**
 * @file loop expression
 * @author cxtom(cxtom2008@gmail.com)
 */
const toArray = (0, _util.cached)(function (n) {
  const value = new Array(n);

  for (let i = 0; i < n; i++) {
    value[i] = i + 1;
  }

  return value;
});

function _default(value) {
  if (!isNaN(value)) {
    const n = +value;
    value = toArray(n);
  }

  return value;
}
//# sourceMappingURL=loop-expression.js.map