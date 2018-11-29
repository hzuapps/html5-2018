//index.js
//获取应用实例
var app = getApp()
Page({
  data: {


    navItems: [
      {
        name: '现点',
        url: 'dishes'
      },
      {
        name: '外卖',
        url: 'take',
        isSplot: true
      },
      {
        name: '外带',
        url: 'out'
      },
      {
        name: '购物车',
        url: 'bill'
      },
      {
        name: '订单',
        url: 'bill',
        isSplot: true
      },
      {
        name: '店铺简介',
        url: 'jianjie'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }

})
