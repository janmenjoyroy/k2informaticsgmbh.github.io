const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const favicon = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        k2: './index.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    output: {
        filename: '[name][hash:6].js',
        path: path.resolve(__dirname, '..', 'public')
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            title: pkg.description + ' ' + pkg.version
        }),
        new favicon('./assets/images/logo.png')
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.html$/, loader: 'html-loader',
                options: {
                    minimize: false,
                    attrs: 'img:src :pdf-src'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico|mp3|ogg|mp4|webm)$/,
                loader: 'file-loader', options: { name: 'media/[hash:6].[ext]' }
            },
            {
                test: /\.(pdf).*$/,
                loader: 'file-loader', options: { name: 'docs/[name].[ext]' }
            }
        ]
    }
};