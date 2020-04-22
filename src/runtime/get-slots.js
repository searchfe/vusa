/**
 * @file slot
 * @author cxtom(cxtom2008@gmail.com)
 */

import {extend} from '../shared/util';

export default function () {
    const {
        slotChildren
    } = this;

    return slotChildren.reduce((prev, child) => {
        const name = child.name || 'default';
        if (!prev[name]) {
            prev[name] = [];
        }
        prev[name] = prev[name].concat(child.children);
        return prev;
    }, {});
}
