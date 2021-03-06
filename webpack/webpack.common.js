'use strict';

const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ['./src/forge.js'],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.FontLoader,
      loaders.ImgLoader
    ]
  },
  output: {
    filename: 'Forge.bundle.js',
    path: path.resolve(__dirname, '../assets/dist'),
    publicPath: './',
    library: 'Forge', // We set a library name to bundle the export default of the class
    libraryTarget: 'window', // Make it globally available
    libraryExport: 'default' // Make mbp.default become mbp
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ]
};
