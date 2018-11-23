// 获取小程序实例
var app = getApp()

Page({
  // 数据
  data: {

  },
  onLoad: function () {

  },
  /* 登录函数 */
  login: function () {
    var that = this;
    // 登录API
    wx.login({
      success: function (res) {
        console.log(res)
        // 改变全局属性
        app.globalData.hasLogin = true;
        that.setData({
          hasLogin: app.globalData.hasLogin
        })
      }
    })
  },
  /* 获取用户信息函数 */
  getUserInfo: function () {
    var that = this;
    if (app.globalData.hasLogin === false) {
      // 模态框API
      wx.showModal({
        title: "还未登录",
        content: "请先登录..."
      })
    } else {
      // 调用获取信息函数
      _getUserInfo()
    }
    // 获取信息函数
    function _getUserInfo() {
      // 获取用户信息API
      wx.getUserInfo({
        success: function (res) {
          console.log(res)
          that.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  }
})