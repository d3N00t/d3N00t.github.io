# CTFd平台部署
# 介绍

 1. CTFd最新版(3.5.3)和[ctf-whale](https://github.com/glzjin/CTFd-Whale)最新版和[0xdevsachin](https://github.com/0xdevsachin/)大佬的[CTFD-crimson-theme](https://github.com/0xdevsachin/CTFD-crimson-theme)主题
 2. 赵师傅的ctf-whale和最新版ctfd不兼容，这个教程做了适配兼容(其实就是pip多装几个模块)。
 3. 鸡督🍌首页是我自己改的。
 4. 操作系统:Ubuntu 22.04.2 LTS 默认安装版（非mini）  其他系统也行，不过最好是Ubuntu，其他系统可能会遇到玄学问题。
 

<iframe src="//player.bilibili.com/player.html?aid=532539291&bvid=BV1qu41177h1&cid=1243853483&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="800" height="450"> </iframe>

## 预览图

![首页](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image.png)

![Challenges](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-1.png)

![后台](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-2.png)

![whale配置](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-3.png)

## 开始部署

**全程在root用户下执行**

### 环境准备

更换国内源

```shell
vi /etc/apt/sources.list
```

```text
#添加腾讯云源
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security multiverse
```

**更新源**

```shell
apt-get -y update
```

**更新软件，必须更新，不然会出现很多未知问题**

```shell
apt-get upgrade -y
```

## 安装Docker&docker-compose

### Docker安装

```shell
apt-get purge libcurl4 -y
apt install curl -y
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

![Docker安装](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-5.png)

###  docker-compose安装

```shell
有pip3的就不需要安装了。
wget https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py

pip3 install docker-compose -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 配置Docker集群的模式

由于赵师傅的插件使用的是集群的模式，所以这里要创建一个单服务器集群。

```shell
docker swarm init
```

然后将这个服务器加入集群。

```shell
docker node ls
docker node update --label-add name=linux-1 <节点 ID>
docker node ls
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-6.png)

### Docker更换镜像源

由于镜像服务可能出现宕机，建议同时配置多个镜像。这里一定要保证该文件符合 json 规范，否则 Docker 将不能启动。

```shell
apt-get purge vim-common -y
apt install vim -y
vim /etc/docker/daemon.json
```

```text
{
  "registry-mirrors": ["https://im6noja9.mirror.aliyuncs.com"]
}
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-7.png)
重新启动服务

```text
systemctl daemon-reload && systemctl restart docker
```

## 安装CTFd

### 方法一：原始代码安装

```shell
git clone https://github.com/CTFd/CTFd.git
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-8.png)

**配置frp**

```shell
git clone https://github.com/d3N00t/ctfd_frp.git
cp -r ctfd_frp/frpc/ CTFd/
cp -r ctfd_frp/frps/ CTFd/
#如果需要使用到域名，编辑一下ctfd_frp/frpc/frpc.ini即可。
```

**安装动态flag插件**

```SHELL
cd /root/CTFd/CTFd/plugins/
git clone https://github.com/d3N00t/ctfd-whale.git ctfd-whale

ctfd-whale原版不适配我这个教程，做了一下修改，修改的地方比较多，建议直接用我这个。
rm -rf dynamic_challenges
git clone https://github.com/d3N00t/ctfd_dynamic_challenges.git dynamic_challenges
```

**安装主题**

```SHELL
cd /root/CTFd/CTFd/themes/
git clone https://github.com/0xdevsachin/CTFD-crimson-theme.git
```

**配置CTFd的构建环境**

返回CTFd的根目录

```
cd /root/CTFd
chmod +x docker-entrypoint.sh
vim requirements.txt
```

在文件的最后一行添加以下内容：

```SHELL
docker==4.1.0
Flask-APScheduler==1.11.0
flask-redis==0.4.0
```

编辑DockerFile

```shell
vim Dockerfile
```
在FROM python字样的下面一行添加下面两行，用于加速apt的安装。
```SHELL
RUN sed -i 's/deb.debian.org/mirror.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list
RUN sed -i 's/security.debian.org/mirror.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-9.png)

pip inistall后面增加以下内容，用于加快pip的安装速度。
```TEXT
-i https://pypi.tuna.tsinghua.edu.cn/simple
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-10.png)

编辑docker-compose.yml
```SHELL
vim docker-compose.yml
```
在ctfd中的volumes增加：
```TEXT
- /var/run/docker.sock:/var/run/docker.sock
```
networks中增加：
```TEXT
frp:
            ipv4_address: 172.1.0.2
```
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-11.png)

然后在文件的最下面把最后**四行删掉**增加以下内容：
```SHELL

  frps:
    build: ./frps
    image: glzjin/frp:latest
    restart: always
    volumes:
      - ./frps:/conf/
    entrypoint:
        - /usr/local/bin/frps
        - -c
        - /conf/frps.ini
    ports:
      - "28000-28100:28000-28100"
      - "6490:6490"
      - "8080:8080"
    networks:
        frp:
            ipv4_address: 172.1.0.4

  frpc:
    image: glzjin/frp:latest
    restart: always
    volumes:
      - ./frpc:/conf/
    entrypoint:
        - /usr/local/bin/frpc
        - -c
        - /conf/frpc.ini
    networks:
        frp:
            ipv4_address: 172.1.0.3
        frp-containers:

networks:
    default:
    internal:
        internal: true
    frp:
        driver: bridge
        ipam:
            config:
                - subnet: 172.1.0.0/16
    frp-containers:
        driver: overlay
        attachable: true
        internal: true
        ipam:
            config:
                - subnet: 172.2.0.0/16

```

![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-14.png)

**修复提交flag无响应的问题**

```
vim /root/CTFd/CTFd/api/v1/challenges.py
```
注释掉下图位置的内容
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-25.png)

### 方法二：便捷安装

```SHELL
cd /root
git clone https://github.com/d3N00t/ctfd_ctfd_whale_frp.git CTFd
cd /root/CTFd/CTFd/plugins/
git clone https://github.com/d3N00t/ctfd-whale.git ctfd-whale
rm -rf dynamic_challenges
git clone https://github.com/d3N00t/ctfd_dynamic_challenges.git dynamic_challenges
cd /root/CTFd/CTFd/themes/
git clone https://github.com/0xdevsachin/CTFD-crimson-theme.git
```

## CTFd启动
```shell
cd /root/CTFd
docker-compose up -d
```

![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-15.png)
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-16.png)
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-17.png)

## 配置CTFd
访问http://ip:8000
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-18.png)
自己根据需要配置一下就行了。
到后台面板打开这个Whale页面
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-19.png)
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-20.png)
**如果需要域名把下面这个写到Frpc config template的最下面即可**

```ini
[ctfd]
type = http
local_ip = 172.1.0.2
local_port = 8000
use_encryption = true
use_compression = true
custom_domains = jayctf.com
```
**创建一个题目测试一下**

ctftraining/swpuctf_2016_web_web7

![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-21.png)
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-23.png)

这个不用管，选一下显示就行了。
![Alt text](assets/CTFd%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2/image-24.png)