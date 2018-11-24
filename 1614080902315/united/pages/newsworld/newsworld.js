//test.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    userInfo: {},
     imgUrls: [
      {
        link: '/pages/index/index',
         url: 'http://img3.imgtn.bdimg.com/it/u=3799924215,346029672&fm=26&gp=0.jpg'
      },
      {
        link: '/pages/index/index',
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1975593299,475238921&fm=26&gp=0.jpg'
      }
    ],
    indicatorDots: true, //小点
    autoplay: true,
    interval: 3000,
    duration: 3000,
  }
 

})  



