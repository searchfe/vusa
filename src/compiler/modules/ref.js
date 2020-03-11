/**
 * @file ref
 * @author cxtom(cxtom2008@gmail.com)
 */

import {camelize} from '../../shared/util';

function postTransformNode(node, options) {
    if (node.type !== 1 || !node.attrsMap.ref) {
        return;
    }
    const ref = node.attrsMap['s-ref'] = node.attrsMap.ref;
    delete node.attrsMap.ref;

    const info = {
        name: ref,
        root: node.parent ? undefined : 1,
        for: node.for ? 1 : undefined
    };

    options.refs.push(info);
    const camelName = camelize(ref);

    if (camelName !== ref) {
        options.refs.push({
            ...info,
            name: camelName
        });
    }
}

export default {
    postTransformNode
};
