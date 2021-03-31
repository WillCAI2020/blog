---
title: Java学习笔记-3
update: ''
top: false
tags: [java,notes]
categories: [编程]
date: 2021-03-09 23:07:55
rc: java3
keywords: java,笔记
---

{% cq %}
Java 学习笔记 三
{%endcq %}
<!--more-->

## API

### 概述

* 什么是API
  * API (Application Programming Interface) ：应用程序编程接口
* Java中的API
  * 指的就是 JDK 中提供的各种功能的 Java类，这些类将底层的实现封装了起来，我们不需要关心这些类是如何实现的，**只需要学习这些类如何使用**即可，我们可以通过帮助文档来学习这些API如何使用。

### 使用帮助文档

#### 索引

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231402.png" alt="索引">

#### 查询所在包

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231442.png" alt="查询所在包">

{% note primary no-icon%}
需要导包 java.util.Random()
java.lang.Object 则不需要
{% endnote %}

#### 看类的描述

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231630.png" alt="描述">

#### 看构造方法

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231640.png" alt="构造方法">

#### 看成员方法

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231652.png" alt="成员方法">

## 例子：Scanner

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231706.png" alt="Scanner-所在包">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210309231803.png" alt="Scanner-描述">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210310001113.png" alt="Scanner-成员方法">

```java
import java.util.Scanner
...
Scanner sc = new Scanner(System.in);	//构造方法
String line = sc.nextLine();		//成员方法
```


|   成员方法   |          功能          |
| :----------: | :--------------------: |
|  nextInt()   |  读入一个整数（int）   |
| nextDouble() | 读入一个实数（double） |
|    next()    | 读入一个单词（String） |
|  nextLine()  |   读入一行（String）   |

{% note success no-icon%}
调用成员方法时，先写方法，再用ctrl+alt+v，会自动给出返回类型与变量名
{% endnote %}

## 字符串

### String

#### 概述

String 类代表字符串，Java 程序中的所有字符串文字（例如“abc”）都被实现为此类的实例。也就是说，Java 程序中所有的双引号字符串，都是 String 类的对象。

{% note primary no-icon%}
String 类在 java.lang 包下，所以使用的时候不需要导包！
{% endnote %}

#### 特点

* 字符串不可变，它们的值在创建后不能被更改
* 内容不可变，指的是每次有新的内容时会有新的地址，与StringBuilder不同
* 虽然 String 的值是不可变的，但是它们可以被共享
* 字符串效果上相当于字符数组( char[] )，但是底层原理是字节数组( byte[] )
* JDK8以前是字符数组，JDK9及以后是字节数组

#### 构造方法

|          方法名           |                   说明                    |
| :-----------------------: | :---------------------------------------: |
|      public String()      |  创建一个空白字符串对象，不含有任何内容   |
| public String(char[] chs) |   根据字符数组的内容，来创建字符串对象    |
| public String(byte[] bys) |   根据字节数组的内容，来创建字符串对象    |
|     String s = “abc”;     | 直接赋值的方式创建字符串对象，内容就是abc |

{% fold 点击显/隐代码 %}
```java
public class StringDemo01 {
	public static void main(String[] args) {
		//public String()：创建一个空白字符串对象，不含有任何内容
		String s1 = new String();
		System.out.println("s1:" + s1);
		
		//public String(char[] chs)：根据字符数组的内容，来创建字符串对象
		char[] chs = {'a', 'b', 'c'};
		String s2 = new String(chs);
		System.out.println("s2:" + s2);
		
		//public String(byte[] bys)：根据字节数组的内容，来创建字符串对象
		byte[] bys = {97, 98, 99};	//97,98,99对应分别为a,b,c
		String s3 = new String(bys);
		System.out.println("s3:" + s3);
		
		//String s = “abc”; 直接赋值的方式创建字符串对象，内容就是abc
		String s4 = "abc";
		System.out.println("s4:" + s4);
	}
}

/*
运行结果：
s1:
s2:abc
s3:abc
s4:abc
*/
```
{% endfold %}

{% note success no-icon%}
推荐直接赋值的方式使用String类
{% endnote %}

#### String对象

##### 特点

