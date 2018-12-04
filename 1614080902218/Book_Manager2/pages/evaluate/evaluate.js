Page({

  data: {
    inputVal: "",//留言框内的数据
    inputTitle: "",
    msgData: [],//所有留言数据
  },
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value//将留言框的数据存储到inputVal中，方便添加留言时获取
    });
  },
  changeInputTitle(ev) {
    this.setData({
      inputTitle: ev.detail.value//将留言框的数据存储到inputVal中，方便添加留言时获取
    });
  },
  addMsg() {
    var ll = "《" + this.data.inputTitle + "》" + "\n" + this.data.inputVal;
    var list = this.data.msgData;
    list = list.concat({
      msg: ll
    });
    this.setData({
      msgData: list,
      inputTitle: "",
      inputVal: ""
    });
    wx.setStorage({
      key: 'msgData',
      data: list,
    })
  },
  deleMsg(ev) {
    var n = ev.target.dataset.index;//获取当前留言的index
    var list = this.data.msgData;
    list.splice(n, 1);//删除索引号为n的数据
    this.setData({//将所有留言更新到msgData中
      msgData: list
    });
    wx.setStorage({
      key: 'msgData',
      data: list,
    })
  },
  onShow: function () {
    var list = wx.getStorageSync('msgData');
    if(Array.isArray(list)){
    this.setData({
      msgData: list
    });
    this.onLoad();
  }
  },
})