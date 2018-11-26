var app = getApp()
Page({
  data: {
    movieNu:null,
    movieInfo:null,
    line:'\n'
  },

  btnClick : function(){
    var thispage = this;
    app.getMovieInfo(this.data.movieNu,function(data){
        thispage.setData({movieInfo:data})
    });
  },

  input : function(e){
    this.setData({ movieNu:e.detail.value})
  }
})