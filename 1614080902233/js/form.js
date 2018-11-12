window.onload = function(){  //在页面加载之后动态事件绑定
    //找到表单元素对象并增加一个提交表单事件
    document.getElementById('liuyanForm').addEventListener("submit",function(){
    //找到邮件元素对象
    var liuyanObj = document.getElementById("liuyan");
    //取出它的值
                if (liuyanObj.value == "") {
                    alert("您还有输入！");
                    if (e && e.preventDefault) { //现在是在W3C标准下执行
                        e.preventDefault(); //阻止浏览器的动作
                    }else{  //专门针对于IE浏览器的处理
                        window.event.returnValue= false;
                    }
                }else{  //输入正确，理论上应该可以进行提交
                    alert("提交留言："+liuyanObj.value+"  成功！");
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
function color_Change(){
            for (i=0;i<4; i++) {
               if(from1.color[i].checked){
                document.body.style.background=from1.color[i].value;
               }
            }
        }