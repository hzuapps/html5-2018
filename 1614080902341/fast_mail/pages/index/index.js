//index.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ddID: '',//订单号
    gsName: '',
    items: Array(),
    erorr: 2,
    erorrInfo: '',
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
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
       * 获取快递信息
       */
  getExpressInfo: function (ddID, gsID = 'YD') {
    //console.log(this.data.erorr);
    var that = this;
    //查物流
    //快递公司和，快递单号
    var logistics = [gsID, ddID]
    //数据内容
    var RequestData = "{'OrderCode':'','ShipperCode':'" + logistics[0] + "','LogisticCode':'" + logistics[1] + "'}"
    //utf-8编码的数据内容
    //console.log(RequestData)
    var RequestDatautf = encodeURI(RequestData)
    //console.log("RequestDatautf:" + RequestDatautf)
    //签名
    //console.log(RequestData + 'f062b375-af93-4521-bc48-ac74a4141196')
    var DataSign = encodeURI(util.Base64((util.md5(RequestData + 'f062b375-af93-4521-bc48-ac74a4141196'))))
    console.log("DataSign:" + DataSign)
    if (logistics != null) {
      wx.request({
        url: 'http://sandboxapi.kdniao.com:8080/kdniaosandbox/gateway/exterfaceInvoke.json',
        data: {
          //数据内容(进行过url编码)
          'RequestData': RequestDatautf,
          //电商ID
          'EBusinessID': 'test1404530',
          //请求指令类型：1002
          'RequestType': '1002',
          //数据内容签名把（请求内容（未编码）+ApiKey）进行MD5加密，然后Base64编码，最后进行URL（utf-8）编码
          'DataSign': DataSign,
          //请求、返回数据类型： 2-json；
          'DataType': '2',
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //console.log(res)
          if (res.data.Success) {
            that.setData({erorr: 0,items: res.data.Traces})
            console.log(that.data)
          } else {
            console.log("查询失败：" + res.data.Reason);
            that.setData({erorr: 1, erorrInfo: res.data.Reason})
          }
        }
      })
    }
  },

  /**
   * 设置运单号
   */
  setID: function (e) {
    this.setData({ddID: e.detail.value })
  },

  /**
   * 设置快递公司名字
   */
  setName: function (e) {
    this.setData({gsName: e.detail.value})
  },

 /**
  * 查询运单号
  */
  check: function(){
    var id = this.data.ddID
    var name = this.data.gsName
    if(id==''){
      wx.showModal({
        content: '请输入运单号',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    else if (name == '') {
      wx.showModal({
        content: '请输入快递公司',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    } else {
      //console.log(id);
      this.getExpressInfo(id);
    }
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
