/**
 * @file runtime min config
 * @author cxtom(cxtom2008@gmail.com)
 */

const webpackConfig = require('./webpack.runtime.config');

module.exports = Object.assign({}, webpackConfig, {
    optimization: {
        minimize: true
    },
    output: Object.assign({}, webpackConfig.output, {
        filename: 'vusa.min.js',
        library: '@vusa/runtime'
    }),
    devtool: false
});
