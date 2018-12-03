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
    var subject1 = e.detail.value.subject1; //家教科目
    var sex1 = e.detail.value.sex1; //性别
    var grade1 = e.detail.value.grade1; //年级
    var experience = e.detail.value.experience; //学生程度介绍
    console.log(subject1)
    console.log(sex1)
    console.log(grade1)
    console.log(experience)

  }
})