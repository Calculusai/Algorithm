---
title: Python1级算法题
createTime: 2025/03/21 12:33:09
icon: tabler:rosette-number-1
permalink: /qceitseries/Python/python1/python11.html
---
## 试卷2209
### 2209单选题
:::important 单选题1
表达式`len("学史明理增信，读史鉴生安生活") > len(" reading history will benefit you ")`的结果是？（ ）(2分)

- A. `0`
- B. `True` 
- C. `False` [+表达式len>的结果是？]
- D. `1`
:::
[+表达式len>的结果是？]:
    :::note 解析
    - `len()`函数用于返回字符串、列表、元组等序列的长度
    - `len("学史明理增信，读史鉴生安生活")`计算的是这个中文字符串的长度
    - 在Python中，一个中文字符的长度为1，因此这个字符串的长度为16（14个中文字符+2个标点符号）
    - `len(" reading history will benefit you ")`计算的是这个英文字符串的长度，包括空格
    - 这个英文字符串的长度为36（包括所有字母和空格）
    - 比较两个长度：16 > 36是False
    - 因此，表达式`len("学史明理增信，读史鉴生安生活") > len(" reading history will benefit you ")`的结果是`False`
    - 正确答案是C（`False`）
    :::

:::important 单选题2
表达式`(2<1)==False`的结果是？（ ）(2分)

- A. `None`
- B. `True` [+表达式(2<1)==False的结果是？]
- C. `Error`
- D. `False`
:::
[+表达式(2<1)==False的结果是？]:
    :::note 解析
    - 该表达式涉及两部分：`(2<1)`和`==False`
    - 首先计算`(2<1)`的结果：2小于1是不成立的，因此`(2<1)`的值为`False`
    - 然后计算`(2<1)==False`：这是在比较`False==False`
    - 由于两边的值确实相等，所以整个表达式的结果是`True`
    - 这个表达式本质上是在检查"2小于1"这个命题是否为假，而该命题确实为假
    - 因此，正确答案是B（`True`）
    :::

:::important 单选题3
在Python中，`type()`函数用于查看对象的数据类型，在Python shell 中运行`type(6*"20")`，运行结果为? （ ）(2分)

- A. `<class 'int'>`
- B. `<class 'str'>` [+在Python中，type()函数用于查看对象的数据类型，在中运行type，运行结果为?B]
- C. `<class 'float'>`
- D. 语法错误
:::
[+在Python中，type()函数用于查看对象的数据类型，在中运行type，运行结果为?B]:
    :::note 解析
    - `type()`函数用于返回对象的类型
    - 表达式`6*"20"`中，数字6和字符串"20"之间使用了乘法运算符`*`
    - 在Python中，当数字与字符串之间使用乘法运算符时，表示将该字符串重复指定的次数
    - 因此`6*"20"`会返回字符串"20"重复6次的结果，即"202020202020"
    - 这个结果是一个字符串，因此`type(6*"20")`会返回`<class 'str'>`
    - 正确答案是B（`<class 'str'>`）
    :::
:::important 单选题4
关于turtle的运动体系中，说法正确的是？（ ）(2分)

- A. `turtle.goto(x,y)`可以让小海龟直线前进到指定的坐标位置。 [+关于turtle的运动体系中，说法正确的是？A]
- B. `turtle.forward(a)`可以让小海龟向前移动a个像素，如果a为负数，运动方向不变，只是小海龟自身的方向与原来相反。
- C. `turtle.seth()、turtle.left()、turtle.right()`的参数均为相对角度。
- D. `turtle.dot(r)≡turtle.circle(r)`的参数均为半径。
:::
[+关于turtle的运动体系中，说法正确的是？A]:
    :::note 解析
    - 选项A：`turtle.goto(x,y)` 确实可以让小海龟直线移动到指定的坐标位置(x,y)，不管小海龟当前的朝向如何，它都会沿直线移动到目标坐标。这种移动不会改变小海龟的朝向。这个说法是正确的。
    
    - 选项B：`turtle.forward(a)` 命令会让小海龟沿着当前朝向前进a个像素。如果a为负数，小海龟会沿着当前朝向的反方向移动，而不是保持运动方向不变并改变自身方向。这个说法是错误的。
    
    - 选项C：这三个函数的参数含义不同：
      - `turtle.seth(angle)` 是设置小海龟的绝对角度，即相对于东方（右方）的角度，而不是相对角度
      - `turtle.left(angle)` 和 `turtle.right(angle)` 是相对于当前方向的角度变化
      因此这三个函数的参数并非都是相对角度，这个说法是错误的。
    
    - 选项D：`turtle.dot(r)` 和 `turtle.circle(r)` 的功能和参数含义完全不同：
      - `turtle.dot(size, color)` 是在当前位置绘制一个点，参数是点的大小
      - `turtle.circle(radius, extent)` 是绘制一个圆，参数是半径和弧度
      这个说法是错误的。
    
    - 综上所述，只有选项A是正确的。
    :::
:::important 单选题5
在turtle画图中，常常使用turtle.color(color1,color2)指令进行画笔颜色和填充颜色的设置，下列关于该指令使用正确的是？（ ）(2分)

- A. `turtle.color("red","yellow")`表示画笔颜色为黄色，背景颜色为红色。
- B. `turtle.color("red")`表示画笔颜色为红色，背景颜色随机。
- C. `turtle.color(color1,color2)`指令中的参数color2是可选项，可以只有一个颜色参数。 [+在turtle画图中，常常使用turtle.color(color1,color2)指令进行画笔颜色和填充颜色的设置，下列关于该指令使用正确的是？]
- D. `turtle.color(color1,color2)`指令中若将color1和color2删掉，即turtle.color()小海龟在向前走100像素时，画布不会出现小海龟的轨迹。
:::
[+在turtle画图中，常常使用turtle.color(color1,color2)指令进行画笔颜色和填充颜色的设置，下列关于该指令使用正确的是？]:
    :::note 解析
    - 选项A：`turtle.color("red","yellow")` 表示画笔颜色为红色(第一个参数)，填充颜色为黄色(第二个参数)，而不是背景颜色。背景颜色需要使用`turtle.bgcolor()`来设置。这个说法是错误的。
    
    - 选项B：`turtle.color("red")` 确实表示设置画笔颜色为红色，但当只提供一个参数时，填充颜色也会被设置为相同的颜色(红色)，而不是随机颜色。这个说法是错误的。
    
    - 选项C：`turtle.color(color1,color2)` 函数中，color2参数确实是可选的。如果只提供一个颜色参数(color1)，则该颜色会同时被应用为画笔颜色和填充颜色。这个说法是正确的。
    
    - 选项D：`turtle.color()` 不带参数时，会返回当前的画笔颜色和填充颜色，而不会改变颜色设置。当小海龟移动时，轨迹仍会根据当前设置的画笔颜色显示，除非使用`penup()`命令抬起画笔。这个说法是错误的。
    
    - 综上所述，只有选项C是正确的。
    :::
