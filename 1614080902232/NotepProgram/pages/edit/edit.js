Page({
  data: {
    textAreaDes: '',//输入的内容
    revise: '',//是不是修改
    id: ''
  },
  btnDown() {
    //保存按钮
    if (this.data.textAreaDes.length == 0) {
      return;
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
            oldText[i] = { 'des': this.data.textAreaDes, time: dic.time, 'id': dic.id };
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
        //添加更多缓存
        oldText.push({ 'des': this.data.textAreaDes, time: this.data.time, 'id': numID });
        //id自增
        numID++;
        wx.setStorageSync('oldTextID', numID);
        this.setData({
          id: numID
        })
      }
    } else {
      //如果没有缓存
      oldText = [{ 'des': this.data.textAreaDes, time: this.data.time, 'id': 0 }];
      //保存id
      wx.setStorageSync('oldTextID', 1);
      this.setData({
        id: 1
      })
    }
    //存入缓存
    wx.setStorageSync('oldText', oldText);
    
  },
  bindTextAreaBlur(e) {
    //当输入的文字改变走这个方法
    //记录输入的文字   
    this.setData({
      textAreaDes: e.detail.value
    })
  }, 

  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      des: options.des,
      time: options.time,
      revise: options.revise,
      id: options.id
    })
  }
})
