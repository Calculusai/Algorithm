import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import  notes  from './notes/index.ts'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://images.hoshinoai.xin/icon/algorithm.webp',

  appearance: true,  // 配置 深色模式

  social: [
    {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.914 14.529a32 32 0 0 0-.676-1.886l-.91-2.246c.002-.026.013-.468.013-.696C18.34 5.86 16.508 2 12 2S5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246a32 32 0 0 0-.675 1.886c-.86 2.737-.581 3.87-.369 3.895c.455.054 1.771-2.06 1.771-2.06c0 1.224.637 2.822 2.016 3.976c-.515.157-1.147.399-1.554.695c-.365.267-.319.54-.253.65c.289.481 4.955.307 6.303.157c1.347.15 6.014.324 6.302-.158c.066-.11.112-.382-.253-.649c-.407-.296-1.039-.538-1.555-.695c1.379-1.154 2.016-2.752 2.016-3.977c0 0 1.316 2.115 1.771 2.06c.212-.025.49-1.157-.37-3.894"/></svg>', name: 'qq' },
        link: 'https://qm.qq.com/q/v7uNClxPLa'
      },
    { icon: 'github', link: 'https://github.com/Calculusai' },
  ],
  navbarSocialInclude: ['qq','github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 6], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '基于VuePress-plume, 由 <a href="https://hoshinoai.xin/" target="_blank">HoshinoAi</a> 设计与开发 ',
    copyright: 'Copyright©2025-HoshinoAi  <a href="https://beian.miit.gov.cn/" target="_blank">新ICP备2024016179号-1</a> <a href="https://beian.mps.gov.cn/" target="_blank">新公网安备65010902000905号</a>',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://images.hoshinoai.xin/icon/algorithm.webp',
    name: 'Algorithm',
    description: 'Algorithm',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
