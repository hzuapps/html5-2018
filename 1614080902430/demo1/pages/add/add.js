// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    searchinput:'',
    notes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.getUserInfo({
        success: function (info) {
          that.setData({
            nickName: info.userInfo.nickName
          })
        }
      })
  },
  
  formSubmit:function(e){
    var that = this;
    // console.log(e.detail.value.textarea0);
    var obj = e.detail.value.textarea0;
    if (obj!=''){
      that.data.notes.push(obj);
    }
   
    var update = that.data.notes;
    // console.log(update);
    wx.setStorage({
      key: "update",
      data: update
    }),
      wx.switchTab({
        url: '../index/index'
      }),
      that.setData({
      searchinput: ''
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
})