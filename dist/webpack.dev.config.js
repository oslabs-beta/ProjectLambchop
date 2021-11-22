"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var spawn = require('child_process').spawn;
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        stats: {
            colors: true,
            chunks: false,
            children: false,
        },
        before: function () {
            spawn('electron', ['.'], { shell: true, env: process.env, stdio: 'inherit' })
                .on('close', function (code) { return process.exit(0); })
                .on('error', function (spawnError) { return console.error(spawnError); });
        },
    },
};
//# sourceMappingURL=webpack.dev.config.js.map