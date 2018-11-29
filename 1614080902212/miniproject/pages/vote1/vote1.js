// pages/vote1/vote1.js
Page({
  data: {
    title: [],
    optiona: [],
    optionb: [],
    optionc: [],
    optiond: []
  },
  gotovote: function(){
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
      title: wx.getStorageSync("title_key")
    })
    console.log(this.data.title)
    this.setData({
      optiona: wx.getStorageSync("optiona_key")
    })
    this.setData({
      optionb: wx.getStorageSync("optionb_key")
    })
    this.setData({
      optionc: wx.getStorageSync("optionc_key")
    })
    this.setData({
      optiond: wx.getStorageSync("optiond_key")
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