// pages/menu/menu.js
const App = getApp()

Page({
  data: {
    scroll_height: 0,
    itemData: wx.getStorageSync('menu')
  },
  onLoad: function(options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth - 80 - 30
    })
  },
  onShow: function() {
    App.globalData.topText = wx.getStorageSync('menu');
    this.setData({
      itemData: App.globalData.topText
    })
    //this.onLoad();
  },
  touchS: function(e) { // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({
      startX
    })
  },
  touchM: function(e) { // touchmove
    let itemData = App.Touches.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({
      itemData
    })

  },
  touchE: function(e) { // touchend
    const width = 150 // 定义操作列表宽度
    let itemData = App.Touches.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({
      itemData
    })
  },
  itemDelete: function(e) { // itemDelete
    let itemData = App.Touches.deleteItem(e, this.data.itemData)
    itemData && this.setData({
      itemData
    })
    App.globalData.topText = itemData;
    wx.setStorageSync('menu', App.globalData.topText)
  },
  addMenu: function() {
    wx.navigateTo({
      url: '../add/add'
    })
  }
})