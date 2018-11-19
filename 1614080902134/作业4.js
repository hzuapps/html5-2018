$(document).ready(function(){
    $("#btn1").click(function(){
        $("body").css("background-color","rgb(119, 189, 93)");
    });
    $("#btn2").click(function(){
        $("body").css("background-color","rgb(93,187,189)");
    });
    $("#put2").click(function () {
        if($("#put1".valueOf()=="")){
            alert("提交内容不能为空！");
        }
    })
});