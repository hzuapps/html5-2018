// pages/me/me.js
var app = getApp()
Page({
  data: {
    navbar: ['首页', '搜索', '我'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }, 
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    this.HouseTypeSearch(e.detail.value)
  },
  //事件处理函数
  refresh: function (options) {
    var that = this

    //技能资讯列表
    wx.request({
      url: 'http://120.77.171.50:8080/selectFirst',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          text1: res.data
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
        console.log(res.data[0])
      }

    })
  },
  HouseTypeSearch: function (options) {
    var that = this

    //技能资讯列表
    wx.request({
      url: 'http://120.77.171.50:8080/selectFirst',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        var a = []
        for (var index in res.data) {
          console.log(res.data[index].type)
          if (res.data[index].type==options){
              a.push(res.data[index])
          }
        }
        that.setData({
          text1: a
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
      }

    })
  }
})
