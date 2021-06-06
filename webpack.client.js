const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {merge} = require('webpack-merge');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const base = require('./webpack.base');


module.exports = merge(base, {
    target:'web',
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist/public'), //文件存放目录
        filename: 'client.js',      //入口文件打包后的名字
        chunkFilename: '[name]-[contenthash:8].js', //code splitting后的包名
        publicPath: 'http://localhost:5001/' //公开路径(资源引用root路径)
    },
    module: {
        rules: [
            {
                test: /\.module\.[s]?css$/,
                use: [
                    // 'style-loader', //用MiniCssExtractPlugin.loader替换，实现外部引入样式
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        //启动css模块化
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            } 
                        }
                    },
                    {loader:'postcss-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test: /\.[s]?css$/,
                exclude: /module/, //符合test规则同时排除文件名包含'module'的
                use: [
                    // 'style-loader', //用MiniCssExtractPlugin.loader替换，实现外部引入样式
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        //启动css模块化
                        options: {
                            modules: {
                                localIdentName: '[local]',
                            } 
                        }
                    },
                    {loader:'postcss-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test: /\.(jp[e]?g|png|gif|woff|woff2|ttf|eot|svg|ico)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[contenthash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
          }),
        new MiniCssExtractPlugin({
            // 所有选项都是可选的
            filename: '[name]-[contenthash:8].css',
            chunkFilename: '[name]-[contenthash:8].css',
        }),
        new ReactLoadableSSRAddon({
            filename: 'load-manifest.json',
        }),
        // new ReactRefreshWebpackPlugin(), 
    ],
});