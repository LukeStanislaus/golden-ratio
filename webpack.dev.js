const path = require('path'); 
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/index.ts',
  mode: "development",
  module: {
    rules: [
      { test: /\.ts$/,
          exclude:path.resolve(__dirname, "node_modules"),
          loader: "babel-loader!awesome-typescript-loader" }
  ]},
  resolve: {		
    modules: [
    __dirname,
    path.resolve(__dirname, "src"),
    "node_modules"
  ],
    extensions: [ '.ts', '.js' ],
  },

  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist/test'),
    publicPath: 'dist/test'
  },    
  module: {
    rules: [
      { test: /\.ts$/,
          exclude:path.resolve(__dirname, "node_modules"),
          loader: "babel-loader!awesome-typescript-loader" }
  ]},
  watch: true, 
  devServer:{
    contentBase: __dirname
},
  devtool: "source-map"
});