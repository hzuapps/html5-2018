// pages/cw/cw.js
const defaultArray = [{
    name: '知识值',
    value: 60
  }, {
    name: '体力值',
    value: 60
  },
  {
    name: '健康值',
    value: 60
  },
  {
    name: '愉悦值',
    value: 60
  },
  {
    name: '干净值',
    value: 60
  },
  {
    name: '饱腹值',
    value: 60
  }
];
Page({
  data: {
    id: '0',
    dd:'0',
    array: [],
  },
  tell: function(e) {

    const index = parseInt(e.currentTarget.dataset.id)

    if (index == '0') {

      wx.showToast({
        title: '右边领养',

      })

    }  else {

      wx.showToast({
        title: '去社区玩咯',

      })

      wx.navigateTo({
        url: '../mai/mai',
      })

    }
  },


  ti: function(e) {
    const index = parseInt(e.currentTarget.dataset.id)

    if  (index == '0') {

      var mm = '领养成功'
      this.setData({
        id: '2'
      })
    } else {
      var mm = '去点左边按钮'

    }

    wx.showToast({
      title: mm,

    })


  },

  te: function (e) {

    const dd=parseInt(e.currentTarget.dataset.dd)

    if (dd=='0') {

      wx.showToast({
        title: '属性重置！',
      })
      this.setData({
        dd: '1'

      })
    }
     else{
      wx.setStorageSync('array', defaultArray);
      this.setData({
        array: defaultArray,
      })
    
     }
  },
  wo:function(){
wx.switchTab({

  url: '../myself/myself',
})

  },





  onLoad:function(){
    var array = wx.getStorageSync('array')
    if(!array){
      wx.setStorageSync('array', defaultArray);
      array = defaultArray;
    }
    this.setData({
      array:array,
    })
  }
})