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
    destroy: 'disposed',
    updated: 'updated',
    beforeUpdate: 'beforeUpdate',
    activated: 'activated',
    deactivated: 'deactivated',
};

export const lifeCycleKeys = Object.keys(lifeCycleMap);
