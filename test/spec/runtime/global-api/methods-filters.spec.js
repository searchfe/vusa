/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';


describe('global-api methods and filters', () => {

    it('methods', done => {
        const vm = new Vue({
            template: '<div><span :test="foo">hello</span></div>',
            data: {
                foo: ['hello', 'world'],
                str: 'hello world',
                arr: ['a', 'b', 'c', 'd', 'e'],
                num: 1.1,
            },
            computed: {
                b() {
                    return this.array_join(this.foo, '-');
                },
                c() {
                    return this.str_pos(this.str, 'e');
                },
                d() {
                    return this.array_slice(this.arr, 0, 2);
                },
                e() {
                    return this.math_floor(this.num);
                },
            },
        }).$mount();

        expect(vm.b).toBe('hello-world');
        expect(vm.c).toBe(1);
        expect(vm.d).toEqual(['a', 'b']);
        expect(vm.e).toBe(1);
        done();
    });


    it('filters', done => {
        const vm = new Vue({
            template: '<div :test="foo | json"><span>hello</span></div>',
            data: {
                foo: {a: 1},
            },
        }).$mount();


        expect(vm.$el.getAttribute('test')).toBe('{"a":1}');
        waitForUpdate(() => {

        }).then(done);
    });

    it('filters lower', done => {
        const vm = new Vue({
            template: '<div>{{"HELLO" | lower}}</div>',
            data: {
                foo: {a: 1},
            },
        }).$mount();

        expect(vm.$el.textContent).toBe('hello');
        done();
    });

    it('filters lower', done => {
        const vm = new Vue({
            template: '<div>{{"hello" | upper}}</div>',
            data: {
                foo: {a: 1},
            },
        }).$mount();

        expect(vm.$el.textContent).toBe('HELLO');
        done();
    });

    // it('filters _s', done => {
    //     const vm = new Vue({
    //         template: '<div>{{foo | _s}}</div>',
    //         data: {
    //             foo: {a: 1},
    //         },
    //     }).$mount();
    //     expect(vm.$el.textContent).toBe('{"a":1}');
    //     done();
    // });
});
