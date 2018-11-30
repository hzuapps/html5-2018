//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //输入框中的内容（快递单号）
    no:null,   
    logisticsInfo:null,
    h:app.data.hi
  },

  //发送网路请求，通过回调函数将结果返回
  getExpressInfo: function (nu, cb) {
    wx.request({
      url: 'https://wuliu.market.alicloudapi.com/kdi?no=' + nu,
      // data: {
      //   x: '',
      //   y: ''
      // },
      header: {
        'content-type': 'application/json',
        "Authorization": "APPCODE 2659b48cd7e442629f7b36dffbcbfef6"
      },
      success(res) {
        //  console.log(res.data)
        cb(res.data)
      }
    })
  },
  //查询按钮的点击事件
  btnClick:function(){
    var thisPage=this
    this.getExpressInfo(this.data.no,function(data){ 
      thisPage.setData({ logisticsInfo:data})
      app.data.allLogisticsInfo.push(data)
    })


  },
  getInput:function(e){
    this.setData({ no: e.detail.value})
  },
  //从输入框中得到数据
})
