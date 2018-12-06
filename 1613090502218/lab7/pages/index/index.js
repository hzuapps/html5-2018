//index.js
Page({
  data: {
    labtitle: "",
    labcontent: "",
    content: ""
  },
  getdata: function (e) {
    var that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/ChenYHeng/html5-2018/master/1613090502218/lab7-Database.json',
      // data:'title=a',
      // header:{
      //   'content-type':'application/json'
      // },
      // method:'POST',
      success(res) {
        console.log(res.data.share[0].title)
        that.setData({
          labtitle: res.data.share[0].title,
          labcontent: res.data.share[0].content
        })
      },
      fail(res) {
        console.log("fail")
      },
      complete(res) {
        console.log("complete")
      }
    })
  },
  postData: function (e) {
    var that = this;
    var inputdata = e.detail.value.getinput;
    console.log(inputdata);
    wx.request({
      url: 'https://raw.githubusercontent.com/ChenYHeng/html5-2018/master/1613090502218/lab7-Database.json',
      data: {
        content: inputdata
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data.share[0].title)
      },
      fail(res) {
        console.log('fail')
      },
      complete(res) {
        that.setData({
          content: ""
        })
        console.log('complete')
      },
    })
  } 
})
