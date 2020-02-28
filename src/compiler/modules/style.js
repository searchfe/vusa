/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */

const bindKeys = [':style', 'v-bind:style', 'v-show'];

function postTransformNode(node) {
    const vShow = node.attrsMap['v-show'];
    if (node.type === 1 && (node.styleBinding || vShow)) {
        const staticStyle = node.staticStyle || '\'\'';
        // eslint-disable-next-line max-len
        node.attrsMap.style = `{{ _ms(${staticStyle.replace(/"/g, '\'')}, ${node.styleBinding || '{}'}${vShow ? `, ${vShow}` : ''}) }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
}

export default {
    postTransformNode
};
