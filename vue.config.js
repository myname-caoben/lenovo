module.exports={
  css: {
    // extract:false,//css分离 生产环境下是 true，开发环境下是 false
    // modules: true, //开启css模块化
    
    loaderOptions:{//重写 loader
      sass: {
        // data: `@/assets/css/base.scss`		//sass-loader V7
        prependData: `   
          @import "@/assets/scss/the-me.scss";
        `
      }
    }
  },
  devServer:{//开发环境设置
    // host: '0.0.0.0',//IP地址地址
    open: true,//开浏览器
    // https: false,//开启https请求
    // proxy: null, // string | Object  //客户端代理
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api
        target:'http://localhost:3001',
        changeOrigin:true,//创建虚拟服务器
        ws:true,//websocket代理
      },
      '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2 == target + /v2
        }
      }
    },

    overlay: {
      warnings: true,//eslint错误输出到浏览器
      errors: true
    }

  },

  lintOnSave:false, //关闭esling警告（开发+打包生产)
  // lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用
  productionSourceMap:false, //打包不携带map文件
}
