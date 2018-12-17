Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
      workTime: wx.getStorageSync('workTime'),
      restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function(e) {
    wx.setStorage({
      key: 'workTime',
      data: e.detail.value
    })
  },
  changeRestTime: function(e) {
    wx.setStorage({
      key: 'restTime',
      data: e.detail.value
    })
  },
  bindButtonTap: function(e) {

    var me = this;
    var formObject = e.detail.value;
    var say = formObject.say;

    wx.request({
      url: "http://127.0.0.1:8080/demo/get",
      method: "get",
      data: {
        say: say
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {

        wx.showToast({
          title: 'suceess',
          icon: 'success',
          duration: 2000
        });
      }

    })
  }


})