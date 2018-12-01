//index.js
//获取应用实例
import audioList from './data.js'
const app = getApp()
Page({
  data: {
    audioList:audioList,
    pauseStatus: true,
    audioIndex:0,
    cover: audioList[0].poster,
    name: audioList[0].name,
  },
  //事件处理函数
  start: function () {
    var back = wx.getBackgroundAudioManager();
    back.src = audioList[this.data.audioIndex].src;
    back.title = audioList[this.data.audioIndex].name;
    back.coverImgUrl = audioList[this.data.audioIndex].poster;
    back.play();
    this.setData({
      cover: audioList[this.data.audioIndex].poster,
      name: audioList[this.data.audioIndex].name,
      pauseStatus: false,
    })
    
  },
  stop :function(){
    var back = wx.getBackgroundAudioManager();
    back.pause();
    this.setData({
      pauseStatus: true,
    })
  },
  bindTapPrev: function () {
    let length = this.data.audioList.length
    let audioIndexPrev = this.data.audioIndex
    let audioIndexNow = audioIndexPrev
    if (audioIndexPrev === 0) {
      audioIndexNow = length - 1
    } else {
      audioIndexNow = audioIndexPrev - 1
    }
    this.setData({
      audioIndex: audioIndexNow,
    })
    this.setData({
      cover: audioList[this.data.audioIndex].poster,
      name: audioList[this.data.audioIndex].name,
      pauseStatus:true,
    })
    this.start();
  },
  bindTapNext: function () {

    let length = this.data.audioList.length
    let audioIndexPrev = this.data.audioIndex
    let audioIndexNow = audioIndexPrev
    if (audioIndexPrev === length - 1) {
      audioIndexNow = 0
    } else {
      audioIndexNow = audioIndexPrev + 1
    }
    this.setData({
      audioIndex: audioIndexNow,

    })
    this.setData({
      cover: audioList[this.data.audioIndex].poster,
      name: audioList[this.data.audioIndex].name,
      
    })
 
    wx.getBackgroundAudioManager().onStop(()=>{
      this.setData({
        pauseStatus: true
      })
    })
    wx.getBackgroundAudioManager().onEnded(() => {
      this.bindTapNext();
    })
    this.start();
  },

})
