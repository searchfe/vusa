import Vue from '../../../helpers/vue';
import {mixin} from '../../../../src/runtime/mixin';

describe('Options mixins', () => {
    // part done
    it('vm should have options from mixin', () => {
        const option = {
            // TODO: atom没有使用自定义指令，暂不支持
            // directives: {
            //     c: {},
            // },
            methods: {
                a: function () {},
            },
        };

        const vm = new Vue({
            template: '<div>test</div>',
            mixins: [option],
            methods: {
                b: function () {},
            },
        }).$mount();
        expect(vm.a).toBeDefined();
        expect(vm.b).toBeDefined();

        // TODO: atom没有使用自定义指令，暂不支持？
        // expect(vm.$options.directives.c).toBeDefined();
    });

    // TODO: mergeoption不支持自定义合并
    // it('should call hooks from mixins first', () => {
    //     const a = {};
    //     const b = {};
    //     const c = {};
    //     const f1 = function () {};
    //     const f2 = function () {};
    //     const f3 = function () {};
    //     const mixinA = {
    //         a: 1,
    //         template: 'foo',
    //         directives: {
    //             a: a,
    //         },
    //         created: f1,
    //     };
    //     const mixinB = {
    //         b: 1,
    //         directives: {
    //             b: b,
    //         },
    //         created: f2,
    //     };
    //     const result = mergeOptions({}, {
    //         directives: {
    //             c: c,
    //         },
    //         template: 'bar',
    //         mixins: [mixinA, mixinB],
    //         created: f3,
    //     });
    //     expect(result.a).toBe(1);
    //     expect(result.b).toBe(1);
    //     expect(result.directives.a).toBe(a);
    //     expect(result.directives.b).toBe(b);
    //     expect(result.directives.c).toBe(c);
    //     expect(result.created[0]).toBe(f1);
    //     expect(result.created[1]).toBe(f2);
    //     expect(result.created[2]).toBe(f3);
    //     expect(result.template).toBe('bar');
    // });

    // TODO: mergeoption不支持自定义合并
    // it('mixin methods should not override defined method', () => {
    //     const f1 = function () {};
    //     const f2 = function () {};
    //     const f3 = function () {};
    //     const mixinA = {
    //         methods: {
    //             xyz: f1,
    //         },
    //     };
    //     const mixinB = {
    //         methods: {
    //             xyz: f2,
    //         },
    //     };
    //     const result = mixin({}, {
    //         mixins: [mixinA, mixinB],
    //         methods: {
    //             xyz: f3,
    //         },
    //     });
    //     expect(result.methods.xyz).toBe(f3);
    // });

    // 暂不支持extend
    it('should accept constructors as mixins', () => {
        console.log('extend', Vue.extend);
        console.log('extend', typeof Vue.extend);
        // const mixin = Vue.extend({
        //     // directives: {
        //     //     c: {},
        //     // },
        //     methods: {
        //         a: function () {},
        //     },
        // });

        // const vm = new Vue({
        //     mixins: [mixin],
        //     methods: {
        //         b: function () {},
        //     },
        // });

        // expect(vm.a).toBeDefined();
        // expect(vm.b).toBeDefined();
        // expect(vm.$options.directives.c).toBeDefined();
    });
});
