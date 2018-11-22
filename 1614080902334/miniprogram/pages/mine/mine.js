Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  //提交
  formBindSubmit:function(e){
    var warn = "";//弹框时提示的内容
    var flag = true;//判断信息输入是否完整
    //判断的顺序依次是：用户名-密码
    if (e.detail.value.userName == "") {
      warn = "账号未填写";
    } else if (e.detail.value.password == "") {
      warn = "密码未填写";
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转
      var that = this;
      wx.showLoading({
        title: '登录中',
      })
      setTimeout(function () {
        wx.hideLoading()
          wx.showToast({
            title: '登录成功',
          })
      }, 2000)
    console.log('userName:',e.detail.value)

    }
    //如果信息填写不完整，弹出输入框
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  },

  //重置
  formBindReset:function(e){
    console.log('password:',e.detail.value)
  },

  //忘记密码
  switchChange:function(e){
    console.log('forgetPsw:',e.detail.value)
  }


})