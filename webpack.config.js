const proxy = 'http://thesnug-starter.dev/';

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./assets/javascripts/src/app.js', './assets/sass/application.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/javascripts/dest'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.sass$/,
        include: path.resolve(__dirname, 'assets/sass'),
        exclude: /node_modules/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy,
    }),
    new ExtractTextPlugin({
      filename: 'whatever.css',
      allChunks: true,
    }),
  ],
};
