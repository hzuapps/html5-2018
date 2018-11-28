// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sta: true,
    lock: false
  },
  switchChange: function (e) {
    const fileSys = wx.getFileSystemManager()
    if (e.detail.value) {
      fileSys.unlinkSync(`${wx.env.USER_DATA_PATH}/tip`)
    } else {
      fileSys.writeFileSync(`${wx.env.USER_DATA_PATH}/tip`, 'ture', "utf8")
    }
  },
  switchChangeLock: function (e) {
    if (e.detail.value) {
      wx.showModal({
        content: '需设置下方进入密码，否则操作无效',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
      this.setData({
        lock: true
      })
    } else {
      this.setData({
        lock: false
      })
      try {
        wx.removeStorageSync('locker_password')
      } catch (e) {
        // Do something when catch error
      }
    }
  },
  staShow() {
    //加载状态
    const fileSys = wx.getFileSystemManager()
    try {
      fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/tip`, "utf8")
      this.setData({
        sta: false
      })
    } catch (e) {
      this.setData({
        sta: true
      })
    }
  },
  lockShow() {
    let pwd = wx.getStorageSync('locker_password') || '';
    if (pwd == '') {
      this.setData({
        lock: false
      })
    } else {
      this.setData({
        lock: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.staShow()
    this.lockShow()
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
    this.lockShow()
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