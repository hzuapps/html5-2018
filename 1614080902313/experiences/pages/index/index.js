// pages/index/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ina:'',
    // appina: [],
    // oj:{
    //   'addres':'',
    //   'long':'',
    //   'lat':'',
    //   'time':'',
    //   'text':'',
    //   'cont':''
    // },
    oj2: {
      'addres': '',
      'long': '',
      'lat': '',
      'time': '',
      'text': '',
    },
    appina2:[],
    tarr:[],
    // tion:false,
    sum:0,
    le:0

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
    if (!wx.getStorageSync('allsum'))
      wx.setStorageSync('allsum', 0)
    if (!wx.getStorageSync('sum'))
      wx.setStorageSync('sum', 0)
    var allsum2 = wx.getStorageSync('allsum')
    var sum2 = wx.getStorageSync('sum')
    this.data.le = wx.getStorageSync('allsum')
    if (!wx.getStorageSync('tion'))
      wx.setStorageSync('tion', false)
    if (sum2){
      var j = 0
      for (var i = 0; i < sum2; i++){
        
          for (var k = 0; k < allsum2; k++) {
            if (!wx.getStorageSync('test1' + j)){
              j++;
              console.log('test1'+j+false)
            }
            else{
              break;
            }
              
          }
        this.data.oj2.addres = wx.getStorageSync('test1' + j)[0]
        this.data.oj2.long = wx.getStorageSync('test1' + j)[1]
        this.data.oj2.lat = wx.getStorageSync('test1' + j)[2]
        this.data.oj2.time = wx.getStorageSync('test1' + j)[3]
        this.data.oj2.text = wx.getStorageSync('test1' + j)[4]
        this.data.appina2.unshift(this.data.oj2)
        this.data.tarr.unshift(j)
        this.setData({
          tarr: this.data.tarr,
          appina2: this.data.appina2
        })
         j++
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    
    if (!wx.getStorageSync('allsum'))
      wx.setStorageSync('allsum', 0)
    if (!wx.getStorageSync('sum'))
      wx.setStorageSync('sum', 0)

    var tion = wx.getStorageSync('tion')
    var allsum2 = wx.getStorageSync('sum')
    if (allsum2>0&&tion==true) {
      
      var cn = wx.getStorageSync('allsum')-1
      this.data.oj2.addres = wx.getStorageSync('test1'+cn)[0]
      this.data.oj2.long = wx.getStorageSync('test1'+cn)[1]
      this.data.oj2.lat = wx.getStorageSync('test1'+cn)[2]
      this.data.oj2.time = wx.getStorageSync('test1'+cn)[3]
      this.data.oj2.text = wx.getStorageSync('test1'+cn)[4]

      this.data.appina2.unshift(this.data.oj2)
      this.data.tarr.unshift(cn)
      this.setData({
        tarr: this.data.tarr,
        appina2: this.data.appina2
      })

      wx.setStorageSync('tion', false)
      
    }
    
    
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
    //当逻辑执行完后关闭刷新    
    wx.stopPullDownRefresh()
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
  addtop:function(e){
    console.log(this);
    
  },
  btch: function (e) { 
    //console.log('btch')
    var that = this
    wx.showModal(
      {
        title:'删除',
        showCancel:true,
        success (res){
          if (res.confirm) {
            console.log('用户点击确定')
            console.log(e)
            try {
              var eid = e.currentTarget.id
              var okid = eid.substring(0,1)
              var endid = eid.substring(2,3)
              var arr = 'test1' + okid
              wx.removeStorageSync(arr)
              var tri = that.data.appina2
              var tarr = that.data.tarr
              tri.splice(endid, 1)
              tarr.splice(endid, 1)
              that.setData({
                tarr:tarr,
                appina2: tri
              })
              var sum = wx.getStorageSync('sum')
              var sum2 = sum-1
              wx.setStorageSync('sum', sum2)
            } catch (e) {
              // Do something when catch error
            }
            
            

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      }
    )
  }
})
