/**
 * @file strip
 * @author cxtom(cxtom2008@gmail.com)
 */

import _ from 'lodash';

function postTransformNode(el) {
    el.children = el.children.map(child => {
        if (child.type === 3 || child.type === 2) {
            child.text = _.trim(child.text, ' \n\t');
        }
        return child;
    });
}

export default {
    postTransformNode
};
