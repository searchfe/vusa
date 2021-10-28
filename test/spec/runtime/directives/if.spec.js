/* eslint-disable no-undef */
import Vue from '../../../helpers/vue';

describe('Directive a-if', () => {

    // ATTENTION san渲染后会有很多注释，先把注释去掉，如果能匹配和vue的渲染结果就ok
    it('should check if value is truthy', () => {
        const vm = new Vue({
            template: '<div><span a-if="foo">hello</span></div>',
            data: {
                foo: true,
            },
        }).$mount();
        expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
    });

    // ATTENTION san渲染后是<!--数字-->，但是vue渲染完是 <!---->，修改了断言
    it('should check if value is falsy', () => {
        const vm = new Vue({
            template: '<div><span a-if="foo">hello</span></div>',
            data: {
                foo: false,
            },
        }).$mount();
        // expect(vm.$el.innerHTML).toBe('<!---->');
        expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
        expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
    });

    it('should update if value changed', done => {
        const vm = new Vue({
            template: '<div><span a-if="foo">hello</span></div>',
            data: {
                foo: true,
            },
        }).$mount();

        // expect(vm.$el.innerHTML).toBe('<span>hello</span>');
        expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
        vm.foo = false;

        // eslint-disable-next-line
        waitForUpdate(() => {
            // expect(vm.$el.innerHTML).toBe('<!---->');

            expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
            expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
            vm.foo = {};
        }).then(() => {

            // expect(vm.$el.innerHTML).toBe('<span>hello</span>');
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = 0;
        }).then(() => {

            // expect(vm.$el.innerHTML).toBe('<!---->');
            expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
            expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
            vm.foo = [];
        }).then(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = null;
        }).then(() => {

            // expect(vm.$el.innerHTML).toBe('<!---->');
            expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
            expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
            vm.foo = '0';
        }).then(() => {

            // expect(vm.$el.innerHTML).toBe('<span>hello</span>');
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = undefined;
        }).then(() => {

            // expect(vm.$el.innerHTML).toBe('<!---->');
            expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
            expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
            vm.foo = 1;
        }).then(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
        }).then(done);
    });

    it('should work well with a-else', done => {
        const vm = new Vue({
            template: `
                <div>
                <span a-if="foo">hello</span>
                <span a-else>bye</span>
                </div>
            `,
            data: {
                foo: true,
            },
        }).$mount();
        expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
        vm.foo = false;

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.foo = {};
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = 0;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.foo = [];
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = null;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.foo = '0';
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = undefined;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.foo = 1;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
        }).then(done);
    });

    it('should work well with a-else-if', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-if="foo">hello</span>
                    <span a-else-if="bar">elseif</span>
                    <span a-else>bye</span>
                </div>
            `,
            data: {
                foo: true,
                bar: false,
            },
        }).$mount();

        expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
        vm.foo = false;

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.bar = true;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>elseif</span>');
            vm.bar = false;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.foo = true;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>hello</span>');
            vm.foo = false;
            vm.bar = {};
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>elseif</span>');
            vm.bar = 0;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.bar = [];
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>elseif</span>');
            vm.bar = null;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.bar = '0';
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>elseif</span>');
            vm.bar = undefined;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>bye</span>');
            vm.bar = 1;
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '')).toBe('<span>elseif</span>');
        }).then(done);
    });

    it('should work well with a-for', done => {

        const vm = new Vue({
            template: `
                <div2>
                    <fragment a-for="(item, i) in list">
                        <span a-if="item.value">{{i}}</span>
                    </fragment>
                </div2>
            `,
            data: {
                list: [
                    {
                        value: true,
                    },
                    {
                        value: false,
                    },
                    {
                        value: true,
                    },
                ],
            },
        }).$mount();

        expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
            .toBe('<span>0</span><span>2</span>');
        vm.list[0].value = false;
        waitForUpdate(() => {
            // expect(vm.$el.innerHTML).toBe('<!----><!----><span>2</span>');
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>2</span>');
            vm.list.push({
                value: true,
            });
        }).then(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>2</span><span>3</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            // expect(vm.$el.innerHTML).toBe('<!----><span>1</span>');
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>1</span>');
        }).then(done);
    });

    it('should work well with a-for', done => {

        const vm = new Vue({
            template: `
                <div1>
                    <span a-for="(item, i) in list" a-if="item.value">{{i}}</span>
                </div1>
            `,
            data: {
                list: [
                    {
                        value: true,
                    },
                    {
                        value: false,
                    },
                    {
                        value: true,
                    },
                ],
            },
        }).$mount();

        expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
            .toBe('<span>0</span><span>2</span>');
        vm.list[0].value = false;
        waitForUpdate(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>2</span>');
            vm.list.push({
                value: true,
            });
        }).then(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>2</span><span>3</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(vm.$el.innerHTML.replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>1</span>');
        }).then(done);
    });

    it('should work well with a-for and a-else', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="(item, i) in list" a-if="item.value">hello</span>
                    <span a-else>bye</span>
                </div>
            `,
            data: {
                list: [
                    {
                        value: true,
                    },
                    {
                        value: false,
                    },
                    {
                        value: true,
                    },
                ],
            },
        }).$mount();

        expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
            .toBe('<span>hello</span><span>bye</span><span>hello</span>');
        vm.list[0].value = false;

        waitForUpdate(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>bye</span><span>bye</span><span>hello</span>');
            vm.list.push({
                value: true,
            });
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>bye</span><span>bye</span><span>hello</span><span>hello</span>');
            vm.list.splice(1, 2);
        }).then(() => {
            expect(vm.$el.innerHTML.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('<span>bye</span><span>hello</span>');
        }).then(done);
    });

    it('should work with a-for on a-else branch', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-if="false">hello</span>
                    <span a-else a-for="item in list">{{ item }}</span>
                </div>
            `,
            data: {
                list: [1, 2, 3],
            },
        }).$mount();
        expect(vm.$el.textContent.trim()).toBe('123');
        vm.list.reverse();
        waitForUpdate(() => {
            expect(vm.$el.textContent.trim()).toBe('321');
        }).then(done);
    });

    // ATTENTION 这个是额外增加的 case，为了增加 elseif
    it('should work with a-for on a-else-if and a-else branch', done => {
        const vm = new Vue({
            template: `
                <div>
                    <span a-for="item in list" a-if="item === 2">is2</span>
                    <span a-else-if="item === 1">is1</span>
                    <span a-else>isother</span>
                </div>
            `,
            data: {
                list: [1, 2, 3],
            },
        }).$mount();
        expect(vm.$el.textContent.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
            .toBe('is1is2isother');
        vm.list.reverse();
        waitForUpdate(() => {
            expect(vm.$el.textContent.trim().replace(/<!--[0-9]{1,}-->/g, '').replace(/<!---->/g, ''))
                .toBe('isotheris2is1');
        }).then(done);
    });

    it('should work properly on component root', done => {
        const vm = new Vue({
            template: `
                <div>
                    <test class="test"></test>
                </div>
            `,
            components: {
                test: {
                    data() {
                        return {
                            ok: true,
                        };
                    },
                    template: '<div a-if="ok" id="ok" class="inner">test</div>',
                },
            },
        }).$mount();
        expect(vm.$el.children[0].id).toBe('ok');
        expect(vm.$el.children[0].className).toBe('inner test');
        vm.$children[0].ok = false;
        waitForUpdate(() => {

            // attrs / class modules should not attempt to patch the comment node
            expect(vm.$el.innerHTML.startsWith('<!--')).toBe(true);
            expect(vm.$el.innerHTML.endsWith('-->')).toBe(true);
            vm.$children[0].ok = true;
        }).then(() => {
            expect(vm.$el.children[0].id).toBe('ok');
            expect(vm.$el.children[0].className).toBe('inner test');
        }).then(done);
    });

    it('should maintain stable list to avoid unnecessary patches', done => {
        const created = jasmine.createSpy();
        const destroyed = jasmine.createSpy();
        const vm = new Vue({
            data: {
                ok: true,
            },
            // when the first div is toggled, the second div should be reused
            // instead of re-created/destroyed
            template: `
                <div>
                    <div a-if="ok"></div>
                    <div><test></test></div>
                </div>
            `,
            components: {
                test: {
                    template: '<div></div>',
                    created,
                    destroyed,
                },
            },
        }).$mount();

        expect(created.calls.count()).toBe(1);
        vm.ok = false;
        waitForUpdate(() => {
            expect(created.calls.count()).toBe(1);
            expect(destroyed).not.toHaveBeenCalled();
        }).then(done);
    });
});
