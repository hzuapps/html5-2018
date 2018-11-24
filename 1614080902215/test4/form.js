window.onload = function(){  //在页面加载之后动态事件绑定
    //找到表单元素对象并增加一个提交表单事件
    document.getElementById('leaveMessage').addEventListener("submit",function(){
    //找到邮件元素对象
    var messageObj = document.getElementById("message");
    //取出它的值
                if (messageObj.value == "") {
                    alert("您未输入任何信息，无法留言！");
                    if (e && e.preventDefault) { //现在是在W3C标准下执行
                        e.preventDefault(); //阻止浏览器的动作
                    }else{  //专门针对于IE浏览器的处理
                        window.event.returnValue= false;
                    }
                }else{  //输入正确，理论上应该可以进行提交
                    alert("已留言："+'\"'+messageObj.value+'\"'+"\n\n感谢您的留言，祝您愉快！");
                    this.submit(); //当前元素提交表单
                    if (e && e.preventDefault) { //现在是在W3C标准下执行
                        e.preventDefault(); //阻止浏览器的动作
                    }else{  //专门针对于IE浏览器的处理
                        window.event.returnValue= false;
                    }
                }
            },false);
}
function f () {
    return false;
}
