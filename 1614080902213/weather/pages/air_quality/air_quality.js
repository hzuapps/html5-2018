const Constant = require('../../common/constant.js');
Page({
  data: {
    loading: false,
    disabled: true,
    modalHidden: true,
    modalErrorText: "请求失败,请检测网络",
    city: "",
    district:""
  },
  onLoad: function(options) {
    this.loadInfo();
  },
  loadInfo: function() {
    var page = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        page.loadCity(longitude,latitude);
        const speed = res.speed
        const accuracy = res.accuracy
      },
      fail: function() {
        // fail  
        console.log("false")
      },
      complete: function() {
        // complete  
      }
    })
  },
  loadCity: function(longitude, latitude) {
    var page = this
    wx.request({
      url: Constant.Location_URL + longitude + ',' + latitude,
      data: {},
      header: {
        'Content-Type': 'application/json; charset=utf-8',
        "Authorization": Constant.LocationAppCode
      },
      success: function(res) {
        // success  
        console.log(res);
        var city = res.data.regeocode.addressComponent.city;
        var district = res.data.regeocode.addressComponent.district + res.data.regeocode.addressComponent.township
        page.setData({
          city: city,
          district: district,
          disabled: false
        });
      },
      fail: function () {
        page.setData({
          modalHidden: false,
          modalErrorText: "定位失败,请手动输入"
        })
      },
      complete: function () {
        page.setData({
          loading: false,
          disabled: false
        })
      }
    })
  },

  bindKeyInput: function(e) {
    let value = e.detail.value;
    if (value !=this.city){
      this.setData({ district: ""})
    }
    this.setData({
      city: value,
      disabled: !value.length > 0,
      
    });
  },
  search: function(e) {
    this.setData({
      loading: true,
      disabled: true
    });
    let that = this;

    wx.request({
      url: Constant.AIR_QUALITY_URL + this.data.city,
      header: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": Constant.AppCode
      },
      success: function(res) {
        if (res.data.showapi_res_body.ret_code !== -1) {
          wx.navigateTo({
            url: "../result/result?pm=" + JSON.stringify(res.data.showapi_res_body.pm) + "&siteList=" + JSON.stringify(res.data.showapi_res_body.siteList) +"&district="+that.data.district
          });
        } else {
          that.setData({
            modalErrorText: res.data.showapi_res_body.error_info,
            modalHidden: false,
          });
        }

      },
      fail: function() {
        that.setData({
          modalHidden: false,
          modalErrorText: "请求失败,请检测网络"
        })
      },
      complete: function() {
        that.setData({
          loading: false,
          disabled: false
        })
      }
    });
  },
  modalChange: function() {
    this.setData({
      modalHidden: true
    })
  }

});