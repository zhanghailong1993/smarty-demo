import { createApp } from 'vue/dist/vue.esm-browser'
import SmartyUI from './entry'

createApp({
  template: `
    <div>
      <div>
        <MyButton color="blue">蓝色按钮</MyButton>
        <MyButton color="green">绿色按钮</MyButton>
        <MyButton color="gray">灰色按钮</MyButton>
        <MyButton color="yellow">黄色按钮</MyButton>
        <MyButton color="red">红色按钮</MyButton>
      </div>
      <div>
        <MyButton color="blue" round plain icon="search" ></MyButton>
        <MyButton color="green" round plain icon="edit" ></MyButton>
        <MyButton color="gray" round plain icon="check" ></MyButton>
        <MyButton color="yellow" round plain icon="message" ></MyButton>
        <MyButton color="red" round plain icon="delete" ></MyButton>
      </div>
    </div>
  `
}).use(SmartyUI).mount('#app')