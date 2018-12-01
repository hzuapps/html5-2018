// pages/costTable/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
    ],
    display: "none",
    from_info: ""
  },
  back: function(){
    wx.switchTab({
      url: '../main/main'
    })
  },
  submit: function(e){
    var id = getApp().costID;
    var objData = e.detail.value;
    var arr = wx.getStorageSync("cost");
    arr[id - 1].cost = objData.changeCost;
    wx.setStorageSync("cost", arr);
    this.setData({
      display: "none",
      from_info: ""
    })
    this.onLoad();
  },
  change: function (e) {
    getApp().costID = e.currentTarget.id;
    this.setData({
      display: "block"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync("cost");
    for (var i = 0; i < arr.length; i++) {
      arr[i].ID = i + 1;
    }
    wx.setStorageSync("cost", arr);
    this.setData({
      routers: wx.getStorageSync("cost")
    })
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