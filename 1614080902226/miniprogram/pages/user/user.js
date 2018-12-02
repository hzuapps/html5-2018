
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageview : null,
    username: '',
    // usernameInput: function (e) {
    //   this.setData({ username: e.detail.value })
    // }, 
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543681409241&di=efb7f1ce8db481facc192d275ee410e6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70a93296aaec08fa320d1be431875718%2F503d269759ee3d6dd25111e249166d224f4ade00.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543681320081&di=d0e8efb79e34d9d2194daf29f7c085d7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa8ec8a13632762d0506eeb84abec08fa513dc6bd.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3809927623,692596226&fm=26&gp=0.jpg'
    ],
    autoplay : true,
    indicatorDots:true,
    interval:3000,
    duration:500,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({imageview : wx.getSystemInfoSync().windowWidth})
    if(app.appData.userinfo == null){
      wx.navigateTo({
        url: '../settings/settings'
      })  
    }else{
      this.setData({username:app.appData.userinfo.username})
    }
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