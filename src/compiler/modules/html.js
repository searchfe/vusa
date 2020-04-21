/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode(node) {

    if (node.attrsMap && node.attrsMap['v-dangerous-html']) {
        node.attrsMap['v-html'] = node.attrsMap['v-dangerous-html'];
        delete node.attrsMap['v-dangerous-html'];
    }

    if (node.attrsMap && node.attrsMap['v-safe-html']) {
        node.attrsMap['v-html'] = `_sf(${node.attrsMap['v-safe-html']})`;
        delete node.attrsMap['v-dangerous-html'];
    }

    if (node.type === 1 && node.attrsMap['v-html']) {
        const value = node.directives.find(d => d.name === 'html').value;
        delete node.attrsMap['v-html'];
        node.attrsMap['s-html'] = `{{ ${value} }}`;
        node.children = [];
    }

    if (node.type === 1 && node.attrsMap['v-text']) {
        const value = node.directives.find(d => d.name === 'text').value;
        delete node.attrsMap['v-text'];
        node.children = [{
            type: 2,
            text: `{{ ${value} }}`
        }];
    }
}

export default {
    postTransformNode
};