* 通过 new 创建的字符串对象，每一次 new 都会申请一个内存空间，虽然内容相同，但是地址值不同
* 以`“”`方式给出的字符串，只要字符序列相同(顺序和大小写)，无论在程序代码中出现几次，JVM 都**只会建立一 个 String 对象**，并在字符串池中维护

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210310004053.png" alt="String-内存图">

#### 字符串的比较

* ==号比较
  * 比较基本数据类型：比较的是具体的值
  * 比较引用数据类型：比较的是对象地址值

{% note primary no-icon%}
字符串是对象，比较内容是否相同，是通过一个方法实现的，方法为：equals()

public boolean equals(String s) 比较两个字符串内容是否相同、区分大小写
{% endnote %}

#### 遍历字符串

```java
public char charAt(int index)：返回指定索引处的char值，字符串的索引也是从0开始的
public int length()：返回此字符串的长度
```
{% note primary no-icon%}
数组的长度：数组名.length
字符串的长度：字符串对象.length()
{% endnote %}

{% fold 点击显/隐代码 %}
```java
//通用格式
public class StringTest02 {
	public static void main(String[] args) {
		//键盘录入一个字符串，用 Scanner 实现
		Scanner sc = new Scanner(System.in);
		
		System.out.println("请输入一个字符串：");
		String line = sc.nextLine();
		
		for(int i=0; i<line.length(); i++) {
			System.out.println(line.charAt(i));
		}
	}
}
```
{% endfold %}

#### 字符串拼接

{% note info no-icon%}
定义一个方法，把 int 数组中的数据按照指定的格式拼接成一个字符串返回，调用该方法，并在控制台输出结果。例如，数组为 int[] arr = {1,2,3}; ，执行方法后的输出结果为：[1, 2, 3]
{% endnote %}

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:定义一个 int 类型的数组，用静态初始化完成数组元素的初始化
		2:定义一个方法，用于把 int 数组中的数据按照指定格式拼接成一个字符串返回。
返回值类型 String，参数列表 int[] arr
		3:在方法中遍历数组，按照要求进行拼接
		4:调用方法，用一个变量接收结果
		5:输出结果
