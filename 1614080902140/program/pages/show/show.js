//shows.js
const util = require('../../utils/util.js')

Page({
  data: {
    img10:"../index/1.jpg",
    btn2: "发起抽奖",
    logs: []
  },
  Upload1: function () {
    this.setData({
      btn2: "已发起"
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },


doUpload: function () {
  var that = this

wx.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success(res) {
    // tempFilePath可以作为img标签的src属性显示图片
    var filePath = res.tempFilePaths[0]
    that.setData({
      img10: filePath
    })
  }
})
},

btn: function() {
  wx.previewImage({
    current: this.data.img10,
    urls: [this.data.img10]
  })
},
})