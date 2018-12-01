Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://qukufile2.qianqian.com/data2/pic/f7fc3028e4efb2dc30fa98cd367a32f0/564667770/564667770.jpg@s_1,w_224,h_224',
    name: 'Way Back Home',
    author: '— 스모킹구스',
    src: 'http://zhangmenshiting.qianqian.com/data2/music/1a18527cabc177ce049487e4639afa6e/595381262/595381262.m4a?xcode=bb06b7e59deaa6868e84979b09d702df',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})