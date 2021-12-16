/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */

import {camelCase} from 'lodash';

function getAttrs(attrsMap) {
    return Object.keys(attrsMap).map(name => {
        let value = attrsMap[name];
        value = value.startsWith('{{') ? value.slice(2, value.length - 2) : `'${value}'`;
        delete attrsMap[name];
        return `${camelCase(name)}:${value}`;
    });
}

function postTransformNode(el) {

    if (el.tag === 'transition') {
        el.tag = 'fragment';

        const attrs = getAttrs(el.attrsMap);

        if (el.children && el.children[0]) {
            // console.log('el.children~~~~~~~');
            el.children[0].attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;

            if (el.children[0].ifConditions) {
                for (const item of el.children[0].ifConditions.slice(1)) {
                    if (item.attrsMap) {
                        item.attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;
                    }
                }
            }
        }
        // console.log('el~~~~~~~~', el);
    }

    if (el.tag === 'transition-group') {
        el.tag = el.attrsMap.tag || 'span';
        delete el.attrsMap.tag;

        if (!el.children || el.children.length <= 0) {
            return;
        }

        for (const node of el.children) {
            if (node.type !== 1) {
                continue;
            }
            const attrs = getAttrs(el.attrsMap);
            if (node.for) {
                attrs.push(`iterator:${node.iterator1}`);
            }
            node.attrsMap['s-transition'] = `_t({${attrs.join(',')}})`;
            console.log("node.attrsMap['s-transition']", node.attrsMap['s-transition']);
        }
    }
}

export default {
    postTransformNode,
};
