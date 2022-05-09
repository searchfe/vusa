/**
 * @file merge style
 * @author cxtom(cxtom2008@gmail.com)
 */

import {cached, extend, toObject, hyphenate, parseStyleText, isPlainObject} from '../shared/util';


function hyphenateKey(object) {
    const ret = {};
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            ret[hyphenate(key)] = object[key];
        }
    }
    return ret;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return hyphenateKey(toObject(bindingStyle));
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return hyphenateKey(bindingStyle);
}


export default function (style, staticStyle, vShow) {

    style = normalizeStyleBinding(style);

    if (!vShow) {
        style.display = 'none';
    }

    const styleKeys =  Object.keys(style);
    for (let i = 0; i < styleKeys.length; i++) {
        const val = style[styleKeys[i]];
        if (Array.isArray(val)) {
            style[styleKeys[i]] = val[val.length - 1];
        }
        else if (isPlainObject(val) && Object.keys(val).length === 0) {
            delete style[styleKeys[i]];
        }
    }

    return staticStyle
        ? extend(staticStyle, style)
        : style;
}