*/
public class StringTest04 {
	public static void main(String[] args) {
		//定义一个 int 类型的数组，用静态初始化完成数组元素的初始化
		int[] arr = {1, 2, 3};
		
		//调用方法，用一个变量接收结果
		String s = arrayToString(arr);
		
		//输出结果
		System.out.println("s:" + s);
	}
	//定义一个方法，用于把 int 数组中的数据按照指定格式拼接成一个字符串返回
	/*
		两个明确：
		返回值类型：String
		参数：int[] arr
	*/
	public static String arrayToString(int[] arr) {
		//在方法中遍历数组，按照要求进行拼接
		String s = "";
		
		s += "[";
		
		for(int i=0; i<arr.length; i++) {
			if(i==arr.length-1) {
				s += arr[i];
			} else {
				s += arr[i];
				s += ", ";
			}
		}
		s += "]";
		return s;
	}
}
```
{% endfold %}

#### 帮助文档

|                 方法名                 |                      说明                      |
| :------------------------------------: | :--------------------------------------------: |
| public boolean equals(Object anObject) | 比较字符串的内容，严格区分大小写(用户名和密码) |
|     public char charAt(int index)      |            返回指定索引处的 char 值            |
|          public int length()           |               返回此字符串的长度               |
| public String  substring​(int beginIndex, int endIndex) | 返回一个字符串(两个索引值之间的部分)，该字符串是此字符串的子字符串。 |
### StringBuilder

#### 概述

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210310002352.png" alt="StringBuilder-内存图">


如果对字符串进行拼接操作，**每次拼接，都会构建一个新的String对象**，既耗时，又浪费内存空间，而这种操作还不可避免。那么有没有一种比较好的方式可以解决这个问题呢？答案是肯定的，我们可以通过Java提供的StringBuilder类就来解决这个问题。

{% note info no-icon%}
StringBuilder 是一个可变的字符串类，我们可以把它看成是一个容器
这里的可变指的是 StringBuilder 对象中的内容是可变的
{% endnote %}

StringBuilder类和String类的区别
* String类：内容是不可变的
* StringBuilder类：内容是可变的

####  构造方法

|              方法名              |                    说明                    |
| :------------------------------: | :----------------------------------------: |
|      public StringBuilder()      | 创建一个空白可变字符串对象，不含有任何内容 |
| public StringBuilder(String str) |   根据字符串的内容，来创建可变字符串对象   |

#### 添加和反转方法

|                方法名                 |           说明           |
| :-----------------------------------: | :----------------------: |
| public StringBuilder append(任意类型) | 添加数据，并返回对象本身 |
|    public StringBuilder reverse()     |    返回相反的字符序列    |

```java
//链式编程
sb.append("hello").append("world").append("java").append(100);
得到的对象地址都是一样的
```

#### StringBuilder和String相互转换

* StringBuilder转换为String

  * public String toString()：通过 toString() 就可以实现把 StringBuilder 转换为 String

  ```java
  StringBuilder sb = new StringBuilder();
  //String s = sb; //这个是错误的做法
  //public String toString()：通过 toString() 就可以实现把 StringBuilder 转换为String
  String s = sb.toString();
  ```

* String转换为StringBuilder

  * public StringBuilder(String s)：通过构造方法就可以实现把 String 转换为 StringBuilder

  ```java
  String s = "hello";
  //StringBuilder sb = s; //这个是错误的做法
  //public StringBuilder(String s)：通过构造方法就可以实现把 String 转换为StringBuilder
  StringBuilder sb = new StringBuilder(s);
  ```

#### 字符串拼接

{% fold 点击显/隐代码 %}
```
/*
	思路：
		1:定义一个 int 类型的数组，用静态初始化完成数组元素的初始化
		2:定义一个方法，用于把 int 数组中的数据按照指定格式拼接成一个字符串返回。
返回值类型 String，参数列表 int[] arr
		3:在方法中用 StringBuilder 按照要求进行拼接，并把结果转成 String 返回
		4:调用方法，用一个变量接收结果
		5:输出结果
*/
public class StringBuilderTest01 {
	public static void main(String[] args) {
		//定义一个 int 类型的数组，用静态初始化完成数组元素的初始化
		int[] arr = {1, 2, 3};
		
		//调用方法，用一个变量接收结果
		String s = arrayToString(arr);
		
		//输出结果
		System.out.println("s:" + s);
	}
//定义一个方法，用于把 int 数组中的数据按照指定格式拼接成一个字符串返回
/*
两个明确：
返回值类型：String
参数：int[] arr
*/

	public static String arrayToString(int[] arr) {
	//在方法中用 StringBuilder 按照要求进行拼接，并把结果转成 String 返回
	StringBuilder sb = new StringBuilder();
	
	sb.append("[");
	
	for(int i=0; i<arr.length; i++) {
		if(i == arr.length-1) {
			sb.append(arr[i]);
		} else {
			sb.append(arr[i]).append(", ");
		}
	}
	
	sb.append("]");
	
	String s = sb.toString();
	
	return s;
	}
}
```
{% endfold %}

#### 字符串反转

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:键盘录入一个字符串，用 Scanner 实现
		2:定义一个方法，实现字符串反转。返回值类型 String，参数 String s
		3:在方法中用StringBuilder实现字符串的反转，并把结果转成String返回
		4:调用方法，用一个变量接收结果
		5:输出结果
*/
public class StringBuilderTest02 {
	public static void main(String[] args) {
		//键盘录入一个字符串，用 Scanner 实现
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入一个字符串：");
		String line = sc.nextLine();
		
		//调用方法，用一个变量接收结果
		String s = myReverse(line);
		
		//输出结果
		System.out.println("s:" + s);
}
	//定义一个方法，实现字符串反转。返回值类型 String，参数 String s
	/*
		两个明确：
			返回值类型：String
			参数：String s
	*/
	public static String myReverse(String s) {
	//在方法中用StringBuilder实现字符串的反转，并把结果转成String返回
	//String --- StringBuilder --- reverse() --- String
	// StringBuilder sb = new StringBuilder(s);
	// sb.reverse();
	// String ss = sb.toString();
	// return ss;
	return new StringBuilder(s).reverse().toString();
	}
}
```
{% endfold %}

