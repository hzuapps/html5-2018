// pages/mission/mission_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    month:{},
    day:{},
    name:{}
  },
  dabaojianbtn : function(e){
    
    wx.navigateTo({
      url: '/pages/mission_2/mission_2'
    })
  },
  fazhangbtn : function(e){
    var that = this;
    
    wx.request({
      url: 'http://localhost:8080/MyWeb/serverlet_toupdate',
      data: {
        name: that.data.name
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {


      },
      fail: function (res) {

      }
    })
    wx.navigateTo({
      url: '/pages/mission_3/mission_3',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var month = wx.getStorageSync('month');
    var day = wx.getStorageSync('day');
    var name = wx.getStorageSync('name');
    this.setData({
      month:month,
      day:day,
      name:name
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