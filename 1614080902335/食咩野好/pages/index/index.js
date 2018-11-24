//index.js
//获取应用实例
const app = getApp()

var allSpaceTime = 50;//线程执行间隔时间
var animateinterval = '';
Page({
  data: {
    motto: "",
    text1: "黄焖鸡米饭",
    text2: "隆江猪脚饭",
    text3: "荷叶饭",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    
    // 时间判断
    var time = new Date();
    var hours = time.getHours();
    if (parseInt(hours) < 11 && parseInt(hours)>=4){
    this.setData({
      motto: "早上"
    })
    }
    else if (parseInt(hours) >= 11 && parseInt(hours)<15){
      this.setData({
        motto:"中午"
      })
    }
    else if (parseInt(hours) >= 15 && parseInt(hours)<18){
      this.setData({
        motto:"下午茶"
      })
    }
    else if (parseInt(hours) >= 18 && parseInt(hours)<22){
      this.setData({
        motto:"晚上"
      })
    }
    else{
      this.setData({
        motto:"宵夜"
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
  },

  // 文字闪烁动画
  play: function () {//endText最终显示文字，texts闪烁文字，time延迟时间,spacetime闪烁频率,stime闪烁周期
    var random1 = Math.floor(Math.random() * app.topText.length);
    var random2 = Math.floor(Math.random() * app.topText.length);
    var random3 = Math.floor(Math.random() * app.topText.length);
    var rangArr = [
      {
        endText: app.topText[random1],
        texts: app.topText,
        beginTime: 0,
        spacetime: 100,
        stime: 2000
      }, {
        endText: app.topText[random2],
        texts: app.topText,
        beginTime: 0,
        spacetime: 100,
        stime: 2000
      }, {
        endText: app.topText[random3],
        texts: app.topText,
        beginTime: 0,
        spacetime: 100,
        stime: 2000
      }
    ]
    var that = this;
    for (var i = 0; i < rangArr.length; i++) {
      var rang = rangArr[i];
      rang['runTime'] = 0;   //累计运行时间
      rang['isRun'] = false; //是否已经开始在执行了
      rang['isStop'] = false;//是否已经执行完毕了
    };

    animateinterval = setInterval(function () {
      var stop = true;
      var showData = {};
      for (var i = 0; i < rangArr.length; i++) {
        var rangXX = rangArr[i];
        if (!rangXX['isStop']) {
          stop = false; //只要有一个没执行完就 就继续执行 
          rangXX['runTime'] = rangXX['runTime'] + allSpaceTime; //累计执行时间开始叠加 
          var changeWord = false; //是否修改词
          if (!rangXX['isRun']) { //如果还没开始跑，判断下时间是否已经到开始跑的时间
            if (rangXX['runTime'] >= rangXX['beginTime']) {//
              rangXX['isRun'] = true;//到开始跑时间了
            } else {
              continue;
            }
          } else if (rangXX['runTime'] >= (rangXX['stime'] + rangXX['beginTime'])) {   //如果当前队列的已经执行完毕，则显示最后一次的数据         
            rangXX['isStop'] = true;
            if (rangXX['lastWord'] != rangXX['endText']) {
              rangXX['lastWord'] = rangXX['endText'];
              showData['text' + (i + 1)] = rangXX['endText'];//显示最后的词
            }
            continue;
          }
          var index = Math.floor((rangXX['runTime'] - rangXX['beginTime']) / rangXX['spacetime']) % rangXX['texts'].length;
          var showWord = rangXX['texts'][index];
          if (rangXX['lastWord'] != showWord) {
            rangXX['lastWord'] = showWord;
            showData['text' + (i + 1)] = showWord;
          }

        } else {
          continue;
        }
      }

      if (JSON.stringify(showData) != "{}") {
        that.setData(showData);
      }
      if (stop) {
        clearInterval(animateinterval);
      }
    }, allSpaceTime);
  },

  add:function(){
    wx.navigateTo({
      url:'../add/add'
    })
  }
})
