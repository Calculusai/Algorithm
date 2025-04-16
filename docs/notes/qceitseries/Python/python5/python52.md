---
title: Python5级知识点
tags:
    - 电子协会考级
    - Python5级
icon: tabler:hexagon-number-5-filled
createTime: 2025/03/17 13:38:41
permalink: /qceitseries/Python/python5/python52.html
---
## 1. 列表的用法及常用操作
:::tip 学习要点
1. 列表的概念；
2. 列表的创建；
3. 列表的删除；
4. map()、zip() 对列表的操作；
5. 列表推导式
:::
:::info 对标内容
- 掌握列表的概念、特点和操作的相关方法。
:::
:::note 情景导入
- 酒店里的菜谱中有多道不同品种的菜，每一道菜品又有许多属性，比如口味、 质量、售价、剩余数量等。随着季节的变化，菜的品种会有所调整，有新增加的菜品，也有下架的菜品。这种菜谱类似于Python中的“列表”。在Python中，我们使用列表数据类型来组织数据与处理数据会比较方便。
:::
### 1.1 列表的概念
::::tip 知识点详解
- 列表属于线性序列结构，是包含若干元素的有序连续内存空间，当列表增加或删除元素时，列表对象自动进行内存的扩展或收缩，从而保证相邻元素之间没有缝隙。列表的这种内存自动管理功能可以大幅减少程序员的工作，但插入和删除中间元素时涉及列表中大量元素的移动，严重影响效率。另外，在中间位置插入和删除元素时，会改变该位置后面的元素在列表中的索引，这可能会对有些操作造成意外的错误结果。因此，除非确实有必要，否则应尽量从列表尾部进行元素的追加与删除操作。
#### 1.1.1 列表的定界符[]和类型名称list
- 可以用一对中括号声明一个列表，列表中的元素用逗号分隔。用内置函数type() 检测其类型为list，示例如下。 
    ```python
    ls1 = []
    ls2 = [1,2,3,4,5]
    print(type(ls1))
    print(type(ls2))
    ```
    - 运行结果
    ```console
    <class 'list'>
    <class 'list'>
    ```
#### 1.1.2 具有可变性与有序性
- 列表支持原位改变，其中的元素在列表中具有索引，示例如下。
    ```python
    ls = [1,2,3,4,5]
    ls[0] = 10
    print(ls)
    ```
    - 运行结果
    ```console
    [10, 2, 3, 4, 5]
    ```
#### 1.1.3 对元素类型与值没有限制要求
- 在Python中，同一个列表中元素的数据类型可以各不相同，列表可以同时包含整数、实数、字符串等基本类型的元素，也可以包含列表、元组、字典、集合、函数及其他任意对象，示例如下。
    ```python
    ls = [0]*8
    ls[0] = 10
    ls[1] = 3.14
    ls[2] = 'hello'
    ls[3] = [1, 2, 3]
    ls[4] = (1, 2, 3)
    ls[5] = {'a': 1, 'b': 2}
    ls[6] = {1, 2, 3}
    ls[7] = lambda x: x + 1
    print(ls)
    ```
    - 运行结果
    ```console
    [10, 3.14, 'hello', [1, 2, 3], (1, 2, 3), {'a': 1, 'b': 2}, {1, 2, 3}, <function <lambda> at 0x000001E27D1E01E0>]
    ```
- 以酒店菜谱为例讲解数据的表示及简单处理。例如，可以用列表caipu表示所有菜品。
    ```python
    caipu = [['西红柿炒鸡蛋', 18, 100, 1], ['宫保鸡丁', 20, 80, 1], ['鱼香肉丝', 25, 50, 1], ['麻婆豆腐', 15, 120, 1]]
    ```
    - 其中，每一个菜品是一个列表，包含了菜品的名称、单价、数量和剩余数量。
    - 可以用索引访问菜品的信息，例如，要获取第一个菜品的名称，可以使用caipu[0][0]。
    - 可以用循环遍历所有菜品，例如，要打印所有菜品的名称，可以使用以下代码：
        ```python
        for i in range(len(caipu)):
            print(caipu[i][0])
        ```
        - 运行结果
        ```console
        西红柿炒鸡蛋
        宫保鸡丁
        鱼香肉丝
        麻婆豆腐
        ```
::::
:::caution 易错点-列表的概念
1. 如果列表元素间不能比较，使用max()与min()函数将会报错，示例 如下。
    ```python
    ls = [1,2,3,4,5]
    ls[0] = 'hello'
    print(max(ls))
    ```
    - 运行结果
    ```console
    TypeError: '>' not supported between instances of 'str' and 'int'
    ```
2. 列表的索引值必须是整数，不能是浮点数，示例如下。
    ```python
    ls = [1,2,3,4,5]
    print(ls[1.5])
    ```
    - 运行结果
    ```console
    TypeError: list indices must be integers or slices, not float
    ```
3. 在删除列表元素的许多方法中，注意区分是按照“索引号”删除，还是按照“值”删除，示例如下。
    ```python
    ls = [1,2,3,4,5]
    del ls[1]
    print(ls)
    ls.remove(3)
    print(ls)
    ```
    - 运行结果
    ```console
    [1, 3, 4, 5]
    [1, 4, 5]
    ```
:::
#### 1.1.4 模拟考题-列表的概念
:::important 例1 单选题
下列有关列表的描述中，错误的是（    ）。
- A. 列表的相邻元素之间使用逗号分隔
- B. 列表是包含若干元素的有序且连续的内存空间
- C. 列表类型继承序列类型的特点
- D. 如果列表元素间不能比较，仍然可以使用max()函数[+下列有关列表的描述中，错误的是D]
:::
[+下列有关列表的描述中，错误的是D]:
    解析：如果列表元素间不能比较，使用max()与min()函数将会报错，故选D。
:::important 例2 单选题
删除列表元素的方法有许多，下列不能删除列表中元素的操作是（    ）。
- A. l.reverse()[+删除列表元素的方法有许多，下列不能删除列表中元素的操作是A]
- B. l.pop()    
- C. l.remove()    
- D. l.clear()
:::
[+删除列表元素的方法有许多，下列不能删除列表中元素的操作是A]:
    解析：l.reverse() 会将l中的元素反转。
:::important 例3 单选题
有如下Python程序段,则程序执行后，输出结果为（    ）。
```python
c=[5,3,5,8,2,7,6]
c.pop(5)
c.remove(5)
print(c)
```
- A. ```[3, 8, 2, 7, 6]```
- B. ```[5, 3, 8, 7, 6]```
- C. ```[3, 5, 8, 2, 6]```[+则程序执行后，输出结果为C]
- D. ```[5, 3, 8, 2, 6]```
:::
[+则程序执行后，输出结果为C]:
    解析：本题主要考核列表函数pop()和remove()的应用和区别。
:::important 例4 判断题
通过add方法可以向列表添加元素。（    ）[+通过add方法可以向列表添加元素错误]
:::
[+通过add方法可以向列表添加元素错误]:
    解析：在Python列表中没有add方法。
### 1.2 列表的创建
::::tip 知识点详解
- 列表的创建有多种方法，例如，使用中括号[]创建空列表，使用逗号分隔元素创建列表，使用列表推导式创建列表等。
#### 1.2.1 使用中括号[]创建空列表
- 使用中括号[]创建空列表，示例如下。
    ```python
    ls = []
    print(ls)
    ```
    - 运行结果
    ```console
    []
    ```
