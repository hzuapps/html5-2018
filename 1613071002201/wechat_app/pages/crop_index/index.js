//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   src1: '',
   src2:'',
   picNum:null,
   cuttype: null,
  },
  onShow() {
    if (this.data.cuttype) {
      console.log("第一张"+this.data.src1)
      console.log("第二张"+this.data.src2)
    }
  },

  chooseIMG1() {
    wx.navigateTo({
      url: '/pages/crop/index?cuttype=1&picNum=1',
    })
  },

  chooseIMG2() {
    wx.navigateTo({
      url: '/pages/crop/index?cuttype=1&picNum=2',
    })
  },

  save(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src1,
    })
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src2,
    })
  }
})