:::important 单选题6
如图所示，想要将一行输出的两句诗词，变成二行输出方式，应该如何写输出指令？（ ）(2分)

- A. `print("床前明月光, 疑是地上霜")`
- B. `print("""床前明月光 疑是地上霜""")`
- C. 
```python
print("床前明月
光疑是地上霜")
```
- D. [+如图所示，想要将一行输出的两句诗词，变成二行输出方式，应该如何写输出指令？]
```python
print("""床前明月光
        疑是地上霜""")
```
:::
[+如图所示，想要将一行输出的两句诗词，变成二行输出方式，应该如何写输出指令？]:
    :::note 解析
    - 题目要求将两句诗词从一行输出变为两行输出，需要使用换行符
    - 在Python中，`\n`是换行符，用于在字符串中插入换行
    - 选项A：`print("床前明月光, 疑是地上霜")` 只会在一行中输出文本，中间有逗号分隔，不会换行
    - 选项B：`print("""床前明月光 疑是地上霜""")` 使用了三引号，但没有包含换行符，仍会在一行中输出
    - 选项C：`print("床前明月光疑是地上霜")` 在两句诗词之间使用了`\n`换行符，会实现两行输出的效果
    - 选项D：`print("""床前明月光\n疑是地上霜""")` 使用了三引号和换行符，效果与选项C相同，都能实现两行输出

    - 因此，正确答案是选项D
    :::
:::important 单选题7
绘制一个半径为5的红色圆点，下列选项不正确的是？（ ）(2分)

- A. 
```python
import turtle
turtle.color("red")
turtle.dot(10)
turtle.done()
```

- B. 
```python
import turtle
turtle.color("red","red")
turtle.begin_fill()
turtle.circle(5)
turtle.end_fill()
turtle.done()
```

- C. 
```python
import turtle
turtle.pencolor("red")
turtle.dot(10)
turtle.done()
```

- D. [+绘制一个半径为5的红色圆点，下列选项不正确的是？]
```python
import turtle
turtle.color("red")
turtle.dot(5)
turtle.done()
```

:::
[+绘制一个半径为5的红色圆点，下列选项不正确的是？]:
    :::note 解析
    - 在turtle模块中，绘制圆点的方法主要有两种：使用`dot()`函数或使用`begin_fill()`和`circle()`组合
    
    - 选项A：
      ```python
      import turtle
      turtle.color("red")
      turtle.dot(10)
      turtle.done()
      ```
      使用`dot(10)`表示绘制直径为10的圆点，即半径为5的圆点，颜色为红色。这是正确的。
    
    - 选项B：
      ```python
      import turtle
      turtle.color("red","red")
      turtle.begin_fill()
      turtle.circle(5)
      turtle.end_fill()
      turtle.done()
      ```
      使用`circle(5)`表示绘制半径为5的圆，并使用`begin_fill()`和`end_fill()`填充为红色。这是正确的。
    
    - 选项C：
      ```python
      import turtle
      turtle.pencolor("red")
      turtle.dot(10)
      turtle.done()
      ```
      设置画笔颜色为红色，然后使用`dot(10)`绘制半径为5的圆点。这是正确的。
    
    - 选项D：
      ```python
      import turtle
      turtle.color("red")
      turtle.dot(5)
      turtle.done()
      ```
      使用`dot(5)`表示绘制直径为5的圆点，即半径为2.5的圆点，而题目要求半径为5的圆点。这是不正确的。
    
    - 因此，不正确的选项是D。
    :::
:::important 单选题8
下列指令可以方便将画笔设置回到初始位置和初始方向的是？（ ）(2分)

- A. [+下列指令可以方便将画笔设置回到初始位置和初始方向的是？]
```python
turtle.home()
```
- B. 
```python
turtle.clear()
```
- C. 
```python
turtle.goto()
```
- D. 
```python
turtle.setup()
```
:::
[+下列指令可以方便将画笔设置回到初始位置和初始方向的是？]:
    :::note 解析
    - 选项A：`turtle.home()` 函数用于将海龟返回到原点（坐标0,0）并设置朝向为起始朝向（通常是向右，即东方向）。这正是题目所要求的"将画笔设置回到初始位置和初始方向"的功能。因此，这是正确答案。
    
    - 选项B：`turtle.clear()` 函数用于清除海龟在屏幕上绘制的所有图，但不会移动海龟的位置或改变其朝向。它只清除绘图，不会重置海龟的位置和方向。
    
    - 选项C：`turtle.goto()` 函数需要提供坐标参数（如`turtle.goto(x,y)`），用于将海龟移动到指定的坐标位置。没有参数的`turtle.goto()`会导致语法错误。此外，即使提供了原点坐标`turtle.goto(0,0)`，它也只会改变位置而不会重置朝向。
    
    - 选项D：`turtle.setup()` 函数用于设置绘图窗口的大小和位置，与海龟的位置和方向无关。通常的形式是`turtle.setup(width, height, startx, starty)`，用于配置窗口尺寸和起始位置。
    
    - 综上所述，只有`turtle.home()`函数可以同时将海龟位置重置到原点并恢复初始朝向，符合题目要求。
    :::
:::important 单选题9
如图所示，turtle.circle(100)是绘制一个半径为100的圆，请问画笔从以下哪个点出发开始绘制的？（ ）(2分)

- A. A [+如图所示，turtle.circle(100)是绘制一个半径为100的圆，请问画笔从以下哪个点出发开始绘制的？]
- B. B
- C. C
- D. D
:::
[+如图所示，turtle.circle(100)是绘制一个半径为100的圆，请问画笔从以下哪个点出发开始绘制的？]:
    :::note 解析
    - 在turtle模块中，`turtle.circle(radius)`函数用于绘制一个指定半径的圆
    - 绘制圆的起点取决于海龟当前的位置和朝向
    - 默认情况下，海龟从当前位置开始，沿着其朝向的左侧（逆时针）绘制圆
    - 具体来说，海龟会在其当前位置的左侧radius单位处找到圆心，然后绘制圆
    - 从图中可以看出：
      - 点A处有一个小箭头，表示海龟的初始位置和朝向（朝右）
      - 从海龟的角度，圆是从其当前位置（点A）开始绘制的
      - 绘制方向是逆时针，依次经过D、C、B，最后回到A
    - 因此，画笔从点A出发开始绘制圆
    - 正确答案是A
    :::