#### 1.2.2 使用逗号分隔元素创建列表
- 使用逗号分隔元素创建列表，示例如下。
    ```python
    ls = [1,2,3,4,5]
    print(ls)
    ```
    - 运行结果
    ```console
    [1, 2, 3, 4, 5]
    ```
#### 1.2.3 使用列表推导式创建列表
- 使用列表推导式创建列表，示例如下。
    ```python
    ls = [i for i in range(10)]
    print(ls)
    ```
    - 运行结果
    ```console
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```
#### 1.2.4 使用列表函数list()创建列表
- 使用列表函数list()创建列表，示例如下。
    ```python
    ls = list(range(10))
    print(ls)
    ```
    - 运行结果
    ```console
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```
#### 1.2.5 列表创建注意事项
- 在Python中，使用“=”直接将一个列表赋值给变量，即可创建列表对象；也可以使用list()函数把元组、range、字符串、字典、集合或其他可迭代对象转换为列表，示例如下。
    ```python
    ls = list(range(10))
    print(ls)
    ls = list('hello')
    print(ls)
    ls = list({'a': 1, 'b': 2})
    print(ls)
    ls = list({1, 2, 3})
    print(ls)
    ```
    - 运行结果
    ```console
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ['h', 'e', 'l', 'l', 'o']
    ['a', 'b']
    [1, 2, 3]
    ```
- 需要注意的是，把字典转换为列表时，默认将字典的键转换为列表，而不是把字典的元素转换为列表。如果想把字典的元素转换为列表，需要使用字典对象的items() 方法明确说明。也可以使用values()来明确说明要把字典的值转换为列表，示例如下。
    ```python
    ls = list({'a': 1, 'b': 2}.items())
    print(ls)
    ls = list({'a': 1, 'b': 2}.values())
    print(ls)
    ```
    - 运行结果
    ```console
    [('a', 1), ('b', 2)]
    [1, 2]
    ```
::::
:::caution 易错点-列表的创建
1. 正确理解列表属于线性序列结构，是包含若干元素的有序连续内存 空间。
2. 正确理解函数sorted()与方法sort()的运行本质。
:::
#### 1.2.6 模拟考题-列表的创建
:::important 例1 单选题
下列有关列表的描述中，错误的是（    ）。
- A. 列表是包含若干元素的随机内存空间
- B. 列表是包含若干元素的有序内存空间
- C. 列表是包含若干元素的连续内存空间
- D. 列表的相邻元素之间使用逗号分隔
:::
[+答案：A]:
    解析：列表是包含若干元素的有序连续内存空间，故选A。
:::important 例2 单选题
执行下列程序，正确的结果是（    ）。
```python
>>> l=[10,0,1,6,12,8]
>>> l.sort(key=float)
>>> l
```
- A. [10.0,0.0,1.0,6.0,12.0,8.0]        
- C. [0,1,6,8,10,12]                       
- B. [0,1,10,12,6,8]
- D. [12,10,8,6,1,0]
:::
[+答案：C]:
    解析：对l进行升序排序，排序的关键依据是“float”；如果执行l.sort(key=str)，则运行结果是B。
:::important 例3 判断题
对于列表l=[(0,),1,2,3,4]，all(l) 的值是 True。（    ）
:::
[+答案：正确]:
    解析：all(l) 测试是否所有元素都等价于True。(0,)是非空的。
### 1.3 列表的删除
::::tip 知识点详解
- 当一个列表不再使用时，可以使用del命令将其删除，这一点适用于所有类型的Python对象。本质上del命令并不删除变量对应的值，只是删除变量，并解除变量和值的绑定。
- 垃圾回收机制：Python内部每个值配备一个计数器，每当有新的变量引用该值时，其计数器加1，当该变量被删除或该值不再被引用时，其计数器减1。当某个值的计数器变为0时，由垃圾回收器清理和删除。
::::
:::caution 易错点-列表的删除
1. 删除列表元素的方法或函数较多，留意是否有返回值。
2. 对列表元素进行原位改变时，关注索引的变化。
:::
#### 1.3.1 模拟考题-列表的删除
:::important 考题1 单选题
对于列表的方法pop()与remove()的区别与相同点，正确的描述是（   ）。
- A. 都是删除与参数表中参数相同的元素
- B. pop() 没有返回值
- C. remove() 没有返回值[+pop()与remove()的区别与相同点，正确的描述是C]
- D. pop() 如果不带参数，则表示默认参数值为0
:::
[+pop()与remove()的区别与相同点，正确的描述是C]:
    解析：pop()如果不带参数，则表示默认参数值为-1，pop()有返回值；remove() 没有返回值。
:::important 考题2 单选题
已知一个列表```lis = [5, 8, 'x', ['yy', 202, ['k3', ['aa', 2, '5']], 78], 'ca', 'sdv']```。 下列选项中不能把列表lis中'aa'字符串变为大写'AA'字符串的是（    ）。
- A. lis[3][2][1][:1] = ['AA']
- B. lis[3][2][1][0] = lis[3][2][1][0].upper()
- C. lis[-3][-2][-1][0] = "AA"
- D. lis[-3][-2][-1][0].upper()[+下列选项中不能把列表lis中'aa'字符串变为大写'AA'字符串的是D]
:::
[+下列选项中不能把列表lis中'aa'字符串变为大写'AA'字符串的是D]:
    解析：考查列表的嵌套及列表中大小写转换函数的应用。D选项没有进行赋值操作，故不能将列表中'aa'字符串变为大写'AA'字符串。
:::important 例3 判断题
在Python的列表数据类型中，通过insert()方法可以在指定位置插入元素。（    ）[+通过insert()方法可以在指定位置插入元素正确]
:::
[+通过insert()方法可以在指定位置插入元素正确]:
    解析：列表的插入操作，insert()有两个参数，第一个参数表示插入的索引，第二个参数表示要插入的元素，后面的所有元素往后移动一个位置。
### 1.4 map()、zip() 对列表的操作
::::tip 知识点详解
map() 函数把函数映射到列表中的每个元素。zip()函数将多个列表中的元素重新组合为元组，并返回包含这些元组的zip对象。
-  下列操作，实现对列表x中的每个元素加5。
    ```python
    x = [1, 2, 3, 4, 5]
    x = map(lambda x: x + 5, x)
    print(list(x))
    ```
    - 运行结果
    ```console
    [6, 7, 8, 9, 10]
    ```
- 下列操作，实现多列表元素重新组合。如果列表不等长，以短列表为准。如果仅有一个序列，可以仅对一个序列操作。
    ```python
    x = [1, 2, 3, 4, 5]
    y = [6, 7, 8, 9, 10]
    z = [11, 12, 13, 14, 15]
    x = zip(x, y, z)
    print(list(x))
    ```
    - 运行结果
    ```console
    [(1, 6, 11), (2, 7, 12), (3, 8, 13), (4, 9, 14), (5, 10, 15)]
    ```
#### 1.4.1 map()详解
- map() 函数把函数映射到列表中的每个元素。
- map() 函数的语法如下：
    ```python
    map(function, iterable, ...)
    ```
    - function -- 函数
    - iterable -- 一个或多个序列
    - 案例
        ```python
        def square(x):
            return x ** 2
        x = [1, 2, 3, 4, 5]
        x = map(square, x)
        print(list(x))
        ```
        - 运行结果
        ```console
        [1, 4, 9, 16, 25]
        ```
    - 也可以使用 lambda 匿名函数，如下所示：
        ```python
        x = [1, 2, 3, 4, 5]
        x = map(lambda x: x ** 2, x)
        print(list(x))
        ```
        - 运行结果
        ```console
        [1, 4, 9, 16, 25]
        ```
    - 也可以使用多个序列，如下所示：
        ```python
        x = [1, 2, 3, 4, 5]
        y = [6, 7, 8, 9, 10]
        z = [11, 12, 13, 14, 15]
        x = map(lambda x, y, z: x + y + z, x, y, z)# x、y、z 三个序列的长度必须相同
        print(type(x))
        print(list(x))
        ```
        - 运行结果
        ```console
        <class 'map'>
        [18, 21, 24, 27, 30]
        ```
