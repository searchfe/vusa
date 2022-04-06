function render (data, info) {
    let exports = {}, module = { exports };
    const sanSSRHelpers = (function (exports) {
        "use strict";
        /**
         * 该文件可能会以字符串形式直接输出到产物中
         * 因此不能引用外部模块，会因找不到外部模块报错
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        exports._ = void 0;
        const BASE_PROPS = {
            class: 1,
            style: 1,
            id: 1
        };
        const HTML_ENTITY = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '\u00a0': '&nbsp;',
            '\u2003': '&emsp;',
            '\u2002': '&ensp;',
            '\u2009': '&thinsp;',
            '\xa9': '&copy;',
            '\xae': '&reg;',
            '\u200c': '&zwnj;',
            '\u200d': '&zwj;',
            '&': '&amp;'
        };
        const rENTITY = new RegExp(`[${Object.keys(HTML_ENTITY).join('')}]`, 'g');
        function escapeHTML(source) {
            if (typeof source === 'string') {
                return source.replace(rENTITY, (c) => HTML_ENTITY[c]);
            }
            return source;
        }
        function isObject(source) {
            return typeof source === 'object' && source !== null;
        }
        function isArray(source) {
            return source && source instanceof Array;
        }
        function output(value, needEscape) {
            if (value == null || value === '')
                return '';
            value = String(value);
            return needEscape ? escapeHTML(value) : value;
        }
        function classFilter(source) {
            if (!isArray(source))
                source = [source];
            return source.filter(x => x != null).join(' ');
        }
        function styleFilter(source) {
            if (isObject(source)) {
                return Object.keys(source)
                    .map(key => key + ':' + source[key] + ';')
                    .join('');
            }
            return source;
        }
        function xclassFilter(inherits, own) {
            if (!isArray(inherits))
                inherits = [inherits];
            const inheritStr = inherits = inherits.filter(x => x != null).join(' ');
            if (inheritStr) {
                if (own)
                    return own + ' ' + inheritStr;
                return inheritStr;
            }
            return own;
        }
        function xstyleFilter(inherits, own) {
            inherits = inherits && styleFilter(inherits);
            if (inherits) {
                if (own)
                    return own + ';' + inherits;
                return inherits;
            }
            return own;
        }
        function attrFilter(name, value, needEscape) {
            // style/class/id 值为 falsy 时不输出属性
            if (value == null || (!value && BASE_PROPS[name])) {
                return '';
            }
            value = String(value);
            return ` ${name}="${needEscape ? escapeHTML(value) : value}"`;
        }
        function boolAttrFilter(name, value) {
            return value ? ' ' + name : '';
        }
        function callFilter(ctx, name, ...args) {
            let value;
            try {
                value = ctx.instance.filters[name].call(ctx.instance, ...args);
            }
            catch (e) {
                /* istanbul ignore next */
                handleError(e, ctx.instance, 'filter:' + name);
            }
            return value;
        }
        function callComputed(ctx, name) {
            let value;
            try {
                value = ctx.instance.computed[name].apply(ctx.instance);
            }
            catch (e) {
                /* istanbul ignore next */
                handleError(e, ctx.instance, 'computed:' + name);
            }
            return value;
        }
        function iterate(val) {
            return isArray(val) ? val.entries() : Object.entries(val);
        }
        function createFromPrototype(proto) {
            function Creator() { }
            Creator.prototype = proto;
            return new Creator();
        }
        function createInstanceFromClass(Clazz) {
            // method
            // compiled inited initData
            const inited = Clazz.prototype.inited;
            delete Clazz.prototype.inited;
            const initData = Clazz.prototype.initData;
            delete Clazz.prototype.initData;
            // property
            // template filters components computed trimWhitespace delimiters
            const template = Clazz.template || Clazz.prototype.template;
            const components = Clazz.components || Clazz.prototype.components;
            delete Clazz.components;
            delete Clazz.prototype.components;
            const computed = Clazz.computed || Clazz.prototype.computed;
            delete Clazz.computed;
            delete Clazz.prototype.computed;
            Clazz.prototype.template = '<div></div>';
            const instance = new Clazz();
            if (inited)
                Clazz.prototype.inited = inited;
            if (initData)
                Clazz.prototype.initData = initData;
            if (components)
                Clazz.prototype.components = components;
            Clazz.prototype.template = template;
            if (computed)
                instance['computed'] = Clazz.prototype.computed = Clazz.computed = computed;
            return instance;
        }
        function getRootCtx(ctx) {
            let last = ctx;
            while (ctx.parentCtx) {
                last = ctx;
                ctx = ctx.parentCtx;
            }
            // 如果跟组件 render 调用的时候传递了 parentCtx，会找到这个对象
            // 通过 ctx 是否有 data 来判断是不是真正的 rootCtx
            // @ts-ignore
            return ctx.data ? ctx : last;
        }
        function handleError(e, instance, info) {
            let current = instance;
            while (current) {
                if (typeof current.error === 'function') {
                    current.error(e, instance, info);
                    return;
                }
                current = current.parentComponent;
            }
            throw e;
        }
        function mergeChildSlots(childSlots) {
            const sourceSlots = {
                named: {},
                noname: false
            };
            Object.keys(childSlots).forEach(key => {
                if (key === '') {
                    sourceSlots.noname = true;
                    return;
                }
                sourceSlots.named[key] = true;
            });
            return sourceSlots;
        }
        exports._ = {
            output,
            createInstanceFromClass,
            escapeHTML,
            boolAttrFilter,
            attrFilter,
            classFilter,
            styleFilter,
            xstyleFilter,
            xclassFilter,
            createFromPrototype,
            getRootCtx,
            iterate,
            callFilter,
            callComputed,
            handleError,
            mergeChildSlots
        };
        //# sourceMappingURL=underscore.js.map
        
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.SanSSRData = void 0;
        /**
         * SSR 期间的 Data 实现，替代 import('san').SanSSRData
         *
         * * 不涉及视图更新
         * * 便于编译期优化
         */
        class SanSSRData {
            constructor(data, instance) {
                this.data = data;
                this.computed = instance.computed || {};
            }
            get(path) {
                if (arguments.length === 0)
                    return this.data;
                if (this.computed[path])
                    return this.computed[path].call({ data: this });
                return this.parseExpr(path).reduce((val, name) => val == null ? val : val[name], this.data);
            }
            set(path, value) {
                const seq = this.parseExpr(path);
                let parent = this.data;
                for (let i = 0; i < seq.length - 1; i++) {
                    const name = seq[i];
                    if (parent[name]) {
                        parent = parent[name];
                    }
                    else {
                        return null;
                    }
                }
                parent[seq.pop()] = value;
                return value;
            }
            removeAt(path, index) {
                const value = this.get(path);
                if (value && value.splice)
                    value.splice(index, 1);
            }
            parseExpr(expr) {
                return expr.split('.');
            }
        }
        exports.SanSSRData = SanSSRData;
        //# sourceMappingURL=san-ssr-data.js.map
        
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.createResolver = void 0;
        function createResolver(exports, require) {
            return {
                getRenderer: function ({ id, specifier = '.' }, tagName, context) {
                    const customSSRFilePath = context && context.customSSRFilePath;
                    let mod;
                    if (specifier === '.') {
                        mod = exports;
                    }
                    else {
                        let path;
                        if (customSSRFilePath) {
                            path = customSSRFilePath({ id, specifier, tagName });
                        }
                        mod = require(path || specifier);
                    }
                    return mod.sanSSRRenders[id];
                },
                getChildComponentClass: function ({ id, specifier = '.' }, instance, tagName, context) {
                    var _a, _b;
                    const customComponentFilePath = context && context.customComponentFilePath;
                    if (customComponentFilePath && specifier !== '.') {
                        const path = customComponentFilePath({ id, specifier, tagName });
                        if (typeof path === 'string')
                            return id === 'default' ? require(path) : require(path)[id];
                        // 可以直接返回一个组件类
                        else if (typeof path === 'function')
                            return path;
                    }
                    const components = instance.components || (instance.prototype && instance.prototype.components);
                    const ChildComponentClassOrInstance = components && components[tagName];
                    if (!ChildComponentClassOrInstance) {
                        throw Error(`child component is not fount: ${tagName}${((_a = instance.prototype) === null || _a === void 0 ? void 0 : _a.id) || ''}`);
                    }
                    if (typeof ChildComponentClassOrInstance === 'string' && ChildComponentClassOrInstance === 'self') {
                        return instance;
                    }
                    // component loader
                    if (Object.prototype.hasOwnProperty.call(ChildComponentClassOrInstance, 'load') &&
                        Object.prototype.hasOwnProperty.call(ChildComponentClassOrInstance, 'placeholder')) {
                        return ChildComponentClassOrInstance.placeholder;
                    }
                    if (typeof ChildComponentClassOrInstance !== 'function' &&
                        typeof ChildComponentClassOrInstance !== 'object') {
                        throw Error(`external component is not provided: ${tagName}${((_b = instance.prototype) === null || _b === void 0 ? void 0 : _b.id) || ''}`);
                    }
                    return ChildComponentClassOrInstance;
                },
                setRenderer: function (id, fn) {
                    exports.sanSSRRenders = exports.sanSSRRenders || {};
                    exports.sanSSRRenders[id] = fn;
                },
                getPrototype: function (id) {
                    return this['prototypes'][id];
                },
                setPrototype: function (id, proto) {
                    this['prototypes'][id] = proto;
                },
                prototypes: {}
            };
        }
        exports.createResolver = createResolver;
        //# sourceMappingURL=resolver.js.map
        
        return exports;
    })({});
    const sanSSRResolver = sanSSRHelpers.createResolver(exports, require);
    sanSSRResolver.setRenderer("0", function  (data, ...info) {
        if (info.length === 1) {
            info = info[0] || {};
        }
        else {
            info = {noDataOutput: info[1], parentCtx: info[2], tagName: info[3], slots: info[4]};
        }
        let noDataOutput = info.noDataOutput == null ? false : info.noDataOutput
        let parentCtx = info.parentCtx == null ? null : info.parentCtx
        let tagName = info.tagName == null ? "div" : info.tagName
        let slots = info.slots == null ? {} : info.slots
        const _ = sanSSRHelpers._;
        const SanSSRData = sanSSRHelpers.SanSSRData;
        if (!sanSSRResolver.getPrototype("0")) {
            let ComponentClass = info.ComponentClass
            if (typeof ComponentClass === 'function') {
                sanSSRResolver.setPrototype("0", _.createInstanceFromClass(ComponentClass));
            }
            else {
                sanSSRResolver.setPrototype("0", ComponentClass);
            }
        };
        let instance = _.createFromPrototype(sanSSRResolver.getPrototype("0"));
        instance.data = new SanSSRData(data, instance);
        instance.sourceSlots = _.mergeChildSlots(slots);
        instance.lifeCycle = {compiled: true, inited: false};
        if (parentCtx) {
            instance.parentComponent = parentCtx.instance;
        }
        let refs = {}
        let ctx = {instance, slots, data, parentCtx, refs, context: parentCtx && parentCtx.context}
        let initData
        try {
            initData = instance.initData();
        }
        catch (e) {
            _.handleError(e, instance, "initData");
        }
        if (null == initData) {
            initData = {};
        }
        for (let [key, value] of _.iterate(initData)) {
            ctx.data[key] = ctx.data[key] !== undefined ? ctx.data[key] : value;
        }
        try {
            instance.inited();
        }
        catch (e) {
            _.handleError(e, instance, "hook:inited");
        }
        instance.lifeCycle.inited = true;
        let html = ""
        parentCtx = ctx;
        html += "<div id=\"app\"";
        html += _.attrFilter("class", _.escapeHTML(_.classFilter(_.xclassFilter(ctx.data.class))), false);
        html += _.attrFilter("style", _.escapeHTML(_.styleFilter(_.xstyleFilter(ctx.data.style))), false);
        html += ">";
        if (!noDataOutput) {
            html += "<!--s-data:";
            html += JSON.stringify(_.getRootCtx(ctx).data).replace(/(?<=-)-/g, "\\-");
            html += "-->";
        }
        html += "<ul>";
        let list = ctx.instance._l(ctx.data.items)
        for (let [key, val] of _.iterate(list)) {
            ctx.data.item = val;
            let childSlots = {}
            let ChildComponentClass = sanSSRResolver.getChildComponentClass({specifier: ".", id: "1"}, instance, "x-item", ctx.context)
            html += sanSSRResolver.getRenderer({specifier: ".", id: "1"}, "x-item", ctx.context)({"item": ctx.data.item}, {noDataOutput: true, parentCtx, tagName: "x-item", slots: childSlots, ComponentClass: ChildComponentClass});
        }
        html += "</ul></div>";
        return html;
});
    sanSSRResolver.setRenderer("1", function  (data, ...info) {
        if (info.length === 1) {
            info = info[0] || {};
        }
        else {
            info = {noDataOutput: info[1], parentCtx: info[2], tagName: info[3], slots: info[4]};
        }
        let noDataOutput = info.noDataOutput == null ? false : info.noDataOutput
        let parentCtx = info.parentCtx == null ? null : info.parentCtx
        let tagName = info.tagName == null ? "div" : info.tagName
        let slots = info.slots == null ? {} : info.slots
        const _ = sanSSRHelpers._;
        const SanSSRData = sanSSRHelpers.SanSSRData;
        if (!sanSSRResolver.getPrototype("1")) {
            let ComponentClass = info.ComponentClass
            if (typeof ComponentClass === 'function') {
                sanSSRResolver.setPrototype("1", _.createInstanceFromClass(ComponentClass));
            }
            else {
                sanSSRResolver.setPrototype("1", ComponentClass);
            }
        };
        let instance = _.createFromPrototype(sanSSRResolver.getPrototype("1"));
        instance.data = new SanSSRData(data, instance);
        instance.sourceSlots = _.mergeChildSlots(slots);
        instance.lifeCycle = {compiled: true, inited: false};
        if (parentCtx) {
            instance.parentComponent = parentCtx.instance;
        }
        let refs = {}
        let ctx = {instance, slots, data, parentCtx, refs, context: parentCtx && parentCtx.context}
        let initData
        try {
            initData = instance.initData();
        }
        catch (e) {
            _.handleError(e, instance, "initData");
        }
        if (null == initData) {
            initData = {};
        }
        for (let [key, value] of _.iterate(initData)) {
            ctx.data[key] = ctx.data[key] !== undefined ? ctx.data[key] : value;
        }
        try {
            instance.inited();
        }
        catch (e) {
            _.handleError(e, instance, "hook:inited");
        }
        instance.lifeCycle.inited = true;
        let html = ""
        parentCtx = ctx;
        html += "<li";
        html += _.attrFilter("class", _.escapeHTML(_.classFilter(_.xclassFilter(ctx.data.class))), false);
        html += _.attrFilter("style", _.escapeHTML(_.styleFilter(_.xstyleFilter(ctx.data.style))), false);
        html += _.attrFilter("id", _.escapeHTML(ctx.data.id), false);
        html += ">";
        if (!noDataOutput) {
            html += "<!--s-data:";
            html += JSON.stringify(_.getRootCtx(ctx).data).replace(/(?<=-)-/g, "\\-");
            html += "-->";
        }
        html += _.output(ctx.data.item, true);
        html += "</li>";
        return html;
});
    module.exports = Object.assign(sanSSRResolver.getRenderer({id:"0"}), exports)
    return module.exports(data, info);
}
        const {defineComponent} = require('/home/meixg/code/vusa/node_modules/@vusa/runtime~v1.0.1-alpha.42/vusa.js');
        const componentProps = require('/home/meixg/code/vusa/test/ssr-perf/sample/simple-list/atom-older-version/dist/app2.san.js');
        const Component = defineComponent(componentProps);
        delete Component.prototype._cmptReady;

        function makeRender (data, info = {}) {
            info.ComponentClass = Component;
            return render(data, info);
        }
        const props = componentProps.props || [];
        module.exports = makeRender;
        module.exports.props = Array.isArray(props) ? props : Object.keys(props);