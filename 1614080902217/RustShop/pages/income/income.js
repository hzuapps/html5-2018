// pages/income/income.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  totalIncome: 0,
  totalCount: 0,
  durationIncome: 0,
  durationCount: 0,
  cleanMoney: 0,
  notCleanMoney: 0
  },

  updateData: function (res) {

    this.setData({
      totalIncome: res.data.ttotalPrice,
      totalCount: res.data.ttotalCount,
      durationIncome: res.data.totalPrice,
      durationCount: res.data.totalCount
    })

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

    console.log("header=" + JSON.stringify(header))

    wx.request({
      url: 'http://www.playrust.shop/user/GetSellCount',
      header: header,
      method: "POST",
      success: function (res) {
        if (typeof (res.data) == 'string' && res.data.includes("请重新登录")) {
          wx.switchTab({
            url: '/pages/login/login',
          })
        }

        else
        fa.setData({
          totalIncome: res.data.ttotalPrice,
          totalCount: res.data.ttotalCount,
          durationIncome: res.data.totalPrice,
          durationCount: res.data.totalCount
        })
        
      }
    })

    wx.request({
      url: 'http://www.playrust.shop/user/CalCleanMoney',
      header: header,
      method: "POST",
      success: function (res) {

        fa.setData({
          cleanMoney: res.data
        })

      }
    })

    wx.request({
      url: 'http://www.playrust.shop/user/CalNotCleanMoney',
      header: header,
      method: "POST",
      success: function (res) {

        fa.setData({
          notCleanMoney: res.data
        })

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