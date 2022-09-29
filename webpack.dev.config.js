const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
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
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Modulo para la importación de imagenes
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
            options: { name: 'Assets/[name].ext' },
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
    new webpack.HotModuleReplacementPlugin(), // pugin para webpack-server
    new ESLintPlugin({
      // plugin para terminaciones
      extensions: ['js', 'jsx'],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  // configuracion del puerto
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};
