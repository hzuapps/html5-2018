Page({

  onLoad: function(options){
    console.log(options.id)
    this.setData({
      mid: options.id
    })

    var that=this

    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/"+options.id,

      header:{
        "content-type":"json"
      },

      success: function(res){
        console.log(res)
        that.setData({
          movie:res.data
        })
      }

    })
  }

  

})