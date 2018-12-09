// pages/startoday/startoday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  data: {
    focus: false,
    inputValue: ''
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  },


  wx.request({
    url: 'https://huyahaha.com/xxxx/xxx'
    data: {
      pid: _this.data.info.id,
      nickname: _this.data.user_nickname,
      avatar: _this.data.user_avatar,
      saytext: _this.data.inputValue,
      openid: _this.data.user_openi
    },
    /** 注意header要修改, 否则无效 */
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      if (res.data.errcode == 0) {
        wx.showToast({
          title: res.data.errmsg,
          icon: 'success',
          duration: 2000
        }) _this.setData({
          inputValue: ''
        });
        /**重新加载评论列表*/
        _this.loadComment(_this.data.info.id);
      } else {
        wx.showModal({
          title: '提示',
          content: res.data.errmsg,
          showCancel: false,
          confirmText: '确定'
        }) return;
      }

    }
  }),

  wx.chooseImage({
    success(res) {
      const tempFilePaths = res.tempFilePaths
      wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        filePath: tempFilePaths[0],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success(res) {
          const data = res.data
          //do something
        }
      })
    }
  })
})