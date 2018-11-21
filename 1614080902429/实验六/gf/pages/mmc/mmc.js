Page({
  data: {
    array: [{
      
      text: '这是你的小鸡'
    }], 
    src: 'moshaojia.jpg'
  },
  imageError: function (e) {
    console.log( e.detail.errMsg)
  }
})