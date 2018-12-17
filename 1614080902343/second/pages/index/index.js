//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/photo1.jpg',

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null
  
 
 
    ,
    
  },
  jump: function (param) {
    wx.navigateTo({
      url: '/pages/index/text',
    })
  },
  

  onLoad: function () {
    this.setData({
      test: '01',
    } )
    this.getProlist();
  },

 toDetail: function(e){console.log(e);
 var index=e.currentTarget.dataset.index;
 console.log(index);
 },
 getProlist: function(){
   var self=this;
   wx.request({
     url: 'D:\xampp\htdocs\index.php',
     method: 'GET',
     success:function(res){
       console.log(res);
       self.setData({
         prolist: res.data,
       })
     }
   })
 }
 
}
)
