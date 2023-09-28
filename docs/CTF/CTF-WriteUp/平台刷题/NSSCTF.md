
## [ZJCTF 2019]NiZhuanSiWei
```PHP
<?php  
$text = $_GET["text"];
$file = $_GET["file"];
$password = $_GET["password"];
if(isset($text)&&(file_get_contents($text,'r')==="welcome to the zjctf")){
    echo "<br><h1>".file_get_contents($text,'r')."</h1></br>";
    if(preg_match("/flag/",$file)){
        echo "Not now!";
        exit(); 
    }else{
        include($file);  //useless.php
        $password = unserialize($password);
        echo $password;
    }
}
else{
    highlight_file(__FILE__);
}
?>
```
审计源码得知text参数需要完全等于`welcome to the zjctf`直接使用伪协议input进去就好，传参file查看一下提示的php源码一个`php://filter/read=convert.iconv.utf8.utf16/resource=useless.php`
burp发包
![b6a50e46dc32f187e898480f48334021.png](en-resource://database/687:1)
首页代码审计发现对password参数进行了反序列化，且useless文件有个读取文件的类，直接构造反序列化payload即可。
![582124771c170d17c3a481ad23230e25.png](en-resource://database/689:1)

然后进行发包获取到flag。
![160b49f550ec4d010f4e8b04adf0ada8.png](en-resource://database/691:1)



### [鹤城杯 2021]EasyP
代替下划线：
绕过下划线的话可以考虑用 加号（+） 左中括号（[） 空格（ ） 点号（.）

```PHP
/index.php/utils.php/%80?show[source
```
### [鹤城杯 2021]Middle magic

![27fd84be6af574bbe05d65195e993fb3.png](en-resource://database/755:1)
