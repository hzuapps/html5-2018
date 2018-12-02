// pages/Myadd/Trans.js
Page({
   
  tao:function(event){
    //触发事件
    
    wx.navigateTo({
      url: '../New/new'
    })
    
  },
  toastShow: function (event) {
    //触发事件
    var that=this;
    var WeiXinText = event.detail.value.username;
    wx.request({
      url: 'http://localhost',
      data: {
        WeiXinText,  // 把取到的值传到服务器上
        },
      //method:'POST',
      header:{
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if(res.data==''){
          wx.showModal({
            title: '提示',
            content: '输入不能为空',
          })
        }
        // 服务器返回了动态内容，如
        that.setData({
          text: res.data.text // 这里取到了远程服务器根据不同的id返回的动态内容
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    message: '../../img/0.jpg'
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