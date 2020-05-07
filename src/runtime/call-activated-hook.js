/**
 * @file call activated deactivated
 * @author cxtom(cxtom2008@gmail.com)
 */

import {NodeType} from 'san';

function createCallFactory(name) {
    return function call(direct) {
        const ele = this;
        if (ele.nodeType === NodeType.CMPT) {
            ele._toPhase(name);
        }
        if (ele.children && ele.children.length > 1) {
            ele.children.forEach(call);
        }
    }
}

export const callActivited = createCallFactory('activited');
export const callDeActivited = createCallFactory('deactivited');
