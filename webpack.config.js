const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
	return {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
		},
		resolve: {
			extensions: [ '.js', '.jsx' ],
			alias: {
				'react-dom': '@hot-loader/react-dom',
				'react-dom$': 'react-dom/profiling',
				'scheduler/tracing': 'scheduler/tracing-profiling',
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.(s[ac]ss|css)$/i,
					use: [ 'style-loader', 'css-loader', 'sass-loader' ],
				},
				{
					test: /\.(png|jpe?g|gif|svg)$/i,
					loader: 'file-loader',
					options: {
						outputPath: 'assets/img',
						name: '[name].[ext]',
					},
				},
			],
		},
		plugins: [
			new Dotenv(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
				filename: 'index.html',
				favicon: './public/favicon.ico',
			}),
			new CleanWebpackPlugin(),
		],
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			historyApiFallback: true,
			open: true,
		},
	};
};
