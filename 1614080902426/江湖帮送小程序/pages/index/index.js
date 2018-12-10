//引用腾讯地图API
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
 
  data: {
    //导航栏
    navbar: ['我要送', '我来送'],
    currentTab: 0,
   
    //map data
    address: "",
    src: "",
    latitude: 0,
    longitude: 0,
    markers: [{
      
    }
    ],
    startLocation: {//起始位置数据
      longitude: 0,
      latitude: 0,
      address: '',
    },
    mobileLocation: {//移动选择位置数据
      longitude: 0,
      latitude: 0,
      address: '',
    }
  },
  //导航栏切换页面
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'MYKBZ-IVMWI-ZBRGQ-5QKUW-LBRF7-YYBCC'
    });
    var that = this;
    //获取位置
    wx.getLocation({
      type: 'gcj02',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
      success: function (res) {
        //console.log(res);
        var marker = [{
          id: 0,
          latitude: res.latitude,
          longitude: res.longitude,
          
        }];
        //起始选择位置数据
        var startLocation = {
          latitude: res.latitude,
          longitude: res.longitude,
        };
        //移动选择位置数据
        var mobileLocation = {
          latitude: res.latitude,
          longitude: res.longitude,
        };
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: marker,
        });
        //根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            mobileLocation.address = address;
            console.log(address)
            //当前位置信息
            that.setData({
              mobileLocation: mobileLocation,
            });
            that.setData({
              startLocation: startLocation,
            });
          }
        });
      }
    });

    this.mapCtx = wx.createMapContext('myMap');
    
  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        let mobileLocation = {
          
          address: res.address,
        };
        that.setData({
          mobileLocation: mobileLocation,
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }

})