- map() 函数的返回值是一个 map 对象。
#### 1.4.2 zip()详解
- zip() 函数将多个列表中的元素重新组合为元组，并返回包含这些元组的zip对象。
- zip() 函数的语法如下：
    ```python
    zip(iterable1, iterable2,...)
    ```
    - iterable1 -- 一个或多个序列
    - 案例
        ```python
        x = [1, 2, 3, 4, 5]
        y = [6, 7, 8, 9, 10]
        z = [11, 12, 13, 14, 15]
        x = zip(x, y, z)
        print(list(x))
        ```
        - 运行结果
        ```console
        [(1, 6, 11), (2, 7, 12), (3, 8, 13), (4, 9, 14), (5, 10, 15)]
        ```
    - 如果列表不等长，以短列表为准。
        ```python
        x = [1, 2, 3, 4, 5]
        y = [6, 7, 8, 9, 10, 11]
        z = [11, 12, 13, 14, 15]
        x = zip(x, y, z)
        print(list(x))
        ```
        - 运行结果
        ```console
        [(1, 6, 11), (2, 7, 12), (3, 8, 13), (4, 9, 14), (5, 10, 15)]
        ```
    - 如果仅有一个序列，可以仅对一个序列操作。
        ```python
        x = [1, 2, 3, 4, 5]
        x = zip(x)
        print(list(x))
        ```
        - 运行结果
        ```console
        [(1,), (2,), (3,), (4,), (5,)]
        ```
- zip() 函数的返回值是一个 zip 对象。
::::
:::caution 易错点-map()、zip() 对列表的操作
1. map()函数把某一个函数映射到列表中的每个元素，这个函数可以是内置函数，可以是自定义函数，也可以是匿名函数。
2. zip() 函数用于将多个列表中的元素重新组合为元组，列表不等长，以短列表为准。结果是元组类型。
:::
#### 1.4.3 模拟考题-map()、zip() 对列表的操作
:::important 例1 单选题
有如下Python程序段,执行程序后，输出的结果为（   ）。
```python
x=['bike','car','bus','train']
print(list(map(len, x)))
```
- A. ```[0, 1, 2,3]```
- B. ```[1, 2, 3, 4]```
- C. ```[4, 3, 3, 5]```[+有如下Python程序段,执行程序后，输出的结果为C]
- D. ```[4, 3, 3, 4]```
:::
[+有如下Python程序段,执行程序后，输出的结果为C]:
    解析：本题主要考核map()函数对列表的操作，map()函数将函数映射到列表中的每个元素。
:::important 例2 单选题
有如下Python程序段,执行程序后，输出的结果为（   ）。
```python
letter=list({'a':1,'b':2,'c':3,'d':4}) 
print(letter) 
```
- A. ```[1, 2, 3, 4]```                
- C. ```['a', 1,'b',2, 'c', 3,'d',4]```[+有如下Python程序段,执行程序后，输出的结果为B]     
- B. ```['a', 'b', 'c', 'd']```
- D. ```['a':1,'b':2,'c':3,'d':4]```
:::
[+有如下Python程序段,执行程序后，输出的结果为B]:
    解析：本题主要考核用list()函数创建列表，把字典转换为列表时，默认将字典的键转换为列表，所以选B。
:::important 例3 判断题
```python
>>>sub=[' 语文','数学','英语','科学','思品','体育']
>>>score=[105,97,156,105,72]
>>>list(zip(sub,score))
```
结果是：```[('语文', 105), (' 数学', 97), (' 英语 ', 156), (' 科学 ', 105), (' 思品', 72)]```。（    ）[+结果是正确]
:::
[+结果是正确]:
    解析：考核zip()函数对列表的操作，zip()函数用于将多个列表中的元素重新组合为元组，列表不等长，以短列表为准。
### 1.5 列表推导式
::::tip 知识点详解
列表推导式也被称为==列表解析式==，可以使用非常简洁的方式对列表或其他可迭代对象的元素进行遍历、过滤或再次计算，快速生成满足特定需求的新列表，代码简洁，具有很强的可读性，列表推导式是==推荐使用==的一种技术。
- 列表推导式在逻辑上等价于一个循环语句，只是形式上更加简洁。
- 列表推导式的语法格式如下：
    ```python
    [表达式 for 变量 in 列表]
    [out_exp_res for out_exp in input_list]
    ```
    - 或
    ```python
    [表达式 for 变量 in 列表 if 条件]
    [out_exp_res for out_exp in input_list if condition]
    ```
    - 或
    ```python
    [表达式1 if 条件 else 表达式2 for 变量 in 列表]
    [out_exp_res1 if condition else out_exp_res2 for out_exp in input_list]
    ```
    - 等价于
    ```python
    for 变量 in 列表:
        if 条件:
            表达式1
        else:
            表达式2
    ```
- 列表推导式的返回值是一个新的列表。
- 列表推导式的优点是代码简洁，具有很强的可读性。
- 列表推导式的缺点是运行速度可能会比普通的for循环慢。
::::
:::caution 易错点-列表推导式
1. 列表推导式的语法格式有三种，需要注意。
2. Python 编程中，我们经常会将多个变量赋值语句写在一行里面，这种写法是同一行显示多条语句的情况，也要使用分号（;）将不同语句隔开，并且要注意分号必须是半角符号。
:::
#### 1.5.1 考题模拟-列表推导式
:::important 例1 单选题
m=[x*x for x in range(5) ]的结果的是（    ）。
- A. 25        
- B. 16        
- C. ```[0, 1, 4, 9, 16]``` [+的结果的是C]       
- D. ```(0, 1, 4, 9, 16)```
:::
[+的结果的是C]:
    解析：对range(5)的每个元素分别进行平方运算后组成新的列表。故C项正确。
:::important 例2 单选题
求1~100之内能被4整除，但是不能被5整除的所有数，正确的列表推导式是（    ）。
- A. ```print([for x in range(0, 100) if x % 4 == 0 and x % 5 != 0])```
- B. ```print([for x in range(1, 101) if x % 4 == 0 and x % 5 != 0])```
- C. ```print([x for x in range(0, 100) if x % 5 == 0 and x % 4 != 0])```
- D. ```print([x for x in range(1, 101) if x % 4 == 0 and x % 5 != 0])```[+但是不能被5整除的所有数，正确的列表推导式是D]
:::
[+但是不能被5整除的所有数，正确的列表推导式是D]:
    解析：考核列表推导式的应用。for x in range(1, 101)体现“1~100之内”，x % 4 == 0 体现“能被4整除”，x % 5 != 0体现“不能被5整除”。
:::important 例3 单选题
下列程序的运行结果是（    ）。
```python
def jishu(n):
    return n % 2 == 1
newlist = filter(jishu, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
n=list(newlist)
print(n)
```
- A. ```[2,4,6,8,10]```                     
- C. ```[1,2,3,4,5,6,7,8,9,10]```[+下列程序的运行结果是B]      
- B. ```[1,3,5,7,9]```
- D. ```[10,9,8,7,6,5,4,3,2,1]```
:::
[+下列程序的运行结果是B]:
    解析：使用filter()过滤出符合自定义函数jishu()的元素，组成新列表。故选B项。
