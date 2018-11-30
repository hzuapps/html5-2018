Page({
  data: {
    phone:' ',
    address:' ',
    imageList: [],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  countChange(e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; 
    that.setData({  
      address:formData.ad,
     phone:formData.phone
    })
    if(this.data.address==" "||this.data.phone ==" ")
    {
      wx:wx.showToast({
        title: '上传失败',
        icon:"loading",
        duration: 2000,
      })
    }
    else{
      that.setData({
        address: ' ',
        phone: ' ',
        imageList:[ ]
      })
      wx: wx.showToast({
        title: '上传成功',
        icon: "success",
        duration: 2000,
      })
    }
  },
  chooseImage() {
    const that = this
    wx.chooseImage({
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage(e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  }
})
