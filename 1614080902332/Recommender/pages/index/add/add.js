// pages/index/add/add.js
var adds = {}; 
Page({
  data: {
    focus: false,
    img_arr: [], 
    icon: '../../../icons/photo.png'
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  formSubmit: function (e) {
    var id = e.target.id
    adds = e.detail.value;
    this.upload()
  },
  upload: function () {
    var that = this
    for (var i = 0; i < this.data.img_arr.length; i++) {
      wx.uploadFile({
        url: '',
        filePath: that.data.img_arr[i],
        name: 'content',
        formData: adds,
        success: function (res) {
          console.log(res)
          if (res) {
            wx.showToast({
              title: '已提交发布！',
              duration: 3000
            });
          }
        }
      })
    }
    this.setData({
      formdata: ''
    })
  }, 
  upimg: function () {
    var that = this;
    if (this.data.img_arr.length < 1) {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        success: function (res) {
          that.setData({
            img_arr: that.data.img_arr.concat(res.tempFilePaths)
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示：',
        content: '最多只能上传一张图片'
      })
    }
  }
})
