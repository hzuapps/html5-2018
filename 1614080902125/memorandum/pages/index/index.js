//index.js
//获取应用实例
var util = require('../../utils/util');
Page({
  data: {
    lists:[]
  },
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    initData(this);
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    initData(this);
  },

  bindTouchStart: function (e) {
    this.startTime = e.timeStamp;
  },
  bindTouchEnd: function (e) {
    this.endTime = e.timeStamp;
  },

  edit(e) {
    if (this.endTime - this.startTime < 350) {
      var id = e.currentTarget.dataset.id;
      // 跳转 navigateTo
      wx.navigateTo({
        url: '../edit/edit?id=' + id
      })
    }
  },
  add:function() {
    wx.navigateTo({
      url: '../edit/edit'
    });
  },
  delete:function(e){
    var id = e.currentTarget.dataset.id;
    var arr = wx.getStorageSync('txt');
    var arrs;
    var that = this;
    var f = 1;
    wx.showModal({
      content: '确认删除该记录？',
      success: function (res) {
        console.log(id)
        arr.forEach((item, i) => {
          if ((item.id) == id && f == 1) {
            console.log(i);
            arr.splice(i, 1);
            wx.setStorageSync('txt', arr);
            f = 0;
          }
        })
        arrs = wx.getStorageSync('txt');
        arrs.forEach((item, i) => {
          var t = new Date(Number(item.time));
          item.time = util.dateFormate(t);
        })
        that.setData({
          lists: arrs
        })
      }
    });
  }

  
})

function initData(page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item, i) => {
      var t = new Date(Number(item.time));
      item.time = util.dateFormate(t);
    })
    page.setData({
      lists: arr
    })
  }
}

