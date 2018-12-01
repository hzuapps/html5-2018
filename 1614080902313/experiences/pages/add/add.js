// pages/add/add.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    addre:'',
    long:'',
    lat:'',
    time:'',
    text:'',
    sum:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getaddres:function(e){
    //this.data.addre = e.detail.value
    this.setData({addre:e.detail.value})
    //console.log(this.data.addre)
  },
  getlong: function (e) {

  },
  getlat: function (e) {

  },
  gettime: function (e) {
    //this.data.time = e.detail.value
    this.setData({ time: e.detail.value })
    //console.log(this.data.time)
  },
  gettext: function (e) {
    //this.data.text = e.detail.value
    this.setData({ text: e.detail.value })
    //console.log(this.data.text)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getCenterLocation: function (){
    var that = this;
    wx.chooseLocation({
      success:function(res){
      //  console.log(res.address)
        that.setData({ addre: res.address})
        //that.addre = res.address
       // console.log(res.longitude)
        that.setData({ long: res.longitude })
      //  console.log(res.latitude)
        that.setData({ lat: res.latitude })
      }
    })
  },
  formSubmit:function(){
    //var that = this;
    try {
      
      let arr = wx.getStorageSync("test1") || [];
      arr.push(this.data.addre)
      arr.push(this.data.long)
      arr.push(this.data.lat)
      arr.push(this.data.time)
      arr.push(this.data.text)
      wx.setStorageSync("test1" + wx.getStorageSync('allsum'), arr)

    } catch (e) { }
    
    var allsum = wx.getStorageSync('allsum')
    var allsum2 = ++allsum
    wx.setStorageSync('allsum', allsum2)
    var sum = wx.getStorageSync('sum')
    var sum2 = ++sum
    wx.setStorageSync('sum', sum2)
    
    wx.switchTab({
      url: '../index/index'
    })
    wx.setStorageSync('tion', true)
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
    wx.stopPullDownRefresh()
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
