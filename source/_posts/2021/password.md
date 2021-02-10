---
title: 尝试加密功能
top: false
tags: [next,hexo]
categories: [博客]
date: 2021-02-10 17:37:57
rc: 008
keywords: next,password
password: 2021
theme: up
abstract: <div class="article_encrypt_abstract">暂不公开，请勿打扰 ～<font size="5" color="red">【状态：加密】</font></div>
message: 密码提示：今年年份（输入密码后回车）
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
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

