const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '../app/client/index.js'),      // spa，只有一个入口，只需设置一个 entry 就行
    vendor: ['vue', 'vue-router', 'axios', 'element-ui', 'moment'],
  },
  output: {
    path: path.join(__dirname, '../app/public/dist/dev/'),
    publicPath: '/public/dist/dev/',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      // vue loader
      // docs: https://vue-loader.vuejs.org/en/
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: [
          // 只对业务代码进行babel，加快webpack打包速度
          path.resolve(__dirname, '../app/client'),
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader'],
      },
      // 字体icon文件的loader
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      // 图片素材loader
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  // output 在各个环境配置里各自设置
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css'],
    alias: {
      // solve the vue2 runtime problem (https://github.com/vuejs-templates/webpack/issues/215)
      vue: 'vue/dist/vue.js',
      $common: path.resolve(__dirname, '../app/client/components/common'),
    },
  },
  plugins: [
    // 把第三方库暴露到window context下
    new webpack.ProvidePlugin({
      // 因为部分第三方插件需要传入jQuery作为参数，比如 jsonview
      $: 'jquery',
      jQuery: 'jquery',
      axios: 'axios',
      Vue: 'vue',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../app/view/dist/index.tpl'),
      template: path.join(__dirname, '../app/view/template.tpl'),
    }),
    /**
     * 把js文件打包成3种类型：
     * 1. vendor: 第三方lib库，基本不会改动，除非依赖版本升级
     * 2. common: 业务组件代码的公共部分抽取出来，改动较少
     * 3. app: 不同页面里业务组件代码的差异部分，会经常改动
     *
     * 这样分的好处是尽量按改动频率来区分，利用好浏览器缓存
     * workaround: https://github.com/webpack/webpack/issues/1943
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],
  // 避免某些第三方库使用了 fs，在 browser 端 build 会报错
  node: {
    fs: 'empty',
  },
};
