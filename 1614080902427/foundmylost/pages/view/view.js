// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: -1,
    profileUrl: '',
    username: '',
    publishTime: 0,
    lostTime: 0,
    text: '',
    location: '',
    phoneNumber: '',
    images: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    options.uid = parseInt(options.uid)
    const list = wx.getStorageSync('list')
    if (!list) {
      wx.navigateBack({
        delta: 1
      })
      return
    }
    const item = list.find((val) => val.uid === options.uid)
    if (!item) {
      wx.navigateBack({
        delta: 1
      })
      return
    }
    this.setData(item)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})