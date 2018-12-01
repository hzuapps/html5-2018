// pages/me/me.js
var app = getApp()
Page({
  data: {
    navbar: ['首页', '图表'],
    zhihu:null,
  },onLoad: function () {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        console.log('succeeful')
        that.setData({
          zhihu: res
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
      }
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
