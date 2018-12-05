var util = require('../../utils/util');

Page({

  data: {
    lists: []
  },

  onLoad: function (options) {
    initData(this);
  },


  onShow: function () {
    initData(this);
  },

  edit(e) {
    var id = e.currentTarget.dataset.id;
   wx.navigateTo({
      url: '../add/add?id=' + id
    })
  },

  delete(e){
     var id = e.currentTarget.dataset.id;
     var arr=wx.getStorageSync('txt');
     var arrs;
     var that=this;
     var f=1;
     wx.showModal({
       title: '提示',
       content: '确认删除吗？',
       success: function (res) {
         if (res.confirm) {
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
       }
     })
  },

  add() {
    wx.navigateTo({
      url: '../add/add',
    })
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