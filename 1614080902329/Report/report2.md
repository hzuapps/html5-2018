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
        <td colspan="3" class="content-title">基本资料></td>
    </tr>
    <tr>
        <td>姓名：李大哥</td>
        <td>学历：本科</td>
        <td rowspan="5" class="content-pic">
            <img src="img/pic.jpg">
        </td>
    </tr>
    <tr>
        <td>性别：男</td>
        <td>出生日期：1997年</td>
    </tr>
    <tr>
        <td>民族：汉族</td>
        <td>地址：惠州博罗</td>
    </tr>
    <tr>
        <td>QQ：19431</td>
        <td>毕业学校：惠州学院</td>
    </tr>
    <tr>
        <td>联系电话：17727218888</td>
        <td>电子邮件：19431</td>
    </tr>

    <tr >
        <td colspan="3" class="content-title bor-top">教育经历></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="5">
            乔布科技大学（985） 理学院<br/>
            热能与动力工程 硕士学位<br/>
            乔布科技大学（985） 理学院<br/>
            生物质 学士学位<br/>
            大学英语六级CET-6（通过），阅读英文文献无障碍<br/>
        </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>

    <tr >
        <td colspan="3" class="content-title bor-top">荣誉奖励></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="4">
            2016年获得乔布大学优秀学生二等奖学金<br/>
            2017年乔布大学优秀毕业生<br/>
            2018年乔布市理工科人文知识竞赛（优胜奖）<br/>
        </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>

    <tr >
        <td colspan="3" class="content-title bor-top">社会经历></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="3">
            乔布冷机股份有限公司（设备测试员）2016-2017<br/>
            乔布大学魔术社（干事（魔术指导））2017-2018
        </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>

    <td colspan="3" class="content-title bor-top">特长爱好></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="2">
            骑行，登山<br/>
            爱好体育运动，游泳、篮球
        </td>
    </tr>
    <tr>
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
    font: bold 20px/1.5em verdana;
}
td {
    padding-left: 2em;
    height: 2em;
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
.bor-top {
    border-top: 1px dashed #050505;
}
```

## 3.实验结果
* 实验截图1
![实验截图]()
* 实验截图2
![实验截图]()

## 4.实验体会 

* 收获非常多，这是很神奇的语言，用起来及其舒适，学会了表格的合并和超链接的使用，懂得了什么是网页。