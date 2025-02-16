import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()

const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
