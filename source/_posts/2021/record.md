---
title: 记录
date: 2021-02-07 23:03:02
rc: blog-record
tags: [record,hexo]
categories: [博客]
---
记录。

<!--more-->
```
hexo init
git init
由于使用SSH多账号，故而添加远程地址时要注意
为Github Actions 做准备
由于想在blog仓库放源码（要部署的文件一定得放在username.github.io仓库中），故而新生成一个SSH密钥，公钥作为username.github.io的Deploy KEY，私钥作为blog的变量
```

```css
html,body {
	margin: 0;
	padding:0;
	height: 100%;
}

.main{
	min-height:100%;
	height: auto !important;
	height: 100%; /*IE6不识别min-height*/
	position: relative;
}

.main-inner{
	margin: 0 auto;
	padding-bottom: 80px;
}
	
.footer{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
	clear: both;
}
```

```
git clone https://github.com/theme-next/theme-next-canvas-ribbon source/lib/canvas_ribbon
```

```
git submodule add --depth 1 https://github.com/theme-next/theme-next-canvas-ribbon source/lib/canvas_ribbon
```

```
git rm -r --cached source/lib/canvas_ribbon
```

```
git submodule add --depth 1 https://github.com/theme-next/theme-next-canvas-nest source/lib/canvas-nest
```

```
git rm -r --cached source/lib/canvas-nest
```

```
git rm -r --cached _config.landscape.yml
```

```
npm install hexo-generator-searchdb --save
```

```
https://github.com/WillCAI2020/blog/edit/main/source/
```

