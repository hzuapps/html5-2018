// pages/svote/svote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018-11-26",
    time: "12:01",
    title1: [],
    title_key1: "",
    optiona1: [],
    optiona_key1: "",
    optionb1: [],
    optionb_key1: "",
    optionc1: [],
    optionc_key1: "",
    optiond1: [],
    optiond_key1: ""

  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value

    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  searchInputEvent: function (e) {

    this.setData({ title_key1: e.detail.value })
  },
  option_a: function (e) {
    this.setData({ optiona_key1: e.detail.value })
  },
  option_b: function (e) {
    this.setData({ optionb_key1: e.detail.value })
  },
  option_c: function (e) {
    this.setData({ optionc_key1: e.detail.value })
  },
  option_d: function (e) {
    this.setData({ optiond_key1: e.detail.value })
  },




  //保存参数
  changetovote: function () {
    if (wx.getStorageSync("title_key1")) {
      this.data.title1 = wx.getStorageSync("title_key1")
    }
    this.data.title1 = [this.data.title_key1].concat(this.data.title1)
    this.setData({
      title1: this.data.title1,
      title_key1: ''
    })
    wx.setStorageSync('title_key1', this.data.title1)

    if (wx.getStorageSync("optiona_key1")) {
      this.data.optiona1 = wx.getStorageSync("optiona_key1")
    }
    this.data.optiona1 = [this.data.optiona_key1].concat(this.data.optiona1)
    this.setData({
      optiona1: this.data.optiona1,
      optiona_key1: ''
    })
    wx.setStorageSync('optiona_key1', this.data.optiona1)

    if (wx.getStorageSync("optionb_key1")) {
      this.data.optionb1 = wx.getStorageSync("optionb_key1")
    }
    this.data.optionb1 = [this.data.optionb_key1].concat(this.data.optionb1)
    this.setData({
      optionb1: this.data.optionb1,
      optionb_key1: ''
    })
    wx.setStorageSync('optionb_key1', this.data.optionb1)

    if (wx.getStorageSync("optionc_key1")) {
      this.data.optionc1 = wx.getStorageSync("optionc_key1")
    }
    this.data.optionc1 = [this.data.optionc_key1].concat(this.data.optionc1)
    this.setData({
      optionc1: this.data.optionc1,
      optionc_key1: ''
    })
    wx.setStorageSync('optionc_key1', this.data.optionc1)

    if (wx.getStorageSync("optiond_key1")) {
      this.data.optiond1 = wx.getStorageSync("optiond_key1")
    }
    this.data.optiond1 = [this.data.optiond_key1].concat(this.data.optiond1)
    this.setData({
      optiond1: this.data.optiond1,
      optiond_key1: ''
    })
    wx.setStorageSync('optiond_key1', this.data.optiond1)



    wx.switchTab({
      url: "../vote/vote"
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