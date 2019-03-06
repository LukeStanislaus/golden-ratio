const path = require('path'); 
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/index.ts',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist/test'),
    publicPath: 'dist/test'
  },     
  devServer:{
    contentBase: __dirname
},
  devtool: "source-map"
});