---
title: Java学习笔记-2
update: ''
top: false
tags: [java,notes]
categories: [编程]
date: 2021-03-09 15:47:31
rc: java2
keywords: java,笔记
---

 {% cq %}
Java 学习笔记 二
{%endcq %}
<!--more-->

## 数组

{% note info no-icon%}
数组（array）是一种用于存储多个相同类型数据的存储模型
{% endnote%}

### 格式

```java
数据类型[] 变量名
int[] arr
//定义了一个int类型的数组，数组名是arr
//推荐使用
```

```java
数据类型 变量名[]
int arr[]
//定义了一个int类型的变量，变量名是arr数组
```

### 初始化

**JAVA中的数组必须先初始化，然后才能使用**

{% note info no-icon%}
初始化：为数据中的数组元素分配内存空间，并为每个元素赋值
{% endnote%}

#### 动态初始化
{% note info no-icon%}
动态初始化：初始化时只指定数据长度，由系统为数组分配初始值
{% endnote%}

```java
数据类型[] 变量名 = new 数据类型[数组长度];
```

#### 静态初始化
{% note info no-icon%}
静态初始化：初始化时指定每个元素的初始值，由系统决定数组长度
{% endnote%}
```java
数据类型[] 变量名 = new 数据类型[数组长度]{数据1,数据2,数据3,......};
//简化格式：
数据类型[] 变量名 = {数据1,数据2,数据3,......};
```



### 数组元素访问

{% note info no-icon%}
每一个存储到数组的元素，都会自动的拥有一个编号，从0开始。
这个自动编号称为数组索引(index)，可以通过数组的索引访问到数组中的元素。
{% endnote%}

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171418.png" alt="数组元素访问">

### 内存分配

{% note info no-icon%}
内存是计算机中的重要原件，临时存储区域，作用是运行程序。
我们编写的程序是存放在硬盘中的，在硬盘中的程序是不会运行的。
必须放进内存中才能运行，运行完毕后会清空内存。
Java 虚拟机要运行程序，必须要对内存进行空间的分配和管理。
{% endnote%}

{% note success no-icon%}
Java程序在运行时，需要在内存中分配空间。为了提高运算效率，就对空间进行了不同区域的划分，因为每一片区域都有特定的处理数据方式和内存管理方式。
{% endnote %}

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171547.png" alt="存储空间">

{% note primary no-icon%}
目前我们只需要记住两个内存，分别是：栈内存和堆内存
{% endnote %}

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171610.png" alt="内存分配">

#### 单个数组

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171631.png" alt="单个数组">

#### 多个数组

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171655.png" alt="多个数组">

#### 相同地址

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171752.png" alt="相同地址">

### 常见问题

#### 索引越界

{% note info no-icon%}
访问了数组中不存在的索引对应的元素，造成索引越界问题
程序运行后，将会抛出 ArrayIndexOutOfBoundsException 数组越界异常。在开发中，数组的越界异常是不能出现的，一旦出现了，就必须要修改我们编写的代码。
{% endnote %}

#### 空指针异常

{% note info no-icon%}
访问的数组已经不再指向堆内存的数据，造成空指针异常
arr = null 这行代码，意味着变量 arr 将不会再保存数组的内存地址，也就不允许再操作数组了，因此运行的时候会抛出 NullPointerException 空指针异常。
null：空值，引用数据类型的默认值，表示不指向任何有效对象
{% endnote %}

### 常见操作

#### 遍历

{% note info no-icon%}
将数组中的每个元素分别获取出来，就是遍历。
{% endnote%}

```java
//获取数组元素数量：
数组名.length
```


#### 最值问题

```java
public class ArrayTest02 {
	public static void main(String[] args) {
		//定义数组
		int[] arr = {12, 45, 98, 73, 60};
		
		//定义一个变量，用于保存最大值
		//取数组中第一个数据作为变量的初始值
		int max = arr[0];
		
		//与数组中剩余的数据逐个比对，每次比对将最大值保存到变量中
		for(int x=1; x<arr.length; x++) {
			if(arr[x] > max) {
				max = arr[x];
			}
		}
		
		//循环结束后打印变量的值
		System.out.println("max:" + max);
	}
}
```

