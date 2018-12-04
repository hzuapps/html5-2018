//logs.js
const util = require('../../utils/util.js')


Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

  },

  formSubmit: function (e) {
    var adds = e.detail.value;
    wx.showModal({
      content: '提交成功',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    }),
      wx.request({
        url: 'http://localhost:133/',

        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        data: adds,
        header: {// 设置请求的 header
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success: function (res) {
          console.log(JSON.stringify(e.detail.value))
        },
              fail: function (res) {
          console.log('cuowu' + ':' + res)
        }
      })
  },

})
