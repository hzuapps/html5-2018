function processSubject(subject) {
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
}

function processSubjects(subjects) {
  var Subject;
  for (var i = 0; i <= subjects.length; i++) {
    Subject = subjects[i];
    this.processSubject(Subject);
  }
}

module.exports={
  processSubjects: processSubjects,
  processSubject: processSubject
}