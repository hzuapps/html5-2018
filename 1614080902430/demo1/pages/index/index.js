//index.js
//获取应用实例
const app = getApp()
var that = this;
Page({
  data: {
    num:'0',
    num_public:'0',
    avatarUrl:'',
    nickName:'',
    // textarea0:''
    notes:[]
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (info) {
        that.setData({
          avatarUrl: info.userInfo.avatarUrl,
          nickName: info.userInfo.nickName
        })
      }
    })
     
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'update',
      success: function (res) {
        that.setData({
          notes: res.data,
          num:(res.data).length
        })
      }
    })
  },
})
  
  
