
Page({
  data:{
  //src: 'pages/image/肖生克的救赎.jpg',
  },
  onLoad: function (options) {
    this.setData({
      title: options.title,
      summy: options.summy,
      src: options.src
    })
  }
})