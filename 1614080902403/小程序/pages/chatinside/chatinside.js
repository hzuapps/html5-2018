// pages/chatinside/chatinside.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatpage: null,
    isiphonex: false,
    cushead: null,
    chatdata: null,
    myhead: 'assets/images/admin/avatar-admin2.png',
    uid: null,
    scrollpos: null,
    inputvalue: null,
    voiceheight: 0,
    showvoice: false,
    voicetext: null
  },
  rpxbs: 0,
  toploadlock: false,
  lastLoadcid: 999999999,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.rpxbs = getApp().globalData.rpxbei;
    getApp().globalData.curchatpage = this;
    let that = this;
    this.setData({
      isiphonex: getApp().globalData.isiphonex
    });
    let allpage = getCurrentPages();
    let curname = allpage[0].data.nearData[options.index].name;
    let uid = allpage[0].data.nearData[options.index].uid;
    let head = allpage[0].data.nearData[options.index].head;
    this.setData({
      chatpage: allpage[0],
      cushead: head,
      'uid': uid
    });
    wx.setNavigationBarTitle({
      title: curname,
    })
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://css.ruixinyunke.com/admin/set/chatdata',
      header: {
        "Cookie": "PHPSESSID=" + getApp().globalData.sessid,
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      method: "post",
      data: {
        visiter_id: uid,
        hid: ''
      },
      success: function(res) {
        for (let i = 0; i < res.data.data.length; i++) {
          let dd = res.data.data[i].content.replace(/<\/?.+?>/g, "");
          dd = dd.replace(/ /g, "");
          res.data.data[i].content = dd;
        }
        that.setData({
          chatdata: res.data.data,
          scrollpos: 112 * res.data.data.length + 500
        });
      },
      complete: function() {
        wx.hideNavigationBarLoading();
      }
    })
    wx.request({
      url: 'https://css.ruixinyunke.com/admin/set/getwatch',
      header: {
        "Cookie": "PHPSESSID=" + getApp().globalData.sessid,
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      method: "post",
      data: {
        visiter_id: that.data.uid
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    let allpage = getCurrentPages();
    let _nearData = allpage[0].data.nearData;
    let uid = this.data.uid;
    for (let i = 0; i < _nearData.length; i++) {
      if (_nearData[i].uid == uid) {
        _nearData[i].notRead = {}
      }
    }
    allpage[0].setData({
      nearData: _nearData,
      curreply: {
        index: null,
        jj: null
      },
      'replybox.show': 0
    });
    getApp().globalData.curchatpage = null;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  sendmsg: function(e) {
    let that = this;
    let _chatdata = this.data.chatdata;
    _chatdata.push({
      cid: null,
      content: e.detail.value,
      direction: "to_visiter",
      timestamp: Date.parse(new Date()).toString().substr(0, 10)
    });
    this.setData({
      inputvalue: null,
      chatdata: _chatdata,
      scrollpos: _chatdata.length * 112 + 500
    });
    wx.request({
      url: 'https://css.ruixinyunke.com/admin/set/chats',
      header: {
        "Cookie": "PHPSESSID=" + getApp().globalData.sessid,
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      method: "post",
      data: {
        visiter_id: that.data.uid,
        content: "技术主管:" + e.detail.value
      }
    })

  },
  lyks: function() {
    let that = this;
    let ly = wx.getRecorderManager();
    ly.onFrameRecorded(function(res) {
      let seq = that.seq + 1;
      that.seq = seq;
      wx.request({
        url: 'https://oa2.ruixinyunke.com/ffmpeg/',
        method: "post",
        data: res.frameBuffer,
        header: {
          "seq": seq,
          "end": (res.isLastFrame == true ? 1 : 0),
          "rand": that.randnum
        },
        success: function(res) {
          if (res.data.text.search('null') == -1) {
            that.setData({
              voicetext: res.data.text
            });
          }
        }
      });
    });
    that.seq = -1;
    that.randnum = that.randstr(16).toString();
    console.log(that.randnum);
    ly.start({
      numberOfChannels: 1,
      encodeBitRate: 16000,
      format: "mp3",
      frameSize: 1
    });
  },
  lytz: function() {
    let ly = wx.getRecorderManager();
    ly.stop();
  },
  seq: -1,
  randnum: null,
  randstr: function randomString(len) {
    len = len || 32;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  taplong: function(res) {
    let top = res.detail.y - (200 / this.rpxbs) - 30 * this.rpxbs;
    this.setData({
      showvoice: true,
      voiceheight: top,
      voicetext: ''
    });
    this.lyks();
  },
  touchend: function(res) {
    if (!this.data.voicetext) {
      this.setData({
        showvoice: false
      });
      wx.showToast({
        title: '您没有说话',
        icon: "none"
      })
    }
    this.lytz();
  },
  cancelvoice: function() {
    this.setData({
      showvoice: false
    });
  },
  sendvoice: function() {
    this.sendmsg({
      detail: {
        value: this.data.voicetext
      }
    });
    this.setData({
      showvoice: false
    });
  },
  loadtop: function() {
    if (this.toploadlock == true) {
      return;
    }
    console.log(this.data.chatdata[0].cid);
    console.log(this.lastLoadcid);
    if (this.data.chatdata[0].cid >= this.lastLoadcid) {
      return;
    }
    let that = this;
    wx.showNavigationBarLoading();
    this.toploadlock = true;
    this.lastLoadcid = this.data.chatdata[0].cid;
    wx.request({
      url: 'https://css.ruixinyunke.com/admin/set/chatdata',
      header: {
        "Cookie": "PHPSESSID=" + getApp().globalData.sessid,
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      method: "post",
      data: {
        visiter_id: this.data.uid,
        hid: this.data.chatdata[0].cid
      },
      success: function(res) {
        let length = res.data.data.length;
        for (let i = 0; i < length; i++) {
          let dd = res.data.data[i].content.replace(/<\/?.+?>/g, "");
          dd = dd.replace(/ /g, "");
          res.data.data[i].content = dd;
        }

        res.data.data = res.data.data.concat(that.data.chatdata);
        that.setData({
          chatdata: res.data.data
        })
      },
      complete: function() {
        wx.hideNavigationBarLoading();
        setTimeout(function() {
          that.toploadlock = false;
        }, 1000);
      }
    })
  }
})