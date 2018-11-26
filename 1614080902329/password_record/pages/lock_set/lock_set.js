const app = getApp()
const Locker = require('../../utils/locker.js');

Page({
  data: {
    lockMsg: '请绘制图案',
    lockTyp: null
  },
  onLoad: function () {
    let pwd = wx.getStorageSync('locker_password') || '';
    console.log(pwd);
    let res = wx.getSystemInfoSync();
    let ftHeight = res.windowHeight - 410;
    let that = this;
    this.setData({ lockType: 1 , ftHeight: ftHeight });

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
          wx.navigateTo({
            url: '/pages/mome_set/mome_set'
          })
        } else {
          console.log("密码解锁成功!");
          wx.switchTab({
            url: '/pages/new_pw/new_pw',
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