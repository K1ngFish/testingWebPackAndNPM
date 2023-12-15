const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script_bundle.js",
    },
    devServer: {
      port: 9000,
      compress: true,
      hot: true,
      static: {
          directory: path.join(__dirname, 'dist')
      }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index_bundle.html",
            template: "src/index.html",
            removeComments: true,
            // minify: false,
            // favicon: "./src/assets/favicon.png"
        }),
        // new HtmlWebpackPlugin({
        //     filename: "second_index_bundle.html",
        //     template: "src/second_index.html",
        // })
    ]
}