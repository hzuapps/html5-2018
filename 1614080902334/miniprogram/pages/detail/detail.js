var app = getApp()
Page({

  data: {
    startX: 0, 
    startY: 0,
    history:[],
  },

  onLoad: function () {
    for (var i = 0; i < 10; i++) {
      this.data.history.push({
        isTouchMove: false //默认全隐藏滑块
      })
    }
    this.setData({
      history: this.data.history
    })
  },

  touchstart: function (e) {
    //开始触摸时 重置所有滑块
    this.data.history.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      history: this.data.history
    })
  },

  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.history.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      history: that.data.history
    })
  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  del: function (e) {
    this.data.history.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      // history: this.data.history
      history: wx.clearStorageSync(),
      history: wx.reLaunch({
        url: '../detail/detail',
      })
    })
  },

  copyText: function (e) {
    var index = e.currentTarget.dataset;
    var jiu = e.currentTarget.dataset;
    var nArr = [];
    for (var i in jiu) {
      nArr.push(jiu[i]);
    }
    console.log(jiu);
    console.log(nArr);
    let contents = "Object[0].content";
    this.setData({
      [contents]: "xxx"
    })
      wx.setClipboardData({
        // data: e.currentTarget.dataset.Object[e.currentTarget.dataset.index] + "",
        data: e.currentTarget.dataset.index + "",
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '已复制到剪贴板'
              })
            }
          })
        }
      })
  },
  onLoad: function (options) {
    var that = this
    this.setData({
      history: wx.getStorageSync("msgList")
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

  },

 
})