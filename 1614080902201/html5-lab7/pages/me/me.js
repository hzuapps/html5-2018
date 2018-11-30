Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '1',
      path: 'pages/me/me'
    }
  },

  data: {
    list: [
      {
        id: 'basic_information',
        name: '基本信息',
        open: false,
        pages: ['男', 'xx人', '1997.09出生']
      }, {
        id: 's_status',
        name: '学籍',
        open: false,
        pages: ['就读于','惠州学院', '信息科学技术学院']
      }, {
        id: 'profission',
        name: '专业',
        open: false,
        pages: ['软件工程']
      }, {
        id: 'language',
        name: '学习计算机语言',
        open: false,
        pages: ['B','C','C++','JAVA','HTML']
      }, {
        id: 'other',
        name: '其他',
        open: false,
        pages: ['可以制作一般文档', '基础ps视频制作','拥有基础数据库知识','掌握软件工程知识基本知识','精通英语，可以将使用在日常学习和工作中']
      }, {
        id: 'self_a',
        name: '自我评价',
        open: false,
        pages: ['为人沉稳不浮躁、可吃苦耐劳','工作时期希望能得到很好的锻炼']
      }, {
        id: 'exoectation',
        name: '工作期望',
        open: false,
        pages: [' 个人倾向于软件后端相关工作']
      }, {
        id: 'call_me',
        name: '联系方式',
        open: false,
        pages: ['移动电话187xxxx', '微信187xxxx', 'QQ117XXXX']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})