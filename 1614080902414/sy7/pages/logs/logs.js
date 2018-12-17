//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    title:[],
    address:[],
    txt: [],
  },
  onPullDownRefresh()
  {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  onLoad: function () {
    var title1 = wx.getStorageSync('title')||[]
    var address1 = wx.getStorageSync('address') || []
    var txt1 = wx.getStorageSync('txt') || []
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      title: title1,
      address: address1,
      txt: txt1
    })
    console.log(this.data.title)
  }
})
