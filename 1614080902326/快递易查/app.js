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
    appVersion:"1.0.1",
    errorCode: "",
    userInfo: null,
    inputValue:null,
    inputinfo:null,
    orderNo:0,//全局订单号
    currentCompany: "",
    currentCompanyIcon: "../../images/pic_160.png",
    company: [{ "id": "yuantong", "name": "圆通快递", "icon_path": "../../images/icon_tabbar.png" }, { "id": "zhongtong", "name": "中通快递", "icon_path": "" }, { "id": "shentong", "name": "申通快递", "icon_path": "" }, { "id": "ems", "name": "中国邮政", "icon_path": "" }, { "id": "yunda", "name": "韵达快递", "icon_path": "" }, { "id": "shunfeng", "name": "顺丰速运", "icon_path": "" }, { "id": "huitongkuaidi", "name": "百世汇通", "icon_path": "" }, { "id": "debangwuliu", "name": "德邦快递", "icon_path": "" }, { "id": "tiantian", "name": "天天快递", "icon_path": "" }, { "id": "suning", "name": "苏宁快递", "icon_path": "" }, { "id": "yuntongkuaidi", "name": "运通快递", "icon_path": "" }, { "id": "rufengda", "name": "如风达", "icon_path": "" }, { "id": "empty", "name": "空", "icon_path": "" }],
  },
  
  getkuaidi(order,cb) {
    var company = this.globalData.company
    var i = 0
    var that = this
    var comID = ""
    var comName = ""
    var comIconPath = ""
    var no = ""
    request()
    wx.showLoading({
      title: '努力查询中',
    })
    function insertCache(res){
      var localItems = wx.getStorageSync("localItems") || []
      var no = res.data.nu
      console.log("插入单号：",no)
      var currentMessage = res.data.data[0].context //当前单号最近消息
      localItems.unshift({ comID, comName, no, currentMessage })//写入item
      console.log("local长度：", localItems.length)
      console.log("删除前：", localItems)
      // 刷新记录
      for (var i = 1; i < localItems.length; i++) {
        if (no === localItems[i].no && localItems.length > 1) {
          localItems.splice(i, 1)
        }
        
      }
      
      wx.setStorageSync("localItems", localItems)
      console.log("缓存：", localItems)
    }
    function request(){
      comID = company[i].id
      comName = company[i].name
      comIconPath = company[i].icon_path
      console.log("列举", comID)
      console.log("company:", company[i].name)
      //no = that.globalData.orderNo
      no = order
      console.log("request前验证单号：",no)
      if(comID !=="empty"){
        wx.request({
          //url: 'https://www.kuaidi100.com/query?type=' + comID + '&postid=3383906119457  3915479683233',
          url: "https://www.kuaidi100.com/query?type=" + comID + "&postid=" + no ,
          success(res){
            if (res.data.status === "201" && i <= company.length){
              console.log("app.js失败states：",res.data.status)
              i++
              request()
            }
            else if (res.data.status === "200"){
              console.log(res.data)
              wx.hideLoading()
              that.globalData.currentCompany = comName
              that.globalData.currentCompanyIcon = comIconPath
              console.log("这里这里", that.globalData.currentCompany, that.globalData.currentCompanyIcon)
              //记录写入缓存
              insertCache(res)
            }
            else if (res.data.status === "400"){
              wx.showToast({
                title: '快递订单号有误，或者单号已经过期',
                icon: 'none'
              })
              setTimeout(function () {
                wx.hideToast()
                wx.navigateBack({
                })
              }, 2000)
            }
            else{
              console.log("错误代码：", res.data.status)
              wx.showToast({
                title: '系统错误！错误代码：' + res.data.status,
                icon: 'none'
              })
              setTimeout(function () {
                wx.hideToast()
                wx.navigateBack({
                })
              }, 2000)
            }
            console.log(res.data);
            console.log(comID,comName)
            cb(res.data);
          }
        })
      }
      else if (comID === "empty") {
        that.globalData.errorCode = 0
        console.log("错误代码：", that.globalData.errorCode)
        wx.showToast({
          title: '单号不存在或已过期',
          icon:'none'
        })
        setTimeout(function(){
          wx.hideToast()
          wx.navigateBack({
          })
        },1000)
      }
      console.log(no)
    }
  },
  
})