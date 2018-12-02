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

  saveImage: function () {
    var that = this;
    const ctx = wx.createCanvasContext('myCanvas',that);
    ctx.drawImage(that.data.src1, 0, 0, 400, 300);
    ctx.drawImage(that.data.src2, 0, 300, 400, 300);
    ctx.draw();
    setTimeout(() => {
      this.drawAfter();
    }, 200);
  },

  drawAfter:function(){
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success: function (res) {
        console.log("从canvas中保存" + res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(result) {
            wx.showToast({
              title: '图片保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
        console.log("保存完毕" + res.tempFilePath)
      }
    })
  },

  // save(){
  //   wx.saveImageToPhotosAlbum({
  //     filePath: this.data.src1,
  //   })
  //   wx.saveImageToPhotosAlbum({
  //     filePath: this.data.src2,
  //   })
  // }

})
