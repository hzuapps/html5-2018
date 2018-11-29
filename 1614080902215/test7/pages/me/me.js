//logs.js
const util = require('../../utils/util.js')

const app = getApp()

Page({
  data: {
    text_:'',
    logs: [],
    tp_right: "../../images/right.png",
    tp_wrong: "../../images/wrong.png"
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件'),
    this.setData({
      text_:""
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  text_1: function(e){
      this.setData({
        text_:e.detail.value
      });
  },
  right: function(){
    if (this.data.text_) {
      wx.showToast({
        title: '提交成功',
        image: '../../images/right.png',
        duration: 2000
      })

      }
      else{
      wx.showToast({
        title: '未输入任何留言',
        image: '../../images/wrong.png',
        duration: 2000
      })
      }
  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    if (app.globalData.userInfo) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})