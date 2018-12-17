//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pageList: [
      {
        url: '/pages/income/income',
        name: '收入总览'
      },
      {
        url: '/pages/line/index',
        name: '近一周统计'
      },
      {
        url: '/pages/detail/detail',
        name: '查看流水'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({ 
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  goToLoginPage: function()
  {
    wx.navigateTo({
      url: '/pages/line/index',
    }) 
  },

  open: function(e)
  {
    console.log(e.target.dataset)
    wx.navigateTo({
      url: e.target.dataset.chart.url,
    })
  }


})
