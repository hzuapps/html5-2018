// pages/add/add.js
const App = getApp()

Page({
  data: {
    textarea: "",
    Length: 0
  },
  //监控input
  textLength: function(e) {
    let length = e.detail.value.length
    this.setData({
      Length: length
    })
  },

  //完成添加到菜单
  formSubmit: function(e) {
    if (this.data.Length == 0) {
      wx.showModal({
        title: '提示',
        content: '菜名不能为空',
        success: function(res) {}
      })
    } else {
      var arr = {
        name: ''
      };
      arr.name = e.detail.value["input"];
      App.globalData.topText.push(arr);
      wx.setStorageSync('menu', App.globalData.topText);
      this.setData({
        textarea: ""
      })
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(function() {
        wx.switchTab({
          url: '../menu/menu',
        })
      }, 1000)
    }
  }
})