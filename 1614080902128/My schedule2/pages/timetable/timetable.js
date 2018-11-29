var app = getApp()
Page({
  data: {
        colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    list: [
      { "xqj": 1, "skjc": 7, "skcd": 2, "kcmc": "软件工程导论@5-301" },
      { "xqj": 2, "skjc": 7, "skcd": 2, "kcmc": "操作系统@11-208" },
      { "xqj": 3, "skjc": 3, "skcd": 2, "kcmc": "智能信息处理@11-206" },
      { "xqj": 4, "skjc": 5, "skcd": 2, "kcmc": "操作系统@11-106" },
      { "xqj": 4, "skjc": 7, "skcd": 2, "kcmc": "计算机图形学（单/双）@11-406/4-405" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "企业信息化@5-301" },
      { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": "软件工程导论@5-301" },
      { "xqj": 7, "skjc": 1, "skcd": 4, "kcmc": "HTML5应用开发@5-实验室" },

    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})