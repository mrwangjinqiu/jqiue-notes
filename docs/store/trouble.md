---
title: 麻烦
author: JQiue
---

::: tip
这里收集的是我曾经遇到的麻烦
:::

### tomcat输出信息时出现中文乱码

原因：tomcat 默认编码为 UTF-8，和当前操作系统（windows）编码不一致  
解决：打开 tomcat 安装目录下的 conf/logging-properties 文件

```text
java.util.logging.ConsoleHandler.encoding = UTF-8
java.util.logging.ConsoleHandler.encoding = 合适的编码
```

### tomcat启动时cmd窗口异常退出

原因：tomcat启动时需要找到JAVA_HOME  
解决：环境变量中配置JAVA_HOME  

### npm发布包时提示远程仓库中有相似名的包

原因：npm远程仓库中有相似包名的发布包  
解决：修改package.json中的包名  

### 项目中的.gitignore忽略规则对某些文件失效了

原因：.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的  
解决：将文件变成未追踪状态即可解决，本地git是有缓存的，清除缓存即可将文件变为未追踪状态

```bash
git rm -r --cached .
```

### 在powershell中执行npm脚本被禁止

原因：powershell 默认策略是防止运行所有脚本文件  
解决：切换执行策略

管理员权限运行 powershell，并键入：

```bash
set-ExecutionPolicy RemoteSigned
```

此时计算机会提示你：选则Y或者A，回车即可

```text
执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
```

### 主机前面板没有声音

原因：板载声卡没有驱动  
解决：去主板官网下载驱动

### github推送时提示：ssh: connect to host github.com port 22: Connection timed out

原因：可能是防火墙阻塞端口  
解决：需要一些操作来确认一下是否这种原因

```sh
ssh -T git@github.com
```

如果以上命令得到了 timeout，这种情况因该使用 http 协议进行推送，而不是 ssh，只需要将配置文件中的 url 更改为 http 即可

打开配置文件：

```sh
git config --local -e
```

将配置中的：

```text
url = git@github.com:username/repo.git
```

改为：

```text
url = https://github.com/username/repo.git
```

### 使用 javac 命令可以编译通过，但 java 命令执行时找不到或无法加载主类

原因1：环境变量有问题  
解决：配置 path 和 classpath

原因2：环境变量没有问题，类中带有指定 package 路径，执行路径与 package 不一致  
解决：去掉 package 代码或者按照 package 路径创建一个文件夹去执行

原因3：windows 下使用 powershell 命令执行  
解决：powershell 的路径隐含`\`，会导致路径识别错误，应该使用 cmd 命令执行