```java
匿名对象：new StringBuilder(s).reverse().toString();
```

#### 帮助文档

|                 方法名                 |                        说明                         |
| :------------------------------------: | :-------------------------------------------------: |
| public StringBuilder append (任意类型) |              添加数据，并返回对象本身               |
|     public StringBuilder reverse()     |                 返回相反的字符序列                  |
|          public int length()           |                返回长度，实际存储值                 |
|        public String toString()        | 通过toString()就可以实现把StringBuilder转换为String |

## 集合基础

### 概述

编程的时候如果要存储多个数据，使用长度固定的数组存储格式，不一定满足我们的需求，更适应不了变化的需求，那么，此时该如何选择呢？

{% note success no-icon%}
集合类：提供一种存储空间可变的存储模型，存储的数据容量可以发生改变
代表：ArrayList类
{% endnote %}

### ArrayList类

ArrayList&lt;E&gt;：

* 可调整大小的数组实现
* &lt;E&gt;：是一种特殊的数据类型，泛型

{% note info no-icon%}
在出现E的地方使用引用数据类型替换即可
如：ArrayList<String>,ArrayList<Student>

泛型：用于约束集合中存储元素的数据类型
{% endnote %}

{% note primary no-icon%}
底层是数组实现的，长度可以变化
需要导包java.util.ArrayList
{% endnote %}

#### 构造方法

|       方法名       |         说明         |
| :----------------: | :------------------: |
| public ArrayList() | 创建一个空的集合对象 |

#### 成员方法

|                方法名                |                  说明                  |
| :----------------------------------: | :------------------------------------: |
|   public boolean remove(Object o)    |    删除指定的元素，返回删除是否成功    |
|      public E remove(int index)      | 删除指定索引处的元素，返回被删除的元素 |
|  public E set(int index,E element)   | 修改指定索引处的元素，返回被修改的元素 |
|       public E get(int index)        |          返回指定索引处的元素          |
|          public int size()           |         返回集合中的元素的个数         |
|       public boolean add(E e)        |     将指定的元素追加到此集合的末尾     |
| public void add(int index,E element) |   在此集合中的指定位置插入指定的元素   |

#### 案例

```java
//public ArrayList(),创建一个空的集合对象
ArrayList<String> array = new ArrayList<>();
//这中写法后面省略的泛型可以由前面推断出来（JDK7以后的特性）
//或者
ArrayList<String> array = new ArrayList<String>();

//当集合为空时，即无元素，集合的内容为[]；
//可以通过添加方法添加集合元素：
public boolean add(E e)               /*将指定的元素追加到此集合的末尾*/
public void add(int index,E element)  /*在此集合中的指定位置插入指定的元素*/
```

{% fold 点击显/隐代码 %}
```java
public class ArrayListDemo02 {
	public static void main(String[] args) {
	//创建集合
	ArrayList<String> array = new ArrayList<String>();
	
	//添加元素
	array.add("hello");
	array.add("world");
	array.add("java");
	
	//public boolean remove(Object o)：删除指定的元素，返回删除是否成功
	// System.out.println(array.remove("world"));
	// System.out.println(array.remove("javaee"));
	
	//public E remove(int index)：删除指定索引处的元素，返回被删除的元素
	// System.out.println(array.remove(1));
	
	//IndexOutOfBoundsException（索引越界）
	// System.out.println(array.remove(3));
	
	//public E set(int index,E element)：修改指定索引处的元素，返回被修改的元素
	// System.out.println(array.set(1,"javaee"));
	
	//IndexOutOfBoundsException（索引越界）
	// System.out.println(array.set(3,"javaee"));
	
	//public E get(int index)：返回指定索引处的元素
	// System.out.println(array.get(0));
	// System.out.println(array.get(1));
	// System.out.println(array.get(2));
	//System.out.println(array.get(3)); //？？？？？？ 自己测试
	
	//public int size()：返回集合中的元素的个数
	System.out.println(array.size());
	
	//输出集合
	System.out.println("array:" + array);
	}
}
```
{% endfold %}

