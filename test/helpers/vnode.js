import Vue from './vue';

const XLINKNS = 'http://www.w3.org/1999/xlink';

const SINGLE_CLOSED_TAG = [
    'br',
    'hr',
    'area',
    'base',
    'img',
    'input',
    'link',
    'meta',
    'basefont',
    'param',
    'col',
    'frame',
    'embed',
];

const INNER_TAG = [
    'vm',
    'tagName',
    'options',
    'className',
    'classList',
];

const STATIC_PROPS_MAP = {
    class: 'class',
    staticClass: 'class',
};

const NEED_MERGE_MAP = [
    'class',
    'style',
];

const checkType = (target, type) => {
    const typeStr = Object.prototype.toString.call(target);

    if (typeof type === 'string') {
        return typeStr === `[object ${type}]`;
    }

    else if (type && type.length) {
        return type.some(item => typeStr === `[object ${item}]`);
    }

    return false;
};

const getClass = classList => {
    const list = [];

    if (checkType(classList, 'String')) {
        list.push(classList);
    }

    if (checkType(classList, 'Object')) {
        for (let key in classList) {
            if (checkType(key, 'String') && classList[key]) {
                list.push(key);
            }
        }
    }

    if (checkType(classList, 'Array')) {
        for (let item of classList) {
            if (checkType(item, 'String')) {
                list.push(item);
            }
            else if (checkType(item, ['Array', 'Object'])) {
                list.push(...getClass(item));
            }
        }
    }

    return list;
};

const getStyle = styleList => {
    if (checkType(styleList, ['Array', 'Object'])) {
        return `:style="${JSON.stringify(styleList).replace(/\"/g, '\'')}"`;
    }

    return '';
};

export default class {
    constructor(tagName, options = {}) {
        const {attrs = {}, domProps = {}} = options;

        Object.keys(options).forEach(key => {
            if (key in STATIC_PROPS_MAP) {
                if (!attrs[STATIC_PROPS_MAP[key]]) {
                    attrs[STATIC_PROPS_MAP[key]] = options[key];
                }
                else if (NEED_MERGE_MAP.includes(STATIC_PROPS_MAP[key])) {
                    attrs[STATIC_PROPS_MAP[key]] = [
                        attrs[STATIC_PROPS_MAP[key]],
                        options[key],
                    ];
                }
            }
        });

        attrs.class = getClass(attrs.class).join(' ');

        const domPropsKeys = Object.keys(domProps);
        const keys = Object.keys(attrs);
        const isSingleClosedTag = SINGLE_CLOSED_TAG.includes(tagName);
        const attrString = keys.map(key => `${key}="${attrs[key]}"`).join(' ');
        const domPropsString = domPropsKeys.map(key => `${key}="${domProps[key]}"`).join(' ');

        const template = '<' + tagName
            + (attrString ? ' ' + attrString : '')
            + (domPropsString || '')
            + getStyle(options.style)
            + (isSingleClosedTag ? '/>' : '></' + tagName + '>');

        const vm = new Vue({template}).$mount();
        const relOption = {};

        keys.forEach(key => {
            if (vm.$el.getAttribute(key) === String(attrs[key])) {

                if (!relOption.attrs) {
                    relOption.attrs = {};
                }

                relOption.attrs[key] = vm.$el.getAttribute(key);
            }
        });

        if (getStyle(options.style)) {
            relOption.style = JSON.parse(JSON.stringify(options.style));
        }

        if (options.domProps) {
            relOption.domProps = options.domProps;
        }

        const result = {
            vm,
            tagName: vm.tagName,
            options: relOption,
            ...relOption.attrs,
            className: relOption.attrs && relOption.attrs.class ? relOption.attrs.class : '',
            classList: vm.$el.classList,
        };

        return new Proxy(result, {
            get(target, key) {
                if (INNER_TAG.includes(key)) {
                    return Reflect.get(target, key);
                }

                if (key === 'href') {
                    return vm.$el.getAttributeNS(XLINKNS, key);
                }

                return vm.$el.getAttribute(key);
            },
            set(target, key, value) {
                Reflect.set(vm, key, value);
            },
        });
    }
}
