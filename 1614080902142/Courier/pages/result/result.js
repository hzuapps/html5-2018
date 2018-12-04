const util = require('../../common/utils.js');
Page({
  data: {
   
    core: "无",
    modalHidden: true, 
  },
  onLoad: function (options) {
    console.log("加载查询结果页面");

    console.log(options);
    this.setData(options);
    this.setData({
      date: util.getDate(),
    });

  },
  onReady: function () {
   
  },
  onShow: function () {

  },
  onHide: function () {
    
  },
  onUnload: function () {
    
  },
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  ganmao: function () {
    this.setData({
      modalText: this.data.ganmao,
      modalHidden: false
    })
  }
})