##### 遍历

```java
//遍历集合的通用格式
for(int i=0; i<array.size(); i++) {
	String s = array.get(i);
	System.out.println(s);
}
```

##### 存储学生对象并遍历

###### 1

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:定义学生类
		2:创建集合对象
		3:创建学生对象
		4:添加学生对象到集合中
		5:遍历集合，采用通用遍历格式实现
*/

public class ArrayListTest02 {
	public static void main(String[] args) {
		//创建集合对象
		ArrayList<Student> array = new ArrayList<>();
		
		//创建学生对象
		Student s1 = new Student("林青霞", 30);
		Student s2 = new Student("风清扬", 33);
		Student s3 = new Student("张曼玉", 18);
		
		//添加学生对象到集合中
		array.add(s1);
		array.add(s2);
		array.add(s3);
		
		//遍历集合，采用通用遍历格式实现
		for (int i = 0; i < array.size(); i++) {
		Student s = array.get(i);
		System.out.println(s.getName() + "," + s.getAge());
		}
	}
}
```
{% endfold %}

###### 2

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:定义学生类，为了键盘录入数据方便，把学生类中的成员变量都定义为String类型
		2:创建集合对象
		3:键盘录入学生对象所需要的数据
		4:创建学生对象，把键盘录入的数据赋值给学生对象的成员变量
		5:往集合中添加学生对象
		6:遍历集合，采用通用遍历格式实现
*/

public class ArrayListTest {
	public static void main(String[] args) {
	//创建集合对象
	ArrayList<Student> array = new ArrayList<Student>();
	
	//为了提高代码的复用性，我们用方法来改进程序
	addStudent(array);
	addStudent(array);
	addStudent(array);
	
	//遍历集合，采用通用遍历格式实现
	for (int i = 0; i < array.size(); i++) {
		Student s = array.get(i);
		System.out.println(s.getName() + "," + s.getAge());
	}
}
/*
	两个明确：
		返回值类型：void
		参数：ArrayList<Student> array
*/
	public static void addStudent(ArrayList<Student> array) {
		//键盘录入学生对象所需要的数据
		Scanner sc = new Scanner(System.in);
		
		System.out.println("请输入学生姓名:");
		String name = sc.nextLine();
		
		System.out.println("请输入学生年龄:");
		String age = sc.nextLine();
		
		//创建学生对象，把键盘录入的数据赋值给学生对象的成员变量
		Student s = new Student();
		s.setName(name);
		s.setAge(age);
		
		//往集合中添加学生对象
		array.add(s);
	}
}
```
{% endfold %}

##### 学生管理系统

实现步骤：
*  定义学生类，包含以下成员变量
  * private String sid // 学生id
  * private String name // 学生姓名
  * private String age // 学生年龄
  * private String address // 学生所在地
* 学生管理系统主界面的搭建步骤
  *  用输出语句完成主界面的编写
  * 用Scanner实现键盘输入 
  * 用switch语句完成选择的功能
  * 用循环完成功能结束后再次回到主界面
* 学生管理系统的添加学生功能实现步骤
  * 定义一个方法，接收ArrayList集合
  * 方法内完成添加学生的功能
  * 键盘录入学生信息
  * 根据录入的信息创建学生对象
  * 将学生对象添加到集合中
  * 提示添加成功信息
  * 在添加学生的选项里调用添加学生的方法
* 学生管理系统的查看学生功能实现步骤
  * 定义一个方法，接收ArrayList集合
  * 方法内遍历集合，将学生信息进行输出
  * 在查看所有学生选项里调用查看学生方法
* 学生管理系统的删除学生功能实现步骤
  *  定义一个方法，接收ArrayList集合 
  * 方法中接收要删除学生的学号 
  * 遍历集合，获取每个学生对象 
  * 使用学生对象的学号和录入的要删除的学号进行比较,如果相同，则将当前学生对象从集合中删除
  * 在删除学生选项里调用删除学生的方法
* 学生管理系统的修改学生功能实现步骤
  * 定义一个方法，接收ArrayList集合
  * 方法中接收要修改学生的学号
  * 通过键盘录入学生对象所需的信息，并创建对象
  * 遍历集合，获取每一个学生对象。并和录入的修改学生学号进行比较.如果相 同，则使用新学生对象替换当前学生对象
  * 在修改学生选项里调用修改学生的方法
