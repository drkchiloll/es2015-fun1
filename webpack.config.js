const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'js'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: PATHS.app + '/es6Classes.js',
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.build,
    filename: 'es5.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: PATHS.app
    }]
  }
};
