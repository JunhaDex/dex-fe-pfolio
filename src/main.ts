import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import lang from '@/assets/langs/i18n.json'

const app = createApp(App)
const i18n = createI18n({
  locale: 'en',
  messages: lang
})
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
