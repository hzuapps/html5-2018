// pages/list/list.js

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    MAX_COUNT: 200,
    title: "",

    showDatePicker: false,
    years: years,
    months: months,
    days: days,

    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    phoneNumber: "",
    location: "",
    pickerIndex: [9999, 99, 99],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  onTitleChange: function(event) {
    this.setData({
      title: event.detail.value
    })
  },

  onTextareaChange: function(event) {
    let content = event.detail.value
    if (content.length > this.data.MAX_COUNT) {
      content = content.slice(0, this.data.MAX_COUNT)
    }
    this.setData({
      content
    })
  },

  onLocationChange: function(event) {
    this.setData({
      location: event.detail.value
    })
  },

  bindDateChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },

  bingDateTap: function(e) {
    this.setData({
      showDatePicker: true,
      pickerIndex: [years.findIndex(y => y === this.data.year), months.findIndex(m => m === this.data.month), days.findIndex(d => d === this.data.day)]
    })
  },

  hideDatePicker: function() {
    this.setData({
      showDatePicker: false,
    })
  },

  publish: function() {
    console.log(this.data)
    const list = wx.getStorageSync('list')
    let lastUid = wx.getStorageSync('lastUid')
    if (lastUid !== undefined && lastUid >= 0) {
      lastUid += 1;
    }
    list.unshift({
      uid: lastUid,
      profileUrl: `../../imgs/132.jpg`,
      username: '做-' + Math.random() * 1000,
      publishTime: new Date().toLocaleString(),
      lostTime: new Date(this.data.year, this.data.month - 1, this.data.day).toLocaleString(),
      text: this.data.content,
      location: this.data.location,
      phoneNumber: this.data.phoneNumber,
      images: [`../../imgs/key-4.jpg`]
    })
    wx.setStorageSync('list', list)
    wx.setStorageSync('lastUid', lastUid)
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000
    })
    wx.switchTab({
      url: '../index/index'
    })
  },
  onPhoneChange: function(e) {
    this.setData({
      phoneNumber: e.detail.value,
    })
  }
})