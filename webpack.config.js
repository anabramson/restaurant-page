const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/index.js',  // Updated path to JS entry
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Updated path to HTML
    }),
  ],
  output: {
    filename: 'bundle.js',       // Output JS file
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
