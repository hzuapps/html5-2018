var app = getApp()
Page({
  data: {
    content: '',
    contentarray:[],
    photos: '',
    title:'',
  },
  diaryInput: function(e) {
      let that = this
      that.setData({
        content: e.detail.value
      })
  },
  
  addPhoto: function () {
    let that = this
    wx.chooseImage({
      count: 1, // 可根据情况自由设置，默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        that.setData({
          photos: tempFilePaths
        })
      }
    });
  },
  save: function (event) {
    let that = this;
    var date = new Date();
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      title:date
    })
    var content = this.data.content
    var newa=[{title:this.data.title,content:this.data.content,photo:this.data.photos}];
    this.setData({
      contentarray:this.data.contentarray.concat(newa)
    })
    
    if (content != '') {
      wx.setStorage({
        key: "diaryContent",
        data: this.data.contentarray
      });
    }
    
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000,
      success: function (){
        
      }
    });
    setTimeout(function () {
      wx.hideLoading();
      wx.navigateBack();
    }, 2000)
  },
  onLoad:function(){
    var that=this
    wx.getStorage({
      key: 'diaryContent',
      success: function(res) {
        if(res.data){
          that.setData({
            contentarray:res.data
          })
        }
      },
    })
  }
})