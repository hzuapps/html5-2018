/*Page({
  data:{
    today:{
      date:"出生第一天",
      diary:"啊，终于出生了呢",
      imagePath:"/images/1.jpg"
    }
  }
})*/
var app = getApp()
Page({
  data:{
    mydiary:[]
  },
  onLoad: function () {
    var that=this
    wx.setNavigationBarTitle({
      title: '日记列表'
    })
    wx.getStorage({
      key: 'diaryContent',
      success: function(res) {
        if(res.data){
          that.setData({
            mydiary:res.data
          })
        }
      },
    })
  },
  onShow: function () {
    let that = this;
    wx.getStorage({
      key: 'diaryContent',
      success: function (res) {
        if (res.data) {
          that.setData({
            mydiary: res.data
          })
        }
      },
    })
  },
})