* 退出系统
  * 使用System.exit(0);退出JVM

## 继承

### 概述

#### 概念

继承是面向对象三大特征之一（封装，继承，多态），可以使得子类具有父类的属性和方法，还可以在子类中重新定义，以及追加属性和方法。

#### 格式

```java
public class 子类名 extends 父类名{}
范例：public class Zi extends Fu{}
Fu：是父类，也被称为基类、超类
Zi：是子类，也被称为派生类
```

#### 特点

继承可以让类与类之间产生关系，子父类关系，产生子父类后，子类则可以使用父类中非私有的成员。

### 好处与弊端

* 好处
* 提高了代码的复用性(多个类相同的成员可以放到同一个类中)
* 提高了代码的维护性(如果方法的代码需要修改，修改一处即可)
* 弊端
  * 继承让类与类之间产生了关系，类的耦合性增强了，当父类发生变化时子类实现也不得不跟着变化，削弱了子类的独立性

#### 应用场景

{% note success no-icon%}
使用继承，需要考虑类与类之间是否存在is..a的关系，不能盲目使用继承
is..a的关系：谁是谁的一种，例如：老师和学生是人的一种，那人就是父类，学生和老师就是子类
{% endnote %}

### 访问特点

#### 成员

在子类方法中访问一个变量，采用的是**就近原则**。
* 子类局部范围找
* 子类成员范围找
*  父类成员范围找
*  如果都没有就报错(不考虑父亲的父亲…)

#### 构造方法

**注意：子类中所有的构造方法默认都会访问父类中无参的构造方法**

子类会继承父类中的数据，可能还会使用父类的数据。

所以，子类初始化之前，一定要先完成父类数据的初始化， 原因在于，每一个子类构造方法的第一条语句**默认都是：super();**

{% note success no-icon%}
问题：如果父类中没有无参构造方法，只有带参构造方法，该怎么办呢？
1.通过使用super关键字去显示的调用父类的带参构造方法
2.在父类中自己提供一个无参构造方法
建议：自己给出无参构造方法
{% endnote %}

#### 成员方法

通过子类对象访问一个方法 
* 子类成员范围找
* 父类成员范围找
* 如果都没有就报错(不考虑父亲的父亲…)

### super

#### 概述

* this & super关键字：
  * this：代表**本类对象**的引用
  * super：代表父类存储空间的标识(可以理解为**父类对象**引用)

* this 和 super 的使用区别
  * 成员变量：
    * this.成员变量 - 访问本类成员变量
    * super.成员变量 - 访问父类成员变量
  * 成员方法：
    * this.成员方法 - 访问本类成员方法
    * super.成员方法 - 访问父类成员方法
  * 构造方法：
    * this(…) - 访问本类构造方法
    * super(…) - 访问父类构造方法

#### 内存图

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/three/20210310010200.png" alt="super-内存图">

{% note info no-icon%}
对象在堆内存中，会单独存在一块super区域，用来存放父类的数据。
{% endnote %}

### 方法重写

#### 概念

子类出现了和父类中一模一样的方法声明（方法名一样，参数列表也必须一样）。

#### 应用场景

当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法，这样，既沿袭了父类的功能，又定义了子类特有的内容。

#### Override注解

{% note info no-icon%}
用来检测当前的方法，是否是重写的方法，起到【校验】的作用。
检查重写方法的方法声明的正确性。
{% endnote %}

#### 注意事项

{% note primary no-icon%}
1.私有方法不能被重写(父类私有成员子类是不能继承的)
2.子类方法访问权限不能更低(public > 默认 > 私有)
{% endnote %}

