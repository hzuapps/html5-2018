// pages/Community/Community.js
var app = getApp();
var n = null;
var list = null;

Page({
  data: {
    inputVal: '',
    msgData: [],
  },
  onLoad: function (options) {
    console.log('onLoad')
    console.log('读取缓存成功')
    var that = this;
    wx.getStorage({
      //获取数据的key
      key: 'msgData',
      success: function (res) {
        that.setData({
          msgData: res.data
        })
      }
    });
    

  },
  onShow() { 
    this.onLoad()
  },
  /**
   * 新增笔记事件
   */
  onNewItem: function (event) {
    wx.navigateTo({
      url: "../create/create"
    })
  },


  /**
   * 编辑笔记事件
   */


  delMsg(ev) {
    n = ev.target.dataset.index;
    list = this.data.msgData;
    var that = this;

    wx.showModal({
      title: '提示!',
      content: '是否删除笔记',
      success(res) {
        if (res.confirm) {

          list.splice(n, 1);
          that.setData({
            msgData: list
          });
          wx.setStorage({
            key: "msgData",
            data: list,
            success: function (res) {
              console.log('删除缓存成功')
            }
          });
        }
      },

    });
  },
  
  
})

   
  
