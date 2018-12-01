// pages/Demo/demo.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:'请输入你的姓名',
    name:'',
    array: ['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
    array2: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20','21','22','23','24','25','26','27','28','29','30'],
    text:{},
    month: 0,
    day: 0,
    items: [
      { name: 'man', value: '男', checked: 'true'},
      { name: 'woman', value: '女' },
    ]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      month: e.detail.value
    })  
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      day: e.detail.value
    })
    
  },
  bindKeyInput: function (e) {
      this.setData({
      name: e.detail.value
    })
    
  },
  homebtn : function (e) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  startbtn: function (e) {
    console.log(this.data.name);
    if (this.data.name == '') {
      wx.showModal({
        title: '警告',
        content: '你总不能没有名字吧',
        showCancel:true
      })
    }
    else 
    {
      var month = this.data.month;
      month++;
      var day = this.data.day;
      day++;
      var name = this.data.name;
      wx.setStorageSync('month', month);
      wx.setStorageSync('day', day);
      wx.setStorageSync('name', name);
      wx.navigateTo({
        url: '/pages/mission_1/mission_1'
      })
      wx.vibrateShort({
        
      })
      wx.request({
        url: 'http://localhost:8080/MyWeb/miniprogramserverlet1',
        data:{
          name:name
        },
        header:{
          'content-type':'application/json'
        },
        method:'GET',
        success :function(res){
          
          
        },
        fail : function(res){
          
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      motto: '请输入你的姓名'
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