
var app = getApp();
var n = null;
var list = null;
Page({
  data: {
      inputVal:'',
      msgData:[],
      title:'',
  },

  /**
   * 页面渲染事件
   */
  onShow: function () {
    
  },
  getValue:function(e){

    this.setData({
     inputVal:e.detail.value
    })
  },

  onSubmit: function (event) {
      if (this.data.inputVal == "") {
        wx.showToast({
          title: '笔记为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      var list = this.data.msgData;
      list.push({
        msg: this.data.inputVal

      });

      //更新
      this.setData({
        inputVal: '',
        msgData: list
      });
      wx.setStorage({
        key: "msgData",
        data: list,
        success: function (res) {
          console.log('添加笔记缓存成功')
        }
      });

      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000
      });
    wx.navigateBack({     //返回上一页面或多级页面

      delta: 1

    })
      
  },

 onLoad: function (options) {
    console.log('onLoad')
    console.log('读取缓存成功')
    var that = this;
    wx.getStorage({
      //获取数据的key
      key: 'msgData',
      success: function (res) {
        that.setData({
          msgData: res.data
        })
      }
    });
   
  },

  
});