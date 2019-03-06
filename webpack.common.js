const path = new require("path");

module.exports = {
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
      output: {
        filename: '[name].js'
      }
}