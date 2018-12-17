//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')
let ani = {
  duration: 100,
  timingFunction: 'ease-in',
}
var rise0 = wx.createAnimation(Object.assign({}, ani))
var rise1 = wx.createAnimation(Object.assign({}, ani))
var rise2 = wx.createAnimation(Object.assign({}, ani))
var rise3 = wx.createAnimation(Object.assign({}, ani))

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    isRise: false,
    rise: null,
    notebooks: [],
    isEditNotebook: false,
    notebookid: -1,
    isUpload: false,
  },
  changeToTest:function(){
    wx.navigateTo({
      url: '../event/event',
    })
  },
  onLoad: function () {
    this.setData({
      notebooks: app.globalData.notebooks,
      encrypt: app.globalData.isEncrypt,
      isUpload: app.globalData.isUpload,
    })

    if (app.globalData.userInfo) {
      console.log('onLoad: if -> userInfo')
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 延迟聚焦
  getFocus: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        focus: true
      })
    }, 200)
  },
  
  // 添加新的事件
  addNotebook: function () {
    wx.navigateTo({
      url: '../event/event',
    })
  },
  save: function (e) {
    let i = this.data.notebookid
    let n = e.detail.value.trim()
    // 如果事件不为空
    if (n) {
      let up = null
      if (i < 0) {
        // 新建小本本
        up = { 'name': n, 'ts': this.data.ts, 'update': false }
        let item = Object.assign({}, up, { 'notes': [], })
        app.globalData.notebooks.push(item)
      } else {
        app.globalData.notebooks[i].name = n
        up = {
          'name': n,
          'ts': app.globalData.notebooks[i].ts,
          'update': true
        }
      }
      if (this.data.isUpload) {
        wx.request({
          url: app.globalData.url + 'u',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
        })
      }

      this.setData({
        notebooks: app.globalData.notebooks,
        bookname: '',
      })
      wx.setStorageSync('notebooks', app.globalData.notebooks)
    }
  },
  cancel: function () {
    this.setData({
      isEditNotebook: false,
      bookname: '',
    })
  },
  
  // 编辑小本本名字
  editItem: function (e) {
    let i = e.currentTarget.dataset.index
    this.setData({
      isEditNotebook: true,
      notebookid: i,
      bookname: this.data.notebooks[i].name,
    })
    this.getFocus()
  },
  
  changeTo:function(e){
    wx.navigateTo({
      url: '../event/event',
    })
  },
  // 操作菜单
  
  notebook: function (e) {
    wx.navigateTo({
      url: '../note/note?id=' + e.currentTarget.dataset.index,
    })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.notebooks.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
      })
    }
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.touches[0].clientX,//滑动变化坐标
      touchMoveY = e.touches[0].clientY,//滑动变化坐标 changedTouches
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.notebooks.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过 30 度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    that.setData({
      notebooks: that.data.notebooks,
    })
  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
