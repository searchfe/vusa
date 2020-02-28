"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = define;

var _san = require("san");

var _util = require("../shared/util");

var _mergeClass = _interopRequireDefault(require("./merge-class"));

var _mergeStyle = _interopRequireDefault(require("./merge-style"));

var _loopExpression = _interopRequireDefault(require("./loop-expression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file component
 * @author cxtom(cxtom2008@gmail.com)
 */
const lifeCycleMap = {
  beforeCreate: 'inited',
  mounted: 'attached',
  created: 'created',
  beforeMount: 'created',
  beforeDestroy: 'detached',
  destroy: 'disposed',
  updated: 'updated'
};

function define(options) {
  const sanOptions = {
    _mc: _mergeClass.default,
    _ms: _mergeStyle.default,
    _l: _loopExpression.default,
    template: options.__santemplate
  };
  ['filters', 'computed', 'watch'].forEach(key => {
    if (options[key]) {
      sanOptions[key] = options[key];
    }
  });

  if (options.methods) {
    Object.keys(options.methods).forEach(key => {
      sanOptions[key] = options.methods[key];
    });
  }

  Object.keys(lifeCycleMap).forEach(hook => {
    if (options[hook]) {
      sanOptions[lifeCycleMap[hook]] = options[hook];
    }
  });

  if (typeof options.data === 'function') {
    sanOptions.initData = options.data;
  } else if (options.data) {
    sanOptions.initData = function () {
      return options.data;
    };
  }

  if (options.components) {
    sanOptions.components = Object.keys(options.components).reduce((prev, key) => {
      prev[key] = prev[(0, _util.hyphenate)(key)] = define(options.components[key]);
      return prev;
    }, {});
  }

  console.log(sanOptions);
  const Component = (0, _san.defineComponent)(sanOptions);
  return Component;
}
//# sourceMappingURL=define-component.js.map