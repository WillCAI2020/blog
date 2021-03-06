---
title: Java学习笔记-1
update: ''
top: false
tags: [java,notes]
categories: [编程]
date: 2021-03-06 17:59:18
rc: java1
keywords: java,笔记
---

{% cq %}
Java 学习笔记 一
{%endcq %}
<!--more-->

## JAVA准备

### **JVM、JRE、JDK**

跨平台原理：在需要运行JAVA应用程序的操作系统上，安装一个与操作系统对应的Java虚拟机（JVM-Java Virtual Machine）

* JRE（Java Runtime Environment）

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210113123543142.png" alt="JRE">

* JDK（Java Development Kit）

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210113123659132.png" alt="JDK">

三者关系

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210113123739668.png" alt="三者关系">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210113124227477.png" alt="路径">



### 常用DOS命令

|        操作         |               说明                |
| :-----------------: | :-------------------------------: |
|     `盘符名称:`     | 盘符切换，`E:`回车，表示切换到E盘 |
|        `dir`        |       查看当前路径下的内容        |
|      `cd 目录`      |           进入单级目录            |
|       `cd ..`       |         回退到上一级目录          |
| `cd 目录1\目录2\..` |           进入多级目录            |
|       `cd \`        |          回退到盘符目录           |
|        `cls`        |               清屏                |
|       `exit`        |        退出命令提示符窗口         |

`↑\↓`箭头能在使用过的命令之间进行切换

**当写出首字母后，按`table`键能自动补齐文件名**

### Path环境的配置

`此电脑→属性→高级系统设置→高级→环境变量→系统变量下的新建`

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117150855106.png" alt="环境变量1">

<p class='div-border blue'>
变量名： JAVA_HOME 是自己输入的<br>
变量值可自己通过复制JDK的安装目录粘贴到此<br>
也可以通过浏览目录选择JDK的安装目录<br>
然后选中 Path 变量，编辑<br>
</p>
<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117151221018.png" alt="环境变量2">

新建，输入 `%JAVA_HOME%\bin` ，建议将此行上移至最上行

### JAVA程序开发运行流程

三个步骤：

|   编写程序   |  编译程序   |  运行程序  |
| :----------: | :---------: | :--------: |
| 记事本等工具 | `javac`命令 | `java`命令 |

```java
//HelloWorld.java 示例
public class HelloWorld{
	public static void main(String[] args){
				System.out.println("HelloWorld");
	}
}
```

<p class='div-border blue'>
先进入java程序所在目录<br>
编译JAVA程序：javac 文件名.java<br>
如：javac HelloWorld.java<br>
执行java程序：java 类名<br>
如：java HelloWorld<br>
</p>


### 解决问题

{% note success no-icon%}
BUG：小甲虫
多看
多思考，多查阅资料
多尝试，多总结
养成分析与解决问题的能力
{% endnote %}

{% note primary no-icon%}
常见问题总结：
* 非法字符：一般为中英文状态下的符号问题
* 找不到包、符号等：一般为字符拼写问题
{% endnote %}

## JAVA基础

### 注释

```java
单行注释：
		格式：//注释信息
多行注释：
		格式：/*注释信息*/
文档注释
		格式：/**注释信息*/
```

```java
/*
	类的定义格式
		public class 类名{
		}
*/

