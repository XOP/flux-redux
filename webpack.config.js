'use strict';

const webpack = require('webpack');
const path = require('path');

// plugins
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

// local helpers
const merge = require('webpack-merge');

// vars
const srcPath = path.join(__dirname, './assets');
const production = process.env.NODE_ENV === 'production';

//
// postcss plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const Browsers = ['last 2 versions'];

const postCssPlugins = [
    autoprefixer({browsers: Browsers})
];

if (production) {
    // minifying resulting css
    postCssPlugins.push(cssnano());
}

//
// common config
let config = {

    entry: [
        path.join(srcPath, 'index.js')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.jsx', '.json', '.html', '.scss'],
        modulesDirectories: ['node_modules', 'assets', 'assets/app', 'assets/css'],
        alias: {}
    },

    module: {
        noParse: [],

        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                include: [
                    path.resolve(__dirname, 'assets')
                ],
                exclude: [
                    /bundle\.js$/
                ],
                loader: 'eslint-loader'
            }
        ],

        loaders: [

            // js | jsx
            {
                test: /\.jsx$|\.js$/,
                loaders: [
                    'babel-loader?' + JSON.stringify({presets: ['es2015', 'react']}),
                    'imports-loader?React=react&ReactDOM=react-dom'
                ],
                exclude: /node_modules/
            },

            // custom modules
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader?' + JSON.stringify({presets: ['es2015']})
                ],
                include: [
                    /node_modules\/xop-module-utils/
                ]
            },

            // json
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [],

    postcss: postCssPlugins
};

//
// production config
if (production) {
    console.info('[WEBPACK] operating in production mode');

    config = merge(config, {
        module: {
            loaders: [
                {
                    test: /\.css$|\.scss$/,
                    loader: extractTextPlugin.extract('style-loader', 'css!postcss!sass')
                }
            ]
        },

        plugins: [
            new htmlWebpackPlugin({
                title: 'Flux-Redux',
                favicon: './favicon.ico',
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    keepClosingSlash: true,
                    removeEmptyElements: false
                }
            }),
            new extractTextPlugin('bundle.css')
        ]
    });
}

//
// development config extras
if (!production) {
    console.info('[WEBPACK] operating in development mode');

    config = merge(config, {
        module: {
            loaders: [
                {
                    test: /\.css$|\.scss$/,
                    loaders: ['style', 'css', 'postcss', 'sass']
                }
            ]
        },

        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only'
        },

        plugins: [
            new htmlWebpackPlugin({
                title: 'Flux-Redux',
                favicon: './favicon.ico',
                template: './src/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],

        debug: true
    });
}

module.exports = config;
