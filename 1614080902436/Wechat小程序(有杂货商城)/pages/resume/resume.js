// pages/resume/resume.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    infoList:[
      {
        title:"性别",
        desc:"男性"
      },
      {
        title:"民族",
        desc:"汉族"
      },
      {
        title:"学历",
        desc:"本科"
      },
      {
        title:"政治面貌",
        desc:"团员"
      }
    ],
    occList:[
      {
        src:"../../images/qian.png",
        name:"前端工程师",
        sal:"5K-10K"
      },
    ],
    curId:0,
    listInfo: [
      {
        text: '我',
        clas:'icon-my footer-select',
        clas2:'footer-select'
      },
      {
        text: '教育',
        clas: 'icon-jiaoyu'
      },
      {
        text: '联系',
        clas: 'icon-lianxi1'
      },
    ] 
  },
  Navigation: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.curId != index)
    {
      if (index == 1) {
        wx.redirectTo({
          url: 'edu/edu',
        })
      }
      else{
        wx.redirectTo({
          url: 'contact/contact',
        })
      }
    }
    
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