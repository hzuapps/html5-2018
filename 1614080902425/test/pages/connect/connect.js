// pages/connect/connect.js
var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      tabs: ["番表", "建议箱", ],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
    mes:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.getStorage({
      key: 'index',
      success: res => {
        this.setData({
          mes: res.data
        })
        //console.log(res.data)
      }
    })
  },
  Delete:function(e)
  {
    var title = e.currentTarget.id
    //console.log(title)
    wx.showActionSheet({
      itemList: ['删除追番', '取消'],
      success: res => {
        var mesold = new Object()
        if (!res.cancel) {
          if(res.tapIndex==1)
            return;
          try {
            var value = wx.getStorageSync('index')
            if (value) {
              mesold = value
            }
          } catch (e) {
          }
          delete mesold[title]
          wx.setStorage({
            key: 'index',
            data: mesold,
            success: res => { this.onLoad()}
          })
        }
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShow: function()
  {
    wx.switchTab({
      url: '/pages/connect/connect',
      success(res) {
        var page = getCurrentPages().pop()
        //console.log(page)
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
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