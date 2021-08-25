const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口
  output: { // 出口
    // 虚拟打包路径 就是说文件不会真正生成,而是在8080端口虚拟生成
    // path: path.resolve(__dirname, 'dist'),
    publicPath: "xuni", // 不会被物理生成
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    // 静态资源文件夹
    contentBase: 'www'
  }
}