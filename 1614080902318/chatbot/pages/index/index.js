Page({
  tochat: function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  delete: function() {
    wx.showModal({
      title: '',
      content: '确定删除聊天记录？',
      confirmText: "删除",
      cancelText: "取消",
      success: (res) => {
        if (res.confirm) {
            wx.clearStorage()
            wx.showToast({
              title: "删除成功",
              icon: 'success',
              duration: 1000
            });
        } else {
        }
      }
    });
    
  }
})