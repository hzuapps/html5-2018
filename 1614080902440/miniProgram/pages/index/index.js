//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    routers: [
      {
        name: '小学语文',
        url:'/pages/index/index',
        icon: '/pages/images/chinese.png'
      },
      {
        name: '小学数学',
        url: '/pages/index/index',
        icon: '/pages/images/math.png'
      },
      {
        name: '小学英语',
        url: '/pages/index/index',
        icon: '/pages/images/english.png'
      },
      {
        name: '初中语文',
        url: '/pages/index/index',
        icon: '/pages/images/chinese.png'
      },
      {
        name: '初中数学',
        url: '/pages/index/index',
        icon: '/pages/images/math.png'
      },
      {
        name: '初中英语',
        url: '/pages/index/index',
        icon: '/pages/images/english.png'
      },
      {
        name: '高中语文',
        url: '/pages/index/index',
        icon: '/pages/images/chinese.png'
      },
      {
        name: '高中数学',
        url: '/pages/index/index',
        icon: '/pages/images/math.png'
      },
      {
        name: '高中英语',
        url: '/pages/index/index',
        icon: '/pages/images/english.png'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
