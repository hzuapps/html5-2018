var status = true;
Page({
  data: {
    // array: [{
    //   mode: 'scaleToFill',
    // }],
    status:status,
    loading:false,
    movies: [],
   // src:  'image/肖生克的救赎.jpg',
   //  title: '肖生克的救赎',
  },
  onLoad: function (options) {
    var that=this;
    var one = Math.floor(Math.random() * 250);
    wx.request({
      header: {
        "Content-Type": "json"
      },
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {
        start: one,
        count: 1
      },
      success: function (res) {
        that.setData({
          movies: res.data.subjects,
          loading: true
        })
      }
    })
   },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    this.onLoad();
    status = false
    this.setData({ status: status }) //setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")
    status = true
    this.setData({ status: status })
  },
})