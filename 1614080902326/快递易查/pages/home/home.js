// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    w:wx.getSystemInfoSync().windowWidth,
    h: wx.getSystemInfoSync().windowHeight,
    scanDisplay: 'display',
    searchDisplay: 'none',
    showNoRecent: 'none',
    inputValue:null,
    localItems:[],
    icon60: "../../images/pic_160.png",

    //滑动删除方面
    startX: 0, //开始坐标
    startY: 0,
    isTouchMove: false //默认隐藏删除

    },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },
  onShow: function(){
    this.setData({
      localItems: wx.getStorageSync("localItems"),
      
    })
    console.log("home加载localItems:", this.data.localItems)
    if(this.data.localItems.length ==0){
      this.setData({
        showNoRecent: 'display'
      })
      
    }
    else {
      this.setData({
        showNoRecent: 'none'
      })
    }
    },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (order) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  focus () {
    this.setData({
      scanDisplay: "none",
      searchDisplay: "display"
    })
  },

  nofocus() {
    this.setData({
      scanDisplay: "display",
      searchDisplay: "none"
    })
  },

  bindKeyInput(e) {
    //这里设置全局变量inputValue为e.detail.value当前对象的值
    this.setData({
      inputValue: e.detail.value
    })
    app.globalData.orderNo = this.data.inputValue
    console.log(app.globalData.orderNo)
    if (this.data.inputValue == "") {
      this.nofocus()
    }
    else{
      this.focus()
    }
  },
  clickEmpty(){
    this.setData({
      inputValue:""
    })
    app.globalData.orderNo = this.data.inputValue
    console.log('清空')
    this.nofocus()
    console.log(app.globalData.orderNo)
  },
  scanCode(){
    var that=this
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['barCode','qrCode'],
      success: function(res) {
        console.log(res)
        that.setData({
          inputValue:res.result
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  query(){
    wx.navigateTo({
      url: '../detail/detail?order=' + this.data.inputValue,
    })
  },
  getDetail(){
    wx.navigateTo({
      url: '../detail/detail?order=3383906119457',
    })
  },
  //下面是滑动删除函数
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.localItems.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      localItems: this.data.localItems
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.localItems.forEach(function (v, i) {
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
      localItems: that.data.localItems
    })
  },
  /**
  * 计算滑动角度
  * @param {Object} start 起点坐标
  * @param {Object} end 终点坐标
  */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  // del: function (e) {
  //   this.data.localItems.splice(e.currentTarget.dataset.index, 1)
  //   this.setData({
  //     localItems: this.data.localItems
  //   })
  // }
  del(e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确定删除这条记录？',
      success(res) {
        if (res.confirm) {
          var localItems = wx.getStorageSync("localItems")
          localItems.splice(e.currentTarget.dataset.index, 1)
          wx.setStorageSync("localItems", localItems)
          that.onShow()
          console.log(localItems)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  }
})