// pages/mmc/mmc.js


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
    var that = this;

    wx.showModal({
      title: '提示!',
      content: '是否删除留言',
      success(res) {        //回调
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
  sendto: function () {
    if (this.data.inputVal == "") {
      wx.showToast({
        title: '您的留言为空！',
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
      title: '亲，您的留言我已经收到了！',
      icon: 'success',
      duration: 1000
    });
  },

  tell: function () {
    wx.makePhoneCall({
      phoneNumber: '1008611' //仅为示例，并非真实的电话号码
    })

  },


  //事件处理函数
  onLoad: function (options) {

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