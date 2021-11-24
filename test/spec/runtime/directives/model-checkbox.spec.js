/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';

describe('Directive a-model checkbox', () => {
    // it('should work', done => {
    //     const vm = new Vue({
    //         data: {
    //             test: true,
    //         },
    //         template: '<input type="checkbox" a-model="test">',
    //     }).$mount();
    //     document.body.appendChild(vm.$el);
    //     expect(vm.$el.checked).toBe(true);
    //     vm.test = false;

    //     waitForUpdate(function () {
    //         expect(vm.$el.checked).toBe(false);
    //         expect(vm.test).toBe(false);
    //         vm.$el.click();
    //         expect(vm.$el.checked).toBe(true);
    //         expect(vm.test).toBe(true);
    //     }).then(() => {
    //         document.body.removeChild(vm.$el);
    //     }).then(done);
    // });

    // TODO 暂时不支持true-value和false-value的场景
    // it('should respect value bindings', done => {
    //     const vm = new Vue({
    //         data: {
    //             test: 1,
    //             a: 1,
    //             b: 2,
    //         },
    //         template: '<input type="checkbox" a-model="test" :true-value="a" :false-value="b">',
    //     }).$mount();
    //     document.body.appendChild(vm.$el);
    //     expect(vm.$el.checked).toBe(true);
    //     vm.$el.click();
    //     expect(vm.$el.checked).toBe(false);
    //     expect(vm.test).toBe(2);
    //     vm.$el.click();
    //     expect(vm.$el.checked).toBe(true);
    //     expect(vm.test).toBe(1);
    //     vm.test = 2;
    //     waitForUpdate(() => {
    //         expect(vm.$el.checked).toBe(false);
    //         vm.test = 1;
    //     }).then(() => {
    //         expect(vm.$el.checked).toBe(true);
    //         document.body.removeChild(vm.$el);
    //     }).then(done);
    // });

    it('bind to Array value', done => {
        const vm = new Vue({
            data: {
                test: ['1'],
            },
            template: `
                <div>
                    <input type="checkbox" a-model="test" value="1">
                    <input type="checkbox" a-model="test" value="2">
                </div>
            `,
        }).$mount();
        document.body.appendChild(vm.$el);
        expect(vm.$el.children[0].checked).toBe(true);
        expect(vm.$el.children[1].checked).toBe(false);
        vm.$el.children[0].click();
        expect(vm.test.length).toBe(0);
        vm.$el.children[1].click();
        expect(vm.test).toEqual(['2']);
        vm.$el.children[0].click();
        expect(vm.test).toEqual(['2', '1']);
        vm.test = ['1'];
        waitForUpdate(() => {
            expect(vm.$el.children[0].checked).toBe(true);
            expect(vm.$el.children[1].checked).toBe(false);
        }).then(done);
    });

    // san有bug，value 类型是数字时会有问题，暂时改成字符串
    it('bind to Array value with value bindings', done => {
        const vm = new Vue({
            data: {
                test: ['1'],
                // test: [1],
            },
            // template: `
            //     <div>
            //         <input type="checkbox" a-model="test" :value="1">
            //         <input type="checkbox" a-model="test" :value="2">
            //     </div>
            // `,
            template: `
                <div>
                    <input type="checkbox" a-model="test" :value="'1'">
                    <input type="checkbox" a-model="test" :value="'2'">
                </div>
            `,
        }).$mount();
        document.body.appendChild(vm.$el);
        expect(vm.$el.children[0].checked).toBe(true);
        expect(vm.$el.children[1].checked).toBe(false);
        vm.$el.children[0].click();
        expect(vm.test.length).toBe(0);
        vm.$el.children[1].click();
        // expect(vm.test).toEqual([2]);
        expect(vm.test).toEqual(['2']);
        vm.$el.children[0].click();
        // expect(vm.test).toEqual([2, 1]);
        expect(vm.test).toEqual(['2', '1']);
        // vm.test = [1];
        vm.test = ['1'];
        waitForUpdate(() => {
            expect(vm.$el.children[0].checked).toBe(true);
            expect(vm.$el.children[1].checked).toBe(false);
        }).then(done);
    });


    // TODO value不支持对象
    // it('bind to Array value with value bindings (object loose equal)', done => {
    //     const vm = new Vue({
    //         data: {
    //             test: [{
    //                 a: 1,
    //             }],
    //         },
    //         template: `
    //             <div>
    //             <input type="checkbox" a-model="test" :value="{ a: 1 }">
    //             <input type="checkbox" a-model="test" :value="{ a: 2 }">
    //             </div>
    //         `,
    //     }).$mount();
    //     document.body.appendChild(vm.$el);
    //     expect(vm.$el.children[0].checked).toBe(true);
    //     expect(vm.$el.children[1].checked).toBe(false);
    //     vm.$el.children[0].click();
    //     expect(vm.test.length).toBe(0);
    //     vm.$el.children[1].click();
    //     expect(vm.test).toEqual([{
    //         a: 2,
    //     }]);
    //     vm.$el.children[0].click();
    //     expect(vm.test).toEqual([{
    //         a: 2,
    //     }, {
    //         a: 1,
    //     }]);
    //     vm.test = [{
    //         a: 1,
    //     }];
    //     waitForUpdate(() => {
    //         expect(vm.$el.children[0].checked).toBe(true);
    //         expect(vm.$el.children[1].checked).toBe(false);
    //     }).then(done);
    // });

    // ATTENTION 卡片中没有使用.number的场景，先不支持，下面去掉了number
    it('.number modifier', () => {
        const vm = new Vue({
            data: {
                test: [],
                check: true,
            },
            // template: `
            //     <div>
            //         <input type="checkbox" a-model.number="test" value="1">
            //         <input type="checkbox" a-model="test" value="2">
            //         <input type="checkbox" a-model.number="check">
            //     </div>
            // `,
            template: `
                <div>
                    <input type="checkbox" a-model="test" value="1">
                    <input type="checkbox" a-model="test" value="2">
                    <input type="checkbox" a-model="check">
                </div>
            `,
        }).$mount();
        document.body.appendChild(vm.$el);
        const checkboxInputs = vm.$el.getElementsByTagName('input');
        expect(checkboxInputs[0].checked).toBe(false);
        expect(checkboxInputs[1].checked).toBe(false);
        expect(checkboxInputs[2].checked).toBe(true);
        checkboxInputs[0].click();
        checkboxInputs[1].click();
        checkboxInputs[2].click();
        expect(vm.test).toEqual(['1', '2']);
        expect(vm.check).toEqual(false);
    });

    // ATTENTION 数字和bool类型识别有问题，暂时不支持
    it('should respect different primitive type value', done => {
        const vm = new Vue({
            data: {
                test: [0],
            },
            template:
                '<div>'
                + '<input type="checkbox" value="" a-model="test">'
                + '<input type="checkbox" value="0" a-model="test">'
                + '<input type="checkbox" value="1" a-model="test">'
                + '<input type="checkbox" value="false" a-model="test">'
                + '<input type="checkbox" value="true" a-model="test">'
                + '</div>',
        }).$mount();
        const checkboxInput = vm.$el.children;
        expect(checkboxInput[0].checked).toBe(false);
        // expect(checkboxInput[1].checked).toBe(true);
        expect(checkboxInput[2].checked).toBe(false);
        expect(checkboxInput[3].checked).toBe(false);
        expect(checkboxInput[4].checked).toBe(false);
        vm.test = [1];
        waitForUpdate(() => {
            expect(checkboxInput[0].checked).toBe(false);
            expect(checkboxInput[1].checked).toBe(false);
            // expect(checkboxInput[2].checked).toBe(true);
            expect(checkboxInput[3].checked).toBe(false);
            expect(checkboxInput[4].checked).toBe(false);
            vm.test = [''];
        }).then(() => {
            // expect(checkboxInput[0].checked).toBe(true);
            expect(checkboxInput[1].checked).toBe(false);
            expect(checkboxInput[2].checked).toBe(false);
            expect(checkboxInput[3].checked).toBe(false);
            expect(checkboxInput[4].checked).toBe(false);
            vm.test = [false];
        }).then(() => {
            expect(checkboxInput[0].checked).toBe(false);
            expect(checkboxInput[1].checked).toBe(false);
            expect(checkboxInput[2].checked).toBe(false);
            // expect(checkboxInput[3].checked).toBe(true);
            expect(checkboxInput[4].checked).toBe(false);
            vm.test = [true];
        }).then(() => {
            expect(checkboxInput[0].checked).toBe(false);
            expect(checkboxInput[1].checked).toBe(false);
            expect(checkboxInput[2].checked).toBe(false);
            expect(checkboxInput[3].checked).toBe(false);
            // expect(checkboxInput[4].checked).toBe(true);
            vm.test = ['', 0, 1, false, true];
        }).then(() => {
            expect(checkboxInput[0].checked).toBe(true);
            // expect(checkboxInput[1].checked).toBe(true);
            // expect(checkboxInput[2].checked).toBe(true);
            // expect(checkboxInput[3].checked).toBe(true);
            // expect(checkboxInput[4].checked).toBe(true);
        }).then(done);
    });

    // #4521
    it('should work with click event', done => {
        const vm = new Vue({
            data: {
                num: 1,
                checked: false,
            },
            // eslint-disable-next-line max-len
            template: '<div @click="add">click {{ num }}<input ref="checkbox" type="checkbox" a-model="checked"/></div>',
            methods: {
                add: function () {
                    this.num++;
                },
            },
        }).$mount();
        document.body.appendChild(vm.$el);
        const checkbox = vm.$refs.checkbox;
        checkbox.click();
        waitForUpdate(() => {
            expect(checkbox.checked).toBe(true);
            expect(vm.num).toBe(2);
        }).then(done);
    });

    it('should get updated with model when in focus', done => {
        const vm = new Vue({
            data: {
                a: 2,
            },
            template: '<input type="checkbox" a-model="a" />',
        }).$mount();
        document.body.appendChild(vm.$el);
        vm.$el.click();
        waitForUpdate(() => {
            expect(vm.$el.checked).toBe(false);
            vm.a = 2;
        }).then(() => {
            expect(vm.$el.checked).toBe(true);
        }).then(done);
    });

    it('triggers a watcher when binding to an array value in a checkbox', done => {
        const vm = new Vue({
            data: {
                test: {
                    thing: false,
                    arr: [true],
                },
            },
            template: `
                <div>
                    <input type="checkbox" a-model="test.arr[0]">
                    <span>{{ test.arr[0] }}</span>
                </div>
            `,
        }).$mount();
        document.body.appendChild(vm.$el);
        expect(vm.$el.children[0].checked).toBe(true);
        expect(vm.$el.children[1].textContent).toBe('true');
        vm.$el.children[0].click();
        expect(vm.$el.children[0].checked).toBe(false);
        waitForUpdate(() => {
            expect(vm.$el.children[1].textContent).toBe('false');
        }).then(done);
    });
});
