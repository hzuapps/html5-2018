// pages/person/person.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress: 0,
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  downLoad: function () {
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    })
    const downloadTask = wx.downloadFile({
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543951471575&di=22dd72b822d04dc9750cf31f407720e6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180727%2Ffba62464a0d042c8aec4d7565336e05d.jpeg",
      success: function (res) {
        
        console.log(res);
        var rr = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: rr,
          success(res) {
            wx.showToast({
              title: '已保存到相册',
              icon: 'success',
              duration: 2000
            })
            this.setData({
              progress: 0
            })
          }
        })
      }
    })
    downloadTask.onProgressUpdate((res) => {
      this.setData({
        progress: res.progress
      })
    });
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