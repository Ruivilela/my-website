const path = require('path');

module.exports = {
  entry: path.join(__dirname, './../src/index.js'),
  output: {
    path: path.resolve(__dirname, './../public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {},
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
