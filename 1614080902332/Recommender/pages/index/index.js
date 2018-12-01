// pages/index/index.js
Page({
  data: {
    inputShowed: false,
    src1: '../../images/photo1.jpg',
    src2: '../../images/photo2.jpg',
    src3: '../../images/photo3.jpg',
    src4: '../../images/photo4.jpg',
    src5: '../../images/photo5.jpg',
    icon: '../../icons/add.png',
    pathOfAdd: 'add/add'
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});