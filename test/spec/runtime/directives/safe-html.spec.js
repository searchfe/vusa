/* eslint-disable quotes */
import Vue from '../../../helpers/vue';

describe('Directive a-html', () => {

    it('should render safe html', () => {
        const vm = new Vue({
            template: '<div a-safe-html="a"></div>',
            data: {
                a: '<script>console.log(111);</script>',
            },
        }).$mount();

        expect(vm.$el.innerHTML).toBe('&lt;script&gt;console.log(111);&lt;/script&gt;');
    });


    it('should render safe html with on', () => {
        const vm = new Vue({
            template: '<div a-safe-html="a"></div>',
            data: {
                a: '<div on^="haha">console.log(111);</script>',
            },
        }).$mount();

        expect(vm.$el.innerHTML).toBe('<div on^-safe=\"haha\">console.log(111);</div>');
    });

    it('should render safe html with no', () => {
        const vm = new Vue({
            template: '<div a-safe-html="a"></div>',
            data: {
                a: 'hello world',
            },
        }).$mount();

        expect(vm.$el.innerHTML).toBe('hello world');
    });
});
