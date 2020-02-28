/**
 * @file example
 * @author cxtom(cxtom2008@gmail.com)
 */

import defineComponent from '../src/runtime/define-component';
import Simple from './component/simple/index';

console.log(Simple);

const Component = defineComponent(Simple);

const comp = new Component({
    el: document.getElementById('main')
});

comp.attach(document.body);
