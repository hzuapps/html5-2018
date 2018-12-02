// pages/in_publish/in_publish.js
Page({

  /**
  * 页面的初始数据
  */
  data: {

  },


  //确认按钮把数据上传后台
  back_houtai: function (e) {
    var that = this;
    var subject = e.detail.value.subject; //家教科目
    var sex = e.detail.value.sex; //性别
    var grade = e.detail.value.grade; //年级
    var degree = e.detail.value.degree; //学生程度介绍
    console.log(subject)
    console.log(sex)
    console.log(grade)
    console.log(degree)

  }
})