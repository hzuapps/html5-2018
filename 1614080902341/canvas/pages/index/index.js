// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textlength: 0,
    imgurl: null,
    text: "",
    canheight: 150,
    size: 85,
    canwidth: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      //计算画布的宽度
      canwidth: wx.getSystemInfoSync().windowWidth-15
    })
  },

  textset: function(e){
    this.setData({text: e.detail.value })
  },

  //创建图片
  create: function(){
    const that = this
    const text = this.data.text
    const ctx = wx.createCanvasContext('pngcan')
    ctx.setFillStyle('black')
    const textheight = 6 * that.data.size / 20
    if (text.length <= 4) {
      ctx.font = 'normal bold ' + that.data.size + 'rpx cursive'
      const textwidth = ctx.measureText(text).width * that.data.size / 20
      //设置文本在画布正中间
      ctx.fillText(text, that.data.canwidth / 2 - textwidth, that.data.canheight / 2 + textheight)
    }else {
      const textsize = Math.floor(that.data.canwidth * 10 / ctx.measureText(text).width)
      console.log(textsize)
      that.setData({
        size: textsize
      })
      ctx.setFontSize(textsize)
      //设置文本在画布正中间
      ctx.fillText(text, -2, that.data.canheight / 2 + textheight)
    }
    ctx.draw(false, function () {
      wx.canvasToTempFilePath({
        canvasId: 'pngcan',
        success: function (res) {
          // 获得图片临时路径
          that.setData({
            imgurl: res.tempFilePath
            })
        }
      })
    })
  },

  //图像预览
  see: function(){
    const that = this
    wx.previewImage({
      urls: [that.data.imgurl]
    })
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