:::important 单选题10
Python自带的集成开发环境是？（ ）(2分)

- A. iPython
- B. Dev-C++
- C. Visual Studio Code
- D. IDLE [+Python自带的集成开发环境是？]
:::
[+Python自带的集成开发环境是？]:
    :::note 解析
    - IDLE (Integrated Development and Learning Environment) 是Python官方自带的集成开发环境
    - IDLE是Python安装包自带的，不需要额外安装，它为Python初学者提供了一个简单的编程环境
    - IDLE具有语法高亮、代码补全、智能缩进和基本调试功能
    - 其他选项分析：
      - iPython：是一个增强的交互式Python Shell，提供了丰富的功能，但它不是Python官方自带的IDE
      - Dev-C++：是用于C/C++编程的集成开发环境，与Python无关
      - Visual Studio Code：是微软开发的代码编辑器，虽然可以通过扩展支持Python开发，但它不是Python自带的
    - 因此，Python自带的集成开发环境是IDLE，正确答案是D
    :::
:::important 单选题11
下面哪条语句不能输出：原创精神：自主可控！自主可控！自主可控！（ ）(2分)

- A. 
```python
print("原创精神：自主可控！自主可控！自主可控！")
```

- B. 
```python
print("原创精神："+"自主可控！"*3)
```

- C. [+下面哪条语句不能输出：原创精神：自主可控！自主可控！自主可控！]
```python
print("原创精神：自主可控！"*3)
```


- D. 
```python
print("原创精神："+"自主可控！"*2+"自主可控！")
```
:::
[+下面哪条语句不能输出：原创精神：自主可控！自主可控！自主可控！]:
    :::note 解析
    - 题目要求找出不能输出"原创精神：自主可控！自主可控！自主可控！"的语句
    
    - 选项A：`print("原创精神：自主可控！自主可控！自主可控！")`
      - 直接打印完整字符串，可以正确输出目标内容
    
    - 选项B：`print("原创精神："+"自主可控！"*3)`
      - 拼接字符串"原创精神："和重复3次的"自主可控！"
      - 结果为"原创精神：自主可控！自主可控！自主可控！"
      - 可以正确输出目标内容
    
    - 选项C：`print("原创精神：自主可控！"*3)`
      - 将"原创精神：自主可控！"整个字符串重复3次
      - 结果为"原创精神：自主可控！原创精神：自主可控！原创精神：自主可控！"
      - 这与目标输出不符
    
    - 选项D：`print("原创精神："+"自主可控！"*2+"自主可控！")`
      - 拼接字符串"原创精神："、重复2次的"自主可控！"和1次"自主可控！"
      - 结果为"原创精神：自主可控！自主可控！自主可控！"
      - 可以正确输出目标内容
    
    - 因此，只有选项C不能输出要求的内容，正确答案是C
    :::
:::important 单选题12
在 IDLE 开发环境中，默认是以多少个空格作为代码的基本缩进单位？（ ）(2分)

- A. 1
- B. 2
- C. 3
- D. 4 [+在IDLE开发环境中，默认是以多少个空格作为代码的基本缩进单位？]
:::
[+在IDLE开发环境中，默认是以多少个空格作为代码的基本缩进单位？]:
    :::note 解析
    - Python的代码块结构依赖于缩进，而不是像其他语言使用的大括号{}
    - 在IDLE (Integrated Development and Learning Environment)中，默认的缩进是4个空格
    - 当你在IDLE中按下Tab键时，编辑器会自动插入4个空格，而不是制表符(Tab字符)
    - 这种4空格的缩进也符合PEP 8(Python的官方代码风格指南)的推荐
    - PEP 8建议使用4个空格进行缩进，并且不要使用制表符，以保持代码的一致性和可读性
    - 虽然Python解释器允许任意数量的空格作为缩进，但4个空格是最常见的约定
    - 因此，IDLE默认的缩进单位是4个空格，正确答案是D
    :::
:::important 单选题13
turtle绘图中，设置画布高度500像素，宽度500像素，初始位置为(0,0)的代码是？（ ）(2分)

- A. 
```python
turtle.screensize(500,500,0,0)
```

- B. 
```python
turtle.screensize(0,0,500,500)
```

- C. 
```python
turtle.setup(0,0,500,500)
```

- D. [+turtle绘图中，设置画布高度500像素，宽度500像素，初始位置为(0,0)的代码是？]
```python
turtle.setup(500,500,0,0)
```

:::
[+turtle绘图中，设置画布高度500像素，宽度500像素，初始位置为(0,0)的代码是？]:
    :::note 解析
    - 在Python的turtle模块中，有两个主要函数可以设置画布大小：`turtle.screensize()`和`turtle.setup()`
    
    - `turtle.screensize(width, height, backgroundcolor)`：
      - 这个函数设置的是画布的大小（可绘制区域），而不是窗口的大小
      - 它只接受三个参数：宽度、高度和背景颜色
      - 它不能设置初始位置
    
    - `turtle.setup(width, height, startx, starty)`：
      - 这个函数设置的是整个窗口的大小和位置
      - 参数width和height指定窗口的宽度和高度
      - 参数startx和starty指定窗口的初始位置（窗口左上角相对于屏幕左上角的位置）
    
    - 分析选项：
      - 选项A `turtle.screensize(500,500,0,0)`：`screensize`函数最多接受3个参数，这里有4个参数，语法错误
      - 选项B `turtle.screensize(0,0,500,500)`：同样是参数数量错误
      - 选项C `turtle.setup(0,0,500,500)`：参数顺序错误，前两个参数应该是宽高，后两个是位置
      - 选项D `turtle.setup(500,500,0,0)`：正确设置了窗口宽高为500x500，初始位置为(0,0)
    
    - 因此，正确的选项是D `turtle.setup(500,500,0,0)`
    :::
:::important 单选题14
下列变量名正确的是？（ ）(2分)

