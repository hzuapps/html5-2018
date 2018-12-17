//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')
let ani = {
  duration: 100,
  timingFunction: 'ease-in',
}
var rise0 = wx.createAnimation(Object.assign({}, ani))
var rise1 = wx.createAnimation(Object.assign({}, ani))
var rise2 = wx.createAnimation(Object.assign({}, ani))
var rise3 = wx.createAnimation(Object.assign({}, ani))

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    isRise: false,
    rise: null,
    notebooks: [],
    isEditNotebook: false,
    notebookid: -1,
    isUpload: false,
  },
  onLoad: function () {
    this.setData({
      notebooks: app.globalData.notebooks,
      encrypt: app.globalData.isEncrypt,
      isUpload: app.globalData.isUpload,
    })

    if (app.globalData.userInfo) {
      console.log('onLoad: if -> userInfo')
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  // 延迟聚焦
  getFocus: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        focus: true
      })
    }, 200)
  },
  importNote: function () {
    // to do
    this.menu()
    wx.showToast({
      title: '暂未实现哦（>_<)!',
      icon: 'none',
      duration: 2000,
    })
  },
  syncNote: function () {
    this.menu()
    app.globalData.isUpload = !app.globalData.isUpload
    this.setData({
      isUpload: app.globalData.isUpload,
    })
    wx.showToast({
      title: app.globalData.isUpload ? '上传' : '本地',
      duration: 2000,
    })

    wx.setStorageSync('upload', app.globalData.isUpload)
  },
  about: function () {
    // to do
    this.menu()
    wx.showModal({
      title: '关于',
      content: '用小本本记下来~',
      showCancel: false,
    })
  },
  encrypt: function () {
    this.menu()
    app.globalData.isEncrypt = !app.globalData.isEncrypt
    this.setData({
      encrypt: app.globalData.isEncrypt,
    })
    wx.showToast({
      title: app.globalData.isEncrypt ? '已解密' : '已加密',
      duration: 2000,
    })

    wx.setStorageSync('encrypt', app.globalData.isEncrypt)
  },
  // 添加新的小本本
  addNotebook: function () {
    this.menu()
    this.setData({
      isEditNotebook: true,
      notebookid: -1,
      // 小本本创建时间
      ts: (new Date()).getTime(),
    })
    this.getFocus()
  },
  save: function (e) {
    let i = this.data.notebookid
    let n = e.detail.value.trim()
    // 如果小本本名不为空
    if (n) {
      let up = null
      if (i < 0) {
        // 新建小本本
        up = { 'name': n, 'ts': this.data.ts, 'update': false }
        let item = Object.assign({}, up, { 'notes': [], })
        app.globalData.notebooks.push(item)
      } else {
        app.globalData.notebooks[i].name = n
        up = {
          'name': n,
          'ts': app.globalData.notebooks[i].ts,
          'update': true
        }
      }
      if (this.data.isUpload) {
        wx.request({
          url: app.globalData.url + 'u',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: { 'content': JSON.stringify(up), 'type': 'book' },
          success: function (res) {
            wx.showToast({
              title: '上传成功',
              duration: 3000,
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '上传失败',
              duration: 5000,
              icon: 'none',
            })
          }
        })
      }

      this.setData({
        notebooks: app.globalData.notebooks,
        bookname: '',
      })
      wx.setStorageSync('notebooks', app.globalData.notebooks)
    }
  },
  cancel: function () {
    this.setData({
      isEditNotebook: false,
      bookname: '',
    })
  },
  // 小本本菜单
  notebookMenu: function (e) {
    let that = this
    wx.showActionSheet({
      itemList: ['导出小本本', '导出为 json 格式', '导出加密小本本', '清空'],
      success: function (res) {
        let i = e.currentTarget.dataset.index
        let notebooks = app.globalData.notebooks
        let d = ''
        if (res.tapIndex == 0) {
          // 纯文本格式
          let notes = notebooks[i]['notes']
          if (notes.length > 0) {
            for (let n of notes) {
              d = d + '##' + n['time'].slice(0, -3) + '\n' + n['note'] + '\n\n'
            }
          }
        } else if (res.tapIndex == 1) {
          // json 格式
          let exp = {}
          exp.name = notebooks[i]['name']
          exp.ts = notebooks[i]['ts']
          let notes = []
          for (let n of notebooks[i]['notes']) {
            notes.push({ 'ts': n.ts, 'note': n.note })
          }
          exp.notes = notes
          d = JSON.stringify(exp)
        } else if (res.tapIndex == 2) {
          // to do
          wx.showToast({
            title: '暂未实现',
            icon: 'none',
          })
          return
        } else {
          wx.showModal({
            title: '提示',
            content: '确定要清空吗？',
            success: function (res) {
              if (res.confirm) {
                app.globalData.notebooks[i]['notes'] = []
                that.setData({
                  notebooks: app.globalData.notebooks
                })
                wx.setStorageSync('notebooks', app.globalData.notebooks)
              }
              return
            }
          })
        }
        wx.setClipboardData({
          data: d,
        })
      }
    })
  },
  // 编辑小本本名字
  editItem: function (e) {
    let i = e.currentTarget.dataset.index
    this.setData({
      isEditNotebook: true,
      notebookid: i,
      bookname: this.data.notebooks[i].name,
    })
    this.getFocus()
  },
  // 删除小本本
  delItem: function (e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          let i = e.currentTarget.dataset.index
          let notebooks = that.data.notebooks
          if (that.data.isUpload) {
            console.log(notebooks[i])
            wx.request({
              url: app.globalData.url + 'd',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: { 'ts': notebooks[i].ts + '', 'type': 'book' },
              success: function (res) {
                wx.showToast({
                  title: '删除成功',
                  duration: 3000,
                })
              },
            })
          }
          notebooks.splice(i, 1)
          that.setData({
            notebooks: notebooks,
          })
          app.globalData.notebooks.splice(i, 1)
          wx.setStorageSync('notebooks', app.globalData.notebooks)
        }
      }
    })

  },
  // 操作菜单
  menu: function () {
    let r = -65
    if (this.data.isRise) {
      r = 0
    }
    rise0.translateY(r).step()
    rise1.translateY(r * 2).step()
    rise2.translateY(r * 3).step()
    rise3.translateY(r * 4).step()

    this.setData({
      isRise: !this.data.isRise,
      rise0: rise0.export(),
      rise1: rise1.export(),
      rise2: rise2.export(),
      rise3: rise3.export(),
    })
  },
  notebook: function (e) {
    wx.navigateTo({
      url: '../note/note?id=' + e.currentTarget.dataset.index,
    })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.notebooks.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
      })
    }
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.touches[0].clientX,//滑动变化坐标
      touchMoveY = e.touches[0].clientY,//滑动变化坐标 changedTouches
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.notebooks.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过 30 度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    that.setData({
      notebooks: that.data.notebooks,
    })
  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
