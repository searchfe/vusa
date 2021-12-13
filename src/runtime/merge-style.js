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
    Object.keys(style).forEach(key => {
        const val = style[key];
        if (Array.isArray(val)) {
            style[key] = val[val.length - 1];
        }
        else if (isPlainObject(val) && Object.keys(val).length === 0) {
            delete style[key];
        }
    });

    return staticStyle
        ? extend(staticStyle, style)
        : style;
}
