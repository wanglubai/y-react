var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const pageName = process.env.PAGE_NAME;
const moduleName = process.env.MODULES;

module.exports = {
    mode: 'development',
    cache: true,

    entry: {
        [pageName]: { import: `./pages/${moduleName}/${pageName}/index.js`, dependOn: ['react', 'react-dom'] },
        'react': ['react'],
        'react-dom': ['react-dom']
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, `dist/${pageName}`),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }]
        },
        {
            test: /\.(js|jsx|ts|tsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {}
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `./public/index.html`
    }),
    new CopyPlugin({
        patterns: [
            { from: "model", to: "model" },
        ],
    })
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        port: 90,
        hot: true,
        compress: true,
    }
}