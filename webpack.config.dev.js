const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: '.'
  },
  devtool: 'source-map'
});
