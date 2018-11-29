//index.js
Page({
  data:{
    usersList: [{ name: "自己和自己说话", src:"http://b340.photo.store.qq.com/psb?/V146tMOM3uxA3P/xL4GOdmsNf6fAUq7eTbGx7I3TDS3AxpMPGtMBu8iGE4!/b/dFQBAAAAAAAA&bo=gAKAAgAAAAARBzA!&rf=viewer_4"}]
  },
  chat:function(){
      wx.navigateTo({url:"../chat/chat"})
  }
})