## 方法

{% note info no-icon%}
方法（method）是将具有独立功能的代码块组织成为一个整体，使其具有特殊功能的代码集
{% endnote %}

注意：
* 方法必须先创建才可以使用，该过程称为**方法定义**。
* 方法创建后并不是直接可以运行的，需要手动使用后，才执行，该过程称为**方法调用**。

### 定义与调用

#### 不带参数

##### 定义

```java
public static void 方法名 ( ) {
	// 方法体;
}
```

##### 调用

```java
方法名();
```

#### 带参数

{% note primary no-icon%}
参数：由数据类型和变量名组成 → 数据类型 变量名
{% endnote %}

##### 定义

```java
public static void 方法名 (参数1) {
	方法体;
}
public static void 方法名 (参数1, 参数2, 参数3...) {
	方法体;
}
```

##### 调用

```java
方法名(参数)；
方法名(参数1,参数2);
```

注意：
* 方法定义时，参数中的**数据类型与变量名都不能缺少**，缺少任意一个程序将报错
* 方法调用时，参数的**数量与类型必须与方法定义中的设置相匹配**，否则程序将报错

#### 形参与实参

形参：方法**定义中**的参数

实参：方法**调用中**的参数

#### 带返回值

##### 定义

```java
public static 数据类型 方法名 ( 参数 ) {
	return 数据 ;
}
```

##### 调用

```java
方法名 ( 参数 ) ;
数据类型 变量名 = 方法名 ( 参数 ) ;
```

注意：
* 方法定义时 return 后面的**返回值与方法定义上的数据类型要匹配**，否则程序将报错
* 方法的**返回值通常会使用变量接收**，否则该返回值将无意义

### 注意事项

* 方法不能嵌套定义。
* void表示无返回值，可以省略return，也可以单独的书写return，后面不加数据。

### 通用格式

```java
public static 返回值类型 方法名(参数) {
	方法体;
	return 数据 ;
}
```

* 定义方法时，要做到两个明确
  * 明确返回值类型：主要是明确方法操作完毕之后是否有数据返回，如果没有，写void；如果有，写对应的数据类型
  * 明确参数：主要是明确参数的类型和数量
* 调用方法时的注意：
  * void类型的方法，直接调用即可
  * 非void类型的方法，推荐用变量接收调用

### 方法重载

* 方法重载指同一个类中定义的多个方法之间的关系，满足下列条件的多个方法相互构成重载
  * 多个方法在**同一个类**中
  * 多个方法具有**相同的方法名**
  * 多个方法的**参数不相同，类型不同或者数量不同**
* 注意：
  * 重载仅对应方法的定义，与方法的调用无关，调用方式参照标准格式
  * 重载仅针对同一个类中方法的名称与参数进行识别，与返回值无关，换句话说不能通过返回值来判定两个方法是否相互构成重载

{% fold 点击显/隐代码 %}

```java
//例子
import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入两个数\n");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(compare_byte((byte) a, (byte) b));
        System.out.println(compare_short((short) a, (short) b));
        System.out.println(compare_int(a, b));
        System.out.println(compare_long((long) a, (long) b));
    }

    public static boolean compare_byte(byte a, byte b) {
        return a == b;
    }

    public static boolean compare_short(short a, short b) {
        return a == b;
    }

    public static boolean compare_int(int a, int b) {
        return a == b;
    }

    public static boolean compare_long(long a, long b) {
        return a == b;
    }
}
```

{% endfold %}

### 方法参数传递

#### 基本类型

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171829.png" alt="方法参数传递-基本类型内存图">

{% note primary no-icon%}
对于基本数据类型的参数，形式参数的改变，不影响实际参数的值
{% endnote %}

#### 引用类型

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171900.png" alt="方法参数传递-引用类型内存图">

{% note primary no-icon%}
对于引用类型的参数，形式参数的改变，影响实际参数的值
{% endnote %}

