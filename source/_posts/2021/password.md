---
title: 尝试加密功能
top: false
tags: [next,hexo]
categories: [博客]
date: 2021-02-10 17:37:57
rc: 008
password: 2021
abstract: <div class="article_encrypt_abstract">暂不公开，请勿打扰 ～<font size="5" color="red">【状态：加密】</font></div>
message: 密码提示：今年年份
---

测试插件 hexo-blog-encrypt。
<!--more-->

```c
npm install --save hexo-blog-encrypt
```

```yaml
# 文章加密功能
encrypt:
    enable: true
```

```yaml
password: 博客密码
abstract: home 主页显示的文字提示
message: 查看博客，密码输入框上面的描述性文字
```

[hexo-blog-encrypt 资料](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md)。

