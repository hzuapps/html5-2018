//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    now_date: util.formatDate(new Date()),
    num: '1'
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    /*this.setData({
      now_date:now_date.getTime()+1000
    })*/
    var end_date = new Date("2018/12/15");
    var start_date = new Date();
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if (day > 0) {
      this.setData({
        num: day
      })
    } else {
      wx.showToast({
        image: '/image/error.png',
        title: '日期有误',
      })
      this.onShow()
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /*onLoad: function () {
    /*this.setData({
      now_date:now_date.getTime()+1000
    })
    var end_date = new Date("2018/12/15");
    var start_date = new Date();
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if (day > 0) {
      this.setData({
        num: day
      })
    } else {
      wx.showToast({
        image: '/image/error.png',
        title: '日期有误',
      })
      this.onShow()
    }
  }*/
})
