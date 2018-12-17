//index.js
//获取应用实例
var app = getApp()
const AV = require('../../utils/av-weapp.js');
Page({
  data: {
    getSrc: "../../images/a.png",//捡一个
    throwSrc: "../../images/b.png",//扔一个
    mySrc: "../../images/c.png"//我的
  },
  onLoad: function () {
    const user = AV.User.current();
    // 调用小程序 API，得到用户信息  
    wx.getUserInfo({
      success: ({userInfo}) => {
        console.log(userInfo)
        // 更新当前用户的信息  
        user.set(userInfo).save().then(user => {
          // 成功，此时可在控制台中看到更新后的用户信息  
          this.globalData.user = user.toJSON();
        }).catch(console.error);
      }
    });
  },
  //捡一个
  get: function () {
    console.log("捡一个")
    //随机去后台拉取一个录音
    wx.navigateTo({
      url: '../get/get',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //扔一个
  throw: function () {
    console.log("扔一个")
    wx.navigateTo({
      url: '../write/write',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //我的瓶子
  mine: function () {
    console.log("我的瓶子")
    wx.navigateTo({
      url: '../mine/mine',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