### 应用

#### 数组遍历

```java
System.out.println(“内容”); 输出内容并换行
System.out.print(“内容”); 输出内容不换行
System.out.println(); 起到换行的作用
```
{% fold 点击显/隐代码 %}
```java
public class MethodTest01 {
	public static void main(String[] args) {
		//定义一个数组，用静态初始化完成数组元素初始化
		int[] arr = {11, 22, 33, 44, 55};
		
		//调用方法
		printArray(arr);
	}
	
	//定义一个方法，用数组遍历通用格式对数组进行遍历
	/*
		两个明确：
			返回值类型：void
			参数：int[] arr
	*/
	public static void printArray(int[] arr) {
		System.out.print("[");
		for(int x=0; x<arr.length; x++) {
			if(x == arr.length-1) {
				System.out.print(arr[x]);
			} else {
				System.out.print(arr[x]+", ");
			}
		}
		System.out.println("]");
	}
}
```
{% endfold %}

## Debug模式

是供程序员使用的程序调试工具，它可以用于**查看程序的执行流程**，也可以用于追踪程序执行过程来**调试程序**。

### 操作流程

{% note info no-icon%}
Debug调试，又称为断点调试，断点即为一个标记，告诉我们从哪里开始查看。
{% endnote %}

#### 如何加断点

选择要设置断点的代码行，在行号的区域后面单击鼠标左键即可。

#### 如何运行加断点的程序

在代码区域右键Debug执行。

#### 看哪里


* 看Debugger窗口
	
	* 代码执行到哪了
	* 代码执行过程中变量的变化
* 看Console窗口
	
	* 程序执行过程中结果的演示

#### 点哪里

* 点Step Into (F7)这个箭头，也可以直接按F7	---程序继续执行
* 点stop结束

#### 删除断点

选择要删除的断点，单击鼠标左键即可。如果是多个断点，可以每一个再点击一次。也可以一次性全部删除。

#### 注意

{% note primary no-icon%}
如果有键盘录入数据，记得前往Console录入数据
如果有方法调用，Debugger窗口则会显示方法
{% endnote %}

### 应用

#### Switch

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:键盘录入一个星期数，用一个变量接收
		2:对星期数进行判断，这里用 switch 语句实现
		3:在对应的语句控制中输出对应的减肥活动
	导包：
		1:手动导包 import java.util.Scanner;
		2:快捷键导包 Alt+Enter
		3:自动导包
*/

import java.util.Scanner;

