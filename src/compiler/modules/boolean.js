/**
 * @file bool 型传值
 * @author cxtom(cxtom2008@gmail.com)
 */

import {booleanAttr, noValueAttr, htmlTag} from '../constant';

function postTransformNode(node) {
    if (!node.type === 1 || !node.attrsMap) {
        return;
    }

    const keys = Object.keys(node.attrsMap).filter(n => node.attrsMap[n] === '');
    for (const key of keys) {
        if ((htmlTag[node.tag] && booleanAttr[key]) || noValueAttr[key]) {
            continue;
        }

        // input 标签 的 value 不做处理
        if (node.tag === 'input' && (key === 'value' || key === ':value')) {
            continue;
        }
    }
}

export default {
    postTransformNode
};
