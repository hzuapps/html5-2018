//logs.js
var savetimes=function(time){
var times = wx.getStorageSync('times')
times.unshift(time);
wx.setStorageSync('times', times);
}

Page({
  data: {
    time: "12:01",
    time1:"",
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  showTopTips: function (e) {
    var time1=this.data.time;
  savetimes(time1);
  wx.switchTab({
    url: '../look/look',
    success: function (e) {
      var page = getCurrentPages().pop();
      if (page == undefined || page == null) return;
      page.onShow();
    }
  })
  }
})
