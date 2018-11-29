// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time_1: '../../images/clock.png',
    date: "1997-02-16"
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  text_1: function (e) {
    console.log("测试");
    wx.setStorageSync("day", this.data.date);
    wx.switchTab({
      url: "../see/see"
    });
  }
})