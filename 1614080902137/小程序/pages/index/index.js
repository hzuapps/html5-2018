//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userName: '',
    passWord: '',
  },
  //事件处理函数
adminLogin: function(){
  wx.redirectTo({
    url: '../admin/admin'
  })
},

submit: function(e){ 
  var objData = e.detail.value;
  if(objData.userName != "" && objData.passWord != ""){
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
    for (var i = 0; i < wx.getStorageSync("stu").length; i++) {
      if (objData.userName == wx.getStorageSync("stu")[i].userName
        && objData.passWord == wx.getStorageSync("stu")[i].passWord) {
        
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
            
          }
        }
      });
    } else {
      getApp().searchWord = objData.userName;
      getApp().loginer = "stu";
      wx.switchTab({
        url: '../../pages/main/main'
      })
    }
  } else {
    wx.showModal({
      content: '账号或密码不能为空',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          
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
