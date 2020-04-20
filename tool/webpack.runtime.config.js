/**
 * @file 开发阶段的 webpack 配置
 * @author cxtom(cxtom2008@gmail.com)
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/runtime/index.js',
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts']
    },
    externals: Object.keys(require('../packages/runtime/package.json').dependencies),
    output: {
        path: path.resolve(__dirname, '../packages/runtime'),
        filename: 'vusa.js',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: false
    },
    stats: {
        children: false,
        modules: false
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};
