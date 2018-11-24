// pages/main/main.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '电费',
        url: 'cost/cost',
        icon: '../../images/电费.png',
        code: '10'
      },
      {
        name: '报修',
        url: 'repair/repair',
        icon: '../../images/报修.png',
        code: '11'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '10'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '11'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '10'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '11'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '10'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '11'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '10'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
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