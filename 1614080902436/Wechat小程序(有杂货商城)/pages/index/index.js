//index.js fa6361
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/swiper/s1.png',
      '../../images/swiper/s2.png',
      '../../images/swiper/s5.png'
    ],
    recommendList:[
      {
        img:"../../images/swiper/s3.png",
        title:"简约设计",
        shortDesc:"留白式设计，你想不到的美"
      },
      {
        img: "../../images/swiper/s8.png",
        title: "LOGO",
        shortDesc: "贴切生活"
      },
      {
        img: "../../images/swiper/s4.png",
        title: "暗色系",
        shortDesc: "你不知道的暗搭配"
      },
      {
        img: "../../images/swiper/s6.png",
        title: "线框系",
        shortDesc: "小小框，大作用"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    indicatorColor:'white',
    activeColor:'#F4A7B9',
    //所有图片的高度
    imgWidth: wx.getSystemInfoSync().windowWidth,
    imgHeight: wx.getSystemInfoSync().windowWidth / 1.77
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  toDetail: function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },
  bindchange: function(e)
  {
    
  }
})