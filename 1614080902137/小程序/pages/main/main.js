// pages/main/main.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '电费',
        url: 'cost/cost',
        icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1241494164,3728601490&fm=26&gp=0.jpg',
        code: '1'
      },
      {
        name: '报修',
        url: 'repair/repair',
        icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2873381269,973872608&fm=15&gp=0.jpg',
        code: '2'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '3'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '4'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '5'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '6'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '7'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '8'
      },
      {
        name: '暂缺',
        url: '',
        icon: '',
        code: '9'
      }
    ]
  },
  onLoad: function () {

    if(getApp().loginer == "admin"){
      this.setData({
        "routers[0].url": "../costTable/index",
        "routers[1].url": "/pages/repairTable/index"
      })
    }

  }

  
})