/**
 * @file component :is
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';

function postTransformNode(node, options) {

    if (!(node.type === 1 && node.tag === 'component')) {
        return;
    }

    let is = node.attrsMap.is;
    delete node.attrsMap.is;

    if (!is.startsWith('{{')) {
        node.tag = node.attrsMap.is;
        return;
    }

    const {code} = transform(is.replace(/(^{{|}}$)/g, ''));
    node.attrsMap['s-is'] = code;
}

export default {
    postTransformNode,
};