public class fit_switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入星期数：");
        int number = sc.nextInt();
        switch (number) {
            case 1:
                System.out.println("跑步");
                break;
            case 2:
                System.out.println("游泳");
                break;
            case 3:
                System.out.println("慢走");
                break;
            case 4:
                System.out.println("动感单车");
                break;
            case 5:
                System.out.println("拳击");
                break;
            case 6:
                System.out.println("爬山");
                break;
            case 7:
                System.out.println("大吃一顿");
                break;
            default:
                System.out.println("你输入的星期数有误！");
        }
    }
}
```
{% endfold %}

#### 不死神兔

{% fold 点击显/隐代码 %}
```java
/*有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子， 假如兔子都不死，问第二十个月的兔子对数为多少？*/
/*
	思路：
		1:为了存储多个月的兔子对数，定义一个数组，用动态初始化完成数组元素的初始化，长度为20
		2:因为第1个月，第2个月兔子的对数是已知的，都是1，所以数组的第1个元素，第2个元素值也都是1
		3:用循环实现计算每个月的兔子对数
		4:输出数组中最后一个元素的值，就是第20个月的兔子对数
*/
public class Test04 {
	public static void main(String[] args) {
		//为了存储多个月的兔子对数，定义一个数组，用动态初始化完成数组元素的初始化，长度为20
		int[] arr = new int[20];
        
		//因为第1个月，第2个月兔子的对数是已知的，都是1，所以数组的第1个元素，第2个元素值也都是1
		arr[0] = 1;
		arr[1] = 1;
        
		//用循环实现计算每个月的兔子对数
		for(int x=2; x<arr.length; x++) {
			arr[x] = arr[x-2] + arr[x-1];
		}
        
		//输出数组中最后一个元素的值，就是第20个月的兔子对数
		System.out.println("第二十个月兔子的对数是：" + arr[19]);
	}
}
```
{% endfold %}

#### 百钱百鸡 

{% note info no-icon%}
循环穷举	---解方程
我国古代数学家张丘建在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。 百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？
{% endnote %}

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:第1层循环，用于表示鸡翁的范围，初始化表达式的变量定义为 x=0，判断条件是x<=20
		2:第2层循环，用于表示鸡母的范围，初始化表达式的变量定义为 y=0，判断条件是y<=33
		3:这个时候，用于表示鸡雏的变量 z = 100 – x – y
		4:判断表达式 z%3==0 和表达式 5*x + 3*y + z/3 = 100 是否同时成立，如果成立，输出对应的x，y，z 的值，就是对应的鸡翁，鸡母，鸡雏的值
*/
public class Test05 {
	public static void main(String[] args) {
		//第1层循环，用于表示鸡翁的范围，初始化表达式的变量定义为 x=0，判断条件是x<=20
		for(int x=0; x<=20; x++) {
			//第2层循环，用于表示鸡母的范围，初始化表达式的变量定义为 y=0，判断条件是y<=33
			for(int y=0; y<=33; y++) {
				//这个时候，用于表示鸡雏的变量 z = 100 – x – y
				int z = 100 - x - y;
				//判断表达式 z%3==0 和表达式 5*x + 3*y + z/3 = 100 是否同时成立
				if(z%3==0 && 5*x+3*y+z/3==100) {
			System.out.println(x+","+y+","+z);
				}
			}
		}
	}
}
```
{% endfold %}

#### 查找

{% note info no-icon%}
已知一个数组 arr = {19, 28, 37, 46, 50}; 键盘录入一个数据，查找该数据在数组中的索引。并在控制台输出找到的索引值。如果没有查找到，则输出-1
{% endnote %}

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:定义一个数组，用静态初始化完成数组元素的初始化
		2:键盘录入要查找的数据，用一个变量接收
		3:定义一个索引变量，初始值为-1
		4:遍历数组，获取到数组中的每一个元素
		5:拿键盘录入的数据和数组中的每一个元素进行比较，如果值相同，就把该值对应的索引赋值给索引变量,并
结束循环
		6:输出索引变量
*/
public class Test08 {
	public static void main(String[] args) {
		//定义一个数组，用静态初始化完成数组元素的初始化
		int[] arr = {19, 28, 37, 46, 50};
		
		//键盘录入要查找的数据，用一个变量接收
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入要查找的数据：");
		int number = sc.nextInt();
			
		//调用方法
		int index = getIndex(arr, number);
		
		//输出索引变量
		System.out.println("index: " + index);
	}
	
	//查找指定的数据在数组中的索引
	/*
		两个明确：
		返回值类型：int
		参数：int[] arr, int number
    */
	public static int getIndex(int[] arr, int number) {
		//定义一个索引变量，初始值为-1
		int index = -1;
	
		//遍历数组，获取到数组中的每一个元素
		for(int x=0; x<arr.length; x++) {
			//拿键盘录入的数据和数组中的每一个元素进行比较，如果值相同，就把该值对应的索引赋值给索引变量,并结束循环
			if(arr[x] == number) {
				index = x;
				break;
			}
		}
		//返回索引
		return index;
	}
}
```
{% endfold %}

#### 反转

{% note info no-icon%}
已知一个数组 arr = {19, 28, 37, 46, 50}; 用程序实现把数组中的元素值交换， 交换后的数组 arr = {50, 46, 37, 28,19}; 并在控制台输出交换后的数组元素。
{% endnote %}

{% fold 点击显/隐代码 %}
```java
/*
	思路：
		1:定义一个数组，用静态初始化完成数组元素的初始化
		2:循环遍历数组，这一次初始化语句定义两个索引变量，判断条件是开始索引小于等于结束索引
		3:变量交换
		4:遍历数组
*/
public class Test09 {
	public static void main(String[] args) {
		//定义一个数组，用静态初始化完成数组元素的初始化
		int[] arr = {19, 28, 37, 46, 50};
		
		//调用反转的方法
		reverse(arr);
		
		//遍历数组
		printArray(arr);	
	}
	/*
		两个明确：
			返回值类型：void
			参数：int[] arr
	*/
	public static void reverse(int[] arr) {
		//循环遍历数组，这一次初始化语句定义两个索引变量，判断条件是开始索引小于等于结束索引
		for (int start = 0, end = arr.length - 1; start <= end; start++, end--) {
			//变量交换
			int temp = arr[start];
			arr[start] = arr[end];
			arr[end] = temp;
		}
	}
	
