//index.js
var app = getApp()
Page({
  data: {
    userListInfo: [{
      id:1,
      imgUrls: [    'http://img.zcool.cn/community/011854584e0ceaa8012060c8613937.jpg@3000w_1l_2o_100sh.jpg',
'http://img4.imgtn.bdimg.com/it/u=2155203692,1940088146&fm=26&gp=0.jpg', "http://img.zcool.cn/community/014932584e0c8da8012060c8922f7e.jpg@1280w_1l_2o_100sh.jpg"
      ],
      text: '西湖',
      location :{longitude:'114.395510',latitude:'23.092430'},
      phone:"0752-2120624",
      p:"惠州市惠城区西湖风景区"
    }, {
        id: 2,
      imgUrls: [
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234231651,1999849000&fm=26&gp=0.jpg',
'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3997824042,902963205&fm=26&gp=0.jpg',
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2413473344,1270538335&fm=26&gp=0.jpg' 
      ],
      text: '大亚湾森林公园',
      location: { longitude: '114.672520', latitude: '22.803520' },
        phone: "0752-520000",
      p: "惠州市惠阳区大亚湾"
    }, {
        id: 3,
      imgUrls: [
'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2494342043,3643241742&fm=26&gp=0.jpg',
'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1826759096,2074818390&fm=26&gp=0.jpg', 
'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3426562941,1178073938&fm=26&gp=0.jpg'
      ],
      text: '红花湖',
      location: { longitude: '114.360690', latitude: '23.074070' },
      phone: "0752-2273669",
      p: "惠州市惠城区红花湖景区"
    }, {
        id: 4,
      imgUrls: [
'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=147356340,484178566&fm=26&gp=0.jpg',
'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856119709,3134762705&fm=26&gp=0.jpg', 
'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=276038072,1331097742&fm=26&gp=0.jpg'
      ],
      text: '巽寮湾',
      location: { longitude: '114.755230', latitude: '22.688500' },
      phone: "0752-8736668",
      p: "惠州市惠东县"
    }, {
        id: 5,
      imgUrls: [
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3803737937,1810644509&fm=200&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349412161,772284414&fm=26&gp=0.jpg',
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2310774608,572440051&fm=26&gp=0.jpg'
      ],
      text: '双月湾',
        location: { longitude: '114.902603', latitude: '22.565405' },
        phone: "0752-5588697",
        p: "惠州市惠东县平海镇"
    }, {
        id: 6,
      imgUrls: [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2992481475,3413471099&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2504480759,3309537878&fm=26&gp=0.jpg', 
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4029109667,3049738714&fm=26&gp=0.jpg'
      ],
      text: '罗浮山',
      location: { longitude: '114.033640', latitude: '23.290400' },
        phone: "0752-6668600",
        p: "惠州市博罗县长宁镇"
    }]
  },
  navigator: function (e) {
    let a = JSON.stringify(e.currentTarget.dataset.id)
    console.log(a)
    wx.navigateTo({
      url: '../demo/demo?testData='+a,
      success: function (e) {
        console.log(e.errMsg);
      }
    })
  },
  callphone:function(e){
    var phonenum = e.currentTarget.dataset.num
    wx.makePhoneCall({
      phoneNumber: phonenum,
      success() {
        console.log('成功拨打电话')
      }
    })
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