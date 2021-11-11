/**
 * @file calcComputed override
 * @author cxtom(cxtom2008@gmail.com)
 */

import { noop } from '../shared/util';
import {resetTarget, cleanTarget, Dep} from './dep';

export default function calcComputed(computedExpr, computed) {

    if (typeof computedExpr === 'object') {
        computedExpr = computedExpr.paths.map(a => a.value).join('.');
    }

    let computedDeps = this.computedDeps[computedExpr];
    if (!computedDeps) {
        computedDeps = this.computedDeps[computedExpr] = {};
    }

    resetTarget();
    let userDef = computed[computedExpr];
    if (typeof userDef === 'object') {
        userDef = userDef.get || noop;
    }

    const value = userDef.call(this);
    const deps = Dep.target;
    cleanTarget();

    const me = this;

    for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        const {
            expr,
            key,
        } = dep;
        if (!computedDeps[key]) {
            computedDeps[key] = 1;
            this.watch(expr, function () {
                calcComputed.call(me, computedExpr, computed);
            });
        }
    }

    this.data.set(computedExpr, value);
}
