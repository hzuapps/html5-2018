// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthorize: false,
    userName: '新用户',
    userInfo: null
  },
  onGotUserInfo(res) {
    let info = res.detail.rawData
    // 点击允许授权按钮
    if (info) {
      this.initUserInfo()
    }
  },
  // 初始化用户信息
  initUserInfo() {
    // 判断用户是否授权了
    wx.getSetting({
      success: (res) => {
        // 已授权
        if (res.authSetting['scope.userInfo']) {
          this.setData({
            isAuthorize: true
          })
          
          // 获取用户数据
          wx.getUserInfo({
            success: (res) => {
              let info = res.userInfo
              //将用户数据缓存一份供其它页面使用
              wx.setStorage({
                key: "userInfo",
                data: info
              })
              if (info) {
                this.setData({
                  isAuthorize: true,
                  userInfo: info
                })
              }
            }
          })

          // 未授权
        } else {
          this.setData({
            isAuthorize: false
          })
        }
      }
    })
    
  },
  // 导航进入tab页
  toNewPw() {
    let pwd = wx.getStorageSync('locker_password') || '';
    if (pwd == ''){
      wx.switchTab({
        url: '/pages/new_pw/new_pw',
      })
    }else{
      wx.redirectTo({
        url: '/pages/lock/lock'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})