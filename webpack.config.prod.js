const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const API_URL = 'https://sample.com' // TODO: 書き換える

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(API_URL)
    })
  ]
})
