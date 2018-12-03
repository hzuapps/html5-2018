// pages/book/book.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      text: '《大众天文学》',
    },
     {
      text: '《天文爱好者手册》',
    },
     {
      text: '《美丽星空》',
    }, 
    {
      text: '《恒星与行星》'
  }],
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
  }
})
