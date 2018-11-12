window.onload = function()
{  
    document.getElementById('loginForm').addEventListener("submit",function()
	{

        var emailObj = document.getElementById("message");

        // alert(emailObj.value);
        if (emailObj.value == "") 
		{
            alert("留言不能为空");
        }else
		{  
            alert(emailObj.value);
            this.submit(); 
    },false);
}
function f () {
    return false;
}