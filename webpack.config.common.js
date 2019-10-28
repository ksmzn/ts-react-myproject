const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.[hash].js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
    alias: {
      // https://github.com/gaearon/react-hot-loader/tree/7089062eac273832102c074a368d5af27e23e0b0#react--dom
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'source-map-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CaseSensitivePathsPlugin()
  ]
};
