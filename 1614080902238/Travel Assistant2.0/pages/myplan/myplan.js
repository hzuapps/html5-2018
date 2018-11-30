Page({

  /**
   * 页面的初始数据
   */
  data: {
    json: null,
    jsonKeyArr: null,
    joinSumArr: null,
    isNul: true
  },
  
          //本地化
        
  //获取弹窗所需信息（username，password，tip）
  getMsg: function (event) {
    console.log(event.currentTarget.id)
    let tit = event.currentTarget.id
    let current = this.data.json[tit]
    let tip = null
    if (current.tip) {
      tip = '备    注：' + current.tip
    } else {
      tip = ''
    }
    //弹窗提示
    wx.showModal({
      title: tit,
      content:'时间：' + current.password,
      confirmText: "确定",
    
     
    });
  },
  //初始化信息，在onLoad,onShow上执行
  initMag() {
    let rJson = null
    const fileSys = wx.getFileSystemManager()
    try {//获取数据
      rJson = fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, "utf8")
      rJson = JSON.parse(rJson)

      let keyArr = Object.keys(rJson)
      let tArr = []
      for (let x = 0; x < keyArr.length; x++) {
        tArr[x] = x
      }
      console.log(keyArr.length)
      if (!keyArr.length) {
        this.setData({
          isNul: true
        })
      } else {
        this.setData({
          isNul: false
        })
      }
      this.setData({
        json: rJson,
        jsonKeyArr: keyArr,
        joinSumArr: tArr
      })
    } catch (e) {//说明没有文件
      this.setData({
        isNul: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initMag()
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
    this.initMag()
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