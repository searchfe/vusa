/**
 * @file runtime min config
 * @author cxtom(cxtom2008@gmail.com)
 */

const path = require('path');
const webpackConfig = require('./webpack.runtime.config');

module.exports = Object.assign({}, webpackConfig, {
    target: 'node',
    entry: {
        app: './src/compiler/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../packages/compiler'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    externals: Object.keys(require('../packages/compiler/package.json').dependencies)
});
