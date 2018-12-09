//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (!wx.getStorageSync('hotdog')) {
      var m = "芝士热狗帮,拉丝热狗棒,网红芝士拉丝热狗棒,韩国芝士热狗棒,热狗肠,炸热狗棒,网红热狗棒,热狗包,炸热狗,耐饱热狗,精致热狗,大热狗,长热狗,情侣热狗,韩国热狗,伦敦热狗";
      wx.setStorageSync('hotdog', m);

    }
    if (!wx.getStorageSync('juice')) {
      var m1 = "百香ＱＱ茶,丝袜奶茶,香芋奶茶,招牌奶茶,西瓜西米露,芒果西米露,椰果奶茶,芋圆西米露,水果茶,西柚红茶,冰红茶,旋风奶茶,芒果气泡饮,奇异果气泡饮,茉香奶茶,芝士奶盖,黑糖脏脏奶,水果捞,苹果汁,柠檬汁,火龙果汁,西瓜汁,胡萝卜汁,猕猴桃汁,椰子汁,酸奶,可乐,雪碧,维他奶,珍珠奶茶,";
      wx.setStorageSync('juice', m1);

    }


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
    userInfo: null
  }
})