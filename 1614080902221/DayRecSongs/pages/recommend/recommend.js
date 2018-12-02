Page({
  data:{
    songName:"null",
    comment:"null",
    imagePath:"null"
  },

  onLoad:function(){

    var that = this
    wx.request({
      url: 'https://infoaas.com/html5-2018/1614080902221/tdSongRec.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (true) {
          that.setData({
            songName: res.data.songName,
            comment:res.data.comment,
            imagePath:res.data.src,
          })
        }

      }
    })


   
  
  },

  play:function(){

    const back = wx.getBackgroundAudioManager();
    back.src = "http://zhangmenshiting.qianqian.com/data2/music/f1706c82457823d0b601f56fb1e79f2a/599476790/599476790.mp3?xcode=9e9136f15120b5f58e84979b09d702df";
    back.title = "每日好歌";
    back.coverImgUrl = "";
    back.play();

  }

})