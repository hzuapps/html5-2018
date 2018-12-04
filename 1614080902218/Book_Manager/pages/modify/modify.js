Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  Storge(e){
    var name = e.detail.value.name;
    var sex = e.detail.value.sex;
    var photoNumber = e.detail.value.photoNumber;
    var region = e.detail.value.region;
     var message ={
       name: name,
       sex: sex,
       photoNumber: photoNumber,
       region: region,
     }
    wx.setStorage({
      key: 'information',
      data: message,
      success: function(){
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }


})