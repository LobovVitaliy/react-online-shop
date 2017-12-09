const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        shop: [ './src/index.js', './src/index.scss' ],
        admin: [ './src/admin.js', './src/admin.scss' ]
    },
    output: {
        path: path.join(__dirname, '/public/build'),
        publicPath: '/public/',
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /public/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].styles.css',
            allChunks: true
        })
    ],
    devServer: {
        stats: 'errors-only',
        contentBase: path.join(__dirname, '/public'),
        historyApiFallback: true
    }
};