//main方法是程序的入口方法，代码的执行是从main方法开始的
```

## 关键字


特点： 
* 字母全部小写
* 常用的代码编辑器，针对关键字有特殊的颜色标记

### 常量

<p class='div-border blue'>
在程序运行过程中，其值不可以发生改变的量
</p>

|  常量类型  |         说明         |          举例           |
| :--------: | :------------------: | :---------------------: |
| 字符串常量 | 用双引号括起来的内容 |      "HelloWorld"       |
|  整数常量  |    不带小数的数字    |        666，-88         |
|  小数常量  |     带小数的数字     |      13.14，-5.21       |
|  字符常量  | 用单引号括起来的内容 |    'A’ ，'o '，'我'     |
|  布尔常量  |   布尔值，表示真假   | 只有两个值：true，false |
|   空常量   |  一个特殊的值，空值  |       值是: null        |

**空常量是不能直接输出的**

### 数据类型

#### 计算机的存储单元

* 位(bit)：1bit可以保存一个0或者1（最小的存储单位）
* 字节(Byte)：1B = 8b
* 千字节(KB)：1KB = 1024B
* 兆字节(MB)：1MB = 1024KB
* 吉字节(GB)：1GB = 1024MB
* 太字节(TB)：1TB = 1024GB
* ...

#### 数据类型分类

<p class='div-border blue'>
java是强类型语言，对每一种数据都给出了明确的数据类型，不同的数据类型也分配了不同的内存空间，所以他们表示的数据大小也是不一样的。
</p >
<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117160323137.png" alt="数据类型分类">

#### 内存占用和取值范围

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117160231901.png" alt="常用数据类型">

### 变量

{% note info no-icon%}
在程序运行过程中，其值可以发生改变的量
本质：内存中的一小块区域
定义：数据类型 变量名 = 变量值
{% endnote %}

#### 注意事项

* 定义的变量名不能重复

* 定义变量时一定要给值

* 定义变量时，给出的整数默认为`int类型`，所以当定义`long类型`时，应当加上`L`（为防止整数过大）
  `如：long l = 100000000L`

* 定义变量时，浮点数默认为`double类型`，所以当定义`float类型`时，应当加上`F`（为防止类型不兼容）

  `如：float f = 13.14F`

### 标识符

{% note info no-icon%}
给类、方法、变量等起名字的符号
{% endnote %}

#### 定义规则

* 由数字、字母、下划线(_)和美元符($)组成
* 不能以数字开头
* 不能是关键字
* 区分大小写

#### 命名约定

##### 小驼峰命名法：方法、变量

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117162013979.png" alt="小驼峰命名法">

##### 大驼峰命名法：类

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117162034708.png" alt="大驼峰命名法">

### 类型转换

#### 自动类型转换

{% note info no-icon%}
把一个表示数据范围小的数值或者变量赋值给另一个表示数据范围大的变量
{% endnote %}

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117162339226.png" alt="自动类型转换">

#### 强制类型转换

{% note info no-icon%}
把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量
格式：目标数据类型 变量名 = (目标数据类型)值或者变量
会有数据的丢失
{% endnote %}

## 运算符

### 算术运算符

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117163046984.png" alt="算术运算符">

#### 字符的"+"操作

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117163447831.png" alt="字符的“+”操作">

#### 字符串的"+"操作

* 当"+"操作中出现字符串时，这个"+"是字符串连接符，而不是算术运算
* 在"+"操作中，如果出现了字符串，就是连接运算符，否则就是算术运算。当连续进行"+"操作时，从左到右依次执行

```java
66 + 600 + "JAVA"
//结果为：666JAVA
```

### 赋值运算符

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117164443869.png" alt="赋值运算符">

```java
//以下两行等价
int i = i + 20;
int i += 20;
//但下面这行将会报错
short s = s + 20;
//在字符的"+"操作中，该表达式由于包含多个数据类型，则short将会提升至int，故而导致类型不兼容
//因做强制类型转换
short s = short(s + 20);
//等价于
short s += 20;
```

### 自增自减运算符

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117165219784.png" alt="自增自减运算符">

### 关系运算符

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117165529950.png" alt="关系运算符">

### 逻辑运算符

#### 基本

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117165742825.png" alt="逻辑运算符">

#### 短路逻辑运算符

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117170323385.png" alt="短路逻辑运算符">

### 三元运算符

```java
格式：关系表达式?表达式1:表达式2;
计算规则：
	首先计算关系表达式的结果
	若为true，表达式1的值就是运算的结果
	若为false，表达式2的值就是运算的结果
```

## 数据输入

### Scanner

```java
//1、导包→导包的动作必须出现在类定义的上边
import java.util.Scanner;
//2、创建对象→只有变量名sc能改变，其它均为固定格式
Scanner sc = new Scanner(System.in);
//3、接收数据→只有变量名i能改变，其它均为固定格式
int i = sc.nextInt();
```

## 分支语句

### 流程控制

* 顺序结构

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117172011271.png" alt="顺序结构">

* 分支结构
* 循环结构

### if语句

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117172212316.png" alt="if语句格式1">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117172244440.png" alt="if语句格式2">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117172405255.png" alt="if语句格式3">

### 数据测试

{% note info no-icon%}
数据测试：正确数据、边界数据、错误数据
{% endnote %}

### switch语句

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117172846901.png" alt="switch语句格式">

{% note primary no-icon%}
若某个case语句后无break语句，则会发生case穿透，即若执行了该case语句，则会一直向下执行(不会判断接下来的case语句)，直至遇到一个break或者整体switch语句结束
{% endnote %}

### for循环语句

#### 循环结构

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117183919135.png" alt="循环结构">

#### 格式

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210117184034359.png" alt="for循环语句格式">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210124120630554.png" alt="任意位上的数值">

### while循环语句

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210124121040161.png" alt="while循环语句格式">

{% note info no-icon%}
知道循环次数，一般for循环
不知道循环次数，一般while循环
{% endnote %}

### do while循环语句

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125160020506.png" alt="do while循环语句格式">

### 三种循环区别

```java
do while循环语句一定会执行一次循环语句
注意局部变量的定义
死循环：
	for(;;){}
	while(true){}
	do{}while(true);
```

### 跳转控制语句

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125160728866.png" alt="跳转控制语句格式">

### 循环嵌套

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125160923811.png" alt="循环嵌套">

### Random：产生随机数

```java
1、导包：
import java.util.Random;
//导包的动作必须出现在类定义的上面
2、创建对象
Random r = new Random();
//其中变量名r可变
3、获取随机数
int number = r.nextInt(10);
//获取随机数的范围：[0,10)
//变量名number可变
```

## IDEA

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125173851422.png" alt="流程">

### 项目结构

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125173945571.png" alt="项目结构">

### 辅助键与快捷键

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125174106657.png" alt="辅助键与快捷键1">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/one/image-20210125174149621.png" alt="辅助键与快捷键2">

{% note info no-icon%}
导包：ctrl+Enter
{% endnote %}