- A. `54_name`
- B. `name?`
- C. `_name` [+下列变量名正确的是？]
- D. `'name'`
:::
[+下列变量名正确的是？]:
    :::note 解析
    - Python变量命名规则：
      1. 变量名只能包含字母、数字和下划线
      2. 变量名不能以数字开头
      3. 变量名区分大小写
      4. 变量名不能是Python关键字
    
    - 选项分析：
      - 选项A `54_name`：变量名以数字开头，违反了规则2，不正确
      - 选项B `name?`：变量名包含特殊字符`?`，违反了规则1，不正确
      - 选项C `_name`：变量名以下划线开头，包含字母，完全符合Python变量命名规则，正确
      - 选项D `'name'`：带引号的是字符串字面量，不是变量名，不正确
    
    - 在Python中，以下划线开头的变量名有特殊含义：
      - 单下划线开头（如`_name`）通常表示该变量是内部使用的，不应该被直接访问
      - 双下划线开头（如`__name`）用于类的私有属性
      - 双下划线开头和结尾（如`__name__`）是Python的特殊方法或属性
    
    - 尽管`_name`有特殊含义，但它在语法上是完全合法的变量名
    
    - 因此，正确答案是C
    :::
:::important 单选题15
想要计算456除以138的余数，可以使用的符号是？（ ）(2分)

- A. *
- B. % [+想要计算456除以138的余数，可以使用的符号是？]
- C. //
- D. #
:::
[+想要计算456除以138的余数，可以使用的符号是？]:
    :::note 解析
    - Python中的算术运算符：
      - `+` 加法运算
      - `-` 减法运算
      - `*` 乘法运算
      - `/` 除法运算，返回浮点数结果
      - `//` 整除运算，返回商的整数部分（向下取整）
      - `%` 取模运算，返回除法的余数
      - `**` 幂运算
    
    - 选项分析：
      - 选项A `*`：乘法运算符，用于计算两数的乘积，不能用于计算余数
      - 选项B `%`：取模运算符（模运算符），正是用于计算除法的余数
      - 选项C `//`：整除运算符，用于计算除法结果的整数部分，不返回余数
      - 选项D `#`：在Python中是注释符号，不是算术运算符
    
    - 要计算456除以138的余数，可以使用：
      ```python
      456 % 138
      ```
    - 执行结果为42（因为456 = 138 × 3 + 42）
    
    - 因此，正确答案是B
    :::
:::important 单选题16
下列运算符中，优先级最高的是？（ ）(2分)

- A. !=
- B. and
- C. *=
- D. * [+下列运算符中，优先级最高的是？]
:::
[+下列运算符中，优先级最高的是？]:
    :::note 解析
    - Python中运算符的优先级从高到低大致为：
      1. 括号运算符：`()`
      2. 幂运算符：`**`
      3. 一元运算符：`+x`, `-x`, `~x`
      4. 乘除模运算符：`*`, `/`, `//`, `%`
      5. 加减运算符：`+`, `-`
      6. 位移运算符：`<<`, `>>`
      7. 位运算符：`&`, `^`, `|`
      8. 比较运算符：`==`, `!=`, `>`, `>=`, `<`, `<=`, `is`, `is not`, `in`, `not in`
      9. 逻辑非：`not`
      10. 逻辑与：`and`
      11. 逻辑或：`or`
      12. 赋值运算符：`=`, `+=`, `-=`, `*=`, `/=` 等
    
    - 选项分析：
      - 选项A `!=`：比较运算符，优先级在第8级
      - 选项B `and`：逻辑与运算符，优先级在第10级
      - 选项C `*=`：赋值运算符，优先级在第12级（最低）
      - 选项D `*`：乘法运算符，优先级在第4级
    
    - 根据以上分析，这四个运算符中，乘法运算符`*`的优先级最高
    
    - 因此，正确答案是D
    :::
:::important 单选题17
已知变量a = 7，b = 8，执行语句a *= a + b后，变量a的值为？（ ）(2分)

- A. 15
- B. 22
- C. 8
- D. 105 [+已知变量，执行语句后，变量a的值为？]
:::
[+已知变量执行语句后，变量a的值为？]:
    :::note 解析
    - 语句`a *= a + b`是复合赋值运算符，等价于`a = a * (a + b)`
    - 计算过程如下：
      1. 初始值：a = 7, b = 8
      2. 计算a + b：7 + 8 = 15
      3. 计算a * (a + b)：7 * 15 = 105
      4. 将结果赋值给a：a = 105
    
    - 需要注意的是，`*=`运算符的含义是"将当前变量的值与右侧表达式的值相乘，然后将结果赋值给当前变量"
    - 不要将`a *= a + b`错误理解为`a = a * a + b`，正确的展开式是`a = a * (a + b)`
    
    - 执行语句后，变量a的值为105
    
    - 因此，正确答案是D
    :::
:::important 单选题18
关于下面程序，描述正确的是？（ ）(2分)
```python
import turtle
turtle.goto(100,100)
turtle.goto(100,-100)
turtle.goto(-100,-100)
turtle.goto(-100,100)
```

- A. 运行代码后，会画出一个正方形。
- B. 运行代码后，会画出一个正方形以及一条从(0, 0)到(100, 100)的连线。
- C. 运行代码后，turtle面朝方向是水平向右。 [+关于下面程序，描述正确的是？]
- D. 运行代码后，turtle面朝方向是垂直向上。
:::
[+关于下面程序，描述正确的是？]:
    :::note 解析
    - 代码分析：
      1. `import turtle`：导入turtle模块
      2. `turtle.goto(100,100)`：从原点(0,0)移动到坐标(100,100)
      3. `turtle.goto(100,-100)`：从(100,100)移动到(100,-100)
      4. `turtle.goto(-100,-100)`：从(100,-100)移动到(-100,-100)
      5. `turtle.goto(-100,100)`：从(-100,-100)移动到(-100,100)
    
    - 这段代码会让海龟依次移动到四个坐标点，形成一个正方形加上从原点到第一个点的连线
    
    - 关于海龟的朝向：
      - 在Python的turtle模块中，使用`goto()`命令只会改变海龟的位置，不会改变其朝向
      - 海龟的默认初始朝向是水平向右（东方向）
      - 只有使用特定的命令才会改变海龟的朝向，例如：
        * `turtle.right()` 或 `turtle.rt()`：向右转
        * `turtle.left()` 或 `turtle.lt()`：向左转
        * `turtle.setheading()` 或 `turtle.seth()`：设置朝向
      - 在这段代码中没有使用任何改变朝向的命令
    
    - 因此，运行完这段代码后，海龟的位置是(-100,100)，而朝向仍然保持初始状态，即水平向右
    
    - 正确答案是C："运行代码后，turtle面朝方向是水平向右。"
    :::
:::important 单选题19
运行下列代码，输出区会打印出？（ ）(2分)
```python
a = int(3.2)
print(a)
```

