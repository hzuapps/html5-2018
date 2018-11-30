//app.js

const list = [{
    uid: 1,
    profileUrl: `../../imgs/132.jpg`,
    username: '做好事不留名',
    publishTime: new Date().toLocaleString(),
    lostTime: new Date().toLocaleString(),
    text: `求助：我的钥匙掉了，时间大概是早上8点，地点是学校的旧篮球场，如果有捡到的同学希望 ...`,
    location: 'XXX 大学饭堂2楼',

    phoneNumber: '1313131313313',
    images: [`../../imgs/key-4.jpg`, `../../imgs/key-2.jpg`, `../../imgs/key-3.jpg`, `../../imgs/key-1.jpg`, ]
  },
  {
    uid: 2,
    profileUrl: '../../imgs/leifeng.jpg',
    username: '学雷锋',
    publishTime: new Date().toLocaleString(),
    phoneNumber: '1313131313313',
    lostTime: new Date().toLocaleString(),
    text: `我在饭堂2楼捡到一把钥匙 ，请失主看到后跟我联系，我的联系方式是...`,
    location: '饭堂2楼',
    images: [`../../imgs/key-2.jpg`, ]
  },

  {
    uid: 3,
    profileUrl: '../../imgs/leifeng.jpg',
    username: '学雷锋',

    phoneNumber: '1313131313313',
    publishTime: new Date().toLocaleString(),
    lostTime: new Date().toLocaleString(),
    text: `我在饭堂2楼捡到一把钥匙 ，请失主看到后跟我联系，我的联系方式是...`,
    location: '饭堂2楼',
    images: [`../../imgs/key-2.jpg`, ]
  }
]

if (!wx.getStorageSync('list')) {
  wx.setStorageSync('list', list)
  wx.setStorageSync('lastUid', list[list.length - 1].uid)
}

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})