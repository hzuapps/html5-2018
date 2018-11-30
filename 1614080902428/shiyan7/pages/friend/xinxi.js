Page({
  data:{
    desArr: []
  },
  onLoad:function(options){
    // wx.clearStorage();
    this.setData({
      desArr: wx.getStorageSync('oldText')
      })
    if (this.data.desArr == null && this.data.desArr == '') {
      //如果没有缓存则为空
      this.setData({
        desArr: []
      })
    }
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
  },
})