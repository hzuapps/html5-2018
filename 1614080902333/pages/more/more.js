Page({
  data: {
    // array: [{
    //   mode: 'scaleToFill',
    // }],
    movies: [],
    loading: false,
    src: '/image/肖生克的救赎.jpg',
    //  title: '肖生克的救赎',
  },
  onLoad: function (options) {
    var that = this;
    var one = Math.floor(Math.random() * 250);
    wx.request({
      header: {
        "Content-Type": "json"
      },
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {
        start: one,
        count: 100
      },
      success: function (res) {
        that.setData({
          movies: res.data.subjects,
          loading: true
        })
      }
    })
  },
  jumpTomore: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      // url: '/pages/more/more?id=' + e.currentTarget.id,
    })
  },
  onReachBottom: function () {
    that.linkNet(++page);
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  add: function (e) {
  },
})