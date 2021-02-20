---
title: 记录 tags 用法
tags: [next,hexo]
categories: [博客]
date: 2021-02-10 15:45:21
rc: 007
---

{% cq %}Next主题使用的内置tag，官方都已经写好js

我们只要根据官方教程调用，就可以实现多样式、多功能的效果。{% endcq %}
<!--more-->

## 设置

```yaml
# 配置文件
# ---------------------------------------------------------------
# Tags Settings
# See: https://theme-next.js.org/docs/tag-plugins/
# ---------------------------------------------------------------

# Note tag (bootstrap callout)
note:
  # Note tag style values:
  #  - simple    bootstrap callout old alert style. Default.
  #  - modern    bootstrap callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: false
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0

# Tabs tag
tabs:
  transition:
  tabs: false
  labels: true

# PDF tag
# NexT will try to load pdf files natively, if failed, pdf.js will be used.
# So, you have to install the dependency of pdf.js if you want to use pdf tag and make it available to all browsers.
# Dependencies: https://github.com/next-theme/theme-next-pdf
pdf:
  enable: false
  # Default height
  height: 500px

# Mermaid tag
mermaid:
  enable: false
  # Available themes: default | dark | forest | neutral
  theme: forest
```

## 使用

看[官方文档](https://theme-next.js.org/docs/tag-plugins/)。

1. ### [Note](https://theme-next.js.org/docs/tag-plugins/note.html)

    #### 配置

    ```
    note:
      # Note tag style values:
      #  - simple    bs-callout old alert style. Default.
      #  - modern    bs-callout new (v2-v3) alert style.
      #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
      #  - disabled  disable all CSS styles import of note tag.
      style: modern
      icons: true
      # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
      # Offset also applied to label tag variables. This option can work with disabled note tag.
      light_bg_offset: 0
    ```

    #### 用法

    ```nginx
    {% note default %}
    ##### Default Header
    Welcome to [Hexo!](https://hexo.io)
    {% endnote %}
    ```

    {% note default %}
    ##### Default Header
    Welcome to [Hexo!](https://hexo.io)
    {% endnote %}

    ```nginx
    {% note primary %}
    ##### Primary Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}
    ```

    {% note primary %}
    ##### Primary Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}

    ```nginx
    {% note info %}
    ##### Info Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}
    ```
    {% note info %}
    ##### Info Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}

    ```nginx
    {% note success %}
    ##### Success Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}
    ```

    {% note success %}
    ##### Success Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}

    ```nginx
    {% note warning %}
    ##### Warning Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}
    ```

    {% note warning %}
    ##### Warning Header
    **Welcome** to [Hexo!](https://hexo.io)
    {% endnote %}

2. ### [Tabs](https://theme-next.js.org/docs/tag-plugins/tabs.html)

    #### 配置

    ```yaml
    tabs:
      transition:
        tabs: false
        labels: true
    ```

    #### 用法

    ```nginx
    {% tabs Unique name, [index] %}
    <!-- tab [Tab caption] [@icon] -->
    Any content (support inline tags too).
    <!-- endtab -->
    {% endtabs %}
    ```

    ```nginx
    {% tabs First unique name %}
    <!-- tab -->
    **This is Tab 1.**
    <!-- endtab -->

    <!-- tab -->
    **This is Tab 2.**
    <!-- endtab -->

    <!-- tab -->
    **This is Tab 3.**
    <!-- endtab -->
    {% endtabs %}
    ```

    {% tabs First unique name %}
    <!-- tab -->
    **This is Tab 1.**
    <!-- endtab -->

    <!-- tab -->
    **This is Tab 2.**
    <!-- endtab -->

    <!-- tab -->
    **This is Tab 3.**
    <!-- endtab -->
    {% endtabs %}

    可以嵌套使用

3. ### [Mermaid](https://theme-next.js.org/docs/tag-plugins/mermaid.html)

    #### 配置

    ```yaml
    # Mermaid tag
    mermaid:
      enable: true
      # Available themes: default | dark | forest | neutral
      theme: forest
    ```

    #### 使用

    ```nginx
    {% mermaid type %}
    {% endmermaid %}
    ```

    ```nginx
    {% mermaid graph TD %}
    A[Hard] -->|Text| B(Round)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]
    {% endmermaid %}
    ```

    ```nginx
    {% mermaid graph TD %}
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me thinksssss<br/>ssssssssssssssssssssss}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
C -->|Three| F[Car]
    {% endmermaid %}
    ```
    
    <p class='div-border red'>有错误，不用</p>
    
4. ### cq && centerquote

    ```nginx
    {% cq %}
    **文本居中**
    引用样式
    cq 与 centerquote 等价
    {% endcq %}
    ```

    {% centerquote %}
    **文本居中**
    引用样式
    cq与centerquote等价
    {% endcenterquote %}

5. ### [Label](https://theme-next.js.org/docs/tag-plugins/label.html)

    ```nginx
    # 内置label标签。
    {% label default@default %}
    {% label primary@primary %}
    {% label success@success %}
    {% label info@info %}
    {% label warning@warning %}
    {% label danger@danger %}
    ```


    <div align="center">
    {% label default@default %}
    {% label primary@primary %}
    {% label success@success %}
    {% label info@info %}
    {% label warning@warning %}
    {% label danger@danger %}
    </div>

6. ### [button && btn](https://theme-next.js.org/docs/tag-plugins/button.html)

    **内置button**标签。btn与button等价。

    ```
    {% btn https://www.baidu.com, 百度首页, download fa-lg fa-fw %}
    ```

    <div align="center">{% btn https://www.baidu.com, 百度首页, download fa-lg fa-fw %}</div>

## 参考文章

* [Next主题优化-内置tags篇](http://pygo2.top/articles/25933/)

* [Tag Plugins](https://theme-next.js.org/docs/tag-plugins/)