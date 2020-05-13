/**
 * @file 全局生效的函数
 * @author cxtom(cxtom2008@gmail.com)
 */

import {toObject} from '../shared/util';

const MATH_METHOD = [
    'floor', 'ceil', 'round',
    'abs', 'max', 'min', 'pow'
];

export const methods = {};

MATH_METHOD.forEach(name => {
    methods[`math_${name}`] = function (...args) {
        return Math[name].apply(Math, args);
    };
});

methods.array_slice = function (arr, start, len) {
    var end = len == null ? void 0 : (len >= 0 ? (start + len) : (arr.length + len));
    return arr.slice(start, end);
};

methods.array_join = function (arr, sep) {
    return arr.join(sep);
};

methods.str_pos = function (str, match) {
    return str.indexOf(match);
};

methods.object_freeze = function (obj) {
    return Object.freeze(obj);
};

export const filters = {
    json(obj) {
        return JSON.stringify(json);
    },
    lower(str) {
        return str.toLowerCase();
    },
    upper(str) {
        return str.toUpperCase();
    }
};
