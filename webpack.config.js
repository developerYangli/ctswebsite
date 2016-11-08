/**
 * Created by kanily on 16/11/3.
 */
var path = require('path');
const webpack = require('webpack');
config = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ],
  },
  function(webpackConfig) {
    webpackConfig.babel.plugins.push(['import', {
      libraryName: 'antd',
      style: 'css',
    }]);
  }
};

module.exports = config;