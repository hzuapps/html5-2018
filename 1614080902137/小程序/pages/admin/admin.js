// pages/admin/admin.js
const app = getApp()

Page({
  data: {
    userName: '',
    passWord: '',
  },
  //事件处理函数
  adminLogin: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  submit: function (e) {
    var objData = e.detail.value;
    if (objData.userName != "" && objData.passWord != "") {
      // 判断账号和密码

      // wx.request({
      //   url: 'http://localhost:8080/WX/WxServlet',
      //   data: {
      //     userName: objData.userName,
      //     passWord: objData.passWord
      //   },
      //   success: function(res){
      //     console.log(res.data.userName);
      //   }
      // })

      var flag;
      for (var i = 0; i < wx.getStorageSync("admin").length; i++) {
        if (objData.userName == wx.getStorageSync("admin")[i].userName
          && objData.passWord == wx.getStorageSync("admin")[i].passWord) {

          flag = true;
          break;
        }
      }

      if (!flag) {
        // 弹窗
        wx.showModal({
          content: '账号或密码错误',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        });
      } else {
        getApp().searchWord = objData.userName;
        getApp().loginer = "admin";
        wx.switchTab({
          url: '../main/main'
        })
      }
    } else {
      wx.showModal({
        content: '账号或密码不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }







    // wx.switchTab({
    //   url: '../../pages/main/main'
    // })
    // wx.navigateTo({
    //   url: 'user/user'
    // })
  }



})
