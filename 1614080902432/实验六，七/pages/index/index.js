//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      //'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
  'https://dimg06.c-ctrip.com/images/tg/729/629/532/41f17f1916634f829966675dc871631e_R_1024_10000_Q90.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'现吃',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'打包',
        url:'out'
      },
      {
        name:'订单',
        url:'bill'
      },
      {
        name:'帐单',
        url:'bill',
        isSplot:true
      },
      {
        name:'报表',
        url:'bill'
      }
    ]
  },


  onLoad: function () {
    console.log('onLoad')
  }
    
})
