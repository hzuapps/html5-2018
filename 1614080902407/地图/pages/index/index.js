//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    latitude:0,
    longitude:0,
    message:"", //输入框所输入的内容
    nowLocation:"", //所选位置
    flag:false,  //判断搜索框是否被单击
    myCity:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  bindGetUserInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    //最后，记得返回刚才的页面
    wx.navigateBack({
      delta: 1
    })
  },
  bindblur: function (e) {
    this.setData({
      flag:false
    })
      var that = this;
     // 引入SDK核心类
     var QQMapWX = require('./qqmap-wx-jssdk.min.js');
     // 实例化API核心类
     var demo = new QQMapWX({
       key: 'H4QBZ-3FLH3-PI23G-YQ6FQ-23PWK-X7BCU' // 必填
     });
    this.setData({
      message:e.detail.value
    })
     // 调用接口
     demo.getSuggestion({
       keyword: e.detail.value,
       region: this.data.myCity,
       region_fix: 1,

       success: function (res) {
         that.setData({
           data: res.data
         })
       },
       fail: function (res) {
         console.log(res);
       },
       complete: function (res) {
         console.log(res);
       }
     });
  },
  //事件回调函数
  driving: function () {
    var _this = this;
    //网络请求设置
    var opt = {
      //WebService请求地址，from为起点坐标，to为终点坐标，开发key为必填
      url: 'https://apis.map.qq.com/ws/direction/v1/driving/?from=39.989221,116.306076&to=39.828050,116.436195&key=H4QBZ-3FLH3-PI23G-YQ6FQ-23PWK-X7BCU',
      method: 'GET',
      dataType: 'json',
      //请求成功回调
      success: function (res) {
        var ret = res.data
        if (ret.status != 0) return; //服务异常处理
        var coors = ret.result.routes[0].polyline, pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        }
        //设置polyline属性，将路线显示出来
        
        _this.setData({
          polyline: [{
            points: pl,
            color: '#FF0000DD',
            width: 2
          }]
        })
      }
    };
    wx.request(opt);
    console.log(this.data)
  },
  getID:function(e){
    var viewID = e.target.id;
    console.log(viewID)
    this.setData({
      nowLocation:this.data.data[viewID].title,
      flag:true,
      message: this.data.data[viewID].title,
      latitude: this.data.data[viewID].location.lat,
      longitude: this.data.data[viewID].location.lng
    })
    // 引入SDK核心类
    var QQMapWX = require('./qqmap-wx-jssdk.min.js');
    // 实例化API核心类
    var demo = new QQMapWX({
      key: 'H4QBZ-3FLH3-PI23G-YQ6FQ-23PWK-X7BCU' // 必填
    });

    // 调用接口
    demo.reverseGeocoder({
      location: {
        latitude: this.data.lat,
        longitude: this.data.lng
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
    console.log(this.data.nowLocation)
  },
  onLoad: function () {
    var that = this
    wx.getLocation({
      success: function(res) {
        console.log("坐标"+res.latitude+"  "+res.longitude)
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
        // 引入SDK核心类
        var QQMapWX = require('./qqmap-wx-jssdk.min.js');
        // 实例化API核心类
        var demo = new QQMapWX({
          key: 'H4QBZ-3FLH3-PI23G-YQ6FQ-23PWK-X7BCU' // 必填
        });
        console.log(that.data.latitude)
        // 调用接口
        demo.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            that.data.myCity = res.result.address_component.city;
            console.log(res.result.address_component.city);

          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      },
    })
    
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
        withCredentials: true,
        success: function (res) {
          //此处为获取微信信息后的业务方法
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: function () {
          //获取用户信息失败后。请跳转授权页面
          wx.showModal({
            title: '警告',
            content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateTo({
                  url: '../tologin/tologin',
                })
              }
            }
          })
        }
      })
    }
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
