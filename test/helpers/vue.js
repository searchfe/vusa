import {defineComponent} from '../../src/runtime/index';
import {compile} from '../../src/compiler';
import {omit} from 'lodash';

function getTpl(options) {
    return compile(options.template, {
        strip: options.strip == null ? true : options.strip,
        atom: true
    });
}

function getComponentOptions(options) {
    const tpl = getTpl(options);

    let components = options.components ? options.components : {};
    let dealComponents = null;

    if (components && Object.keys(components).length) {
        dealComponents = {};
    }

    for (let key in components) {
        const tempComponent = getComponentOptions(components[key]);
        dealComponents[key] = tempComponent;
    }

    return {
        ...omit(options, ['template']),
        __santemplate: tpl.template,
        __sanRefs: tpl.refs,
        components: dealComponents,
        _cmptReady: 1
    };
}

module.exports = class Vue {
    constructor(options) {
        const componentOptions = getComponentOptions(options);
        const Component = defineComponent(componentOptions);
        this.component = new Component();
    }

    $mount() {
        const dom = document.createElement('div');
        this.component.attach(dom);
        return this.component;
    }
};
