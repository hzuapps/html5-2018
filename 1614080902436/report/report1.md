# 第1次实验
 
## 1.实验目标
* 1.在本机上安装Apache服务器（或同类工具），根目录创建 index.html，显示自己的信息；
* 2.在本机上打开Firefox浏览器，打开Web开发工具，查看自己的网页。

 
## 2.实验步骤
* 下载Apache的zip包
* 在安装Apache之前确认安装相应的VC支持库
* 在Apache24\conf\httpd.conf中查找c:/Apache24（默认路径）并全部修改为解压安装目录（注意是左斜）
* 以管理员身份运行cmd，进入Apache24\bin，执行命令
* httpd -k install -n "Apache24"（安装）（-n * "Apache24"：运行时名称）（httpd：可执行文件名可写后缀.exe）
* httpd -k uninstall -n "Apache24"（卸载）
* httpd -t（测试配置文件是否生效）
* httpd -k start -n "Apache24"(启动服务)
* httpd -k restart -n "Apache24"(重新启动服务)
* httpd -k stop -n "Apache24"(停止服务)
* 
* WIN+R 执行services.msc查看服务
 
## 3.实验结果
* 实验截图1
![实验截图1](https://github.com/310341802/html5-2018/blob/master/1614080902436/report/L1.png)


## 4.实验体会 
	安装apache挺麻烦的、配置文件、端口占用问题层出不穷,最后终于解决了!
