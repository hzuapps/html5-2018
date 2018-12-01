// pages/set/set.js
Page({

  data: {

  },

  out: function(){
    if(getApp().loginer == "admin"){
      wx.reLaunch({
        url: '../admin/admin'
      })
    }else{
      wx.reLaunch({
        url: '../index/index'
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})