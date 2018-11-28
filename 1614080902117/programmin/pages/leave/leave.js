// pages/leave/leave.js
var app = getApp()
var n = null;
var list = null;
Page({
  data: {
    inputVal: '',
    msgData: [
      
    ]
    
  },
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value
    });
  },
  delMsg(ev) {
    n = ev.target.dataset.index;
    list = this.data.msgData;
    var that=this;

    wx.showModal({
      title: '提示!',
      content: '是否删除留言',
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
  addMsg() {
    
    if (this.data.inputVal == "") {
      wx.showToast({
        title: '留言为空',
        icon: 'none',
        duration: 1000
      });
      return false;
    }  
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal

    });
    
    //更新
    this.setData({
      inputVal: '',
      msgData: list     
    });
    wx.setStorage({
      key: "msgData",
      data: list,
      success: function (res) {
        console.log('添加留言缓存成功')
      }
    });
    wx.showToast({
      title: '留言成功',
      icon: 'success',
      duration: 1000
    });
  },

  //事件处理函数
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
  
})
