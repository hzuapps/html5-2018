// pages/GameSave/gamesave.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    life:{},
    attack:{},
    denfense:{}
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/MyWeb/miniprogramserverlet2',
      data: {
        
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          life: res.data.life,
          attack:res.data.attack,
          denfense:res.data.denfense
        })
      },
      fail: function (res) {
        console.log("no");
      },
      
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