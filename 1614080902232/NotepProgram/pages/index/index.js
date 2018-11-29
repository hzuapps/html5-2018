//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    desArr: []//数据源数组
  },

  onLoad: function (options) {
    //-监听页面加载
    //获取缓存内容
    this.setData({
      desArr: wx.getStorageSync('oldText')
    })
    if (this.data.desArr == null && this.data.desArr == '') {
      //如果没有缓存则为空
      this.setData({
        desArr: []
      })
    }
    //获取当天日期
    var day = this.getNowFormatDate()
    this.setData({
      today: day
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示   
    //获取当前缓存
    var arrayA = wx.getStorageSync('oldText');
    var isChange = wx.getStorageSync('isChange');
    if (arrayA.length != this.data.desArr.length) {
      //如果数量改变从新赋值
      this.setData({
        desArr: arrayA
      })
    } else if (isChange == 1) {
      wx.setStorageSync('isChange', 0);
      this.setData({
        desArr: arrayA
      })
    }
  }
})
