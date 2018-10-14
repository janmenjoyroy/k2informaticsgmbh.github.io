const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    devtool: 'source-map',
    mode: "production",
    plugins: [
        new UglifyJSPlugin({ sourceMap: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CopyWebpackPlugin([
            { from: 'translations/de.json', to: 'translations/de.json', force: true },
            { from: 'translations/en.json', to: 'translations/en.json', force: true }
        ])
    ]
});