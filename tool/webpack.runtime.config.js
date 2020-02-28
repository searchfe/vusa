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
    externals: ['san'],
    output: {
        filename: 'vesa.js',
        libraryTarget: 'umd'
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