- A. 3 [+运行下列代码，输出区会打印出？]
- B. 程序运行错误，没有输出。
- C. 3.3
- D. True
:::
[+运行下列代码，输出区会打印出？]:
    :::note 解析
    - 代码分析：
      1. `a = int(3.2)`：使用`int()`函数将浮点数3.2转换为整数
      2. `print(a)`：打印变量a的值
    
    - `int()`函数的作用是将数值转换为整数，对于浮点数，它会直接截断小数部分（向零取整），而不会进行四舍五入
    - 因此，`int(3.2)`的结果是3，而不是4
    
    - 需要注意的是：
      - 如果要进行四舍五入，应该使用`round()`函数，如`round(3.2)`的结果为3，`round(3.7)`的结果为4
      - 如果要向上取整，可以使用`math.ceil()`函数，如`math.ceil(3.2)`的结果为4
      - 如果要向下取整，可以使用`math.floor()`函数，如`math.floor(3.2)`的结果为3
    
    - 因此，运行这段代码后，输出区会打印出3
    
    - 正确答案是A
    :::
:::important 单选题20
下列关于python语言说法正确的是？（ ）(2分)

- A. Python采用代码缩进和冒号':'区分代码之间的层次。 [+下列关于python语言说法正确的是？]
- B. 在IDLE编写代码时，使用中文输入代码中的小括号或者双引号，任何位置都不会产生语法错误。
- C. Python32位和64位的安装包没有区别，可以任意使用一个。
- D. Pycharm和Microsoft Visual Studio都可以用来编写Python程序，但是语法和IDLE不一致。
:::
[+下列关于python语言说法正确的是？]:
    :::note 解析
    - 选项A：Python确实使用缩进和冒号来区分代码块和层次结构，而不是像其他语言（如C++、Java）使用大括号{}。正确的Python代码必须遵循严格的缩进规则，每个代码块（如if语句、循环、函数定义等）后跟冒号，之后的缩进代码为该块的内容。这是Python的基本语法特征。这个说法是正确的。
    
    - 选项B：在IDLE或任何Python编辑器中，使用中文输入法输入的括号、引号等可能是全角字符，与Python要求的ASCII半角字符不同，这会导致语法错误。Python代码应使用英文输入模式下的标点符号。这个说法是错误的。
    
    - 选项C：Python的32位和64位安装包确实有区别，它们适用于不同的操作系统架构。32位版本不能充分利用64位系统的内存和性能优势，而64位版本可能无法在32位系统上运行。选择合适的版本对于性能和兼容性很重要。这个说法是错误的。
    
    - 选项D：PyCharm、Visual Studio和IDLE都支持Python标准语法，因为它们都是基于Python解释器运行代码的。虽然这些IDE的界面、功能和便利性不同，但Python代码的语法在所有环境中都是一致的。这个说法是错误的。
    
    - 综上所述，只有选项A描述了Python语言的正确特征。
    :::
:::important 单选题21
小明家在A点的位置，学校在B点的位置，如果不走回头路，从A到B的路径共有几条？（ ）(2分)

- A. 1
- B. 2
- C. 4 [+小明家在A点的位置，学校在B点的位置，如果不走回头路，从A到B的路径共有几条？]
- D. 6
:::
[+小明家在A点的位置，学校在B点的位置，如果不走回头路，从A到B的路径共有几条？]:
    :::note 解析
    - 仔细观察题目图示，我们可以看到这是一个由两个环路组成的图形，类似于"∞"形状
    - 从A到B的路径需要分析两个环的所有可能组合
    
    - 可能的路径包括：
      1. 上环顺时针：从A出发，通过上环顺时针方向到达B
      2. 上环逆时针：从A出发，通过上环逆时针方向到达B
      3. 下环顺时针：从A出发，通过下环顺时针方向到达B
      4. 下环逆时针：从A出发，通过下环逆时针方向到达B
    
    - 因为每个环都可以有两个方向（顺时针和逆时针），且有两个环（上环和下环），所以总共有2×2=4条不同的路径
    
    - 需要特别注意的是"不走回头路"的限制，这意味着一旦选择了某个方向，就不能中途改变方向
    - 因此，从A点到B点且不走回头路的路径共有4条
    
    - 正确答案是C
    :::
:::important 单选题22
下列程序的输出结果是？（ ）(2分)
```python
a=4
b=3
c=2
print(a*b**c)
```

- A. 24
- B. 144
- C. 36 [+下列程序的输出结果是？]
- D. 12
:::
[+下列程序的输出结果是？]:
    :::note 解析
    - 程序代码分析：
      ```python
      a=4   # 变量a赋值为4
      b=3   # 变量b赋值为3
      c=2   # 变量c赋值为2
      print(a*b**c)  # 计算a*b**c并打印结果
      ```
    
    - 在Python中，运算符优先级从高到低的顺序为：
      1. 括号运算 `()`
      2. 幂运算 `**`
      3. 一元运算符（如正负号）
      4. 乘法、除法 `*`, `/`, `//`, `%`
      5. 加法、减法 `+`, `-`
      ...等等
    
    - 表达式`a*b**c`的计算顺序：
      1. 首先计算`b**c`，即`3**2 = 9`（3的平方）
      2. 然后计算`a*`上一步的结果，即`4*9 = 36`
    
    - 如果想要先计算`a*b`再进行幂运算，应该写成`(a*b)**c`，即`(4*3)**2 = 12**2 = 144`
    
    - 但在没有括号的情况下，根据Python的运算符优先级规则，正确结果应该是`36`
    
    - 因此，程序的输出结果是`36`，正确答案是C
    :::

:::important 单选题23
已知`a=4, b=2`,执行语句`a*=a-b`后，变量`a`的值是？（ ）(2分)

- A. 8 [+已知a=4,b=2,执行语句a*=a-b后，变量a的值是？]
- B. 2
- C. 14
- D. 16
:::
[+已知a=4,b=2,执行语句a*=a-b后，变量a的值是？]:
    :::note 解析
    - 代码分析：
      1. 初始值：`a = 4, b = 2`
      2. 执行语句：`a *= a-b`
    
    - 复合赋值运算符 `*=` 等价于 `a = a * (a-b)`
    - 计算步骤：
      1. 计算 `a-b`：`4-2 = 2`
      2. 计算 `a * (a-b)`：`4 * 2 = 8`
      3. 将结果赋值给a：`a = 8`
    
    - 注意不要错误理解为 `a = a * a - b`，正确的展开式是 `a = a * (a-b)`
    
    - 因此，执行语句`a *= a-b`后，变量`a`的值是`8`
    
    - 正确答案是A
    :::
:::important 单选题24
`print(20 or 15<20)`的输出结果为?（ ）(2分)

