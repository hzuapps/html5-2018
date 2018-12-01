//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    address:"点击选择，要勾选哦~"
   
  },
 staticData:{},

handleAdressClick(){
  wx.chooseLocation({
    success:this.handleChooseLocationSucc.bind(this)
  })
},

  handleChooseLocationSucc(res){
  this.setData({
    address:res.address
  });
  Object.assign(this.staticData,{latitude:res.latitude,longitude:res.longitude
  })
  },

  handleTypeChange(e){
    this.staticData.type = e.detail.value;
  },



  handleMessageChange(e){
    this.staticData.message = e.detail.value;
  },

  handleContactChange(e){
    this.staticData.change= e.detail.value;
  },


  handleSubmit(e){
    
  }

})
