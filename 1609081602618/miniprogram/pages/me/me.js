// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 'using',
    show: true,
    record: [
      {
        num: '000000000001',
        ctime: '2017-08-14 14:11',
        etime: '2017-08-14 18:11',
        cost: 20
      },
      {
        num: '000000000002',
        ctime: '2017-08-15 14:11',
        etime: '2017-08-16 18:11',
        cost: 202
      },
      {
        num: '000000000003',
        ctime: '2017-08-14 14:11',
        etime: '2017-08-16 18:21',
        cost: 2055
      },
      {
        num: '000000000004',
        ctime: '2017-08-14 14:11',
        etime: '2017-08-11 18:11',
        cost: 2098
      },
      {
        num: '000000000001',
        ctime: '2017-08-14 14:11',
        etime: '2017-08-16 00:11',
        cost: 15
      }
    ]
  },
  //点击正在使用改变 state 为 using
  using() {
    //设置本页data数据
    this.setData({
      state: 'using'
    })
  },
  //点击使用记录改变 state 为 record
  record() {
    this.setData({
      state: 'record'
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
    // 页面显示时从全局的data中获取use1,use2并设置，注意必须在顶部 const app = getApp()
    this.setData({
      use1: app.globalData.use1,
      use2: app.globalData.use2
    })
    // 这段代码实现当使用记录为0时，该板块显示内容为‘无’
    // 其原理是将插座1和插座2合并为一个数组，当两者都为false时即没有插座正在使用时，则显示‘无’
    // wxml 使用的是wx:if 和 wx:else
    let arr = new Array(app.globalData.use1, app.globalData.use2)
    if (arr[0] === false && arr[1] === false) {
      // show 控制着 ‘无’的显示或隐藏
      this.setData({
        show: false
      })
    }
    else {
      this.setData({
        show: true
      })
    }
  },
  //  点击正在使用的插座1跳转到支付页面并携带参数use=1
  use1() {
    wx.navigateTo({
      url: '/pages/pay/pay?use=1'
    })
  },
  // 点击正在使用的插座2跳转到支付页面并携带参数use=2
  use2() {
    wx.navigateTo({
      url: '/pages/pay/pay?use=2'
    })
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
