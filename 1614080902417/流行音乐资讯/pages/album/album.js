// pages/album/album.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    _: Date.now(),
    radioList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  
    // 从服务器取回来 JSON
    wx.request({
      url: 'http://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
     
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var radioList=res.data.data.radioList;
        //console.log(radioList);
        if(radioList=null){
          radioList=[];
        }
        
        that.setData({
          radioList: res.data.data.radioList
        });
        


        /*
        that.setData({
          hasError: true,
          errorText: res.data.name + ',' + res.data.teacher + ' ' + res.data.year
        })*/
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

  }
})