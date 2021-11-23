/**
 * @file 处理v-model的情况
 * @author donghualei
 */

import transform from '../expression-transformer';

function postTransformNode(node) {

    if (node.type !== 1
        || !node.attrsMap.hasOwnProperty('v-model')
        || node.tag !== 'input') {
        return;
    }

    const type = node.attrsMap.type;

    // 处理 input 的场景，text的场景
    if (type === 'text' || !type && !node.attrsMap.hasOwnProperty('value')) {
        node.attrsMap.value = `{= ${transform(node.attrsMap['v-model']).code} =}`;
    }
    // 有 value 则为 type = checkbox 或者 radio 的场景
    else {
        node.attrsMap.checked = `{= ${transform(node.attrsMap['v-model']).code} =}`;
    }

    delete node.attrsMap['v-model'];
}

export default {
    postTransformNode,
};

