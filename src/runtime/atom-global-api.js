/**
 * @file 全局生效的函数
 * @author cxtom(cxtom2008@gmail.com)
 */

const MATH_METHOD = [
    'floor', 'ceil', 'round',
    'abs', 'max', 'min', 'pow'
];

MATH_METHOD.forEach(name => {
    exports[`math_${name}`] = function (...args) {
        return Math[name].apply(Math, args);
    };
});

exports.array_slice = function (arr, start, len) {
    var end = len == null ? void 0 : (len >= 0 ? (start + len) : (arr.length + len));
    return arr.slice(start, end);
};

exports.array_join = function (arr, sep) {
    return arr.join(sep);
};

exports.str_pos = function (str, match) {
    return str.indexOf(match);
};

exports.object_freeze = function (obj) {
    return Object.freeze(obj);
};

exports.filters = {
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
