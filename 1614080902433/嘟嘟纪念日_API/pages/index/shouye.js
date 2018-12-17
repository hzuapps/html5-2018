// pages/index/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorbool:false,
    already:'',
    texttemp:'',
    textbool:true,
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0, 
    textindex:0,
    nowy:0,
    nowm:0,
    nowd:0,
    blank:4,
    years: 0,
    months:0,
    days:0,
    inputvalue:'',
    hiddenmodalput:true,
    list:[],
    temp:''
  },
  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  longTap: function (e) {
    var that=this
    console.log("long tap")
    this.data.textbool=false
    wx.showModal({
      title: '提示',
      content: '是否要删除事件',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.data.list.splice(that.data.textindex-1,1)
          that.data.textbool=true
          that.setData({
            list:that.data.list
          })
          wx.removeStorage({
            key: 'text',
            success: function (res) {
              console.log("移除storage.text")
            },
          })

          wx.setStorage({
            key: 'text',
            data: that.data.list
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          that.data.textbool=true
        }
      }
    }) 
  },
  //日历的初始化
  calendar: function () {
    var time = Date.parse(new Date())
    time = time / 1000
    var n = time * 1000
    var date = new Date(n)
    var d
    switch (this.data.months) {
      case 1: d = 31; break;
      case 2:if(this.data.years%400==0||((this.data.years)%4==0&&(this.data.years%100!=0))){
        d=29
      }
      else d=28
       break;
      case 3: d = 31; break;
      case 4: d = 30; break;
      case 5: d = 31; break;
      case 6: d = 30; break;
      case 7: d = 31; break;
      case 8: d = 31; break;
      case 9: d = 30; break;
      case 10: d = 31; break;
      case 11: d = 30; break;
      case 12: d = 31; break;
    }
    this.data.days = d;
   
    var m=date.setMonth(this.data.months-1)
    var y=date.setFullYear(this.data.years)
    var b = date.getDay(1)
    if(b==0)
    {this.data.blank = 6}
    else {this.data.blank = --b}
    this.setData({
      days: this.data.days,
      blank:this.data.blank
    })
  },
  //点击年份+1事件
  addyears:function(){
    this.data.years++
    this.setData({
      years:this.data.years,
    })
    getApp().globalData.years=this.data.years
    this.calendar()
    this.changecolor();
  },
  //点击年份-1事件
  reduceyears:function(){
    this.data.years --
    this.setData({
      years:this.data.years
    })
    this.calendar()
    this.changecolor();
  },
  //点击月份-1事件
  reducemonths:function(){
    var d=this.data.months
    if(d==1){
      this.data.months=12
      this.data.years --
      this.setData({
        months:this.data.months,
        years:this.data.years
      })
    }
    else{
      this.data.months--
      this.setData({
        months:this.data.months
      })
    }
    this.calendar()
    this.changecolor();
  },
  //点击月份+1事件
  addmonths:function(){
   var m=this.data.months
   if(m==12){
     this.data.months=1
     this.data.years ++
     this.setData({
       months:this.data.months,
       years:this.data.years
     })
   }
   else{
     this.data.months ++
     this.setData({
       months:this.data.months
     })
   }
   this.calendar()
    this.changecolor();
  },
  //点击按钮事件
  jumprecord:function(e){
    var ddd=e.currentTarget.dataset.variable;
   getApp().globalData.record_y=this.data.years
   getApp().globalData.record_m=this.data.months
   getApp().globalData.record_d=ddd
   this.setData({
     hiddenmodalput:!this.data.hiddenmodalput
   })
  },
  cancel:function(){
    this.setData({
      hiddenmodalput:true
    })
  },
  confirm:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    this.data.length++
    this.setData({
      hiddenmodalput:true
    })
    
    //开始计算天数
    var sum=0
    var b=true
    var y=getApp().globalData.record_y+0
    var m=getApp().globalData.record_m
    var d=getApp().globalData.record_d
    var ddd=this.data.nowm
    var judgem=0;
    var i=0
    var t=0
    var j=0
    var tt=0
    var p=this.data.nowy-y
    if(p<0) {
      b = false
      i = this.data.nowy
      t = y
    }
    else{
      b = true
      i = y
      t = this.data.nowy
    }
    for(;i<=t;i++)
    {
      if(b){
        if(i==this.data.nowy)
        {
          tt=this.data.nowm-1
          j=m
        }
        else tt=12
      }
      else{
        if(i==this.data.nowy)
        {
          j=this.data.nowm
          tt=12
        }
        else {
          j=1
          if(i==t)
          {
            tt=m-1
          }
          else tt=12
        }
      }

      for(;j<=tt;j++)
      {
        switch(j){
          case 1: sum+= 31; break;
          case 2: if (this.data.years % 400 == 0 || ((this.data.years) % 4 == 0 && (this.data.years % 100 != 0))) {
            sum+= 29;break;
          }
          else sum+= 28;
            break;
          case 3: sum+= 31; break;
          case 4: sum+= 30; break;
          case 5: sum+= 31; break;
          case 6: sum+= 30; break;
          case 7: sum+= 31; break;
          case 8: sum+= 31; break;
          case 9: sum+= 30; break;
          case 10: sum+= 31; break;
          case 11: sum+= 30; break;
          case 12: sum += 31; break;
        }
      }
    }
    if(b)
    {
      sum = sum - d + this.data.nowd;
      if (sum < 0) {
        this.setData({
          already: '还有'
        })
        sum = -sum
      }
      else {
        this.setData({
          already: '已经过了'
        })
      }
    }
    else {
      sum = sum - this.data.nowd + d;
      if (sum < 0) {
        sum = -sum
      }
        this.setData({
          already: '还有'
        })
    }
    
    //数据的传入
    this.data.length++
    var a = [{text: this.data.temp,sum:sum,already:this.data.already,listy:y,listm:getApp().globalData.record_m,listd:d}]
    this.setData({
      list: this.data.list.concat(a)
    })
    //存储数据
    let newa=this.data.list
    wx.setStorage({
      key: 'text',
      data: newa,
    })
    
  },
  //获取input标签的数据
  textinput:function(e){
    this.setData({
      temp:e.detail.value
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  //点击记录文档事件
  clicktext:function(e){
    var idx = e.currentTarget.dataset.variable;
    this.data.texttemp=idx
    for (var i = 0; idx[i] !='．';i++){
      this.data.textindex=idx[i];
    }
    if(this.data.textbool){
      wx.showModal({
        title: '记录日期',
        content: idx,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }

      })
    }
    
  }
  ,
  onLoad: function (options) {
    //小程序开始初始化
    var now=new Date();
    var date=now.getDate;
    var time = Date.parse(new Date())
    time = time / 1000
    var n = time * 1000
    var date = new Date(n)
    var Y = date.getFullYear()
    var M = date.getMonth() + 1
    var D = date.getDate()
    this.setData({
      'yy': Y,
      'mm': M,
      'dd': D,
      years:Y,
      months:M,
      days:D,
      nowy:Y,
      nowm:M,
      nowd:D
    })
    this.calendar()
    this.data.colorbool=true
    this.setData({
      colorbool:true
    })
    var that=this
    //获取storage中的记录表数据
    wx.getStorage({
      key: 'text',
      success: function(res) {
        if(res.data){
          that.setData({
            list:res.data
          })
        }
      },
    })
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
//改变当前日子的按钮颜色
changecolor:function() {
  if(this.data.years==this.data.nowy&&this.data.months==this.data.nowm)
  {
    this.data.colorbool=true
    this.setData({
      colorbool:true
    })
  }
  else {
    this.data.colorbool=false
    this.setData({
      colorbool:false
    })
  }
}
})