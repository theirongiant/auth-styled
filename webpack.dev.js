const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:4000/js/',
    filename: 'bundle.dev.js'
  },
  watchOptions: {
    ignored: /\/node_modules\/.*/
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    hot: true,
    inline: true,
    port: 4000,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'public/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
