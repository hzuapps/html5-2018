//logs.js
var app = getApp()
Page({
  data: {
    navbar: ['待接单', '待完成', '已完成','已取消'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
