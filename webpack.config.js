var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	
  entry: {
  	index: './src/script/education.js',
  	//vendor: ["react", "react-dom"]
  },

  output: {
    path: __dirname + '/build',
    //filename: 'education_[hash].js'
    filename: 'education.js',
    publicPath: "/build",
    //chunkFilename: '[name].[chunkhash:5].chunk.js',
    chunkFilename: "[name].js" //用[name]可以自动生成动态路由名称对应的js文件
  },
  
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 9000,
    historyApiFallback: false,
    proxy: {
      '/api': {
        target: 'http://dev2.3-api.zuren8.com/',
        pathRewrite: {'^/api': ''},
        changeOrigin: true
      }
    }
  },
  
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }
    ]
  },
  
  plugins: [
  	/*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),*/
  
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: '启创卓越'
    }),
    
    new ExtractTextPlugin({
      //filename: 'education_[hash].css',
      filename: 'education.css',
      disable: false,
      allChunks: true
    }),
    
    /*new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    }),*/
    
    /*new webpack.optimize.CommonsChunkPlugin({ //对指定的chunks进行公共模块的提取 多个 html共用一个js文件(chunk)
        names: 'vendor', //manifest是为了解决vendor再次编译的问题
        filename: 'vendor.js'
	}),*/
  ],
  
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux',
    "jquery": 'window.$'
  }
  
}


//安装node-sass
//npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass