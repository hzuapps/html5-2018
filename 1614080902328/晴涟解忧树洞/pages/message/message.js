// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    textArea: '',
    penName: ''
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

  },

  /*
  *提交表单后的存储事件
  */

  submit:function(e){

    console.log(e.detail.value);
    //表单数据
    var objData = e.detail.value;
    if (objData.title && objData.textArea && objData.penName) {
      //异步方式储存表单数据
      wx.setStorage({
        key: 'title',
        data: objData.title,
      })
      wx.setStorage({
        key: 'textArea',
        data: objData.textArea,
      })
      wx.setStorage({
        key: 'penName',
        data: objData.penName,
      })
      wx.navigateTo({
        url: '../../pages/index2/index2',
      })
    }
   
  }
})