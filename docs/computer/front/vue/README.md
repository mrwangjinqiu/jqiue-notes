---
title: Vue
category: 前端
tag: Vue
author: JQiue
---

膜拜一下大佬`Even you`，中文名`尤雨溪`

<div align="center"><img src="https://gitee.com/jqiue/img_upload/raw/master/images/yyx.jpg"/></div>

Vue，Angular，React一起被称为前端三大框架，Vue 是国人尤雨溪编写的一套前端框架解决方案，因此所有的资料都有中文支持，并且Vue整合了其他框架中的众多优点，因此大大降低了学习难度

正如Vue所说的那样Vue是通过数据驱动来更新页面的，而无需手动操作DOM来更新，因此意味着只要将数据交给Vue，Vue就会自动将数据渲染到页面上，这也说明Vue是一种响应式的

Vue支持组件化开发，这意味着可以将网页上的内容拆分成一个独立的组件，通过拼装组件来构成一个完整的页面

![components](https://cn.vuejs.org/images/components.png)

Vue是基于MVVM设计模式来设计的，MVVM由三部分组成：

1. Model：数据模型和持久化抽象层，保存数据，处理数据业务逻辑
2. View：视图层，展示数据，与用户交互
3. ModelView：数据模型视图适配器，每一个View都会与Model中的属性一一对应

MVVM模式最大的特点就是支持数据的双向传递，在Vue中View就是页面，Model就是Vue实例对象中的data，而View Model就是Vue实例对象，Vue默认是单向绑定的，只要将数据交给实例对象，实例对象就能够在视图中显示数据