:::important 例4 判断题
```python
>>> l=[x*x for x in range(6)]
>>> l=list(map(lambda x:x*x,range(6)))
```
以上两个语句的功能不可能等价。（    ）[+以上两个语句的功能不可能等价错误]
:::
[+以上两个语句的功能不可能等价错误]:
    解析：两个语句的功能是等价的，实现对range(6)的每个元素分别进行平方运算后组成新的列表。
## 2. 元组的用法及常用操作
:::tip 学习要点
1. 元组的概念；
2. 生成器推导式的概念。
:::
:::info 对标内容
1. 掌握元组的概念、特点和操作的相关方法；
2. 掌握生成器推导式的使用方法。
:::
:::note 情景导入
- 在现实世界里，存在着许多在一定时期内不变的数据，比如兄弟三人的生日数据、运动员的比赛成绩、我国的所有省份名等，请大家列举生活中相对不变的数据例子。对于这种情况，在Python中，我们使用“元组”数据类型来组织数据和处理数据会比较方便，而且更加高效。
:::
### 2.1 元组的概念
::::tip 知识点详解
- 元组属于线性序列结构，是包含若干元素的有序连续内存空间。
- 元组是轻量级的列表，在形式上，元组的所有元素放在一对小括号中，元素之间使用逗号分 隔，如果元组中只有一个元素，则必须在最后增加一个逗号。元组不能够增加或删除元素，因此元素个数固定，不涉及元素的移动，处理数据的效率比列表高。
#### 2.1.1 元组的定界符()和类型名称tuple
- 可以用一对小括号声明一个元组，也可以不用括号直接声明一个元组。元组中的元素用逗号分隔。用内置函数type()检测其类型为tuple，示例如下。
    ```python
    t1 = (1, 2, 3, 4, 5)
    t2 = 1, 2, 3, 4, 5
    print(t1, type(t1))
    print(t2, type(t2))
    ```
    - 运行结果
    ```console
    (1, 2, 3, 4, 5) <class 'tuple'>
    (1, 2, 3, 4, 5) <class 'tuple'>
    ```
#### 2.1.2 具有不可变性与有序性
- 元组的元素在元组中具有索引，示例如下
    ```python
    t = (1, 2, 3, 4, 5)
    print(t[0], t[1], t[2], t[3], t[4])
    ```
    - 运行结果
    ```console
    1 2 3 4 5
    ```
- 元组中的元素具有不可变性，示例如下
    ```python
    t = (1, 2, 3, 4, 5)
    t[0] = 0
    print(t)
    ```
    - 运行结果
    ```console
    Traceback (most recent call last):
    File "test.py", line 2, in <module>
        t[0] = 0
    TypeError: 'tuple' object does not support item assignment
    ```
- 元组中的元素具有有序性，示例如下
    ```python
    t = (1, 2, 3, 4, 5)
    print(t.index(1))
    print(t.index(2))
    print(t.index(3))
    print(t.index(4))
    print(t.index(5))
    ```
    - 运行结果
    ```console
    0
    1
    2
    3
    4
    ```
#### 2.1.3 对元素类型与值没有限制要求
- 在Python中，同一个元组中元素的数据类型可以各不相同，元组可以同时包含整数、实数、字符串等基本类型的元素，也可以包含列表、元组、字典、 集合、函数及其他任意对象，示例如下。
    ```python
    t = (1, 2, 3.14, 'hello', [1, 2, 3], (4, 5, 6), {'a': 1, 'b': 2}, {1, 2, 3}, print)
    print(t)
    ```
    - 运行结果
    ```console
    (1, 2, 3.14, 'hello', [1, 2, 3], (4, 5, 6), {'a': 1, 'b': 2}, {1, 2, 3}, <built-in function print>)
    ```
- 元组属于不可变序列，其元素的值是不可改变的，但元组中可包含可变序列元素，示例如下。
    ```python
    t = (1, 2, 3, 4, 5,[6,7])
    t[4].append(6)
    print(t)
    ```
    - 运行结果
    ```console
    Traceback (most recent call last):
    File "test.py", line 2, in <module>
        t[4].append(6)
    AttributeError: 'int' object has no attribute 'append'
    ```
- 元组中包含可变序列元素时，可变序列元素的值是可以改变的，示例如下。
    ```python
    t = (1, 2, 3, 4, [5, 6, 7])
    t[4][0] = 0
    print(t)
    ```
    - 运行结果
    ```console
    (1, 2, 3, 4, [0, 6, 7])
    ```
::::
:::caution 易错点-元组的概念
1. 元组元素的值是不可改变的，但元组中可包含可变序列元素。由这个知识点拓展的相关题目容易出错。
    - 例如元组不支持原位改变，否则会报错，示例如下。
        ```python
        t = (1, 2, 3, 4, 5)
        t[0] = 0
        print(t)
        ```
        - 运行结果
        ```console
        TypeError: 'tuple' object does not support item assignment
        ``` 
2. 理解用变通的方法实现元组的“原位改变”。
    - 例如元组中包含可变序列元素时，可变序列元素的值是可以改变的，示例如下。
        ```python
        t = (1, 2, 3, 4, [5, 6, 7])
        t[4][0] = 0
        print(t)
        ```
        - 运行结果
        ```console
        (1, 2, 3, 4, [0, 6, 7])
        ```
3. 元组的元素在元组中具有索引，示例如下。
    ```python
    t = (1, 2, 3, 4, 5)
    print(t[0], t[1], t[2], t[3], t[4])
    ```
    - 运行结果
    ```console
    1 2 3 4 5
    ```
