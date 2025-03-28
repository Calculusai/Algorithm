import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '算法系列', link: '/notes/algorithm/README.md'},
  //{ text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  {
    text: '考级系列',
    items: [
            { text: '考级系列 V1.0', link: '/notes/qceitseries/README.md' },
      ]
  },
])
