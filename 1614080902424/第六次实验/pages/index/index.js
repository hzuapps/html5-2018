//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '今天吃点啥——惠院专属版',
    top:'先来告诉我你钱包如何？',
    food: '今天吃：',
    drink: '今天喝：',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hiddenmodalput: false,
    rich:false,
    poor:false,
    poor1:true,
    rich1:true,
    a: ['云吞', '中苑饭堂', '煲仔饭', '意粉', '酸菜鱼', '北苑饭堂', '教职工', '黄焖鸡米饭', '炒米丝', '炒河粉', '炒面', '汤米丝', '汤米粉', '汤面', '叉烧拼肉卷', '叉烧拼盐焗鸡', '盐焗鸡拼肉卷', '盐焗鸡拼烧鸭', '肉卷拼烧鸭', '酸汤肥牛', '海鲜鱼粉', '排骨饭', '紫苏鸭肉饭', '汉堡包', '寿司', '鸡排饭'],
    b: ['茉香奶茶', '芝士奶盖', '黑糖脏脏奶', '水果捞', '苹果汁', '柠檬汁', '火龙果汁', '西瓜汁', '胡萝卜汁', '猕猴桃汁', '椰子汁', '酸奶', '可乐', '雪碧', '维他奶', '珍珠奶茶', '百香ＱＱ茶', '丝袜奶茶', '香芋奶茶', '招牌奶茶', '西瓜西米露', '芒果西米露', '椰果奶茶', '芋圆西米露', '水果茶', '西柚红茶', '冰红茶', '旋风奶茶', '芒果气泡饮', '奇异果气泡饮'],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  showok1:function(e){
    
    var that=this;
    
    var c1 = Math.floor(Math.random() * (that.data.a.length-1));
    var c2 = Math.floor(Math.random() * (that.data.b.length-1));

    console.log(that.data.a[c1]);
    console.log(that.data.b[c2]);
    this.setData({
      poor: true,
      poor1: false,
      rich1: false,
      food1: that.data.a[c1],
      drink1: that.data.b[c2],
    })
  },
  showok2: function () {
    var that = this;
    var c1 = Math.floor(Math.random() * (that.data.a.length-1));
    console.log(that.data.a[c1]);
    this.setData({
      rich:true,
      poor: false,
      poor1: false,
      rich1: true,
      food1: that.data.a[c1],
    })
  },
 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
