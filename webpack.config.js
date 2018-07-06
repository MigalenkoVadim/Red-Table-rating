
module.exports = {
  mode: "production",
  entry: './js/start',
  output: {
    filename: './rating.js',
    library: 'home'
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "sourse-map",

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
