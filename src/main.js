import { createApp } from 'vue'
import Vue3SmoothScroll from 'vue3-smooth-scroll'
import router from './router/index'
import '~/assets/css/reset.css'
import '~/assets/css/modern-normalize.css'
import '~/assets/css/global.css'

import App from '~/app.vue'

createApp(App).use(router).use(Vue3SmoothScroll).mount('#app')
