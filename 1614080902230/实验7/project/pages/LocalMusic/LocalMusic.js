// pages/LocalMusic/LocalMusic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:false,
    selected:true,
    src:''
  },

  wangjie_play() {
    this.wangjie.play()
  },
  wangjie_pause() {
    this.wangjie.pause()
  },
  wangjie_seek() {
    this.wangjie.seek(76)
  },

  wangxinling_play() {
    this.wangxinling.play()
  },
  wangxinling_pause() {
    this.wangxinling.pause()
  },
  wangxinling_seek() {
    this.wangxinling.seek(70)
  },

  xiaofeng_play() {
    this.xiaofeng.play()
  },
  xiaofeng_pause() {
    this.xiaofeng.pause()
  },
  xiaofeng_seek() {
    this.xiaofeng.seek(65.5)
  },

  select:function(e){
      this.setData({
        select: true,
        selected: false
      })
  },

  selected: function (e) {
    this.setData({
      select: false,
      selected: true
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
    this.wangjie = wx.createAudioContext('wangjie')
    this.wangjie.setSrc('../music/谁明浪子心.mp3')

    this.wangxinling = wx.createAudioContext('wangxinling')
    this.wangxinling.setSrc('../music/爱你.mp3')

    this.xiaofeng = wx.createAudioContext('xiaofeng')
    this.xiaofeng.setSrc('../music/贝多芬的悲伤.mp3')
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