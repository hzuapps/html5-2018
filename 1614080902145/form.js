
window.onload = function(){  //在页面加载之后动态事件绑定

    //找到表单元素对象并增加一个提交表单事件
    document.getElementById('loginForm').addEventListener("submit",function(e){ //e是提交事件
        console.log(e); //控制台可以打印出当前执行的事件

        //找到留言元素对象
        var liuyanObj = document.getElementById("liuyan");

        //取出它的值
        // alert(liuyanObj.value);
        if (liuyanObj.value == "") {
            alert("您还没有输入留言内容，无法发送！");
            if (e && e.preventDefault) { //现在是在W3C标准下执行
                e.preventDefault(); //阻止浏览器的动作
            }else{  //专门针对于IE浏览器的处理
                window.event.returnValue= false;
            }
        }else{//输入正确，理论上应该可以进行提交
            if(confirm("你要提交的内容是 "+messObj.value)) {
                this.submit(); //当前元素提交表单
            }
            else{
                if (e && e.preventDefault) { //现在是在W3C标准下执行
                    e.preventDefault(); //阻止浏览器的动作
                }else{  //专门针对于IE浏览器的处理
                    window.event.returnValue= false;
                    }
                }
            }
        },false);
    }
function submit () {
    return false;
}
