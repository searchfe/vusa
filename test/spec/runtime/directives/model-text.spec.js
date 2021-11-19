/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';
// import {
//     isIE9,
//     isAndroid
// } from 'core/util/env';

describe('Directive a-model text', () => {
    it('should update value both ways', done => {
        const vm = new Vue({
            data: {
                test: 'b',
            },
            template: '<input a-model="test">',
        }).$mount();
        expect(vm.$el.value).toBe('b');
        vm.test = 'a';
        waitForUpdate(() => {
            expect(vm.$el.value).toBe('a');
            vm.$el.value = 'c';
            triggerEvent(vm.$el, 'input');
            expect(vm.test).toBe('c');
        }).then(done);
    });

    // ATTENTION 卡片没有用到 a-model.lazy 的场景，暂时不支持
    // it('.lazy modifier', () => {
    //     const vm = new Vue({
    //         data: {
    //             test: 'b',
    //         },
    //         template: '<input a-model.lazy="test">',
    //     }).$mount();
    //     expect(vm.$el.value).toBe('b');
    //     expect(vm.test).toBe('b');
    //     vm.$el.value = 'c';
    //     triggerEvent(vm.$el, 'input');
    //     expect(vm.test).toBe('b');
    //     triggerEvent(vm.$el, 'change');
    //     expect(vm.test).toBe('c');
    // });

    // 卡片没有用到 a-model.number 的场景，暂时不支持，去掉了number过了当前的case
    it('.number modifier', () => {
        const vm = new Vue({
            data: {
                test: 1,
            },
            // template: '<input a-model.number="test">',
            template: '<input a-model="test">',
        }).$mount();
        expect(vm.test).toBe(1);
        vm.$el.value = '2';
        triggerEvent(vm.$el, 'input');
        expect(vm.test).toBe('2');
        // should let strings pass through
        vm.$el.value = 'f';
        triggerEvent(vm.$el, 'input');
        expect(vm.test).toBe('f');
    });

    // ATTENTION 卡片没有用到 a-model.trim 的场景，暂时不支持
    // it('.trim modifier', () => {
    //     const vm = new Vue({
    //         data: {
    //             test: 'hi',
    //         },
    //         template: '<input a-model.trim="test">',
    //     }).$mount();
    //     expect(vm.test).toBe('hi');
    //     vm.$el.value = ' what ';
    //     triggerEvent(vm.$el, 'input');
    //     expect(vm.test).toBe('what');
    // });

    // ATTENTION 卡片没有用到 a-model.number 的场景，暂时不支持
    // it('.number focus and typing', done => {
    //     const vm = new Vue({
    //         data: {
    //             test: 0,
    //             update: 0,
    //         },
    //         template:
    //             '<div>'
    //             + '<input ref="input" a-model.number="test">{{ update }}'
    //             + '<input ref="blur">'
    //             + '</div>',
    //     }).$mount();

    //     document.body.appendChild(vm.$el);
    //     vm.$refs.input.focus();
    //     expect(vm.test).toBe(0);
    //     vm.$refs.input.value = '1.0';
    //     triggerEvent(vm.$refs.input, 'input');
    //     expect(vm.test).toBe(1);
    //     vm.update++;
    //     waitForUpdate(() => {
    //         expect(vm.$refs.input.value).toBe('1.0');
    //         vm.$refs.blur.focus();
    //         vm.update++;
    //     }).then(() => {
    //         expect(vm.$refs.input.value).toBe('1');
    //     }).then(done);
    // });

    // ATTENTION 卡片没有用到 a-model.trim 的场景，暂时不支持
    // it('.trim focus and typing', done => {
    //     const vm = new Vue({
    //         data: {
    //             test: 'abc',
    //             update: 0,
    //         },
    //         template:
    //             '<div>'
    //             + '<input ref="input" a-model.trim="test" type="text">{{ update }}'
    //             + '<input ref="blur"/>'
    //             + '</div>',
    //     }).$mount();
    //     document.body.appendChild(vm.$el);
    //     vm.$refs.input.focus();
    //     vm.$refs.input.value = ' abc ';
    //     triggerEvent(vm.$refs.input, 'input');
    //     expect(vm.test).toBe('abc');
    //     vm.update++;
    //     waitForUpdate(() => {
    //         expect(vm.$refs.input.value).toBe(' abc ');
    //         vm.$refs.blur.focus();
    //         vm.update++;
    //     }).then(() => {
    //         expect(vm.$refs.input.value).toBe('abc');
    //     }).then(done);
    // });

    it('multiple inputs', done => {
        const spy = jasmine.createSpy();
        const vm = new Vue({
            data: {
                selections: [[1, 2, 3], [4, 5]],
                inputList: [{
                    name: 'questionA',
                    data: ['a', 'b', 'c'],
                }, {
                    name: 'questionB',
                    data: ['1', '2'],
                }],
            },
            watch: {
                selections: spy,
            },
            template:
                '<div>'
                + '<div a-for="(inputGroup, idx) in inputList">'
                +    '<div>'
                +    '<span a-for="(item, index) in inputGroup.data">'
                // eslint-disable-next-line max-len
                +        '<input a-bind:name="item" type="text" a-model="selections[idx][index]" a-bind:id="idx+\'-\'+index"/>'
                // +        '<input a-bind:name="item" type="text" a-model.number="selections[idx][index]" a-bind:id="idx+\'-\'+index"/>'
                +        '<label>{{item}}</label>'
                +    '</span>'
                +    '</div>'
                + '</div>'
                + '<span ref="rs">{{selections}}</span>'
                + '</div>',
        }).$mount();
        var inputs = vm.$el.getElementsByTagName('input');
        inputs[1].value = 'test';
        triggerEvent(inputs[1], 'input');
        waitForUpdate(() => {
            expect(spy).toHaveBeenCalled();
            expect(vm.selections).toEqual([[1, 'test', 3], [4, 5]]);
        }).then(done);
    });

    // TODO IE9 不支持
    // if (isIE9) {
    //     it('IE9 selectionchange', done => {
    //         const vm = new Vue({
    //             data: {
    //                 test: 'foo',
    //             },
    //             template: '<input a-model="test">',
    //         }).$mount();
    //         const input = vm.$el;
    //         input.value = 'bar';
    //         document.body.appendChild(input);
    //         input.focus();
    //         triggerEvent(input, 'selectionchange');
    //         waitForUpdate(() => {
    //             expect(vm.test).toBe('bar');
    //             input.value = 'a';
    //             triggerEvent(input, 'selectionchange');
    //             expect(vm.test).toBe('a');
    //         }).then(done);
    //     });
    // }

    // if (!isAndroid) {
    it('compositionevents', function (done) {
        const vm = new Vue({
            data: {
                test: 'foo',
            },
            template: '<input a-model="test">',
        }).$mount();
        const input = vm.$el;
        triggerEvent(input, 'compositionstart');
        input.value = 'baz';
        // input before composition unlock should not call set
        triggerEvent(input, 'input');
        expect(vm.test).toBe('foo');
        // after composition unlock it should work
        triggerEvent(input, 'compositionend');
        triggerEvent(input, 'input');
        expect(vm.test).toBe('baz');
        done();
    });
    // }

    // it('warn invalid tag', () => {
    //     new Vue({
    //         data: {
    //             test: 'foo',
    //         },
    //         template: '<div a-model="test"></div>',
    //     }).$mount();
    //     expect('<div a-model="test">: a-model is not supported on this element type').toHaveBeenWarned();
    // });

    // #3468
    it('should have higher priority than user a-on events', () => {
        const spy = jasmine.createSpy();
        const vm = new Vue({
            data: {
                a: 'a',
            },
            template: '<input a-model="a" @input="onInput">',
            methods: {
                onInput(e) {
                    spy(e.target.value);
                },
            },
        }).$mount();
        vm.$el.value = 'b';
        triggerEvent(vm.$el, 'input');
        expect(spy).toHaveBeenCalledWith('b');
    });

    // it('warn binding to a-for alias', () => {
    //     new Vue({
    //         data: {
    //             strings: ['hi'],
    //         },
    //         template: `
    //             <div>
    //                 <div a-for="str in strings">
    //                     <input a-model="str">
    //                 </div>
    //             </div>
    //         `,
    //     }).$mount();
    //     expect('You are binding a-model directly to a a-for iteration alias').toHaveBeenWarned();
    // });

    // if (!isAndroid) {
    it('does not trigger extra input events with single compositionend', () => {
        const spy = jasmine.createSpy();
        const vm = new Vue({
            data: {
                a: 'a',
            },
            template: '<input a-model="a" @input="onInput">',
            methods: {
                onInput(e) {
                    spy(e.target.value);
                },
            },
        }).$mount();
        expect(spy.calls.count()).toBe(0);
        vm.$el.value = 'b';
        triggerEvent(vm.$el, 'input');
        expect(spy.calls.count()).toBe(1);
        triggerEvent(vm.$el, 'compositionend');
        expect(spy.calls.count()).toBe(1);
    });

    it('triggers extra input on compositionstart + end', () => {
        const spy = jasmine.createSpy();
        const vm = new Vue({
            data: {
                a: 'a',
            },
            template: '<input a-model="a" @input="onInput">',
            methods: {
                onInput(e) {
                    spy(e.target.value);
                },
            },
        }).$mount();
        expect(spy.calls.count()).toBe(0);
        vm.$el.value = 'b';
        triggerEvent(vm.$el, 'input');
        expect(spy.calls.count()).toBe(1);
        triggerEvent(vm.$el, 'compositionstart');
        triggerEvent(vm.$el, 'compositionend');
        expect(spy.calls.count()).toBe(2);
    });
    // }
});
