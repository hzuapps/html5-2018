Page({
  data: {
    //主要污染物有可能没有,默认值无
    progress_txt: '',
    count: 0, // 设置 计数器 初始为0
    countTimer: null, // 设置 定时器 初始为null
    aqi_percent: 1,
    district: ""
  },
  onLoad: function(options) {
    if (options.pm) {
      var item = JSON.parse(options.pm)
      var siteList = JSON.parse(options.siteList)
      var district = options.district
      item.status = this.cal(item)
      console.log(item.status+"test")

      for (var i = 0; i < siteList.length; i++) {
        var site = siteList[i];
        site.siteStatus = this.cal(site);
      }
      this.setData({
        item,
        siteList,
        district
      })

    }
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },

  color(percent) {
    var status
    if (percent < 20)
      status = "good";
    else if (percent < 40)
      status = "normal";
    else if (percent < 60)
      status = "medium"
    else
      status = "wrong"
    return status
  },


  drawProgressbg: function() {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(10); // 设置圆环的宽度
    ctx.setStrokeStyle('#d3d3d3'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },

  drawCircle: function(step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#ffffff");
    gradient.addColorStop("0.5", "#ffffff");
    gradient.addColorStop("1.0", "#ffffff");

    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },

  countInterval: function() {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    this.countTimer = setInterval(() => {
      if (this.data.count <= 60 * this.data.item.status.aqi_percent / 100) {
        /* 绘制彩色圆环进度条  
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (60 / 2))
        this.data.count++;
      } else {
        this.setData({});
        clearInterval(this.countTimer);
      }
    }, 100)
  },
  onReady: function() {
    this.drawProgressbg();
    // this.drawCircle(2) 
    this.countInterval()
  },
  chargeBg(status) {
    var bg
    if (status === "good")
      bg = "#66CC00"
    else if (status === "normal")
      bg = "#2db7f5"
    else if (status === "medium")
      bg = "#ff9900"
    else
      bg = "#ed3f14"
    return bg
  },
  cal(item) {
    var status = new Map();
    status.pm2_5_percent = (item.pm2_5 / 250.0 * 100).toFixed(2);
    status.pm2_5_status = this.color(status.pm2_5_percent)
    status.pm10_percent = (item.pm10 / 500.0 * 100).toFixed(2);
    status.pm10_status = this.color(status.pm10_percent)
    status.co_percent = (item.co / 90.0 * 100).toFixed(2);
    status.co_status = this.color(status.co_percent)
    status.o3_percent = (item.o3 / 800.0 * 100).toFixed(2);
    status.o3_status = this.color(status.o3_percent)
    status.no2_percent = (item.no2 / 2500.0 * 100).toFixed(2);
    status.no2_status = this.color(status.no2_percent)
    status.so2_percent = (item.so2 / 800.0 * 100).toFixed(2);
    status.so2_status = this.color(status.so2_percent)
    status.aqi_percent = (item.aqi / 300.0 * 100).toFixed(2);
    status.aqi_status = this.color(status.aqi_percent)
    console.log(status.aqi_status+"test")
    status.bg = this.chargeBg(status.aqi_status)

    console.log(status.bg + "test2")
    return status
  },
  detail() {
    wx.navigateTo({
      url: "../detail/detal?siteList=" + JSON.stringify(this.data.siteList)
    });
  }

})