/**
 * @file loop expression
 * @author cxtom(cxtom2008@gmail.com)
 */

import {cached} from '../shared/util';

const toArray = cached(function (n) {
    const value = new Array(n);
    for (let i = 0; i < n; i++) {
        value[i] = i + 1;
    }
    return value;
});

export default function (value) {

    if (!isNaN(value)) {
        const n = +value;
        value = toArray(n);
    }

    // 将字符串转为数组
    if (typeof value === 'string') {
        return value.split('');
    }
    return value;
}

