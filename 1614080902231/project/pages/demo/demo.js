// pages/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phoneInput: '',
    indress: '',
    }
    ,
    // 获取输入手机号
    phoneInput: function (e) {
      this.setData({
        phoneInput: e.detail.value
      })
    },
  // 获取输入地址
    indressInput: function (e) {
    this.setData({
      indress: e.detail.value
    })
  },
    // 提交
    login: function () {
      if (this.data.phoneInput.length == 0 || this.data.indress.length == 0) {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'loading',
          duration: 2000,
          
        })
        this.setData({
          phoneInput: '',
          indress:''
        })
      } else {
        // 这里修改成跳转的页面
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
        this.setData({
          phoneInput: '',
          indress: ''
        })
      }
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