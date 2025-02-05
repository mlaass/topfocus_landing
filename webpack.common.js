const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js"),
    cms: path.join(__dirname, "src", "js", "cms.js"),
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(png|eot|woff|woff2|ttf|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[hash].[ext]"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import"),
                  require("tailwindcss"),
                  require("autoprefixer"),
                ]
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?imports=default:whatwg-fetch!exports-loader?exports=default:fetch!whatwg-fetch"
    }),
    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
      entrypoints: true
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./site/static/",
          to: "./",
          globOptions: {
            ignore: ["**/*.ico", "**/*.png", "**/site.webmanifest"]
          }
        }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css"
    }),

    new HtmlWebpackPlugin({
      filename: "admin/index.html",
      template: "src/cms.html",
      inject: true,
    })
  ]
};
