//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    history:'Hello!小老弟',
    abc:null
  },
  clickBtn: function () {
    this.setData({
      abc: this.data.history,
    })
    this.setData({
      history: this.data.abc +' \n ' + getApp().globalData.userInfo 
    })
  },
  onLoad: function () {
    this.setData({
      abc:history,
      history: getApp().globalData.userInfo
    })
  }
})
