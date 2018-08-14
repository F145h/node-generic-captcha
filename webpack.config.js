var fs = require('fs');
var path = require('path');
var webpack = require('webpack');


var nodeModules = {};
fs.readdirSync('/node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

//nodeModules = {};

module.exports = {
    entry: './src/index.js',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: nodeModules,
    output: {
        path: path.resolve(__dirname, "distr"),
        filename: 'node-generic-captcha.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};