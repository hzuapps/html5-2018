Page({
  data:{
    songName:"小幸运",
    comment:"喜欢一个人，会真的没有勇气告诉他",
    imagePath:"/image/song.png"
  },

  onLoad:function(){

    var that = this
    wx.request({
      url: 'https://infoaas.com/html5-2018/1614080902221/tdSongRec.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            songName: res.data.songName,
            comment:res.data.comment,
            imagePath:res.data.src,
          })
        }

      }
    })
  }

})