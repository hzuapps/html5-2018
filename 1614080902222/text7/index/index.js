Page({
  data: {
    imgUrls: [
      'http://r.photo.store.qq.com/psb?/V12zXVzb2RtJGK/Vca8rkVU7KyRsfH*Cc6zV8ZHH*SQlKMheVuZOA5oK9s!/r/dDMBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V12zXVzb2RtJGK/xATWq1i2Zw9d3w2nJT4LpjEHP8OAwLT.G*0YAuufPQs!/r/dDYBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V12zXVzb2RtJGK/ZT4cgIn3NNXY5lCXss1twLx9eYFJsWN.M4OWSyiuHGg!/r/dC4BAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V12zXVzb2RtJGK/w0MRUlsXwXNTNBGpiINY221d*vEMU4RZclJSA9fmfZY!/r/dDUBAAAAAAAA',
      
    ],
  },

  goToTalkPage1: function(param) {
    wx.navigateTo({
      url: '/text1/text1',
    })
  },

  goToTalkPage2: function (param) {
    wx.navigateTo({
      url: '/text2/text2',
    })
  },

  goToTalkPage3: function (param) {
    wx.navigateTo({
      url: '/text3/text3',
    })
  },

  goToTalkPage4: function (param) {
    wx.navigateTo({
      url: '/text4/text4',
    })
  },

  goToTalkPage5: function (param) {
    wx.navigateTo({
      url: '/text5/text5',
    })
  }

  
})
