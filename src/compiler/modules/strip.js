/**
 * @file strip
 * @author cxtom(cxtom2008@gmail.com)
 */

import _ from 'lodash';

function postTransformNode(el) {
    el.children = el.children.map(child => {
        if (child.type === 3) {
            child.text = _.trim(child.text, ' \n');
        }
        if (child.type === 2 && child.expression) {
            const expression = child.expression;
            const parts = expression.split('+');
            let first = parts[0];
            let last = parts[parts.length - 1];
            if (/^".*"$/.test(first)) {
                first = JSON.parse(first);
                first = _.trimStart(first, ' \n');
                if (first) {
                    child.tokens[0] = first;
                    parts[0] = JSON.stringify(first);
                }
                else {
                    child.tokens.shift();
                    parts.shift();
                }
            }
            if (/^".*"$/.test(last)) {
                last = JSON.parse(last);
                last = _.trimEnd(last, ' \n');
                if (last) {
                    child.tokens[parts.length - 1] = last;
                    parts[parts.length - 1] = JSON.stringify(last);
                }
                else {
                    child.tokens.pop();
                    parts.pop();
                }
            }
            child.expression = parts.join('+');
            child.text = _.trim(child.text, ' \n');
        }
        return child;
    });
}

export default {
    postTransformNode
};
