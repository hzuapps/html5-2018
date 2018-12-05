// pages/add/add.js
Page({

  data: {
    content: ''
  },

  onLoad: function (e) {
    var id = e.id;
    if (id) {
      getData(id, this);
    } else {
      this.setData({
        id: Date.now()
      })
    }
  },

  add(e) {
    var val = e.detail.value;
    this.setData({
      content: val
    });
  },

  cancel() {
    wx.navigateBack();
  },

  submit() {
    var reg = /^\s*$/g;
    if (!this.data.content || reg.test(this.data.content)) {
      console.log('不能为空');
      return;
    }
    this.setData({
      time: Date.now()
    });
    setValue(this);
    wx.navigateBack();
  }
})

function getData(id, page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item) => {
      if (item.id == id) {
        page.setData({
          id: item.id,
          content: item.content
        })
      }
    })
  }
}

function setValue(page) {
  var arr = wx.getStorageSync('txt');
  console.log(arr);
  var data = [], flag = true;
  if (arr.length) {
    arr.forEach(item => {
      if (item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);
    })
  }
  if (flag) {
    data.push(page.data);
  }
  wx.setStorageSync('txt', data);
}