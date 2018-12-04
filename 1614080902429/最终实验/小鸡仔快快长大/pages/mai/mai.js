// pages/mai/mai.js
Page({

  data: {

    id: '0',
    dd: '0',

    imgUrls: [
      '/pages/image/4.jpg',
      '/pages/image/5.jpg',
      '/pages/image/6.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 2000,

    navItems: [{
        name: '洗澡',
        value: '干净值+1',
        zhi:'干净值',
        dd: 1,
      },
      {
        name: '吃饭',
        value: '饱腹值+1',
        zhi: '饱腹值',
        dd: 1
      },
      {
        name: '运动',
        value: '健康值+1',
        zhi:'健康值',
        dd: 1
      },
      {
        name: '玩耍',
        value: '愉悦值+1',
        zhi:'愉悦值',
        dd: 1
      },
      {
        name: '逛街',
        value: '体力值+1',
        zhi:'体力值',
        dd: 1
      },
      {
        name: '学习',
        value: '知识值+1',
        zhi:'知识值',
        dd: 1,
      }
    ]
  },

  he: function(e) {
    const dd = parseInt(e.currentTarget.dataset.dd)
    const zhi = e.currentTarget.dataset.zhi;
    const array = wx.getStorageSync('array');
    for (const item of array) {
      if (item.name == zhi) {
        item.value += dd;
        break;
      }
    }
    wx.setStorageSync('array', array);
    wx.showToast({
      title: e.currentTarget.dataset.value,
    })
  },


  /**
   * 跳转查看小鸡仔的界面
   */
  jump00: function(options) {



    wx.switchTab({

      url: '../Main/Main'
    })


  },



  tell: function(e) {


    const index = parseInt(e.currentTarget.dataset.id)

    if (index == '0') {

      wx.showToast({
        title: '查看属性',

      })
      this.setData({

        id: '1'

      })
    } else {

      wx.navigateTo({
        url: '../cw/cw',
      })
    }
  },


  tel: function(e) {
    const index = parseInt(e.currentTarget.dataset.dd)

    if (index == '0') {

      wx.showToast({
        title: '小鸡仔长大了',
      })
      this.setData({
        dd: '1'

      })
    } else if(index=='1'){
      wx.showToast({
        title: '可以下锅了',
      })
      this.setData({
        dd:'2'
      })

    } 
    else{
      wx.switchTab({

        url: '../Main/Main',
      })
    }

  },



  onLoad: function() {
    console.log('onLoad')
  }


})