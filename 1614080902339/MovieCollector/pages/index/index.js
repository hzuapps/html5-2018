//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/image/venom.jpg',
      '/image/grindelwald.jpg',
      '/image/conan.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    movList: [
      {
        poster: '/image/poster_03.jpg',
        title: '影',
        desc: '制片地区：中国大陆\n导　　演：张艺谋\n主　　演：邓超、孙俪、郑恺\n类　　型：剧情、动作、武侠\n上映时间：2018.09.30',
      },
      {
        poster: '/image/poster_01.jpg',
        title: '毒液：致命守护者',
        desc: '制片地区：美国\n导　　演：Ruben Fleischer\n主　　演：Tom Hardy\n类　　型：动作、科幻、惊悚\n上映时间：2018.11.09',
      },
      {
        poster: '/image/poster_02.jpg',
        title: '憨豆特工3',
        desc: '制片地区：法国、英国、美国\n导　　演：David Kerr\n主　　演：Rowan Atkinson\n类　　型：喜剧\n上映时间：2018.11.23',
      },
    ],
  },
  //事件处理函数
 
  onLoad: function () {
    
  }
})