:::
#### 2.1.4 考题模拟-元组的概念
:::important 例1 单选题
下列操作中，正确的为哪一项？（    ）
- A. 
```python
>>>tuple( 'ni hao' )        
>>>( 'ni','hao' )                      
```
- B. [+下列操作中，正确的为哪一项B]
```python
>>>tuple(range(3))
>>>(0,1,2)
```
- C. 
```python
>>>tuple(str,range(3))        
- D.
```python
>>>tuple(map(str,range(3)))
>>>(0,1,2)                   
>>>(0,1,2)
```
:::
[+下列操作中，正确的为哪一项B]:
    解析：B项用tuple()函数正确声明了一个元组。
:::important 例2 单选题
下列元组的声明中，非法的是（    ）。
- A. ```t=1,2,3```      
- B. ```t=(1,2,3)```       
- C. ```t=(1,)```        
- D. ```t=(1)```[+下列元组的声明中，非法的是D]
:::
[+下列元组的声明中，非法的是D]:
    解析：声明一个元组，可以有小括号组织元素，也可以没有小括号组织元素。如果只有一个元素，其后面必须跟随逗号。故D项非法。
:::important 例3 单选题
有如下程序，请问此程序的执行结果是（    ）。
```python
tup1 = (12,'bc',34,'cd')
tup1[1] = 23
print(tup1[3])
```
- A. cd        
- B. 12        
- C. 34
- D. 程序出现错误[+有如下程序，请问此程序的执行结果是D]  
:::
[+有如下程序，请问此程序的执行结果是D]:
    解析：元组的元素不可修改。
:::important 例4 判断题
Python中如果x,y,z=map(str,range(3))，那么y=1。（    ）[+Python中如果那么y=1错误]
:::
[+Python中如果那么y=1错误]:
    解析：y= '1'。
### 2.2 生成器推导式
::::tip 知识点详解
- 生成器推导式的用法与列表推导式相似。它使用==小括号==作为定界符。生成器推导式与列表推导式==最大的不同==是它的结果是一个生成器对象。生成器对象类似于迭代器对象，具有惰性求值的特点，==比列表推导式更高效，空间占用少==。使用生成器对象的元素时，可以将其转换为列表或元组，也可以使用生成器对象的 __next__() 方法或next() 函数进行遍历，或者直接使用for循环来遍历其中的元素。但是不管用哪种方法，都只能==从前往后==正方向访问其中的元素，没有任何方法可以再次访问已访问过的元素，也不支持使用索引访问其中的元素。
- 生成器推导式是一种特殊的推导式，使用生成器推导式可以直接创建一个生成器对象，而不是列表对象。
- 生成器推导式的语法格式如下：
    ```python
    (表达式 for 变量 in 列表)
    (out_exp_res for out_exp in input_list)
    ```
    - 等价于
    ```python
    for 变量 in 列表:
        if 条件:
            表达式1
        else:
            表达式2
    ```
    - 或
    ```python
    (表达式 for 变量 in 列表 if 条件)
    (out_exp_res for out_exp in input_list if condition)
    ```
    - 或
    ```python
    (表达式1 if 条件 else 表达式2 for 变量 in 列表)
    (out_exp_res1 if condition else out_exp_res2 for out_exp in input_list)
    ```
#### 2.2.1 生成器推导式的应用
```python
g = (x for x in range(10))
print(g)
print(type(g))
print(tuple(g))
print(list(g))   # 生成器只能使用一次
```
- 运行结果
```console
<generator object <genexpr> at 0x00000217204604C8>
<class 'generator'>
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
[] 
```
#### 2.2.2 与map()函数的比较
```python
g = map(str, range(10))
print(g)
print(type(g))
print(tuple(g))
print(list(g))   # 生成器只能使用一次
```
- 运行结果
```console
<map object at 0x00000217204604C8>
<class 'map'>
('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
[]
```
::::
:::caution 易错点-生成器推导式
1. 生成器推导式的语法格式有三种，需要注意。
2. 生成器推导式的结果是一个生成器对象，需要使用tuple()或list()函数将其转换为列表或元组。
3. 生成器对象只能使用一次，使用过一次后，就不能再次使用了。
4. 注意生成器推导式与列表推导式的相同点与不同点。
5. 比较生成器推导式与map()函数执行的结果。
:::
#### 2.2.3 考题模拟-生成器推导式
:::important 例1 单选题
计算1~100的完全平方数，正确的生成器推导式是（    ）。
- A. ```square = (x**2 for x in range(10))```
- B. ```square = (x**2 for x in range(11))```
- C. ```square = (x**2 for x in range(1,11))```[+计算1~100的完全平方数，正确的生成器推导式是C]
- D. ```square = [x**2 for x in range(1,10)]```
:::
[+计算1~100的完全平方数，正确的生成器推导式是C]:
    解析：A项产生0~81的完全平方数，B项产生0~100的完全平方数，D项产生1~81的完全平方数，C项产生1~100的完全平方数，故选C。
:::important 例2 判断题
```python
a = (x for x in range(11) if x%2==0)
```
以上语句是创建一个0~10的偶数的生成器推导式。（    ）[+以上语句是创建一个0~10的偶数的生成器推导式正确]
:::
[+以上语句是创建一个0~10的偶数的生成器推导式正确]:
    解析：创建了0、2、4、6、8、10的生成器推导式，访问过某个元素，这个元素就在生成器中消失。
:::important 例3 判断题
```python
>>>tuple(zip("abcd",range(3)))
```
返回一个元组结果。（    ）[+返回一个元组结果正确]
:::
[+返回一个元组结果正确]:
    解析：程序返回的结果是```(('a', 0), ('b', 1), ('c', 2))```。
## 3. 字符串的转义、格式化及常用操作
:::tip 学习要点
1. 字符串的概念；
2. 字符串的转义字符；
3. 字符串的格式化；
4. 字符串的常用操作。
:::
:::info 对标内容
- 掌握字符串的相关概念及常用操作。
:::
:::note 情景导入
- ==文本==是主要的信息交流方式，文本显示也是电子设备最主要的人机交互方式。文本内容在计算机领域的专业称呼叫“==字符串==”。
- 用Python编程处理字符串，主要涉及字符串的转义字符与格式化，经过处理的文本数据更有价值，输出格式符合特定的要求。
:::

::::tip 知识点详解
### 3.1 字符串的概念
- 在Python中，字符串属于不可变有序序列。使用1对单引号、1对双引号、 3对单引号或3对双引号作为定界符，并且不同的定界符之间可以互相嵌套。
- 除了支持序列通用操作(双向索引、大小比较、长度计算、元素访问、切片、成员测试等)，字符串类型还支持一些特有的用法，如字符串格式化、查找、替换等，但由于字符串属于不可变序列，不能直接对字符串对象进行元素增加、修改与删除等操作，切片操作也只能访问其中的元素，而无法修改字符串中的字符。
#### 3.1.1 字符串的定界符
-  ' '、" "、' ' ' ' ' '、" " " " " "和类型名称str
- 字符串的定界符有1对单引号、1对双引号、3对单引号或3对双引号，并且不同的定界符之间可以互相嵌套，示例如下。
    ```python
    s1 = 'hello'
    s2 = "hello"
    s3 = '''hello'''
    s4 = """hello"""
    print(s1, type(s1))
    print(s2, type(s2))
    print(s3, type(s3))
    print(s4, type(s4))
    ```
    - 运行结果
    ```console
    hello <class 'str'>
    hello <class 'str'>
    hello <class'str'>
    hello <class'str'>
    ```
#### 3.1.2 具有不可变性与有序性
- 字符串不支持原位改变，其中的元素在字符串中具有索引，示例如下。
    ```python
    s = 'hello'
    print(s[0], s[1], s[2], s[3], s[4])
    ```
    - 运行结果
    ```console
    h e l l o
    ```
- 字符串中的元素具有不可变性，示例如下。
    ```python
    s = 'hello'
    s[0] = 'H'
    print(s)
    ```
    - 运行结果
    ```console
    TypeError: 'str' object does not support item assignment
    ```
#### 3.1.3 支持短字符串驻留机制
- Python 支持短字符串驻留机制，不支持长字符串驻留机制。将短字符串赋值给多个不同的对象时，内存中只有一个副本，多个对象共享该副本。然而这一点并不适用于长字符串。
- 示例如下。
    ```python
    s1 = 'hello'
    s2 = 'hello'
    print(s1 is s2)
    s3 = 'hello world'
    s4 = 'hello world'
    print(s3 is s4)
    ```
    - 运行结果
    ```console
    True
    False
    ```
#### 3.1.4 支持中文字符
- Python 3.x 版本完全支持中文字符，默认使用UTF-8编码格式，无论是一个数字、英文字母，还是一个汉字，都按一个字符处理。在Python 3.x版本中甚至可以使用中文作为变量名、函数名等标识符，但不建议这样做。
- 示例如下。
    ```python
    s = '你好'
    print(s, type(s))
    ```
    - 运行结果
    ```console
    你好 <class'str'>
    ```
::::
:::caution 易错点-字符串的概念
1. 在数字型的字符串中使用max()与min()函数时，注意以ASCII（美国信息交换标准码）作为比较依据。max()与min()函数的示例如下。
    ```python
    print(max('123') >max('23'))
    print(min('123') >min('23'))
    ```
    - 运行结果
    ```console
    False
    False
    ```
2. 字符串是不可变序列，在实际操作中，可以给字符串变量重新赋值，变相改变相应的元素的值。在字符串切片操作时，留意“空格”字符串。
    ```python
    s = 'hello'
    s = 'Hello'
    print(s)
    s = 'hello world'
    print(s[0:5])
    print(s[5:11])
    ```
    - 运行结果
    ```console
    Hello
    hello
     world
    ```
:::
#### 3.1.5 考题模拟-字符串的概念
:::important 例1 单选题
```str1=" 你是大英雄"```，执行下列哪个选项可以输出"雄英大是你"（    ）
- A. ```print((str1(0,0))```
- B. ```print(str1[::-1])```[+执行下列哪个选项可以输出雄英大是你B]
- C. ```print(str1[0])```
- D. ```print(str1[0:5])```
:::
[+执行下列哪个选项可以输出雄英大是你B]:
    解析：题干要求实现字符串的翻转功能，故选B。
:::important 例2 单选题
现在有```str1="day day up up ."```，请问 ```str1[5]``` 的值是（    ）？
- A. d    B. a    C. day d[+现在有，请问的值是B]    D. p
:::
[+现在有，请问的值是B]:
    解析：通过字符串的索引获取元素。
:::important 例3 单选题
Python 表达式```"Hello"+"Python"```的值为（    ）。
- A. ```"Hello"+"Python"```       
- B.```"HelloPython"```[+Python表达式的值为B]
- C. ```Hello+Python```           
- D.```"Hello Python"```
:::
[+Python表达式的值为B]:
    解析：题干表达式实现字符串的连接操作。
:::important 例4 判断题
回文指正读和反读都相同的字符序列，如abba、abccba、12321、123321是 “回文”，abcde和ababab则不是“回文”。 在数学中具备这种特征的数就叫作回文数。假设字符变量a中存放的是一个3位数，语句```a[-1:0:-1]```能取出字符变量a中的回文数。（    ）[+能取出字符变量a中的回文数错误]
:::
[+能取出字符变量a中的回文数错误]:
    解析：```a[-1:0:-1]```不能取出字符变量a中的回文数。切片不包含终值“0”。
::::tip 知识点详解
### 3.2 字符串的转义字符
- 转义字符是指在字符串中某些特定的符号前加一个斜杠，之后该字符将被解释为另一种含义，不再表示本来的字符。常用的转义字符见表。

| 转义字符 | 含义 |
| :---: | :---: |
| ```\n``` | 换行 |
| ```\t``` | 制表符 |
| ```\r``` | 回车 |
| ```\b``` | 退格 |
| ```\\``` | 反斜杠 |
| ```\'``` | 单引号 |
| ```\"``` | 双引号 |
|```\ooo``` | 八进制数ooo代表的字符 |
|```\xhh``` | 十六进制数hh代表的字符 |
|```\uhhhh``` | Unicode码点hhhh代表的字符 |
- 示例如下。
    ```python :collapsed-lines=5
    print('hello\nworld')
    print('hello\tworld')
    print('hello\rworld')
    print('hello\bworld')
    print('hello\\world')
    print('hello\'world')
    print('hello"world')
    ```
    - 运行结果
    ```console :collapsed-lines=5
    hello
    world
    hello    world
    hello
    world
    hello'world
    hello"world
    ```
::::
:::caution 易错点-字符串的转义字符
1. ```\ooo```、```\xhh```、```\uhhhh```这3种转义情况不太常用，要关注其用法。
2. 留意转义字符与print()函数的结合使用。
:::
#### 3.2.1 考题模拟-字符串的转义字符
:::important 例1 单选题
赋值语句```path=r'c:\abc\xyz\tag.txt'```，执行结果是（    ）。
- A. ```path 的值是'c:\abc\xyz\tag.txt'```
- B. ```path 的值是'c:\bc\yz\ag.txt'```
- C. ```path 的值是'c:\\abc\\xyz\\tag.txt'```[+赋值语句，执行结果是C]
- D. 提示出错
:::
[+赋值语句，执行结果是C]:
    解析：\\转义一个斜杠，故选C。
:::important 例2 单选题
执行```print('\x65')```的结果是（    ）。
- A. \x65    B. '\x65'    C. e[+执行的结果是C]    D. A
:::
[+执行的结果是C]:
    解析：```\xhh```是2位十六进制对应的字符，十六进制65转换为十进制数，对应的ASCII字符为“e”。
:::important 例3 判断题
Python语句```print( '池塘里' \"快乐的歌唱家\")```的输出结果是：池塘里“快乐的歌唱家”。（    ）[+的输出结果是池塘里快乐的歌唱家错误]
:::
[+的输出结果是池塘里快乐的歌唱家错误]:
    解析：语法错误，正确的语句可以是：print('池塘里\"快乐的歌唱家\"')。
::::tip 知识点详解
### 3.3 字符串的格式化
- Python 中字符串的格式化有%格式化方法和format()格式化方法，%格式化方法的常用符号见表。

| 格式化符号 | 含义 |
| :---: | :---: |
| ```%c``` | 格式化字符及其ASCII码 |
| ```%s``` | 格式化字符串 |
| ```%d``` | 格式化整数 |
| ```%u``` | 格式化无符号整数 |
| ```%o``` | 格式化无符号八进制数 |
| ```%x``` | 格式化无符号十六进制数 |
| ```%X``` | 格式化无符号十六进制数（大写） |
| ```%f``` | 格式化浮点数字，可指定小数点后的精度 |
| ```%e``` | 用科学计数法格式化浮点数 |
| ```%E``` | 作用同%e，用科学计数法格式化浮点数 |
| ```%g``` | %f和%e的简写 |
| ```%G``` | %f和%E的简写 |
| ```%p``` | 用十六进制数格式化变量的地址 |
| ```%%``` | 输出% |
- 示例如下。
    ```python :collapsed-lines=5
    print('Hello %s' %'world')
    print('Hello %s %s' %('world', 'Python'))
    print('Hello %s %s' %('world', 123))
    print('Hello %s %s' %('world', 123.456))
    print('Hello %s %s' %('world', 123.456e2))
    print('Hello %s %s' %('world', 123.456e-2))
    print('Hello %s %s' %('world', 123.456e+2))
    print('Hello %s %s' %('world', 123.456e-2))
    print('Hello %s %s' %('world', 123.456e+2))
    ```
    - 运行结果
    ```console :collapsed-lines=5
    Hello world
    Hello world Python
    Hello world 123
    Hello world 123.456
    Hello world 12345.6
    Hello world 1.23456
    Hello world 12345.6
    Hello world 1.23456
    Hello world 12345.6
    ```
1. str() 函数可以将任意类型转换为字符串，示例如下。
    ```python :collapsed-lines=5
    print('Hello '+str(123))
    print('Hello '+str(123.456))
    print('Hello '+str(123.456e2))
    print('Hello '+str(123.456e-2))
    print('Hello '+str(123.456e+2))
    ```
    - 运行结果
    ```console :collapsed-lines=5
    Hello 123
    Hello 123.456
    Hello 12345.6
    Hello 1.23
    Hello 12300.0
    ```
2. 字符串的format()格式化方法示例如下。
    ```python :collapsed-lines=5
    print('Hello {}'.format('world'))
    print('Hello {} {}'.format('world', 'Python'))
    print('Hello {} {}'.format('world', 123))
    print('Hello {} {}'.format('world', 123.456))
    print('Hello {} {}'.format('world', 123.456e2))
    print('Hello {} {}'.format('world', 123.456e-2))
    print('Hello {} {}'.format('world', 123.456e+2))
    print('Hello {} {}'.format('world', 123.456e-2))
    print('Hello {} {}'.format('world', 123.456e+2))
    ```
    - 运行结果
    ```console :collapsed-lines=5
    Hello world
    Hello world Python
    Hello world 123
    Hello world 123.456
    Hello world 12345.6
    Hello world 1.23456
    Hello world 12345.6
    Hello world 1.23456
    Hello world 12345.6
    ```
3. format() 格式化方法```[:.f]```,[:x],[:o],[:b]等格式化符号示例如下。
    ```python :collapsed-lines=5
    print('Hello {:.2f}'.format(123.456))
    print('Hello {:x}'.format(123))
    print('Hello {:o}'.format(123))
    print('Hello {:b}'.format(123))
    ```
    - 运行结果
    ```console :collapsed-lines=5
    Hello 123.46
    Hello 7b
    Hello 173
    Hello 1111011
    ```
4. format() 格式化方法切片操作示例如下。
    ```python :collapsed-lines=5
    print('Hello {0:10.2f}'.format(123.456))
    print('Hello {0:10x}'.format(123))
    print('Hello {0:10o}'.format(123))
    print('Hello {0:10b}'.format(123))
    ```
    - 运行结果
    ```console :collapsed-lines=5
    Hello     123.46
    Hello         7b
    Hello        173
    Hello    1111011
    ```
::::
:::caution 易错点-字符串的格式化
1. str() 函数可以将任意类型转换为字符串,而不仅仅是将数字转换为数字字符串。
2. 字符串format()格式化方法是高频考点，必须强化训练。
:::
#### 3.3.1 考题模拟-字符串的格式化
:::important 例1 单选题
运行下列程序，正确的结果是（    ）。
```python
>>>print("{:06.2f}".format(3.1415926))
 ```
- A. '003.14'    B. 003.14[+运行下列程序，正确的结果是B]    C. '3.14'    D. 3.14
:::
[+运行下列程序，正确的结果是B]:
    解析：结果保留2位小数、6位有效数字（Python中小数点与数字前面的0都是有效数字）。
:::important 例2 判断题
某 Python 程序段如下,运行该程序段，输出结果是2。（    ）[+运行该程序段，输出结果是2错误]
```python
s = "Errors should never pass silently．"
d = {}
for ch in s:
    if ch in d:
        d[ch] += 1
    else:
        d[ch] = 1
print(d["e"])
```
:::
[+运行该程序段，输出结果是2错误]:
    解析：正确的输出结果是3。
:::important 例3 判断题
```'{0:%}'.format(3.14)``` 返回 ```'3.140000%'```；```'{0:.2f}'.format(3.14)``` 返回 ```'3.14'```。（    ）[+314.000000错误]
:::
[+314.000000错误]:
    解析：```'{0:%}'.format(3.14)``` 返回 ```'314.000000%'```。
::::tip 知识点详解
### 3.4 字符串的常用操作
#### 3.4.1 find()、rfind()
- ==find==()方法从字符串的开头开始搜索子字符串str，若在指定的beg（起始索引，包含）和end（结束索引，不包含）范围内找到子字符串，就返回子字符串在原字符串中的起始索引位置；若未在该范围内找到，则返回 - 1。
    ```python
    str.find(str, beg=0, end=len(string))
    ```
    - str -- 指定检索的字符串
    - beg -- 开始索引，默认为0
    - end -- 结束索引，默认为字符串的长度
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.find('o'))
        print(str1.find('o', 1, 5))
        print(str1.find('o', 1, 4))
        print(str1.find('o', 1, 3))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        4
        4
        -1
        -1
        ```
- ==rfind==() 方法用于检测字符串中是否包含子字符串 str ，如果指定 beg（开始） 和 end（结束） 范围，它从字符串末尾开始向前搜索，若找到子字符串，返回的是子字符串在原字符串中最后一次出现的起始索引位置；若未找到，则返回 - 1。。
    ```python
    str.rfind(str, beg=0, end=len(string))
    ```
    - str -- 指定检索的字符串
    - beg -- 开始索引，默认为0
    - end -- 结束索引，默认为字符串的长度
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.rfind('o'))
        print(str1.rfind('o', 1, 5))
        print(str1.rfind('o', 1, 4))
        print(str1.rfind('o', 1, 3))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        7
        4
        -1
        -1
        ```
#### 3.4.2 lower()、upper()、capitalize()、title()
- ==lower==()方法将字符串中的大写字母转换为小写字母。
    ```python
    str.lower()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.lower())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        hello world
        ```
- ==upper==()方法将字符串中的小写字母转换为大写字母。
    ```python
    str.upper()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.upper())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        HELLO WORLD
        ```
- ==capitalize==()方法将字符串的第一个字母大写，其他字母小写。
    ```python
    str.capitalize()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.capitalize())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        Hello world
        ```
- ==title==()方法将字符串的每个单词首字母大写，其他字母小写。
    ```python
    str.title()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.title())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        Hello World
        ```
#### 3.4.3  strip()、rstrip()、lstrip()
- ==strip==()方法用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列。
    ```python
    str.strip([chars])
    ```
    - chars -- 移除字符串头尾指定的字符序列
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.strip())
        print(str1.strip('d'))
        print(str1.strip('dle'))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        hello world
        hello worl
        hello wor
        ```
- ==rstrip==()方法用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列。
    ```python
    str.rstrip([chars])
    ```
    - chars -- 移除字符串头尾指定的字符序列
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.rstrip())
        print(str1.rstrip('d'))
        print(str1.rstrip('dle'))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        hello world
        hello worl
        hello wor
        ```
