// pages/index/pages/one/one.js
Page({
na:function(){
  var that=this;
  that.setData({
    globalvar_str:JSON.stringify(getApp().globalData.Namee)
  })
}
})