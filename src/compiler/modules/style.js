/**
 * @file style
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';
import toSingleQuotes from 'to-single-quotes';

const bindKeys = [':style', 'v-bind:style', 'v-show'];

function postTransformNode(node) {
    const vShow = node.attrsMap['v-show'];
    if (node.type === 1 && (node.styleBinding || vShow)) {

        const staticStyle = node.staticStyle || '\'\'';
        const styleBinding = node.styleBinding
            ? transform(node.attrsMap[bindKeys[0]] || node.attrsMap[bindKeys[1]]).code
            : '{}';

        // eslint-disable-next-line max-len
        node.attrsMap.style = `{{ ${styleBinding.trim()} | _ms(${toSingleQuotes(staticStyle)}${vShow ? `, ${transform(vShow).code}` : ''}) }}`;
        bindKeys.forEach(key => delete node.attrsMap[key]);
    }
}

export default {
    postTransformNode,
};
