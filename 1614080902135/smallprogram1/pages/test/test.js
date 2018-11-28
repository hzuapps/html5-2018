Page({
  data: {
    // text:"这是一个页面"
    open: false,
    
    lists: [{}, {}],
  },
  showitem: function () {
    this.setData({
      open: !this.data.open
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },


  addList: function () {
    var lists = this.data.lists;
    var newData = {};
    lists.push(newData);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      lists: lists,
    })
  },
  delList: function () {
    var lists = this.data.lists;
    lists.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      lists: lists,
    })
  },   


}

)