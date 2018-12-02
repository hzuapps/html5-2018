// pages/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citycode:null,
    text:null,
    focus:false
  },

  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
    // wx.request({
    //   url: '' + e.detail.value.textarea,//暂无可提交服务器，假设提交是用get方法，将一定字数的textarea拼接在url里提交到服务器
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this//不要漏了这句，很重要
    that.setData({
      citycode: '101280101'
    })
    wx.request({
      url: 'http://t.weather.sojson.com/api/weather/city/'+that.data.citycode,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，分别保存到各个数据中
        that.setData({
          city: res.data.cityInfo.city,
          updateTime: res.data.cityInfo.updateTime,
          shidu: res.data.data.shidu,
          quality: res.data.data.quality,
          wendu: res.data.data.wendu
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

  },

})