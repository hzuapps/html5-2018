//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputVal: '',
    msgData: [
      { msg: '更多请关注微信公众号：ccccssxxxx' }
    ]
  },
  // 删除留言
  del(e) {
    var that = this
    var n = e.target.dataset.index;
    var list = that.data.msgData
    wx.showModal({
      title: '提示',
      content: '是否删除该条数据',
      success: function (res) {
        console.log(res.confirm)
        if (res.confirm) {
          list.splice(n, 1);
          that.setData({
            msgData: list
          })
          wx.showToast({
            title: '删除成功',
          })
        }

      }
    })

  },
  // 添加留言
  add(e) {
    if (this.data.inputVal == '') {
      wx.showToast({
        title: '留下喜欢的编号',
      })
      return false;
    }
    var list = this.data.msgData;
    var a = list ? list : []
    a.push({
      msg: this.data.inputVal
    })
    wx.setStorage({
      key: 'info',
      data: a,
    })
    this.setData({
      msgData: a,
      inputVal: ''
    })
  },
  changeinputVal(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'info',
      success: function (res) {
        //msgData还是空的
        var list = that.data.msgData;
        var a = list ? list : []
        var apple = res.data
        //将数据加入到msgData
        a = apple
        that.setData({
          msgData: a
        })
      }
    })
  },
})
