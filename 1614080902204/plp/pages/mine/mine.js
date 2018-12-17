//mine.js
//获取应用实例
var app = getApp()
const AV = require('../../utils/av-weapp.js');
Page({
  data: {
    audio: [],//录音集合
    mytext: [],//文本集合
    isPlaying: false,//是否在播放语音
  },
  onLoad: function () {
    var _this = this;
    //获取语音漂流瓶
    var queryRecord = new AV.Query('_File');
    queryRecord.find().then(function (myrecord) {
      console.log(myrecord);
      var audio = []
      for (var i = 0; i < myrecord.length; i++) {
        //判断上传用户身份
        if (myrecord[i].attributes.name == 'myRecord_dzp') {
          _this.data.audio = _this.data.audio.concat(myrecord[i].attributes.url);
        }
        console.log(myrecord[i].attributes.url);
      }
    }).catch(function (error) {
      alert(JSON.stringify(error));
    });
    //获取文本漂流瓶
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

          _this.data.mytext = _this.data.mytext.concat(todo.attributes.plp_content);
          // console.log(_this.data.mytext)
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
      title: '我的瓶子'
    })
  },
  //弹框显示文本内容
  gotoDisplay: function (e) {
    this.setData({
      isPlaying: false
    })
    clearInterval(this.timer)
    //数组索引
    var index = e.currentTarget.dataset.key;
    wx.showModal({
      title: '内容',
      content: this.data.mytext[index],
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  //播放音频
  gotoPlay: function (e) {
    var index = e.currentTarget.dataset.key;
    console.log(this.data.audio[index])
    //开启播放动画
    playRecord.call(this)
    wx.playBackgroundAudio({
      dataUrl: this.data.audio[index],
      title: this.data.audio[index],
      coverImgUrl: ''
    })
  }
})


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
