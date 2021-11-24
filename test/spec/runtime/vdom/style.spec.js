/* eslint-disable */
import VNode from '../../../helpers/vnode';
import {patch} from '../../../helpers/patch';

describe('vdom style module', () => {
    it('should create an element with style', () => {
        const vnode = new VNode('p', {style: {fontSize: '12px'}});
        const elm = patch(null, vnode);
        expect(elm.vm.$el.style.fontSize).toBe('12px');
    });

    it('should create an element with array style', () => {
        const vnode = new VNode('p', {style: [{fontSize: '12px'}, {color: 'red'}]});
        const elm = patch(null, vnode);
        expect(elm.vm.$el.style.fontSize).toBe('12px');
        expect(elm.vm.$el.style.color).toBe('red');
    });

    it('should change elements style', () => {
        const vnode1 = new VNode('p', {style: {fontSize: '12px'}});
        const vnode2 = new VNode('p', {style: {fontSize: '10px', display: 'block'}});
        patch(null, vnode1);
        const elm = patch(vnode1, vnode2);
        expect(elm.vm.$el.style.fontSize).toBe('10px');
        expect(elm.vm.$el.style.display).toBe('block');
    });

    it('should remove elements attrs', () => {
        const vnode1 = new VNode('p', {style: {fontSize: '12px'}});
        const vnode2 = new VNode('p', {style: {display: 'block'}});
        patch(null, vnode1);
        const elm = patch(vnode1, vnode2);
        expect(elm.vm.$el.style.fontSize).toBe('');
        expect(elm.vm.$el.style.display).toBe('block');
    });
});
