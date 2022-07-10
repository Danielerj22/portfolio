const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html', filename: 'index.html' })
  ],
  devServer: {
    port: 7000,
    open: true
  },
  module: {
    rules:[{
      test: /\.(c|sc|sa)ss$/,
      use: ['style-loader','css-loader','sass-loader']
    }]
  }
}