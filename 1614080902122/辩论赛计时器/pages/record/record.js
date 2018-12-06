Page({
  data: {
    logs: [],
    modalHidden: true,
    toastHidden: true
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '任务记录'
    })
    this.getLogs()
  },
  set: function () {

  },
  getLogs: function () {
    let logs = wx.getStorageSync('logs')
    console.log(logs);
    this.setData({
      logs: logs
    })
  },
  onLoad: function () { },

})
