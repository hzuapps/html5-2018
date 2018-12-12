//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    usersList: [{ name: "自己和自己说话", src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544634493562&di=7a0989866e4ed1b9e6b6e6fd34fed1ba&imgtype=0&src=http%3A%2F%2Fimg.qqleju.com%2Fuploads%2Fallimg%2F161126%2F26-094015_355.jpg" }]
  },
  chat: function () {
    wx.navigateTo({ url: "../chat/chat" })
  }
})
