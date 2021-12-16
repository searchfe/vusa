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
};

export const lifeCycleKeys = Object.keys(lifeCycleMap);
