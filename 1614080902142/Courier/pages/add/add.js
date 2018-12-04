// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    dormitory:'',
    showTopTips: false,
    inputSMS: '',

    radioItems: [
      { name: '小件', value: '0', checked: true},
      { name: '大件', value: '1' }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],

    order:[
      {}
    ],

  },

  bindKeyInput: function (e) {
    this.setData({
      inputSMS: e.detail.value
    })
  },

  add: function (e) {
     var add;
     add.name=this.data.name;
     add.phone=this.data.phone;
     add.dormitory = this.data.dormitory;
     add.inputSMS = this.data.inputSMS;
    this.data.order.push(add);
    console.log(this.data);
    wx.switchTab({
      url: '../task/task',
    })

  },

  address: function(){
    wx.redirectTo({
      url: '../address/address'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var that = this;
      wx.getStorage({

        key: 'userName',

        success: function (res) {

          console.log(res.data);

          that.setData({ name: res.data });

        }

      });
      wx.getStorage({

        key: 'phone',

        success: function (res) {

          console.log(res.data);

          that.setData({ phone: res.data });

        }

      });
      wx.getStorage({

        key: 'suShe',

        success: function (res) {

          console.log(res.data);

          that.setData({ dormitory: res.data });

        }

      });


    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
})