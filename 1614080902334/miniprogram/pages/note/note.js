Page({
  data: {
    // text:"这是一个页面"
    
  },
  //提交后
  formBindsubmit: function (e) {
    // this.setData({
    //   note: '你发布了句子：' + e.detail.value.note,
    // })
    var warn = "";//弹框时提示的内容
    var flag = true;//判断信息输入是否完整
    if (e.detail.value.note == "") {
      warn = "句子内容为空，不能发布";
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转
      var that = this;
      wx.showToast({
        title: '发布成功'
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
    //如果信息填写不完整，弹出输入框
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  },
  formReset: function () {
    this.setData({
    })
  } 
})
