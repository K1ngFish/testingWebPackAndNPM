const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script_bundle.js",
    },
    // Для TypeScript
    // resolve: {
    //     extensions: ['.tsx', '.ts', 'js']
    // },
    devServer: {
      port: 9000,
      compress: true,
      hot: true,
      static: {
          directory: path.join(__dirname, 'dist')
      }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                type: 'javascript/auto',
            }
            // Для TypeScript
            // {
            //     test: /\.ts$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/,
            // }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.pug",
            filename: "index_bundle.html",
            removeComments: true,
            // minify: false,
            // favicon: "./src/assets/favicon.png"
        }),
        new ESLintPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: "second_index_bundle.html",
        //     template: "src/second_index.html",
        // })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js$/,
                exclude: /\/node_modules/,
            })
        ]
    }
}