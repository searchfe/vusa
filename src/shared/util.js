/**
 * @file 一些工具函数
 * @author cxtom(cxtom2008@gmail.com)
 */

/**
 * Mix properties into target object.
 */
export const extend = Object.assign;

/**
 * Merge an Array of Objects into a single Object.
 */
export function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}


/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
    const cache = Object.create(null);
    return function cachedFn(str) {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /([^-])([A-Z])/g;
export const hyphenate = cached((str) => {
    return str
        .replace(hyphenateRE, '$1-$2')
        .replace(hyphenateRE, '$1-$2')
        .toLowerCase();
});

export const camelize = str => str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
