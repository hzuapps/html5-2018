// pages/momee_set/mome_set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proes: ["我的生日是？", "我的爱好是？", "我的母亲是？", "我的父亲是？", "我的昵称是？", "我的学号是？", "我的工号是？"],
    proIndex: 0,
    lans: ''
  },
  bindProChange: function (e) {
    console.log('picker 发生选择改变，携带值为', e.detail.value);

    this.setData({
      proIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    let info = e.detail.value
    wx.setStorageSync('pro', info.pro)
    wx.setStorageSync('ans', info.ans)
    console.log(info.pro)
    console.log(info.ans)
    wx.showModal({
      content: '保存成功',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          //向前退两级
          wx.navigateBack({
            delta: 2
          })
        }
      }
    });
  },
  //初始化状态
  initInfo(){
    let pro = 0
    let ans = ''
    try {
      pro = wx.getStorageSync('pro')
      ans = wx.getStorageSync('ans')
      if(!pro){
        pro = 0
      }
      console.log("try",pro)
    } catch (e) {
      // Do something when catch error
      pro = 0
      ans = ''
      console.log("catch", pro)
    }
    this.setData({
      proIndex: pro,
      lans: ans
    })
    console.log("las", pro)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initInfo()
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