//pages/navigator / navigator.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
      date: '' ,
      name: '' 
  },
  // 时间段选择 
  //显示时间表
  bindDateChange(e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  indexBtn: function () {
    if (this.data.name && this.data.date) {
      wx.switchTab({
        url: '../logs/logs',
      })
      wx.setStorage({
        key: 'addName',
        data: this.data.name,
      })
      wx.setStorage({
        key: 'addDate',
        data: this.data.date,
      })
    } else {
      wx.showModal({
        title: '姓名或者日期为空',
        content: '姓名和日期都不能为空',
        success: function (res) {
          if (res.confirm) {
            console.log('确定添加')
          }
        }
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