// pages/add/add.js
var dateTimePicker = require('dateTimePicker.js');

Page({

  data: {

    date: '2018-10-01',

    dateTimeArray: null,

    dateTime: null,

    dateTimeArray1: null,

    dateTime1: null,

    startYear: 2000,

    endYear: 2050,
    weather:'正在查询请稍等。。。。',

  },
 
  onLoad() {
    
    // 获取完整的年月日 时分秒，以及默认显示的数组

    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);

    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);

    // 精确到分的处理，将数组的秒去掉

    var lastArray = obj1.dateTimeArray.pop();

    var lastTime = obj1.dateTime.pop();



    this.setData({

      dateTime: obj.dateTime,

      dateTimeArray: obj.dateTimeArray,

      dateTimeArray1: obj1.dateTimeArray,

      dateTime1: obj1.dateTime

    });

  },

  changeDate(e) {

    this.setData({ date: e.detail.value });

  },

  changeTime(e) {

    this.setData({ time: e.detail.value });

  },

  changeDateTime(e) {

    this.setData({ dateTime: e.detail.value });

  },

  changeDateTime1(e) {

    this.setData({ dateTime1: e.detail.value });

  },

  changeDateTimeColumn(e) {

    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;



    arr[e.detail.column] = e.detail.value;

    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);



    this.setData({

      dateTimeArray: dateArr,

      dateTime: arr

    });

  },

  changeDateTimeColumn1(e) {

    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;



    arr[e.detail.column] = e.detail.value;

    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);



    this.setData({

      dateTimeArray1: dateArr,

      dateTime1: arr

    });

  },
  
  iqure: function () {
  var that = this
    wx.request({

      url: 'https://www.tianqiapi.com/api/?version=v1&cityid=101280301&city=惠州&ip=119.146.68.10', //仅为示例，并非真实的接口地址

      data: {

        
     
      },

      header: {

        'content-type': 'application/json' // 默认值

      },

      success: function (res) {

       that.setData({
        weather:res.data.data,
       })

      }

    })

  }
})