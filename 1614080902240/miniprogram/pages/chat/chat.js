// pages/chat/chat.js
var valueContent = '';
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"Hello！小老弟",
    
  },

  valueInput:function(e){
    valueContent = e.detail.value
  },

  clickBtn:function(){
    var that = this
    console.log(valueContent)

      //修改name
      /*
      this.setData({
        name:"mary"
      })
      */

      wx.request({
        url: 'http://www.tuling123.com/openapi/api?key=eeec171e907553c15aa3131562f75903&info=' + valueContent,
        header:{
          'Content-type':"application/json"
        },
        success:function(res){
          //console.log(res.data.text)
          that.setData({
            name: res.data.text
          })
          app.globalData.userInfo = res.data.text
         // console.log(app.globalData.userInfo)
        }
      })
      
      //声音
      wx.playBackgroundAudio({
        dataUrl: 'http://fjyd.sc.chinaz.com/files/download/sound1/201410/5012.mp3'
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})