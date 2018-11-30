var app = getApp()
var bmap = require('../../utils/bmap-wx.min.js')
let str
Page({
  data: {
    detail:{},
    userInfo: {},
    weatherData: '' ,
    //默认未获取地址
    hasLocation: false,
    addressboolean:false,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function (options) {
    str = JSON.parse(options.testData)
    console.log(str)
    var that = this
    var BMap = new bmap.BMapWX({
      ak: 'CNbLClgxybzaGyV0Ma8PZ1hzBZgGR2Ez'
    });
    var fail = function (data) {
      console.log(data)
    }; 
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    } 
    BMap.weather({
      fail: fail,
      success: success
    }); 
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        detail:str,
        userInfo: userInfo
      })
    })
  },
  //获取经纬度
  getLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      type:'wgs84',
      success: function (res) {
        console.log(res)
        that.setData({
          addressboolean:false,
          hasLocation: true,
          location: {
            longitude: str.longitude,
            latitude: str.latitude
          }
        })
      }
    })
  },
  //根据经纬度在地图上显示
  openLocation: function (e) {
    console.log("openLocation" + e)
    var value = e.detail.value
    var that = this
    that.setData({
      addressboolean: false
    })
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  },
  //选择位置位置
  chooseLocation: function (e) {
    console.log(e)
    var that = this
    wx.chooseLocation({
      success: function (e) {
        // success
        console.log(e)
        that.setData({
          hasLocation:true,
          addressboolean:true,
          address:{
            name:e.name,
            address:e.address
          },
          location: {
            longitude: e.longitude,
            latitude: e.latitude
          }
        })
        console.log(that.data.addressboolean)
      },
      fail: function (res) {
       
      },
      complete: function (res) {
      
      }
    })
  }
})
