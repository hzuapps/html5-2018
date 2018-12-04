//index.js
//获取应用实例
/*const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    list01:[
      {item_id:1},{item_id:11},
    ],
    list02: [
      { item_id: 1 }, { item_id: 11 },
    ],
    list03: [
      { item_id: 1 }, { item_id: 11 },
    ],
    list04: [
      { item_id: 1 }, { item_id: 11 },
    ],
    list05: [
      { item_id: 1 }, { item_id: 11 },
    ],
    selectedFlag:[false,false,false,false,false],
  },

  changeToggle:function(e){
    var index=e.currentTarget.dataset.index;
    if(this.data.selectedFlag[index]){
      this.data.selectedFlag[index]=false;
    }else{
      this.data.selectedFalg[index]=true;
    }

    this.setData({
      selectedFlag:this.data.selectedFlag
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
*/


JS:
// pages/dome/dome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        listName:'水果',
        item: [{
          itemName: '苹果',
          content1: '鹅肉与苹果同食会腹泻',
          content2:'牛奶与苹果同食会腹泻',
          content3:'海鲜与苹果同食会腹泻',
          content4:'萝卜与苹果同食会导致甲状腺肿大',
         
        }, {
          itemName: '香蕉',
          content1: '土豆与香蕉同食会长色斑',
          content2: '红薯与香蕉同食会容易产生胃酸',
          content3: '牛奶、酸奶与香蕉同食会导致肠道不适',
          content4: '牛肉与香蕉同食会导致胃绞痛',
        }, {
          itemName: '西瓜',
          content1: '绿豆和西瓜同食会腹泻',
            content2: '羊肉和西瓜同食会伤元气',
            content3: '虾和西瓜同食会腹泻',
            content4: '山竹和西瓜同食会伤脾胃，导致腹痛、腹泻',
        
        }]
      },
      {
        listName: '蔬菜',
        item: [{
          itemName: '茄子',
          content1: '墨鱼与茄子同食容易引起霍乱',
          content2: '螃蟹与茄子同食容易损伤肠胃',
         
          
        }, {
          itemName: '西红柿',
          content1: '黄瓜与西红柿同食破坏营养成分',
            content2: '白酒与西红柿同食会感觉胸闷、气短',
            content3: '鱼肉与西红柿同食会导致腹痛、恶心、呕吐',
            content4: '咸鱼与西红柿同食会容易产生致癌物',
         
        }, {
          itemName: '西兰花',
          content1: '牛奶与西兰花同食影响钙的消化和吸收',
            content2: '动物肝脏与西兰花同食影响矿物质的吸收',
            content3: '西葫芦与西兰花同食会分解维生素C',
            content4: '虾仁与西兰花同食影响钙和蛋白质的吸收',
          
        }]
      }, {
        listName: '肉类',
        item: [{
          itemName: '牛肉',
          content1: '豆酱和牛肉同食会伤五脏',
          content2: '猪肉和牛肉同食会温寒相抵',
          content3: '田螺和牛肉同食会中毒',
          content4: '红糖和牛肉同食会胀肚子',
          
        }, {
          itemName: '羊肉',
          content1: '竹笋和羊肉同食会导致腹痛，中毒',
            content2: '醋和羊肉同食会使羊肉的温补作用大打折扣',
            content3: '茶和羊肉同食会导致便秘',
            content4: '红豆和羊肉同食会导致中毒',
          
        }, {
          itemName: '猪肉',
          content1: '田螺与猪肉同食伤肝胃',
            content2: '豆类与猪肉同食影响蛋白质吸收',
            content3: '百合与猪肉同食会引起便秘',
            content4: '黄连与猪肉同食会引起腹泻',
          
        }]
      },{
        listName: '海鲜',
        item: [{
          itemName: '虾',
          content1: '含维生素C的水果如橙子等与虾同食会中毒',
          content2: '山楂与虾同食导致呕吐、头晕、恶心和腹痛腹泻',
          content3: '葡萄、石榴与虾同食导致呕吐、头晕和腹痛腹泻',
          content4: '柿子与虾同食导致呕吐、头晕、恶心和腹痛腹泻',

        }, {
          itemName: '螃蟹',
          content1: '茶水和螃蟹同食会导致胃肠道不适',
          content2: '梨和螃蟹同食会导致消化不良',
          content3: '羊肉和螃蟹同食会导致脾胃功能失常',
          content4: '南瓜和螃蟹同食会引起中毒',

        }, {
          itemName: '鱼类',
          content1: '鲫鱼与猪肉同食影响身体健康',
          content2: '鲫鱼与蜂蜜同食容易引起中毒',
          content3: '鲫鱼与冬瓜同食容易引起身体脱水',
          content4: '鲤鱼与甘草、南瓜同食会导致中毒',

        }]
      }, {
        listName: '饮品',
        item: [{
          itemName: '可乐',
          content1: '薄荷糖与可乐同食会导致胃部受伤，还容易伤害气管和食道',
          content2: '感冒药与可乐同食产生有毒物质，轻则精神恍惚，食欲不振，重则丧命',
          content3: '味精与可乐同食会导致心悸、心跳加速，损伤身体',
          content4: '牛奶与可乐同食增加肠胃负担，容易出现胃石',

        }, {
          itemName: '蜂蜜',
          content1: '豆腐与蜂蜜同食会导致耳鸣',
          content2: '莴苣与蜂蜜同食会导致腹泻',
          content3: '洋葱与蜂蜜同食会伤害眼睛，严重的会导致失明',
          content4: '大米与蜂蜜同食对胃伤害很大',

        }, {
          itemName: '咖啡',
          content1: '酒和咖啡同食容易引发心脏病',
          content2: '茶与咖啡同食影响铁的吸收',
          content3: '香烟与咖啡同食产生致癌物',
          content4: '黑木耳与咖啡同食影响铁的吸收',

        }]
      }
    ]
  },
  //点击最外层列表展开收起
  listTap(e) {
    console.log('触发了最外层');
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
      list = this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show) {//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list, Index);
    }

    this.setData({
      list
    });
  },
  //点击里面的子列表展开收起
  listItemTap(e) {
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
      Index = e.currentTarget.dataset.index,//点击的内层下标
      list = this.data.list;
    console.log(list[parentindex].item, Index);
    list[parentindex].item[Index].show = !list[parentindex].item[Index].show || false;//变换其打开、关闭的状态
    if (list[parentindex].item[Index].show) {//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
      for (let i = 0, len = list[parentindex].item.length; i < len; i++) {
        if (i != Index) {
          list[parentindex].item[i].show = false;
        }

      }
    }
    this.setData({ list });
  },
  //让所有的展开项，都变为收起
  packUp(data, index) {
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if (index != i) {
        data[i].show = false;
        for (let j = 0; j < data[i].item.length; j++) {//其他所有内层也为关闭状态
          data[i].item[j].show = false;
        }
      }
    }
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
