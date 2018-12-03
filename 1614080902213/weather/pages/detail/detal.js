// pages/detail/detal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    district: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var siteList = JSON.parse(options.siteList)
    for (var i = 0; i < siteList.length; i++) {
      var site = siteList[i];
      site.siteStatus = this.cal(site);
    }
    this.setData({
      siteList
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

  },

  color(percent) {
    var status
    if (percent < 20)
      status = "good";
    else if (percent < 40)
      status = "normal";
    else if (percent < 60)
      status = "medium"
    else
      status = "wrong"
    return status
  },

  onReady: function () {
  },
  chargeBg(status) {
    var bg
    if (status === "good")
      bg = "#66CC00"
    else if (status === "normal")
      bg = "#2db7f5"
    else if (status === "medium")
      bg = "#ff9900"
    else
      bg = "#ed3f14"
    return bg
  },
  cal(item) {
    var status = new Map();
    status.pm2_5_percent = (item.pm2_5 / 250.0 * 100).toFixed(2);
    status.pm2_5_status = this.color(status.pm2_5_percent)
    status.pm10_percent = (item.pm10 / 500.0 * 100).toFixed(2);
    status.pm10_status = this.color(status.pm10_percent)
    status.co_percent = (item.co / 90.0 * 100).toFixed(2);
    status.co_status = this.color(status.co_percent)
    status.o3_percent = (item.o3 / 800.0 * 100).toFixed(2);
    status.o3_status = this.color(status.o3_percent)
    status.no2_percent = (item.no2 / 2500.0 * 100).toFixed(2);
    status.no2_status = this.color(status.no2_percent)
    status.so2_percent = (item.so2 / 800.0 * 100).toFixed(2);
    status.so2_status = this.color(status.so2_percent)
    status.aqi_percent = (item.aqi / 300.0 * 100).toFixed(2);
    status.aqi_status = this.color(status.aqi_percent)
    status.bg = this.chargeBg(status.aqi_status)
    return status
  }
})