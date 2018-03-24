const path = require('path');

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'client') + '/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist', 'js'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
