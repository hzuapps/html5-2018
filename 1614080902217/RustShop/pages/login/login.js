// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorageSync('cookieKey');
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

  },
  submitLogin: function(e){

    if(e.detail.value.username.length==0 || e.detail.value.password.length==0)
    {
      wx.showToast({
        title: '账号密码不能为空',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function(){
        wx.hideToast();
      },2000)
      return;
    }
    
    var cookie = wx.getStorageSync("cookieKey");      //检查当前是否有cookie 用于保持与服务端会话，小程序每次请求都是一次新的会话
    if(cookie)
    {
      var header = { "Content-Type": "application/x-www-form-urlencoded", 'Cookie': cookie }
    }
    else { var header = { "Content-Type": "application/x-www-form-urlencoded"} }
    
    console.log("header=" + JSON.stringify(header))

    wx.request({
      url: 'http://www.playrust.shop/user/ajax?action=login',
      header: header,
      method: "POST",
      data: {username:e.detail.value.username,password:e.detail.value.password},
      success: function(res)
      {
        console.log(res.data)
        if(res.data.includes("成功"))
        {
          console.log("---准备跳转---")
          wx.setStorageSync('cookieKey', res.header['Set-Cookie'])
          console.log(res.header['Set-Cookie']) //储存response头中的Set-Cookie用于下一次会话
        wx.switchTab({
          url: '/pages/index/index',
        })
        }
        else {
          wx.showToast({
            title: res.data,
            icon: 'loading',
            duration: 1500
          })
          setTimeout(function(){
          wx.hideToast();            
          },2000)
        }
        
      }
    })
  }
})