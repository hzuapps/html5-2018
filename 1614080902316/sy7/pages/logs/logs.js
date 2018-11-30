//logs.js
const util = require('../../utils/util.js')
var bmap = require('../js/bmap-wx.js');
var wxMarkerData = [];  
Page({
 
  data: {
     
    logs: [],
   address:[],
   addr:''
  },
  onReachBottom(){
    this.onLoad.log
  },
  onLoad: function () {
    var that=this;
    var BMap = new bmap.BMapWX({
      ak: '3jNdwydGrnKy2eGg8humZ60sZeiBl09v'
    });
    var fail=function(data)
    {
      console.log('fail!!');
    }
    var success=function(data)
    {
      var wxMarkerData=data.wxMarkerData;
      console.log('2522222'+wx.getStorageSync('logs'))
      console.log(wxMarkerData[0].address)
      that.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          return util.formatTime(new Date(log))
        }),
        address: wx.getStorageSync('address') || [] ,
        addr: wxMarkerData[0].desc
      })
      
    }
    BMap.regeocoding({
      fail: fail,
      success: success
    });
  },
  qin()
  {
    wx.clearStorage()
    this.onLoad()
  },
  xie()
  { 
    
    var logs=wx.getStorageSync('logs')||[]
    var address=wx.getStorageSync('address')||[]
    
    logs.unshift(Date.now())
    address.unshift(this.data.addr)
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('address', address);
    this.onLoad()
    wx.showToast({

      title: '记录成功',

      icon: 'success',

      duration: 2000//持续的时间

    })
  },
  
})
