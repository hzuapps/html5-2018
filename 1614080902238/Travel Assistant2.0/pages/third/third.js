
var QQMapWX = require('../../qqmap-wx-jssdk.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'M6RBZ-7I7WF-OA6JR-N5JBZ-KWH53-XVBCT' // 必填
});Page({
data :{a:'39.98004',
 
b:'116.313962'},
  
  // 事件触发，调用接口
  nearby_search: function () {
    var _this = this;
    // 调用接口   

    qqmapsdk.search({
      
      location: '23.037331,114.418373', 
      keyword: '美食',  //搜索关键词
   
       //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/image/logo.png", //图标路径
            width: 20,
            height: 20
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
  ,

  
  onShareAppMessage: function () {

  }
 
})