const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output:  {
        filename: 'main.js',
        chunkFilename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'assets/images/[name].[hash:8].[ext]',
                },
              },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            {
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [htmlWebpackPlugin]
};