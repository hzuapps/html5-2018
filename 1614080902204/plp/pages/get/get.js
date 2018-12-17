//get.js
//获取应用实例
var app = getApp()
const AV = require('../../utils/av-weapp.js');
Page({
  data: {
    getPngSecond: "http://ac-ejx0nsfy.clouddn.com/6f50e35237db20a4edd6.png",//海星
    getPngThrid: "http://ac-ejx0nsfy.clouddn.com/15070f4f33bb6090ec1b.png",//漂流瓶
    isGet: true,//是否捡到了漂流瓶
    maskDisplay: 'none',
    slideAnimation: {},
    slideHeight: 0,
    slideRight: 0,
    slideWidth: 0,
    isPlaying: false,
    plp: [],
    j: 1,
    contentText: ''
  },
  onLoad: function () {
    var _this = this;
    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var windowHeight = res.windowHeight;
        console.log('windowWidth: ' + windowWidth)
        console.log('windowHeight: ' + windowHeight)
        _this.setData({
          imageWidth: windowWidth,
          imageHeight: windowHeight,
          slideHeight: res.windowHeight * 0.6,
          slideRight: res.windowWidth,
          slideWidth: res.windowWidth * 0.80
        })
      }
    })
    var num = Math.round(Math.random() * 9 + 1);
    console.log(num)
    if (num > 5) {
      //捡到漂流瓶
      this.setData({
        bgPng: this.data.getPngThrid,
        isGet: true
      })
    } else {
      //海星
      this.setData({
        bgPng: this.data.getPngSecond,
        isGet: false
      })
    }

    //去后台拉取漂流瓶数据,1.获取到文字,左边弹框;2.获取到语音,播放
    //1.获取语音
    var _this = this;
    //获取语音漂流瓶
    var queryRecord = new AV.Query('_File');
    queryRecord.find().then(function (myrecord) {
      console.log(myrecord);
      var audio = []
      for (var i = 0; i < myrecord.length; i++) {
        //判断上传用户身份
        if (myrecord[i].attributes.name == 'myRecord_dzp') {
          _this.data.plp = _this.data.plp.concat(myrecord[i].attributes.url);
        }
        console.log(myrecord[i].attributes.url);
      }
    }).catch(function (error) {
      alert(JSON.stringify(error));
    });

    //2.获取文本
    var queryText = new AV.Query('TodoFolder');
    // 查询 name 是 myText 的漂流瓶内容
    queryText.equalTo('name', 'myText');
    queryText.find().then(function (results) {
      var mytext = []
      for (var i = 0; i < results.length; i++) {
        var query = new AV.Query('TodoFolder');
        console.log(results[i].id)
        query.get(results[i].id).then(function (todo) {
          // 成功获得实例
          // data 就是 id 为 57328ca079bc44005c2472d0 的 TodoFolder 对象实例
          console.log(
            todo.attributes.plp_content
          )
          _this.data.plp = _this.data.plp.concat(todo.attributes.plp_content);
        }, function (error) {
          // 异常处理
        });
      }

    }, function (error) {
    });


    /** 
 * 监听音乐停止 
 */
    wx.onBackgroundAudioStop(function () {
      console.log('onBackgroundAudioStop')
      _this.setData({
        isPlaying: false
      })
      clearInterval(_this.timer)
    })
  },
  onReady: function () {
    // 标题栏
    wx.setNavigationBarTitle({
      title: '捡一个'
    })
  },
  //右上角关闭按钮
  onClick: function () {
    var _this = this;
    //捡到海星,return
    if (!this.data.isGet) return
    this.setData({
      isGet: false
    })
    console.log("打开漂流瓶")
    //随机获取一个索引
    var index = parseInt(Math.random() * this.data.plp.length)
    var content = this.data.plp[index]
    if (content.indexOf("http://") == 0) {
      wx.playBackgroundAudio({
        dataUrl: _this.data.plp[index],
        title: _this.data.plp[index],
        coverImgUrl: ''
      })
      playRecord.call(_this)
    } else {
      _this.setData({
        contentText: content
      })
      slideUp.call(_this);
    }
  },
  //遮罩点击  侧栏关闭
  slideCloseEvent: function () {
    slideDown.call(this);
  }
})

//侧栏展开
function slideUp() {
  var animation = wx.createAnimation({
    duration: 600
  });
  this.setData({ maskDisplay: 'block' });
  animation.translateX('110%').step();
  this.setData({
    slideAnimation: animation.export()
  });
}

//侧栏关闭
function slideDown() {
  var animation = wx.createAnimation({
    duration: 800
  });
  animation.translateX('-110%').step();
  this.setData({
    slideAnimation: animation.export()
  });
  this.setData({ maskDisplay: 'none' });
}

//播放动画
function playRecord() {
  var _this = this;
  this.setData({
    isPlaying: true
  })
  //话筒帧动画  
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
}