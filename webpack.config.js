const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Setting default domain
 */
let domain = 'snug-starter-wp.dev';

/**
 * Checking for a local.env.js file
 * this allows the overwriting of the default domain
 */
try {
  var env = require('./local.env');
} catch (ex) {
  var env = false;
}

if (env) {
  domain = env.url;
}

module.exports = () => {
  return {
    entry: {
      frontend: ['./src/index.js', './src/sass/application.scss']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:3000/'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [{
          enforce: 'pre',
          exclude: /node_modules/,
          test: /\.jsx$/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("node-sass"),
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed',
                },
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [{
            loader: "file-loader",
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'svgs',
                name: '[name].[ext]',
              }
            },
            {
              loader: "svgo-loader",
              options: {
                plugins: [
                  {removeXMLProcInst: true}
                ]
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [{
            loader: "file-loader",
            options: {
              outputPath: 'fonts'
            }
          }]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      }),
      new BrowserSyncPlugin({
        files: '**/*.php',
        proxy: domain,
        reloadDelay: 500
      }),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './dist/svgs/*',
            to: './partials/[name].[ext].php',
            force: true,
            noErrorOnMissing: true
          },
        ],
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
    }
  }
};
