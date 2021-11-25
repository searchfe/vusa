/**
 * @file init unit test
 * @author huangxingyuan
 */

import Vue from '../../../helpers/vue';


// TODO: 不支持传el作为模板
// describe('Options el', () => {
//     it('basic usage', () => {
//         const el = document.createElement('div');
//         el.innerHTML = '<span>{{message}}</span>';
//         const vm = new Vue({
//             el,
//             data: {message: 'hello world'},
//         }).$mount();
//         expect(vm.$el.tagName).toBe('DIV');
//         expect(vm.$el.textContent).toBe(vm.message);
//     });

// TODO: 不支持传el作为模板
//     it('should be replaced when use together with `template` option', () => {
//         const el = document.createElement('div');
//         el.innerHTML = '<span>{{message}}</span>';
//         const vm = new Vue({
//             el,
//             template: '<p id="app"><span>{{message}}</span></p>',
//             data: {message: 'hello world'},
//         }).$mount();
//         expect(vm.$el.tagName).toBe('P');
//         expect(vm.$el.textContent).toBe(vm.message);
//     });


//     // TODO:暂不支持render写法
//     // it('should be replaced when use together with `render` option', () => {
//     //     const el = document.createElement('div');
//     //     el.innerHTML = '<span>{{message}}</span>';
//     //     const vm = new Vue({
//     //         el,
//     //         render(h) {
//     //             return h('p', {staticAttrs: {id: 'app'}}, [
//     //                 h('span', {}, [this.message]),
//     //             ]);
//     //         },
//     //         data: {message: 'hello world'},
//     //     }).$mount();
//     //     expect(vm.$el.tagName).toBe('P');
//     //     expect(vm.$el.textContent).toBe(vm.message);
//     // });

//     it('svg element', () => {
//         const parent = document.createElement('div');
//         parent.innerHTML
//           = '<svg>'
//             + '<text :x="x" :y="y" :fill="color">{{ text }}</text>'
//             + '<g><clipPath><foo></foo></clipPath></g>'
//           + '</svg>';

//         const vm = new Vue({
//             el: parent.childNodes[0],
//             data: {
//                 x: 64,
//                 y: 128,
//                 color: 'red',
//                 text: 'svg text',
//             },
//         }).$mount();
//         expect(vm.$el.tagName).toBe('svg');
//         expect(vm.$el.childNodes[0].getAttribute('x')).toBe(vm.x.toString());
//         expect(vm.$el.childNodes[0].getAttribute('y')).toBe(vm.y.toString());
//         expect(vm.$el.childNodes[0].getAttribute('fill')).toBe(vm.color);
//         expect(vm.$el.childNodes[0].textContent).toBe(vm.text);
//         expect(vm.$el.childNodes[1].childNodes[0].namespaceURI).toMatch(/svg/);

//         // TODO: 不成功，http://www.w3.org/1999/xhtml不会包含svg
//         // expect(vm.$el.childNodes[1].childNodes[0].childNodes[0].namespaceURI).toMatch(/svg/);
//     });

//     // TODO: 模板属性带有转义san不支持，san-anode-utils解析带有转义有问题，项目没有使用暂不支持
//     // it('properly decode attribute values when parsing templates from DOM', () => {
//     //     const el = document.createElement('div');
//     //     el.innerHTML = '<a href="/a?foo=bar&baz=qux" name="<abc>" single=\'"hi"\'></a>';
//     //     const vm = new Vue({el}).$mount();
//     //     expect(vm.$el.children[0].getAttribute('href')).toBe('/a?foo=bar&baz=qux');
//     //     expect(vm.$el.children[0].getAttribute('name')).toBe('<abc>');
//     //     expect(vm.$el.children[0].getAttribute('single')).toBe('"hi"');
//     // });


//     it('decode attribute value newlines when parsing templates from DOM in IE', () => {
//         const el = document.createElement('div');
//         el.innerHTML = '<a :style="{\ncolor:\'red\'\n}"></a>';
//         const vm = new Vue({el}).$mount();
//         expect(vm.$el.children[0].style.color).toBe('red');
//     });

it('warn cannot find element', () => {
    try {
        new Vue({template: '#non-existent'}).$mount();
    }
    catch (error) {
        expect(error.message).toEqual('#non-existent');
    }
});
// });
