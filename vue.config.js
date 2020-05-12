module.exports = {
  lintOnSave:false,

  //配置src别名
  configureWebpack:{
    resolve:{
      alias:{
        // 这里需要用单引号
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },

  //配置icon图标
  pwa: {
    iconPaths: {
        favicon32: './mallLogo.png',
        favicon16: './mallLogo.png',
        appleTouchIcon: './mallLogo.png',
        maskIcon: './mallLogo.png',
        msTileImage: './mallLogo.png'
    }
  },

  //取消eslint校验
  devServer: {
    overlay:{
        warning:false,
        errors:false
    },
  }
}