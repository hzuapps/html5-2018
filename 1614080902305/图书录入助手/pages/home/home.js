var app = getApp();


Page({
  data: {
    imgUrls: [
      '/images/s1.jpg',
      '/images/s2.jpg',
      '/images/s3.jpg',
      '/images/s4.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },

  onLoad: function () {
    var _this = this
    var list_data
    wx.request({
      url: 'https://localhost/returnJson/Returnbook.java',//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          list_data: res.data,
        })
      }
    })
  },
   add:function(options){
     wx.navigateTo({
       url: 'add' 
     })
   },
})