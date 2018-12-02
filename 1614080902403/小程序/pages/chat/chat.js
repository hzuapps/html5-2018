// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shadowstyle: null,
    isnotInputSearch: true,
    searchValue: null,
    searchstyle: null,
    searchboxstyle: null,
    boxwidth: 530,
    nearData: null,
    replybox: {
      name: null,
      msg: null,
      show: 0
    },
    replayboxbottom: 0,
    pxbs: 0,
    curreply: {
      index: null,
      jj: null
    },
    tapindex: null,
    voicetext: '',
    showvoice: false,
    voiceheight: 0
  },
  rpxbs: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.rpxbs = getApp().globalData.rpxbei;
    /*
     let _nearData = [
       {
         "uid": 15463,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "明天会更好",
         "notRead": [
           {
             "cid": 1867988,
             "content": "现在怎么样了",
             "timestamp": 1543240320,
             "direction": 0
           },
           {
             "cid": 1867989,
             "content": "修复好了吗",
             "timestamp": 1543240100,
             "direction": 0
           },
           {
             "cid": 1867990,
             "content": "我那个问题如何了",
             "timestamp": 1543240000,
             "direction": 0
           },
           {
             "cid": 1867992,
             "content": "客服在吗",
             "timestamp": 1543239900,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1867998,
           "content": "现在怎么样了",
           "timestamp": 1543240320,
           "direction": 1
         }
       },
       {
         "uid": 21398,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "快乐快乐",
         "notRead": [
           {
             "cid": 1867999,
             "content": "你们有开发这个吗",
             "timestamp": 1543240620,
             "direction": 0
           },
           {
             "cid": 1869129,
             "content": "你好",
             "timestamp": 1543240467,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "你们有开发这个吗",
           "timestamp": 1543240620,
           "direction": 0
         }
       },
       {
         "uid": 19879,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "薄荷",
         "notRead": [
           {
             "cid": 1867999,
             "content": "可以了 谢谢",
             "timestamp": 1543240320,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "现在怎么样了",
           "timestamp": 1543240467,
           "direction": 0
         }
       },
       {
         "uid": 17642,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "够爱",
         "notRead": [
           {
             "cid": 18680001,
             "content": "可以了",
             "timestamp": 1543240190,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "可以了",
           "timestamp": 1543240467,
           "direction": 0
         }
       },
       {
         "uid": 17642,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "明朗",
         "notRead": [
           {
             "cid": 18680001,
             "content": "我投诉的那个问题处理怎么样了",
             "timestamp": 1543240190,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "我投诉的那个问题处理怎么样了",
           "timestamp": 1543240467,
           "direction": 0
         }
       },
       {
         "uid": 17642,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "梅花",
         "notRead": [
           {
             "cid": 18680001,
             "content": "祝您生活愉快",
             "timestamp": 1543240190,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "祝您生活愉快",
           "timestamp": 1543240467,
           "direction": 0
         }
       },
       {
         "uid": 17642,
         "head": "https://css.ruixinyunke.com/assets/images/index/avatar-red2.png",
         "name": "锤子",
         "notRead": [
           {
             "cid": 18680001,
             "content": "钱已经付了，请查收下",
             "timestamp": 1543240190,
             "direction": 0
           }
         ],
         "lastMsg": {
           "cid": 1869129,
           "content": "钱已经付了，请查收下",
           "timestamp": 1543240467,
           "direction": 0
         }
       }
     ]
     
     for(let i=0;i<_nearData.length;i++){
       for(let j=0;j<_nearData[i].notRead.length;j++){
         let hours = parseInt((_nearData[i].notRead[j].timestamp % (1 * 60 * 60 * 24)) / (1 * 60 * 60));
         let minutes = parseInt((_nearData[i].notRead[j].timestamp % (1 * 60 * 60)) / (1 * 60));
         _nearData[i].notRead[j].time = hours + ":" + minutes;
       }
       let hours = parseInt((_nearData[i].lastMsg.timestamp % (1 * 60 * 60 * 24)) / (1 * 60 * 60));
       let minutes = parseInt((_nearData[i].lastMsg.timestamp % (1 * 60 * 60)) / (1 * 60));
       _nearData[i].lastMsg.time = hours + ":" + minutes;
       _nearData[i].showStatus = 0;
     }
     
     this.setData({
       nearData: _nearData
     });
     */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let that = this;
    wx.getStorage({
      key: 'nearData',
      success: function(res) {
        let data = JSON.parse(res.data);
        that.setData({
          nearData: data
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      tapindex: null
    });
    let that = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://css.ruixinyunke.com/api/getchats/',
      success: function(res) {
        if (res.data.code == 0) {
          let _nearData = res.data.data;
          for (let i = 0; i < _nearData.length; i++) {
            for (let j = 0; j < _nearData[i].notRead.length; j++) {
              let date = new Date(parseInt(_nearData[i].notRead[j].timestamp + "000"));
              let hours = date.getHours();
              let minutes = date.getMinutes();
              _nearData[i].notRead[j].time = hours + ":" + minutes;
            }
            let date = new Date(parseInt(_nearData[i].lastMsg.timestamp + "000"));
            let hours = date.getHours();
            let minutes = date.getMinutes();
            _nearData[i].lastMsg.time = hours + ":" + minutes;
            _nearData[i].showStatus = 0;
          }
          that.setData({
            nearData: _nearData
          });
          wx.setStorage({
            key: 'nearData',
            data: JSON.stringify(_nearData),
          })
        }
      },
      complete: function() {
        wx.hideNavigationBarLoading();
      }
    })

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

  changeshadow: function(e) {
    this.setData({
      "shadowstyle": "shadow",
      searchstyle: "focusSearch",
      searchboxstyle: "focusSearchBox",
      boxwidth: 490
    });
  },
  inputSearch: function(e) {
    if (e.detail.value.length > 0) {
      this.setData({
        "isnotInputSearch": false,
        searchValue: e.detail.value,
        "shadowstyle": null,
      });
    } else {
      this.setData({
        "isnotInputSearch": true,
        searchValue: e.detail.value,
        "shadowstyle": "shadow",
      });
    }
  },
  clearSearch: function() {
    if (this.data.isnotInputSearch == false) {
      this.setData({
        searchValue: null,
        searchFoucus: true,
        isnotInputSearch: true,
        shadowstyle: "shadow",
      });
    }
  },
  tapmain: function(e) {
    this.clearSearch();
    this.setData({
      "shadowstyle": null,
      searchstyle: null,
      searchboxstyle: null,
      searchValue: null,
      searchFoucus: null,
      boxwidth: 530,
      isnotInputSearch: true,
      ['replybox.show']: 0,
      curreply: {
        index: null,
        jj: null
      }
    });

  },
  cancelsearch: function() {
    this.tapmain();
  },
  downarrow: function(e) {
    let index = e.currentTarget.dataset.index;
    let s = 'nearData[' + index + '].showStatus';
    this.setData({
      [s]: 1
    });
  },
  uparrow: function(e) {
    let index = e.currentTarget.dataset.index;
    let s = 'nearData[' + index + '].showStatus';
    this.setData({
      [s]: 0
    });
  },
  popSend: function(e) {
    let index = e.currentTarget.dataset.index;
    let _msg = null;
    let jj = null;
    if (e.currentTarget.dataset.type == 0) {
      _msg = this.data.nearData[index].lastMsg.content;
    } else {
      jj = e.currentTarget.dataset.jj;
      _msg = this.data.nearData[index].notRead[jj].content;
    }
    let _name = this.data.nearData[index].name;
    this.setData({
      replybox: {
        name: _name,
        msg: _msg,
        show: 1
      },
      curreply: {
        'index': index,
        'jj': jj
      }
    });
  },
  reply_box_focus: function(e) {
    this.setData({
      replayboxbottom: e.detail.height - 20 / this.data.pxbs
    });

  },
  chatinside: function(e) {
    this.setData({
      'tapindex': e.currentTarget.dataset.index
    });
    wx.navigateTo({
      url: '/pages/chatinside/chatinside?index=' + e.currentTarget.dataset.index,
    })
  },
  sendmsg: function(e) {
    let that = this;
    let index = this.data.curreply.index;
    if (!e.detail.value) {
      wx.showToast({
        title: '请输入内容',
        icon: "none"
      })
      return;
    }
    this.tapmain();
    let tmp = 'nearData[' + index + '].lastMsg.content';
    this.setData({
      [tmp]: "技术主管:" + e.detail.value
    });
    wx.request({
      url: 'https://css.ruixinyunke.com/admin/set/chats',
      header: {
        "Cookie": "PHPSESSID="+getApp().globalData.sessid,
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      method: "post",
      data: {
        visiter_id: that.data.nearData[index].uid,
        content: "技术主管:" + e.detail.value
      },
      success: function(res) {
        if (res.data.code == 0) {
          wx.showToast({
            title: '发送成功',
            icon: "none"
          })
        }
      }
    })
  },
  lyks: function() {
    let that = this;
    let ly = wx.getRecorderManager();
    ly.onFrameRecorded(function(res) {
      let seq = that.seq + 1;
      that.seq = seq;
      console.log(seq);
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
    let top = res.detail.y - (200 / this.rpxbs / 2);
    this.setData({
      showvoice: true,
      voiceheight: top,
      curreply: {
        index: res.currentTarget.dataset.index,
        jj: res.currentTarget.dataset.jj
      },
      voicetext: ''
    });
    this.lyks();
  },
  touchend: function(res) {
    if (this.data.showvoice == true && !this.data.voicetext) {
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
  }
})