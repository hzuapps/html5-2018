# 第3次实验
 
## 1.实验目标
* 掌握CSS的用法及基础语法；
* 掌握WeUI等第三方CSS库的使用

## 2.实验步骤
* 1.导入weui.css进项目
``` html
    <link rel="stylesheet" href="./css/weui.css"/>
```
* 1.自定义样式，使第三方库满足更多的需求
``` html
    <link rel="stylesheet" href="./css/lab3-css.css"/>
```
``` css
    .text-center {
        text-align: center;
    }
    .weui-cells {
        margin-top: 0px;
    }
    .weui-cells__title {
        color: #999999;
    }
    .page {
        background-color: #F8F8F8;
    }
```
* 3.选择需要的UI获取其CSS选择器加入自己的代码中

## 3.实验结果
* 实验截图1
![实验截图]()
* 实验截图2
![实验截图]()

## 4.实验体会 

* 通过第三方的库可以大大的减少代码的书写，并且获得较好的样式，是开发必不可少的手段之一。再者有声望的第三方库的质量往往得到了大家的检验，这对测试方面也省了许多功夫。