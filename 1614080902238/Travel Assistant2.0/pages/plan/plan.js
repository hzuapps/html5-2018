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
        tip: "地点不能为空",
        tipStatus: false
      })
    } else if (!val.password) {
      this.setData({
        tip: "时间不能为空",
        tipStatus: false
      })
    } 
    else {

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
        
          rJson[val.title] = json
          saveJson(rJson)
          successTip("添加成功")
              //捕获readFileSync异常，说明没有创建importance.importance
      } catch (e) {
        let tJson = {}
        tJson[val.title] = json
        saveJson(tJson)
        successTip("添加成功")
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

    }
  },
  onShareAppMessage: function () {

  }
})