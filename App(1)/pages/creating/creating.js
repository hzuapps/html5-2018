const app=getApp()

Page({
   data:{
     name:'',
     people:'',
     neirong:'',
   },
    name:function(e){
      this.data.name=e.detail.value;
    },
  people: function (e) {
    this.data.people = e.detail.value;
  },
  neirong: function (e) {
    this.data.neirong = e.detail.value;
  },
  on:function(){
    wx.setStorageSync('Namee', this.data.name)
    wx.setStorageSync('Peoplee', this.data.people)
    wx.setStorageSync('Neirongg', this.data.neirong)
  }

})