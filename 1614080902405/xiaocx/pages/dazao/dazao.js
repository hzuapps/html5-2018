// pages/dazao/dazao.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ite: null,
    items:
      [{
        wuqitexiao1: "[易成长]",
      
    },

    {
      wuqitexiao1: '[易成长]',

    }]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ite= wx.getStorageSync("ite");
    this.setData({ ite: ite })
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

  },
  
  title:function(){
    

},
dazao:function(){
  var ite = wx.getStorageSync("ite");
  
  app.globalData.data=ite;
  


var j
var d

  var array1 = ['敏捷 +','体质 +','力量 +','魔力 +','魅力 +'];
  var array2 = ['敏捷 +','体质 +','力量 +','魔力 +','魅力 +'];
  var sz = ['[幸运数字1]', '[幸运数字2]', '[幸运数字3]', '[幸运数字4]', '[幸运数字5]', '[幸运数字6]', '[幸运数字7]', '[幸运数字8]', '[幸运数字9]']
  var tx=[ '[必杀]', '[连击]', '[力震]', '[击退]', '[击溃]', '[击制]', '[爆破点穴]', '[流星]', '[法术暴击]', '[燃烧]', '[神智不清]', '[恐吓]',] 
  var yifu = ['[强化防御]', '[强化权威]'];
  var yaodaitexiao = ['[愤怒]','[勒紧的]'];
  var huwantexiao = ['[战斗准备]', '[攻击准备]', '[干扰准备]', '[防御准备]', '[快速准备]'];
  var teji = ['[活血术]', '[气疗术]', '[心疗术]', '[命疗术]', '[妙手回春]', '[洞察诀]', '[驱鬼诀]', '[偷袭诀]', '[刺甲诀]', '[清心咒]', '[宁心咒]', '[明镜止水]', '[返魂术]', '[续命术]', '[回心术]', '[归心术]', '[凝心术]', '[聚心术]', '[回神术]', '[归神术]', '[凝神术]', '[聚神术]', '[心神合一]', '[强化攻击]', '[弱化攻击]', '[强化防御]', '[弱化防御]', '[强化魔力]', '[弱化魔力]', '[强化魔免]', '[弱化魔免]', '[四海升平]', '[命归术]', '[气归术]', '[魅惑乾坤]', '[魔动乾坤]', '[怒斩乾坤]', '[慈航普渡]', '[破碎无双]', '[大舌头咒]','[口蜜腹剑]','[笑里藏刀]','[复苏]', '[吸魔]', '[吸血]', '[破力式]', '[破魔式]', '[破魅式]', '[破体式]', '[式无常法]', '[招无常式]', '[疯狂法连]', '[疯狂连击]', '[仁心良术]', '[流水诀]', '[停滞术]', '[讳疾忌医]'
];
  var cishu = ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)'];
  var dikang1 = ['妖术抵抗', '智术抵抗', '仙术抵抗', '念术抵抗', '鬼术抵抗']
  var dikang2 = ['妖术抵抗', '智术抵抗', '仙术抵抗', '念术抵抗', '鬼术抵抗']

  var n1 = array1[Math.floor(Math.random() * 5)] ;
  var n2 = array2[j=Math.floor(Math.random() * 5)];
  var d1 = dikang1[ Math.floor(Math.random() * 4)];
  var d2 = dikang2[d=Math.floor(Math.random() * 4)];


  if (ite.name =="心魔剑"){
    var random = 480 + Math.floor(Math.random() * ((520 - 480) + 1));
    this.setData({
      
      base: '攻击 +'+random,
    })
    var random = 20 + Math.floor(Math.random() * ((40 - 20) + 1));
    if (random % 2 == 0) {
      var random2 = 10 + Math.floor(Math.random() * ((26 - 10) + 1));
      var random3 = 10 + Math.floor(Math.random() * ((26 - 10) + 1));
      if (n2 != n1) {
        this.setData({
          attach: n1 + random2,
          a: n2 + random3,
        })

        }else
        {n2=array2[j+1],
           this.setData({
             attach: n1 + random2,
             a: n2 + random3,
           })
       }
    } else {
      this.setData({
        attach: n1+random,
        a: null,
       
      })
    }
    var shuzi= sz[ Math.floor(Math.random() * 9)];
    var texiao= tx[Math.floor(Math.random() * 12)];
    var s1= Math.floor(Math.random() * 9)
    var s2 = Math.floor(Math.random() * 9)
    var s3 = Math.floor(Math.random() * 9)
    //console.log(s1);

    if(s1==0||s2==0||s3==0){
      this.setData({
        specially1: '----------特技特效---------',
      })
    }else{
      this.setData({
        specially1: null,
      })
    }
  
    if(s1==0){
    
      this.setData({
       wuqitexiao1:'[易成长]',
      
      })
      }else{
      this.setData({
        wuqitexiao1: null,
        
      })
      
      }
    
    if (s2 == 0) {
      this.setData({
        wuqitexiao2:shuzi
      })
    } else {
      this.setData({
        wuqitexiao2: null,
       
      })
    }
 

    if (s3 == 0) {
      this.setData({
        wuqitexiao3: texiao,
      })
    } else {
      this.setData({
        wuqitexiao3: null,
      })
    }
    if (s1 == 0 && s2 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi
      })
    }

    if (s1 == 0 && s2 == 0 && s3 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    if (s1 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao1: '[易成长]',
        wuqitexiao3: ',' + texiao
      })
    }
    if (s2 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao2: shuzi,
        wuqitexiao3: ',' + texiao
      })
    }



  } 
  
  else if (ite.name =="龙鳞战衣"){
    var random = 180 + Math.floor(Math.random() * ((230 - 180) + 1));
    this.setData({

      base: '防御 +' + random,
    })
    var random = 20 + Math.floor(Math.random() * ((40 - 20) + 1));
    if (random % 2 == 0) {
      var random2 = 10 + Math.floor(Math.random() * ((22 - 10) + 1));
      var random3 = 10 + Math.floor(Math.random() * ((22 - 10) + 1));
      if (n2 != n1) {
        this.setData({
          attach: n1 + random2,
          a: n2 + random3,
        })

      } else {
        n2 = array2[j + 1],
          this.setData({
            attach: n1 + random2,
            a: n2 + random3,

          })

      }

    } else {
      this.setData({
        attach: n1 + random,
        a: null,

      })
    }
    var shuzi = sz[Math.floor(Math.random() * 9)];
    var texiao = yifu[Math.floor(Math.random() * 2)];
    var s1 = Math.floor(Math.random() * 9)
    var s2 = Math.floor(Math.random() * 9)
    var s3 = Math.floor(Math.random() * 9)
    //console.log(s1);

    if (s1 == 0 || s2 == 0 || s3 == 0) {
      this.setData({
        specially1: '----------特技特效---------',
      })
    } else {
      this.setData({
        specially1: null,
      })
    }

    if (s1 == 0) {

      this.setData({
        wuqitexiao1: '[易成长]',

      })
    } else {
      this.setData({
        wuqitexiao1: null,

      })

    }

    if (s2 == 0) {
      this.setData({
        wuqitexiao2: shuzi
      })
    } else {
      this.setData({
        wuqitexiao2: null,

      })
    }


    if (s3 == 0) {
      this.setData({
        wuqitexiao3: texiao,
      })
    } else {
      this.setData({
        wuqitexiao3: null,
      })
    }
    if (s1 == 0 && s2 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi
      })
    }

    if (s1 == 0 && s2 == 0 && s3 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    if (s1 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao1: '[易成长]',
        wuqitexiao3: ',' + texiao
      })
    }
    if (s2 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao2: shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    if (s1 == 0 && s2 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi
      })
    }

    if (s1 == 0 && s2 == 0 && s3 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    if (s1 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao1: '[易成长]',
        wuqitexiao3: ',' + texiao
      })
    }
    if (s2 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao2: shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    
  } else if (ite.name == "禅心结") {
    var random = 800 + Math.floor(Math.random() * ((1055 - 800) + 1));
    var random1 = 39 + Math.floor(Math.random() * ((41 - 39) + 1));
    this.setData({

      base: '气血 +' + random ,
      base1: '法力 +' + random1
    })
    var random = 20 + Math.floor(Math.random() * ((40 - 20) + 1));
    if (random % 2 == 0) {
      var random2 = 10 + Math.floor(Math.random() * ((22 - 10) + 1));
      var random3 = 10 + Math.floor(Math.random() * ((22 - 10) + 1));
      if (n2 != n1) {
        this.setData({
          attach: n1 + random2,
          a: n2 + random3,
        })

      } else {
        n2 = array2[j + 1],
          this.setData({
            attach: n1 + random2,
            a: n2 + random3,

          })

      }

    } else {
      this.setData({
        attach: n1 + random,
        a: null,

      })
    }
    var shuzi = sz[Math.floor(Math.random() * 9)];
    var texiao = yaodaitexiao[Math.floor(Math.random() * 2)];
    var yaodaiteji = teji[Math.floor(Math.random() * 57)];
    var alabo = cishu[Math.floor(Math.random() * 6)];
    var s1 = Math.floor(Math.random() * 9)
    var s2 = Math.floor(Math.random() * 9)
    var s3 = Math.floor(Math.random() * 9)
    var s4 = Math.floor(Math.random() * 9)
  
    //console.log(s1);

    if (s1 == 0 || s2 == 0 || s3 == 0 || s4 == 0) {
      this.setData({
        specially1: '----------特技特效---------',
      })
    } else {
      this.setData({
        specially1: null,
      })
    }

    if (s1 == 0) {

      this.setData({
        wuqitexiao1: '[易成长]',

      })
    } else {
      this.setData({
        wuqitexiao1: null,

      })

    }

    if (s2 == 0) {
      this.setData({
        wuqitexiao2: shuzi
      })
    } else {
      this.setData({
        wuqitexiao2: null,

      })
    }


    if (s3 == 0) {
      this.setData({
        wuqitexiao3: texiao,
      })
    } else {
      this.setData({
        wuqitexiao3: null,
      })
    }

    if (s4 == 0) {
      this.setData({
        wuqitexiao4: yaodaiteji,
        shuzicishu:alabo
      })
    } else {
      this.setData({
        wuqitexiao4: null,
        shuzicishu:null
      })
    }

    if (s1 == 0 && s2 == 0){
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ','+shuzi
      })
    }
  
    if (s1 == 0 && s2 == 0 && s3 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi,
         wuqitexiao3: ',' +texiao
      })
    }
    if (s1 == 0 && s3 == 0) {
      this.setData({
      
        wuqitexiao1: '[易成长]',
        wuqitexiao3: ',' + texiao
      })
    }
    if (s2 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao2:  shuzi,
        wuqitexiao3: ',' + texiao
      })
    }

   



  } else if (ite.name == "幽风") {
    var random = 55 + Math.floor(Math.random() * ((68 - 55) + 1));
    var random1 = 57 + Math.floor(Math.random() * ((96 - 57) + 1));
    var random2 = 17 + Math.floor(Math.random() * ((19 - 17) + 1));
    var s = Math.floor(Math.random() * 10)
    if(s==0||s==1||s==2||s==3||s==8||s==9){
      this.setData({
        base: '攻击 +' + random,
        base1: '防御 +' + random1,
        base2:null
      })
    }else if(s==4||s==5){
      this.setData({
        base: '攻击 +16' ,
        base1: '防御 +' + random1,
        base2: null
      })
    }else if(s==6||s==7){
      this.setData({
        base: '攻击 +16',
        base1: '防御 +' + random1,
        base2: '灵力 +' + random2
      })
    }
   
    var random = 17 + Math.floor(Math.random() * ((30 - 17) + 1));
    var s = Math.floor(Math.random() * 5)
    if (s==0) {
      var random2 = 12 + Math.floor(Math.random() * ((15 - 12) + 1));
      var random3 = 12 + Math.floor(Math.random() * ((15 - 12) + 1));
      if (d2 != d1) {
        this.setData({
          attach: n1 + random,
          a: d1 + ' +' + random2,
          a1: d2 + ' +' + random3
        })

      } else {
        d2 = dikang2[d + 1],
          this.setData({
            attach: n1 + random,
          a: d1 + ' +'+random2,
          a1: d2 + ' +'+random3

          })

      }

    } else {
      this.setData({
        attach: n1 + random,
        a: null,
        a1: null,

      })
    }
    
    var shuzi = sz[Math.floor(Math.random() * 9)];
    var texiao = huwantexiao[Math.floor(Math.random() * 5)];
    var yaodaiteji = teji[Math.floor(Math.random() * 57)];
    var alabo = cishu[Math.floor(Math.random() * 6)];
    var s1 = Math.floor(Math.random() * 9)
    var s2 = Math.floor(Math.random() * 9)
    var s3 = Math.floor(Math.random() * 9)
    var s4 = Math.floor(Math.random() * 9)

    //console.log(s1);

    if (s1 == 0 || s2 == 0 || s3 == 0 || s4 == 0) {
      this.setData({
        specially1: '----------特技特效---------',
      })
    } else {
      this.setData({
        specially1: null,
      })
    }

    if (s1 == 0) {

      this.setData({
        wuqitexiao1: '[易成长]',

      })
    } else {
      this.setData({
        wuqitexiao1: null,

      })

    }

    if (s2 == 0) {
      this.setData({
        wuqitexiao2: shuzi
      })
    } else {
      this.setData({
        wuqitexiao2: null,

      })
    }


    if (s3 == 0) {
      this.setData({
        wuqitexiao3: texiao,
      })
    } else {
      this.setData({
        wuqitexiao3: null,
      })
    }

    if (s4 == 0) {
      this.setData({
        wuqitexiao4: yaodaiteji,
        shuzicishu: alabo
      })
    } else {
      this.setData({
        wuqitexiao4: null,
        shuzicishu: null
      })
    }

    if (s1 == 0 && s2 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi
      })
    }

    if (s1 == 0 && s2 == 0 && s3 == 0) {
      this.setData({
        wuqitexiao1: '[易成长]',
        wuqitexiao2: ',' + shuzi,
        wuqitexiao3: ',' + texiao
      })
    }
    if (s1 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao1: '[易成长]',
        wuqitexiao3: ',' + texiao
      })
    }
    if (s2 == 0 && s3 == 0) {
      this.setData({

        wuqitexiao2: shuzi,
        wuqitexiao3: ',' + texiao
      })
    }





  } 


   },

   tianjia:function(e){
   
   wx.switchTab({
  url: '/pages/my/my',
})
   }
 
})


