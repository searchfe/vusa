/**
 * @file get component type
 * @author cxtom(cxtom2008@gmail.com)
 */

import {evalExpr} from 'san';

export default function (aNode, data) {
    if (aNode.hotspot.props.is == null) {
        return this.components[aNode.tagName];
    }

    const is = aNode.props[aNode.hotspot.props.is];
    const isValue = evalExpr(is.expr, data);
    return this.components[isValue];
}
