const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");

module.exports = {
	// The mode can be set to production or development with their usual meanings.
	mode: "development",
	devtool: "inline-source-map",
	// Entry defines the entry-point for the application. It is the first module that webpack will process to build its dependency graph
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({ title: "Blogs" }),
		new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	// development only. It monitors files, if any files change, it will automatically re-build and re-refresh page.
	devServer: {
		static: "./dist",
	},
	// As webpack understand JavaScript and JSON files, then we can use loader to process other types of files
	module: {
		rules: [
			{
				// which file should be transformed
				test: /\.css$/i,
				// which loader should be use
				use: ["style-loader", "css-loader"],
			},
			{
				//As of webpack 5, using the built-in Asset Modules to process it
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			// Sometimes we use a new feature of JavaScript, and in order to be compatible with lower versions of browsers,
			// we need to use babel to help us convert
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
