//index.js
//获取应用实例
const app = getApp()

Page({
  /**数据 */
  data: {
    imgUrls: [
      'https://i.imgur.com/uqMbPPz.jpg',
      'https://i.imgur.com/NhmgcKl.jpg',
      'https://i.imgur.com/7C1kjBJ.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        title: 'My Dear Melancholy',
        shortDesc: '时隔两年,The Weeknd以全新EP《My Dear Melancholy》惊喜回归，收录6首曲目，其包括主打曲“Call Out My Name”',
        createTime:" 2018-03-30 ",
        Publisher:" The Weeknd XO, Inc. ",
        num:"6首",
        vid: 'k0026cw5jgy',
        img: '/images/pro_01.jpg',
        introduce: "The Weeknd's 2016 album, Starboy, was the musical equivalent of a Hollywood blockbuster: action-packed, star-studded, with a little something for everyone.Here, he returns to his unfiltered, art-house roots with a release so intimate and tortured, you'll feel like a fly on his bedroom wall. Stuttering snares, gauzy production, and R-rated lyrics about sex and drugs (\"I got two red pills to take the blues away,\" he coos through a vocoder on \"Privilege\") paint a vivid picture of a brooding Lothario—one that strongly resembles the dark artist we initially met on House of Balloons. This time around, he's tapped gothic electro king Gesaffelstein, who has also produced for Kanye West, to bring a sheen to the shadows with neon synths and fuzzy echoes that lift his signature anguish into new emotional heights"
      },
      {
      title:'Starboy',
        shortDesc: '《Starboy》是加拿大歌手威肯第三张录音室专辑、专辑的制作人包括Daft Punk、Martin McKinney等人',
        createTime: "2016-9-22",
        Publisher: " The Weeknd XO, Inc. ",
        num: "18",
        vid:'k0026cw5jgy',
      img:'/images/pro_03.jpg',
        introduce:'《Starboy》的制作由威肯、蠢朋克乐队、马丁·麦金尼、亨利·瓦尔特共同完成，创作灵感来源于威肯作为一个名人的生活方式，以及讨论为何一个名人的生活方式可以使一个艺人的变得厌倦生活 。威肯认为自己很爱他的前女友，但女友不爱他，最终分手。无论威肯做了什么方式来挽回女友，都是徒劳，于是写下了这首歌曲作为给前女友的分手歌曲,《Starboy》有明显的舞曲风格和威肯的个人风格，同时更多的电子乐元素融入了其中，使其风格与威肯之前的作品略有不同 [8-9]  ，在保持超高的迈克尔·杰克逊式的唱功的基础上，更加具备“攻击性”和“煽动性”，是威肯在其职业发展中的转型',
    },

      {
        title: 'Beauty Behind the Madness',
        shortDesc: '《Beauty Behind the Madness》是威肯于2015年8月28日发行的录音室专辑。歌Lebrinth，Ed Sheeran等人助阵。',
        createTime: " 2015-8-28 ",
        Publisher: " The Weeknd XO, Inc. ",
        num: "14",
        vid: 'k0026cw5jgy',
        img: '/images/pro_02.jpg',
        introduce: 'Beauty Behind the Madness is the upcoming second studio album by Canadian recording artist The Weeknd, scheduled to be released on August 28, 2015 by XO and Republic Records. ',
      },
    ]
  },
/**页面加载阶段 */
  onLoad: function () {
    this.setData({
      test: '01',
    })
    //this.getProList();
  },
  /**
  getProList: function () {
    var self = this;
    wx.request({
      url: app.globalData.host,
      method: 'GET',
      success: function (res) {
        console.log(res);
        self.setData({
          proList: res.data,
        })
      },
      fail: function () {
          console.log("error");
      }
    })
  }, */
  
  /**到达详情页面 */
  toDetail: function (e) {
     console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    //var title = proList[index].title;
    wx.setStorageSync("pro", proList[index]);
    //wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**复制 */
  copy: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: 'My favorite singer is The Weeknd!!!',
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功！',
          })
        }
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级',
      })
    }
  },

  /**电话 */
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15217848368',
    })
  },

   /**
  * 搜索执行按钮
  */
  query: function (event) {

    var that = this

    /**
     * 提问帖子搜索API
     * keyword string 搜索关键词 ; 这里是 this.data.inputValue
     * start int 分页起始值 ; 这里是 0
     */
    wx.request({
      url: 'https://localhost/proj_online_class/server/public/index.php/forum/forum/get_issue_search/' + this.data.inputValue + /0/,
      data: {
        inputValue: this.data.inputValue
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var searchData = res.data
        that.setData({
          searchData
        })

        /**
         * 把 从get_issue_searchAPI 
         * 获取 提问帖子搜索 的数据 设置缓存
         */
        wx.setStorage({
          key: 'searchLists',
          data: {
            searchLists: res.data
          }
        })

        /**
         * 设置 模糊搜索
         */
        if (!that.data.inputValue) {
          //没有搜索词 友情提示
          wx.showToast({
            title: '请重新输入',
            image: '../../picture/tear.png',
            duration: 2000,
          })
        } else if (searchData.search.length == 0) {
          //搜索词不存在 友情提示
          wx.showToast({
            title: '关键词不存在',
            image: '../../picture/tear.png',
            duration: 2000,
          })
        } else {
          //提取题目关键字 与搜索词进行匹配
          var searchIndex = searchData.search.length
          var d = 0;
          for (var i = 0; i <= searchIndex - 1; i++) {

            var searchTitle = searchData.search[d].title
            console.log(searchTitle)
            d = d + 1;

            for (var x = 0; x <= searchTitle.length; x++) {
              for (var y = 0; y <= searchTitle.length; y++) {
                var keyWord = searchTitle.substring(x, y);
                console.log(keyWord)
              }
            }

            /**
             * 根据关键词 跳转到 search搜索页面
             */
            wx.navigateTo({
              url: '../search/search',
            })
          }
        }



      }
    })
  }
  
  
})