	/*
		两个明确：
			返回值类型：void
			参数：int[] arr
	*/
	public static void printArray(int[] arr) {
		System.out.print("[");
		
		for (int x = 0; x < arr.length; x++) {
			if (x == arr.length - 1) {
				System.out.print(arr[x]);
			} else {
				System.out.print(arr[x] + ", ");
			}
		}
		
		System.out.println("]");
	}
}
```
{% endfold %}

## 类和对象

{% note info no-icon%}
客观存在的事物皆为对象 ，所以我们也常常说万物皆对象。
面向对象：理解面对的对象。
{% endnote %}

* 类
  * 类的理解
    * 类是对现实生活中**一类具有共同属性和行为的事物的抽象**
    * 类是**对象的数据类型**，类是**具有相同属性和行为的一组对象的集合**
    * 简单理解：类就是对现实事物的一种描述
  * 类的组成
    * 属性：指事物的特征，例如：手机事物（品牌，价格，尺寸）
    * 行为：指事物能执行的操作，例如：手机事物（打电话，发短信）
* 类和对象的关系
  * 类：类是对现实生活中**一类具有共同属性和行为的事物的抽象**
  * 对象：是能够看得到摸的着的**真实存在的实体**
  * 简单理解：**类是对事物的一种描述，对象则为具体存在的事物**（类是对象的抽象，对象是类的实体）

### 类

{% note info no-icon%}
类是JAVA程序的基本组成单位。

类的组成是由属性和行为两部分组成：
	属性：在类中通过成员变量来体现（类中方法外的变量）
	行为：在类中通过成员方法来体现（和前面的方法相比去掉static关键字即可）
{% endnote %}

#### 定义

```java
①定义类
②编写类的成员变量
③编写类的成员方法
public class 类名 {
	// 成员变量
	变量1的数据类型 变量1；
	变量2的数据类型 变量2;
	…
	// 成员方法
	方法1;
	方法2;
}
```

{% note primary no-icon%}
一个包里面有很多个类，其中有一个主类，包含main方法，并可以通过包里面的其他类来定义对象
{% endnote %}

### 对象

```java
创建对象：
	类名 对象名 = new 类名();
调用成员的格式：
	对象名.成员变量
	对象名.成员方法();
