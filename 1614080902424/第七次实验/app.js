//app.js




App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (!wx.getStorageSync('food')) {
      var m = "云吞,中苑饭堂,煲仔饭,意粉,酸菜鱼,北苑饭堂,教职工,黄焖鸡米饭,炒米丝,炒河粉,炒面,汤米丝,汤米粉,汤面,叉烧拼肉卷,叉烧拼盐焗鸡,盐焗鸡拼肉卷,盐焗鸡拼烧鸭,肉卷拼烧鸭,酸汤肥牛,海鲜鱼粉,排骨饭,紫苏鸭肉饭,汉堡包,寿司,鸡排饭";
      wx.setStorageSync('food', m);
      
    }
    if (!wx.getStorageSync('juice')) {
      var m1 = "茉香奶茶,芝士奶盖,黑糖脏脏奶,水果捞,苹果汁,柠檬汁,火龙果汁,西瓜汁,胡萝卜汁,猕猴桃汁,椰子汁,酸奶,可乐,雪碧,维他奶,珍珠奶茶,百香ＱＱ茶,丝袜奶茶,香芋奶茶,招牌奶茶,西瓜西米露,芒果西米露,椰果奶茶,芋圆西米露,水果茶,西柚红茶,冰红茶,旋风奶茶,芒果气泡饮,奇异果气泡饮";
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