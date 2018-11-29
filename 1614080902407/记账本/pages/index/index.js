//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    time: [{
      day: '2018年11月24日'
    }],
    all: 0,
    timeicon: "../../images/3.png",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [{
      flag: "支出",
      message: '餐饮',
      money: 11,
      icon: "../../images/1.png"
    }, {
      flag: "支出",
      message: '交通',
      money: 2,
      icon: "../../images/2.png"
    }, {
      flag: "支出",
      message: '餐饮',
      money: 10,
      icon: "../../images/1.png"
    }]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jumpBtn: function(options) {
    wx.navigateTo({
      url: '../xinjian/xinjian', //+号 跳转
    })
  },
  onShow: function() {
    var data = wx.getStorageSync('array')
    if (data != null) {
      this.setData({
        array: data //读取缓存
      })
    }
    this.setData({
      all: 0
    })
    const length = this.data.array.length 
    for (let i = 0; i < length; i++) { 
      this.data.all = this.data.all + this.data.array[i].money  //计算总支出
    }
    this.setData({
      all: this.data.all
    })
  },
  onLoad: function() {
    wx.setStorageSync('array', this.data.array)
    var util = require('../../utils/util.js')
    var TIME = util.formatTimeday(new Date())
    this.data.time[0].day = TIME
    this.setData({
      time: this.data.time, //计算时间
    });
    
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})