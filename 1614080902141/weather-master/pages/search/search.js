const Constant = require('../../common/constant.js');
const util = require('../../common/utils.js');
Page({
  data: {  //状态机数据
    inputValue: "", //输入的内容
    loading: false, //按钮加载状态
    disabled: true, //按钮是否可用
    modalHidden: true, //模态框弹出状态
    modalErrorText: "",//modal弹出提示文字
    tab: 0
  },
  tab_slide: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ tab: e.detail.current });
  },
  tab_click: function (e) {//点击tab切换
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  },

  //输入框绑定的事件
  bindKeyInput: function (e) {
    let value = e.detail.value;
    //输入框,当输入的值长度不为0的时候按钮可用
    this.setData({
      inputValue: value,
      disabled: value.length == 0
    });
  },
  //查询按钮
  search: function (e) {
    this.setData({
      loading: true,
      disabled: true
    });
    let that = this;//保留page函数中object的引用，这个地方非常重要
    //如果在下方wx.request中直接写this就变成wx.request()的this了
    //调用天气预报外部查询接口
    wx.request({
      url: Constant.WEATHER_URL, //接口url
      header: {
        "Content-Type": "application/json",
        //"apikey": Constant.API_KEY
      },
      data: {
        "city": this.data.inputValue //请求参数--城市名称
      },

      //res = {data: '开发者服务器返回的内容'}
      success: function (res) {
        console.log(res.data);//控制台输出返回的内容
        if (res.data.status === 1000) { //成功
          //跳转地址可以写相对路径,绝对路径一定要以/ 开头 这样写pages/air_quality/result是错误的
          wx.navigateTo({
            url: util.createURL2("../result/result", res.data.data),
          });
        } else {
          that.setData({ //这个位置应该用page的引用调用
            modalHidden: false,
            modalErrorText: '查询失败：' + res.data.desc
          });
        }

      },
      //失败,弹出modal
      fail: function () {
        //console.log(this); //这时候的this不是Page了
        that.setData({ //这个位置应该用page的引用调用
          modalHidden: false,
          modalErrorText: "wx.request.fail-请求失败,请检测网络！"
        })
      },
      //无论成功与失败,loading都取消
      complete: function () {
        console.log("接口请求完成")
        that.setData({
          loading: false,
          disabled: false
        })
      }
    });
  },
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  }

});