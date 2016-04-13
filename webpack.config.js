var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/js/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    post: process.env.PORT||8080,
    inline: true,
    hot: true
  },
}

module.exports = config;
