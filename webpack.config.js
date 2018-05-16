const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
     { test: /\.hbs$/,
       loader: "handlebars-loader"
     },
     { test: /\.js$/,
       use: "babel-loader"
     },
     { test: /\.json$/,
       use: "json-loader"
     },
     { test: /\.(png|svg|jpg|gif)$/,
       use: [ 'file-loader' ]
     }
   ]
 },
 plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        })
 ]
};
