Page({
  /**
  * 页面的初始数据
  */
  data: {
    items:[{
      backimg:"/images/beijing.jpg",
      img: "/images/wuqi1.jpg",
      name: "心魔剑",
      zb:"80级武器",
      type:"武器:剑",
      level:"80",
      requires:"【装备要求】",
      require:"50级剑法技巧",
      producer:"系统",
      last:"260/260",
     
     
     
    },
      {
        img: "/images/yifu1.jpg",
        name: "龙鳞战衣",
        zb:"80级铠甲",
        type: "铠甲",
        level: "80",
        producer: "系统",
        last: "260/260",
       
      },
      {
        img: "/images/yaodai1.jpg",
        name: "禅心结",
        zb: "80级腰带",
        type: "腰带",
        level: "80",
        producer: "系统",
        last: "260/260"
      }, 
      {
        img: "/images/huwan1.jpg",
        name: "幽风",
        zb: "80级护腕",
        type: "护腕",
        level: "80",
        producer: "系统",
        last: "260/260",

      }
    ]

  },


  toDetail: function (e) {
    //console.log(e);
    var index = e.currentTarget.dataset.index;
    //console.log(index);
    var items = this.data.items;
    wx.setStorageSync("ite", items[index]);
    wx.navigateTo({
      url: '/pages/dazao/dazao',
    })
  },
  base: function (s) {
    var random = 480 + Math.floor(Math.random() * ((520 - 480) + 1));
    var items = this.data.items
    }


})