/**
 * @file rollup config
 * @author cxtom(cxtom2008@gmail.com)
 */

const path = require('path');
const buble = require('rollup-plugin-buble');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const builtins = require('rollup-plugin-node-builtins');
const terser = require('rollup-plugin-terser').terser;
const version = process.env.VERSION || require('../package.json').version;

const banner = ''
  + '/*!\n'
  + ' * vusa v' + version + '\n'
  + ' * (c) 2019-' + new Date().getFullYear()
  + ' * Released under the MIT License.\n'
  + ' */\n'
  + '/* eslint-disable */';

const resolve = p => {
    const base = p.split('/')[0];
    return path.resolve(__dirname, '../', p);
};

const builds = {
    'runtime': {
        entry: resolve('src/runtime/index.js'),
        dest: resolve('packages/runtime/vusa.js'),
        format: 'umd',
        banner,
        external: Object.keys(require('../packages/runtime/package.json').dependencies),
        plugins: [
            buble({
                objectAssign: 'Object.assign'
            })
        ]
    },
    'runtime-prod': {
        entry: resolve('src/runtime/index.js'),
        dest: resolve('packages/runtime/vusa.min.js'),
        format: 'umd',
        banner,
        external: Object.keys(require('../packages/runtime/package.json').dependencies),
        plugins: [
            buble({
                objectAssign: 'Object.assign'
            }),
            terser(require('./terser.config'))
        ]
    },
    'compiler': {
        entry: resolve('src/compiler/index.js'),
        dest: resolve('packages/compiler/index.js'),
        format: 'cjs',
        external: Object.keys(require('../packages/compiler/package.json').dependencies),
        banner,
        plugins: [
            builtins()
        ]
    }
};

function genConfig(opts) {
    const config = {
        input: opts.entry,
        output: {
            file: opts.dest,
            format: opts.format,
            banner: opts.banner,
            sourcemap: !!opts.sourceMap,
            name: 'Vusa',
            globals: 'Vusa'
        },
        external: opts.external,
        plugins: [
            replace({
                __VERSION__: version
            })
        ].concat(opts.plugins || [])
    };
    if (opts.env) {
        config.plugins.push(replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env)
        }));
    }
    return config;
}

const targets = {
    runtime: ['runtime', 'runtime-prod'],
    compiler: ['compiler']
};

if (process.env.TARGET) {
    module.exports = targets[process.env.TARGET].map(k => genConfig(builds[k]));
}
else {
    module.exports = Object.keys(builds).map(k => genConfig(builds[k]));
}
