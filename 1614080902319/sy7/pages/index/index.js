Page({
formSubmit: function (e) {
  var that = this;
  var formData = e.detail.value; //获取表单所有input的值  
  wx.request({
    url:'https://www.douban.com/search',
    data: formData,
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      console.log(res.data)
    }
  })
},  
})