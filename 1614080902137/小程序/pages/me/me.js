// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  changePassword: function(){
    wx.navigateTo({
      url: 'changePassword/index',
    })
  }

})