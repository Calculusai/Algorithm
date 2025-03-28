import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'demo',
  link: '/demo/',
  sidebar: [
   {
      text: 'ceshi',
      prefix: '/demo/ceshi1', // 使用 prefix 拼接，可以简写 下面的 items 中的 link 为相对路径
      items: [
      // 可以混用 string 和 SidebarItem
        { text: 'ceshi22', link: 'ceshi1' },
      ],
    },
 ]
})