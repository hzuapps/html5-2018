//index.js
//获取应用实例
const app = getApp()

var initData = 'start to have a chick\n go go go\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
var extraLine = [];
Page({
  data: {
    text: initData
  },
  add: function (e) {
    extraLine.push('领养成功')
    this.setData({
      text: initData + '\n' + extraLine.join('\n') 
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})

