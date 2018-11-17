function validateForm(){
var x=document.forms["liuyanqu"]["liuyankuan"].value;
if (x==null || x==""){
  alert("内容必须填写");
  return false;
  }
}