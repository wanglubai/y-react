var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const pageName = process.env.PAGE_NAME;
const moduleName = process.env.MODULES;

module.exports = {
    mode: 'development',
    entry: {
        [pageName]: `./pages/${moduleName}/${pageName}/index.js`,
    },
    module: {
        rules: [{
            test: /\.less$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `./pages/${moduleName}/${pageName}/index.html`
    })],
    devServer: {
        port: 90,
        compress: true,
    }
}