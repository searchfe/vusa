import {defineComponent} from '../../src/runtime/index';
import {compile} from '../../src/compiler';
import {omit} from 'lodash';

module.exports = class Vue {
    constructor(options) {
        const tpl = compile(options.template, {
            strip: options.strip == null ? true : options.strip,
        });
        const Component = defineComponent({
            ...omit(options, ['template']),
            __santemplate: tpl.template,
            __sanRefs: tpl.refs,
        });
        this.component = new Component();
        // console.log(tpl.template);
    }

    $mount() {
        const dom = document.createElement('div');
        this.component.attach(dom);
        return this.component;
    }
};
