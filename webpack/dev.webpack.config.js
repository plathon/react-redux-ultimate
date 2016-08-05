var webpack    = require('webpack');
var path = require('path');
var lodash      = require('lodash');
var baseConfig = require('../webpack.config.js');

module.exports = lodash.merge(baseConfig, {

	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
	].concat( baseConfig.entry ),

	module: {
	    loaders: [{
	      	test: /\.js$/,
	      	loaders: ['react-hot', 'babel'],
	    	include: path.join(__dirname, '../src')
	    }]
	}

});
