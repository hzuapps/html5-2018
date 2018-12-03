//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/img/see8.jpg',
      '/img/timg1.jpg',
      '/img/timg2.jpg',
      '/img/timg3.jpg',
      '/img/timg5.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
   
  },
  //设置跳转按钮1
  jumpBtn1:function(options){
   wx.navigateTo({
     url: '../see1/see1'
   })
  },
  //设置跳转按钮2
  jumpBtn2: function (options) {
    wx.navigateTo({
      url: '../see1/see2'
    })
  },
  //设置跳转按钮3
  jumpBtn3: function (options) {
    wx.navigateTo({
      url: '../see1/see3'
    })
  },
  //设置跳转按钮4
  jumpBtn4: function (options) {
    wx.navigateTo({
      url: '../see1/see4'
    })
  }

})
