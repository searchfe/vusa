/**
 * @file 覆盖 san 原生的 _calcComputed
 * @author cxtom(cxtom2008@gmail.com)
 */

import {def} from '../shared/util';
import slots from './get-slots';
import {resetTarget, cleanTarget, Dep} from './bind-data';

export default function calcComputed(key) {
    let computedDeps = this.computedDeps[key];
    if (!computedDeps) {
        computedDeps = this.computedDeps[key] = {};
    }

    resetTarget();
    const value = this.computed[key].call(this);

    const deps = Dep.target;
    for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        const expr = dep.paths.map(a => a.value).join('.');
        if (!computedDeps[expr]) {
            computedDeps[expr] = 1;

            if (this.computed[expr] && !this.computedDeps[expr]) {
                calcComputed.call(this, expr);
            }

            this.watch(expr, function () {
                calcComputed.call(this, key);
            });
        }
    }
    cleanTarget();

    this.data.set(key, value);
}
