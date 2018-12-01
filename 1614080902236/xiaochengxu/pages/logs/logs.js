//logs.js
const util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    logs: [],
    addname: '',
    adddate: ''
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'addName',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addname: res.data
        })
      },
    })
    var that1 = this;
    wx.getStorage({
      key: 'addDate',
      success: function (res) {
        console.log(res.data)
        that1.setData({
          adddate: res.data
        })
      }
    })
  },

  /**onShow:function(){
  var that1 = this;
  wx.getStorage({
  key: 'addDate',
  success: function(res) {
  console.log(res.data)
  that1.setData({
  adddate:res.data
  })
  },
  })
  }*/

  onLoad: function () {
    /** this.setData({
    logs: (wx.getStorageSync('logs') || []).map(log => {
    return util.formatTime(new Date(log))
    })
    })*/
  }
})