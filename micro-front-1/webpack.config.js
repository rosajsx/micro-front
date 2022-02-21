const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
    hot: "only",
  },
  output: {
    publicPath: "http://localhost:3001/",
    uniqueName: "MicroFront1",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MicroFront1",
      filename: "remoteEntry.js",
      remotes: {
        "@MicroFrontContainer":
          "MicroFrontContainer@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./Routes": "./src/router/index.js",
        "./App": "./src/App.js",
        "./RoutesList": "./src/routes.js",
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          eager: true,
          singleton: true,
        },
        "react-dom": { eager: true, singleton: true },
        "react-router-dom": { eager: true, singleton: true },
        "styled-components": { eager: true, singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
