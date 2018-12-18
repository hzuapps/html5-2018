//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    top: '啥也别说了，先点热狗吧',
    hotdog: '吃热狗：',
    drink: '喝饮料：',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hiddenmodalput: false,
    rich: false,
    poor: false,
    poor1: true,
    rich1: true,
    a: wx.getStorageSync('hotdog'),
    b: wx.getStorageSync('juice'),

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    this.setData({
      hiddenmodalput: true
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
  },
  showok1: function (e) {
    var that = this;
    that.data.a = wx.getStorageSync('hotdog').split(',');
    that.data.b = wx.getStorageSync('juice').split(',');
    console.log(that.data.a);
    console.log(that.data.b);
    var c1 = Math.floor(Math.random() * (that.data.a.length - 1));
    var c2 = Math.floor(Math.random() * (that.data.b.length - 1));

    console.log(that.data.a[c1]);
    console.log(that.data.b[c2]);
    this.setData({
      poor: true,
      poor1: false,
      rich1: false,
      food1: that.data.a[c1],
      drink1: that.data.b[c2],
    })
  },
  showok2: function () {
    var that = this;
    var c1 = Math.floor(Math.random() * (that.data.a.length - 1));
    console.log(that.data.a[c1]);
    this.setData({
      rich: true,
      poor: false,
      poor1: false,
      rich1: true,
      food1: that.data.a[c1],
    })
  },
  return2: function () {
    var that = this;
    this.setData({
      rich: false,
      poor: false,
      poor1: true,
      rich1: true,
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
