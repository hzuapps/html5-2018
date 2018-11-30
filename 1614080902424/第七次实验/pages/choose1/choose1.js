// pages/choose1/choose1.js

const app = getApp()

Page({
  
  data: {
    motto: '今天吃点啥——惠院专属版',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    food1:null,
    juice1:null,
    
    food3: wx.getStorageSync('food'),
    juice3: wx.getStorageSync('juice'),
    
  },
  //事件处理函数
 food:function(e){
    
      this.setData({
        food1:e.detail.value,
        
      });
    
  },
  juice: function (e) {

    this.setData({
      juice1: e.detail.value,

    });

  },
  yes:function(){
    //var m =["云吞","中苑饭堂","煲仔饭","意粉","酸菜鱼",'北苑饭堂','教职工',"黄焖鸡米饭","炒米丝","炒河粉","炒面","汤米丝","汤米粉","汤面","叉烧拼肉卷","叉烧拼盐焗鸡","盐焗鸡拼肉卷","盐焗鸡拼烧鸭","肉卷拼烧鸭","酸汤肥牛","海鲜鱼粉","排骨饭","紫苏鸭肉饭","汉堡包","寿司","鸡排饭"];
    //var m1 = ["茉香奶茶","芝士奶盖","黑糖脏脏奶","水果捞",'苹果汁','柠檬汁','火龙果汁','西瓜汁','胡萝卜汁','猕猴桃汁','椰子汁','酸奶','可乐','雪碧','维他奶','珍珠奶茶','百香ＱＱ茶','丝袜奶茶','香芋奶茶','招牌奶茶','西瓜西米露','芒果西米露','椰果奶茶','芋圆西米露','水果茶','西柚红茶','冰红茶','旋风奶茶','芒果气泡饮','奇异果气泡饮'];
    //console.log(m);
   // console.log(m1);
    //wx.setStorageSync('food', m);
   // wx.setStorageSync('juice',m1);
    //this.data.food1 = wx.getStorageSync('food');
    //this.data.juice1 = wx.getStorageSync('juice');
    if (this.data.food1 == null) { this.data.food1=wx.getStorageSync("food");}
    if (this.data.juice1 == null) { this.data.juice1 = wx.getStorageSync("juice"); }
    var a1 = this.data.food1;
    var a2 = this.data.juice1;
    wx.setStorageSync('food', a1);
    wx.setStorageSync('juice', a2);
    /*if (this.data.food1 == null) { 
      this.data.food1 = wx.getStorageSync('food');
      var a1 = this.data.food1;
      wx.setStorageSync('food', a1);
    }
    else{
      var a1 = this.data.food1;
      var a3 = a1.split(',');
      wx.setStorageSync('food', a3);
    }
    if (this.data.juice1 == null) {
       this.data.juice1 = wx.getStorageSync('juice');
       var a2 = this.data.juice1;
      wx.setStorageSync('juice', a2);
    }
    else{
      var a2 = this.data.juice1;
      var a4 = a2.split(',');
      wx.setStorageSync('juice', a2);
    }*/
    //var a1 = this.data.food1;
   // var a2 = this.data.juice1;
    //var a3 = a1.split(',');
   // var a4 = a2.split(',');
   // console.log(a3);
    //console.log(a4);
    //wx.setStorageSync('food', a1);
    //wx.setStorageSync('juice', a2);

    //console.log(this.data.food1);
    //console.log(this.data.juice1);
    //console.log(this.data.food3);
    
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

