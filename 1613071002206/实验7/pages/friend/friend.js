var app=getApp()
Page({
  data: {
    desArr: []
  },
  onLoad: function (options) {
    // wx.clearStorage();
    this.setData({
      desArr: wx.getStorageSync('oldText')
    })
    var arr=wx.getStorageSync('history');
    if(arr.length!=this.data.desArr.length){
      this.setData({
        desArr:arr
      })
    }
    }
}) 