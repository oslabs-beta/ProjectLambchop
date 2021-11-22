"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
var defaultInclude = path.resolve(__dirname, 'src');
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
                include: defaultInclude,
            },
            {
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader' }],
                include: defaultInclude,
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
                include: defaultInclude,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
                include: defaultInclude,
            },
        ],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({ title: 'New app title' }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'bundle.css',
            chunkFilename: '[id].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false,
    },
};
//# sourceMappingURL=webpack.build.config.js.map