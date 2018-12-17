// pages/look/look.js
var util=require('../../utils/util.js')
Page({
  data: {
   times:[]
  },
  onShow: function (options) {
    this.setData({
      times: wx.getStorageSync("times") || []
    })
  },
  showTopTips: function () {
    wx.switchTab({
      url: '../logs/logs',
    })
  }
})