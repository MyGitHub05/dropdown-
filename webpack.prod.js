const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});
