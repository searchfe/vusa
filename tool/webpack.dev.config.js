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
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vusa',
            template: path.resolve(__dirname, '../example/index.html')
        }),
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    require.resolve('./vesa-loader'),
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            }
        ]
    }
};
