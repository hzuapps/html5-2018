//XHR对象建立
function creatXHR() {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  }else if (window.ActiveXObject) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xhr;
}
//自运行，保证代码在引用后立刻执行。
$(function(){
  $('#TJBtn').on('click',function(){
    var tit = $('#tit');
    if (tit.val() == "") {
      weui.alert('请输入标题');
      return;
    }
    var con = $('#con');
    if (con.val() == "") {
      weui.alert('请输入内容');
      return;
    }
    weui.confirm('是否提交', function(){
                        // ajax提交
                        var a = $.param({'tit': tit.val(), 'con': con.val()});
                        var xhr = creatXHR();
                       // console.log(xhr);
                       xhr.open('POST','#',true);
                       xhr.onreadystatechange = function () {
                          //如果提交成功
                          if (xhr.readyState == 4 && xhr.status == 200) {
                           document.getElementById('con').value = '';
                           document.getElementById('tit').value = '';
                           var rsp = document.getElementById('rsp');
                           rsp.innerHTML = "提交成功";
                           rsp.setAttribute('style', 'color: green;float: left;display: inline-block;padding: 0 5em;line-height: 2.3;font-size: 13px; !important');
                         }
                       }
                       xhr.send(a);
                     }, function(){
                      rsp.innerHTML = "提交取消";
                      rsp.setAttribute('style', 'color: red;float: left;display: inline-block;padding: 0 5em;line-height: 2.3;font-size: 13px; !important');
                    });
  });
  //实现tabbar的页面转换
  $('.weui-tabbar__item').on('click', function () {
    $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    var hrefstr = $(this).attr('href');
    $(hrefstr).addClass('weui-tab__bd-item_active').siblings('.weui-tab__bd-item_active').removeClass('weui-tab__bd-item_active');
  });
  //取消留言板
  $('#QXBtn').on('click',function() {
    var ly = document.getElementById('liuyanfrom');
    $('#liuyanfrom').css('display', 'none');
    $('#lybtndiv').css('display', 'block');
  });
  //显示留言板
  $('#lybtn').on('click',function() {
    $('#lybtndiv').css('display', 'none');
    $('#liuyanfrom').css('display', 'block');
  });
  //改变背景按钮,这里做的是随机改变背景。
  $('#bgbtn').on('click',function() {
    var bgimg = 'img/' + 'bg' + Math.floor(Math.random()*5) + '.jpg';
    var imgurl = $('.content3').css('background-image');
    var star = imgurl.indexOf('img/bg');
    var bgimg0 = imgurl.substr(star,11);
    while(bgimg === bgimg0){
      bgimg = 'img/' + 'bg' + Math.floor(Math.random()*5) + '.jpg';
    }
    $('.content3').css('background-image','url(../'+bgimg+')');
  }
  );
});