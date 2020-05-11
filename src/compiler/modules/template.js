/**
 * @file template
 * @author cxtom(cxtom2008@gmail.com)
 */

function preTransformNode(el) {
    if (el.tag === 'template') {
        el.tag = 'fragment';
    }
}

export default {
    preTransformNode
};
