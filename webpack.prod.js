const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/logic.ts',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist/')
  }
});