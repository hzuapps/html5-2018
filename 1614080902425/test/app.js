"use strict";
var util = require('/utils/util.js');
Object.defineProperty(exports, "__esModule", { value: true });
App({
  alerts: function (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 5000
    });
  },
    Requestfun:function(){
      var time = util.formatDate(new Date());
      let date = util.getDates(1, time);
      var today=date[0].week;
      console.log(today);
      if(today==this.globalData.today)
        {
          console.log("today true");
          return;
        }
      var _this = this;
      wx.request({
        url: 'https://heweisheng.top/cgi-bin/test.py',
        //url:'https://raw.githubusercontent.com/heweisheng/html5-2018/master/1614080902425/test.json',
        data: String,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          wx.setStorage({
            key: 'mes',
            data: res.data,
          })
          _this.globalData.update = 1
          _this.globalData.today=today
        },
        fail(res) {
          _this.globalData.today=0
          _this.alerts("网络好像不太好")
        }
      })
    },
    onLaunch: function () {
        this.Requestfun();
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (_res) {
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {update:0,today:""}
});
