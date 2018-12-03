// pages/myinfo/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null
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

  },
  bind:function(res){
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://oa2.ruixinyunke.com/checkbind/',
      method:"post",
      data:{
        username:this.data.username,
        password: this.data.password,
        openid:getApp().globalData.openid
      },
      success:function(res){
        if(res.data.status >= 0){
          getApp().globalData.sessid = res.data.sessid;
          getApp().globalData.wskey = res.data.wskey;
          wx.showToast({
            title:'员工绑定成功',
            icon: "none"
          });
          wx.switchTab({
            url: '/pages/chat/chat',
          })
          getApp().init();
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:"none"
          })
        }
      },
      complete:function(){
        wx.hideNavigationBarLoading();
      }
    })
  },
  inputusername:function(res){
    this.data.username = res.detail.value;
  },
  inputpassword:function(res){
    this.data.password = res.detail.value;
  }
})