
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(params) {
    // const apiUrl =  'https://v2.jinrishici.com/one.json';
    const apiUrl = 'https://v1.hitokoto.cn/';
    const _this = this;
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // console.log(res.data.title);
        console.log('new：{ ' + res.data.hitokoto + ',' + res.data.from + ' }');
        _this.setData({
          content: res.data.hitokoto,
          author: res.data.from,
          loading: false
        })
      }
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

  },

  // 下拉刷新
  onPullDownRefresh: function () {
    // 动态设置导航条标题
    wx.setNavigationBarTitle({
      title: ''
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    const apiUrl = 'https://v1.hitokoto.cn/';
    const _this = this;
    // 发送请求
    wx.request({
      url: apiUrl,
      data: {},
      header: {
        "Content-Type": "json"
      },
      //请求成功的函数处理
      success: function (res) {
        // res.data.title = res.data.hitokoto;   //对数据进行更新
        console.log('new：{ ' + res.data.hitokoto + ',' + res.data.from + ' }');
        _this.setData({
          content: res.data.hitokoto,
          author: res.data.from,
        });
      },
      fail: function (res) {                             //请求失败的处理
        console.log(res.data.status);
      },
      complete: function () {
        wx.hideNavigationBarLoading();                   //完成停止加载
        // 动态设置导航条标题
        wx.setNavigationBarTitle({
          title: '下拉刷新..'
        });
        wx.stopPullDownRefresh();                       //停止下拉刷新
      }
    })
  },

  posLike: function (e) {
    //表单数据
    var objData = e.detail.value;
    if (objData.content && objData.author) {
      let arr = wx.getStorageSync("msgList") || [];
      arr.unshift(objData);
      wx.setStorageSync("msgList", arr)
      wx.reLaunch({
        url: '../detail/detail',
      })
    }
    console.log("已添加至我喜欢：" + e.detail.value.content + "——" + e.detail.value.author);
  },

})