// webpack v4

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: { 
		index: './src/js/page/index.js', 
		fourohfour: './src/js/page/fourohfour.js',
		contact: './src/js/page/contact.js',
		projects: './src/js/page/projects.js',
		about: './src/js/page/about.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'js/[name].[chunkhash].js'
	},
	externals:{
		jquery: 'jQuery',
		animejs: 'anime'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader'
				}
			},			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
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
		new CleanWebpackPlugin(['public/css', 'public/js', 'html', 'views/partials/links'], {}),
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
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/pages/contact.ejs',
			filename: '' + __dirname + '/html/contact.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/links/projects-js.ejs',
			filename: '' + __dirname + '/views/partials/links/projects-js.ejs'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/links/projects-css.ejs',
			filename: '' + __dirname + '/views/partials/links/projects-css.ejs'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/links/about-js.ejs',
			filename: '' + __dirname + '/views/partials/links/about-js.ejs'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/ejs/links/about-css.ejs',
			filename: '' + __dirname + '/views/partials/links/about-css.ejs'
		}),
		new CopyWebpackPlugin(
			[
				{ from: 'src/ejs/pages/partials', to: '../views/partials' }
			],
			{}
		),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
		new WebpackMd5Hash()
	]
};