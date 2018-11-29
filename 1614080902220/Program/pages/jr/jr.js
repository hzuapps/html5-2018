Page({
  clickRed:function(){
    this.setData({color:"red"})
  },
   clickgreen: function () {
    this.setData({ color: "blue" })
  },
  bindViewTap:function(){
    wx.switchTab({
      url: '../logs/logs',
    })
  }
  }
 
)
