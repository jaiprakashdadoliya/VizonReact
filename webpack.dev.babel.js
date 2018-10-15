const merge = require('webpack-merge');
const common = require('./webpack.common.babel.js');
var webpack = require('webpack');
const path = require('path');

const envPlugin =  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_BASE_PATH':JSON.stringify('http://192.168.10.44/VizonLaravel/api/'),
        'BASENAME':JSON.stringify('/'),
        'STATIC_IMAGE_BASE_PATH':JSON.stringify('http://192.168.10.44/VizonLaravel/public/images/'),
      }
  });

 module.exports = merge(common, {
   mode: 'development',
     output: {
         path: path.join(__dirname, '../app'),
         filename: '[name].[chunkhash].bundle.js',
         chunkFilename: '[name].[chunkhash].bundle.js',
         publicPath: '/',
     },
   plugins: [envPlugin]
 });
