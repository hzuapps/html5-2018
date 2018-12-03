// pages/edit/edit.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
    content: '',
    annal_name:'',
    hiddenmodalput: true

  },
  /**
  * 生命周期函数--监听页面加载
  */
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

  //input change事件
  change(e) {
    var val = e.detail.value;
    this.setData({
      content: val
    });
  },

  //annal_NameInput事件
  annal_NameInput: function (e) {
    this.setData({
      annal_name: e.detail.value
    })
  },

  //cancel 事件
  submit() {
    var reg = /^\s*$/g;
    if (!this.data.content || reg.test(this.data.content)) {
      wx.showModal({
        content: '输入为空',
        showCancel:false,
        success: function (res) {
        }
      });
      return;
    }else{
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
       
    }
  },
//弹框取消
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  }, 

//弹框确认事件
  confirm: function () {
    var reg = /^\s*$/g;
    if (!this.data.annal_name || reg.test(this.data.annal_name)){
      wx.showModal({
        content: '输入为空',
        showCancel: false,
        success: function (res) {
        }
      });
      return;
    }
    this.setData({
      hiddenmodalput: true,
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
          content: item.content,
          annal_name: item.annal_name
        })
      }
    })
  }
}

/**
 * 设置填写的信息，分编辑、新增
 */
function setValue(page) {
  var arr = wx.getStorageSync('txt');
  console.log(arr);
  var data = [], flag = true;
  if (arr.length) {
    arr.forEach(item => {
      if (item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        item.annal_name = page.data.annal_name;
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



