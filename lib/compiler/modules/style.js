"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */
const bindKeys = [':style', 'v-bind:style', 'v-show'];

function postTransformNode(node) {
  const vShow = node.attrsMap['v-show'];

  if (node.type === 1 && (node.styleBinding || vShow)) {
    const staticStyle = node.staticStyle || '\'\'';
    node.attrsMap.style = `{{ _ms(${staticStyle.replace(/"/g, '\'')}, ${node.styleBinding || '{}'}${vShow ? `, ${vShow}` : ''}) }}`;
    bindKeys.forEach(key => delete node.attrsMap[key]);
  }
}

var _default = {
  postTransformNode
};
exports.default = _default;
//# sourceMappingURL=style.js.map