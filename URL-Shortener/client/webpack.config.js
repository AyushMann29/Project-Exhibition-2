const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/popup.js", // Entry file
  output: {
    path: path.resolve(__dirname, "public"), // Output to public folder
    filename: "popup.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
