var webpack = require('webpack');
var path = require('path');
var lodash = require('lodash');
var baseConfig = require('../webpack.config.js');

module.exports = lodash.merge(baseConfig, {

  devtool: 'source-map',

  plugins: baseConfig.plugins.concat([

    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    new webpack.optimize.AggressiveMergingPlugin(),

  ]),

  module: {
      loaders: [{
          test: /\.js$/,
          loaders: [ 'babel' ],
        include: path.join(__dirname, '../src')
      }]
  }

});
