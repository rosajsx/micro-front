const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "MicroFrontContainer",
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
      // {
      //   test: /\.jpe?g|png$/,
      //   exclude: /node_modules/,
      //   use: ["url-loader", "file-loader"],
      // },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MicroFrontContainer",
      filename: "remoteEntry.js",
      remotes: {
        "@MicroFront1": "MicroFront1@http://localhost:3001/remoteEntry.js",
        "@MicroFront2": "MicroFront2@http://localhost:3002/remoteEntry.js",
        "@MicroFrontAngular":
          "microFrontAngular@http://localhost:39273/remoteEntry.js",
      },
      exposes: {
        "./Styles": "./src/styles/index.js",
        "./GlobalCSS": "./src/styles/globalStyle.js",
        "./ThemeProvider": "./src/components/ThemeProvider/index.jsx",
        "./AppStyle": "./src/styles/appStyle.js",
        "./Hooks/useTheme": "./src/hooks/useTheme.js",
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
