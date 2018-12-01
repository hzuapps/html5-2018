// pages/SelectJob/selectjob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'',
      mission:''
  },
  bindKeyInput: function (e) {
    this.setData({
      name: e.detail.value
    })
    
  },
  makesurebtn : function(e){
    var that = this;
    
    wx.request({
      url: 'http://localhost:8080/MyWeb/serverlet_getmission',
      data: {
        name: that.data.name
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          mission: res.data.mission
        })
        wx.navigateTo({
          url: '/pages/mission_' + that.data.mission + '/mission_' + that.data.mission
        })
      }
    })
    
    
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