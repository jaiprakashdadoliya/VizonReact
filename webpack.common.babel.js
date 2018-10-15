const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "styles/[name].css"
});

module.exports = {
    entry: {
        client: ['./src/index.jsx']
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|gif|jpeg|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    performance: {
        hints: "warning"
    },
    devServer: {
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [htmlPlugin, miniCssPlugin]
};
