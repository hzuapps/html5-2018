Page({

  data: {
    message: {},
  },

  onProductsItemTap(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  jumpReplace() {
    wx.navigateTo({
      url: '/pages/modify/modify',
    })
  }, 
 
  onShow: function () {
    var message = wx.getStorageSync('information');
    this.setData({
      message: message
    });
    this.onLoad();
  },

})