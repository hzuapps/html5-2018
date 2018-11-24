Page({
    data:{ 
      title: '' ,
      data0: 0,
      add:"+" ,
      minus:"-" 
  },
  add: function (e) {
    this.setData({
      data0: this.data.data0 + 1
    })
  },
  minus: function (e) {
    this.setData({
      data0: this.data.data0 - 1
    })
  },
    onLoad: function (options) 
    { // 页面初始化 options为页面跳转所带来的参数 
    this.setData({ title:options.title })
    }, 
  })