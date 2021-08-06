/**
 * @file example
 * @author cxtom(cxtom2008@gmail.com)
 */

import Vue from 'vue';
import * as Vusa from '../src/runtime/index';
import Simple from './component/simple/index';
import Wrapper from './component/simple/wrapper';

console.log(Simple, Wrapper);

console.log('%c start to mount vusa...', 'color:#ff0000;');

Vusa.component('wrapper', Wrapper);
const SanComponent = Vusa.defineComponent(Simple);

const comp = new SanComponent({
    el: document.getElementById('main'),
});

comp.attach(document.querySelector('.vusa'));

console.log('%c start to mount vue...', 'color:#8b008b;');

Vue.component('wrapper', Wrapper);
const vm = new Vue(Simple);
vm.$mount();

document.querySelector('.vue').appendChild(vm.$el);
