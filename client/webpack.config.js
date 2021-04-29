/* eslint-disable no-undef */
const path = require("path");
// const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");

const DEV = process.env.WEBPACK_DEV_SERVER === "true";

module.exports = {
    entry: "./dev/index.js",
    output: {
        filename: DEV ? "[name].bundle.js" : "[name].[contenthash:10].js",
        path: path.join(__dirname, "build/"),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|mp3)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // convert images < 8kb to base64 strings
                            name: "images/[hash:8]-[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    devtool: DEV ? "cheap-module-eval-source-map" : false,
    mode: DEV ? "development" : "production",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@actions": path.resolve(__dirname, "src/actions"),
            "@reducers": path.resolve(__dirname, "src/reducers"),
            "@components": path.resolve(__dirname, "src/app/components"),
            "@pages": path.resolve(__dirname, "src/app/pages"),
            "@utils": path.resolve(__dirname, "src/app/utils"),
            "@apis": path.resolve(__dirname, "src/app/apis"),
            "@svg": path.resolve(__dirname, "src/app/svg"),
            "@theme": path.resolve(__dirname, "src/app/theme"),
            "@images": path.resolve(__dirname, "src/app/images"),
            "@ui": path.resolve(__dirname, "src/app/ui"),

        },
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        watchContentBase: false,
        historyApiFallback: true,
        disableHostCheck: true,
        port: 9000,
    },
    plugins: [
        new LoadablePlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: "dev/index.html",
                to: ".",
            },
        ]),
        !DEV &&
            new CompressionPlugin({
                test: /\.js$/,
            }),
    ].filter(Boolean),
};
