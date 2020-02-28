/**
 * @file merge style
 * @author cxtom(cxtom2008@gmail.com)
 */

import {cached, extend, toObject} from '../shared/util'

const parseStyleText = cached(function (cssText) {
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return bindingStyle;
}


export default function (staticStyle, style, vShow = true) {
    style = normalizeStyleBinding(style);
    if (!vShow) {
        style.display = 'none';
    }
    return staticStyle
        ? extend(staticStyle, style)
        : style;
}
