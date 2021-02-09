---
title: 提示：Your branch is up to date  ...
tags: [record,git]
categories: [编程]
date: 2021-02-09 18:09:52
rc: 005
---

## 记录

执行 git status 发现提示：

```c
On branch main
Your branch is up to date with 'origin/main'.
```

直接 `git add .`、`git commit -m "修改"`，`git push origin main`，发现无法提交。

于是搜索，根据这篇文章： [git commit提示Your branch is up-to-date with 'origin/master'.](https://www.jianshu.com/p/e25c763b9816)，认为是版本分支的原因（不大懂）。

### 新建分支

```c
git branch newbranch
//查看是否是否创建成功
git branch 
//若结果中有 newbranch，即成功
```

### 切换新分支并提交改动

```c
git checkout newbranch
    git add . 
git commit -m "改动"
```

### 切换主分支并合并改动

```c
git checkout master
git merge newbranch 
```

### 提交代码

```c
git push -u origin master
```

### 删除新分支

```c
git branch -D newbranch
```

## 后记

完成上述流程后，已能提交代码，但是仍会提示：

```
On branch main
Your branch is up to date with 'origin/main'.
```

根据[此文](https://blog.csdn.net/S_o_l_o_n/article/details/108130341)，暂不理会。