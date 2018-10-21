# 第2次实验
 
## 1.实验目标
* 制作一个HTML5个人简历网页，具体要求如下：
* 使用HTML5语法
* 使用table设计布局
* 使用img添加个人照片
* 使用form制作一个留言表单
* 使用a指向自己的GitHub主页  

## 2.实验步骤
* 1.使用table设计布局和使用img添加个人照片
``` html
<table cellspacing="0">
    <caption>个人简历</caption>
    <tr >
        <td colspan="3" class="content-title">基本资料</td>
    </tr>
    <tr>
        <td>姓名：李</td>
        <td>学历：高</td>
        <td rowspan="5" class="content-pic">
            <img src="img/pic.jpg">
        </td>
    </tr>
    <tr>
        <td>性别：男</td>
        <td>出生日期：天知道</td>
    </tr>
    <tr>
        <td>民族：战斗民族</td>
        <td>地址：M78星云光之国</td>
    </tr>
    <tr>
        <td>QQ：忘了</td>
        <td>毕业学校：惠州学院</td>
    </tr>
    <tr>
        <td>联系电话：不接受</td>
        <td>电子邮件：电波无法到达~</td>
    </tr>
</table>
```

* 2.使用form制作一个留言表单
``` html
<form id="com" action="#" method="get">
    <label for="content-com">留言</label>
    <textarea id="content-com" rows="3" cols="50" name="comment" form="com" placeholder="请在此留言"></textarea>
    <button type="submit">提交</button>
</form>
```

* 3.使用a指向自己的GitHub主页 
``` html
<a href="https://github.com/OrangeHap/html5-2018">My GitHub</a>
```

* 4.CSS样式表
``` CSS
table {
    margin: auto;
    margin-top: 50px;
    width: 800px;
    border:1px solid #050505;
}
table caption {
    font: bold 50px/1.5em arial,verdana;
    padding-bottom: 30px;
}
tbody {
    text-indent: 2em;
    font: bold 20px/1.5em verdana;
}
td {
    height: 50px;
}
.content-title {
    border-bottom: 1px dashed #050505;
}
.content-pic {
    width: 30%;
    border-left: 1px dashed #050505;
}
img {
    height: 230px;
}
form {
    width: 60%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
label,a {
    text-align: center;
}
label,textarea,button,a {
    margin: auto;
    display: block;
}
button:hover {
    background-color: #6e6e6e;
}
button {
    margin-top: 8px;
    border:0px;
    background-color: #8e8e8e;
    color: snow;
    font: bold 14px/1em verdana;
    width: 5em;
    height: 2.5em;
    border-radius: 10px;
}
a:hover {
    color: #6e6e6e;
}
a {
    width: 8em;
    text-decoration: none;
    font-size: 16px;
}
```

## 3.实验结果
* 实验截图
![实验截图](https://github.com/OrangeHap/html5-2018/blob/master/1614080902329/Report/img/lab2_1.jpg)

## 4.实验体会 

* 收获非常多，这是很神奇的语言，用起来及其舒适，学会了表格的合并和超链接的使用，懂得了什么是网页。