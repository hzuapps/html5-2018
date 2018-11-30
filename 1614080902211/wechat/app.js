//app.js
App({
  data: {
    //输入框中的内容（快递单号）
    allLogisticsInfo:[]
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    userInfo: null
  },
  
})