- A. `True`
- B. `False`
- C. `20` [+print(20or15<20)的输出结果为?]
- D. `15`
:::
[+print(20or15<20)的输出结果为?]:
    :::note 解析
    - 表达式`20 or 15<20`涉及逻辑运算符`or`和比较运算符`<`
    - 在Python中，运算符优先级从高到低依次为：
      1. 比较运算符（如`<`, `>`, `==`等）
      2. 逻辑非`not`
      3. 逻辑与`and`
      4. 逻辑或`or`
    
    - 因此，表达式`20 or 15<20`会先计算`15<20`，再计算整个`or`表达式
    - `15<20`的结果为`True`
    - 所以整个表达式变为`20 or True`
    
    - 在Python中，`or`运算符的特性是:
      - 如果左操作数为真值（非零、非空、非None），则返回左操作数
      - 如果左操作数为假值，则返回右操作数
    
    - 数字`20`是一个非零值，在Python中被视为真值
    - 因此`20 or True`会直接返回左操作数`20`，而不进行后续计算
    
    - 最终，`print(20 or 15<20)`会输出`20`
    
    - 正确答案是C
    :::
:::important 单选题25
在式子：2（）2；中间括号里填写哪个数学运算符，结果不等于4?（ ）(2分)

- A. `//` [+在式子：2（）2；中间括号里填写哪个数学运算符，结果不等于4?]
- B. `**`
- C. `*`
- D. `+`
:::
[+在式子：2（）2；中间括号里填写哪个数学运算符，结果不等于4?]:
    :::note 解析
    - 题目要求在`2()2`中间填入一个数学运算符，使结果不等于4
    - 分析每个选项：
    
    - 选项A: `2 // 2`
      - `//`是整除运算符，表示除法后取整数部分（向下取整）
      - `2 // 2 = 1`，不等于4
    
    - 选项B: `2 ** 2`
      - `**`是幂运算符，表示乘方
      - `2 ** 2 = 4`，等于4
    
    - 选项C: `2 * 2`
      - `*`是乘法运算符
      - `2 * 2 = 4`，等于4
    
    - 选项D: `2 + 2`
      - `+`是加法运算符
      - `2 + 2 = 4`，等于4
    
    - 从以上分析可以看出，只有选项A`2 // 2 = 1`的结果不等于4，其他选项的结果都等于4
    
    - 因此，正确答案是A
    :::
### 2209判断题
:::important 判断题1
`then`属于Python的保留字。（ ）(2分)

- 正确
- 错误 [+then属于Python的保留字]
:::
[+then属于Python的保留字]:
    :::note 解析
    - Python的保留字（关键字）是语言中具有特殊含义的单词，不能用作变量名、函数名或其他标识符
    - Python的保留字包括：`False`, `None`, `True`, `and`, `as`, `assert`, `async`, `await`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `try`, `while`, `with`, `yield`等
    - 可以通过Python内置模块`keyword`查看所有保留字：
      ```python
      import keyword
      print(keyword.kwlist)
      ```
    - `then`不在Python的保留字列表中
    - 在Python的条件语句中，使用`if...elif...else`结构，没有`then`关键字
    - 因此，`then`不属于Python的保留字，这一说法是错误的
    :::
:::important 判断题2
在Python shell中输出"Hello，我的新朋友，很高兴认识你!"，正确的语句是`print(Hello，我的新朋友，很高兴认识你！)`。（ ）(2分)

- 正确
- 错误 [+在中输出正确的语句是我的新朋友，很高兴认识你！)]
:::
[+在中输出正确的语句是我的新朋友，很高兴认识你！)]:
    :::note 解析
    - 在Python中，`print()`函数用于输出内容到标准输出（通常是屏幕）
    - 当需要输出字符串时，字符串必须用引号括起来，可以使用单引号`'...'`或双引号`"..."`
    - 给出的语句`print(Hello，我的新朋友，很高兴认识你！)`存在几个问题：
      1. 字符串没有用引号括起来，Python会将`Hello`视为一个变量名而非字符串
      2. 使用了中文逗号`，`作为分隔符，而Python的语法要求使用英文逗号`,`
      3. 末尾使用了中文感叹号`！`而非英文感叹号`!`
    
    - 正确的写法应该是：
      ```python
      print("Hello，我的新朋友，很高兴认识你!")
      ```
      或
      ```python
      print('Hello，我的新朋友，很高兴认识你!')
      ```
    
    - 因此，题目中给出的语句不正确，这一说法是错误的
    :::
:::important 判断题3
在Python中，`"2022"`与2022都属于字符串。（ ）(2分)

- 正确
- 错误 [+在Python中，与2022都属于字符串]
:::
[+在Python中，与2022都属于字符串]:
    :::note 解析
    - 在Python中，数据类型是根据其表示方式来确定的
    - `"2022"`：用引号（单引号或双引号）括起来的内容被识别为字符串（str类型）
    - `2022`：不带引号的数字被识别为整数（int类型）
    
    - 可以通过`type()`函数验证：
      ```python
      print(type("2022"))  # 输出：<class 'str'>
      print(type(2022))    # 输出：<class 'int'>
      ```
    
    - 两者虽然表示相同的数值，但它们的数据类型不同，处理方式也不同：
      - 字符串可以进行字符串操作，如拼接、切片等
      - 整数可以进行数学运算，如加减乘除等
    
    - 因此，`"2022"`是字符串，而`2022`是整数，它们不都属于字符串
    - 这一说法是错误的
    :::
:::important 判断题4
在turtle绘图中，默认的形状是一个小海龟，有些程序完成后需要将小海龟进行隐藏，可以使用`turtle.hideturtle()`将令进行隐藏。（ ）(2分)

- 正确 [+在turtle绘图中，默认的形状是一个小海龟，有些程序完成后需要将小海龟进行隐藏，可以使用turtle.hideturtle()将令进行隐藏]
- 错误
:::
[+在turtle绘图中，默认的形状是一个小海龟，有些程序完成后需要将小海龟进行隐藏，可以使用turtle.hideturtle()将令进行隐藏]:
    :::note 解析
    - 在Python的turtle模块中，绘图窗口中默认显示的光标确实是一个小海龟形状
    - turtle模块提供了多种形状，包括'arrow'（箭头）、'turtle'（海龟）、'circle'（圆形）、'square'（正方形）、'triangle'（三角形）和'classic'（经典箭头）
    - 默认情况下，使用的是'arrow'形状，但在许多环境中会自动设置为'turtle'（小海龟）形状
    - 当绘图完成后，有时确实需要隐藏海龟光标，以便更清晰地展示绘制的图形
    - `turtle.hideturtle()`函数（也可简写为`turtle.ht()`）正是用来隐藏海龟光标的正确方法
    - 如果需要再次显示海龟，可以使用`turtle.showturtle()`或`turtle.st()`函数
    
    - 因此，这个说法是正确的，`turtle.hideturtle()`确实可以用来隐藏海龟光标
    :::
