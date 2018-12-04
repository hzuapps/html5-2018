var app = getApp()
Page({
  data: {
    addtel: ''
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'addTel',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addtel: res.data
        })
      }
    })
  }
}) 