// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: "none",
    countries:[
      "选择","顺丰"
    ]
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
    // wx.showNavigationBarLoading()
    // //模拟加载
    // setTimeout(function () {
    //   // complete

    // }, 1500);
    // this.setData({ display: 'display' })
    // wx.hideNavigationBarLoading() //完成停止加载
    // wx.stopPullDownRefresh() //停止下拉刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (order) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  hideButton: function () {
    this.setData({ display: "none" })
    console.log("隐藏按钮")
  },

  showButton: function () {
    this.setData({ display: "display" })
    console.log("显示按钮")
  },

  bindKeyInput(e) {
    //这里设置全局变量inputValue为e.detail.value当前对象的值
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue);
  },

  kuaidiquery() {
    console.log("输入单号：")
    console.log(this.data.inputValue);
    var that = this;
    console.log(that);
    //这里调用app里面的接口函数，并使用回调函数将数据传回
    app.getkuaidi(this.data.inputValue, function (data) {
      console.log("getkauidi函数回调：");
      console.log(data);
      that.setData({
        inputinfo: data
      });
      console.log(that.data.inputinfo);
    })
  }
})