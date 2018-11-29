// pages/vote2/vote2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: [],
    optiona1: [],
    optionb1: [],
    optionc1: [],
    optiond1: []

  },
  gotovote: function () {
    wx.switchTab({
      url: '../vote/vote',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      title1: wx.getStorageSync("title_key1")
    })
    console.log(this.data.title1)
    this.setData({
      optiona1: wx.getStorageSync("optiona_key1")
    })
    this.setData({
      optionb1: wx.getStorageSync("optionb_key1")
    })
    this.setData({
      optionc1: wx.getStorageSync("optionc_key1")
    })
    this.setData({
      optiond1: wx.getStorageSync("optiond_key1")
    })

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