const merge = require('webpack-merge');
const common = require('./webpack.common.babel.js');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import { ReactLoadablePlugin } from 'react-loadable/webpack';
const path = require('path');

const envPlugin =  new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_BASE_PATH':JSON.stringify('http://18.188.210.10/VizonLaravel/api/'),
        'BASENAME':JSON.stringify('/app/'),
        'STATIC_IMAGE_BASE_PATH':JSON.stringify('http://18.188.210.10/VizonLaravel/public/images/')
    }
});

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'app'),
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        publicPath: '/app/',
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false, // remove comments
                    },
                    compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false,
                        drop_debugger: true,
                        conditionals: true,
                        evaluate: true,
                        drop_console: true,
                        sequences: true,
                        booleans: true
                    }
                },
                sourceMap: false
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        envPlugin,
        new CopyWebpackPlugin([{ from: 'src/.htaccess', to: '.htaccess', toType: 'file' }])
    ]
});