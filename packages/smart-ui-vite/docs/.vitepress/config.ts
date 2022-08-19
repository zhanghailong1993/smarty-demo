const sidebar = {
  '/': [
    {
      text: '介绍',
      link: '/'
    },
    {
      text: '通用',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/'
        }
      ]
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" }
  ]
}

export default {
  title: '🔨  Smarty-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    sidebar
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}