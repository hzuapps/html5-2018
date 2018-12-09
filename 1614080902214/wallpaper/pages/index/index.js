

Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    wi:1,
    mag_1:'https://github.com/Ccclk/wallpaper/blob/master/w1.jpg?raw=true',
  },


  // preview_img: function () {//图片预览函数
  //   wx.previewImage({
  //     current: 'https://github.com/Ccclk/wallpaper/blob/master/w2.jpg?raw=true', // 当前显示图片的http链接
  //     urls: 'https://github.com/Ccclk/wallpaper/blob/master/w2.jpg?raw=true' // 需要预览的图片http链接列表
  //   })
  // },


  down_file: function () {
    var _this = this;
    var array = ['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
    var wii = this.data.wi;
    const downloadTask = wx.downloadFile({
      url: 'https://github.com/Ccclk/wallpaper/blob/master/w' + array[wii]+'.jpg?raw=true', //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res)
        if (res.statusCode === 200) {
          _this.setData({
            mag_1:res.tempFilePath //将下载的图片临时路径赋值给img_l,用于预览图片
          })
        }
      },
    })
    this.data.wi = this.data.wi+1;
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }

})