// webpack v4

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

module.exports = {
	entry: { 
		index: './src/js/page/index.js', 
		fourohfour: './src/js/page/fourohfour.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'js/[name].[chunkhash].js'
	},
	externals:{
		jquery: 'jQuery'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'css/fonts/'
					}
				}]
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['public', 'html', 'views/partials/links'], {}),
		new webpack.ProvidePlugin({
			_: 'lodash'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/pages/index.ejs',
			filename: '' + __dirname + '/html/index.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/pages/fourohfour.ejs',
			filename: '' + __dirname + '/html/404.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
		new WebpackMd5Hash()
	]
};