import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const algorithm = defineNoteConfig({
  dir: 'algorithm',
  link: '/algorithm/',
  prefix: '/algorithm/',
  sidebar: [
    {
      text:'算法系列',
      icon:'cbi:ai',
      link: '/algorithm/',
      items:[
            //Foreword 开始
            {
            text:'第零章 序',
            prefix: '/algorithm/Foreword/',
            collapsed:true,
            icon:'fluent-color:bot-sparkle-16',
            items: [
                  'Foreword1', 
                  ],
            },
            //Foreword 结束
            //Searching 开始
            {
            text:'第一章 搜索算法',
            icon:'mingcute:search-ai-fill',
            collapsed:true,
            prefix: '/algorithm/Searching/',
            items: [
                  'Searching1', 
                  ],
            },
            //Searching 结束
            //Sorting 开始
            {
            text:'第二章 排序算法',
            icon:'icon-park-solid:sort',
            collapsed:true,
            prefix: '/algorithm/Sorting/',
            items: [
                  'Sorting1', 
                  ],
            },
            //Sorting 结束
            //Divide_and_Conquer 开始
            {
            text:'第三章 分治算法',
            icon:'iconoir:divide-solid',
            collapsed:true,
            prefix: '/algorithm/DivideandConquer/',
            items: [
                  'DivideandConquer1', 
                  ],
            },
            //Divide_and_Conquer 结束
            //Backtracking 开始
            {
            text:'第四章 回溯算法',
            icon:'line-md:backup-restore',
            collapsed:true,
            prefix: '/algorithm/Backtracking/',
            items: [
                  'Backtracking1', 
                  ],
            },
            //Backtracking 结束
            //Dynamic_Programming 开始
            {
            text:'第五章 动态规划',
            icon:'carbon:ibm-dynamic-route-server',
            collapsed:true,
            prefix: '/algorithm/DynamicProgramming/',
            items: [
                  'DynamicProgramming1', 
                  ],
            },
            //Dynamic_Programming 结束
            //Greedy_Algorithms 开始
            {
            text:'第六章 贪心算法',
            icon:'tabler:alien',
            collapsed:true,
            prefix: '/algorithm/GreedyAlgorithms/',
            items: [
                  'GreedyAlgorithms1', 
                  ],
            },
            //Dynamic_Programming 结束
            ],
    },
  ]
})

// ... other code

export default  algorithm;