import define from './define-component';
import mergeOptions, {globalOptions} from './merge-options';

export const mixin = function (options) {
    mergeOptions(options, globalOptions);
};

export const component = function (name, Component) {
    globalOptions.components = globalOptions.components || {};
    globalOptions.components[name] = define(Component);
};
