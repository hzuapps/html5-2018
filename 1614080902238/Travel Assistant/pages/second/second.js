//index.js
var common = require('common.js')

Page({
  data: {
    weather: {}
  },
  onLoad: function () {
    var that = this;
    common.loadWeatherData(function (data) {
      that.setData({
        weather: data
      });
    });
  }
})