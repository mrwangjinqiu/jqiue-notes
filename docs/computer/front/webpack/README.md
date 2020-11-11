---
title: Webpack
category: 前端
tag: Webpack
author: JQiue
---

webpack是一套基于NodeJS的"模块打包工具"

在webpack刚推出的时候就是一个单纯的JS模块打包工具,可以将多个模块的JS文件合并打包到一个文件中，但是随着时间的推移、众多开发者的追捧和众多开发者的贡献

现在webpack不仅仅能够打包JS模块, 还可以打包CSS/LESS/SCSS/图片等其它文件

## 为什么要打包模块

模块化虽然解决了代码了维护性和复用性，但是由于导入资源变多了，请求次数变多了，网页性能也就变差了，因此需要一个打包工具将所有的模块合并到一个文件中，再引入到网页中去，而webpack恰恰就是这样的工具

## 安装

不推荐全局安装 webpack，这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败

```shell script
npm install --save--dev webpack
npm install --save--dev webpack-cli
```

::: tip
在webpack 4+版本后，需要额外的安装CLI
:::
