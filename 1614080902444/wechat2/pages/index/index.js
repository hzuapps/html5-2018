//index.js
//获取应用实例
const app = getApp()
Page({
 data:{
   longitude:"" ,
    latitude:"",
    controls: [{
    
      iconPath: '/resources/pin2.png',
      position: {
        left: (app.globalData.windowWidth/2)-11,
        top: ((app.globalData.windowHeight-40) / 2) -22,
        width: 22,
        height: 22
      }
    }, {
        id: 1,
        iconPath: '/resources/pin.png',
        position: {
          left: 20,
          top: app.globalData.windowHeight - 80,
          width: 22,
          height: 22
        },
        clickable: true
      }]
  },
 

 onShow(){
   this.getLocation();
 },


onReady(){
  this.mapCtx = wx.createMapContext('map');
},


  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success:this.handleGetLocationSucc.bind(this)
    })
  },

  handleGetLocationSucc(res){
   this.setData({
     longitude: res.longitude,
     latitude: res.latitude
   })
  },


controltap(){
  this.mapCtx.moveToLocation();
},

  

   onShareAppMessage(){
    return {
      title: '萌宠交易平台666',
      path: '/pages/index/index.js'
    }
  }
})
