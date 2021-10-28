/* eslint-disable quotes */
import Vue from '../../../helpers/vue';

describe('Directive a-html', () => {

    it('should render html', () => {
        const vm = new Vue({
            template: '<div a-html="a"></div>',
            data: {
                a: 'hello',
            },
        }).$mount();
        expect(vm.$el.innerHTML).toBe('hello');
    });

    it('should encode html entities', () => {
        const vm = new Vue({
            template: '<div a-html="a"></div>',
            data: {
                a: '<span>&lt;</span>',
            },
        }).$mount();
        expect(vm.$el.innerHTML).toBe('<span>&lt;</span>');
    });

    it('should work inline', () => {
        const vm = new Vue({
            template: `<div a-html="'<span>&lt;</span>'"></div>`,
        }).$mount();
        expect(vm.$el.innerHTML).toBe('<span>&lt;</span>');
    });

    // ATTENTION 跟骁哥确认这种场景不需要支持，因此先注释掉了这个case
    // it('should work inline in DOM', () => {
    //     const el = document.createElement('div');
    //     el.innerHTML = `<div a-html="'<span>&lt;</span>'"></div>`;
    //     const vm = new Vue({
    //         el
    //     });
    //     expect(vm.$el.children[0].innerHTML).toBe('<span>&lt;</span>');
    // });

    it('should support all value types', done => {
        const vm = new Vue({
            template: '<div a-html="a"></div>',
            data: {
                a: false,
            },
        }).$mount();

        // eslint-disable-next-line
        waitForUpdate(() => {
            expect(vm.$el.innerHTML).toBe('false');
            vm.a = [];
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('[]');
            vm.a = {};
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('{}');
            vm.a = 123;
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('123');
            vm.a = 0;
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('0');
            vm.a = ' ';
        }).then(() => {
            expect(vm.$el.innerHTML).toBe(' ');
            vm.a = '    ';
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('    ');
            vm.a = null;
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('');
            vm.a = undefined;
        }).then(() => {
            expect(vm.$el.innerHTML).toBe('');
        }).then(done);
    });
});
