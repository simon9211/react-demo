// https://www.cnblogs.com/shaozhu520/p/11180381.html
// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path是node.js中提供的处理文件路径的小工具。 (http://www.runoob.com/nodejs/nodejs-path-module.html)
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 项目入口，webpack从此处开始构建
  // entry: {
  //   main: path.join(__dirname, '../src/index.js'), // 指定入口，可以指定多个。参考webpack文档
  // },

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/index.jsx'),
  ],

  output: {
    path: path.join(__dirname, '../dist'), // bundle生成(emit)到哪里
    // filename: "bundle.js", // bundle生成文件的名称
    filename: 'app/[name]_[hash:16].js', // 打包后文件
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        // 抽离至 .babellrc
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [ "es2015",  "react"],
        //   }
        // },
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      // {
      //   test: /\.(png|jpg)$/, // 配置静态文件解析
      //   loader: 'url-loader?limit=8192',
      // },
      // {
      //   test: /.scss$/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      inject: true,
      // chunks: 'app',
      // excludeChunks: ['main'],
      // // 压缩选项
      // minify: {
      //   collapseWhitespace: true,
      // },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
