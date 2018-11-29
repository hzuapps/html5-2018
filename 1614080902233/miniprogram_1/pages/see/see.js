// pages/see/see.js
var util = require('../../utils/util.js');

/** * 时间格式化 */
function SimpleDateFormat(pattern) {
  var fmt = new Object();
  fmt.pattern = pattern;
  fmt.parse = function(source) {
    try {
      return new Date(source);
    } catch (e) {
      console.log("字符串 " + source + " 转时间格式失败！");
      return null;
    }
  };
  fmt.format = function(date) {
    if (typeof(date) == "undefined" || date == null || date == "") {
      return "";
    }
    try {
      date = new Date(date);
    } catch (e) {
      console.log("时间 " + date + " 格式化失败！");
      return "";
    }
    var strTime = this.pattern; //时间表达式的正则			    
    var o = {
      "M+": date.getMonth() + 1, //月份 	            
      "d+": date.getDate(), //日 	            
      "H+": date.getHours(), //小时 	        
      "m+": date.getMinutes(), //分 	         
      "s+": date.getSeconds(), //秒 	          
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度 	       
      "S": date.getMilliseconds() //毫秒 	    
    };
    if (/(y+)/.test(strTime)) {
      strTime = strTime.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(strTime)) {
        strTime = strTime.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return strTime;
  };
  return fmt;
}

Page({
  data: {
    date: '',
    now_Year: '',
    now_Month: '',
    now_Day: '',
    year: '',
    month: '',
    zhou: '',
    day: '',
    hour: '',
    min: '',
    second: '',
    hsecond: '',
    seeball:'',
    zhou_end:'',
    spring:'',
    baifenbi:''
  },
  onLoad: function(options) {
    var YEAR = util.formatYear(new Date());
    var MONTH = util.formatMonth(new Date());
    var DAY = util.formatDay(new Date());
    this.setData({
      now_Year: YEAR,
      now_Month: MONTH,
      now_Day: DAY
    });
  },
  onShow: function() {
    this.setData({
      date: wx.getStorageSync("day"),
    });
    this.data.year = this.data.date.substring(0, 4);
    this.data.month = this.data.date.substring(5, 7);
    this.data.day = this.data.date.substring(8, 10);
    var yy = parseInt(this.data.year);
    var mm = parseInt(this.data.month);
    var now_y = parseInt(this.data.now_Year);
    var now_m = parseInt(this.data.now_Month);
    //计算年份
    var sum = now_y - yy;
    this.data.year = sum.toString();
    //计算月份
    if (mm - now_m >= 0)
      sum = sum * 12 - (mm - now_m);
    else
      sum = sum * 12 - (mm - now_m);
    this.data.month = sum.toString();
    //计算日
    var sdf = new SimpleDateFormat("yyyy-MM-dd");
    var myday = null;
    myday = sdf.parse(this.data.date);
    var mine = myday.getTime();
    var nowTime = Date.now();
    var ab = (nowTime - mine) / 1000 / 60 / 60 / 24;
    sum = parseInt(ab);
    this.data.day = sum.toString();
    //计算星期
    var xq = parseInt(sum / 7);
    this.data.zhou = xq.toString();
    //计小时
    this.data.hour = (sum * 24).toString();
    //计分钟
    this.data.min = (sum * 24 * 60).toString();
    //计算秒
    this.data.second = (sum * 24 * 60 * 60).toString();
    //计算毫秒
    this.data.hsecond = (sum * 24 * 60 * 60 * 1000).toString();

    this.setData({
      year: this.data.year,
      month: this.data.month,
      day: this.data.day,
      zhou: this.data.zhou,
      hour: this.data.hour,
      min: this.data.min,
      second: this.data.second,
      hsecond: this.data.hsecond
    });
    //看世界杯和过年
    var year_1 = (77 - parseInt(this.data.year));
    this.data.spring = year_1.toString();
    this.data.seeball = parseInt(year_1/4).toString();
    //双休次数
    this.data.zhou_end = parseInt(( (77*365 + 77/4-this.data.day)/7)).toString();
    //百分比
    this.data.baifenbi = parseInt((year_1 /77)*100).toString();
    this.setData({
      spring: this.data.spring,
      seeball: this.data.seeball,
      zhou_end: this.data.zhou_end,
      baifenbi: this.data.baifenbi
    });
  },
  clear_1: function() {
    wx.clearStorage();
    this.setData({
      date: "",
    });
  },
  retext_1: function(){
    wx.clearStorage();
    this.setData({
      date: "",
    });
    wx.switchTab({
      url: "../home/home"
    });
  }
});