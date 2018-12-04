const Constant = require('../../common/constant.js');
const util = require('../../common/utils.js');
Page({
  data: {  
    inputValue: "", 
    loading: false, 
    disabled: true, 
    modalHidden: true, 
    modalErrorText: ""
  },
 
  bindKeyInput: function (e) {
    let value = e.detail.value;

    this.setData({
      inputValue: value,
      disabled: value.length == 0
    });
  },

  search: function (e) {
    this.setData({
      loading: true,
      disabled: true
    });
    let that = this;
    wx.request({
      url: Constant.WEATHER_URL, 
      header: {
        "Content-Type": "application/json",
       
      },
      data: {
        "city": this.data.inputValue 
      },
   
      success: function (res) {
        console.log(res.data);
        if (res.data.status === 1000) { 
        
          wx.navigateTo({
            url: util.createURL2("../result/result", res.data.data),
          });
        } else {
          that.setData({ 
            modalHidden: false,
            modalErrorText: '查询失败：' + res.data.desc
          });
        }

      },

      fail: function () {

        that.setData({ 
          modalHidden: false,
          modalErrorText: "wx.request.fail-请求失败,请检测网络！"
        })
      },
   
      complete: function () {
        console.log("接口请求完成")
        that.setData({
          loading: false,
          disabled: false
        })
      }
    });
  },
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  }

});