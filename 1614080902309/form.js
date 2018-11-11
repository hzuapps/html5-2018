/**
 * @author Administrator
 */
window.onload = function(){  //在页面加载之后动态事件绑定
   
   var Btn = document.getElementById("subBtn");
   var message = document.getElementById("message");
   Btn.onclick = function(){
   	var txt = message.value;
   	if(txt==""){
   		alert("留言为空，请继续输入!");
   		return f();
   	}
   	else
   		
   		

   		this.submit();
   }
   
   function f () {
    return false;
}
}