- ==lstrip==()方法用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列。
    ```python
    str.lstrip([chars])
    ```
    - chars -- 移除字符串头尾指定的字符序列
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.lstrip())
        print(str1.lstrip('h'))
        print(str1.lstrip('hel'))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        hello world
        ello world
        o world
        ```
#### 3.4.4 replace()、startswith()、endswith()、isnumeric()、isalpha()
- ==replace==()方法用于将字符串中的 str1 替换成 str2,如果 count 指定，则替换不超过 count 次。
    ```python
    str.replace(str1, str2,  count=string.count(str1))
    ```
    - str1 -- 将被替换的子字符串。
    - str2 -- 新字符串，用于替换str1子字符串。
    - count -- 可选字符串, 替换不超过 count 次。
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.replace('o', 'O'))
        print(str1.replace('o', 'O', 1))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        hellO wOrld
        hellO world
        ```
- ==startswith==()方法用于检查字符串是否是以指定子字符串开头，如果是则返回 True，否则返回 False。如果参数 beg 和 end 指定值，则在指定范围内检查。
    ```python
    str.startswith(str, beg=0,end=len(string))
    ```
    - str -- 检测的字符串。
    - beg -- 可选参数用于设置字符串检测的起始位置。
    - end -- 可选参数用于设置字符串检测的结束位置。
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.startswith('h'))
        print(str1.startswith('he'))
        print(str1.startswith('he', 1, 5))
        print(str1.startswith('he', 1, 4))
        print(str1.startswith('he', 1, 3))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        True
        True
        False
        False
        False
        ```
- ==endswith==()方法用于判断字符串是否以指定后缀结尾，如果以指定后缀结尾返回True，否则返回False。可选参数"start"与"end"为检索字符串的开始与结束位置。
    ```python
    str.endswith(suffix, beg=0, end=len(string))
    ```
    - suffix -- 该参数可以是一个字符串或者是一个元素。
    - beg -- 字符串中的开始位置。
    - end -- 字符中结束位置。
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'hello world'
        print(str1.endswith('d'))
        print(str1.endswith('d', 1, 5))
        print(str1.endswith('d', 1, 4))
        print(str1.endswith('d', 1, 3))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        True
        False
        False
        False
        ```
