---
title: 悬浮组件-gitter在线交流
update: '2021-03-21 15:40:00'
top: false
tags: [hexo,next]
categories: [博客]
date: 2021-03-20 23:39:02
rc: 12
keywords: gitter,next
---

<p class='div-border green'>为博客添加gitter在线交流功能，并内置于悬浮组件中。</p>

<!--more-->

## 简介

博客拥有聊天系统也还是蛮不错的😄。目前也有很多聊天系统供选择，比如Chatra, Tidio, Daovoice, Gitter, Crisp等等，各有各的优点。这里我选择使用Gitter，据[官网](https://gitter.im/)介绍，其拥有如下功能特性：

* 自由无限制：无限人员、历史消息和集成，享受自由的公共和私有社区。
* 易于创建：只需创建您的社区并开始交谈 - 无需设置任何邀请服务。
* Markdown 和 KaTeX：就像在用您平常喜欢用的开发工具一样格式化您的讯息。
* 广为人知：完整的历史文件（通过搜寻引擎索引）和可分享的永久链接或使用 Sidecar 将 Gitter 嵌入至您的网站。

## 使用

先分别贴出直接添加以及内置于悬浮组件的效果图：

<img alt="直接添加" class="gifplayer" src="https://willcai2020.gitee.io/pic-go/Post/gitter/gitter-original.png">

<hr>

<img alt="悬浮组件" class="gifplayer" src="https://willcai2020.gitee.io/pic-go/Post/gitter/gitter-now.png">

<hr>

大家可根据自身情况选择使用哪种方式实现😄。

### 准备工作

首先前往 [Gitter官网](https://gitter.im/)，选择“创建你自己的社区”，然后登录（可选择通过Github登录）

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://willcai2020.gitee.io/pic-go/Post/gitter/20210321111618.png" alt="登录">

最后创建属于你自己的社区。

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321112332.png" alt="创建社区">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321113003.png" alt="社区命名">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321113221.png" alt="创建成功">

### 直接添加

依据[官方教程](https://sidecar.gitter.im/)，只需将如下代码导入网页 body 中。（利用 Next 注入特性，将代码放入`根目录/source/_data/body-end.njk`中即可）

```nginx
{# 使用 Gitter 实现一个 IM 即时通讯聊天室功能 #}
<script>
  ((window.gitter = {}).chat = {}).options = {
    room: 'crcrc2021/community'		<!--注意修改为你自己的社区-->
  };
</script>
<script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
```

### 置于悬浮组件

如果选择直接添加，对我来说，Open Chat 这个按钮有点占地方（特别是移动端🙃）。于是我思考能否将其入口按钮置于悬浮组件中。

观察发现：添加的以实现 Gitter 的代码均为 Js，且第一段 Js 拥有关键词 Options，不难想到这只是指明参数，那么后面引入的 sidecar.v1.js 中应具有实现添加 Gitter 元素的行为。

首先 Ctrl+Shift+C 直接打开F12定位，选择 Open Chat 按钮，找到类为 gitter-open-chat-button 的元素 a。

接着利用VSCode格式化 sidecar.js，方便阅读。再Ctrl+F搜索 gitter-open-chat-button，容易定位这一部分代码。

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321135304.png" alt="添加元素">

搜索[createElement](https://www.runoob.com/jsref/met-document-createelement.html)、[appendChild](https://www.runoob.com/jsref/met-node-appendchild.html)等方法的教程（根据其英文名称并结合代码大概也能猜出相应的作用😶）。

再往上找对象 m，发现如下定义：

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321134758.png" alt="对象m">

关于 [document.body](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/body) 、 [document.documentElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement)以及它们的区别，若有兴趣了解的话可自行搜索。

最后结合代码，可理解为 m（body标签）利用 appendChild在其末尾添加了子节点 i，i经createElement 得到元素 a，且此元素的超链接目标（href）、内容（innerHTML）、类等均可自定义。

综上所述，我想将节点i置于悬浮组件中（id为RightDownBtn），且元素a的内容（innerHTML）可设为SVG图形，于是修改如下：

```javascript
m = document.getElementById("RightDownBtn"),
...
(function () {
    var i = t[C].createElement("a");
    return (
      (i.href = "" + e.host + e.room),
      (i.title = '在线聊天'),
      (i.innerHTML = 
          '\n         <svg style=" width: 1.5em;height: 1.5em;" t="1614495740006" class="chat" aria-hidden="true" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2191" width="200" height="200"><path d="M712.2432 750.6944H505.2928c-5.632 0-11.1104 1.8432-15.5648 5.2736l-198.1952 151.4496c-16.896 12.9024-41.216 0.8704-41.216-20.3776v-110.7456c0-14.1824-11.4688-25.6512-25.6512-25.6512h-26.4192c-62.208 0-112.64-50.432-112.64-112.64V342.6816c0-62.208 50.432-112.64 112.64-112.64H712.192c62.208 0 112.64 50.432 112.64 112.64v295.3728c0.0512 62.208-50.3808 112.64-112.5888 112.64z" fill="#FACC31" p-id="2192" data-spm-anchor-id="a313x.7781069.0.i1"></path><path d="M655.0528 458.5984h-403.968c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h403.9168c14.1312 0 25.6 11.4688 25.6 25.6s-11.4176 25.6-25.5488 25.6zM425.6256 607.6416H251.0848c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h174.4896c14.1312 0 25.6 11.4688 25.6 25.6s-11.4176 25.6-25.5488 25.6z" fill="#191919" p-id="2193"></path><path d="M836.1984 72.0896H366.4384c-70.6048 0-128 57.3952-128 128v4.352h-40.192c-76.2368 0-138.24 62.0032-138.24 138.24v295.3728c0 76.2368 62.0032 138.24 138.24 138.24l26.4704 0.0512v110.7456c0 19.6096 10.9568 37.2224 28.5184 45.9264 7.2704 3.584 15.0528 5.376 22.784 5.376 11.008 0 21.9136-3.584 31.0784-10.5984l198.1952-151.5008h206.8992c76.2368 0 138.24-62.0032 138.24-138.24v-72.3968c63.8976-7.1168 113.7152-61.44 113.7152-127.1808V200.0896c0.0512-70.5536-57.3952-128-127.9488-128z m-36.9152 565.9648c0 47.9744-39.0656 87.04-87.04 87.04H505.2928c-11.2128 0-22.2208 3.7376-31.1296 10.5472l-198.2464 151.4496v-110.7456c0-28.2624-22.9888-51.2512-51.2512-51.2512h-26.4192c-47.9744 0-87.04-39.0656-87.04-87.04V342.6816c0-47.9744 39.0656-87.04 87.04-87.04H712.192c47.9744 0 87.04 39.0656 87.04 87.04v295.3728z m113.7152-199.5776c0 37.4784-26.9824 68.7104-62.5152 75.4176V342.6816c0-76.2368-62.0032-138.24-138.24-138.24H289.6384v-4.352c0-42.3424 34.4576-76.8 76.8-76.8h469.7088c42.3424 0 76.8 34.4576 76.8 76.8v238.3872z" fill="#191919" p-id="2194"></path></svg> \n'),                                    
      i.classList.add("gitter-open-chat-button"),
      m.appendChild(i),
      i
    );
  })()
...
```

最后引用修改完成的js，代码如下：

```nginx
{# Gitter聊天界面 begin #}
<script>
  ((window.gitter = {}).chat = {}).options = {
    room: 'ruchan666/community'
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.3.3/js/sidecar.min.js" async defer></script>
{# Gitter聊天界面 end #}
```

试验发现效果有点偏差，于是调整样式（加入样式文件 styles.styl 中即可）：

```stylus
#RightDownBtn .gitter-open-chat-button{
	display: contents !important;
}
```

也有另外一种修改方法，在引用的 sidecar.js 中搜索 gitter-open-chat-button，定位的这一部分设置了类gitter-open-chat-button的样式，将 607 行中有关 gitter-open-chat-button 的部分删除即可。

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Post/gitter/20210321144325.png" alt="样式">

## 样式调整

Gitter在线聊天界面的主体是通过内嵌 Iframe页面实现的，修改Iframe页面的样式我们无法做到（我搜索半天得到了这个结果）。

而我们需要调整的元素的样式是在Iframe元素之外的，根据我的要求，样式调整如下：

```stylus
/****************************************/
/*************gitter组件 begin***********/
/****************************************/
/* gitter置于最上层 */
.gitter-chat-embed {
  z-index: 100;
}

+ mobile() {
  .gitter-chat-embed iframe {
    position: fixed;
    top: 16px;
    height: 98% !important;
  }
  .gitter-chat-embed-action-bar {
    z-index: 1000;
  }
}
.gitter-chat-embed-action-bar-item-pop-out{
	margin: 9px;
}
#RightDownBtn svg.chat{
    width: 21px !important;
    height: 21px !important;    
	margin-top: 2px;
}
/****************************************/
/*************gitter组件 end*************/
/****************************************/
```

大功告成🎉🍻✨