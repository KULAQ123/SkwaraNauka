import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiController from '@/axios/ApiControler'
import { createPinia } from 'pinia'

import './assets/main.scss'

const app = createApp(App)
app.config.globalProperties.$ApiController = new ApiController()

app.use(createPinia())

app.use(router)

app.mount('#app')
