Page({

  //初始化数据

  data: {

    array: ['家中', '学校', '公司', '野外'],

    index: 0,

    date: '2018-01-01',

    time: '12:00',

    allValue: ''

  },

  //表单提交按钮

  formSubmit: function (e) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    this.setData({

      allValue: e.detail.value

    })

  },

  //表单重置按钮

  formReset: function (e) {

    console.log('form发生了reset事件，携带数据为：', e.detail.value)

    this.setData({

      allValue: ''

    })

  },

  //---------------------与选择器相关的方法

  //地区选择

  bindPickerChange: function (e) {

    console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({

      index: e.detail.value

    })

  },

  //日期选择

  bindDateChange: function (e) {

    this.setData({

      date: e.detail.value

    })

  },

  //时间选择

  bindTimeChange: function (e) {

    this.setData({

      time: e.detail.value

    })

  },



})