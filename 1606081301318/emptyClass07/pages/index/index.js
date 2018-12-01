//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navList: [{
        name: "周一",
        id: 1
      },
      {
        name: "周二",
        id: 2
      },
      {
        name: "周三",
        id: 3
      },
      {
        name: "周四",
        id: 4
      },
      {
        name: "周五",
        id: 5
      },
      {
        name: "周六",
        id: 6
      },
      {
        name: "周日",
        id: 7
      }
    ],
    blist: [{
        name: "1号楼",
        id: 1
      },
      {
        name: "2号楼",
        id: 2
      },
      {
        name: "3号楼",
        id: 3
      },
      {
        name: "5号楼",
        id: 5
      },
      {
        name: "6号楼",
        id: 6
      },
      {
        name: "7号楼",
        id: 7
      },
      {
        name: "11号楼",
        id: 11
      }
    ],
    size: 10000,
    id: 1,
    listid: 1,
    showfilter: false,
    showfilterindex: null,
    cateindex: 0,
    cateid: null,
    subcateindex: 0,
    subcateid: null,
    subareaindex: 0,
    subareaid: null,
    scrolltop: null,
    timeTitle: "请选择时间",
    toplist: true,
    leftlist: true,
    inlist: false,
    nav_height: '84',
  },

  onLoad: function() {
    this.initScreen();
    this.initData();
    this.initDate();
  },

  initScreen: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var nav_height = that.data.nav_height;
        var wh = res.windowHeight;
        var ww = res.windowWidth;
        that.setData({
          scrollHeight: wh - (84 * (ww / 750)),
          panel_width: ww - (162 * (ww / 750))
        });
      }
    });
  },

  initData: function() {
    this.setData({
      filterdata: {
        "cate": [{
            "id": 0,
            "title": "选择时间"
          },
          {
            "id": 1,
            "title": "第一节 8:00",
            "cate_two": [{
                "id": 2,
                "title": "第二节 8:50"
              },
              {
                "id": 3,
                "title": "第三节 10:40"
              },
              {
                "id": 4,
                "title": "第四节 11:30"
              },
              {
                "id": 5,
                "title": "第五节 14:30"
              },
              {
                "id": 6,
                "title": "第六节 16:05"
              },
              {
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 2,
            "title": "第二节 8:50",
            "cate_two": [{
                "id": 3,
                "title": "第三节 10:40"
              },
              {
                "id": 4,
                "title": "第四节 11:30"
              },
              {
                "id": 5,
                "title": "第五节 14:30"
              },
              {
                "id": 6,
                "title": "第六节 16:05"
              },
              {
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 3,
            "title": "第三节 10:40",
            "cate_two": [{
                "id": 4,
                "title": "第四节 11:30"
              },
              {
                "id": 5,
                "title": "第五节 14:30"
              },
              {
                "id": 6,
                "title": "第六节 16:05"
              },
              {
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 4,
            "title": "第四节 11:30",
            "cate_two": [{
                "id": 5,
                "title": "第五节 14:30"
              },
              {
                "id": 6,
                "title": "第六节 16:05"
              },
              {
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 5,
            "title": "第五节 11:30",
            "cate_two": [{
                "id": 6,
                "title": "第六节 16:05"
              },
              {
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 6,
            "title": "第六节 16:05",
            "cate_two": [{
                "id": 7,
                "title": "第七节 16:15"
              },
              {
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 7,
            "title": "第七节 16:15",
            "cate_two": [{
                "id": 8,
                "title": "第八节 17:50"
              },
              {
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 8,
            "title": "第八节 17:50",
            "cate_two": [{
                "id": 9,
                "title": "第九节 19:30"
              },
              {
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 9,
            "title": "第九节 19:30",
            "cate_two": [{
                "id": 10,
                "title": "第十节 20:20"
              },
              {
                "id": 11,
                "title": "第十一节 21:55"
              }
            ]
          },
          {
            "id": 10,
            "title": "第十节 20:20",
            "cate_two": [{
              "id": 11,
              "title": "第十一节 21:55"
            }]
          },
        ]
      }
    })
  },

  initDate: function() {
    var mydate = new Date();
    var myddy = mydate.getDay();
    this.setData({
      id: myddy + 1,
    })
  },

  showData: function() {
    var that = this
    var wd = this.data.id;
    var ls = this.data.cateid;
    var le = this.data.subcateid;
    var bd = this.data.listid;
    var tl = this.data.toplist;
    var ll = this.data.leftlist;
    var il = this.data.inlist;

    var f1 = 0,
      f2 = 0,
      f3 = 0,
      f4 = 0,
      f5 = 0,
      f6 = 0,
      f7 = 0,
      f8 = 0,
      f13 = 0;
    if (!tl || !ll || !il) {
      return false;
    }
    wx.request({
      url: 'https://apps.chaoshy.cn/emptyClass/Home/Query?ls=' + ls + '&le=' + le + '&wd=' + wd + '&bd=' + bd,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(JSON.stringify(res.data[0]))
        var room_list = {
          "one": {},
          "two": {},
          "three": {},
          "four": {},
          "five": {},
          "six": {},
          "seven": {},
          "eight": {},
          "eleven": {}
        };
        for (var i = 0, l = res.data.length; i < l; i++) {
          var n = JSON.stringify(res.data[i]).substr(11, 1);
          switch (n) {
            case '1':
              if (room_list.one == null || room_list.one == '') {} else {}
              room_list.one[f1] = res.data[i].room;
              f1++;
              break;
            case '2':
              room_list.two[f2] = res.data[i].room;
              f2++;
              break;
            case '3':
              room_list.three[f3] = res.data[i].room;
              f3++;
              break;
            case '4':
              room_list.four[f4] = res.data[i].room;
              f4++;
              break;
            case '5':
              room_list.five[f5] = res.data[i].room;
              f5++;
              break;
            case '6':
              room_list.six[f6] = res.data[i].room;
              f6++;
              break;
            case '7':
              room_list.seven[f7] = res.data[i].room;
              f7++;
              break;
            case '8':
              room_list.eight[f8] = res.data[i].room;
              f8++;
              break;
            case '13':
              room_list.eleven[f13] = res.data[i].room;
              f13++;
              break;
            default:
              break;
          }
        }
        console.log(room_list)
        that.setData({
          room_list: room_list,
          roomData: res.data
        })
      }

    })
  },
  
  getCategoryInfo: function () {
    let that = this;

    let currentIndex = 0;
    let navListCount = that.data.navList.length;
    for (let i = 0; i < navListCount; i++) {
      currentIndex += 1;
      if (that.data.navList[i].id == that.data.id) {
        break;
      }
    }
    if (currentIndex > navListCount / 2 && navListCount > 5) {
      that.setData({
        scrollLeft: currentIndex * 60
      });
    }
  },

  setFilterPanel: function(e) { 
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if (d.showfilterindex == i) {
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    } else {
      this.setData({
        showfilter: true,
        showfilterindex: i,
      })
    }

  },

  switchCate: function (event) {
    if (this.data.id == event.currentTarget.dataset.id) {
      return false;
    }
    var that = this;
    var clientX = event.detail.x;
    var currentTarget = event.currentTarget;
    if (clientX < 60) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft - 60
      });
    } else if (clientX > 330) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft
      });
    }
    this.setData({
      id: event.currentTarget.dataset.id,
      toplist: true
    });

    this.getCategoryInfo();
    this.showData();
  },

  switchCate_list: function (event) {
    if (this.data.listid == event.currentTarget.dataset.id) {
      return false;
    }
    var that = this;
    var clientX = event.detail.x;
    var currentTarget = event.currentTarget;
    if (clientX < 60) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft - 60
      });
    } else if (clientX > 330) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft
      });
    }
    this.setData({
      listid: event.currentTarget.dataset.id,
      leftlist: true
    });

    this.showData();
  },

  setCateIndex: function(e) {
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      cateindex: dataset.cateindex,
      cateid: dataset.cateid,
      catecontent: dataset.catecontent,
      subcateindex: d.cateindex == dataset.cateindex ? d.subcateindex : 0
    })

  },

  setSubcateIndex: function(e) {
    const dataset = e.currentTarget.dataset;
    this.setData({
      subcateindex: dataset.subcateindex,
      subcateid: dataset.subcateid,
      showfilterindex: 0,
      timeTitle: this.data.catecontent + " ~ " + dataset.subcatecontent,
      inlist: true,
    })
    this.showData();
  },
  hideFilter: function() {
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  scrollHandle: function(e) {
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
})