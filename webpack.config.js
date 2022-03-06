var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const path = require('path');

const pageName = process.env.PAGE_NAME;
const moduleName = process.env.MODULES;

module.exports = {
    mode: 'production',
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
        template: `./public/index.html`
    }),
    new BundleAnalyzerPlugin()],
    devServer: {
        port: 90,
        compress: true,
    }
}