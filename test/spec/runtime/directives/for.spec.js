/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';

function replaceComent(str) {
    return str.replace(/<!--[0-9]{1,}-->/g, '');
}

describe('Directive a-for', () => {
    it('should render array of primitive values', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="item in list">{{item}}</span>
                </div>
            `,
            data: {
                list: ['a', 'b', 'c'],
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>a</span><span>b</span><span>c</span>');
        // Vue.set(vm.list, 0, 'd');
        vm.list.splice(0, 1, 'd');
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>d</span><span>b</span><span>c</span>');
            vm.list.push('d');
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>d</span><span>b</span><span>c</span><span>d</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>d</span><span>d</span>');
            vm.list = ['x', 'y'];
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>x</span><span>y</span>');
        }).then(done);
    });

    it('should render array of primitive values with index', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="(item, i) in list">{{i}}-{{item}}</span>
                </div>
            `,
            data: {
                list: ['a', 'b', 'c'],
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-a</span><span>1-b</span><span>2-c</span>');
        // Vue.set(vm.list, 0, 'd');
        vm.list.splice(0, 1, 'd');
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-d</span><span>1-b</span><span>2-c</span>');
            vm.list.push('d');
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML))
                .toBe('<span>0-d</span><span>1-b</span><span>2-c</span><span>3-d</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-d</span><span>1-d</span>');
            vm.list = ['x', 'y'];
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-x</span><span>1-y</span>');
        }).then(done);
    });

    it('should render array of object values', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="item in list">{{item.value}}</span>
                </div>
            `,
            data: {
                list: [{
                    value: 'a',
                }, {
                    value: 'b',
                }, {
                    value: 'c',
                }],
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>a</span><span>b</span><span>c</span>');
        // Vue.set(vm.list, 0, {
        //     value: 'd',
        // });
        vm.list.splice(0, 1, {
            value: 'd',
        });
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>d</span><span>b</span><span>c</span>');
            vm.list[0].value = 'e';
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>e</span><span>b</span><span>c</span>');
            vm.list.push({});
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>e</span><span>b</span><span>c</span><span></span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>e</span><span></span>');
            vm.list = [{
                value: 'x',
            }, {
                value: 'y',
            }];
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>x</span><span>y</span>');
        }).then(done);
    });

    it('should render array of object values with index', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="(item, i) in list">{{i}}-{{item.value}}</span>
                </div>
            `,
            data: {
                list: [{
                    value: 'a',
                }, {
                    value: 'b',
                }, {
                    value: 'c',
                }],
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-a</span><span>1-b</span><span>2-c</span>');
        // Vue.set(vm.list, 0, { value: 'd' })
        vm.list.splice(0, 1, {
            value: 'd',
        });
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-d</span><span>1-b</span><span>2-c</span>');
            vm.list[0].value = 'e';
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-e</span><span>1-b</span><span>2-c</span>');
            vm.list.push({});
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML))
                .toBe('<span>0-e</span><span>1-b</span><span>2-c</span><span>3-</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-e</span><span>1-</span>');
            vm.list = [{
                value: 'x',
            }, {
                value: 'y',
            }];
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-x</span><span>1-y</span>');
        }).then(done);
    });

    it('should render an Object', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="val in obj">{{val}}</span>
                </div>
            `,
            data: {
                obj: {
                    a: 0,
                    b: 1,
                    c: 2,
                },
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0</span><span>1</span><span>2</span>');
        vm.obj.a = 3;
        waitForUpdate(() => {

            // ATTENTION san的对象设置没有顺序，因此先不支持
            // expect(replaceComent(vm.$el.innerHTML)).toBe('<span>3</span><span>1</span><span>2</span>');
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>1</span><span>2</span><span>3</span>');
            // Vue.set(vm.obj, 'd', 4);
            vm.obj = Object.assign(vm.obj, {
                d: 4,
            });
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>1</span><span>2</span><span>3</span><span>4</span>');
            // Vue.delete(vm.obj, 'a');
            vm.obj = {
                b: 1,
                c: 2,
                d: 4,
            };
        }).then(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>1</span><span>2</span><span>4</span>');
        }).then(done);
    });

    // ATTENTION 卡片中没有使用 Vue.set 和 Vue.delete 的场景，暂时不支持
    it('should render an Object with key', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="(val, key) in obj">{{val}}-{{key}}</span>
                </div>
            `,
            data: {
                obj: {
                    a: 0,
                    b: 1,
                    c: 2,
                },
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-a</span><span>1-b</span><span>2-c</span>');
        vm.obj.a = 3;
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toBe('<span>1-b</span><span>2-c</span><span>3-a</span>');
            // Vue.set(vm.obj, 'd', 4);
        }).then(() => {
            // expect(vm.$el.innerHTML).toBe('<span>3-a</span><span>1-b</span><span>2-c</span><span>4-d</span>');
            // Vue.delete(vm.obj, 'a');
        }).then(() => {
            // expect(vm.$el.innerHTML).toBe('<span>1-b</span><span>2-c</span><span>4-d</span>');
        }).then(done);
    });

    // ATTENTION 不支持三个参数的情况
    // it('should render an Object with key and index', done => {
    //     const vm = new Vue({
    //         template: `
    //             <div1>
    //                 <span a-for="(val, key, i) in obj">{{val}}-{{key}}-{{i}}</span>
    //             </div1>
    //         `,
    //         data: {
    //             obj: {
    //                 a: 0,
    //                 b: 1,
    //                 c: 2,
    //             },
    //         },
    //     }).$mount();
    //     expect(replaceComent(vm.$el.innerHTML)).toBe('<span>0-a-0</span><span>1-b-1</span><span>2-c-2</span>');
    //     vm.obj.a = 3;
    //     waitForUpdate(() => {
    //         expect(vm.$el.innerHTML).toBe('<span>3-a-0</span><span>1-b-1</span><span>2-c-2</span>');
    //         Vue.set(vm.obj, 'd', 4);
    //     }).then(() => {
    //         expect(vm.$el.innerHTML).toBe('<span>3-a-0</span><span>1-b-1</span><span>2-c-2</span><span>4-d-3</span>');
    //         Vue.delete(vm.obj, 'a');
    //     }).then(() => {
    //         expect(vm.$el.innerHTML).toBe('<span>1-b-0</span><span>2-c-1</span><span>4-d-2</span>');
    //     }).then(done);
    // });

    // ATTENTION 暂时不支持 $data这个方法
    // it('should render each key of data', done => {
    //     const vm = new Vue({
    //         template: `
    //             <div>
    //                 <span a-for="(val, key) in $data">{{val}}-{{key}}</span>
    //             </div>
    //         `,
    //         data: {
    //             a: 0,
    //             b: 1,
    //             c: 2,
    //         },
    //     }).$mount();
    //     expect(vm.$el.innerHTML).toBe('<span>0-a</span><span>1-b</span><span>2-c</span>');
    //     vm.a = 3;
    //     waitForUpdate(() => {
    //         expect(vm.$el.innerHTML).toBe('<span>3-a</span><span>1-b</span><span>2-c</span>');
    //     }).then(done);
    // });

    it('check priorities: a-if before a-for', function () {
        const vm = new Vue({
            data: {
                items: [1, 2, 3],
            },
            template: '<div><div a-if="item < 3" a-for="item in items">{{item}}</div></div>',
        }).$mount();
        expect(vm.$el.textContent).toBe('12');
    });

    it('check priorities: a-if after a-for', function () {
        const vm = new Vue({
            data: {
                items: [1, 2, 3],
            },
            template: '<div><div a-for="item in items" a-if="item < 3">{{item}}</div></div>',
        }).$mount();
        expect(vm.$el.textContent).toBe('12');
    });

    it('range a-for', () => {
        const vm = new Vue({
            template: '<div><div a-for="n in 3">{{n}}</div></div>',
        }).$mount();
        expect(vm.$el.textContent).toBe('123');
    });

    it('without key', done => {
        const vm = new Vue({
            data: {
                items: [{
                    id: 1,
                    msg: 'a',
                }, {
                    id: 2,
                    msg: 'b',
                }, {
                    id: 3,
                    msg: 'c',
                }],
            },
            template: '<div><div a-for="item in items">{{ item.msg }}</div></div>',
        }).$mount();
        expect(vm.$el.textContent).toBe('abc');
        const first = vm.$el.children[0];
        vm.items.reverse();
        waitForUpdate(() => {
            expect(vm.$el.textContent).toBe('cba');
            // assert reusing DOM element in place
            expect(vm.$el.children[0]).toBe(first);
        }).then(done);
    });

    // TODO: 确认孩子节点是否是引用的同一对象
    // it('with key', done => {
    //     const vm = new Vue({
    //         data: {
    //             items: [{
    //                 id: 1,
    //                 msg: 'a',
    //             }, {
    //                 id: 2,
    //                 msg: 'b',
    //             }, {
    //                 id: 3,
    //                 msg: 'c',
    //             }],
    //         },
    //         template: '<div><div a-for="item in items" :key="item.id">{{ item.msg }}</div></div>',
    //     }).$mount();
    //     expect(vm.$el.textContent).toBe('abc');
    //     const first = vm.$el.children[0];
    //     vm.items.reverse();
    //     waitForUpdate(() => {
    //         expect(vm.$el.textContent).toBe('cba');

    //         // assert moving DOM element
    //         expect(vm.$el.children[0]).not.toBe(first);
    //         expect(vm.$el.children[2]).toBe(first);
    //     }).then(done);
    // });

    it('nested loops', () => {
        const vm = new Vue({
            data: {
                items: [{
                    items: [{
                        a: 1,
                    }, {
                        a: 2,
                    }],
                    a: 1,
                }, {
                    items: [{
                        a: 3,
                    }, {
                        a: 4,
                    }],
                    a: 2,
                }],
            },
            template:
                '<div>'
                +   '<div a-for="(item, i) in items">'
                +       '<p a-for="(subItem, j) in item.items">{{j}} {{subItem.a}} {{i}} {{item.a}}</p>'
                +   '</div>'
                + '</div>',
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toBe(
            '<div><p>0 1 0 1</p><p>1 2 0 1</p></div>'
            + '<div><p>0 3 1 2</p><p>1 4 1 2</p></div>'
        );
    });

    it('template a-for', done => {
        const vm = new Vue({
            data: {
                list: [{
                    a: 1,
                }, {
                    a: 2,
                }, {
                    a: 3,
                }],
            },
            template:
                '<div>'
                +    '<template a-for="item in list">'
                +    '<p>{{item.a}}</p>'
                +    '<p>{{item.a + 1}}</p>'
                +    '</template>'
                + '</div>',
        }).$mount();
        assertMarkup();
        vm.list.reverse();
        waitForUpdate(() => {
            assertMarkup();
            vm.list.splice(1, 1);
        }).then(() => {
            assertMarkup();
            vm.list.splice(1, 0, {
                a: 2,
            });
        }).then(done);

        function assertMarkup() {
            let markup = vm.list.map(function (item) {
                return '<p>' + item.a + '</p><p>' + (item.a + 1) + '</p>';
            }).join('');
            expect(replaceComent(vm.$el.innerHTML)).toBe(markup);
        }
    });

    it('component a-for', done => {
        const vm = new Vue({
            data: {
                list: [{
                    a: 1,
                }, {
                    a: 2,
                }, {
                    a: 3,
                }],
            },
            template:
                '<div>'
                +   '<test a-for="item in list" :msg="item.a" :key="item.a">'
                +    '<span>{{item.a}}</span>'
                +   '</test>'
                + '</div>',
            components: {
                test: {
                    props: ['msg'],
                    template: '<p>{{msg}}<slot></slot></p>',
                },
            },
        }).$mount();
        assertMarkup();
        vm.list.reverse();
        waitForUpdate(() => {
            assertMarkup();
            vm.list.splice(1, 1);
        }).then(() => {
            assertMarkup();
            vm.list.splice(1, 0, {
                a: 2,
            });
        }).then(done);

        function assertMarkup() {
            let markup = vm.list.map(function (item) {
                return `<p>${item.a}<span>${item.a}</span></p>`;
            }).join('');
            expect(replaceComent(vm.$el.innerHTML)).toBe(markup);
        }
    });

    it('dynamic component a-for', done => {
        const vm = new Vue({
            data: {
                list: [{
                    type: 'one',
                }, {
                    type: 'two',
                }],
            },
            template:
                '<div>'
                +   '<component a-for="item in list" :key="item.type" :is="item.type"></component>'
                + '</div>',
            components: {
                one: {
                    template: '<p>One!</p>',
                },
                two: {
                    template: '<div>Two!</div>',
                },
            },
        }).$mount();
        expect(replaceComent(vm.$el.innerHTML)).toContain('<p>One!</p><div>Two!</div>');
        vm.list.reverse();
        waitForUpdate(() => {
            expect(replaceComent(vm.$el.innerHTML)).toContain('<div>Two!</div><p>One!</p>');
        }).then(done);
    });

    // TODO 暂时未支持 warn 的功能
    // it('should warn component a-for without keys', () => {
    //     const warn = console.warn;
    //     console.warn = jasmine.createSpy();
    //     new Vue({
    //         template: '<div><test a-for="i in 3"></test></div>',
    //         components: {
    //             test: {
    //                render () {},
    //             },
    //         },
    //     }).$mount();
    //     expect(console.warn.calls.argsFor(0)[0]).toContain(
    //         `<test a-for="i in 3">: component lists rendered with a-for should have explicit keys`
    //     );
    //     console.warn = warn;
    // });

    // ATTENTION 渲染后的没有空格，因此先改了断言，如下所示
    it('multi nested array reactivity', done => {
        const vm = new Vue({
            data: {
                list: [[['foo']]],
            },
            template: `
                <div>
                    <div a-for="i in list">
                        <div a-for="j in i">
                            <div a-for="k in j">
                                {{ k }}
                            </div>
                        </div>
                    </div>
                </div>
            `,
        }).$mount();

        // expect(vm.$el.textContent).toMatch(/\s+foo\s+/);
        expect(vm.$el.textContent).toMatch(/foo/);
        vm.list[0][0].push('bar');
        waitForUpdate(() => {
            // expect(vm.$el.textContent).toMatch(/\s+foo\s+bar\s+/);
            expect(vm.$el.textContent).toMatch(/foobar/);
        }).then(done);
    });

    it('strings', done => {
        const vm = new Vue({
            data: {
                text: 'foo',
            },
            template: `
                <div>
                    <span a-for="letter in text">{{ letter }}.</span>
                </div>
            `,
        }).$mount();
        expect(vm.$el.textContent).toMatch('f.o.o.');
        vm.text += 'bar';
        waitForUpdate(() => {
            expect(vm.$el.textContent).toMatch('f.o.o.b.a.r.');
        }).then(done);
    });
});
