// pages/index/index.js
let Main = require('../../js/Main');
let main = new Main();

Page({
  data:{

  },

  //生命周期函数--监听页面初次渲染完成
  onReady:function(){
    main.click();
  },

  //点击按钮函数
  prizeOnclick:function(){
    wx.navigateTo({
      url: '../../functionPages/prize/prize',
    })
  },
  checkOnClick:function(){
    wx.navigateTo({
      url: '../../functionPages/check/check',
    })
  }
})