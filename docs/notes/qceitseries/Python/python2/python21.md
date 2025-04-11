---
title: Python2级试卷
createTime: 2025/03/21 12:33:09
icon: tabler:rosette-number-2
permalink: /qceitseries/Python/python2/python21.html
---
## 试卷2209
### 2209单选题
:::important 单选题1
这道题考察的是 Python 中列表（List）和 `len()` 函数的基本使用：
1. 代码内容：
```python
means=['Thank','You']
print(len(means))
```
2. 考点分析：
- 列表的创建和基本语法
- `len()` 函数的使用 - 用于获取序列（如列表、字符串等）的长度
- Python 中字符串作为列表元素的使用
3. 具体分析：
- `means` 是一个包含两个字符串元素的列表：`'Thank'` 和 `'You'`
- `len(means)` 会返回列表 `means` 中元素的个数
- 因此输出结果为 `2`
4. 答案解释：
- 选项 C（2）是正确答案
- 因为列表 `means` 只包含两个元素：`'Thank'` 和 `'You'`
- `len()` 函数返回的是列表中元素的数量，而不是字符串的总长度
这是一道基础的 Python 列表操作题目，主要测试考生是否理解列表的基本概念和 `len()` 函数的使用方法。
:::
### 2209判断题
### 2209编程题
::::important 行李尺寸检查
```python :collapsed-lines=5
while True:
    # 获取输入并分割
    dimensions = input("请输入行李的长、宽、高(用逗号分隔): ").split(',')
    l, w, h = map(int, dimensions)
        
    # 判断是否满足条件
    if (60 <= l <= 203) and (60 <= w <= 203) and (60 <= h <= 203):
        print("可以托运")
    else:
        print("不可以托运")
```
::::
::::important 编写程序统计文本中的话
```python :collapsed-lines=5
# 获取用户输入的文本
text = input("请输入一段文字：")

# 初始化计数器
count = 0

# 遍历文本中的每个字符
for char in text:
    # 判断是否是句子结束符号
    if char in '.?!':
        count += 1

# 输出统计结果
print(f"这段话中共有{count}句话")
```
::::