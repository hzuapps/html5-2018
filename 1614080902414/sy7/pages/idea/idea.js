// pages/idea/idea.js
Page({
 


  data: {
    // 最大字符数
    maxTextLen: 100,
    // 默认长度
    textLen: 0,
    title:'',
    txt:'',
    address:''
  },
  getWords(e) {
    let page = this;
    // 设置最大字符串长度(为-1时,则不限制)
    let maxTextLen = page.data.maxTextLen;
    // 文本长度
    let textLen = e.detail.value.length;

    page.setData({
      maxTextLen: maxTextLen,
      textLen: textLen
    });
  },
sub(e)
{
console(e.detail.value.title)
},
keep(e) {
  console.log(e.detail.value.title)
    var logs = wx.getStorageSync('logs') || []
    var address = wx.getStorageSync('address') || []
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
  searchBox: function (e) {
    const that = this;
    let first, second;
    that.setData({
      title: e.detail.value.title,
      address: e.detail.value.address,
      txt:e.detail.value.txt
    })
    
      var title1 = wx.getStorageSync('title') || []
      var address1 = wx.getStorageSync('address') || []
      var txt1 = wx.getStorageSync('txt') || []
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
      title1.unshift(this.data.title)
      address1.unshift(this.data.address)
       txt1.unshift(this.data.txt)
       console.log(this.data.address)
      wx.setStorageSync('title', title1)
      wx.setStorageSync('address', address1);
      wx.setStorageSync('txt', txt1);
      console.log(wx.getStorageSync('title')||[])
    console.log(wx.getStorageSync('address') || [])
    console.log(wx.getStorageSync('txt') || [])
    console.log(wx.getStorageSync('logs') || [])
      this.onLoad()
      wx.showToast({

        title: '记录成功',

        icon: 'success',

        duration: 2000//持续的时间

      })
    wx.switchTab({

      url: '/pages/logs/logs',
    })
    
  }
 

})

