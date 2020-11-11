---
title: CSS
category: 前端
tag: CSS
time: 2019-3-22
author: JQiue
---

CSS是一门样式表语言，不是标记语言，也不是编程语言。

## 为什么要学习CSS

仅仅使用HTML编写的网页奇丑无比，需要CSS这么语言来帮助美化

## 使用方式

1. 行内样式：直接在元素内部使用，通过全局属性`style`直接将css代码写到元素身上

```html
<div style="color:red;">行内样式</div>
```

2. 内部样式：在`<head>`标签中定义

```html
<head>
  <style>
    selector {
      Rules
    }
  </style>
</head>
```

3. 外联样式：将一个单独的`.css`文件在`<head>`标签中使用`<link>`引入

```html
<link rel="stylesheet" href="index.css"/>
```

## 语法

CSS语法构成比较简单，主要有以下两个部分组成：

1. 选择器：选择器用于匹配对应的元素，选择器的种类众多，且可以组合使用
2. 规则集：具体定义匹配元素的样式，由具体的声明构成，声明与声明之间用分号分隔，每一条声明由CSS属性和对应的属性值构成

``` css
selector{
  Rules
}
```
