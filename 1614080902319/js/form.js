window.onload = function(){  //在页面加载之后动态事件绑定

    //找到表单元素对象并增加一个提交表单事件
    document.getElementById('subForm').addEventListener("submit",function(){
        //找到邮件元素对象
        var messageObj = document.getElementById("message");
        //取出它的值
        var $iosDialog2 = $('#iosDialog2');
        // alert(emailObj.value);
        if (messageObj.value == "") {
            $('#dialogs').on('click', '.weui-dialog__btn', function(){
                $(this).parents('.js_dialog').fadeOut(200);
            });
            $iosDialog2.fadeIn(200);
            //alert("您还有输入登录邮箱，无法登录！");
        }else{  //输入正确，理论上应该可以进行提交
            //alert(messageObj.value);
            this.submit(); //当前元素提交表单
        }
    },false);
}
function f () {
    return false;
}