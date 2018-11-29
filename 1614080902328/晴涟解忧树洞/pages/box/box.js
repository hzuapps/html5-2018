// pages/box/box.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 三个分别存储标题，内容，笔名
      txt1 : [],
      txt2 : [],
      txt3 : [],
      display2 : 'block',
      num : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断是否有信
    if(this.data.txt1!='')
    {
      this.setData({
        display2: 'block'
      });} 
    else
    {
      this.setData({
        display2: 'none'
      })
      }

    var that = this
    wx.getStorage({
      key: 'title',
      success: function (res) {
        console.log({title:res.data});
        that.setData({ txt1: res.data });
      },
    }),
      wx.getStorage({
      key: 'textArea',
        success: function (res) {
          console.log({ textArea: res.data });
          that.setData({ txt2: res.data })
        },
      }),
      wx.getStorage({
        key: 'penName',
        success: function (res) {
          console.log({ penName: res.data });
          that.setData({ txt3: res.data })
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