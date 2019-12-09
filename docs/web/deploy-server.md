# 部署server
- windows | linux | macos
- java1.8
- mysql5.7(必须)
- redis

<!-- ## 下载
https://pan.baidu.com/s/11CspmuBy6gZKaYvnIwq8Kg  提取码：e8iw -->

## 创建Mysql数据库
create database {db_name}

## 配置application.yml文件
- 端口
找到 server.port、 配置服务的启动端口
- 数据库
找到 spring.datasource.druid 下面的 url、username、password 分别配置为数据库的 url 、用户、密码
- redis
找到 spring.redis 下面的 host、port、password 分别配置为redis的 ip 、端口、密码
- 邮箱
找到 spring.mail 下面的 host、username、password 分别配置为邮箱的的 smtp地址 、smtp邮箱地址（注意，这个不是邮箱地址）、密码

<!-- ## 创建表
https://github.com/opendx/server/blob/master/db/table.sql
 -->

## 初始化表和数据
* 执行sql文件夹下的，quartz.sql 和 rabbit.sql 两个sql文件

## 启动server
- Windows双击 start.bat
- Linux|macOS 执行 start.sh

## 访问Rabbit
浏览器访问 http://{server.ip}:{server.port}/public
