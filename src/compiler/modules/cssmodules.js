/**
 * @file css modules module
 * @author cxtom(cxtom2008@gmail.com)
 */

import {camelize} from '../../shared/util';

export default function (cssModules) {

    function preTransformNode(el) {
        if (cssModules && cssModules.$style && el.attrsMap.class) {
            const staticClass = el.attrsMap.class.replace(/(^"|"$)/g, '').split(' ');
            el.attrsMap.class = staticClass.map(c => (cssModules.$style[camelize(c)] || c)).join(' ');
            el.attrsList = el.attrsList.map(
                ({name, value}) => ({name, value: name === 'class' ? el.attrsMap.class : value})
            );
        }
    }

    return {
        preTransformNode,
    };
}

