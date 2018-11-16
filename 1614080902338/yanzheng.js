function validateForm(){
var x=document.forms["liuyanqu"]["liuyankuan"].value;
if (x==null || x==""){
  alert("姓必须填写");
  return false;
  }
}