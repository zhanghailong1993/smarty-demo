import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import SmartyUI from '../../../src/entry'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.use(SmartyUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}