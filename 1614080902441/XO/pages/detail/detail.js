var touchDot = 0//触摸时的原点
var time = 0//  时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = ""// 记录/清理 时间记录
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    pro:null
    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var pro=wx.getStorageSync("pro");
    this.setData({ pro:pro})

    var year = new Date();
    var yyy = year.getFullYear();
    this.setData({ myAge: yyy - 1996 })
    var width = wx.getStorageSync('windowWidth')
    var height = wx.getStorageSync('windowHeight')
    this.setData({ cebianwidth: width / 3.3 + 'px' })
    this.setData({ cebianheight: height / 1.5 + 'px' })
    this.setData({ lineheight: height / 1.5 - 72 + 'px' })
    this.setData({ nameheight: height / 6 + 'px' })
    this.setData({ tittleheight: height / 20 + 'px' })
    this.setData({ infoheight: height / 6 })
    this.setData({ infowidth: width * 2.3 / 3.3 - 10 + 'px' })
    this.setData({ cycle1box: height / 3 + height * 3 / 20 })
    this.setData({ cycle2box: height / 6 + height / 25 })
    this.setData({ cycle3box: height / 5.2 })
    this.setData({ jiantouheight: height / 13 })
    this.setData({ jiantouwidth: width / 4 })
    this.setData({ tabwidth: width / 1.1 })
    this.setData({ tabheight: height / 1.2 })
    console.log('index-onLond')


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