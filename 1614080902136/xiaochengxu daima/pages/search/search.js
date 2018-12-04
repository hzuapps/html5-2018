Page({
  data: {
    inputShowed: false,
    inputVal: "",
    page1: '1.1',
    page2: '1.2',
    page3: '1.3',
    page4: '1.4',
    page5: '1.5'
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