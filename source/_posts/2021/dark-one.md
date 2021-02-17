---
title: 基于 DarkMode 实现的深色主题
top: false
tags: [hexo,next]
categories: [博客]
date: 2021-02-17 22:51:44
rc: 010
keywords: 深色主题,hexo,next
---

<p class='div-border green'>基于 DarkMode.js 实现 Next 主题的自定义深色模式</p>

<!--more-->

## 概述

上一种方法实现的深色模式不包含 cookies 相关步骤，所以切换页面时无法保存深色配置。于是我搜索 next 自定义深色主题，发现许多文章提到可以通过 darkmode.js 实现，比如此文：[Hexo（Next 主题）实现可切换的 Dark Mode (暗色背景 / 夜间模式)](https://dog.wtf/tech/hexo-dark-mode-note/)。我将其中通过定制 vendors 以加入 darkmode,js 变为直接在自定义 body-end.njk 中引入，最终实现的结果并不如意。于是我前往 DarkMode,js 开源仓库，自己修改了一番，实现了需求。

<a href="https://github.com/sandoche/Darkmode.js" class="LinkCard">Darkmode.js 仓库</a>

下面直接放出实现步骤，最后谈一下如何实现的，权当总结。

## 实现

1. ### 创建 darkmode.js

   首先得引入 darkmode.js ，先在`根目录\source\js`中新建 darkmode.js ，填入以下代码：

   {% fold 点击显/隐代码 %}

   ```javascript
   !(function (e, t) {
     "object" == typeof exports && "object" == typeof module
       ? (module.exports = t())
       : "function" == typeof define && define.amd
       ? define("darkmode-js", [], t)
       : "object" == typeof exports
       ? (exports["darkmode-js"] = t())
       : (e["darkmode-js"] = t());
   })("undefined" != typeof self ? self : this, function () {
     return (function (e) {
       var t = {};
       function n(o) {
         if (t[o]) return t[o].exports;
         var r = (t[o] = { i: o, l: !1, exports: {} });
         return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
       }
       return (
         (n.m = e),
         (n.c = t),
         (n.d = function (e, t, o) {
           n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
         }),
         (n.r = function (e) {
           "undefined" != typeof Symbol &&
             Symbol.toStringTag &&
             Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
             Object.defineProperty(e, "__esModule", { value: !0 });
         }),
         (n.t = function (e, t) {
           if ((1 & t && (e = n(e)), 8 & t)) return e;
           if (4 & t && "object" == typeof e && e && e.__esModule) return e;
           var o = Object.create(null);
           if (
             (n.r(o),
             Object.defineProperty(o, "default", { enumerable: !0, value: e }),
             2 & t && "string" != typeof e)
           )
             for (var r in e)
               n.d(
                 o,
                 r,
                 function (t) {
                   return e[t];
                 }.bind(null, r)
               );
           return o;
         }),
         (n.n = function (e) {
           var t =
             e && e.__esModule
               ? function () {
                   return e.default;
                 }
               : function () {
                   return e;
                 };
           return n.d(t, "a", t), t;
         }),
         (n.o = function (e, t) {
           return Object.prototype.hasOwnProperty.call(e, t);
         }),
         (n.p = ""),
         n((n.s = 0))
       );
     })([
       function (e, t, n) {
         "use strict";
         Object.defineProperty(t, "__esModule", { value: !0 }),
           (t.default = void 0);
         var o = (function (e) {
           if (e && e.__esModule) return e;
           var t = {};
           if (null != e)
             for (var n in e)
               if (Object.prototype.hasOwnProperty.call(e, n)) {
                 var o =
                   Object.defineProperty && Object.getOwnPropertyDescriptor
                     ? Object.getOwnPropertyDescriptor(e, n)
                     : {};
                 o.get || o.set ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
               }
           return (t.default = e), t;
         })(n(1));
         var r = o.default;
         (t.default = r),
           o.IS_BROWSER &&
             (function (e) {
               e.Darkmode = o.default;
             })(window),
           (e.exports = t.default);
       },
       function (e, t, n) {
         "use strict";
         function o(e, t) {
           for (var n = 0; n < t.length; n++) {
             var o = t[n];
             (o.enumerable = o.enumerable || !1),
               (o.configurable = !0),
               "value" in o && (o.writable = !0),
               Object.defineProperty(e, o.key, o);
           }
         }
         Object.defineProperty(t, "__esModule", { value: !0 }),
           (t.default = t.IS_BROWSER = void 0);
         var r = "undefined" != typeof window;
         t.IS_BROWSER = r;
         var a = (function () {
           function e(t) {
             if (
               ((function (e, t) {
                 if (!(e instanceof t))
                   throw new TypeError("Cannot call a class as a function");
               })(this, e),
               r)
             ) {
               t = Object.assign(
                 {},
                 {
                   bottom: "32px",
                   right: "32px",
                   left: "unset",
                   time: "0.3s",
                   buttonColorDark: "#100f2c",
                   buttonColorLight: "#fff",
                   label: "",
                   saveInCookies: !0,
                   autoMatchOsTheme: !0,
                 },
                 t
               );
               var n = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: "
                   
                   .concat(
                     t.time,
                     " ease;\n              }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: "
                   )
                   .concat(t.right, ";\n        bottom: ")
                   .concat(t.bottom, ";\n        left: ")
                   .concat(
                     t.left,
                     ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: "
                   )
                   .concat(
                     t.buttonColorDark,
                     ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: "
                   )
                   .concat(t.right, ";\n        bottom: ")
                   .concat(t.bottom, ";\n        left: ")
                   .concat(
                     t.left,
                     ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: "
                   )
                   .concat(
                     t.buttonColorLight,
                     ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: "
                   ),
                 o = document.createElement("div"),
                 a = document.createElement("button"),
                 i = document.createElement("div");
               (a.innerHTML = t.label),
                 a.classList.add("darkmode-toggle--inactive"),
                 o.classList.add("darkmode-layer"),
                 i.classList.add("darkmode-background");
               var d = "true" === window.localStorage.getItem("darkmode"),
                 s =
                   t.autoMatchOsTheme &&
                   window.matchMedia("(prefers-color-scheme: dark)").matches,
                 l = null === window.localStorage.getItem("darkmode");
               ((!0 === d && t.saveInCookies) || (l && s)) &&
                 (o.classList.add(
                   "darkmode-layer--expanded",
                   "darkmode-layer--simple",
                   "darkmode-layer--no-transition"
                 ),
                 a.classList.add("darkmode-toggle--white"),
                 document.body.classList.add("darkmode--activated")),
                 document.body.insertBefore(a, document.body.firstChild),
                 document.body.insertBefore(o, document.body.firstChild),
                 document.body.insertBefore(i, document.body.firstChild),
                 this.addStyle(n),
                 (this.button = a),
                 (this.layer = o),
                 (this.saveInCookies = t.saveInCookies),
                 (this.time = t.time);
             }
           }
           var t, n, a;
           return (
             (t = e),
             (n = [
               {
                 key: "addStyle",
                 value: function (e) {
                   var t = document.createElement("link");
                   t.setAttribute("rel", "stylesheet"),
                     t.setAttribute("type", "text/css"),
                     t.setAttribute(
                       "href",
                       "data:text/css;charset=UTF-8," + encodeURIComponent(e)
                     ),
                     document.head.appendChild(t);
                 },
               },
               {
                 key: "showWidget",
                 value: function () {
                   var e = this;
                   if (r) {
                     var t = this.button,
                       n = this.layer,
                       o = 1e3 * parseFloat(this.time);
                     t.classList.add("darkmode-toggle"),
                       t.classList.remove("darkmode-toggle--inactive"),
                       t.setAttribute("aria-label", "Activate dark mode"),
                       t.setAttribute("aria-checked", "false"),
                       t.setAttribute("role", "checkbox"),
                       n.classList.add("darkmode-layer--button"),
                       t.addEventListener("click", function () {
                         var r = e.isActivated();
                         r
                           ? (n.classList.remove("darkmode-layer--simple"),
                             t.setAttribute("disabled", !0),
                             setTimeout(function () {
                               n.classList.remove("darkmode-layer--no-transition"),
                                 n.classList.remove("darkmode-layer--expanded"),
                                 t.removeAttribute("disabled");
                             }, 1))
                           : (n.classList.add("darkmode-layer--expanded"),
                             t.setAttribute("disabled", !0),
                             setTimeout(function () {
                               n.classList.add("darkmode-layer--no-transition"),
                                 n.classList.add("darkmode-layer--simple"),
                                 t.removeAttribute("disabled");
                             }, o)),
                           t.classList.toggle("darkmode-toggle--white"),
                           document.body.classList.toggle("darkmode--activated"),
                           window.localStorage.setItem("darkmode", !r);
                       });
                   }
                 },
               },
               {
                 key: "toggle",
                 value: function () {
                   if (r) {
                     var e = this.layer,
                       t = this.isActivated(),
                       n = this.button;
                     e.classList.toggle("darkmode-layer--simple"),
                       document.body.classList.toggle("darkmode--activated"),
                       window.localStorage.setItem("darkmode", !t),
                       n.setAttribute("aria-label", "De-activate dark mode"),
                       n.setAttribute("aria-checked", "true");
                   }
                 },
               },
               {
                 key: "isActivated",
                 value: function () {
                   return r
                     ? document.body.classList.contains("darkmode--activated")
                     : null;
                 },
               },
             ]) && o(t.prototype, n),
             a && o(t, a),
             e
           );
         })();
         t.default = a;
       },
     ]);
   });
   ```

   {% endfold %}

   <p class='div-border yellow'>此 darkmode.js 是我基于原版 darkmode.js，加上自己对文件内容浅显的理解，最后经过实践改动了一小部分所得的成品</p>

2. ### 引入 darkmode.js

    然后在根目录`\source\_data\body-end.njk`加入以下代码以引入 darkmode.js：

   ```nginx
   {%- if theme.darkmode_js.enable %}
     <script src="/js/darkmode.js"></script>
   {%- endif %}
   ```

3. ### 调用

   最后在同一个文件（`\source\_data\body-end.njk`）中加入以下代码来配置相应的参数并调用 js 中的函数：

   ```nginx
   {%- if theme.darkmode_js.enable %}
   <script>
   var options = {
     bottom: '64px', // default: '32px'
     right: '32px', // default: '32px'
     left: 'unset', // default: 'unset'
     time: '0.5s', // default: '0.3s'
     buttonColorDark: '#100f2c',  // default: '#100f2c'
     buttonColorLight: '#fff', // default: '#fff'
     saveInCookies: true, // default: true,
     label: '🌓', // default: ''
     autoMatchOsTheme: true // default: true
   }
   const darkmode = new Darkmode(options);
   darkmode.showWidget();
   </script>
   {%- endif %}
   ```

4. ### 自定义深色样式

   当你做完上述步骤，预览界面是将能在页面左下角看到切换按钮'🌓'。点击这个按钮后，页面中 body 元素将加上类 darkmode--activated，故而深色模式下许多元素样式我们将能利用类 darkmode--activated 来自己定义（纯为 css 内容）。

   修改样式自然与 next 全能的自定义样式文件 styles.styl 有关啦，你可以直接在其中加入属于你自己的样式。

	下面贴出对我来说比较适合的深色模式配置，权当参考：

	{% fold 点击显/隐代码 %}
	
	```css
	//修改darkmode.js样式
	.darkmode--activated {
	  background: #000 !important;	/* 去除mix-blend-mode实现背景 */
	}
	/*主体 main-inner */
	.darkmode--activated .main-inner{
	  background: rgba(40,44,52,0.5);	/*区分阴影度*/
	}
	/* 文章块 post-block */
	.darkmode--activated .post-block{
	  opacity: 1;
	  background: #282c34;				/*背景颜色*/
	  color: #92fbfb;					/*文字颜色*/
	}
	/* 页脚 */
	.darkmode--activated .footer{
	  color: #92fbfb;					/*页脚颜色*/
	}
	/* 文章尾部上下文 */
	.darkmode--activated .post-nav-item a{
	  color: #92fbfb;					/*上下文颜色*/
	  &:hover {
	    color: #FFD700;					/* 移动至所显现颜色*/
	  }
	}
	
	/* header上部的下部 */
	.darkmode--activated .main-menu{
	  background: #282c34;				/*header上部分颜色*/
	  border-radius: 0 0 $myradius $myradius;	/*设置圆角*/
	}
	.darkmode--activated .menu-item a{
	  &:hover {
		border-radius: $myradius;
	    background: #382d2d;			/* 移动至所显现颜色*/
		color: aqua;
	  }
	}
	.darkmode--activated a.menu-item-active{
		border-radius: $myradius;
	    background: #382d2d;			/* 选中时显现颜色*/
	}
	
	/* 设置 brand 背景 */
	.darkmode--activated .site-brand-container{
	  background: url(https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/header-bg1.jpg);
	  background-repeat: repeat;
	  background-position: 70% 20%;
	  background-size: cover;
	}
	/* 设置header下部 */
	.darkmode--activated .sidebar-inner{
		background: #282c34;
	}
	.darkmode--activated .site-state-item a{
	  &:hover {
		color: aqua;
	  }
	}
	.darkmode--activated .links-of-author-item a{
	  &:hover {
		background: #382d2d;
		color: aqua;
	  }
	}
	
	/* 设置二级标题 */
	.darkmode--activated  .sub-menu{
	  background: #282c34;
	}
	
	/* 搜索页面背景颜色 */
	.darkmode--activated  .search-header,
	.darkmode--activated  .search-result-container{
	  background: #282c34 !important;
	}
	
	/* 搜索页面字体颜色 */
	.darkmode--activated  .search-input,
	.darkmode--activated  .search-result-container,
	.darkmode--activated  .search-result-list a{
	  color: white;
	}
	/* 搜索页面鼠标划入变化 */
	.darkmode--activated  .search-result-list a{
	  border-bottom: 1px solid white;
	  &:hover {
		color: aqua;
		border-bottom: 1px solid aqua;
	  } 
	}
	/* live2d 文字颜色 */
	.darkmode--activated  #waifu-tips{
	  color: white;
	}
	.darkmode--activated  #waifu-tips span{
	  color: purple;
	}
	/* 设置post-meta超链接 */
	.darkmode--activated .post-meta-item a{
	  color: #4169E1;
	  border-bottom: none;
	  border-bottom: 1px solid #0593d3;
	  &:hover {
	    color: #FFD700;
	    border-bottom: none;
	    border-bottom: 1px solid #fc6423;
	  }
	}
	
	.darkmode--activated  .comments{
	  background: #282c34;
	}
	.darkmode--activated  a.vlogin-btn,
	.darkmode--activated  .vnick,
	.darkmode--activated  .vmail,
	.darkmode--activated  .vlink,
	.darkmode--activated  .vmail,
	.darkmode--activated  .veditor,
	.darkmode--activated  .vinput p,
	.darkmode--activated  .vinput h1,
	.darkmode--activated  .vinput h2,
	.darkmode--activated  .vinput h3{
		color: #92fbfb !important
	}
	.darkmode--activated  a.vlogin-btn{
	  &:hover {
	    color: #FFD700 !important;
	  }
	}
	```
	
	{% endfold %}
	
	以上样式是我通过 F12，按照自己的审美观配置出的。由于我对 CSS 并未有太深入的了解，所以代码写的比较简陋，对我来说，完成网页深色模式的适配无非就是哪里不喜欢改哪里（网页的美化也就是这样）。



## 历程

最后叙述一下历程。（PS：单纯的记录一下自己愚蠢的历程而已😶）

因对上一种无法保存已选的模式的深色切换功能不满，我便找寻各种教程。于是很快遇上并应用了 darkmode.js。实现后发下页面很多地方颜色很怪异，于是我前往 body-end.njk 中修改默认配置（见[官方仓库](https://github.com/sandoche/Darkmode.js)）。当我修改 mixColor 这个参数后，发现页面怪异颜色也在变化，于是认定是 mixColor 的原因。

页面的样式由 css 控制，而 body-end.njk 中没有，那么相应的样式肯定放在另一个新导入的文件 darkmode.js 中，打开原版文件（此 darkmode.js 是我格式化官方 darkmode-js.min.js 所得到的），全局搜索 mixColor。

{% fold 点击显/隐代码 %}

```javascript
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("darkmode-js", [], t)
    : "object" == typeof exports
    ? (exports["darkmode-js"] = t())
    : (e["darkmode-js"] = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var o =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              o.get || o.set ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(1));
      var r = o.default;
      (t.default = r),
        o.IS_BROWSER &&
          (function (e) {
            e.Darkmode = o.default;
          })(window),
        (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.IS_BROWSER = void 0);
      var r = "undefined" != typeof window;
      t.IS_BROWSER = r;
      var a = (function () {
        function e(t) {
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            r)
          ) {
            t = Object.assign(
              {},
              {
                bottom: "32px",
                right: "32px",
                left: "unset",
                time: "0.3s",
                mixColor: "#fff",
                backgroundColor: "#fff",
                buttonColorDark: "#100f2c",
                buttonColorLight: "#fff",
                label: "",
                saveInCookies: !0,
                autoMatchOsTheme: !0,
              },
              t
            );
            var n = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: "
                .concat(t.mixColor, ";\n        transition: all ")
                .concat(
                  t.time,
                  " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: "
                )
                .concat(t.right, ";\n        bottom: ")
                .concat(t.bottom, ";\n        left: ")
                .concat(
                  t.left,
                  ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: "
                )
                .concat(
                  t.buttonColorDark,
                  ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: "
                )
                .concat(t.right, ";\n        bottom: ")
                .concat(t.bottom, ";\n        left: ")
                .concat(
                  t.left,
                  ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: "
                )
                .concat(
                  t.buttonColorLight,
                  ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: "
                )
                .concat(
                  t.backgroundColor,
                  ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    "
                ),
              o = document.createElement("div"),
              a = document.createElement("button"),
              i = document.createElement("div");
            (a.innerHTML = t.label),
              a.classList.add("darkmode-toggle--inactive"),
              o.classList.add("darkmode-layer"),
              i.classList.add("darkmode-background");
            var d = "true" === window.localStorage.getItem("darkmode"),
              s =
                t.autoMatchOsTheme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches,
              l = null === window.localStorage.getItem("darkmode");
            ((!0 === d && t.saveInCookies) || (l && s)) &&
              (o.classList.add(
                "darkmode-layer--expanded",
                "darkmode-layer--simple",
                "darkmode-layer--no-transition"
              ),
              a.classList.add("darkmode-toggle--white"),
              document.body.classList.add("darkmode--activated")),
              document.body.insertBefore(a, document.body.firstChild),
              document.body.insertBefore(o, document.body.firstChild),
              document.body.insertBefore(i, document.body.firstChild),
              this.addStyle(n),
              (this.button = a),
              (this.layer = o),
              (this.saveInCookies = t.saveInCookies),
              (this.time = t.time);
          }
        }
        var t, n, a;
        return (
          (t = e),
          (n = [
            {
              key: "addStyle",
              value: function (e) {
                var t = document.createElement("link");
                t.setAttribute("rel", "stylesheet"),
                  t.setAttribute("type", "text/css"),
                  t.setAttribute(
                    "href",
                    "data:text/css;charset=UTF-8," + encodeURIComponent(e)
                  ),
                  document.head.appendChild(t);
              },
            },
            {
              key: "showWidget",
              value: function () {
                var e = this;
                if (r) {
                  var t = this.button,
                    n = this.layer,
                    o = 1e3 * parseFloat(this.time);
                  t.classList.add("darkmode-toggle"),
                    t.classList.remove("darkmode-toggle--inactive"),
                    t.setAttribute("aria-label", "Activate dark mode"),
                    t.setAttribute("aria-checked", "false"),
                    t.setAttribute("role", "checkbox"),
                    n.classList.add("darkmode-layer--button"),
                    t.addEventListener("click", function () {
                      var r = e.isActivated();
                      r
                        ? (n.classList.remove("darkmode-layer--simple"),
                          t.setAttribute("disabled", !0),
                          setTimeout(function () {
                            n.classList.remove("darkmode-layer--no-transition"),
                              n.classList.remove("darkmode-layer--expanded"),
                              t.removeAttribute("disabled");
                          }, 1))
                        : (n.classList.add("darkmode-layer--expanded"),
                          t.setAttribute("disabled", !0),
                          setTimeout(function () {
                            n.classList.add("darkmode-layer--no-transition"),
                              n.classList.add("darkmode-layer--simple"),
                              t.removeAttribute("disabled");
                          }, o)),
                        t.classList.toggle("darkmode-toggle--white"),
                        document.body.classList.toggle("darkmode--activated"),
                        window.localStorage.setItem("darkmode", !r);
                    });
                }
              },
            },
            {
              key: "toggle",
              value: function () {
                if (r) {
                  var e = this.layer,
                    t = this.isActivated(),
                    n = this.button;
                  e.classList.toggle("darkmode-layer--simple"),
                    document.body.classList.toggle("darkmode--activated"),
                    window.localStorage.setItem("darkmode", !t),
                    n.setAttribute("aria-label", "De-activate dark mode"),
                    n.setAttribute("aria-checked", "true");
                }
              },
            },
            {
              key: "isActivated",
              value: function () {
                return r
                  ? document.body.classList.contains("darkmode--activated")
                  : null;
              },
            },
          ]) && o(t.prototype, n),
          a && o(t, a),
          e
        );
      })();
      t.default = a;
    },
  ]);
});
```

{% endfold  %}

很容易找到 116 行开始的参数以及样式配置。其中有许多属性并不认识，全文就出现两次 mixColor，一次是参数赋值，另一次是 t.mixColor，于是猜测与 t 有关，同时搜索与 mix 有关词眼，发现了就出现三次，两次为 mixColor，还有一次 mix-blend-mode，我见其写法像 css 属性，于是搜索了解到[该属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。我在 PS 中见过以差值方式混合颜色，故而也大概明白了页面出现怪异颜色的原因。

接着我想到能否不用这么高深的方法实现深色，简单点用 css 换颜色就行了。于是我尝试删去 mix 有关语句，经过数次试验后，预览终于不报错。接着再想如何利用深色模式下的选择器实现点击按钮换颜色。仔细浏览官方说明，发现这一条关于覆盖样式的说明：[Override style](https://github.com/sandoche/Darkmode.js#override-style)。其中讲到：

{% note info no-icon %}
* A CSS class darkmode--activated is added to the body tag when the darkmode is activated. You can take advantage of it to override the style and have a custom style

* Use the class darkmode-ignore where you don't want to apply darkmode

* You can also add this style: isolation: isolate; in your CSS, this will also ignore the darkmode.

* It is also possible to revert the Dark Mode with this style mix-blend-mode: difference;

{% endnote %}

第一句话很明显告知我们该如何自定义样式，于是解决问题。

深入浏览官方文档发现很多问题都豁然开朗，官方文档算是最权威的教程！

以及接下来适配各种元素的样式，更是让我对 F12 更加熟练，对各种属性也更加清晰。

上述经历是一种成长，在此叙述以留念🙃。



<video>
<source src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/videos/method.mp4">
</video>