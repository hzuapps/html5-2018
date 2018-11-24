function getLocation(callback) {
  wx.getLocation({
    type: 'gcj02',
    success: function (res) {
      callback(true, res.latitude, res.longitude);
    },
    fail: function () {
      callback(false);
    }
  })
}
function getWeather(latitude, longitude, callback) {
  var ak = "puxDAr5T62NaqdDRLp3KFPy0tkyG1CLl";
  var url = "https://api.map.baidu.com/telematics/v3/weather?location=" + longitude + "," + latitude + "&output=json&ak=" + ak;
  wx.request({
    url: url,
    success: function (res) {
      console.log(res);
      callback(res.data);
    }
  });
} function loadWeatherData(callback) {
  getLocation(function (success, latitude, longitude) {
    getWeather(latitude, longitude, function (weatherData) {
      callback(weatherData);
    });
  });
} module.exports = {
  loadWeatherData: loadWeatherData
}