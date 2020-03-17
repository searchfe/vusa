/**
 * @file example
 * @author cxtom(cxtom2008@gmail.com)
 */

import Vue from 'vue';
import defineComponent from '../src/runtime/define-component';
import Simple from './component/simple/index';

console.log(Simple);

console.log('%c start to mount vusa...', 'color:#ff0000;');

const SanComponent = defineComponent(Simple);

const comp = new SanComponent({
    el: document.getElementById('main')
});

comp.attach(document.querySelector('.vusa'));

console.log('%c start to mount vue...', 'color:#8b008b;');

const vm = new Vue(Simple);
vm.$mount();
document.querySelector('.vue').appendChild(vm.$el);
