//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    list: [{
        profileUrl: `../../imgs/132.jpg`,
        username: '做好事不留名',
        publishTime: new Date().toLocaleString(),
        text: `求助：我的钥匙掉了，时间大概是早上8点，地点是学校的旧篮球场，如果有捡到的同学希望 ...`,
        location: 'XXX 大学饭堂2楼',
        images: [`../../imgs/key-4.jpg`, `../../imgs/key-2.jpg`, `../../imgs/key-3.jpg`, `../../imgs/key-1.jpg`, ]
      },
      {
        profileUrl: '../../imgs/leifeng.jpg',
        username: '学雷锋',
        publishTime: new Date().toLocaleString(),
        text: `我在饭堂2楼捡到一把钥匙 ，请失主看到后跟我联系，我的联系方式是...`,
        location: '饭堂2楼',
        images: [`../../imgs/key-2.jpg`, ]
      },

      {
        profileUrl: '../../imgs/leifeng.jpg',
        username: '学雷锋',
        publishTime: new Date().toLocaleString(),
        text: `我在饭堂2楼捡到一把钥匙 ，请失主看到后跟我联系，我的联系方式是...`,
        location: '饭堂2楼',
        images: [`../../imgs/key-2.jpg`,]
      }
    ],
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
  onLoad: function() {
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