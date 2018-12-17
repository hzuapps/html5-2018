Page({
  data: {
    lists: [],              // 接收搜索的内容
    wxSearchData: '',       // 输入的值
  },
  /**
     * 搜索
     */
  wxSearchInput: function (value) {
    var that = this;
    if (value.detail.value.length > 0) {
      wx.request({
        url: '',
        data: {
          value: value.detail.value
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        dataType: json,
        responseType: text,
        success: function (res) {
          if (res.code) {
            var data = that.data.lists;
            for (let i = 0; i < res.data.length; i++) {
              data.push(res.data[i]);
            }
            that.setData({
              wxSearchData: value.detail.value,
              lists: data
            })
          }
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },

  /**
   * 监听软键盘确认键
   */
  wxSearchConfirm: function (e) {

  },

  /**
   * 返回
   */
  back: function (e) {
    wx: wx.navigateBack({
      delta: 1,
    })
  }
})