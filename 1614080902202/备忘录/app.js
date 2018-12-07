App({
  onLaunch: function () {

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    wx.login({
      success: res => {

      }
    })

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {

          wx.getUserInfo({
            success: res => {

              this.globalData.userInfo = res.userInfo


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
}
)