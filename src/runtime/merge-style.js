/**
 * @file merge style
 * @author cxtom(cxtom2008@gmail.com)
 */

import {cached, extend, toObject, hyphenate} from '../shared/util';

const parseStyleText = cached(function (cssText) {
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            let tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});

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


export default function (style, staticStyle, vShow = true) {
    style = normalizeStyleBinding(style);
    if (!vShow) {
        style.display = 'none';
    }
    return staticStyle
        ? extend(staticStyle, style)
        : style;
}
