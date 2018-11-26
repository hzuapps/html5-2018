// pages/index/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    l1:0,
    l2:0,
    l3:0,
    l4:0,
    l5:0,
    l6:0,
    years: 2018,
    months:11,
  },
  addyears:function(){
    this.data.years++
    this.setData({
      years:this.data.years,
    })
  },
  reduceyears:function(){
    this.data.years --
    this.setData({
      years:this.data.years
    })
  },
  reducemonths:function(){
    this.data.months --
    this.setData({
      months:this.data.months
    })
  },
  addmonths:function(){
    this.data.months ++
    this.setData({
      months:this.data.months
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now=new Date();
    var date=now.getDate;
    this.data.l1=1
    this.data.l2=1
    this.data.l3=1
    this.data.l4=1
    this.setData({
      'color26':'#FF6347',
      l1:this.data.l1,
      l2:this.data.l2,
      l3:this.data.l3,
      l4:this.data.l4,
      'newday1':1,
      'newday2':2,
      'newday3':3,
      'newday4':4,
      'newday5':5,
      'newday6':6,
      'newday7':7,
      'newday8':8,
      'newday9':9,
      'newday10':10,
      'newday11':11,
      'newday12':12,
      'newday13':13,
      'newday14':14,
      'newday15':15,
      'newday16':16,
      'newday17':17,
      'newday18':18,
      'newday19':19,
      'newday20':20,
      'newday21':21,
      'newday22':22,
      'newday23':23,
      'newday24':24,
      'newday25':25,
      'newday26':26,
      'newday27':27,
      'newday28':28,
      'newday29':29,
      'newday30':30,
      'text':'暂无待记事项'
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
 changeyears:function(){
this.Setdata({
  yeas:'2019'
})

 }
})
