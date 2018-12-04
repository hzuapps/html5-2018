// pages/bookName/bookName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  Storge(e) {
    var name = e.detail.value.name;
    wx.setStorage({
      key: 'inform',
      data: name,
      success: function () {
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }

})