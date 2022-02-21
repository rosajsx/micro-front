const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
    uniqueName: "MicroFront2",
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
        test: /\.js(x)?$/,
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
      name: "MicroFront2",
      filename: "remoteEntry.js",
      remotes: {
        "@MicroFrontContainer":
          "MicroFrontContainer@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./Routes": "./src/routes/index.js",
        "./Routes/list": "./src/routes/microfront2Routes.js",
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
