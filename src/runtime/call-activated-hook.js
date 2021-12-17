/**
 * @file call activated deactivated
 * @author cxtom(cxtom2008@gmail.com)
 */

import {NodeType} from 'san';

function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
        if (vm._inactive) {
            return true;
        }
    }
    return false;
}

function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    if (!vm._inactive) {
        vm._inactive = true;
        if (vm.children
            && vm.children.length) {
            for (let i = 0; i < vm.children.length; i++) {
                if (vm.children[i].nodeType === NodeType.CMPT) {
                    deactivateChildComponent(vm.children[i]);
                }
            }
        }
        vm._toPhase('deactivated');
    }
}

function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    else if (vm._directInactive) {
        return;
    }

    if (vm._inactive || vm._inactive === undefined) {
        vm._inactive = false;
        if (vm.children
            && vm.children.length) {
            for (let i = 0; i < vm.children.length; i++) {
                if (vm.children[i].nodeType === NodeType.CMPT) {
                    activateChildComponent(vm.children[i]);
                }
            }
        }
        vm._toPhase('activated');
    }
}

function createCallFactory(name) {
    return function call(direct) {
        if (name === 'deactivited') {
            deactivateChildComponent(this, direct);
        }
        else {
            activateChildComponent(this, direct);
        }
    };
}

export const callActivited = createCallFactory('activited');
export const callDeActivited = createCallFactory('deactivited');
