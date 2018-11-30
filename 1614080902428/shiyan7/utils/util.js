const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}





// function formatTime(date) {
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()

//   var hour = date.getHours()
//   var minute = date.getMinutes()
//   var second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// function formatNumber(n) {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// var rootDocment = 'https://www.itit123.cn';
// function req(url, data, cb) {
//   wx.request({
//     url: rootDocment + url,
//     data: data,
//     method: 'post',
//     header: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     success: function (res) {
//       return typeof cb == "function" && cb(res.data)
//     },
//     fail: function () {
//       return typeof cb == "function" && cb(false)
//     }
//   })
// }

// function getReq(url, data, cb) {
//   wx.request({
//     url: rootDocment + url,
//     data: data,
//     method: 'get',
//     header: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     success: function (res) {
//       return typeof cb == "function" && cb(res.data)
//     },
//     fail: function () {
//       return typeof cb == "function" && cb(false)
//     }
//   })
// }

// // 去前后空格  
// function trim(str) {
//   return str.replace(/(^\s*)|(\s*$)/g, "");
// }

// // 提示错误信息  
// function isError(msg, that) {
//   that.setData({
//     showTopTips: true,
//     errorMsg: msg
//   })
// }

// // 清空错误信息  
// function clearError(that) {
//   that.setData({
//     showTopTips: false,
//     errorMsg: ""
//   })
// }

// module.exports = {
//   formatTime: formatTime,
//   req: req,
//   trim: trim,
//   isError: isError,
//   clearError: clearError,
//   getReq: getReq
// }  