// pages/menu1/menu.js

const app = getApp()

Page({

  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    food1: null,
    juice1: null,
    food3: wx.getStorageSync('hotdog'),
    juice3: wx.getStorageSync('juice'),

  },
  //事件处理函数
  /*
  hotdog: function (e) {
    this.setData({
      food1: e.detail.value,
    });

  },
  juice: function (e) {
    this.setData({
      juice1: e.detail.value,
    });
    
},
*/
  yes: function () {
    if (this.data.food1 == null) { this.data.food1 = wx.getStorageSync('hotdog'); }
    if (this.data.juice1 == null) { this.data.juice1 = wx.getStorageSync("juice"); }
    var a1 = this.data.food1;
    var a2 = this.data.juice1;
    wx.setStorageSync('hotdog', a1);
    wx.setStorageSync('juice', a2);
  },
  
  bindViewTap: function () {
    wx.navigateTo({
      url:'../logs/logs' 
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


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

