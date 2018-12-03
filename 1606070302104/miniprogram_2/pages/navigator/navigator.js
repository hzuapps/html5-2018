
Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeTime: null,
    tipStatus: false,
    tip: "",
    impTip: ""
  },
  //处理表单发送的数据
  formSubmit: function (res) {
    let val = res.detail.value
    clearTimeout(this.closeTime)
    //判断数据的合法性
    if (!val.title) {
      this.setData({
        tip: "标题不能为空",
        tipStatus: false
      })
    } else if (!val.username) {
      this.setData({
        tip: "所用时间不能为空",
        tipStatus: false
      })
    } else {

      //新增的内容
      const fileSys = wx.getFileSystemManager()
      let json = {
        username: val.username,
        password: val.password,
        tip: val.tip
      }
      let rJson = null
      let wJson = null

      //json本地化
      function saveJson(transJson) {
        wJson = JSON.stringify(transJson)
        fileSys.writeFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, wJson, "utf8")
      }

      //成功提示
      function successTip(strTip) {
        wx.showToast({
          title: strTip,
          icon: 'success',
          duration: 3000
        });
      }

      //数据本地化
      try {
        rJson = fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, "utf8")
        rJson = JSON.parse(rJson)
        //如果rJson[val.title]已经存在，提示是否覆盖
        if (rJson[val.title]) {
          wx.showModal({
            title: '覆盖信息',
            content: '<' + val.title + '>已经备忘，是否覆盖',
            confirmText: "是",
            cancelText: "否",
            success: function (res) {
              if (res.confirm) {
                rJson[val.title] = json
                saveJson(rJson)
                successTip("覆盖成功")
              } else {
              }
            }
          });
        } else {
          rJson[val.title] = json
          saveJson(rJson)
          successTip("新建成功")
        }
        //捕获readFileSync异常，说明没有创建importance.importance
      } catch (e) {
        let tJson = {}
        tJson[val.title] = json
        saveJson(tJson)
        successTip("新建成功")
      }

      //成功，保存状态
      this.setData({
        tip: "",
        tipStatus: true
      })
    }

    //提示定时消失
    this.closeTime = setTimeout(() => {
      this.setData({
        tip: "",
        tipStatus: false
      })
    }, 2000)
  },
  tipShow() {
    //用有无tip文件判断配置信息
    const fileSys = wx.getFileSystemManager()
    try {
      fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/tip`, "utf8")
      //有，执行这里
      this.setData({
        impTip: ""
      })
    } catch (e) {
      //无，提示
      this.setData({
        impTip: '*强烈建议先看下方导航“我”>“帮助文档”中的重要声明'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tipShow()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.tipShow()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


/*Page({
  data: {
    title: '为你的新Timelog起个名字吧',
    textarea: "",
    Length: 0
  },
  //监控input
  textLength: function (e) {
    let length = e.detail.value.length
    this.setData({
      Length: length
    })
  },

  //完成添加到目录
  formSubmit: function (e) {
    if (this.data.Length == 0) {
      wx.showModal({
        title: '提示',
        content: '不能为空',
        success: function (res) { }
      })
    } else {
      var arr = 
        {name: ''};
      arr.name = e.detail.value["input"];
      App.globalData.topText.push(arr);
      wx.setStorageSync('timelog', App.globalData.topText);
      this.setData({
        textarea: ""
      })
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(function () {
        wx.switchTab({
          url: '../logs/logs',
        })
      }, 1000)
    }
  }
})*/

/*Page({
    data: {
    title: '请根据不同时间段记录不同的事件噢',
    totaltime:'',
    data0: 0,
    add: "+",
    minus: "-"
  },
  add: function (e) {
    this.setData({
      data0: this.data.data0 + 1
    })
  },
  minus: function (e) {
    this.setData({
      data0: this.data.data0 - 1
    })
  },
  onLoad: function (options) { // 页面初始化 options为页面跳转所带来的参数 
    this.setData({ title: options.title })
  },
})*/