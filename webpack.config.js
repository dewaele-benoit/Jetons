const {ProvidePlugin, optimize} = require("webpack");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer"); // eslint-disable-line no-unused-vars
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		init: [
			"babel-polyfill",
			"./src/client/index.js",
			"./src/client/init/index.js"
		],
		formulaire: [
			"babel-polyfill",
			"./src/client/index.js",
			"./src/client/formulaire/index.js"
		]
	},
	output: {
		path: path.join(__dirname, "/src/server/public"),
		filename: "[name].js"
	},
	externals: {
		request: "request",
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: require.resolve("jquery"),
				use: [{
					loader: "expose-loader",
					options: "jQuery"
				}, {
					loader: "expose-loader",
					options: "$"
				}]
			},
			{
				test: require.resolve("tether"),
				use: [{
					loader: "expose-loader",
					options: "Tether"
				}]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[sha512:hash:base64:7].[ext]"
			},
			{
				test: /\.(html)(\?v=\d+\.\d+\.\d+)?$/,
				loader: "html-loader?name=templates/[name].[ext]&publicName=/"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[sha512:hash:base64:7].[ext]"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader?name=fonts/[sha512:hash:base64:7].[ext]"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]"
			},
			{
				test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]"
			},
			{
				test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/jpg&name=images/[name].[ext]"
			},
			{
				test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/gif&name=images/[name].[ext]"
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}]
	},
	plugins: [
		new ProvidePlugin({
			jQuery: "jquery",
			$: "jquery",
			jquery: "jquery",
			"window.jQuery": "jquery",
			Ractive: "ractive",
			Tether: "tether",
			Popper: ['popper.js', 'default']
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		}),

		new optimize.CommonsChunkPlugin("common"),
		new ExtractTextPlugin("[name].css")
		//, new BundleAnalyzerPlugin({
		//	analyserMode: 'static'
		//})
	]
};