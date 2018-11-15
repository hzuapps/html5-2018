document.getElementById('btn').addEventListener("click",check,false) //button点击事件处理
function check() {
      var mesobj=document.getElementById('mess');
      //判断id为mess的输入框中值是否为空
      if (mesobj.value==""){
        alert("留言不能为空!");
        if (e && e.preventDefault) { //现在是在W3C标准下执行
          e.preventDefault(); //阻止浏览器的动作
        }else{  //专门针对于IE浏览器的处理
          window.event.returnValue= false;
        }
      }else {
        document.getElementById("form_1").submit(); //表单提交
      }
}

function f() {
  return false;
}
