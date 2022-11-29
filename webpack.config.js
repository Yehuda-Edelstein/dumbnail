const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  resolve: {
    modules: [".", "node_modules"],
    extensions: [".js", ".jsx", ".scss"],
    fallback: {
      util: require.resolve("util/"),
      path: false,
      assert: false,
      os: false,
      fs: false,
      browser: false,
      module: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(sass|less|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  stats: {
    excludeAssets: /\.map$/,
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "production",
};
