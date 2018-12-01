//app.js
App({
globalData:{},



  onLaunch(){
    try{
     const res=wx.getSystemInfoSync()
      this.globalData.windowHeight=res.windowHeight;
      this.globalData.windowWidth = res.windowWidth;
     console.log(this.globalData)
    }
    catch(e){
    }
  }
    
})