---
title: 记录探索 Github Actions
tags: [record,hexo]
categories: [博客]
date: 2021-02-09 15:57:27
rc: 003
top: 999
---

在实践中成长与学习，在学习后巩固与整理。
<!--more-->

## 1、概述

对于通过 Github Actions 部署博客，大概已经摸清原理。利用 Github Actions 提供的环境（我愿称其为虚拟主机），环境一般配置为 ubuntu-latest （我对 Linux 并不是很熟）。之前写过一篇文章，也是借鉴别人的代码，然后整理，并结合一下自己的理解完成 Github Actions 的 jobs。

那篇文章得到的结果是源码以及生成的静态文件均放在同一个代码仓库，只不过分属两个分支而已，并不如我所愿。

## 方法一

### 代码

```yaml
# 文件路径 .github/workflows/deployment.yml
name: Deployment

on:
  push:
    branches: [master] # only push events on source branch trigger deployment

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
        GIT_EMAIL: ${{ secrets.GIT_EMAIL }}
        REPO: github.com/WillCAI2020/WillCAI2020.github.io
        GH_TOKEN: ${{ secrets.GH_TOKEN }}
      run: |
        cd ./public && git init && git add .
        git config --global user.name $GIT_NAME
        git config --global user.email $GIT_EMAIL
        git commit -m "Site deployed by GitHub Actions"
        git push --force --quiet "https://$GH_TOKEN@$REPO" master:master
```

### 流程

