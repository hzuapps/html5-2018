//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  inputValue:[]

  },
  onShow:function(options){
  var that=this;

    wx.getStorage({
      key: 'addText',
      success: function (res) {
        console.log(res);
        that.setData({
          inputValue:res.data
        })
      },
    })
  },
  delete: function (e) //若用户点击返回键，弹出框提示
   {
    var that = this;
    var inputvalue = that.data.inputvalue;
    var addText = e.currentTarget.dataset.addText;               
    wx.showModal({
      title: '提醒',
      content: '是否删除',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
        console.log('用户点击确定');
       var dataid = e.currentTarget.dataset.addText - 1;
          console.log(dataid)
          // 删除数组对应的数据内容
          var inputValue = that.data.inputvalue;
          that.data.inputValue.splice(dataid, 1)
          //判断数据的长度
          var len = that.data.inputValue.length;
          //通过判断数组的长度来决定是否显示隐藏的部分
          that.setData({
            inputValue: that.data.inputValue
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  }
})