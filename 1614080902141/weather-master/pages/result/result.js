const util = require('../../common/utils.js');
Page({
  data: {
    //主要污染物有可能没有,默认值无
    core: "无",
    modalHidden: true, //modal弹出状态
  },
  onLoad: function (options) {
    console.log("加载查询结果页面");
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    this.setData(options);
    this.setData({
      date: util.getDate(),//获取查询时间
    });

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
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  ganmao: function () {
    this.setData({
      modalText: this.data.ganmao,
      modalHidden: false
    })
  }
})