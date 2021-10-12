/**
 * @file merge class
 * @author cxtom(cxtom2008@gmail.com)
 */

function string(cls = '') {
    if (!cls) {
        return '';
    }
    return cls
        .split(' ')
        .reduce((prev, name) => {
            if (!name) {
                return prev;
            }
            return {
                ...prev,
                [name]: 1,
            };
        }, {});
}

function object(cls = {}) {
    return Object
        .keys(cls)
        .reduce((prev, key) => {
            if (!cls[key]) {
                return prev;
            }
            return {
                ...prev,
                ...string(key),
            };
        }, {});
}

function array(cls = []) {
    let clazz = {};
    for (let i = 0, len = cls.length; i < len; i++) {
        const element = cls[i];
        if (!element) {
            continue;
        }
        clazz = {
            ...clazz,
            ...(
                typeof element === 'string'
                    ? string(element)
                    : (Array.isArray(element) ? array(element) : object(element))
            ),
        };
    }
    return clazz;
}

export default function (cls = {}, staticClass = '') {
    return Object.keys(array([staticClass, cls])).join(' ');
}
