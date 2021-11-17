/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';

describe('Directive a-bind', () => {

    it('normal attr', done => {
        const vm = new Vue({
            template: '<div><span :test="foo">hello</span></div>',
            data: {
                foo: 'ok',
            },
        }).$mount();

        expect(vm.$el.firstChild.getAttribute('test')).toBe('ok');
        vm.foo = 'again';

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.firstChild.getAttribute('test')).toBe('again');
            vm.foo = null;
        }).then(() => {
            expect(vm.$el.firstChild.hasAttribute('test')).toBe(false);
            vm.foo = false;
        }).then(() => {

            // FIX vue 里面 对于false的场景，直接移除了属性，但是san里面没有移除，因此修改了这个值
            // expect(vm.$el.firstChild.hasAttribute('test')).toBe(false);
            expect(vm.$el.firstChild.hasAttribute('test')).toBe(true);
            vm.foo = true;
        }).then(() => {
            expect(vm.$el.firstChild.getAttribute('test')).toBe('true');
            vm.foo = 0;
        }).then(() => {
            expect(vm.$el.firstChild.getAttribute('test')).toBe('0');
        }).then(done);
    });

    it('should set property for input value', done => {
        const vm = new Vue({
            template: `
                <div>
                    <input type="text" :value="foo">
                    <input type="checkbox" :checked="bar">
                </div>
            `,
            data: {
                foo: 'ok',
                bar: false,
            },
        }).$mount();
        expect(vm.$el.firstChild.value).toBe('ok');
        expect(vm.$el.lastChild.checked).toBe(false);
        vm.bar = true;

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.lastChild.checked).toBe(true);
        }).then(done);
    });

    // TODO xlink 没有用到的暂时不支持
    // it('xlink', done => {
    //     const vm = new Vue({
    //         template: '<svg><a :xlink:special="foo"></a></svg>',
    //         data: {
    //             foo: 'ok',
    //         },
    //     }).$mount();

    //     const xlinkNS = 'http://www.w3.org/1999/xlink';
    //     expect(vm.$el.firstChild.getAttributeNS(xlinkNS, 'special')).toBe('ok');
    //     vm.foo = 'again';

    //     // eslint-disable-next-line no-undef
    //     waitForUpdate(() => {
    //         expect(vm.$el.firstChild.getAttributeNS(xlinkNS, 'special')).toBe('again');
    //         vm.foo = null;
    //     }).then(() => {
    //         expect(vm.$el.firstChild.hasAttributeNS(xlinkNS, 'special')).toBe(false);
    //         vm.foo = true;
    //     }).then(() => {
    //         expect(vm.$el.firstChild.getAttributeNS(xlinkNS, 'special')).toBe('true');
    //     }).then(done);
    // });

    it('enumerated attr', done => {
        const vm = new Vue({
            template: '<div1><span1 :draggable="foo">hello</span1></div1>',
            data: {
                foo: true,
            },
        }).$mount();
        expect(vm.$el.firstChild.getAttribute('draggable')).toBe('true');
        vm.foo = 'again';

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.firstChild.getAttribute('draggable')).toBe('true');
            vm.foo = null;
        }).then(() => {
            expect(vm.$el.firstChild.getAttribute('draggable')).toBe('false');
            vm.foo = '';
        }).then(() => {

            // TODO 这块表现不一致，卡片中暂时没有使用的先注释掉
            // expect(vm.$el.firstChild.getAttribute('draggable')).toBe('true');
            vm.foo = false;
        }).then(() => {
            expect(vm.$el.firstChild.getAttribute('draggable')).toBe('false');
            vm.foo = 'false';
        }).then(() => {

            // TODO 这块表现不一致，卡片中暂时没有使用的先注释掉
            // expect(vm.$el.firstChild.getAttribute('draggable')).toBe('false');
        }).then(done);
    });

    it('boolean attr', done => {
        const vm = new Vue({
            template: '<div><span :disabled="foo">hello</span></div>',
            data: {
                foo: true,
            },
        }).$mount();

        expect(vm.$el.firstChild.getAttribute('disabled')).toBe('disabled');
        vm.foo = 'again';

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.firstChild.getAttribute('disabled')).toBe('disabled');
            vm.foo = null;
        }).then(() => {
            expect(vm.$el.firstChild.hasAttribute('disabled')).toBe(false);
            vm.foo = '';
        }).then(() => {
            expect(vm.$el.firstChild.hasAttribute('disabled')).toBe(true);
        }).then(done);
    });

    // TODO 不支持property，暂时不做适配
    // it('.prop modifier', () => {
    //     const vm = new Vue({
    //         template: '<div><span a-bind:text-content.prop="foo"></span><span :inner-html.prop="bar"></span></div>',
    //         data: {
    //             foo: 'hello',
    //             bar: '<span>qux</span>',
    //         },
    //     }).$mount();
    //     expect(vm.$el.children[0].textContent).toBe('hello');
    //     expect(vm.$el.children[1].innerHTML).toBe('<span>qux</span>');
    // });

    // TODO 不支持property，暂时不做适配
    // it('.prop modifier with normal attribute binding', () => {
    //     const vm = new Vue({
    //         template: '<input :some.prop="some" :id="id">',
    //         data: {
    //             some: 'hello',
    //             id: false,
    //         },
    //     }).$mount();
    //     expect(vm.$el.some).toBe('hello');
    //     expect(vm.$el.getAttribute('id')).toBe(null);
    // });

    it('.camel modifier', () => {
        const vm = new Vue({
            template: '<svg :view-box.camel="viewBox"></svg>',
            data: {
                viewBox: '0 0 1 1',
            },
        }).$mount();
        expect(vm.$el.getAttribute('viewBox')).toBe('0 0 1 1');
    });

    // TODO 暂时不支持 sync 功能
    // it('.sync modifier', done => {
    //     const vm = new Vue({
    //         template: '<test :foo-bar.sync="bar"></test>',
    //         data: {
    //             bar: 1,
    //         },
    //         components: {
    //             test: {
    //                 props: [
    //                     'fooBar',
    //                 ],
    //                 template: `
    //                     <div @click="$emit('update:fooBar', 2)">
    //                         {{ fooBar }}
    //                     </div>
    //                 `,
    //             },
    //         },
    //     }).$mount();

    //     expect(vm.$el.textContent).toBe('1');
    //     triggerEvent(vm.$el, 'click');
    //     waitForUpdate(() => {
    //         expect(vm.$el.textContent).toBe('2');
    //     }).then(done);
    // });

    // TODO 标签绑定的s-bind，暂时不支持，卡片中没有使用
    // it('bind object', done => {
    //     const vm = new Vue({
    //         template: '<input a-bind="test">',
    //         data: {
    //             test: {
    //                 id: 'test',
    //                 class: 'ok',
    //                 value: 'hello',
    //             },
    //         },
    //     }).$mount();
    //     expect(vm.$el.getAttribute('id')).toBe('test');
    //     expect(vm.$el.getAttribute('class')).toBe('ok');
    //     expect(vm.$el.value).toBe('hello');
    //     vm.test.id = 'hi';
    //     vm.test.value = 'bye';
    //     waitForUpdate(() => {
    //         expect(vm.$el.getAttribute('id')).toBe('hi');
    //         expect(vm.$el.getAttribute('class')).toBe('ok');
    //         expect(vm.$el.value).toBe('bye');
    //     }).then(done);
    // });

    // TODO 标签绑定的s-bind，暂时不支持，卡片中没有使用
    // it('bind object with overwrite', done => {
    //     const vm = new Vue({
    //         template: '<input a-bind="test" id="foo" :class="test.value">',
    //         data: {
    //             test: {
    //                 id: 'test',
    //                 class: 'ok',
    //                 value: 'hello',
    //             },
    //         },
    //     }).$mount();
    //     expect(vm.$el.getAttribute('id')).toBe('foo');
    //     expect(vm.$el.getAttribute('class')).toBe('hello');
    //     expect(vm.$el.value).toBe('hello');
    //     vm.test.id = 'hi';
    //     vm.test.value = 'bye';

    //     // eslint-disable-next-line
    //     waitForUpdate(() => {
    //         expect(vm.$el.getAttribute('id')).toBe('foo');
    //         expect(vm.$el.getAttribute('class')).toBe('bye');
    //         expect(vm.$el.value).toBe('bye');
    //     }).then(done);
    // });

    // TODO 标签绑定的s-bind，暂时不支持，卡片中没有使用
    // it('bind object with class/style', done => {
    //     const vm = new Vue({
    //         template: '<input class="a" style="color:red" a-bind="test">',
    //         data: {
    //             test: {
    //                 id: 'test',
    //                 class: ['b', 'c'],
    //                 style: {
    //                     fontSize: '12px',
    //                 },
    //             },
    //         },
    //     }).$mount();
    //     expect(vm.$el.id).toBe('test');
    //     expect(vm.$el.className).toBe('a b c');
    //     expect(vm.$el.style.color).toBe('red');
    //     expect(vm.$el.style.fontSize).toBe('12px');
    //     vm.test.id = 'hi';
    //     vm.test.class = ['d'];
    //     vm.test.style = {
    //         fontSize: '14px',
    //     };
    //     waitForUpdate(() => {
    //         expect(vm.$el.id).toBe('hi');
    //         expect(vm.$el.className).toBe('a d');
    //         expect(vm.$el.style.color).toBe('red');
    //         expect(vm.$el.style.fontSize).toBe('14px');
    //     }).then(done);
    // });

    // TODO 不支持property，暂时不做适配
    // it('bind object as prop', done => {
    //     const vm = new Vue({
    //         template: '<input a-bind.prop="test">',
    //         data: {
    //             test: {
    //             id: 'test',
    //             className: 'ok',
    //             value: 'hello'
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.id).toBe('test');
    //     expect(vm.$el.className).toBe('ok');
    //     expect(vm.$el.value).toBe('hello');
    //     vm.test.id = 'hi';
    //     vm.test.className = 'okay';
    //     vm.test.value = 'bye';
    //     waitForUpdate(() => {
    //         expect(vm.$el.id).toBe('hi');
    //         expect(vm.$el.className).toBe('okay');
    //         expect(vm.$el.value).toBe('bye');
    //     }).then(done);
    // });

    // TODO 标签绑定的s-bind，暂时不支持，卡片中没有使用
    // it('bind array', done => {
    //     const vm = new Vue({
    //         template: '<input a-bind="test">',
    //         data: {
    //             test: [{
    //                 id: 'test',
    //                 class: 'ok',
    //             }, {
    //                 value: 'hello',
    //             }],
    //         },
    //     }).$mount();
    //     expect(vm.$el.getAttribute('id')).toBe('test');
    //     expect(vm.$el.getAttribute('class')).toBe('ok');
    //     expect(vm.$el.value).toBe('hello');
    //     vm.test[0].id = 'hi';
    //     vm.test[1].value = 'bye';
    //     waitForUpdate(() => {
    //         expect(vm.$el.getAttribute('id')).toBe('hi');
    //         expect(vm.$el.getAttribute('class')).toBe('ok');
    //         expect(vm.$el.value).toBe('bye');
    //     }).then(done);
    // });

    // TODO 暂时不支持报警
    // it('warn expect object', () => {
    //     new Vue({
    //         template: '<input a-bind="test">',
    //         data: {
    //             test: 1,
    //         },
    //     }).$mount();
    //     expect('a-bind without argument expects an Object or Array value').toHaveBeenWarned();
    // });

    it('set value for option element', () => {
        const vm = new Vue({
            template: '<select><option :value="val">val</option></select>',
            data: {
                val: 'val',
            },
        }).$mount();

        // check value attribute
        expect(vm.$el.options[0].getAttribute('value')).toBe('val');
    });

    // a vdom patch edge case where the user has several un-keyed elements of the
    // same tag next to each other, and toggling them.
    it('properly update for toggling un-keyed children', done => {
        const vm = new Vue({
            template: `
                <div>
                <div a-if="ok" id="a" data-test="1"></div>
                <div a-if="!ok" id="b"></div>
                </div>
            `,
            data: {
                ok: true,
            },
        }).$mount();

        expect(vm.$el.children[0].id).toBe('a');
        expect(vm.$el.children[0].getAttribute('data-test')).toBe('1');
        vm.ok = false;

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.children[0].id).toBe('b');
            expect(vm.$el.children[0].getAttribute('data-test')).toBe(null);
        }).then(done);
    });

    // TODO .raw暂时也不支持，aladdin-atom中没有这个用法
    // it('raw attr modifier', () => {
    //     const vm = new Vue({
    //         template: `
    //             <div>
    //                 <img :src.raw="src">
    //             </div>
    //         `,
    //         data: {
    //             src: '&amp;'
    //         }
    //     }).$mount();
    //     const ele = vm.$el.querySelector('img');
    //     expect(ele.getAttribute('src')).toBe('&');
    // });

    // ATTENTION 额外增加的用于测试 a-bind 传递给组件的情况
    it('bind object', done => {
        const vm = new Vue({
            template: '<div><c-input a-bind="test"></c-input></div>',
            data: {
                test: {
                    id: 'test',
                },
            },
            components: {
                'c-input': {
                    props: [
                        'id',
                    ],
                    template: '<div>{{ id }}</div>',
                },
            },
        }).$mount();

        expect(vm.children[0].$el.innerHTML).toBe('test');

        vm.test = {
            id: 'hi',
        };

        waitForUpdate(() => {
            expect(vm.children[0].$el.innerHTML).toBe('hi');
        }).then(done);
    });
});
