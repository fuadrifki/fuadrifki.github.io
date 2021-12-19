import 'reflect-metadata'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/index.scss'
import './assets/tailwind.css'
import VueGtag from 'vue-gtag'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import { PrimeVueLocale } from './components/misc/utils'

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
  .use(PrimeVue, {
    locale: {
      ...PrimeVueLocale
    }
  })
  .mount('#app')
