// pages/find/find.js
//获取应用实例
var app = getApp();
Page({
  data: {
    msgData: []
  },
  changeInputValue(ev) {
    this.setData({
      inputVal: ev.detail.value
    })
  },
  //删除家教信息
  DelMsg(ev) {
    var n = ev.target.dataset.index;

    var list = this.data.msgData;
    list.splice(n, 1);

    this.setData({
      msgData: list
    });
  },
  //添加家教信息
  addMsg() {
    var list = this.data.msgData;
    if (!this.data.inputVal){
      wx.showModal({
        title: '提示',
        content:'输入的信息不能为空'
      }) 
    }else{
    list.push({
      msg: this.data.inputVal
    });
    //更新信息
    this.setData({
      msgData: list,
      inputVal: ''
    });
      wx.showToast({
        title: '添加成功！',
        duration: 1000
      })
    }
  },
})