{% fold 点击显/隐代码 %}
```java
public class Fu {
	private void show() {
		System.out.println("Fu中show()方法被调用");
	}
	
	void method() {
		System.out.println("Fu中method()方法被调用");
	}
}

public class Zi extends Fu {

	/* 编译【出错】，子类不能重写父类私有的方法*/
	@Override
	private void show() {
		System.out.println("Zi中show()方法被调用");
	}
	
	/* 编译【出错】，子类重写父类方法的时候，访问权限需要大于等于父类 */
	@Override
	private void method() {
		System.out.println("Zi中method()方法被调用");
	}
	/* 编译【通过】，子类重写父类方法的时候，访问权限需要大于等于父类 */
	@Override
	public void method() {
		System.out.println("Zi中method()方法被调用");
	}
}
```
{% endfold %}

### 注意事项

Java中类只支持单继承，不支持多继承

*  Java中**类只支持单继承，不支持多继承**

  * 错误范例：class A extends B, C { }

* Java中**类支持多层继承**

  {% fold 点击显/隐代码 %}
  ```
  public class Granddad {
  
  	public void drink() {
  		System.out.println("爷爷爱喝酒");
  	}
  }
  
  public class Father extends Granddad {
  
  	public void smoke() {
  		System.out.println("爸爸爱抽烟");
  	}
  }
  
  public class Mother {
  
  	public void dance() {
  		System.out.println("妈妈爱跳舞");
  	}
  }
  
  public class Son extends Father {
  // 此时，Son类中就同时拥有drink方法以及smoke方法
}
  ```
  {% endfold %}
  

## 修饰符

### package

#### 概念

包就是文件夹，用来管理类文件的

#### 定义格式

```java
package 包名; (多级包用.分开)
例如：package com.heima.demo;
```

#### 运行

##### 手动建包

```java
javac 类名.java		//生成class文件
//新建com文件夹，其中再建对应文件夹，把class放入，然后带包编译即可
java 包名.类名
```

##### 自动建包

```java
带包编译：javac –d . 类名.java

例如：javac -d . com.heima.demo.HelloWorld.java

带包运行：java 包名+类名

例如：java com.heima.demo.HelloWorld

//d表示在当前目录建包
```

### 导包

#### 意义

{% note info no-icon%}
使用不同包下的类时，使用的时候要写类的全路径，写起来太麻烦了
为了简化带包的操作，Java就提供了导包的功能
{% endnote %}

#### 格式

```java
导包的格式
格式：import 包名;
范例：import java.util.Scanner;
```

### 权限修饰符

|  修饰符   | 同一个类中 | 同一个包中子类无关类 | 不同包的子类 | 不同包的无关类 |
| :-------: | :--------: | :------------------: | :----------: | :------------: |
|  private  |     √      |                      |              |                |
|   默认    |     √      |          √           |              |                |
| protected |     √      |          √           |      √       |                |
|  public   |     √      |          √           |      √       |       √        |

{% note primary no-icon%}
alt+enter导包
{% endnote %}

### 状态修饰符

#### final

* fianl关键字的作用
  * final代表最终的意思，可以修饰成员方法，成员变量，类

* final修饰类、方法、变量的效果
  * fianl修饰类：该类不能被继承（不能有子类，但是可以有父类）
  * final修饰方法：该方法不能被重写
  * final修饰变量：**表明该变量是一个常量，不能再次赋值**

##### 修饰局部变量

* fianl修饰基本数据类型变量

  * final 修饰指的是基本类型的数据值不能发生改变

* final修饰引用数据类型变量

  * final 修饰指的是引用类型的地址值不能发生改变，但是地址里面的内容是可以发生改变的

  * 举例：

    ```java
    public static void main(String[] args){
    	final Student s = new Student(23);
    	s = new Student(24); // 错误
    	s.setAge(24); // 正确
    }
    ```


#### static

* static的概念
  * static关键字是静态的意思，可以修饰【成员方法】，【成员变量】
* static修饰的特点
  * 被类的所有对象共享，这也是我们判断是否使用静态关键字的条件
  * 可以通过类名调用，当然也可以通过对象名调用【推荐使用类名调用】

##### 访问特点

* 非静态的成员方法
  * 能访问静态的成员变量
  * 能访问非静态的成员变量
  * 能访问静态的成员方法
  * 能访问非静态的成员方法
* 静态的成员方法
  * 能访问静态的成员变量
  * 能访问静态的成员方法
* 总结成一句话就是：
  * **静态成员方法只能访问静态成员**