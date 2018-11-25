//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    tp_zhihu: "../../images/知乎.png",
    tp_zhihuRB: "../../images/知乎日报.png",
    tp_guokeJX: "../../images/果壳精选.png",
    tp_doubanYD: "../../images/豆瓣阅读.png",
    tp_one: "../../images/一个.png",
    tp_moment: "../../images/片刻.png",
    tp_CSDN: "../../images/CSDN.png",
    tp_IT: "../../images/IT之家.png",
    tp_haoqixin: "../../images/好奇心日报.png",
    tp_see: "../../images/看见独立志.png",
    tp_bee: "../../images/蜂蜜精读.png",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
