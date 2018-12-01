const app = getApp()
Page({

  data: {
    version:"",
    w: wx.getSystemInfoSync().windowWidth
  },

  onLoad: function (options) {

  },

  onReady: function () {
    this.setData({
      version: app.globalData.appVersion
    })
  },
})