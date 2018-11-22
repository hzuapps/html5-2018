// pages/new_pw/new_pw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeTime: null,
    tipStatus: false,
    tip: "",
    tit: null,
    currentInfo: null
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
        tip: "用户名不能为空",
        tipStatus: false
      })
    } else if (!val.password) {
      this.setData({
        tip: "密码不能为空",
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

      function saveJson(transJson) {
        wJson = JSON.stringify(transJson)
        fileSys.writeFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, wJson, "utf8")

        rJson = fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, "utf8")
        console.log("saveJson")
        console.log(rJson)
      }

      function successTip(strTip) {
        wx.showToast({
          title: strTip,
          icon: 'success',
          duration: 3000
        });
      }
      console.log("save start")
      console.log(rJson)
      //数据本地化
      try {
        rJson = fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, "utf8")
        rJson = JSON.parse(rJson)
        //如果rJson[val.title]存在 && !(val.title == this.data.tit)不是当前title，提示是否覆盖
        console.log(this.data.tit)
        if (rJson[val.title] && !(val.title == this.data.tit)) {
          wx.showModal({
            title: '覆盖信息',
            content: val.title + '已经备忘，是否覆盖',
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
          successTip("修改成功")
        }
        //捕获readFileSync异常，说明没有创建importance.importance
      } catch (e) {
        let tJson = {}
        tJson[val.title] = json
        saveJson(tJson)
        successTip("修改成功")
      }

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
  initMsg() {
    wx.getStorage({
      key: 'tit',
      success:(res) => {
        console.log(res.data)
        this.setData({
          tit: res.data
        })
      }
    })
    wx.getStorage({
      key: 'currentInfo',
      success:(res) => {
        console.log(res.data)
        this.setData({
          currentInfo: res.data
        })
      }
    })
    // try {
    //   let getTit = wx.getStorageSync('tit')
    //   let getCurrentInfo = wx.getStorageSync('currentInfo')
    //   this.setData({
    //     tit: getTit,
    //     currentInfo: getCurrentInfo
    //   })
    // } catch (e) {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initMsg()
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