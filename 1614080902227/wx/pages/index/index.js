//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth:0,
    imgUrls: [
      'http://img0.pcgames.com.cn/pcgames/1809/19/7223032_1.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338932740&di=7be8bb583eca9d84d285a0f98ec8638b&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd89b47363ca61f00848f63086f4a8a9a.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543337618033&di=1f1ea878a88f9129f000ca401fe79065&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Da24f2299412309f7e73aa516473e20c5%2Ffaedab64034f78f01a33adfe7e310a55b3191c86.jpg',
      'https://img.52z.com/upload/news/image/20180505/20180505060619_23197.jpg',

    ],
    indicatorDots : true,
    autoplay : true,
    interval : 2000,
    duration : 500,
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({imageWidth : wx.getSystemInfoSync().windowWidth});
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
