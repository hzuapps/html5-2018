// page.js
Page({
   onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '急救助手',
      path: '/pages/index/index'
    }
  },
jumpPage1:function(){
  wx.navigateTo({
    url: '/pages/coma/coma',
  })
},
  jumpPage2: function () {
    wx.navigateTo({
      url: '/pages/bleeding/bleeding',
    })
  },
  jumpPage3: function () {
    wx.navigateTo({
      url: '/pages/cramp/cramp',
    })
  }

  

})