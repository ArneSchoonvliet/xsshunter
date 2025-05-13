import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGears, faFileCode, faFire, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
library.add([faGears, faGithub, faFileCode, faFire, faXTwitter, faCopy, faCheck])

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
