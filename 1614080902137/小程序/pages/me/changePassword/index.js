// pages/me/changePassword/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  submit: function(e){
    // wx.request({
    //   url: 'http://localhost:8080/Stu_Dorm/Test',
    //   method: 'GET',
    //   data: {
    //     "passWord": objData.passWord
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function(res){
    //     console.log(res.data["passWord"]);
    //   }
    // })

    var objData = e.detail.value;
    var flag;
    var arr = [];

    if(objData.passWord != objData.SurePassword){
      wx.showModal({
        content: '两次输入密码不一致',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      });
    } else if (objData.passWord == ""){
      wx.showModal({
        content: '输入不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      });
    } else{
      if (getApp().loginer == "admin") {
        arr = wx.getStorageSync("admin");
        for (var i = 0; i < wx.getStorageSync("admin").length; i++) {
          if (getApp().searchWord == wx.getStorageSync("admin")[i].userName) {
            flag = i;
            break;
          }
        }
        arr[flag].passWord = objData.passWord;
        wx.setStorageSync("admin", arr);
      } else {
        arr = wx.getStorageSync("stu");
        for (var i = 0; i < wx.getStorageSync("stu").length; i++) {
          if (getApp().searchWord == wx.getStorageSync("stu")[i].userName) {
            flag = i;
            break;
          }
        }
        arr[flag].passWord = objData.passWord;
        wx.setStorageSync("stu", arr);
      }
      wx.navigateBack({
      })
    }

  }

})