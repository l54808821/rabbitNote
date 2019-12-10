# 部署agent
* windows | linux | macos
* java8 （必须）
* appium >=1.15 （必须。建议使用最新版本，如果不做app自动化可以不需要）
* aapt （非必须。若要dump apk信息获取packageName、启动activity等信息，需要将aapt(androidSdk/build-tools/{version})添加到环境变量）

## 下载
百度网盘不再维护，请进群（qq群：835208549）下载或自主源码构建

## 配置application.yml文件
- 端口
找到 server.port和server.address、 配置agent的端口ip和本地的ipv4地址（请不要配置127.1.1.1或者localhost）
- server信息
找到 service.web下面的 path、ip、port 分别配置为服务端的 context-path、host、port


## 启动server
- 必须先启动服务端，如果服务端没有启动，agent无法启动
- Windows双击 start.bat
- Linux|macOS 执行 start.sh
- 进入服务端菜单：公共配置-执行机管理 点击修改分配项目 和 修改执行机备注
