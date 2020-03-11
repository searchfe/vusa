/**
 * @file san ref rewrite
 * @author cxtom(cxtom2008@gmail.com)
 */

import {evalExpr} from 'san';

export default function (name) {

    const owner = this;

    function childrenTraversal(children) {
        for (let i = 0, len = children.length; i < len; i++) {
            let refTarget = elementTraversal(children[i]);
            if (refTarget) {
                return refTarget;
            }
        }
    }

    function elementTraversal(element) {
        const nodeType = element.nodeType;
        if (nodeType === 1) {
            return;
        }
        let refTarget;
        if (element.owner === owner) {
            let ref;
            switch (nodeType) {
                case 4:
                case 3:
                    ref = element.aNode.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        return nodeType === 4 ? element.el : element.children.map(elementTraversal);
                    }
                    break;

                case 5:
                    ref = element.source.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        return element;
                    }
            }

            refTarget = element.slotChildren && childrenTraversal(element.slotChildren);
        }

        return refTarget || childrenTraversal(element.children);
    }

    return childrenTraversal(this.children);
};
