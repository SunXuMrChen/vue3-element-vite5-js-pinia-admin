import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css/normalize.css' // CSS重置
import '@/styles/index.scss' // global css

import 'default-passive-events'

import App from './App.vue'
import router from './router'
import store from './store'
import icons from './global/regester-icons'

const app = createApp(App)

// 为Vue的运行时警告指定一个自定义处理函数,开发模式下有效
app.config.warnHandler = () => null

app.use(icons)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
