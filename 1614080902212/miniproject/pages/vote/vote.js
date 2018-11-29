// pages/vote/vote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: [],
    title_key: "",
    optiona: [],
    optiona_key: "",
    optionb: [],
    optionb_key: "",
    optionc: [],
    optionc_key: "",
    optiond: [],
    optiond_key: "",

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
  gotovote1:function(){

    
    wx.navigateTo({
      url: "../vote1/vote1"
    })
  },
  gotovote2: function () {


    wx.navigateTo({
      url: "../vote2/vote2"
    })
  },

  onLoad: function (options) {      
  },
  onReady: function () {
  },

  clear_1: function () {
    wx.clearStorage();
    this.setData({
      title: "",
      optiona:'',
      optionb: '',
      optionc: '',
      optiond: '',
      title1: "",
      optiona1: '',
      optionb1: '',
      optionc1: '',
      optiond1: '',
    });
  },

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

    this.setData({
      title1: wx.getStorageSync("title_key1")
    })
    console.log(this.data.title)
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