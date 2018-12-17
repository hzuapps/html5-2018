// pages/connect_send/connect_send.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    method: ["email","QQ", "weixin", "phone"],
    methodindex: 0,
    inputsize:0,
    max:140
  },
  
  bindCountryCodeChange: function (e) {
    this.setData({
      methodindex: e.detail.value
    })
  },
  
  alerts:function(e)
  {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 3000
    });
  },
  alertssuce: function (e) {
    wx.showToast({
      title: e,
      icon: 'success',
      duration: 3000
    });
  },
  send_server:function(e)
  {
    var that=this.data;
    var check=e.detail.value.checknum;
    var methodsub=that.methodindex;
    var sendmes = e.detail.value.textarea;
    if (check== "") {
      this.alerts("您还未输入联系方式");
      return;
    } else {
      switch (methodsub) {
        case 0:
          if (/^\w+@\w+\.\w+$/.test(check)) {
            if (sendmes != "")
              break;
            else
            {
              this.alerts("您未输入内容");
              return;
            }
          }
          else
            this.alerts("请输入合法的联系方式");
          break;
        case 1:
        case 2:

          if (/^\d+$/.test(check)) {
            if (sendmes != "")
              break;
            else
            {
              this.alerts("您未输入内容");
              return;
            }
          }
          else
          {
            this.alerts("您未输入内容");
            return;
          }
          break;
      }
    }
    this.alertssuce("发送成功");
  },
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      inputsize: len //当前字数
    });
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