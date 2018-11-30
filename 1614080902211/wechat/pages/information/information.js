// pages/information/information.js
const app = getApp()
Page({

  data: {
    allLogisticsInfo:null
  },

  onLoad:function(){
    this.setData({ allLogisticsInfo: app.data.allLogisticsInfo })
    console.log(app.data.allLogisticsInfo)
  },
  btnClick:function(){
    this.setData({ allLogisticsInfo: app.data.allLogisticsInfo })
    console.log(app.data.allLogisticsInfo)
  }
})