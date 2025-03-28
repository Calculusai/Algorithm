---
title: 二分查找
tags:
  - 搜索算法
  - 二分查找
createTime: 2025/03/17 22:41:57
permalink: /algorithm/Searching/Searching1.html
---


==二分查找==(binary search)作为分治策略的典型应用，在有序数据结构的搜索场景中展现出卓越的效率。
:::note
该算法通过递归地将目标值与当前区间中点元素进行比较，将搜索范围动态缩减至左半区或右半区，其数学本质是构建一个严格递减的区间长度序列。
:::
这种策略保证了每轮迭代后，剩余元素数量以对数级速度减少，最终在O(log n)的时间复杂度内完成搜索任务。当目标元素存在时，算法通过迭代收缩区间定位其位置；若最终区间下界超过上界，则证明目标元素不存在。


## 二分查找核心思想

:::steps
1. 前提条件:

    数组必须是==有序的==（升序或降序）

2. 基本步骤:

    :::steps
    1. 每次取数组的中间元素，与目标值比较。
    
    2. 根据比较结果缩小搜索范围（左半部分or右半部分）。
    
    3. 重复上述过程，直到==找到目标值==or==确定不存在==
    :::
    
:::
### 算法实例
#### 目标值==存在==
:::info
在有序数组 [2, 4, 6, 8, 10] 中查找元素 6 的位置。
:::
:::steps
1. 初始状态

    + 数组: ``` [2, 4, 6, 8, 10]```
    
    + 目标值: ``` 6```
    
    + 左边界:  ``` left = 0```
        
    + 右边界: ``` right = 4```


2. 第一次循环

    :::steps
    1. 计算中间位置 ```mid = (left + right) // 2 = (0+4)//2 = 2```
    
        + 中间元素是 6（索引 2）。
    
    2. 比较中间元素与目标值：```6 == 6``` → 找到目标，返回索引 ```2```。
    :::

:::

#### 目标值==不存在==
:::info
假设目标值为5
:::

:::steps
1. 初始状态

    + ```left = 0```, ```right = 4```

2. 第一次循环

    + ```mid = 2```，元素 ```6 > 5``` → 目标在左半部分。
    + 更新右边界：```right = mid - 1 = 1```。


3. 第二次循环

    + ```mid = (0+1)//2 = 0```，元素 ```2 < 5``` → 目标在右半部分。
    + 更新左边界：```left = mid + 1 = 1```。


4. 第三次循环

    + 此时 ```left > right``` → 目标不存在，返回 ```-1```。

:::

#### 二分查找的关键细节

+ 中间位置计算[+中间位置计算]
+ 循环条件[+循环条件]
+ 边界更新[+边界更新]

[+中间位置计算]: 
    + 正确写法：```mid = left + (right - left) // 2```
    + 避免溢出（当 ```left + right``` 超过整数范围时）。
[+循环条件]:
    + 使用 ```while left <= right```，确保所有元素都被检查。
[+边界更新]:
    - 若中间元素大于目标值，```right = mid - 1```。
    - 若中间元素小于目标值，```left = mid + 1```。
#### 时间复杂度与空间复杂度
+ 时间复杂度[+时间复杂度]
+ 空间复杂度[+空间复杂度]
[+时间复杂度]:```O(log n)```，每次将问题规模减半。
[+空间复杂度]:
    + ```O(1)```（迭代实现）
    + ```O(log n)```（递归实现，递归栈深度）。

#### 代码实现如下所示
::: code-tabs
@tab Python
```Python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

@tab C++
```cpp
#include <iostream>
#include <vector>

int binary_search(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
    
```
:::
:::tip
二分查找通过分治思想高效缩小搜索范围，适用于有序数组的快速查找。理解其核心逻辑后，可进一步扩展到变种问题（如查找第一个 / 最后一个出现的位置）。
:::