- ==isnumeric==()方法检测字符串是否只由数字组成。这种方法是只针对unicode对象。
    ```python
    str.isnumeric()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = '12345'
        print(str1.isnumeric())
        str2 = '12345a'
        print(str2.isnumeric())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        True
        False
        ```
- ==isalpha==()方法检测字符串是否只由字母组成。
    ```python
    str.isalpha()
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        str1 = 'abcde'
        print(str1.isalpha())
        str2 = 'abcde1'
        print(str2.isalpha())
        ```
        - 运行结果
        ```console :collapsed-lines=5
        True
        False
        ```
- ==注意==：介绍的这些方法不会修改原始字符串，而是返回一个新的字符串对象。
::::
:::caution 易错点-字符串的常用操作
1. 执行字符串的各种操作，都不会改变原字符串本身，可以通过重新赋值的方法变相改变字符串。
2. 字符串的常用操作通常会以小段程序的形式出现在考试当中，要加强程序编写的训练。
:::
#### 3.4.5 考题模拟-字符串的常用操作
:::important 例1 单选题        
现有字符串```S= "Where there's a will there's a way."```, 现在需要计算并输出字符串S中'e'出现的次数，正确的语句是（    ）。[+现在需要计算并输出字符串S中C]
- A. ```print(S.find('e',1))```
- B. ```print(S.index('e'))```
- C. ```print(S.count('e'))```
- D. ```print(S.index('e',0,len(S)))```
:::
[+现在需要计算并输出字符串S中C]:
    解析：S.count() 方法实现统计子串在字符串中出现的次数。
