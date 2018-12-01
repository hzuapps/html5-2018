// pages/detail/detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerShow: "none",
    orderNo:"",
    currentCompany: "",
    currentCompanyIcon: "",
    h: wx.getSystemInfoSync().windowHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var no = options.order
    this.setData({
      orderNo: no
      
    })
    this.query()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   footerShow: "display",
      
    // });
    console.log("detail:",app.globalData.orderNo);
    
  },
  query() {
    var that = this
    //这里调用app里面的接口函数，并使用回调函数将数据传回
    // app.getkuaidi(this.data.inputValue, function (data) {
    app.getkuaidi(this.data.orderNo, function (data) {
      console.log("getkuaidi函数回调：\n", data);

      that.setData({
        inputinfo: data,
        currentCompany: app.globalData.currentCompany,
        currentCompanyIcon: app.globalData.currentCompanyIcon
        
      });
      setTimeout(function(){ that.setData({
         footerShow: "display"
      })},500)
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading()
      wx.setNavigationBarTitle({
        title: '快递详情',
      })
      // 停止下拉动作
      wx.stopPullDownRefresh()
    })
  },
  onPullDownRefresh: function () {
    wx.vibrateShort()
    this.setData({
      footerShow:"none"
    })
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: '刷新中',
    })
    this.query()
    
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