一个 Github Actions 可以有很多 jobs ，上述代码就一个`job：hexo-deployment`，并且设置它工作在 ubuntu-latest 上，一个 job 还能分为许多 steps，你可以为每个 step 设置name、uses（使用什么，可以选择自己写的 actions，也可以调用[官网提供](https://github.com/actions)的，比如`actions/checkout@v2`）、with（uses 的伴随参数）、env（run 所调用的参数）、run（在虚拟主机上调用的命令）。

从`secrets.GH_TOKEN`与`secrets.GIT_EMAIL`可以看出，需要设置仓库的变量有`GH_TOKEN`与`GIT_EMAIL`。`GIT_NAME、GIT_EMAIL、GH_TOKEN、REPO`是 `step:Deploy to Github Pages`调用命令所需的的`env`变量。顺序执行，很容易看出：

* 配置依赖环境（貌似不用装 Git）
  * 先调用官网提供的 actions 配置了版本为 `12.x 的 nodejs`
  * 然后 `node -v`观察是否成功配置
  * 再 `npm i -g hexo-cli`装好 hexo
  * 再`npm i`装好依赖的包
  * 然后就到熟悉的 `hexo clean`与`hexo generate`
* 接下来把虚拟主机上本地仓库根目录中的 public 文件夹 （`hexo generate`生成的静态文件）提交到远程仓库
  * 进入 public 文件夹 同时将此文件夹初始化为一个 Git 仓库，并本地提交（`cd ./public && git init && git add .`）
  * 确定全局信息
    * `git config --global user.name $GIT_NAM`
    * `git config --global user.email $GIT_EMAIL`
  * 提交信息（`git commit -m "Site deployed by GitHub Actions"`）
  * 上传（`git push --force --quiet "https://$GH_TOKEN@$REPO" master:master`）
    * `master:master`前一个 master 指的是虚拟主机上本地分支，后一个 master 则为远程仓库分支。

### GH_TOKEN

[获取](https://github.com/settings/tokens)。`Generate new token` 来生成，随便你取什么名字，只要内容你正确拷贝到仓库的 Secrets 变量中就行了。这个东西相当于密码，创建的时候可以选择这个密码允许干些什么，我们只需要用这个来提交代码仓库，故而勾选 repo 就够了，并且这个 token 是能作用于该账号的所有仓库。

然后前往源码所在仓库，添加 Secrets。

这里取的名字注意要和代码中的相同，代码中调用`secrets.GH_TOKEN`，那这里的就要命名为 GH_TOKEN。

![Secrets](https://s3.ax1x.com/2021/02/09/ydi1tP.png)

### GIT_EMAIL

这个直接添加 Secrets，内容为账号绑定的邮箱。其实这也没必要添加，直接 env 中写明`GIT_EMAIL: 账号邮箱`。

### 最终版

详情见此文。

## 方法二

通过 Docker 容器，Docker 属于操作系统层虚拟化，现在很热门，我不懂这个。

我根据 [reuixiy](https://github.com/reuixiy/io-oi.me/) 为 Hugo 基于Docker、通过Arch Linux 完成 Actions 所编写的代码，改成了能实现 Hexo 部署的代码。

改编后代码如下：

```yaml
# .github/workflows/build.yml
name: build

on:
  push:
    branches:
    - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: 'Checkout codes'
      uses: actions/checkout@v2
      with:
        submodules: true

    - name: 'Building...'
      uses: ./.github/actions/hexo-deploy
      env:
        DEPLOY_REPO: WillCAI2020/WillCAI2020.github.io
        DEPLOY_BRANCH: main
        DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
        # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        TZ: Asia/Shanghai 
```

```yaml
# .github/actions/hexo-deploy/action.yml 
name: 'hexo-deploy'
author: 'according-reuixiy'
description: 'Deploy your Hexo site to GitHub Pages, via GitHub Actions, with Arch Linux.'
runs:
  using: 'docker'
  image: 'Dockerfile'
branding:
  icon: 'arrow-up-circle'  
  color: 'yellow' 
```

```yaml
# .github/actions/hexo-deploy/Dockerfile 
FROM archlinux

RUN pacman -Syu --noconfirm nodejs npm git openssh

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```

```sh
# .github/actions/hexo-deploy/entrypoint.sh 
#!/bin/bash
# Required environment variables:
#
#   DEPLOY_KEY          SSH private key
#
#   DEPLOY_REPO         GitHub Pages repository
#   DEPLOY_BRANCH       GitHub Pages publishing branch
#
#   GITHUB_ACTOR        GitHub username
#   GITHUB_REPOSITORY   GitHub repository (source code)
#
#   TZ                  Timezone
set -e
REMOTE_REPO="git@github.com:${DEPLOY_REPO}.git"
REMOTE_BRANCH="${DEPLOY_BRANCH}"
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
# https://github.com/reuixiy/hugo-theme-meme/issues/27
git config --global core.quotePath false
ln -s /usr/share/zoneinfo/${TZ} /etc/localtime
mkdir /root/.ssh
ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts && \
echo "${DEPLOY_KEY}" > /root/.ssh/id_rsa && \
chmod 400 /root/.ssh/id_rsa
git clone --recurse-submodules "git@github.com:${GITHUB_REPOSITORY}.git" site && \
cd site

node -v
npm i -g hexo-cli
npm i
hexo clean
hexo g

pushd public \
&& git init \
&& git remote add origin $REMOTE_REPO \
&& git add -A \
&& git checkout -b $REMOTE_BRANCH \
&& git commit -m "Automated deployment @ $(date '+%Y-%m-%d %H:%M:%S') ${TZ}" \
&& git push -f origin $REMOTE_BRANCH \
&& popd
rm -rf /root/.ssh
```

使用方法参考[此文](https://io-oi.me/tech/deploy-hugo-to-github-pages-via-github-actions/)即可。

### 说明

通过这个方法，我接触并浅显地了解了 Docker，明白 Dockerfile 中通过 `FROM archlinux` 能指明操作系统，为了更改 Dockerfile，我搜索并学习了一些 ArchLinux 的指令，比如通过 pacman 来安装包。

大致阅览了如下文章：

* [在 Docker 中使用 Archlinux 的折腾记录](https://mogeko.me/2019/063/)
* [pacman (简体中文)](https://wiki.archlinux.org/index.php/Pacman_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E6%89%8B%E5%8A%A8%E9%87%8D%E6%96%B0%E5%AE%89%E8%A3%85_pacman)

### 报错

突然发现 Github Actions 报错了，原因是 `failed to initialize alpm library`，于是去查询解决方法，普遍答复为以 root 权限运行 `pacman-db-upgrade`即可（是因为 yaourt 更新 pacman 以后，没更新 pacman 资料库的关系），于是我在 Dockerfile 中加上该命令，却报错 `You must have correct permissions to upgrade the database`，我觉得是没有 root 权限，于是找寻如何切换 root 权限，最终不了了之。

阅览以下文章：

* [failed to initialize alpm library](https://blog.elleryq.idv.tw/2014/12/failed-to-initialize-alpm-library.html)
* [Docker 运行时的用户与组管理](https://segmentfault.com/a/1190000016781704)
* [如何获得docker容器里面的root权限](https://blog.csdn.net/u012763794/article/details/80943472)
* [Linux系统下 -bash: apt-get: command not found](https://blog.csdn.net/u010741032/article/details/102606888)
* [Shell echo命令](https://www.runoob.com/linux/linux-shell-echo.html)
* [Linux mkdir 命令](https://www.runoob.com/linux/linux-comm-mkdir.html)
* [容器内使用sudo 报bash: sudo: command not found](https://blog.csdn.net/roxxo/article/details/90410259)

