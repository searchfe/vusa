/**
 * @file constants
 * @author cxtom(cxtom2008@gmail.com)
 */

export const lifeCycleMap = {
    beforeCreate: 'compiled',
    mounted: 'attached',
    created: 'inited',
    beforeMount: 'created',
    beforeDestroy: 'detached',
    destroyed: 'disposed',
    updated: 'updated',
    beforeUpdate: 'beforeUpdate',
    activated: 'activated',
    deactivated: 'deactivated',
    errorCaptured: 'error',

    // 纯 san 和 atom2san 混合情况时，支持纯 san 生命周期映射
    compiled: 'compiled',
    inited: 'inited',
    // 与上面冲突，代码中处理
    // created: 'created',
    attached: 'attached',
    detached: 'detached',
    disposed: 'disposed',
    error: 'error',
};

export const lifeCycleKeys = Object.keys(lifeCycleMap);
