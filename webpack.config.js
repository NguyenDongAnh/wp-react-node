const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: path.join(__dirname, "src", "index.js") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|ico)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss", ".sass"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    //path serve bundle.js
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html"),
      // favicon: path.join(__dirname, "public", "favicon.ico"),
    }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    // allowedHosts: ["192.168.2.170", "127.0.0.1"],
    host: "0.0.0.0",
    port: 3000,
    compress: true,
    //serve static files
    contentBase: path.join(__dirname, "public"),
    //serve manifest.json
    contentBasePublicPath: "/",
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  stats: "Detailed"
};
