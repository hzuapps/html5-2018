Page({
  data: {
    sex: [
      { name: 'man', value: '男', checked: 'true'},
      { name: 'woman', value: '女'},
    ],
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  change: function () {
    console.log("hahah");
    wx.switchTab({
      url: "/pages/gift/gift",
    })
  }
})