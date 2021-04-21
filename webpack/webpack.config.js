/* eslint-disable no-console */
// https://www.cnblogs.com/shaozhu520/p/11180381.html
// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path是node.js中提供的处理文件路径的小工具。 (http://www.runoob.com/nodejs/nodejs-path-module.html)

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');

const { __DEV__, __PROD__ } = config.globals;

const webpackConfig = {
  // 项目入口，webpack从此处开始构建
  // entry: {
  //   main: path.join(__dirname, '../src/index.js'), // 指定入口，可以指定多个。参考webpack文档
  // },

  entry: {
    app: __DEV__ ? [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9090',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '../src/index.jsx'),
    ] : ['babel-polyfill',
      path.resolve(__dirname, '../src/index.prod.js')],
    vendor: ['react', 'react-dom', 'babel-polyfill'],
  },

  output: {
    path: path.join(__dirname, '../dist'), // bundle生成(emit)到哪里
    // filename: "bundle.js", // bundle生成文件的名称
    filename: 'app/[name]_[hash:16].js', // 打包后文件
  },
  resolve: { // 指定第三方库目录，减少webpack寻找时间
    modules: [path.resolve(__dirname, '../node_modules')],
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
  devtool: config.compiler_devtool,
};

webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../index.html'),
    inject: true,
    chunks: 'app',
    excludeChunks: ['main'],
    // 压缩选项
    minify: {
      collapseWhitespace: true,
    },
  }),
];

if (__DEV__) {
  console.log('Enable plugins for live development (HMR, NoErrors).');
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  );
} else if (__PROD__) {
  console.log('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).');
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        // drop_console: true,
        // drop_debugger: true,
      },
    }),
  );
}

module.exports = webpackConfig;
