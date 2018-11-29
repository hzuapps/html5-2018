// pages/fvote/fvote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018-11-26",
    time: "12:01",
    title: [],
    title_key:"",
    optiona:[],
    optiona_key:"",
    optionb: [],
    optionb_key: "",
    optionc: [],
    optionc_key: "",
    optiond: [],
    optiond_key: ""
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
    
    this.setData({ title_key: e.detail.value })
  },
  option_a: function (e) {
    this.setData({ optiona_key: e.detail.value })
  },
  option_b: function(e){
    this.setData({optionb_key:e.detail.value})
  },
  option_c: function (e) {
    this.setData({ optionc_key: e.detail.value })
  },
  option_d: function (e) {
    this.setData({ optiond_key: e.detail.value })
  },
  

  
  
  //保存参数
  changetovote: function () {
    if (wx.getStorageSync("title_key")) {
      this.data.title = wx.getStorageSync("title_key")
    }
    this.data.title = [this.data.title_key].concat(this.data.title)
    this.setData({
      title:this.data.title,
      title_key:''
    })
    wx.setStorageSync('title_key', this.data.title)

    if (wx.getStorageSync("optiona_key")) {
      this.data.optiona = wx.getStorageSync("optiona_key")
    }
    this.data.optiona = [this.data.optiona_key].concat(this.data.optiona)
    this.setData({
      optiona: this.data.optiona,
      optiona_key: ''
    })
    wx.setStorageSync('optiona_key', this.data.optiona)

    if (wx.getStorageSync("optionb_key")) {
      this.data.optionb = wx.getStorageSync("optionb_key")
    }
    this.data.optionb = [this.data.optionb_key].concat(this.data.optionb)
    this.setData({
      optionb: this.data.optionb,
      optionb_key: ''
    })
    wx.setStorageSync('optionb_key', this.data.optionb)

    if (wx.getStorageSync("optionc_key")) {
      this.data.optionc = wx.getStorageSync("optionc_key")
    }
    this.data.optionc = [this.data.optionc_key].concat(this.data.optionc)
    this.setData({
      optionc: this.data.optionc,
      optionc_key: ''
    })
    wx.setStorageSync('optionc_key', this.data.optionc)

    if (wx.getStorageSync("optiond_key")) {
      this.data.optiond = wx.getStorageSync("optiond_key")
    }
    this.data.optiond = [this.data.optiond_key].concat(this.data.optiond)
    this.setData({
      optiond: this.data.optiond,
      optiond_key: ''
    })
    wx.setStorageSync('optiond_key', this.data.optiond)



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