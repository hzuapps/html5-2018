// pages/mome/mome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proes: ["我的生日是？", "我的爱好是？", "我的母亲是？", "我的父亲是？", "我的昵称是？", "我的学号是？", "我的工号是？"],
    proIndex: 0,
  },
  bindProChange: function (e) {
    console.log('picker 发生选择改变，携带值为', e.detail.value);

    this.setData({
      proIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    let info = e.detail.value
    let pro = null
    let ans = null
    try {
      pro = wx.getStorageSync('pro')
      ans = wx.getStorageSync('ans')
      console.log("get",info.pro)
      console.log("get",info.ans)
      //判断忘记密码信息
      if(info.pro == pro && info.ans == ans){
        wx.showModal({
          content: '信息正确，请到设置中重新设置图形密码',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.switchTab({
                url: '/pages/new_pw/new_pw',
              })
            }
          }
        });
      } else {
        wx.showToast({
          title: "信息错误",
          icon: 'none',
          duration: 2000
        });
      }
    } catch (e) {
      // Do something when catch error
    }
    console.log(pro)
    console.log(ans)
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