:::important 判断题5
如果想要将`a=2`与`b=3`的两个变量赋值写在一行指令中，可以写成`a=2;b=3`的格式。（ ）(2分)

- 正确 [+如果想要将a=2与b=3的两个变量赋值写在一行指令中，可以写成a=2;b=3的格式]
- 错误
:::
[+如果想要将a=2与b=3的两个变量赋值写在一行指令中，可以写成a=2;b=3的格式]:
    :::note 解析
    - 在Python中，有多种方式可以在一行中写入多个语句
    - 使用分号`;`分隔是其中一种常见的方法，这种语法在Python中是有效的
    - 例如：`a=2;b=3`会先将变量`a`赋值为2，然后将变量`b`赋值为3
    
    - 除了使用分号，Python还提供了其他方式在一行中赋值多个变量：
      1. 多重赋值：`a, b = 2, 3`
      2. 链式赋值：`a = b = 2`（将同一个值赋给多个变量）
    
    - 虽然Python支持使用分号将多个语句写在一行，但这种做法在Python编程规范（PEP 8）中并不推荐
    - PEP 8建议每行只写一个语句，以提高代码的可读性
    
    - 尽管如此，从纯语法角度看，`a=2;b=3`在Python中是合法的语法
    - 因此，这个说法是正确的
    :::
:::important 判断题6
`print(type(6/1.8))` 输出结果为`<class "float">`。（ ）(2分)

- 正确 [+print(type(6/1.8))输出结果为float]
- 错误
:::
[+print(type(6/1.8))输出结果为float]:
    :::note 解析
    - 在Python中，除法运算符`/`执行的是浮点数除法，即使被除数和除数都是整数，结果也是浮点数
    - 表达式`6/1.8`中，被除数`6`是整数，除数`1.8`是浮点数
    - 计算`6/1.8`的结果是`3.3333333333333335`，这是一个浮点数
    - `type()`函数返回对象的类型
    - `type(6/1.8)`返回`<class 'float'>`，表示该对象的类型是浮点数
    
    - 需要注意的是，Python中浮点数的类型名称是`'float'`（带单引号），而题目中写的是`"float"`（带双引号）
    - 但这不影响判断的正确性，因为单引号和双引号在Python字符串中基本等价
    
    - 另外，完整的输出应该是`<class 'float'>`，而不是题目描述的`<class "float">`
    - 尽管有这些细微的差异，题目的核心判断"表达式结果是浮点数类型"是正确的
    
    - 因此，这个说法从本质上讲是正确的
    :::
:::important 判断题7
运行下面代码，可以在海龟画图窗口上画一个黑色边框、红色填充的圆。（ ）(2分)
```python
import turtle
turtle.penup()
turtle.begin_fill()
turtle.color('black', 'red')
turtle.circle(100)
turtle.end_fill()
turtle.pendown()
turtle.forward(100)
```

- 正确
- 错误 [+运行下面代码，可以在海龟画图窗口上画一个黑色边框、红色填充的圆]
:::
[+运行下面代码，可以在海龟画图窗口上画一个黑色边框、红色填充的圆]:
    :::note 解析
    - 分析给定的代码：
      1. `import turtle` - 导入turtle模块
      2. `turtle.penup()` - 抬起画笔，移动时不会留下轨迹
      3. `turtle.begin_fill()` - 开始记录要填充的多边形
      4. `turtle.color('black', 'red')` - 设置画笔颜色为黑色，填充颜色为红色
      5. `turtle.circle(100)` - 绘制半径为100的圆
      6. `turtle.end_fill()` - 结束填充
      7. `turtle.pendown()` - 放下画笔
      8. `turtle.forward(100)` - 向前移动100个单位
    
    - 关键问题在于：在绘制圆时，画笔是抬起的（`penup`），因此实际上不会绘制出圆的黑色边框
    - 虽然设置了画笔颜色为黑色和填充颜色为红色，但由于画笔抬起，只会绘制一个红色填充的圆，没有黑色边框
    
    - 为了正确地绘制一个黑色边框、红色填充的圆，代码应该调整为：
      ```python
      import turtle
      turtle.color('black', 'red')  # 设置画笔颜色和填充颜色
      turtle.begin_fill()           # 开始填充
      turtle.circle(100)            # 绘制圆
      turtle.end_fill()             # 结束填充
      ```
    
    - 因此，题目中的描述"可以在海龟画图窗口上画一个黑色边框、红色填充的圆"是错误的
    - 实际上，代码会画出一个红色填充的圆（没有黑色边框），然后在圆的某个位置向前画一条长度为100的直线
    :::
:::important 判断题8
可以用运算符`*`连接两个字符串，表示将两个字符串拼接到一起。（ ）(2分)

- 正确
- 错误 [+可以用运算符*连接两个字符串，表示将两个字符串拼接到一起]
:::
[+可以用运算符*连接两个字符串，表示将两个字符串拼接到一起]:
    :::note 解析
    - 在Python中，字符串连接（拼接）使用的运算符是`+`，而不是`*`
    - 例如：`"Hello" + "World"`的结果是`"HelloWorld"`
    
    - 运算符`*`在字符串操作中的作用是重复字符串，即将字符串重复指定的次数
    - 例如：`"Hello" * 3`的结果是`"HelloHelloHello"`
    
    - `*`运算符不能用于连接两个字符串，如果尝试`"Hello" * "World"`，Python会报错：
      `TypeError: can't multiply sequence by non-int of type 'str'`
    
    - 这是因为`*`运算符要求右操作数是一个整数，表示重复的次数
    
    - 因此，"可以用运算符`*`连接两个字符串，表示将两个字符串拼接到一起"这一说法是错误的
    :::
:::important 判断题9
在Linux系统上可以运行python。（ ）(2分)

