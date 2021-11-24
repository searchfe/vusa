import VNode from './vnode';

export const patch = (...insArgs) => {
    let curInstance = null;

    for (let i = 0; i < insArgs.length; ++i) {
        if (insArgs[i] && insArgs[i].tagName) {
            curInstance = Object.assign({}, insArgs[i]);
        }
    }

    if (curInstance.tagName) {
        curInstance = new VNode(curInstance.tagName, curInstance.options);
    }

    return curInstance;
};
