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
![实验截图1]()

## 4.实验体会 
* 由于以前装过所以还好，个人比较喜欢Firefox浏览器所以没装Chrome，兼容性暂时不考虑，IE6是个神奇的浏览器。较喜欢使用zip包之类的，可控性极佳，配置起来很舒服。这东西需要VC支持包，好像是C++写的，官网有二进制的源码要自己编译好麻烦，所以用了第三方的。

## 5.番外
* Visual C++软件包

* VC9包（Visual C++ 2008 SP1）

微软Visual C++ 2008 SP1 Redistributable Package（x86）
http://www.microsoft.com/en-us/download/details.aspx？ID＝5582’>
微软Visual C++ 2008 SP1 Redistributable Package（x64）
http://www.microsoft.com/en-us/download/details.aspx？ID = 2092

* VC10包（Visual C++ 2010 SP1）

微软Visual C++ 2010 SP1 Redistributable Package（x86）
http://www.microsoft.com/en-us/download/details.aspx？ID = 8328
微软Visual C++ 2010 SP1 Redistributable Package（x64）
http://www.microsoft.com/en-us/download/details.aspx？ID = 13523

* VC11包（Visual C++ 2012更新4）

两个文件vsu4 \\ vcredist_x86.exe和vsu4 \\ vcredist_x64.exe被下载都在同一页上：
Visual C++重新发布的Visual Studio 2012更新4
http://www.microsoft.com/en-us/download/details.aspx？ID = 30679

* VC13重新更新5

两个文件vsu4 \ vcredist_x86.exe和vsu4 \ vcredist_x64.exe被下载都在同一页上：
https://support.microsoft.com/en-us/help/4032938/

* vc14包（Visual C++ 2015）取代vc15

* vc15 可再发行版本（Visual C++ 2017）

https://aka.ms/vs/15/release/vc_redist.x86.exe
https://aka.ms/vs/15/release/vc_redist.x64.exe
vc2017（vc15）是向后兼容的vc2015（vc14）。这意味着，一个vc14模块可以在一vc15二进制应用。因为这种兼容性的可再发行的版本号为14.1x.xx你安装可再发行vc2017后，vc2015移除，但你仍然可以使用vc14。
