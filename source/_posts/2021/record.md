---
title: 记录
date: 2021-02-07 23:03:02
rc: 002
tags: [record,hexo]
categories: [博客]
---

{% cq %}随手记。{% endcq %}

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

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://s3.ax1x.com/2021/02/09/yaffns.png"  alt="彩色标签页">

```
a7ee87d5b4b364c71deb97c0a88976b982c41c01
```

```
git rm -r --cached actions
```

```
52a73c0d7f6af17588b4941829cd0ef8da372875
```

```
html是由很多元素组成的，而每个元素的样式由css控制，css有很多属性，比如这个background，还有这个设置透明度的，设置内边距(padding)，外边距(margin)的。
我们要充分利用浏览器的开发者工具，谷歌浏览器是F12，Edge也是，你看，我用这个选中我想修改的元素，而元素的样式可以通过一个又一个的类来控制，你看这个post-block类，（class就是类的意思：class="post-block"），在css，我们通过 .post-block来为类设置属性，你看我改变它的background
```

```c
git submodule add --depth 1 https://github.com/theme-next/theme-next-pace source/lib/pace
```

![加载进度条](https://s3.ax1x.com/2021/02/09/ydzxJS.png)

```
git submodule add --depth 1 https://github.com/stevenjoezhang/live2d-widget.git source/lib/live2d-widget
```

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/try-light-dark-themes/method1.png" alt="test1">

<hr>
<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://i.loli.net/2021/02/16/x39c4XnuqQeCgt7.jpg" alt="test2">

<hr>
<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://i.loli.net/2021/02/16/ze5hlG1NIERATts.jpg" alt="test3">



```html
<div class='tip'><p>默认情况<p></div>
<div class='tip success'><p>success<p></div>
<div class='tip error'><p>error<p></div>
<div class='tip warning'><p>warning<p></div>
```

<div class='tip'><p>默认情况<p></div>
<div class='tip success'><p>success<p></div>
<div class='tip error'><p>error<p></div>
<div class='tip warning'><p>warning<p></div>

```
<a href="https://willcai2020.github.io/" class="LinkCard">欢迎来到——我的小站</a>
```

<a href="https://willcai2020.github.io/" class="LinkCard">欢迎来到——我的小站</a>

```
/* note语法示例 */
<p class='div-border green'>绿色</p>
<p class='div-border red'>红色</p>
<p class='div-border yellow'>黄色</p>
<p class='div-border grey'>灰色</p>
<p class='div-border blue'>蓝色</p>

/* 小tag标签语法示例 */
<span class="inline-tag red">红色小标签</span>
<span class="inline-tag green">绿色小标签</span>
<span class="inline-tag blue">蓝色小标签</span>
<span class="inline-tag yellow">黄色小标签</span>
<span class="inline-tag grey">灰色小标签</span>
```
/* note语法示例 */
<p class='div-border green'>绿色</p>
<p class='div-border red'>红色</p>
<p class='div-border yellow'>黄色</p>
<p class='div-border grey'>灰色</p>
<p class='div-border blue'>蓝色</p>

/* 小tag标签语法示例 */
<span class="inline-tag red">红色小标签</span>
<span class="inline-tag green">绿色小标签</span>
<span class="inline-tag blue">蓝色小标签</span>
<span class="inline-tag yellow">黄色小标签</span>
<span class="inline-tag grey">灰色小标签</span>

试验pangu，此行中英文间未加空格。

来tryagain，这是pangu，能给文章中English添加space。