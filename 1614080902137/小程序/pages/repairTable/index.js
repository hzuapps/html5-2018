// pages/repairTable/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
    ]
  },
  detail: function(e) {
    var id = e.currentTarget.id;
    var str = "routers[" + (id - 1) + "].display";
    if(this.data.routers[id - 1].display == "none"){
      this.setData({
        [str]: "block"
      })
    }else{
      this.setData({
        [str]: "none"
      })
    }

  },
  del: function(e){
    var id = e.currentTarget.id;
    var arr = wx.getStorageSync("repair");
    console.log(arr);
    arr.splice(id-1, 1);
    console.log(arr);
    wx.setStorageSync("repair", arr);
    this.onLoad();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync("repair");
    for (var i = 0; i < arr.length; i++) {
      arr[i].ID = i + 1;
      arr[i].display = "none";
    }
    wx.setStorageSync("repair", arr);
    this.setData({
      routers: wx.getStorageSync("repair")
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