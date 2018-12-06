// pages/resume/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curId: 2,
    listInfo: [
      {
        text: '我',
        clas: 'icon-my'
      },
      {
        text: '教育',
        clas: 'icon-jiaoyu ',
        
      },
      {
        text: '联系',
        clas: 'icon-lianxi1 footer-select',
        clas2: 'footer-select'
      },
    ] 
  },
  Navigation: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index + "" + this.data.curId);
    if (this.data.curId != index) {
      if (index == 0) {
        wx.redirectTo({
          url: '../resume',
        })
      }
      else {
        wx.redirectTo({
          url: '../edu/edu',
        })
      }
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