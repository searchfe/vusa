/**
 * @file class
 * @author cxtom(cxtom2008@gmail.com)
 */

function postTransformNode(node) {

    if (node.attrsMap && node.attrsMap['v-dangerous-html']) {
        const dir = node.directives.find(d => d.name === 'dangerous-html');
        dir.name = 'html';
        dir.value = node.attrsMap['v-html'] = node.attrsMap['v-dangerous-html'];
        delete node.attrsMap['v-dangerous-html'];
    }

    if (node.attrsMap && node.attrsMap['v-safe-html']) {
        const dir = node.directives.find(d => d.name === 'safe-html');
        dir.name = 'html';
        dir.value = node.attrsMap['v-html'] = `_sf(${node.attrsMap['v-safe-html']})`;
        delete node.attrsMap['v-safe-html'];
    }
    else if (node.attrsMap && node.attrsMap['v-html']) {
        const dir = node.directives.find(d => d.name === 'html');
        dir.value = node.attrsMap['v-html'] = `_h(${node.attrsMap['v-html']})`;
    }

    if (node.type === 1 && node.attrsMap['v-html']) {
        const value = node.directives.find(d => d.name === 'html').value;
        delete node.attrsMap['v-html'];
        node.attrsMap['s-html'] = `{{ ${value} }}`;
        // node.attrsMap['s-html'] = `{{ _h(${value}) }}`;
        node.children = [];
    }

    if (node.type === 1 && node.attrsMap['v-text']) {
        const value = node.directives.find(d => d.name === 'text').value;
        delete node.attrsMap['v-text'];
        node.children = [{
            type: 2,
            text: `{{ ${value} | _s }}`,
        }];
    }
}

export default {
    postTransformNode,
};
