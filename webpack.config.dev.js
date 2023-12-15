const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/script-dev.js',
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
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
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
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                useShortDoctype: false,
            }
            // favicon: "./src/assets/favicon.png"
        }),
        // new HtmlWebpackPlugin({
        //     filename: "second_index_bundle.html",
        //     template: "src/second_index.html",
        // })
    ],
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                test: /\.js$/,
                exclude: /\/node_modules/,
            })
        ]
    }
}