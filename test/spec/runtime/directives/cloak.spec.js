import Vue from '../../../helpers/vue';

describe('Directive a-cloak', () => {
    it('should be removed after compile', () => {
        const vm = new Vue({
            template: `<div a-clock></div>`
        }).$mount();
        expect(vm.$el.hasAttribute('v-cloak')).toBe(false);
    });
});
