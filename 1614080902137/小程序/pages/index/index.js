//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  //事件处理函数
  login: function(){
    // wx.navigateTo({
    //   url: '../../pages/logs/logs'
    // })
    wx.switchTab({
      url: '../../pages/main/main'
    })
  }
})
