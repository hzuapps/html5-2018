window.onload = function(){  //在页面加载之后动态事件绑定

    //找到表单元素对象并增加一个提交表单事件
    document.getElementById('showTooltips').addEventListener("submit",function(){
        //找到邮件元素对象
        var emailObj = document.getElementById("Input");
        //取出它的值
        // alert(emailObj.value);
        if (emailObj.value == "") {
            alert("您输入的内容为空，无法提交！");
        }else{  //输入正确，理论上应该可以进行提交
            alert(emailObj.value);
            this.submit(); //当前元素提交表单
        }
    },false);
}
function f () {
    return false;
}
