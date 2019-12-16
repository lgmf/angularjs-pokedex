const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 4200
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json"],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
