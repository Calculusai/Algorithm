---
title: Python3级试卷
tags:
  - 电子协会考级
  - Python三级算法
icon: tabler:rosette-number-3
createTime: 2025/03/17 13:38:41
permalink: /qceitseries/Python/python3/python31.html
---

## 试卷-2209
### 一、单选题(共25题，每题2分，共50分)
### 二、判断题(共10题，每题2分，共20分)
### 三、编程题(共2题，共30分)
#### 1.计算所有库存书籍的总价(4分)
如下图有一个名为“book.csv”的文件，小明想计算所有库存书籍的总价，于是编写了下面代码。请将红色①②处的代码补充完整。

```text
书名,价格,库存量
西游记,40,253
红楼梦,80,452
三国志,60,164
聊斋志异,50,172
水浒传,70,561
老残游记,55,492
封神演义,74,497
```

```python
b = 0
s = 0
with open('/data/book.csv', 'r', encoding='utf-8') as f:
    for line in f.    ①    ():
        a = line.strip("\n").split(",")
        b = b+1
        if b >1: # 第一行是标题，所以从第二行开始计算
            s = s +   int(a[1]) *    ②     
print('总价：' , s)
```
##### 1.1 题解代码分析
变量初始化
```python
b = 0  
s = 0  
```
```b：```这是一个计数器，用于记录当前读取到 CSV 文件的第几行。初始值设为 0。
```s：```这是一个累加器，用于存储每行数据特定两列数值乘积的累加结果，初始值设为 0。
打开文件并逐行处理
```python
with open('20250308.csv', 'r', encoding='utf-8') as f:
    for line in f.readlines():
```
```with open('20250308.csv', 'r', encoding='utf-8') as f:：```使用 with 语句打开名为 20250308.csv 的文件，以只读模式（'r'）打开，并指定编码为 utf-8。with 语句会在代码块执行完毕后自动关闭文件，避免资源泄漏。
```for line in f.readlines():：```readlines() 方法会将文件中的所有行读取出来，存储为一个列表，列表中的每个元素是文件的一行。然后使用 for 循环遍历这个列表，依次处理每一行数据。
处理每行数据
```python
        a = line.strip("\n").split(",")
```
```line.strip("\n")：```strip("\n") 方法用于去除字符串 line 首尾的换行符 \n。
```.split(",")：```split(",") 方法会根据逗号 , 对字符串进行分割，将分割后的结果存储为一个列表。例如，如果 line 是 "1,2,3"，那么 a 将会是 ['1', '2', '3']。
计数器加 1
```python
        b = b + 1  
```
每处理完一行数据，计数器 b 的值加 1，表示当前已经处理到文件的第几行。
计算乘积并累加
```python
        if b > 1:  
            s = s + int(a[1]) * int(a[2])  
```
```if b > 1:：```判断当前处理的是否为第二行及以后的数据。通常 CSV 文件的第一行是表头，不包含实际的数据，所以这里跳过第一行。
```int(a[1]) * int(a[2])：```将列表 a 中的第二个元素（索引为 1）和第三个元素（索引为 2）转换为整数类型，然后计算它们的乘积。
```s = s + int(a[1]) * int(a[2])：```将计算得到的乘积累加到累加器 s 中。
输出结果
```python
print('总价：', s)
```
最后，使用 print 函数输出计算得到的总价，即累加器 s 的值。

##### 1.2 题解代码
```python
b = 0  
s = 0  
with open('/data/book.csv', 'r', encoding='utf-8') as f:
    for line in f.readlines():  # ①处填 readlines
        a = line.strip("\n").split(",")  
        b = b + 1  
        if b > 1:  
            s = s + int(a[1]) * int(a[2])  # ②处填 int(a[2])
print('总价：', s)   
```
#### 2.二分法对关键字14查找(10分)
小敏想用二分法对关键字14进行查找，请你帮她补全代码。
```python
lst=[3,12,7,45,9,10,31,90,1,23,14,52]
      ①      
key=14
n=len(a)
i,j=0,n-1
flag=-1
while       ②      :
    mid=(i+j)//2
    if key==a[mid]:
        flag=mid
        break
    elif key>a[mid]:
              ③      
    else:
        j=mid-1
if       ④      :
    print(str(key)+'没找到！')
else:
    print(str(key)+'已找到！')
```
##### 2.1 题目解析
**分析代码中的变量使用和二分查找逻辑：**
+ 列表变量名不统一，第 1 行是lst，后续用a，需统一，①处填a = lst。
+ 二分查找循环条件是i <= j，②处填i <= j。
+ 当key > a[mid]时，调整左边界i = mid + 1，③处填i = mid + 1。
+ 最后判断是否找到，若flag == -1则未找到，④处填flag == -1。
##### 2.2 参考代码
````python
lst=[3,12,7,45,9,10,31,90,1,23,14,52]
a = lst  # ① 统一变量名
key=14
n=len(a)
i,j=0,n-1
flag=-1
while i <= j:  # ② 循环条件
    mid=(i+j)//2
    if key==a[mid]:
        flag=mid
        break
    elif key>a[mid]:
        i = mid + 1  # ③ 调整左边界
    else:
        j=mid-1
if flag == -1:  # ④ 判断是否找到
    print(str(key)+'没找到！')
else:
    print(str(key)+'已找到！')
````
#### 3.判断考试答题卡的填涂(16分)
标准考试答题卡一般采用2B铅笔填涂，填涂好的答题卡经过扫描后得到相应的数字化图像，再通过光学识别，完成答题卡信息数据的采集、分析与统计。计算机判断答题卡中信息点被
填涂的标准是灰度值小于132为黑色，灰度值大于等于132为白色。
```灰度值计算公式：```灰度值=0.299×红色分量（R）+0.587×绿色分量（G）+0.114×蓝色分量（B）,若分别输入n个信息点的RGB颜色值，则其判断程序如下:  
```python
n=int(input("请输入信息点个数："))
count=0
for i in range(1,n+1):
    R=int（input（”请输入红色分量：”）） 
      ①   
    B= int（input（”请输入蓝色分量：”）） 
    Gray_scale=   ②   
    if    ③   :
        print(“黑色”) 
        count=count+1
    else： 
         print(“白色”) 
print("黑色像素总共有："+   ④   +"个")
```
##### 3.1 题目解析
代码功能是根据输入的 RGB 值计算灰度值，判断每个信息点是黑色（灰度 < 132）还是白色，并统计黑色数量。需要补全的部分包括：输入绿色分量、计算灰度值、判断条件、输出黑色数量。
#### 3.2 参考代码
```python
n=int(input("请输入信息点个数："))
count=0
for i in range(1,n+1):
    R=int(input("请输入红色分量："))
    G= int(input("请输入绿色分量："))  # ① 补全绿色分量输入
    B= int(input("请输入蓝色分量："))
    Gray_scale= 0.299*R + 0.587*G + 0.114*B  # ② 按公式计算灰度值
    if Gray_scale < 132:  # ③ 灰度值小于132判断为黑色
        print("黑色")
        count=count+1
    else:
        print("白色")
print("黑色像素总共有：" + str(count) +"个")  # ④ 将count转为字符串输出
```
##### 3.3 代码解释
+ ①处：输入绿色分量，代码为``` G= int(input("请输入绿色分量："))```。
+ ②处：根据灰度值公式计算，代码为 ```0.299 * R + 0.587 * G + 0.114 * B```。
+ ③处：判断条件，灰度值小于 132 时为黑色，条件为 ```Gray_scale < 132```。
+ ④处：输出黑色像素总数，需将整数 count 转为字符串，使用 ```str(count)```。