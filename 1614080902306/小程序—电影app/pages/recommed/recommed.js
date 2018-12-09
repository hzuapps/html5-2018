Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    hiddenLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadmovie();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  processSubject: function (subject) {
    var title = subject.title;

    var director = "";
    var directors = subject.directors;
    for (var index in directors) {
      director = directors[index].name + "/" + director;
    }
    if (director != "") {
      director = director.substring(0, director.length - 1);
    }

    var genres = subject.genres;
    var genre = "";
    for (var index in genres) {
      genre = genres[index] + "/" + genre;
    }
    if (genre != "") {
      genre = genre.substring(0, genre.length - 1);
    }

    var casts = subject.casts;
    var cast = "";
    for (var index in casts) {
      cast = casts[index].name + "/" + cast;
    }
    if (cast != "") {
      cast = cast.substring(0, cast.length - 1);
    }
    var year = subject.year;
    var text = "名称:" + title + "\n导演:" + director + "\n主演:" + cast + "\n类型:" + genre + "\n上映日期:" + year + "\n";
    subject.text = text;
  },
  processSubjects: function (subjects) {
    var Subject;
    for (var i = 0; i <= subjects.length; i++) {
      Subject = subjects[i];
      this.processSubject(Subject);
    }
  },
  loadmovie: function () {
    var page = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        page.processSubjects(subjects);
        page.setData({ movies: subjects, hiddenLoading: true });
      }
    })
  }

})