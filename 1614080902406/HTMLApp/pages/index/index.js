const app = getApp()
Page({
  data: {
    routers: [
      {
        name: '惠州→深圳',
        icon: '/images/bus.png',
        code: '10'
      },
      {
        name: '惠州→珠海',
        icon: '/images/bus.png',
        code: '11'
      },
      {
        name: '惠州→湛江',
        icon: '/images/bus.png',
        code: '10'
      },
      {
        name: '深圳→惠州',
        icon: '/images/bus.png',
        code: '11'
      },
      {
        name: '珠海→惠州',
        icon: '/images/bus.png',
        code: '10'
      },
      {
        name: '湛江→惠州',
        icon: '/images/bus.png',
        code: '11'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})  
