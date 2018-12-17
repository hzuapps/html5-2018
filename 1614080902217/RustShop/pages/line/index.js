import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {

  var cookie = wx.getStorageSync("cookieKey");
  if (cookie) {
    var header = { "Content-Type": "application/x-www-form-urlencoded", 'Cookie': cookie }
  }
  else { var header = { "Content-Type": "application/x-www-form-urlencoded" } }

  var sellInfo = {
    date: [],
    income: [],
  };
  
  wx.request({
    url: 'http://www.playrust.shop/user/GetSellInfo',
    method: 'POST',
    header: header,
    
    success: function(res)
    {
      console.log(typeof (res.data))
      if (typeof (res.data) == 'string' && res.data.includes("请重新登录")) {
        wx.switchTab({
          url: '/pages/login/login',
        })
        return;
      }
      var data = res.data;
      var d1 = [];

      for (var key in data) {
        if (key == "totalPrice") continue;
        var d = [];
        d.push(key)
        d.push(data[key])
        d1.push(d)
      }
      var compare = function (arr1, arr2) {
        var day1 = new Date(Date.parse(arr1[0]));
        var day2 = new Date(Date.parse(arr2[0]));
        if (day1 > day2) return 1;
        else if (day1 < day2) return -1;
        else return 0;
      }
      d1.sort(compare);

      var date = [];
      var income = [];
      var totalIncome = 0;
      for(var i = 0 ; i < d1.length ; i++)
      date.push(d1[i][0]);
      sellInfo.date = date;

      for (var i = 0; i < d1.length; i++)
      {
        totalIncome += d1[i][1];
        income.push(d1[i][1]);
      }
      
      sellInfo.income = income;
      console.log("date: \n" + date + "income: \n" + income)


      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);

      var option = {
        title: {
          text: '周总收入: ' + totalIncome + ' 元',
          left: 'center'
        },
        color: ["#37A2DA"],
        legend: {
          data: ['日收入'],
          top: 50,
          left: 'center',
          backgroundColor: 'red',
          z: 100
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel:
          {
          interval: 0,
          rotate: -30
          },
          data: sellInfo.date,
          // show: false
        },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
          name: '日收入',
          type: 'line',
          smooth: false,
          itemStyle: { 
            normal: { 
              label: { show: true, color: 'black' },
                
            },
          },
          data: sellInfo.income
        }]
      };

      chart.setOption(option);
      return chart;


    }
  })

  
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
