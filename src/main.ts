import 'reflect-metadata'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/index.scss'
import './assets/tailwind.css'
import VueGtag from 'vue-gtag'

const app = createApp(App)
app
  .use(router)
  .use(store)
  .use(
    VueGtag,
    {
      config: { id: 'G-3S225KW01Q' }
    },
    router
  )
  .mount('#app')
