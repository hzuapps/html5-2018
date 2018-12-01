// pages/pay/pay.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 支付改变插座状态
  pay() {
    if (this.data.use === 2) {
      app.globalData.use2 = false
    
wx.showToast({
  title: '支付成功',
})
setTimeout(() => {
  wx.navigateBack()
}, 2000)
    }
    else {
  app.globalData.use1 = false
  // 微信支付API
  wx.showToast({
    title: '支付成功',
  })
  setTimeout(() => {
    wx.navigateBack()
  }, 2000)
}

  },
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
  console.log(options)
  // option 可以获取我们传进来的参数，判断是插座1还是插座2
  if (options.use === '1') {
    this.setData({
      chazuo: '1号插座',
      use: 1
    })
  }
  else {
    this.setData({
      chazuo: '2号插座',
      use: 2
    })
  }
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
