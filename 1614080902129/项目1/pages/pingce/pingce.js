
Page({
  data: {
    text: "Page system"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  /**
   * 获取当前网络状态
   */
  getNetWorkType: function () {
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   *  获取系统信息
   */
  getSystemInfo: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
   *  监听重力感应数据     
   *      - 带on开头的都是监听接收一个callback
   */
  onAccelerometerChange: function () {
    wx.onAccelerometerChange(function (res) {
      console.log(res)
    })
  },
  /**
 *  监听罗盘数据
 */
  onCompassChange: function () {
    wx.onCompassChange(function (res) {
      console.log(res)
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})