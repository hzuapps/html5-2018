//pages/newbirthday/newbirthday
Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeTime: null,
    tipStatus: false,
    tip: ""
  },
  //处理表单发送的数据
  formSubmit: function (res) {
    console.log("执行表单")
    let val = res.detail.value
    clearTimeout(this.closeTime)
    //判断数据的合法性
    if (!val.name) {
      this.setData({
        tip: "名字不能为空",
        tipStatus: false
      })
    } else if (!val.birthday) {
      this.setData({
        tip: "生日不能为空",
        tipStatus: false
      })
    } else {

      //新增的内容
      const fileSys = wx.getFileSystemManager()
      let json = {
        birthday: val.birthday,
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
        if (rJson[val.name]) {
          wx.showModal({
            title: '覆盖信息',
            content: val.name + '是否覆盖',
            confirmText: "是",
            cancelText: "否",
            success: function (res) {
              if (res.confirm) {
                rJson[val.name] = json
                saveJson(rJson)
                successTip("覆盖成功")
              } else {
              }
            }
          });
        } else {
          rJson[val.name] = json
          saveJson(rJson)
          successTip("添加成功")
        }
        //捕获readFileSync异常，说明没有创建importance.importance
      } catch (e) {
        let tJson = {}
        tJson[val.name] = json
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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