module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 75,//设计稿的宽度/10
        unitPrecision: 5,
        selectorBlackList: ['font-size'],
        propList: ['*']
      }
    }
  };