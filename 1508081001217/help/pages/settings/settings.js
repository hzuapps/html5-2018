Page({
  data: {
    item: {
      headimg: "/image/artist.png",
      dictum: "Good artists copy, great artists steal.\n拙匠抄, 巧匠盗!\n乔布斯说过，毕加索也说过"
    }
  },

  jumpabout: function () {
    wx.navigateTo({
      url: '/pages/settings/about/about',
    })
  },
  jumpphone: function () {
    wx.navigateTo({
      url: '/pages/settings/phone/phone',
    })
  },

    jumpmoneye: function () {
    wx.navigateTo({
      url: '/pages/bleeding/bleeding',
    })
  }
});