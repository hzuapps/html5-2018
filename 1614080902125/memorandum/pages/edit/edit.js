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
    wx.navigateBack();
  } 
})



