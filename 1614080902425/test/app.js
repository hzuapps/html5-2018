"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
  
    onLaunch: function () {
      wx.request({
        //url: 'http://120.79.37.250/cgi-bin/test.py', //暂无域名
        url:'https://raw.githubusercontent.com/heweisheng/html5-2018/master/1614080902425/test.json',
        data: String,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          wx.setStorage({
            key: 'mes',
            data: res.data,
            /*success:function(res){
              console.log('成功');
              wx.getStorage({
                key: 'mes',
                success: function (res) { console.log(res)},
              })
            }*/
          })
          //console.log(res.data)
        }
      })
        //downloadFile('test')
        /*wx.downloadFile({
          url: 'http://120.79.37.250/cgi-bin/test.py',
          //header: { 'content-type': 'text/json;charset=UTF-8'},
          success: function (res) {
            filePath: res.tempFilePath
            console.log(res.tempFilePath);
            },
          fail: function(res) {},
          //complete: function(res) {},
        })*/
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
    globalData: {}
});
