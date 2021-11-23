import Vue from '../../../helpers/vue';

function replaceComent(str) {
    return str.replace(/<!--[0-9]{1,}-->/g, '');
}

describe('Component', () => {
    it('static', () => {
        const vm = new Vue({
            template: '<test></test>',
            components: {
                test: {
                    data() {
                        return {
                            a: 123
                        };
                    },
                    template: '<span>{{a}}</span>'
                }
            }
        }).$mount();
        expect(vm.$el.tagName).toBe('SPAN');
        expect(vm.$el.innerHTML).toBe('123');
    });

    it('using component in restricted elements', () => {
        const vm = new Vue({
            template: '<div><table><tbody><test></test></tbody></table></div>',
            components: {
                test: {
                    data() {
                        return {
                            a: 123
                        };
                    },
                    template: '<tr><td>{{a}}</td></tr>'
                }
            }
        }).$mount();
        expect(vm.$el.innerHTML).toBe('<table><tbody><tr><td>123</td></tr></tbody></table>');
    });

    // vue输出<table><tbody><tr><td>123</td></tr></tbody></table>
    // vusa输出<table><tbody><tr is=\"test\"></tr></tbody></table>"
    // it('is' attribute', () => {
    //     const vm = new Vue({
    //         template: '<div><table><tbody><tr is="test"></tr></tbody></table></div>',
    //         components: {
    //             test: {
    //                 data() {
    //                     return {
    //                         a: 123
    //                     };
    //                 },
    //                 template: '<tr><td>{{a}}</td></tr>'
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.innerHTML).toBe('<table><tbody><tr><td>123</td></tr></tbody></table>');
    // });

    // 不支持inline-template
    // it('inline-template', () => {
    //     const vm = new Vue({
    //         template:
    //             '<div><test inline-template><span>{{a}}</span></test></div>',
    //         data: {
    //             a: 'parent'
    //         },
    //         components: {
    //             test: {
    //                 data() {
    //                     return {
    //                         a: 'child'
    //                     };
    //                 }
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.innerHTML).toBe('<span>child</span>');
    // });

    // 不支持warn
    // it('fragment instance warning', () => {
    //     new Vue({
    //         template: '<test></test>',
    //         components: {
    //             test: {
    //                 data() {
    //                     return {
    //                         a: 123,
    //                         b: 234
    //                     };
    //                 },
    //                 template: '<p>{{a}}</p><p>{{b}}</p>'
    //             }
    //         }
    //     }).$mount();
    //     expect('Component template should contain exactly one root element').toHaveBeenWarned()
    // });

    // san：san中v-bind传入的属性会覆盖子组件定义的data，不需要在子组件中显式声明props，渲染结果"<div>foo view-a</div>"
    // vue: 需要在子组件中显式声明props，渲染结果"<div view=\"view-a\">foo a</div>"
    // it('dynamic', done => {
    //     const vm = new Vue({
    //         template: '<component :is="view" :view="view"></component>',
    //         data: {
    //             view: 'view-a'
    //         },
    //         components: {
    //             'view-a': {
    //                 template: '<div>foo {{view}}</div>',
    //                 data() {
    //                     return {
    //                         view: 'a'
    //                     };
    //                 }
    //             },
    //             'view-b': {
    //                 template: '<div>bar {{view}}</div>',
    //                 data() {
    //                     return {
    //                         view: 'b'
    //                     };
    //                 }
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.outerHTML).toBe('<div view="view-a">foo a</div>');
    //     vm.view = 'view-b';
    //     waitForUpdate(() => {
    //         expect(vm.$el.outerHTML).toBe('<div view='view-b'>bar b</div>');
    //         vm.view = '';
    //     }).then(() => {
    //         expect(vm.$el.nodeType).toBe(8);
    //         expect(vm.$el.data).toBe('');
    //     }).then(done);
    // });

    // :is的值为空字符串时，渲染结果不一致
    // it('dynamic with props', done => {
    //     const vm = new Vue({
    //         template: '<component :is="view" :view="view"></component>',
    //         data: {
    //             view: 'view-a'
    //         },
    //         components: {
    //             'view-a': {
    //                 template: '<div>foo {{view}}</div>',
    //                 props: ['view']
    //             },
    //             'view-b': {
    //                 template: '<div>bar {{view}}</div>',
    //                 props: ['view']
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.outerHTML).toBe('<div>foo view-a</div>');
    //     vm.view = 'view-b';
    //     waitForUpdate(() => {
    //         expect(vm.$el.outerHTML).toBe('<div>bar view-b</div>');
    //         vm.view = '';
    //     }).then(() => {
    //        // vm.$el.nodeType = 1,vm.$el.data=undefined
    //         expect(vm.$el.nodeType).toBe(8);
    //         expect(vm.$el.data).toBe('');
    //     }).then(done);
    // });

    // 不支持,aladdin-atom中未见到该用法
    // it(':is using raw component constructor', () => {
    //     const vm = new Vue({
    //         template:
    //             '<div>' +
    //             '<component :is="$options.components.test"></component>' +
    //             '<component :is="$options.components.async"></component>' +
    //             '</div>',
    //         components: {
    //             test: {
    //                 template: '<span>foo</span>'
    //             },
    //             async: function(resolve) {
    //                 resolve({
    //                     template: '<span>bar</span>'
    //                 });
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.innerHTML).toBe('<span>foo</span><span>bar</span>');
    // });

    // san渲染有注释节点<!--数字-->，如<!--16-->，vue渲染完无注释节点，暂时去掉注释节点
    it('dynamic combined with a-for', done => {
        const vm = new Vue({
            template:
                '<div>' +
                '<component a-for="c in comps" :key="c.type" :is="c.type"></component>' +
                '</div>',
            data: {
                comps: [
                    {
                        type: 'one'
                    },
                    {
                        type: 'two'
                    }
                ]
            },
            components: {
                one: {
                    template: '<span>one</span>'
                },
                two: {
                    template: '<span>two</span>'
                }
            }
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>one</span><span>two</span>');
        vm.comps[1].type = 'one';
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>one</span><span>one</span>');
        }).then(done);
    });

    // 渲染结果不一致，vue输出hello world  vusa输出helloworld
    // it('should compile parent template directives & content in parent scope', done => {
    //     debugger
    //     const vm = new Vue({
    //         data: {
    //             ok: false,
    //             message: 'hello'
    //         },
    //         template: '<test a-show="ok">{{message}}</test>',
    //         components: {
    //             test: {
    //                 template: '<div><slot></slot> {{message}}</div>',
    //                 data() {
    //                     return {
    //                         message: 'world'
    //                     };
    //                 }
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.style.display).toBe('none');
    //     expect(vm.$el.textContent).toBe('hello world');
    //     vm.ok = true;
    //     vm.message = 'bye';
    //     waitForUpdate(() => {
    //         expect(vm.$el.style.display).toBe('');
    //         expect(vm.$el.textContent).toBe('bye world');
    //     }).then(done);
    // });

    // san渲染结果<!--13-->，vm.$el.textContent=13，san渲染无空格helloworld
    // it('parent content + a-if', done => {
    //     const vm = new Vue({
    //         data: {
    //             ok: false,
    //             message: 'hello'
    //         },
    //         template: '<test a-if="ok">{{message}}</test>',
    //         components: {
    //             test: {
    //                 template: '<div><slot></slot> {{message}}</div>',
    //                 data() {
    //                     return {
    //                         message: 'world'
    //                     };
    //                 }
    //             }
    //         }
    //     }).$mount();
    //     expect(vm.$el.textContent).toBe('');
    //     expect(vm.$children.length).toBe(0);
    //     vm.ok = true;
    //     waitForUpdate(() => {
    //         expect(vm.$children.length).toBe(1);
    //         expect(vm.$el.textContent).toBe('hello world');
    //     }).then(done);
    // });

    // san渲染有注释节点<!--数字-->，如<!--16-->，vue渲染完无注释节点，暂时去掉注释节点
    it('props', () => {
        const vm = new Vue({
            data: {
                list: [
                    {
                        a: 1
                    },
                    {
                        a: 2
                    }
                ]
            },
            template: '<test :collection="list"></test>',
            components: {
                test: {
                    template: '<ul><li a-for="item in collection">{{item.a}}</li></ul>',
                    props: ['collection']
                }
            }
        }).$mount();
        expect(replaceComent(vm.$el.outerHTML)).toBe('<ul><li>1</li><li>2</li></ul>');
    });

    // 不支持提示
    // it('should warn when using camelCased props in in-DOM template', () => {
    //     new Vue({
    //         data: {
    //             list: [
    //                 {
    //                     a: 1
    //                 },
    //                 {
    //                     a: 2
    //                 }
    //             ]
    //         },
    //         template: '<test :somecollection="list"></test>', // <-- simulate lowercased template
    //         components: {
    //             test: {
    //                 template: '<ul><li a-for="item in someCollection">{{item.a}}</li></ul>',
    //                 props: ['someCollection']
    //             }
    //         }
    //     }).$mount();
    //     expect('You should probably use "some-collection" instead of "someCollection".').toHaveBeenTipped();
    // });

    // 不支持提示
    // it('should warn when using camelCased events in in-DOM template', () => {
    //     new Vue({
    //         template: '<test @foobar="a++"></test>', // <-- simulate lowercased template
    //         components: {
    //             test: {
    //                 template: '<div></div>',
    //                 created() {
    //                     this.$emit('fooBar');
    //                 }
    //             }
    //         }
    //     }).$mount();
    //     expect('You should probably use "foo-bar" instead of "fooBar".').toHaveBeenTipped();
    // });

    it('not found component should not throw', () => {
        expect(function() {
            new Vue({
                template: '<div is="non-existent"></div>'
            });
        }).not.toThrow();
    });

    // components无template时，helper/vue.js不支持
    // it('properly update replaced higher-order component root node', done => {
    //     const vm = new Vue({
    //         data: {
    //             color: 'red'
    //         },
    //         template: '<test id="foo" :class="color"></test>',
    //         components: {
    //             test: {
    //                 data() {
    //                     return {
    //                         tag: 'div'
    //                     };
    //                 },
    //                 render(h) {
    //                     return h(
    //                         this.tag,
    //                         { class: 'test' },
    //                         'hi'
    //                     );
    //                 }
    //             }
    //         }
    //     }).$mount();

    //     expect(vm.$el.tagName).toBe('DIV');
    //     expect(vm.$el.id).toBe('foo');
    //     expect(vm.$el.className).toBe('test red');

    //     vm.color = 'green';
    //     waitForUpdate(() => {
    //         expect(vm.$el.tagName).toBe('DIV');
    //         expect(vm.$el.id).toBe('foo');
    //         expect(vm.$el.className).toBe('test green');
    //         vm.$children[0].tag = 'p';
    //     }).then(() => {
    //         expect(vm.$el.tagName).toBe('P');
    //         expect(vm.$el.id).toBe('foo');
    //         expect(vm.$el.className).toBe('test green');
    //         vm.color = 'red';
    //     }).then(() => {
    //         expect(vm.$el.tagName).toBe('P');
    //         expect(vm.$el.id).toBe('foo');
    //         expect(vm.$el.className).toBe('test red');
    //     }).then(done);
    // });

    // 不支持config
    // it('catch component render error and preserve previous vnode', done => {
    //     const spy = jasmine.createSpy();
    //     Vue.config.errorHandler = spy;
    //     const vm = new Vue({
    //         data: {
    //             a: {
    //                 b: 123
    //             }
    //         },
    //         render(h) {
    //             return h('div', [this.a.b]);
    //         }
    //     }).$mount();
    //     expect(vm.$el.textContent).toBe('123');
    //     expect(spy).not.toHaveBeenCalled();
    //     vm.a = null;
    //     waitForUpdate(() => {
    //         expect(spy).toHaveBeenCalled();
    //         expect(vm.$el.textContent).toBe('123'); // should preserve rendered DOM
    //         vm.a = {
    //             b: 234
    //         };
    //     }).then(() => {
    //         expect(vm.$el.textContent).toBe('234'); // should be able to recover
    //         Vue.config.errorHandler = null;
    //     }).then(done);
    // });

    // it('relocates node without error', done => {
    //     const el = document.createElement('div');
    //     document.body.appendChild(el);
    //     const target = document.createElement('div');
    //     document.body.appendChild(target);

    //     const Test = {
    //         render(h) {
    //             return h(
    //                 'div',
    //                 {
    //                     class: 'test'
    //                 },
    //                 this.$slots.default
    //             );
    //         },
    //         mounted() {
    //             target.appendChild(this.$el);
    //         },
    //         beforeDestroy() {
    //             const parent = this.$el.parentNode;
    //             if (parent) {
    //                 parent.removeChild(this.$el);
    //             }
    //         }
    //     };
    //     const vm = new Vue({
    //         data() {
    //             return {
    //                 view: true
    //             };
    //         },
    //         template: `<div><test a-if="view">Test</test></div>`,
    //         components: {
    //             test: Test
    //         }
    //     }).$mount(el);

    //     expect(el.outerHTML).toBe('<div></div>');
    //     expect(target.outerHTML).toBe('<div><div class="test">Test</div></div>');
    //     vm.view = false;
    //     waitForUpdate(() => {
    //         expect(el.outerHTML).toBe('<div></div>');
    //         expect(target.outerHTML).toBe('<div></div>');
    //         vm.$destroy();
    //     }).then(done);
    // });
});
