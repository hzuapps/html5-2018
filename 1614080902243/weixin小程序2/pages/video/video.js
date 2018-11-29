Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  videoPlay(){
    this.videoContext.play()
  },

  videoPause() {
    this.videoContext.pause()
  },

  videoPlayBackRate() {
    this.videoContext.playbackRate(1.5)
  },

  videorequestFullScreen() {
    this.videoContext.requestFullScreen()
  },

  videoSeek0() {
    this.videoContext.seek(0)
  },

  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color:"#FFFFF"
    })
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext('Video')
  }
})