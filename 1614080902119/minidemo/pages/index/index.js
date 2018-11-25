var util = require('../../utils/util');

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
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

  /**
   * 编辑事件
   */
  edit(e) {
    var id = e.currentTarget.dataset.id;
    // 跳转 navigateTo
   wx.navigateTo({
      url: '../add/add?id=' + id
    })
  },
   dele(e){
     var id = e.currentTarget.dataset.id;
     var arr=wx.getStorageSync('txt');
     var arrs;
     var that=this;
     var f=1;
     wx.showModal({
       title: '提示',
       content: '确认撤回吗？',
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
  /**
   * 添加事件
   */
  add() {
    wx.navigateTo({
      url: '../add/add',
    })
  }
})

/**
 * 处理初始化页面列表数据
 */
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