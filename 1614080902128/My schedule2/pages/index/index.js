//index.js
//获取应用实例
const app = getApp()
const Locker = require('../utils/locker.js');
Page({
  data: {
    lockMsg: '请绘制图案'
  },
  onLoad: function () {
    let pwd = wx.getStorageSync('locker_pwd') || '';
    let res = wx.getSystemInfoSync();
    let ftHeight = res.windowHeight - 410;
    let that = this;
    this.setData({ lockType: pwd == '' ? 1 : 2, ftHeight: ftHeight });
    //
    this.lock = new Locker(this, {
      id: 'canvas',
      lockType: this.data.lockType,
      onTouchEnd: (e) => {
        // console.log("onTouchEnd: ", e);
      },
      onSuccess: (e) => {
        // console.log("onSuccess: ", e);
        if (e.lockType == "1") {
          console.log("密码设置成功，密码为：", e.lockPwd);
          that.setData({ lockType: 2 });
          that.lock.changeLockType(2);
        } else {
          console.log("密码解锁成功!");
          wx.switchTab({
            url: '../timetable/timetable'
          })

        }
      }
    });

  },
  reset(e) {
    this.lock.reset();
  },
  forget(e) {
    let that = this;
    wx.showModal({
      content: '确定要重置密码吗?',
      success: (res) => {
        if (res.confirm) {
          that.setData({ lockType: 1 });
          that.lock.changeLockType(1);
        }
      }
    })
  }
})