```

### 对象内存图

#### 单个对象

##### 成员对象

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309171950.png" alt="单个对象-成员对象">

##### 成员方法

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172012.png" alt="单个对象-成员方法">

#### 多个对象

##### 成员变量

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172033.png" alt="多个对象-成员变量">

##### 成员方法

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172054.png" alt="多个对象-成员方法">

多个对象在堆内存中，都有不同的内存划分，**成员变量存储在各自的内存区域中，成员方法多个对象共用的一份**

#### 多个对象相同内存

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172219.png" alt="多个对象相同内存">

{% note primary no-icon%}
当多个对象的引用指向同一个内存空间（变量所记录的地址值是一样的）
只要有任何一个对象修改了内存中的数据，随后，无论使用哪一个对象进行数据获取，都是修改后的数据。
{% endnote %}

### 成员表量和局部变量

|      区别      |                  成员变量                  |                    局部变量                     |
| :------------: | :----------------------------------------: | :---------------------------------------------: |
|  类中位置不同  |                 类中方法外                 |              方法内部或方法声明上               |
| 内存中位置不同 |                   堆内存                   |                     栈内存                      |
|  生命周期不同  | 随着对象的存在而存在，随着对象的消失而消失 | 随着方法的调用而 存在，随着方法的调用完毕而消失 |
|  初始化值不同  |               有默认初始化值               |   没有默认初始化值，必须先定义，赋值才能使用    |

## 封装

### private关键字

{% note info no-icon%}
private 是一个权限修饰符，可以用来修饰成员（成员变量，成员方法）
作用是保护成员不被其他类使用，被 private 修饰的成员只能在本类中才能访问
{% endnote %}

* 被 private 修饰的成员，只能在本类进行访问，针对 private 修饰的成员变量，如果需要被其他类使用，提供相应的操作
  * 提供“get变量名()”方法，用于获取成员变量的值，**方法用 public 修饰**
  * 提供“set变量名(参数)”方法，用于设置成员变量的值，**方法用 public 修饰**

### this关键字

{% note info no-icon%}
this修饰的变量用于指代成员变量，其主要作用是（区分局部变量和成员变量的重名问题）
{% endnote %}

* 方法的形参如果与成员变量同名，不带 this 修饰的变量指的是形参，而不是成员变量
* 方法的形参没有与成员变量同名，不带 this 修饰的变量指的是成员变量

* **使用时机：解决局部变量隐藏成员变量**

#### 内存原理

{% note primary no-icon%}
this 代表当前调用方法的引用，哪个对象调用的方法，this 就代表哪一个对象
{% endnote %}

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172245.png" alt="this内存原理1">

<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.2.7/images/loading.gif" data-src="https://gitee.com/WillCAI2020/pic-go/raw/master/Java/two/20210309172420.png" alt="this内存原理2">

### 封装

#### 概述

封装是面向对象三大特征之一（封装，继承，多态）；
是面向对象编程语言对客观世界的模拟，客观世界里成员变量都是隐藏在对象内部的，外界是无法直接操作的。

#### 原则

将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏。
信息的操作和访问成员变量private，提供对应的getXxx()/setXxx()方法。

#### 好处

通过方法来控制成员变量的操作，**提高了代码的安全性**。
把代码用方法进行封装，**提高了代码的复用性**。

### 构造方法

#### 概述

```java
/*
构造方法是一种特殊的方法
作用：创建对象 Student stu = new Student();
功能：主要是完成对象数据的初始化
*/

public class 类名{
	修饰符 类名( 参数 ) {
	}
}
// 修饰符一般为public
```

#### 注意事项

* 创建
  * 当类中无构造方法时，系统将会默认给出一个无参构造方法，如果定义了构造方法，系统将不再提供默认的构造方法。
* 重载
  * 如果自定义了带参构造方法，还要使用无参数构造方法，就必须再写一个无参数构造方法。

* 推荐
  * 无论是否使用，都手工书写无参数构造方法。

#### 标准类制作

* 成员变量
  * 使用**private**修饰
* 构造方法
  * 提供一个无参构造方法
  * 提供一个至多个带参构造方法
* 成员方法
  * 提供每一个成员变量对应的**getXxx()/setXxx()方法**
  * 提供一个显示对象信息的**show()**
* 创建对象并为其成员变量赋值的两种方式
  * 无参构造方法创建对象后使用**setXxx()**赋值
  * 使用带参构造方法直接创建带有属性值的对象


{% fold 点击显/隐代码 %}
```java
package com.Study_01.student;

public class Student {
    //定义变量
    private String name;
    private int age;

    //构造方法
    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //成员方法
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void show() {
        System.out.println(name + "," + age);
    }
}
```

```java
package com.Study_01.student;

public class StudentDemo {
    public static void main(String[] args) {
        Student stu1 = new Student();
        stu1.setName("李四");
        stu1.setAge(17);
        stu1.show();
        Student stu2 = new Student("张三",18);
        stu2.show();
    }
}
```
{% endfold %}

