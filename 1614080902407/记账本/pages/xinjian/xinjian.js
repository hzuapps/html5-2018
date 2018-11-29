// pages/xinjian/xinjian.js
const app = getApp();
Page({
  data: {},
  formSubmit: function(e) {
    
    const length = this.data.array.length
    this.data.array[length] = e.detail.value
    this.data.array[length].money = parseInt(this.data.array[length].money)
    console.log('form发生了submit事件', e.detail.value)
    wx.setStorageSync('array', this.data.array)
    wx.navigateBack({
      
    })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  /**
   * 页面的初始数据
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var array = wx.getStorageSync('array')
    this.setData({
      array: array
    })
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