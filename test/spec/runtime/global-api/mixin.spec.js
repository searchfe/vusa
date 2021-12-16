/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';


describe('Directive a-bind:class', () => {
    let options;
    beforeEach(() => {
        options = Vue.options;
    });
    afterEach(() => {
        Vue.options = options;
    });

    it('should work', () => {
        const spy = jasmine.createSpy('global mixin');

        // 不支持全局设置mixin，暂时改为下述方式
        // Vue.mixin({
        //     created() {
        //         spy(this.$options.myOption);
        //     },
        // });
        const myMixin = {
            created() {
                spy(this.$options.myOption);
            },
        };

        new Vue({
            template: '<div></div>',
            myOption: 'hello',
            mixins: [myMixin],
        });
        expect(spy).toHaveBeenCalledWith('hello');
    });

    // it('should work for constructors created before mixin is applied', () => {
    //     const calls = [];
    //     const Test = Vue.extend({
    //         name: 'test',
    //         beforeCreate() {
    //             calls.push(this.$options.myOption + ' local');
    //         },
    //     });
    //     Vue.mixin({
    //         beforeCreate() {
    //             calls.push(this.$options.myOption + ' global');
    //         },
    //     });
    //     expect(Test.options.name).toBe('test');
    //     new Test({
    //         myOption: 'hello',
    //     });
    //     expect(calls).toEqual(['hello global', 'hello local']);
    // });
});
