//index.js
//获取应用实例


var app = getApp()

Page({
  data: {
    neirong: '',
  },
  openToast: function() {
    wx.showToast({
      title: '一吐为快啦',
      icon: 'success',
      duration: 2000
    });
  },

  saveData: function() {
    //保存按钮
    if (this.data.neirongg.length == 0) {
      wx.showToast({
        title: '失败',
        mask: true,
        icon: 'success',
        duration: 1000
      });
    }
    //获取本地缓存
    let arr = wx.getStorageSync("history") || [];
    let oldText = {
      'neirong': this.data.neirongg};
    arr.unshift(oldText);
    wx.setStorageSync('history', arr);
    if (this.data.neirongg.length !== 0) {
      wx.showToast({
        title: '一吐为快啦',
        icon: 'success',
        duration: 1000
      });
    }
  },
blur1(e){
  this.setData({
    neirongg:e.detail.value
  })
},

onShareAppMessage:function() {
  // 用户点击右上角分享
  return {
    title: '联系方式', // 分享标题
    desc: '号码实在太多记不完', // 分享描述
    path: 'path' // 分享路径
  }
}
})