import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import VueMitter from '@nguyenshort/vue3-mitt'

const app = createApp(App)

app.use(VueMitter) // 兄弟组件传值

app.use(createPinia())
app.use(router)

app.mount('#app')