:::important 例2 判断题
在Python中设定字符串```str="Hello Python"```，则 ```str.find('w')``` 返 回 值 为0。（    ）[+在Python中设定字符串错误]
:::
[+在Python中设定字符串错误]:
    解析：未找到，返回-1。
:::important 例3 判断题
```python
>>>str='nihao\nliping\nzhang san'
>>> str.split()
```
结果是：```['nihao', 'liping', 'zhang', 'san']```。（    ）[+3453结果是正确]
:::
[+3453结果是正确]:
    解析：在调用split()方法时，若不传递任何参数，则会使用任意空白字符（包括空格、换行符、制表符等）作为分隔符；若字符串存在连续的空白字符，则按一个空白字符对待，并且返回结果中不包含任何空字符串。

## 4. range类型的用法及常用操作
:::tip 学习要点
1. range类型的概念；
2. range类型的用法；
3. range类型的常用操作。
:::
:::info 对标内容
- 掌握range类型的用法及常用操作。
:::
:::note  情景导入
- 按照学号，分别统计全班40位同学的考试平均分，可以采用循环结构处理成绩数据，循环次数是明确的。在Python中，我们可以使用range类型构造循环执行的范围（1~40号）。
:::
::::tip 知识点详解
### 4.1 range类型的概念
- range类型是Python中的一种不可变序列类型，用于表示一个整数序列。它通常用于循环结构中，生成一个整数序列，然后对序列中的每个元素执行相同的操作。
    ```python
    range(stop)
    range(start, stop[, step])
    ```
    - start：可选参数，表示序列的起始值，默认为0。
    - stop：必选参数，表示序列的结束值（不包含）。
    - step：可选参数，表示序列中相邻元素之间的差值，默认为1。
    - 示例如下。
        ```python :collapsed-lines=5
        print(range(5))
        print(range(1, 5))
        print(range(1, 5, 2))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        range(0, 5)
        range(1, 5)
        range(1, 5, 2)
        ```
    - 注意：range类型的元素是不可变的，因此不能对其进行修改。
#### 4.1.1 range类型的定界符range()和类型名称range
- 可以用range(起始值,终止值,步长)来定界一个range类型，括号内的参 数用逗号分隔。用内置函数type()检测其类型为range。
    ```python
    range(起始值,终止值,步长)
    type(range(起始值,终止值,步长))
    ```
    - 示例如下。
        ```python :collapsed-lines=5
        print(range(1, 10, 2))
        print(type(range(1, 10, 2)))
        ```
        - 运行结果
        ```console :collapsed-lines=5
        range(1, 10, 2)
        <class 'range'>
        ```
- 具有不可变性与有序性
    - range类型具有不可变性，即不能修改其中的元素；
        - 示例如下。
            ```python :collapsed-lines=5
            r = range(1, 10, 2)
            r[0] = 0
            ```
            - 运行结果
            ```console :collapsed-lines=5
            TypeError: 'range' object does not support item assignment
            ```
    - range类型具有有序性，即可以通过索引访问其中的元素。
        - 示例如下。
            ```python :collapsed-lines=5
            r = range(1, 10, 2)
            print(r[0])
            print(r[1])
            print(r[2])
            ```
            - 运行结果
            ```console :collapsed-lines=5
            1
            3
            5
            ```
    - 遍历range范围
        ```python :collapsed-lines=5
        r = range(1, 10, 2)
        for i in r:
            print(i)
        ```
        - 运行结果
        ```console :collapsed-lines=5
        1
        3
        5
        7
        9
        ```
::::
:::caution 易错点-range类型的用法及常用操作
1. range类型生成的序列不会包括给定的终止值。
2. range类型具有不可变序列的某些特性。
:::
#### 4.1.2 考题模拟-range类型的用法及常用操作
:::important 例1 单选题
对于```r=range(5)```，合法的方法是（    ）。
A. ```r[2]=8```    B. ```del r[2]```    C. ```r.pop()```    D. ```r.count(2)```[+4121合法的方法是D]
:::
[+4121合法的方法是D]:
    解析：range类型具有不可变序列的某些特性，故选D。
:::important 例2 单选题
下列语句的输出结果是（    ）。
```python
for i in "xyz":
    for j in range(3):
      print(i,end=' ')
          if  i=="z":
              break
```
- A. xxxyzzz        
- B. xxxyyyz[+4122下列语句的输出结果是B]
- C. xxxyyyzzz     
- D. xyyyzzz
:::
[+4122下列语句的输出结果是B]:
    解析：x打印3次，y打印3次，z打印1次，退出循环。
:::important 例3 单选题
下列程序为求1~100所有偶数之和，则在①处应填入（    ）。
```python
ans = 0
for i in range( ① ):
    ans += i
print(ans)
```
- A. 1,100,2        
- B. 1,101,2        
- C. 2,101,2 [+下列程序为求1~100所有偶数之和，则在①处应填入C]       
- D. 2,100,2
:::
[+下列程序为求1~100所有偶数之和，则在①处应填入C]:
    解析：起始值为2，终止值包含100，步长为2，所以为（2,101,2）。
:::important 例4 判断题
```python
>>> list(enumerate(range(3)))
```
返回值为```[(0, 0), (1, 1), (2, 2)]```。（    ）[+4124返回值为]
:::
[+4124返回值为]:
    解析：enumerate()函数将在从range()内取到的每个元素前面加上索引号。

## 5. 字典类型的用法及常用操作
## 6. 集合类型的用法及常用操作
## 7. 序列解包的运用
## 8. 常用标准库的应用