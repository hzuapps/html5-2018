// pages/idx/idx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {url:'../../img/sao.jpg',text:'hello',video_url:'https://www.bilibili.com'},
      { url: '../../img/shilaimu.jpg', text: 'world',video_url: 'https://www.bilibili.com'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
  Height:""     //这是swiper要动态设置的高度属性
 },
imgHeight:function(e){
  var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
  var imgh=e.detail.height;//图片高度
  var imgw=e.detail.width;//图片宽度
  var swiperH=winWid*imgh/imgw + "px"
  this.setData({
    Height:swiperH//设置高度
  })
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