// pages/me/me.js
var app = getApp()
Page({
  data: {
    navbar: [ '搜索', '我','你'],
    currentTab: 0,
    id: ""
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iput1: function(e){
    var val = e.detail.value;
    this.setData({
      id: val
    })
    //console.log(this.data.id)
  },

  btn1: function(){
    var that = this
    var url1 = this.data.id
    
    var testurl = 'http://localhost:8080/girls/'+url1
    console.log(testurl)

    wx.request({
      url: testurl, //仅为示例，并非真实的接口地址
      
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        
        console.log(res.data),
        that.setData({
          text1:res.data
        })
      }
    })
  }
})

