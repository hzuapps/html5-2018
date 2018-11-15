// JavaScript Document
window.onload=function()
{
	var oBtn=document.getElementById("btn");
	oBtn.onclick=function()
	{
		var oValue=document.getElementById("txt");
		if(oValue.value=="")
		{
			alert("你还没有输入留言，请重新输入!");
			return false;
		}else{
			alert("留言成功,你的留言是："+oValue.value);
			return true;
		}
	}
}