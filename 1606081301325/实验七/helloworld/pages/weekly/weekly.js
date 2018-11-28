Page({
  data:{
    weeklyMovieList:[
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒",
        imagePath: "/images/_ipe2.jpg",
        isHighlyRecommended: false,
        id:1292722
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪咖蜀黍纯真灿烂的爱情估计。",
        imagePath: "/images/_ipe2.jpg",
        isHighlyRecommended: false,
        id:1295644
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/_ipe2.jpg",
        isHighlyRecommended: true,
        id: 1291841

      },
      ],
    count:123,
    score:61,
    currentIndex:0
    
  },

  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.weeklyMovieList.length - 1
    })
  },

  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId);
    wx.navigateTo({

      url: '/pages/detail/detail?id='+movieId,
    })
  }
})