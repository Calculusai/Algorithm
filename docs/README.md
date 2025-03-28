
---
home: true
config:
  -
    type: doc-hero
    hero:
      name: Python C++ 
      text: Algorithm
      tagline: 在这里, 你可以深入探索 Python 和 C++ 在各类算法实现中的精妙之处
      image: https://images.hoshinoai.xin/icon/algorithm.webp
      actions:
        -
          theme: brand
          text: H.AiWeb →
          link: https://web.hoshinoai.xin
        -
          theme: alt
          text: 算法系列
          link: /algorithm/
        -
          theme: alt
          text: 考级系列
          link: /qceitseries/

  -
    type: features
    features:
        -
          title: Python
          icon: logos:python
          details: Python算法指的是运用Python语言实现的一系列解决特定问题的步骤与方法，涵盖排序、搜索、图算法等。  
        -
          title: C++
          icon: skill-icons:cpp
          details: C++信奥赛算法是以C++语言为工具，用于解决信息学奥林匹克竞赛中各类问题的方法和策略，涉及搜索、动态规划、图论等众多算法思想。 
        -
          title: Markdown 增强
          icon: 📝
          details: 支持 Markdown 语法，支持 代码块分组、提示容器、任务列表、数学公式、代码演示等
        -
          title: 双色主题
          icon: 👨‍💻
          details: 支持 浅色/深色 主题，包括代码高亮
  -
    type: image-text
    title: 最新功能
    description: 基于vuepress，作用于各类语言算法文档。
    image: http://images.hoshinoai.xin/algorithm/新功能效果.svg
    list:
      -
        title: 文档
        description: 查看文档标签、分类、字数统计、阅读时间、写作日期等信息。
      -
        title: 评论
        description: 支持 Artalk 评论系统。
      -
        title: 搜索
        description: 支持基于 minisearch 的本地搜索， 支持Algolia搜索。
      -
        title: 加密
        description: 支持全站加密、部分加密（加密目录、加密文章）。
      -
        title: 代码复制
        description: 一键复制代码块中的内容
  -
    type: text-image
    title: 新功能预测
    description: 文档目前支持Python语言，后续支持更多语言。
    image: http://images.hoshinoai.xin/algorithm/新功能预测.svg
    list:
      -
        title: 可视化
        description: 通过Python Tutor 查看算法代码运行过程。
      - 
        title: C++
        description: 算法部分加入C++代码实现。
  -
    type: custom
  -
    type: profile
    name: HoshinoAi
    description: 驰而不息，到达他所向的目标。
    avatar: https://hoshinoai.xin/upload/61c2d78e-aa5b-4e71-a938-d228f936a638.png

---

### 壹段算法

:::code-tabs
@tab Python
```Python
num1 = 5
num2 = 3
result = num1 + num2
print(result)
```
@tab C++
```cpp
#include <iostream>
int main() {
    int num1 = 5;
    int num2 = 3;
    int result = num1 + num2;
    std::cout << result << std::endl;
    return 0;
}
```
:::

### 壹段对比
:::echarts Python 与 C++ 近十年使用量波动趋势可视化
```js
        // 获取 DOM 元素

        const oneMonth = 30 * 86400000; // 大致一个月的毫秒数
        const pythonData = [];
        const cppData = [];

        // 初始时间设置为2015年1月1日
        let currentDate = new Date(2015, 0, 1);

        // 预计算的年度数据（基于TIOBE指数和Stack Overflow调查）
        const usageData = {
            python: [
                { year: 2015, value: 4.8 },
                { year: 2016, value: 5.6 },
                { year: 2017, value: 7.9 },
                { year: 2018, value: 10.3 },
                { year: 2019, value: 11.2 },
                { year: 2020, value: 11.6 },
                { year: 2021, value: 12.7 },
                { year: 2022, value: 13.5 },
                { year: 2023, value: 14.3 },
                { year: 2024, value: 23.84 } // 2024年12月数据
            ],
            cpp: [
                { year: 2015, value: 15.3 },
                { year: 2016, value: 14.8 },
                { year: 2017, value: 14.1 },
                { year: 2018, value: 13.5 },
                { year: 2019, value: 12.8 },
                { year: 2020, value: 12.1 },
                { year: 2021, value: 11.5 },
                { year: 2022, value: 10.9 },
                { year: 2023, value: 10.3 },
                { year: 2024, value: 10.82 } // 2024年12月数据
            ]
        };

        // 生成每月的数据点，添加随机起伏
        function generateMonthlyData(languageData) {
            const data = [];
            languageData.forEach(({ year, value }) => {
                for (let month = 0; month < 12; month++) {
                    const randomFluctuation = (Math.random() - 0.5) * 2; // -1 到 1 之间的随机数
                    const monthValue = value + randomFluctuation;
                    const monthDate = new Date(year, month, 1);
                    data.push({
                        name: monthDate.toString(),
                        value: [
                            [monthDate.getFullYear(), monthDate.getMonth() + 1, monthDate.getDate()].join('/'),
                            monthValue
                        ]
                    });
                }
            });
            return data;
        }

        // 初始化数据
        pythonData.push(...generateMonthlyData(usageData.python));
        cppData.push(...generateMonthlyData(usageData.cpp));

        // 动态更新配置
        let currentIndex = 0;
        const updateInterval = setInterval(() => {
            if (myChart._disposed) return clearInterval(updateInterval);

            // 滚动更新数据（每次前进1个月）
            currentIndex = (currentIndex + 6) % pythonData.length;

            // 截取当前可见数据窗口（36个月）
            const visiblePython = pythonData.slice(currentIndex, currentIndex + 36);
            const visibleCpp = cppData.slice(currentIndex, currentIndex + 36);

            myChart.setOption({
                series: [
                    { name: 'Python', data: visiblePython },
                    { name: 'C++', data: visibleCpp }
                ]
            });
        }, 1000);

        const option = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    const date = new Date(params[0].name);
                    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}\nPython: ${params[0].value[1].toFixed(2)}%\nC++: ${params[1].value[1].toFixed(2)}%`;
                },
                axisPointer: { animation: false }
            },
            xAxis: { type: 'time', splitLine: { show: false } },
            yAxis: { type: 'value', splitLine: { show: false } },
            legend: { data: ['Python', 'C++'] },
            series: [
                {
                    name: 'Python',
                    type: 'line',
                    showSymbol: false,
                    data: pythonData.slice(0, 36)
                },
                {
                    name: 'C++',
                    type: 'line',
                    showSymbol: false,
                    data: cppData.slice(0, 36)
                }
            ]
        };

```
:::