// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:null
  },

  btnClick: function () {
    this.setData({ message:"发送成功,我们已经收到您的宝贵意见"})
  },
})