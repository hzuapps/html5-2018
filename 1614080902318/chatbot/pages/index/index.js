var util = require("../../utils/util.js");
Page({
  data:{
    question:'',
    content:[]
  },

  onLoad:function(options){
    this.loadContent();
  },
  
  onShareAppMessage: function() {
    return {
      title: '聊天机器人TT',
      desc: '这是一个多功能聊天机器人',
    }
  }, 

  inputEvent: function(event) {
      var value = event.detail.value;
      this.setData({question:value});
  },

  queryAnswer: function() {
      var page = this;
      var question = this.data.question;
      if (question == null || question==='') {
          wx.showToast({
              title: '请输入您的问题',
              icon: 'loading'
          });
      } else {
        var appkey = "5f2910dc49e442049211c63a64c7a058";
        var datas = page.data.content;
        datas.push({ "isRobot": false, "date": util.formatTime(new Date()), "text": question});
        page.setData({ question:'', content:datas});
        var url = "https://www.tuling123.com/openapi/api?key=" + appkey + "&info=" + question;
        wx.request({
          url: url,
          data: {},
          method: 'GET',
          header: {
            'Content-Type': 'application/json'
          },
          success: function(res){
            if(res.data.code==100000) {
                var con = res.data.text;
                var datas = page.data.content;
                datas.push({"isRobot":true, "date": util.formatTime(new Date()), "text":con});
                console.log(datas);
                page.setData({content:datas});
                page.setContent2Storage(datas);
            } else {
                wx.showToast({
                    title:res.data.reason, 
                    icon:'loading'
                });
            }
            console.log(res);
          }
        })
      }
  },

  setContent2Storage: function(data) {
    wx.setStorage({
      key: 'content',
      data: data,
      success: function(res){
        //console.log("=====保存成功=====");
      }
    })
  },

  loadContent: function() {
    var page = this;
    wx.getStorage({
      key: 'content',
      success: function(res){
        console.log(res);
        page.setData({content:res.data});
      }
    })
  }

})