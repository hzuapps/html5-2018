Page({
  data: {


  },
  tiao3: function (options) {
    wx.navigateTo({
      url: '/pages/liuyan/index'
    })
  },
  goPage: function (e) {
    console.log(e);
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})
