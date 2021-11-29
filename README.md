# DGoDo - 一款基于Web的TODO系统

⚠开发中⚠功能不完善⚠

一个小练手，自用(主要是mstodo太神奇了，在后台消耗资源很大)

计划技术栈：

后端：Go + Gin + Mysql (目前未实现，以localStorage暂时存储)

前端： React + AntDesign (目前未接入AntDesign)


# QuickStart

## 直接使用

欢迎访问[我的网站](http://big.dggua.top/)直接访问应用

## 本地部署

1. 安装[nodejs](https://nodejs.org/)

2. 安装yarn：

    ```shell
    npm install -g yarn
    ```

3. 安装依赖：

    ```shell
    yarn install
    ```

4. 运行

    + 部署：

        ```shell
        yarn global add serve
        serve -s -p 80 build
        ```

    + debug模式（默认运行端口3000）

        ```shell
        yarn start
        ```

# 开发目标

构建一个**云同步**、基于WEB的**多端**TODO应用。

## 功能

主要内容分为两类：TODO & 日程。

+ TODO：在设定日程之前需要完成

+ 日程：在设定日程前（基本）不需要做（大量）工作，只需在设定日期后开始工作

# 帮助我！

本项目初心为个人锻炼项目，联系本人React及Go的能力。同时尝试接受AntDesign及Gin等新的框架。

非常欢迎大家为这个项目提出自己的意见和建议！囿于个人经历有限，更新可能会非常缓慢，欢迎大家Fork或提issue！
