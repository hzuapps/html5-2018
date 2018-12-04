// pages/Main/Main.js

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
    
  data: {
    toView: 'red',
    scrollTop: 100
  },

  tis: function (e) {
    // const index = parseInt(e.currentTarget.dataset.index)

   

    wx.navigateTo({
      url: '../cw/cw'
    })
  },
  ti: function (e) {
    // const index = parseInt(e.currentTarget.dataset.index)

    wx.showToast({
      title: '哼！就知道吃~',
      
      icon: 'success',
    })

   
  },

  gi:function(){

wx.navigateTo({
  url: '../jirou/jirou',
})

  },


  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  wo:function(){
    wx.navigateTo({
      url: '../sming/sming'
    })


  }



})