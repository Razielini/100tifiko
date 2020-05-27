const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: main.js
  },
  resolve: {
    extensions: ['.js']
  },
  modules: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        user: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin([
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html'
      }
    ])
  ]
}