//index.js
//获取应用实例

var util = require("../../utils/util.js");

//更改数组 第三个参数是对象
function editArr(arr, i, editCnt) {
  let newArr = arr, editingObj = newArr[i];
  for (var x in editCnt) {
    editingObj[x] = editCnt[x];
  }
  return newArr;
}

const app = getApp()

Page({
  data: {
    //motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    curIpt: '',
    showAll: true,
    lists: [],
    curRange: [],
    curBegin: 0,
    curFinish: 1,
    remind: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../home/home',
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
    var that = this;
    //获取之前保留在缓存里的数据
    wx.getStorage({
      key: 'todolist',
      success: function (res) {
        if (res.data) {
          that.setData({
            lists: res.data
          })
        }
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
      iptChange(e) {
      let timeArr = util.setTimeHalf();
      this.setData({
        curIpt: e.detail.value,
        curRange: timeArr
      })
    },
    formReset() {
      this.setData({
        curIpt: '',
        curRange: []
      })
    },
    formSubmit() {
      let cnt = this.data.curIpt, newLists = this.data.lists, i = newLists.length, begin = this.data.curRange[this.data.curBegin], finish = this.data.curRange[this.data.curFinish];
      if (cnt) {
        newLists.push({ id: i, content: cnt, done: false, beginTime: begin, finishTime: finish, editing: false });
        this.setData({
          lists: newLists,
          curIpt: ''
        })
      }
    },
    beginChange(e) {
      this.setData({
        curBegin: e.detail.value,
        curFinish: Number(e.detail.value) + 1
      })
    },
    finishChange(e) {
      this.setData({
        curFinish: e.detail.value
      })
    },
    //修改备忘录
    toChange(e) {
      let i = e.target.dataset.id;
      this.setData({
        lists: editArr(this.data.lists, i, { editing: true })
      })
    },
    iptEdit(e) {
      let i = e.target.dataset.id;
      this.setData({
        lists: editArr(this.data.lists, i, { curVal: e.detail.value })
      })
    },
    saveEdit(e) {
      let i = e.target.dataset.id;
      this.setData({
        lists: editArr(this.data.lists, i, { content: this.data.lists[i].curVal, editing: false })
      })
    },
    setDone(e) {
      let i = e.target.dataset.id, originalDone = this.data.lists[i].done;
      this.setData({
        lists: editArr(this.data.lists, i, { done: !originalDone })
      })
    },
    toDelete(e) {
      let i = e.target.dataset.id, newLists = this.data.lists;
      newLists.map(function (l, index) {
        if (l.id == i) {
          newLists.splice(index, 1);
        }
      })
      this.setData({
        lists: newLists
      })
    },
    doneAll() {
      let newLists = this.data.lists;
      newLists.map(function (l) {
        l.done = true;
      })
      this.setData({
        lists: newLists
      })
    },
    deleteAll() {
      this.setData({
        lists: [],
        remind: []
      })
    },
    showUnfinished() {
      this.setData({
        showAll: false
      })
    },
    showAll() {
      //显示全部事项
      this.setData({
        showAll: true
      })
    },
    saveData() {
      let listsArr = this.data.lists;
      wx.setStorage({
        key: 'todolist',
        data: listsArr
      })
    }
  })
