Page({
  data: {
    msgName: [],
  },
  
  jump() {
    wx.navigateTo({
      url: '/pages/bookName/bookName',
    })
  },
  
  onShow:function(){
    var name = wx.getStorageSync('inform');
    if (name != "") {
    var lists = wx.getStorageSync('msgName');//获取所有留言
    if(!Array.isArray(lists)){
       lists = [];
    }
    lists.push({//向list中添加当前添加的留言
      msg: name
    });
   
    this.setData({//将所有留言更新到msgData中。
      msgName: lists,
    });
    wx.setStorage({
      key: 'msgName',
      data: lists,
    })
    wx.removeStorageSync('inform');
    this.onLoad();
    }
  },
  deleMsg(ev) {
    var n = ev.target.dataset.index;//获取当前留言的index
    var lists = wx.getStorageSync('msgName');
    lists.splice(n, 1);//删除索引号为n的数据
    this.setData({//将所有留言更新到msgData中
      msgName: lists
    });
    wx.setStorage({
      key: 'msgName',
      data: lists,
    })
  },
  onLoad: function(){
    var msgName = wx.getStorageSync('msgName');
    if (Array.isArray(msgName)) {
    this.setData({
      msgName: msgName
    });
    }
  },
})