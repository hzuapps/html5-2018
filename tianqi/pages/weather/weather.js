var bmap = require('E:/微信开发者工具/tianqi/libs/bmap-wx.js');
Page({
  data: {
    weatherData: ''
  },
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'rKLHwor5Ciwgz2ll9s5zhIGE0liNuj8a'
    });
    var fail = function (data) {
      console.log('fail!!!!')
    };
    var success = function (data) {
      console.log('success!!!');
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
  }
})