const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js", // Content hash for cache busting
    clean: true, // Automatically clean the output directory before build
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Process TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Process CSS files
        use: [
          "style-loader", // Inject CSS into the DOM
          "css-loader",   // Translate CSS into CommonJS
          "postcss-loader", // Process Tailwind CSS via PostCSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
      inject: "body", // Inject scripts at the bottom of the body tag
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Automatically resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000, // Development server port
    hot: true,  // Enable hot module replacement
    open: true, // Open the browser after the server starts
  },
  mode: "development", // Default mode
};
