// pages/gift/gift.js
Page({
  data: {
    array: ['/pages/img/no.png', '/pages/img/yes.png'],
    num: 0
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  createNonceStr: function () {
  },
  switch: function () {
    this.setData({
      num: Math.floor(Math.random() * 2)
    })
    console.log("onload" + this.data.num)
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

    this.setData({
      num: Math.floor(Math.random() * 4)
    })
    console.log("onload" + this.data.num)
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