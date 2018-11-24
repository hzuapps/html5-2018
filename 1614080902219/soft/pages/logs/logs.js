//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    countries: ["只响一次", "每天"],
    countryIndex: 0,
    isAgree: false
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
})
