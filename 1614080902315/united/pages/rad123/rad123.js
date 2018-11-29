var app = getApp()
Page({

  onShareAppMessage: function () {
    return {
      title: '曼联小报',
      desc: '曼联积分榜岌岌可危！!',
      path: '/page/user?id=123'
    }
  }
})
