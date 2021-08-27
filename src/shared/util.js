/**
 * @file 一些工具函数
 * @author cxtom(cxtom2008@gmail.com)
 */

import {ExprType} from 'san';

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
 * Remove an item from an array.
 */
export function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
export const _toString = Object.prototype.toString;

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}

export function def(obj, key, property) {
    Object.defineProperty(obj, key, extend({
        enumerable: false,
        configurable: true,
    }, property));
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
export const hyphenate = cached(str => {
    return str
        .replace(hyphenateRE, '$1-$2')
        .replace(hyphenateRE, '$1-$2')
        .toLowerCase();
});

export const camelize = str => str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));

/**
 * Ensure a function is called only once.
 */
export function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            fn.apply(this, args);
        }
    };
}

const supportFreeze = typeof Object.freeze === 'function';

export function freeze(obj) {
    return supportFreeze && isObject(obj) ? Object.freeze(obj) : obj;
}

export function createAccesser(key) {
    return {
        type: ExprType.ACCESSOR,
        paths: [{
            type: 1,
            value: key,
        }],
    };
}

export function isPrimitive(value) {
    return (
        typeof value === 'string'
        || typeof value === 'number'
        || typeof value === 'symbol'
        || typeof value === 'boolean'
    );
}

export function isValidArrayIndex(val) {
    const n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}