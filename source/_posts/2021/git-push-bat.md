---
title: 利用 bash 脚本提高效率-git push 
tags: [record,git,bat]
categories: [编程]
date: 2021-02-09 18:26:02
rc: 006
---

每次提交都要输重复命令，于是想到能否用过脚本来自动执行，省的手动重复输入这三个命令。上网查询，发现可以通过 bash 命令。
<!--more-->

## 概述

利用 git 命令更新代码仓库，普遍三个命令：

```c
git add .
git commit -m "message"
git push origin main
```

每次提交都要输一遍这三行，于是想到能否用过脚本来自动执行这三个，省的手动重复输入这三个命令。上网查询，发现可以通过 bash 命令。

## 实现

根据网上教程，编写出以下代码：

```bash
# 命名：git_WillCAI2020.bat
@echo off
echo "Introduction: Update the remote repository, written by ruchan"
echo "Steps:"

::注意修改为你自己的仓库地址
echo "1. Move to working directory" 
cd D:\Github\WillCAI2020\blog

echo "2. Display the status of the working directory and staging area" 
git status

echo "3. Start submitting code to the local repository"
git add .
 
echo "4. Commit the changes to the local repository"
set /p message=请输入提交信息：
echo %message%
git commit -m "%message%"
 
echo "5. Push the changes to the remote git server"
git push origin main
 
echo "You have successfully submitted!"
pause
```

步骤如代码中注释，通俗易懂。

注意修改仓库路径，命名以 bat 结尾，存放位置任意。

执行代码时，还能手动输入待提交信息（利于帮助管理代码）。

使用时双击运行即可。

## 扩展

还想到能否通过 bash 来执行：

```c
hexo clean && hexo g && hexo s
```

然后直接把相关命令通过 dos 运行，这是发现结果并不如愿。

于是发现应该先通过 bash 命令启动 git-bash，然后在 Git 中执行 `hexo clean && hexo g && hexo s`。

得到：

```bash
@echo off

echo "Introduction: Preview your hexo site locally, written by ruchan"
echo "Steps:"

start C:\环境\Git\git-bash.exe --cd=D:\Github\WillCAI2020\blog -c "hexo clean && hexo g && hexo s"
```

虽然发现能行，但速度不大满意，还是手动输吧。

## 参考

* [Windows 下bat脚本git提交代码到github](https://blog.csdn.net/Ep_Little_prince/article/details/108895103)
* [.bat脚本基本命令语法](https://www.cnblogs.com/iTlijun/p/6137027.html)
* [.Bat之批处理实现手动输入变量参数](https://blog.csdn.net/laozhuxinlu/article/details/52853787)
* [bat 批处理教程](https://www.w3cschool.cn/dosmlxxsc1/wvqyr9.html)

