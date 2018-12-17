// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   orderList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var fa = this;

    var cookie = wx.getStorageSync("cookieKey");
    if (cookie) {
      var header = { "Content-Type": "application/x-www-form-urlencoded", 'Cookie': cookie }
    }
    else { var header = { "Content-Type": "application/x-www-form-urlencoded" } }

    wx.request({
      url: 'http://www.playrust.shop/user/GetOrderDetail',
      header: header,
      method: "POST",
      success: function(res)
      {
        if (typeof (res.data) == 'string' && res.data.includes("请重新登录")) {
          wx.switchTab({
            url: '/pages/login/login',
          })
        }
        else 
        {
          fa.setData({
            orderList: res.data
          })
        }
      }
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