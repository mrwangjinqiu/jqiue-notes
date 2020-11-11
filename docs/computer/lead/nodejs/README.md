---
title: NodeJS
category: 后端
tag: NodeJS
author: JQiue
---

在学习NodeJS之前必须了解[前端模块化](/code/front/other/2/)

## 为什么需要NodeJS

NodeJS内置V8引擎，这意味着JavaScript不仅仅可以运行在浏览器中，也可以运行在NodeJS中，而不同于浏览器的是NodeJS扩展了JavaScript功能，使之能够支持IO，fs等能力，这就意味着使用JavaScript也能开发后端了

与此同时NodeJS还自带包管理工具(NPM)

::: tip
在NodeJS没有DOM对象和BOM对象，这就意味着全局对象不是`window`，而是是`global`
:::

## 安装NodeJS

用于所有主流平台的官方软件包，可访问 [NodeJS安装包](http://nodejs.cn/download/)。

## 特点

1. 事件驱动
2. 非阻塞IO
3. 轻量高效
