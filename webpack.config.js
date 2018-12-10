const path = require('path')
const GasPlugin = require('gas-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

minimizer = new TerserPlugin({
  terserOptions: {
    ie8: true,
    mangle: false,
    compress: {
      properties: false,
      warnings: false,
      drop_console: false
    }
  }
})
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  optimization: {
    minimizer: [minimizer]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'this'
  },
  plugins: [
    new GasPlugin()
  ]
}

