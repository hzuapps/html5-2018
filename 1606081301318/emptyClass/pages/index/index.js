//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navList: [
      { name: "周一", id: 1 },
     { name: "周二", id: 2 }, 
     { name: "周三", id: 3 }, 
     { name: "周四", id: 4 }, 
     { name: "周五", id: 5 }, 
     { name: "周六", id: 6 }, 
     { name: "周日", id: 7 }
     ],
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
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
            hasUserInfo: true,
          })
        }
      })
    }
    this.initData();
    this.initDate();
  },

  initData: function () {
    //TODO
  },

  initDate: function () {
    var mydate = new Date();
    var myddy = mydate.getDay();
    this.setData({
      id: myddy,
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


})
