//logs.js
var app = getApp()
Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addbtn: function () {
    if (this.data.inputValue) {
      wx.redirectTo({
        url: '../test/test'
      })
      wx.setStorage({
        key: "addTel",
        data: this.data.inputValue
      })
    } else {
      wx.showModal({
        title: '手机号为空',
        content: '请输入手机号码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onload: function () {
    //onload
  }

})