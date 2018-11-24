//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    inputinfo:null,
    appKey:"02d00605-8c68-452a-9798-229a36962b65",
    requestData: { "OrderCode": "", "ShipperCode": "STO", "LogisticCode": "3383906119457" },
  },
  encrypt(data, appkey) {
         return urlencode(base64_encode(md5(Data.appKey)));
  },
  resurlencode(resquestData){
    return encodeURI(resquestData)
  },
  getkuaidi(order,cb) {
    console.log(this.globalData.requestData)
    
    wx.request({
      //url: 'http://www.kuaidiapi.cn/rest/?uid=106750&key=fab82b6192fa4c3eb514aa42106ee516&order=3383906119457'+order+'&id=shentong',
      url:'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
      header: {
        "content-type": 'application/x-www-form-urlencoded'
      },
      data:{
        "requestData": urlencode(this.globalData.resquestData),
        "EBusinessID": "1406550",
        "RequestType":"1002",
        "DataSign":"this.encrypt(this.globalData.requestData, this.globalData.appkey)"
      },
      
      method: 'POST',


      success(res){
        console.log("准备回调");
        console.log(res.data);
        cb(res.data);
      }
    })
  }
})