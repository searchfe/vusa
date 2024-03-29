/**
 * @file 开发阶段的 webpack 配置
 * @author cxtom(cxtom2008@gmail.com)
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './example/index.js',
    },
    devtool: false,
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vusa',
            template: path.resolve(__dirname, '../example/index.html'),
        }),
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
    },
    devServer: {
        host: '0.0.0.0',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env', {
                                modules: false,
                            }],
                        ],
                    },
                },
            ],
        },
        {
            test: /\.ts$/,
            use: 'ts-loader',
        },
        {
            test: /\.vue$/,
            use: [
                require.resolve('./vusa-loader'),
                {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false,
                        },
                    },
                },
            ],
        },
        {
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'stylus-loader',
            ],
        }],
    },
};
