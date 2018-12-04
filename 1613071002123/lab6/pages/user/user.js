var app = getApp()
Page({
  data: {
    motto: '欢迎登录生日礼物买什么',
    userName: '',
    userPassword: '',
    id_token: '',//方便存在本地的locakStorage
    response: '' //存取返回数据
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(e.detail.value)
  },
  logIn: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8000/admin',
      data: {
        username: this.data.userName,
        password: this.data.userPassword,
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          id_token: res.data.id_token,
          response: res
        })
        try {
          wx.setStorageSync('id_token', res.data.id_token)
        } catch (e) {
        }
        wx.navigateTo({
          url: '../components/welcome/welcome'
        })
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
    })
  }
})
