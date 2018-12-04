Page({

  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  data: {
    "bnrUrl": [{
      "url": "../image/0001.jpg"
    }, {
      "url": "../image/0002.jpg"
    }, {
      "url": "../image/0003.jpg"
    }, {
      "url": "../image/0004.jpg"
    }]
  }

})