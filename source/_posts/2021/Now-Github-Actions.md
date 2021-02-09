---
title: 实现 Github Actions 持续部署
tags: [record,hexo]
categories: [博客]
date: 2021-02-09 17:31:01
rc: 004
---

完整实现 Github Actions 持续部署！
<!--more-->

## 更新

浏览 Docker 方法，发现它模拟的是本地生成 SSH 密钥，然后通过密钥连接并推送代码到远程仓库。我也尝试把 `entrypoint.sh`中的命令化为一个个步骤，直接放在 jobs 中，而不是放在 Docker 容器中，但是发现我不会 linux，所以后面再说。

最终选择仍以 token 为路径，来提交代码。

## 实现

代码如下：

```
# 文件路径 .github/workflows/deployment.yml
name: Deployment

on:
  push:
    branches: [main] # only push events on source branch trigger deployment

jobs:
  hexo-deployment:
    runs-on: ubuntu-latest
    env:
      TZ: Asia/Shanghai

    steps:
    - name: Checkout source
      uses: actions/checkout@v2
      with:
        submodules: true

    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        
    - name: Install dependencies & Generate static files
      run: |
        node -v
        npm i -g hexo-cli
        npm i
        hexo clean
        hexo g        
    - name: Deploy to Github Pages
      env:
        GIT_NAME: WillCAI2020
        GIT_EMAIL: ${{ secrets.GIT_EMAIL_BLOG }}
        REPO: github.com/WillCAI2020/WillCAI2020.github.io
        GH_TOKEN: ${{ secrets.GH_TOKEN_BLOG }}
      run: |
        cd ./public && git init && git checkout -b main && git add .
        git config --global user.name $GIT_NAME
        git config --global user.email $GIT_EMAIL
        git commit -m "GitHub Actions Auto Builder at $(date +'%Y-%m-%d %H:%M:%S')"
        git push --force --quiet "https://$GH_TOKEN@$REPO" main:main

```

## 注意

变量命名以及步骤解释在此文均有讲解，这里不再赘述。

### 分支

2020年10月份开始 GitHub 把默认的 master 分支换成了 main 分支。为了方便，我在远程仓库的分支也设为了 main 分支。这里注意：本地 `git init`后默认仍为 master 分支，此时应将新建 main 分支，并切换到 main 分支。

```c
//新建 main 分支，并切换到 main 分支
git checkout -b main
```

### 仓库

我的源码放在了仓库 blog 中，但是为使用 gh-pages，生成的 public 静态文件必须放在 username.github.io 的仓库中。

故而添加的 Secrets 变量均在 bolg 仓库中。

## 错误总结

原本我的仓库均只有 main 分支，而 jobs 代码并未加上 `git checkout -b main`，导致报错 `error: failed to push some refs to`，根据[此文](https://www.jianshu.com/p/c6f2e1ca2999)，同时浏览了 [Git push 讲解](https://www.yiibai.com/git/git_push.html)，然后从“分支名不完整、没有提交代码、本地与远程产生冲突”入手。

经过一番苦思，突然想到把远程那虚拟主机当成自己的电脑，直接 `git init`，然后 `git add .`，提交的不就是本地的 master 分支吗，但是我 `git push`指明本地的是 main 分支，而 main 分支不存在当然会报错，于是加上 `git checkout -b main`，解决问题。