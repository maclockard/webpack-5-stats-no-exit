const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const REPRO = process.env.REPRO === "true";

module.exports = {
  entry: "./index.js",
  mode: "development",
  stats: {
    all: !REPRO,
  },
  plugins: [
    new HtmlWebpackPlugin({}),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
