
var app = getApp();

Page({
  data:{
    username:null,
    password:null,
  },
  onLoad:function(options){
   
  },
  onReady:function(){
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  loginBtnClick:function (){

    // 用户名和密码验证的过程

    app.appData.userinfo={username:this.data.username,password:this.data.password}
    wx.redirectTo({ url: "../user/user" })
  },

  usernameInput : function (event){

    
    this.setData({username:event.detail.value})
  },

  passwordInput : function (event){
    this.setData({password:event.detail.value})
  }


})