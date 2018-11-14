window.onload = function(){  
    document.getElementById('loginForm').addEventListener("submit",function(){
        var emailObj = document.getElementById("email");
        if (emailObj.value == "") {
            alert("您还有没有留言，无法提交");
        }else{ 
            alert(emailObj.value);
            this.submit(); 
        }
    },false);
}
function f () {
    return false;
}