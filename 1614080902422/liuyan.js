window.onload = function(){  
   
  document.getElementById('message').addEventListener("submit",function(e){
    console.log(e); 
  
    var messObj = document.getElementById("send2");

   
    if (messObj.value == "") {
      alert("您还没有输入留言内容！");
      if (e && e.preventDefault) { 
        e.preventDefault(); 
      }else{  
        window.event.returnValue= false;
      }
    }else{  
      if(confirm("你要提交的留言是 "+messObj.value)) {
        this.submit(); 
      }
      else{
        if (e && e.preventDefault) { 
          e.preventDefault(); 
        }else{  
          window.event.returnValue= false;
        }
      }
    }
  },false);
}
function submit() {
  return false;
} 
