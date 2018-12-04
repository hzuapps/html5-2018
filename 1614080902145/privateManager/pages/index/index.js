//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //处理表单发送的数据
  formSubmit: function (res) {
    let val = res.detail.value
    clearTimeout(this.closeTime)
    //判断数据的合法性
    if (!val.title) {
      this.setData({
        tip: "使用方不能为空",
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
  }
})