- 正确 [+在Linux系统上可以运行python]
- 错误
:::
[+在Linux系统上可以运行python]:
    :::note 解析
    - Python是一种跨平台的编程语言，可以在多种操作系统上运行，包括Windows、macOS和Linux
    - Linux是一个开源的操作系统，完全支持Python
    - 事实上，许多Linux发行版（如Ubuntu、Debian、CentOS等）默认预装了Python
    - 在Linux系统上，可以通过终端使用`python`或`python3`命令来运行Python解释器
    - 也可以使用文本编辑器创建Python脚本文件（.py），然后通过命令行或集成开发环境（IDE）运行
    - Linux系统也支持各种Python开发工具和IDE，如PyCharm、VSCode、Jupyter Notebook等
    - 许多Linux系统管理和自动化任务都使用Python脚本来完成
    
    - 因此，"在Linux系统上可以运行python"这一说法是完全正确的
    :::
:::important 判断题10
Python启动后显示的提示符是>>>（ ）(2分)

- 正确 [+Python启动后显示的提示符是>>>]
- 错误
:::
[+Python启动后显示的提示符是>>>]:
    :::note 解析
    - 当直接启动Python解释器（交互式环境）时，确实会显示`>>>`作为主提示符
    - 这个提示符表示Python解释器已准备好接收用户输入的代码或表达式
    - Python交互式环境是一个命令行界面，允许用户输入Python代码并立即执行和查看结果
    - 例如，启动Python解释器后，会看到类似以下界面：
      ```
      Python 3.x.x (default, xxx xx xxxx, xx:xx:xx)
      [GCC x.x.x] on linux
      Type "help", "copyright", "credits" or "license" for more information.
      >>>
      ```
    - 当输入多行代码块（如函数定义或循环）时，后续行会显示次要提示符`...`
    - 但主提示符确实是`>>>`
    
    - 因此，"Python启动后显示的提示符是>>>"这一说法是正确的
    :::
### 2209编程题
::::important 利用鞋码算出脚长(10分)
- **描述**
  - 请写一个程序，帮助大家利用鞋码算出脚长。
  - 1.先让用户输入自己的鞋码，并有提示语"请输入你的鞋码："，不需要包括单引号；
  - 2.计算鞋码，脚长 = (鞋码 + 10) / 2；
  - 3.输出脚长，并有提示语"你的脚长是(单位.厘米)："，不需要包括单引号。

- **评分标准**：
  - (1) 有输入语句： (3分)
  - (2) 有输出语句： (1分)
  - (3) 有类型转化语句，并且类型转换正确，否则该项分数为0； (2分)
  - (4) 有计算语句，并且计算正确，如果计算错误该项分数为0； (2分)
  - (5) 程序符合题目要求，运行正确。 (2分)

:::code-tabs
@tab Python
```python :collapsed-lines=5
# 获取用户输入的鞋码
shoe_size = input("请输入你的鞋码：")

# 将输入的鞋码转换为浮点数并计算脚长
# 公式：脚长 = (鞋码 + 10) / 2
shoe_size = float(shoe_size)  # 类型转换
foot_length = (shoe_size + 10) / 2  # 计算脚长

# 输出结果
print("你的脚长是(单位.厘米)：", foot_length)
```
:::
- 解析[+利用鞋码算出脚长(10分)]
[+利用鞋码算出脚长(10分)]:
    :::note 解析
    这个程序实现了根据鞋码计算脚长的功能。解题思路和关键步骤如下：

    1. **输入处理**：
       - 使用`input()`函数获取用户输入的鞋码
       - 函数参数中包含提示语"请输入你的鞋码："，符合题目要求

    2. **数据类型转换**：
       - 将用户输入的字符串使用`float()`函数转换为浮点数
       - 这一步非常关键，因为`input()`函数返回的始终是字符串类型，而数学计算需要数值类型

    3. **计算过程**：
       - 根据题目给出的公式：脚长 = (鞋码 + 10) / 2
       - 先将鞋码加10，然后除以2，得到脚长

    4. **结果输出**：
       - 使用`print()`函数输出计算结果
       - 输出包含提示语"你的脚长是(单位.厘米)："
       - 后面紧跟计算得到的脚长值
    :::
::::
::::important 绘制一个五角星(20分)
- **描述**
  - 按照要求绘制一个五角星
  - (1)海龟初始位置的坐标为(0,0);
  - (2)设置画笔大小为5;
  - (3)画笔颜色为红色(red);
  - (4)五角星填充颜色为黄色(yellow).
  - (5)五角星大小不限，但是整体画出来的五角星，并且完全在考试平台上都示出来。
  - 提示：五角星每个角为36度。
  - 本题主要考察海龟库的基础应用，掌握海龟的导入、前进、转向以及填充的知识。

:::code-tabs
@tab Python
```python :collapsed-lines=5
import turtle

# 初始化设置
turtle.penup()           # 抬起画笔，移动不留痕迹
turtle.goto(0, 0)        # 初始位置为原点(0,0)
turtle.pendown()         # 放下画笔，开始绘制

# 设置画笔属性
turtle.pensize(5)        # 设置画笔大小为5
turtle.color("red", "yellow")  # 设置画笔颜色为红色，填充颜色为黄色

# 开始填充
turtle.begin_fill()

# 绘制五角星
for _ in range(5):
    turtle.forward(100)  # 前进100个单位
    turtle.right(144)    # 向右转144度（五角星的每个外角为144度）

# 结束填充
turtle.end_fill()

# 隐藏海龟并结束
turtle.hideturtle()
turtle.done()
```
:::
- 解析[+绘制一个五角星(20分)]
[+绘制一个五角星(20分)]:
    :::note 解析
    这个程序绘制了一个五角星图形。解题思路和关键步骤如下：

    1. **初始化设置**：
       - 导入`turtle`模块，这是Python内置的绘图库
       - 使用`penup()`和`goto(0,0)`将海龟移动到原点，符合题目要求
       - 使用`pendown()`开始绘图

    2. **设置绘图参数**：
       - `pensize(5)`设置画笔粗细为5像素，符合题目要求
       - `color("red", "yellow")`设置画笔颜色为红色，填充颜色为黄色，符合题目要求

    3. **绘制五角星的数学原理**：
       - 五角星可以通过不断前进并转向特定角度来绘制
       - 每次绘制一条边后需要转向144度，而不是题目提示的36度
         (注：题目提示的36度可能指的是五角星内角，而实际绘制时需要用外角)
       - 144度是根据以下公式计算的：外角 = 180 - (内角/2)，其中五角星的每个内角为36度
       - 五次重复后，海龟回到起点，形成闭合的五角星

    4. **填充与完成**：
       - 使用`begin_fill()`和`end_fill()`在绘制前后调用，使图形被填充为黄色
       - 使用`hideturtle()`隐藏绘图完成后的海龟指针，使图形更美观
       - 使用`done()`保持窗口显示，直到用户关闭

    :::
::::
