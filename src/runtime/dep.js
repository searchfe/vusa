/**
 * @file san dep
 * @author cxtom(cxtom2008@gmail.com)
 */


export function Dep() {}

Dep.prototype.depend = function (expr) {
    if (Dep.target) {
        Dep.target.push(expr);
    }
};

Dep.target = null;

export function resetTarget() {
    Dep.target = [];
}

export function cleanTarget() {
    Dep.target = null;
}

