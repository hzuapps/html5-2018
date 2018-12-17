// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  bt:function(){
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://infoaas.com/html5-2018/1614080902310/猜猜邂逅语/app.json',
      headers: {
        'Content-Type': 'application/json'
      },
      method: "get",
      success: function (res) {
        console.log(res.data.pages)
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          shuzu: res.data.pages,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })

      }
    })
  },
  bt1:function(){
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://infoaas.com/html5-2018/1614080902310/猜猜邂逅语/app.json',
      headers: {
        'Content-Type': 'application/json'
      },
      
      method: "post",
      data:{
        pages:"hello"
      },
      success: function (res) {
        console.log("上传成功")
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          test:res.data
          
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })

      }

      
    })
  }
})