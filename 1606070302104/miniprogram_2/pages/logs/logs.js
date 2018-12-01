//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json: null,
    jsonKeyArr: null,
    joinSumArr: null,
    isNul: true
  },
  changetest: function () {
    wx.navigateTo({
      url: '../edit/edit',
    })
  },
  del: function (event) {
    console.log(event)
    let tit = event.currentTarget.id
    //删除提示
    wx.showModal({
      title: '删除',
      content: '是否要删除<' + tit + '>',
      confirmText: "删除",
      cancelText: "取消",
      success: (res) => {
        if (res.confirm) {
          let tJson = this.data.json
          console.log("del befor")
          console.log(tJson)
          delete tJson[tit]//删除
          console.log("after del")
          console.log(tJson)
          //本地化
          try {
            const fileSys = wx.getFileSystemManager()
            let wJson = JSON.stringify(tJson)
            fileSys.writeFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, wJson, "utf8")
            wx.showToast({
              title: "删除成功",
              icon: 'success',
              duration: 3000
            });
            this.initMag()
          } catch (e) {
            console.log(e)
          }
        } else {

        }
      }
    });
  },
  //获取弹窗所需信息（username，password，tip）
  getMsg: function (event) {
    console.log(event.currentTarget.id)
    let tit = event.currentTarget.id
    let current = this.data.json[tit]
    let tip = null
    if (current.tip) {
      tip = '备    注：' + current.tip
    } else {
      tip = ''
    }
    //弹窗提示
    wx.showModal({
      title: tit,
      content: '标题：' + current.username + '\r\n' + '所用时间：' + current.password + '\r\n' + tip,
      confirmText: "确定",
      cancelText: "修改",
      success: function (res) {
        if (res.confirm) {

        } else {//点击修改，跳转
          //设置信息缓存供修改页使用
          wx.setStorage({
            key: "currentInfo",
            data: current
          })
          wx.setStorage({
            key: "tit",
            data: tit
          })
          wx.navigateTo({
            url: "/pages/navigator/navigator",
            success(res) {

              // try {
              //   wx.setStorageSync('currentInfo', current)
              //   wx.setStorageSync('tit', tit)
              // } catch (e) {}
            }
          })
        }
      }
    });
  },
  //初始化信息，在onLoad,onShow上执行
  initMag() {
    let rJson = null
    const fileSys = wx.getFileSystemManager()
    try {//获取数据
      rJson = fileSys.readFileSync(`${wx.env.USER_DATA_PATH}/importance.importance`, "utf8")
      rJson = JSON.parse(rJson)

      let keyArr = Object.keys(rJson)
      let tArr = []
      for (let x = 0; x < keyArr.length; x++) {
        tArr[x] = x
      }
      console.log(keyArr.length)
      if (!keyArr.length) {
        this.setData({
          isNul: true
        })
      } else {
        this.setData({
          isNul: false
        })
      }
      this.setData({
        json: rJson,
        jsonKeyArr: keyArr,
        joinSumArr: tArr
      })
    } catch (e) {//说明没有文件
      this.setData({
        isNul: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initMag()
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
    this.initMag()
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