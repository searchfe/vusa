/**
 * @file atom module
 * @author cxtom(cxtom2008@gmail.com)
 */

function preTransformNode(el) {
    el.attrsList = el.attrsList.map(({name, value}) => {
        delete el.attrsMap[name];
        name = name.replace(/^a-/, 'v-');
        el.attrsMap[name] = value;
        return {
            value,
            name,
        };
    });
}

export default {
    preTransformNode,
};
