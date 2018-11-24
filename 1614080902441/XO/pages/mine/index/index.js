// pages/mine/mine.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    

  },
  /**Login功能,获取openid */
  doLogin:function(e){
    console.log(e)
    wx.login({
      //success
      success(res) {
        console.log(res.code)
        //利用code获取openid
        wx.request({
          url: 'http://127.0.0.1:8080/wxLogin',
          data: {
            code: res.code,
          },
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          success: function (result) {

           console.log(result)
           // 保存用户信息到本地缓存，可以用作小程序端的拦截器
            wx.setStorageSync('openId', result.data.openId);
           // app.setGlobalUserInfo(result);
          

          },fail: function () {
            console.log("wx.request失败！")
          }

        })
      },
       fail: function () {
        // fail
         console.log("wx.login失败！")
      }
    })



    // 必须是在用户已经授权的情况下调用
    /*wx.getUserInfo({
      //success
      success: function (res) {
        console.log(res)
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      },
      fail: function () {
        // fail
        console.log("获取失败！")
      },
    })*/

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15217848368' //仅为示例，并非真实的电话号码
    })
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