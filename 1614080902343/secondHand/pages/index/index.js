//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/photo1.jpg',

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo: '/images/dx1.png',
        title: '计算机类教材',
        desc: 'psCS6完全自学手册',
      },
      {
        logo: '/images/dx2.png',
        title: '计算机类教材',
        desc: '软件工程导论',
        },
        {
          logo: '/images/dx3.png',
          title: '文具用品',
          desc: '晨光黑色签字笔',
        },
    ],
    
  },
  
  onLoad: function () {
    
  }
})
