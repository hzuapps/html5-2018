//index.js
//获取应用实例
const app = getApp()

Page({
  // 定义数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //点击1号插座使用触发的事件
  use1() {
    // 设置本页面的data的use1数据，只有this.setData()后页面才发生渲染
    this.setData({
      use1: !this.data.use1
    })
    // 弹出消息框
    wx.showToast({
      title: '使用成功',
      duration: 2000
    })
    // app.globalData为全局数据，定义全局的use1，方便去到其他页面引用
    app.globalData.use1 = !app.globalData.use1
  },
  //点击2号插座使用触发的事件
  use2() {
    // 设置本页面的data的use2数据，只有this.setData()后页面才发生渲染
    this.setData({
      use2: !this.data.use2
    })
    // 弹出消息框
    wx.showToast({
      title: '使用成功',
      duration: 2000
    })
    //定义全局的use2，方便去到其他页面引用
    app.globalData.use2 = !app.globalData.use2
  },
  // 点击插座1前往支付页面
  pay1() {
    // 如果use1位false,则表示处于空闲中，返回不支付
    if (!this.data.use1) return
    // 前往支付页面，携带参数为use=1
    wx.navigateTo({
      url: '/pages/pay/pay?use=1'
    })
  },
  // 点击插座2前往支付页面
  pay2() {
    // 如果use2位false,则表示处于空闲中，返回不支付
    if (!this.data.use2) return
    // 前往支付页面，携带参数为use=2
    wx.navigateTo({
      url: '/pages/pay/pay?use=2'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  onShow: function () {
    // 从全局的data中获取use1,use2并设置，注意必须在顶部 const app = getApp()
    this.setData({
      use1: app.globalData.use1,
      use2: app.globalData.use2
    })
  }
})
