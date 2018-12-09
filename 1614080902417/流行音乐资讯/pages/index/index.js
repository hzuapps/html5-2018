//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageUrl: "http://wx2.sinaimg.cn/large/005uIDksly1fvjdm83r38j31mg0wwwpt.jpg",
    imageUrl1:"http://wx1.sinaimg.cn/large/006W1EIply1fxifgaa9qyj30xc0irgo4.jpg",
    imageUrl2:"http://wx3.sinaimg.cn/large/a7d6205fly1fxb5uduqnij20u00u0jy7.jpg",
    imageUrl3:"http://wx4.sinaimg.cn/large/a7d6205fly1fxb5uebz4aj20u00u0dq9.jpg"
  },
  jump:function(option){
    wx.navigateTo({
      url: '../album/album',
    })

  },
  //事件处理函数
  formSubmit: function (e) {
    var adds = e.detail.value;
        adds.openid = 11;
    wx.request({
      url: '',
      data: adds,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {// 设置请求的 header
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(JSON.stringify(res.data))
      },
      fail: function (res) {
        console.log('cuowu' + ':' + res)
      }
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
