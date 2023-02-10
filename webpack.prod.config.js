const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dotenv = require('dotenv');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  entry: './src/index.js',
  module: {
    rules: [
      // Modulo para que se compilen archivos con terminacion .Js, Jsx, Ts, Tsx
      {
        test: /\.(js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // Modulo para que se compilen archivos .css
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/, // Modulo para la importación de imagenes
        use: [
          {
            loader: 'file-loader',
            options: { name: 'Assets/Images/[name].[ext]' },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // modulo de importacion de fuentes
        use: [
          {
            loader: 'file-loader',
            options: { name: 'Assets/Fonts/[name].ext' },
          },
        ],
      },
    ],
  },
  resolve: {
    // extenciones que soporta la compilacion
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // plugin para archivos Html
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      // plugin para librerias de stylos agenas al Dom
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ESLintPlugin({
      // plugin para terminaciones
      extensions: ['js', 'tsx'],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
};
