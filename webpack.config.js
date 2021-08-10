const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/img/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [

    new miniCss({
      filename: "style.css",
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets'),
          to: 'assets',
        },
      ],
    }),

  ],
};
