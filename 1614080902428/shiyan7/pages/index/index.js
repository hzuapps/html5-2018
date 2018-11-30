Page({
  data: {
    ximing: '',//日期
    weixingnum: '',//背景
    qqnnum: '',//输入的内容
    teln: '',//是不是修改
    id: '',
    revise: '',
  },
  saveData:function(){
    //保存按钮
    if (this.data.ximing.length == 0) {
      wx.showToast({
        title: '失败',
        mask: true,
        icon: 'success',
        duration: 1000
      });
      // return;
    }
    //获取本地缓存
    var oldText = wx.getStorageSync('oldText');
    if (oldText != null && oldText != '') {
      if (this.data.revise == '1') {
        //如果是修改的，循环缓存数组，找到相应id更改
        console.log(oldText)
        for (var i = 0; i < oldText.length; i++) {
          var dic = oldText[i];
          if (dic.id == this.data.id) {
            oldText[i] = { 'xming': this.data.ximing, 'weixinnum': this.data.weixingnum, 'qqnum': this.data.qqnnum, 'tel': this.data.teln,'id': dic.id };
            console.log(oldText)
            //存入缓存
            wx.setStorageSync('oldText', oldText);
            wx.setStorageSync('isChange', 1);
            return;
          }
        }
      } else {
        //记录是内容的id
        var numID = wx.getStorageSync('oldTextID');
        if (numID == this.data.id) {
          return;
        }
        // 添加更多缓存
      oldText.push({ 'xming': this.data.ximing, 'weixinnum': this.data.weixingnum, 'qqnum': this.data.qqnnum, 'tel': this.data.teln,'id': numID });
        //id自增
        numID++;
        wx.setStorageSync('oldTextID', numID);
        this.setData({
          id: numID
        })
      }
    } else {
      //如果没有缓存
      oldText = [{ 'xming': this.data.ximing, 'weixinnum': this.data.weixingnum, 'qqnum': this.data.qqnnum, 'tel': this.data.teln, 'id': 0 }];
      //保存id
      wx.setStorageSync('oldTextID', 1);
      wx.setStorageSync('isChange', 1);
      this.setData({
        id: 1
      })
    }
    if (this.data.ximing.length !== 0) {
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000
      });
    //存入缓存
    wx.setStorageSync('oldText', oldText);
    }
  },
  blur1(e) {
    //当输入的文字改变走这个方法
    //记录输入的文字   
    this.setData({
      ximing: e.detail.value,
    })
  },
  blur2(e) {
    //当输入的文字改变走这个方法
    //记录输入的文字   
    this.setData({
      weixingnum: e.detail.value,
    })
  },
  blur3(e) {
    //当输入的文字改变走这个方法
    //记录输入的文字   
    this.setData({
      qqnnum: e.detail.value,
    })
  },
  blur4(e) {
    //当输入的文字改变走这个方法
    //记录输入的文字   
    this.setData({
      teln: e.detail.value,
    })
  },
  // onLoad: function (options) {
  //   // 生命周期函数--监听页面加载
  //   this.setData({
  //     xming: options.xming,
  //     weixinnum: options.weixinnum,
  //     qqnum: options.qqnum,
  //     tel: options.tel,
  //     id: options.id
  //       })
  // },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '联系方式', // 分享标题
      desc: '号码实在太多记不完', // 分享描述
      path: 'path' // 分享路径
    }
  }
})