import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.css'

import router from './router'
import pinia from './stores'

import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
