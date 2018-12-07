// pages/note/note.js
var util = require('../../utils/util.js')
var crypto = require('../../utils/crypto.js')
const app = getApp()

Page({
  data: {
    notebook: [],
    notebookid: -1,
    isEditStatus: false,
    isEditExisted: false,
    isSaved: false,
    cacheNote: '',
    cacheDate: null,
    swipeDown: true,
    isEncrypt: false,
  },
  onLoad: function (options) {
    let notebook = app.globalData.notebooks[options.id]['notes']
    this.setData({
      notebook: notebook,
      notebookid: options.id,
      isEncrypt: app.globalData.isEncrypt,
    })
  },
  // 展开详细笔记
  detail: function (e) {
    let i = e.currentTarget.dataset.index
    let id = 'notebook[' + i + '].wrap'
    this.setData({
      [id]: !this.data.notebook[i].wrap,
    })
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
  // 添加一条笔记
  add: function () {
    this.setData({
      isEditStatus: true,
      isEditExisted: false,
      cacheDate: new Date(),
    })
    this.getFocus()
  },
  // 编辑笔记获取到焦点触发事件
  editNoteFocus: function (e) {
    this.setData({
      isSaved: false,
    })
  },
  // 保存笔记
  save: function (e) {
    let notebook = this.data.notebook
    let note = e.detail.value
    // 笔记为空，放弃编辑
    if (!note.trim()) {
      this.setData({
        isSaved: true,
        isEditStatus: false,
      })
      return
    }
    let bookidx = this.data.notebookid
    let up = {
      'bookid': app.globalData.notebooks[bookidx]['ts']
    }
    // 保存编辑已有笔记
    if (this.data.isEditExisted && this.data.cacheNote != note) {
      let noteIndex = this.data.noteIndex
      notebook[noteIndex]['note'] = note
      notebook[noteIndex]['md5'] = crypto.MD5(note).toString()
      up.note = note
      up.ts = this.data.notebook[noteIndex]['ts']
      up.update = true
      this.setData({
        notebook: notebook,
        isEditExisted: false,
      })
      app.globalData.notebooks[bookidx]['notes'][noteIndex]['note'] = note
    } else {// 保存添加新的笔记
      up.ts = this.data.cacheDate.getTime()
      up.note = note
      up.update = false
      let item = {
        ts: this.data.cacheDate.getTime(),
        note: note,
        time: util.formatTime(this.data.cacheDate),
        'md5': crypto.MD5(note).toString(),
        wrap: true
      }

      app.globalData.notebooks[bookidx]['notes'].unshift(item)
      notebook.unshift(item)

      this.setData({
        notebook: notebook,
        isSaved: true,
        isEditStatus: false,
      })
    }
    if (app.globalData.isUpload) {
      wx.request({
        url: app.globalData.url + 'u',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: { 'content': JSON.stringify(up), 'type': 'note' },
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
            icon:'none',
          })
        }
      })
    }
    wx.setStorageSync('notebooks', app.globalData.notebooks)
  },
  // 编辑笔记
  editItem: function (e) {
    let i = e.currentTarget.dataset.index
    this.setData({
      cacheNote: this.data.notebook[i]['note'],
      isEditStatus: true,
      isEditExisted: true,
      noteIndex: i,
    })
    this.getFocus()
  },
  // 导出单条笔记
  exportNote: function (e) {
    let that = this
    wx.showActionSheet({
      itemList: ['导出该条笔记', '导出为 json 格式', '导出加密笔记'],
      success: function (res) {
        let i = e.currentTarget.dataset.index
        let notebook = that.data.notebook
        let d = ''
        if (res.tapIndex == 0) {
          d = '##' + notebook[i]['time'].slice(0, -3) + '\n' + notebook[i]['note']
        } else if (res.tapIndex == 1) {
          let item = {}
          item['ts'] = notebook[i]['ts']
          item['note'] = notebook[i]['note']
          d = JSON.stringify(item)
        } else {
          // to do
          wx.showToast({
            title: '暂未实现',
            icon: 'none',
          })
          return
        }
        wx.setClipboardData({
          data: d,
        })
      },
    })

  },

  
  // 删除笔记
  delItem: function (e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          let i = e.currentTarget.dataset.index
          let notebook = that.data.notebook
          console.log(notebook[i])
          if (app.globalData.isUpload) {
            wx.request({
              url: app.globalData.url + 'd',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: { 'ts': notebook[i].ts + '', 'type': 'note' },
              success: function (res) {
                wx.showToast({
                  title: '删除成功',
                  duration: 3000,
                })
              },
            })
          }
          notebook.splice(i, 1)
          that.setData({
            notebook: notebook,
          })
          app.globalData.notebooks[that.data.notebookid]['notes'].splice(i, 1)
          wx.setStorageSync('notebooks', app.globalData.notebooks)
        }
      }
    })
  },
  // 失去焦点，不保存笔记，但添加一些额外的操作。
  cancel: function (e) {
    // 新建的笔记（不是编辑已有笔记）没保存，暂存
    let note = ''
    if (!this.data.isSaved && !this.data.isEditExisted) {
      note = e.detail.value
    }
    this.setData({
      isEditStatus: false,
      isSaved: false,
      cacheNote: note,
    })
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.notebook.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        // notebook: this.data.notebook
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
    that.data.notebook.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过 30 度角 
      if (Math.abs(angle) > 30) {
        if (that.data.swipeDown && startY - touchMoveY > 64) {// 上滑
          that.setData({
            swipeDown: false
          })
        } else if (!that.data.swipeDown && startY - touchMoveY < -64) {
          that.setData({
            swipeDown: true
          })
        }
        return
      }
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    that.setData({
      notebook: that.data.notebook,
    })
  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
})
