var i=0;
//var j=0;
//var k=0;
var inputValue = Array();
//var date = Array();
//var arry = Array();
Page({
  data: {
    date: "1997-07-10",
    inputValue:'',//声明变量，用来存储 
    arry:''
  },

  bindDateChange: function (e) {//输出日期                  
    this.setData({
    date: e.detail.value
    })
  },
 
   appInput:function(e){//获取输入框的内容，赋值给inputValue
     this.setData({
     inputValue:e.detail.value
     })
   },

 

  appfinish:function () {
    if(this.data.inputValue){//如果变量不为空    
     
      //var inputValue = this.data.inputValue
      
      inputValue[i] = [this.data.date+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+this.data.inputValue],
      //this.date.inputValue=newarray
      i++
      wx.setStorage({ //将数据存储在本地
        key: 'addText', 
        data: inputValue, 
      })     
      //var date = this.data.date
     
      /*date[j] = this.data.date
      j++;
      wx.setStorage({
        key: 'addDate',
        data: date
      })*/

      wx.showToast({//输入成功
      title: '添加成功',
      icon: 'success',
      duration: 1000
    });
      setTimeout(function () {  //关闭当前页，跳转到查看界面
    wx.switchTab({ 
      url: '../index/index',
    })
  },1200)
  }
  else{//如果没有输入值就点击了按钮，弹出框提示
    wx.showModal({
      title: '输入数据失败',
      content: '备注不能为空，请重新输入',
      showCancel:false,
      success:function(res){
        if(res.confirm){
          console.log("用户点击确定")
        }
      }
    })
  }
  },
 onload:function(){ 
  },

  appreturn: function () {//若用户点击返回键，弹出框提示
    wx.showModal({
      title: '提醒',
      content: '是否不做保存离开此页面',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击确定')
          wx.switchTab({
            url: '../logs/logs',
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  }
});