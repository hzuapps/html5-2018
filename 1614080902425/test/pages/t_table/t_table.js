// pages/t_table/t_table.js
var util= require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check:0,
    mes: {
  }},
  /**
   * 生命周期函数--监听页面加载
   */
  
  addmemory:function(e)
  {
    var id = e.currentTarget.id
    //console.log(id)
    var mess={}
    var mesall = new Object()
    wx.getStorage({
      key: 'mes',
      success: res => {
        mess=res.data.message[id]
        //console.log(mess)
      }
    })
    wx.showActionSheet({
      itemList: ['添加至追更目录','取消'],
      success: res=> {
        if (res.tapIndex == 1)
          return;
        var mesold=new Object()
        if (!res.cancel) {
          try {
            var value = wx.getStorageSync('index')
            if (value) {
              mesold=value
            }
          } catch (e) {
          }
          var time = util.formatDate(new Date())
          let date = util.getDates(1, time)
          mesold[mess.title] = mess
          mesold[mess.title].time = date[0].week
          wx.setStorage({
            key:'index',
            data: mesold,
            success: res => {}
          })
        }
      }
    });
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'mes',
      success: res=> {
        this.setData({
          mes: res.data,
          check:1
        })
        //console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.switchTab({
      url: '/pages/t_table/t_table',
      success(res) {
        if (app.globalData.update==0)
          return;
        var page = getCurrentPages().pop()
        //console.log(page)
        if (page == undefined || page == null) return;
        page.onLoad();
        app.globalData.update=1;
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})