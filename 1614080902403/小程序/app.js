//app.js
App({
  onLaunch: function() {
    let that = this;
    // 登录
    wx.login({
      success: res => {
        wx.request({
          url: 'https://oa2.ruixinyunke.com/getToken/',
          method:"post",
          data:{
            code:res.code
          },
          success:function(res){
            if(res.data.status == -1){
              that.globalData.openid = res.data.openid;
              wx.redirectTo({
                url: '/pages/myinfo/bind',
              });
            }else{
              that.globalData.wskey = res.data.wskey;
              that.globalData.sessid = res.data.sessid;
              that.globalData.openid = res.data.openid;
              that.init();
            }
          }
        })
      }
    })
    

  },
  init:function(){
    let that = this;
    let systemInfo = wx.getSystemInfo({
      success: function (res) {
        that.globalData.rpxbei = 750 / res.windowWidth;
      },
    });

    that.wsconn();
    wx.onSocketMessage(function (res) {
      let data = JSON.parse(res.data);
      data = JSON.parse(data.data);
      if (data.message) {
        let pages = getCurrentPages();
        for (let i = 0; i < pages[0].data.nearData.length; i++) {
          if (pages[0].data.nearData[i].uid == data.message.visiter_id) {
            let dd = data.message.content.replace(/<\/?.+?>/g, "");
            let date = new Date(parseInt(data.message.timestamp + "000"));
            let time = date.getHours() + ":" + date.getMinutes();
            dd = dd.replace(/ /g, "");
            dd = dd.substr(0, 16);
            pages[0].setData({
              ['nearData[' + i + '].lastMsg.content']: dd,
              ['nearData[' + i + '].lastMsg.time']: time,
            });
            if (!data.message.direction) {
              let newmsg = {
                "cid": 0,
                "content": dd,
                "time": time,
                "direction": "to_service"
              }
              let _nearData = pages[0].data.nearData;
              let obj = _nearData[i];
              obj.notRead.unshift(newmsg);
              _nearData.splice(i, 1);
              _nearData.unshift(obj);
              pages[0].setData({
                nearData: _nearData
              });
              if (getApp().globalData.curchatpage) {
                let _chatdata = getApp().globalData.curchatpage.data.chatdata;
                _chatdata.push(newmsg);
                getApp().globalData.curchatpage.setData({
                  chatdata: _chatdata
                });
                wx.request({
                  url: 'https://css.ruixinyunke.com/admin/set/getwatch',
                  header: {
                    "Cookie": "PHPSESSID=8557hv0m2gu326nskt3ooee9f6;",
                    "content-type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest"
                  },
                  method: "post",
                  data: {
                    visiter_id: that.data.uid
                  }
                })
              }

              wx.setStorage({
                key: 'nearData',
                data: JSON.stringify(_nearData),
              })
            }
            return;
          }
        }
        //新访客
        let _nearData = pages[0].data.nearData;
        let dd = data.message.content.replace(/<\/?.+?>/g, "");
        let date = new Date(parseInt(data.message.timestamp + "000"));
        let time = date.getHours() + ":" + date.getMinutes();
        dd = dd.replace(/ /g, "");
        dd = dd.substr(0, 16);
        let obj = {
          "uid": data.message.visiter_id,
          "head": data.message.avatar,
          "name": '游客' + data.message.visiter_id,
          "notRead": [{
            "cid": 0,
            "content": dd,
            "timestamp": data.message.timestamp,
            "time": time,
            "direction": 0
          }],
          "lastMsg": {
            "cid": 0,
            "content": dd,
            "timestamp": data.message.timestamp,
            "time": time,
            "direction": 0
          }
        };
        _nearData.unshift(obj);
        pages[0].setData({
          nearData: _nearData
        });
        wx.setStorage({
          key: 'nearData',
          data: JSON.stringify(_nearData),
        })
      }
    })
    wx.onSocketOpen(function (e) {
      wx.sendSocketMessage({
        data: '{"event":"pusher:subscribe","data":{"channel":"ud5"}}',
      })
      wx.sendSocketMessage({
        data: '{"event":"pusher:subscribe","data":{"channel":"alladmin"}}',
      })
      wx.sendSocketMessage({
        data: '{"event":"pusher:subscribe","data":{"channel":"kefu5"}}',
      })
    })
    wx.onSocketClose(function () {
      that.wsconn();
    })
    wx.onSocketError(function () {
      that.wsconn();
    })
    setTimeout(function () {
      that.ping(); //递归调用 防止setInterval休眠机制，异步函数不会堆栈溢出的
    }, 20000);
    wx.onSocketClose(function () {

    });
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model);
        if (res.model.search('iPhone X') != -1) {
          that.globalData.isiphonex = true;
        }
      },
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


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
    userInfo: null,
    isiphonex: false,
    curchatpage: null,
    rpxbei: 0,
    wskey:null,
    sessid:null,
    openid:null
  },
  ping: function() {
    let that = this;
    wx.sendSocketMessage({
      data: '{"event":"pusher:ping","data":{}}',
    })
    setTimeout(function() {
      that.ping();
    }, 20000);
  },
  wsconn: function() {
    wx.connectSocket({
      url: 'wss://css.ruixinyunke.com:8080/app/'+this.globalData.wskey+'?protocol=7&client=js&version=4.1.0&flash=false'
    })
  }
})