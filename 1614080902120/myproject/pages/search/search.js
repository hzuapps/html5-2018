Page({
  data: {
    inputShowed: false,
    inputVal: "",
    page1: 'rwsk',
    page2: 'jjgl',
    page3: 'xxjs',
    page4: 'wxxs',
    page5: 'lszj'
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