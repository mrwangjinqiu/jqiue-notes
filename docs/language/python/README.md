---
title: Python
category: 编程语言
tag: Python
time: 2020-09-12
author: JQiue
---

按照惯例，膜拜一下作者`“Guido van Rossum”`

<div align="center"><img src="https://gitee.com/jqiue/img_upload/raw/master/images/1336432-20180616095450909-1333757064.png"></div>

::: tip
说道 Python，它的诞生是极具戏曲性的，据 Guido 的自述记载，Python 语言是他在圣诞节期间为了打发时间开发出来的，之所以会选择 Python 作为该编程语言的名字，是因为他是一个叫 Monty Python 戏剧团体的忠实粉丝。
:::

Python 是一门开源的，免费的，通用型脚本语言，上手简单，功能强大，坚持“极简主义”。

Python 语言是在 ABC 教学语言的基础上发展来的，遗憾的是，ABC 语言虽然非常强大，但却没有普及应用，Guido 认为是它不开放导致的。

基于这个考虑，Guido 在开发 Python 时，不仅为其添加了很多 ABC 没有的功能，还为其设计了各种丰富而强大的库，利用这些 Python 库，程序员可以把使用其它语言制作的各种模块（尤其是C语言和 C++）很轻松地联结在一起，因此 Python 又常被称为“胶水”语言。这使 Python 几乎无所不能，不管是传统的 Web 开发，PC 软件开发，Linux 运维，还是当下最热门的机器学习，大数据分析，网络爬虫，它都能胜任。

同时 Python 也是完全面向对象的语言，函数，模块，数字，字符串都是对象，在 Python 中一切皆对象

从整体上来看，Python 最大的特点就是简单：

1. 语法简洁明了，即使是非专业的初学者也非常容易上手
2. 和其他语言相比，要实现同一个功能，而 Python 的代码往往是最短的

**“Life is short，you need Python”，人生苦短，我用Python**。

## Python 的缺点

Python 运行速度是最慢的，甚至比 java 还慢，当然这是所有的解释性语言的通病，正是因为 Python 屏蔽了很多底层细节，这个代价是非常大的，这个过程中 Python 需要做出很多很多工作，消耗了很多资源。虽然缺点是运行速度慢，但这并不是什么大问题，因为计算机的运行速度是越来越快的，只要多花钱就可以堆很高的性能，即用硬件的性能来弥补软件的不足。

## Python 的版本

现在很多项目都是用的 Python2，但是 Python3 对开发带来了很多麻烦，因为他们是不兼容的

Python3.x 是一次重大升级，为了避免引入历史包袱，Python3.x 和 Python2.x 并没有考虑兼容性，这导致了所有使用的 Python2.x 的项目无法升级 Python3.x，只能继续使用 Python2.x，虽然官方仍在维护 Python2.x，但是大部分刚刚起步的项目却使用的 Python3.x，学新不学旧才是最聪明的做法，因此 Python3 才是学习的主力，但是对于学透的人来说，无非就是写法上的不同

## Python的解释器

Python 除了有自己的官方的解释器以外，还有其他的解释器

+ CPython 官方版本的 C 语言实现
+ Jython 可以运行在 Java 平台
+ IronPython 可以运行在 .NET 和 Mono 平台
+ PyPy Python 实现的，支持 JIT 即时编译
