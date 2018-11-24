// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display:"none",
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    num:1,
    src: 'http://fs.w.kugou.com/201811231559/51fe751d2df88681b6bfb32b8fabcbee/G013/M07/0F/14/rYYBAFUJ_yWAJlFNAEM9yop5Ql8418.mp3',
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

  /**
   * 左上角吊挂木牌跳转
   */
  jump1:function(){
    wx:wx.navigateTo({
      url: '../../pages/index3/index3',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 中间的电视机
   */
  jump2:function(){
    wx:wx.navigateTo({
      url: '../../pages/message/message',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   *右边的柜子
   */
  jump3: function () {
    wx:wx.navigateTo({
      url: '../../pages/box/box',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 右小角的爷爷
   */
  jump4: function () {
    this.setData({
      display:"block"
    })
  },
  /*
  *隐藏弹出来的对话框
  */
  hidd:function(){
    this.setData({
      display: "none"
    })
  },
  /**
   * 收音机
   */
  jump5: function () {
    console.log(1111);
  },

  listenerButtonPlay: function () {
    var num = this.data.num;
    if(num==1){
    wx.playBackgroundAudio({ dataUrl: 'http://fs.w.kugou.com/201811231559/51fe751d2df88681b6bfb32b8fabcbee/G013/M07/0F/14/rYYBAFUJ_yWAJlFNAEM9yop5Ql8418.mp3', title: '夏目友人帐', coverImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542998063834&di=256a5b83b31626bb0741862782963ccd&imgtype=0&src=http%3A%2F%2Fwww.pujia8.com%2Fstatic%2Fpics%2F20171012150007_31.jpg' });
    this.data.num=0;
    }
    else
    { wx.pauseBackgroundAudio();
      num=1;
      this.data.num = 1;
    } 
     },



})