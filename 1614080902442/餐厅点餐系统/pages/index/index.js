//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [//下面三个网址是滑块的三个图片
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543575388043&di=852d7a049822067284628977a5728dfc&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141114%2Ftesehongshaoroumeishi_3451089.jpg',

      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543572930924&di=a3cb97e512212eae8b433df4b0420584&imgtype=0&src=http%3A%2F%2Fpic157.nipic.com%2Ffile%2F20180301%2F21485791_202149495000_2.jpg',
      
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544170360&di=0ec996ffc92bb4a43cf51e5165d8f0fd&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130522%2F11024153_151942404184_2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    navItems: [
      {
        name: '现点',
        url: 'dishes'
      },
      {
        name: '外卖',
        url: 'take',
        isSplot: true
      },
      {
        name: '外带',
        url: 'out'
      },
      {
        name: '购物车',
        url: 'bill'
      },
      {
        name: '订单',
        url: 'bill',
        isSplot: true
      },
      {
        name: '用餐评价',
        url: 'suggest'
      }
    ]
  },



  onLoad: function () {
    console.log('onLoad')
  }

})
